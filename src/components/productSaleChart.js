import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(CategoryScale, LinearScale, BarElement);
export const ProductSalesChart = ({data}) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',    
      year: 'numeric'
    });
    console.log("formattedDate :", formattedDate)
    const todaytData = data.filter((dta)=> dta.date == formattedDate);
    const chartData = {
      labels: todaytData.map(item => item.productName),
      datasets: [{
        label: 'Sales Amount',
        data: todaytData.map(item => item.salesAmount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }]
    };

    return <Bar data={chartData} />;
  };

//   return (
//     <div>
//       {data.length > 0 ? <ProductSalesChart /> : "Loading..."}
//     </div>
//   );
