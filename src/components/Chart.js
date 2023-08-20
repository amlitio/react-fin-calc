import { Line } from 'react-chartjs-2';

function Chart({principal, interest, years}) {

  const data = {
    labels: [...Array(years).keys()],
    datasets: [{ 
        data: // Use utils to calculate data
    }]
  }

  return (
    <Line 
      data={data}
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
    />
  )
}

export default Chart;
