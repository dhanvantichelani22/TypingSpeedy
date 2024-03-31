import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Graph = ({graphData}) => {
  const {theme} = useTheme();
  return (
    <div>
        <Line 
        //props-data
        data={
          //object
            {
              // x-axis:-time
                // labels: [1,2,3,4],
                labels: graphData.map(i => i[0]),
              // y-axis
              datasets: [
                {
                  data: graphData.map(i => i[1]),
                  label: 'wpm',
                  borderColor: theme.textColor
                },
                // {
                //   data: [ 9,6,2,7],
                //   label: 'graph2',
                //   borderColor: 'blue'
                // }
              ]
            }
        }
        />

        {/* graphData = [[time,wpm],[,][,]] */}
        {/* Time = CountDown - TestTime */}
    </div>
  )
}

export default Graph