import {useContext, useEffect, useState, useRef, Profiler, useMemo} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import persistAxiosData from "./PersistAxios.jsx";



function Testing(props) {

    // persistAxiosData('/lottery');

    return (
        <div>
            <div>pdf testing</div>
          {/*   <embed
                src="http://localhost:3000/test/streamfile"
                type="application/pdf"
                style={{
                    width: "100%",
                    height: "100vh"
                }}
            /> */}
            <object data="http://localhost:3000/test/streamfile" type="application/pdf" width="600" height="800">
    <p>Alternative text - include a link <a href="http://localhost:3000/test/streamfile">to the PDF!</a></p>
</object>
        </div>
    )
}

export default Testing
