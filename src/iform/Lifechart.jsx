import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { PureComponent, useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { url } from '../api';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';
const useStyles = makeStyles({
// chart :{
//     marginTop:"70px"
// }
})
const Lifechart = () => {
    const classes = useStyles()
    const [chart, setChart] = useState([]);

    const dataList = async () => {
        const data = await axios.get(`${url}/policy/lifeDataView`)
        .then((res)=>{
            console.log(res.data.data)
            setChart(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        dataList()
    },[])
  return (
    
    <ResponsiveContainer width="80%" aspect={3}>
        <BarChart
          width={500}
          height={500}
          data={chart}
          margin={{
            top: 100,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            {console.log("================ this is chart data",chart)}
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="primumamount" fill="#8884d8" /> */}
          <Bar dataKey="primumamount" fill="#8884d8" />
          {/* <Bar dataKey="cover" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
      
  )
}

export default Lifechart