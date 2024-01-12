import {useContext, useEffect, useState, useRef, lazy, Suspense} from 'react'
import React from 'react'
const LazyReactECharts = React.lazy(() => import('echarts-for-react'));

// const ReactECharts = lazy(() => import('echarts-for-react'))
import {sessionStore} from "../store.js";
import persistAxiosData from "./PersistAxios.jsx";
function Chart(props) {

    const {fetchData, loading, fetchRan, setFetchData, resetFetchData} = sessionStore((state) => ({
        fetchData: state.sessionState.fetchData,
        loading: state.sessionState.loading,
        fetchRan: state.sessionState.fetchRan,
        setFetchData: state.setFetchData,
        resetFetchData: state.resetFetchData,
    }));
    persistAxiosData('/lottery');

    function getDate() {
  const datesArray = fetchData?.map((item) => (
          new Date(item.date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
          })
  ))
  // console.log(datesArray)
  return datesArray;
}


    const chartOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: true },
      magicType: { show: false, type: ['line', 'bar'] },
      restore: { show: false },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['2/5', '3/5', '4/5', '5/5', 'Jackpot']
  },
  xAxis: [
    {
      type: 'category',
      data: getDate(),
      axisPointer: {
        type: 'none'
      }
    }
  ],
  yAxis: [

    {
      type: 'value',
      axisLine:{show:false},
      name: 'Winners',
      min: 0,
      max: 15000,
      interval: 1000,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      axisLine:{show:false},
      name: 'Jackpot',
      min: 0,
      max: 500000,
      interval: 20000,
      axisLabel: {
        formatter: '${value}'
      }
    }
  ],
  series: [
    {
      name: '2/5',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data : fetchData?.map((item) => (item.winners_2_of_5))
      // data : fetchData.map((item) => (item.winners_2_of_5))
    },
    {
      name: '3/5',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data: fetchData?.map((item) => (item.winners_3_of_5))
    },
    {
      name: '4/5',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data: fetchData?.map((item) => (item.winners_4_of_5))
    },
    {
      name: '5/5',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data: fetchData?.map((item) => (item.winners_5_of_5))
    },
    {
      name: 'Jackpot',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data: fetchData?.map((item) => (item.jackpot))
    }
  ]
};



    return (
        <>
            <div>test</div>
            {loading ? (
            <div>loading...</div>
          ) : (
            <Suspense fallback={<div></div>}>
              <LazyReactECharts option={chartOptions} style={{ height: '600px', width: '100%' }} />

            </Suspense>
          )}

        </>
    )
}

export default Chart;
