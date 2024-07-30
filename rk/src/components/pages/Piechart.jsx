import { Box, Typography } from "@mui/material";
import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { Grid } from '@mui/material';
import Side from "../Side";
const data = [
  { name: "network 1", value: 2 },
  { name: "network 3", value: 4 }
];

const Piechart = () => {
  return (
       
<Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <Box p={5}>
      <Box>
        <Typography variant="h4" color="primary">
          Pie Chart Analysis
        </Typography>
      </Box>

   
    <ResponsiveContainer width="100%" height={250}>
      <PieChart height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            console.log("handling label?");
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data[index].name} ({value})
              </text>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
    </Box>
    </Grid>
  </Grid>
   
  );
};

export default Piechart;
