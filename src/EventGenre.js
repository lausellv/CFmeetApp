import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {
  
  const colors = ["#61DBFB", "#F0DB4F", "#68A063", "#0868AC", "#B52E31)"];

  // const getData = () => {
  //   const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
  //   const data = genres.map(genre => {
  //     const value = events.filter(event => event.summary.split(" ").includes(genre)).length;
  //     return { name: genre, value };
  //   });
  //   return data;
  // };

  // useEffect(() => {
  //   setData(() => getData());
  // }, [events]);

  useEffect(() => {
    const getData = () => {
      const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
      const data = genres.map(genre => {
        const value = events.filter(event => event.summary.split(" ").includes(genre)).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  const [data, setData] = useState([]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend verticalAlign="top" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
