import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import _ from "lodash";

const GetProductsChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  const loadData = (data) => {
    if (!data) {
      return [];
    }
    const values = _.groupBy(data, (value) => value.name);

    const result = _.map(values, (value, key) => [
      key,
      _.sumBy(values[key], (v) => v.quantityInStock),
    ]);
    return [["Nome produto", "Vendas"], ...result];
  };

  useEffect(() => {
    setChartData(loadData(data?.content));
  }, [data]);

  console.log(chartData);
  console.log("data", data);

  const options = {
    series: [{ color: "#1A8763" }],
    intervals: { lineWidth: 1, barWidth: 1, styles: "boxes" },
    legend: "none",
  };

  return (
    <div>
      <h1> Gráficos React Chart...</h1>
      <Chart
        chartType="PieChart"
        data={chartData}
        width={"100%"}
        height={"400px"}
      />
      <div>
        <Chart
          chartType="LineChart"
          widht="100%"
          height="400px"
          data={chartData}
          options={options}
        />
      </div>
      {/* <div>
        <Chart 
            chartType="Line"
            width="100%"
            height="400px"
            data={chartData}
        />
      </div> */}
    </div>
  );
};

export default GetProductsChart;
