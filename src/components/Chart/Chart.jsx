import React ,{ useState,useEffect }from 'react';
import {fetchDailyData} from '../../api/index';
import {Line , Bar} from 'react-chartjs-2';

    const Chart = ({data:{ confirmed, recovered, deaths },country})=>{
        const [dailyData,setDailyData]= useState([]);

    useEffect(()=>{
        const fetchApiData = async()=>{
            setDailyData(await fetchDailyData())
        }
        fetchApiData();    
    });

    const lineChartValue = {
        labels: dailyData.map(({date})=> date),
        datasets: [
            {
            label: 'Infected',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(0, 0, 225, 0.5)',
            borderColor: 'rgb(128, 179, 255)',
            borderWidth: 1,
            data: dailyData.map(({confirmed})=> confirmed)
            },{
                label: 'Deaths',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(225, 0, 0, 0.5)',
                borderColor: 'rgb(255, 128, 128)',
                borderWidth: 1,
                data: dailyData.map(({deaths})=> deaths)
            }
        ]
    }

    const lineChart = (
        dailyData.length ? 
        (<Line
            data={lineChartValue}
        />)
        : null
    );

    const barChart= (
        confirmed ?
        ( 
            <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgb(128, 179, 255)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Covid Status Of ${country}` },
            }}
          />
        ):null
    );

   
    return(
        <div style={{display:'flex',justifyContent:'center',width:'55%',marginTop:'5px',marginBottom:'30px'}}>
            {country ? barChart:lineChart}
        </div>
    )
}

export default Chart ;