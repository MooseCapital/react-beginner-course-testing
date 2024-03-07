import {useContext, useEffect, useState, useRef, lazy, useCallback} from 'react'
import React from 'react'
import imageCompression from "browser-image-compression";
import {Slide, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useStore} from "../store.js";
import CircularProgress from "@mui/joy/CircularProgress";

function CompressImage(props) {
    //set the max file size and compression quality, or leave it to default 2MB with 90% quality
    const maxFileSize = 30;//size im megabytes -> 2MB

    const {imgLoading, setImgLoading,selectedImage,compressedImage,setCompressedImage,setSelectedImage  } = useStore((state) =>({
            imgLoading: state.imgLoading,
            setImgLoading: state.setImgLoading,
            selectedImage: state.selectedImage,
            compressedImage: state.compressedImage,
            setSelectedImage: state.setSelectedImage,
            setCompressedImage: state.setCompressedImage
    }));

    const handleReadFile = async (file) => {
        setImgLoading(true);
        const options = {
            maxSizeMB: 10,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            preserveExif: true,
            fileType: 'image/webp',
            initialQuality: 0.8,
            alwaysKeepResolution: true
        }

        try {
            const compressedFile = await imageCompression(file, options);
            const readerOriginal = new FileReader();
            const readerCompressed = new FileReader();
            console.log(`Original image size: ${(file.size / 1024 / 1024).toFixed(4)} MB, Image type: ${file.type}`);
            console.log(`Compressed image size: ${(compressedFile.size / 1024 / 1024).toFixed(4)} MB, Image type: ${compressedFile.type}`);
            readerOriginal.onloadend = () => setSelectedImage(readerOriginal.result);
            readerOriginal.readAsDataURL(file);

            readerCompressed.onloadend = () => setCompressedImage(readerCompressed.result);
            readerCompressed.readAsDataURL(compressedFile);

            setImgLoading(false);

        }
        catch (error) {
            setImgLoading(false);
            console.error('Error compressing image: ', error);
        }
    }

    const isFileSizeValid = (file) => {
        const maxSize = maxFileSize * 1024 * 1024; // 2MB

        return (!file || file.size <= maxSize); // No file or file size within limit.

    }
    const handleFileInput = e => {
        const file = e.target.files?.[0];
        //make a toast if file size is exceeded!
        // Check file size
        if (!isFileSizeValid(file)) {
            console.log(`Image exceeds the ${maxFileSize}MB limit`)
            toast.error(`Image exceeds the ${maxFileSize}MB limit`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                transition: Slide,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            e.target.value = null; // Clear the input
            return;
        } else if (file) {
            handleReadFile(file);
        }
    };

    const handleDrop = e => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        // Check file size
        if (!isFileSizeValid(file)) {
            console.log(`Image exceeds the ${maxFileSize}MB limit`)
            toast.error(`Image exceeds the ${maxFileSize}MB limit`, {
                position: "top-center",
                autoClose: 5000,
                transition: Slide,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Stop further execution of this function
        } else if (file) {
            handleReadFile(file);
        }
    };

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {imgLoading && <CircularProgress size="md" value={25} variant="soft"/>}
            {!imgLoading && <>
                <input type="file" accept="image/*" onChange={handleFileInput} style={{marginBottom: '1em'}}/>
            <h3>Or drag & drop image here</h3></>}

            <div style={{display: 'flex'}}>
                {selectedImage && !imgLoading &&
                    <img style={{maxWidth: '600px', maxHeight: '600px'}} src={selectedImage} alt="original"/>}
                {compressedImage && !imgLoading &&
                    <img style={{maxWidth: '600px', maxHeight: '600px'}} src={compressedImage} alt="compressed"/>}
            </div>
            <ToastContainer/>
        </div>
    );
}


export default CompressImage
