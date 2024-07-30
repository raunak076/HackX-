import React from 'react';
import { PieChart, Legend, Pie, Cell, Label } from 'recharts';

const DonutChart = () => {
    const data = [
        { name: 'Electronics', value: 100 },
        { name: 'Food', value: 300 },
        { name: 'Others', value: 200 },
        // Add more data entries as needed
      ];
      
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 
    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
    //     // return (
    //     //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //     //         {`${(percent * 100).toFixed(0)}%`}
    //     //     </text>
    //     // );
    // };

    return (
      <PieChart width={400} height={400} sx={{marginTop:"-30px"}}>
         <Legend layout="horizontal" verticalAlign="top" align="top" />
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60} // Set the inner radius for the donut chart
          outerRadius={80} // Set the outer radius for the donut chart
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
           <Label
        content={({ value }) => `${value}`}
        position="center"
      />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
          ))}
        </Pie>
      </PieChart>
    );
  };
  export default DonutChart;
  