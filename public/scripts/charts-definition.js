// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event){
  powerChart = createPowerChart();
}


// Create Power Chart
function createPowerChart(){
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-power',
      type: 'spline'  
    },
    series: [{
      name: 'Time'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#50b8b4' 
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Power (W)'
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}
