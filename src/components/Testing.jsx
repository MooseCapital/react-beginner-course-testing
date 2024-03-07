import React, {useContext, useEffect, useState, useRef, Profiler, useMemo, Suspense} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import persistAxiosData from "./PersistAxios.jsx";
import Chart from 'echarts-for-react'
import Skeleton from "react-loading-skeleton";
import {normalStore} from "../store.js";


function Testing(props) {
    const {counter, incrementCounter} = normalStore((state) =>({
            counter: state.counter,
            incrementCounter: state.incrementCounter
    }));

    function errorTest() {
    throw new Error('testing error')

    }

    if (counter > 0) {
        errorTest()
    }
    return (
        <div>
            <div> testing working</div>

        </div>
    )
}

export default Testing
