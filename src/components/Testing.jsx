import React, {useContext, useEffect, useState, useRef, Profiler, useMemo, Suspense} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import persistAxiosData from "./PersistAxios.jsx";
import Chart from 'echarts-for-react'
import Skeleton from "react-loading-skeleton";


function Testing(props) {
    function errorTest() {
    throw new Error('testing error')

    }
    errorTest()
    return (
        <div>
            <div> testing</div>

        </div>
    )
}

export default Testing
