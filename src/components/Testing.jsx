import React, {useContext, useEffect, useState, useRef, Profiler, useMemo, Suspense} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import persistAxiosData from "./PersistAxios.jsx";
import Chart from 'echarts-for-react'
import Skeleton from "react-loading-skeleton";


function Testing(props) {

    // persistAxiosData('/lottery');
    const chartOptions = {1: 1}
    return (
        <div>
            <div> testing</div>

        </div>
    )
}

export default Testing
