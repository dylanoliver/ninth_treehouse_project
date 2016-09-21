// Initialize a Line chart in the container with the ID chart1
  new Chartist.Line('#chart1', {
    labels: ['1/7', '7/7', '14/7', '21/7', '28/7', '4/8', '11/8', '18/8', '25/8', '1/9'],
    series: [[0, 500, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750]]
  }, {
  	low: 0,
  	showArea: true,
  	axisX: {
  		labelInterpolationFnc:
  		function(value, index) {
  			return index % 2 === 0 ? value : null;
  		}
  	}
  });

  // Initialize a Bar chart in the container with the ID chart2
  new Chartist.Bar('#chart2', {
    labels: ['S','M','T','W','T','F','S'],
    series: [[75, 100, 175, 125, 225, 200, 100]]
  });

  // Initialize a Pie chart in the container with the ID chart3
  new Chartist.Pie('#chart3', {
	  series: [10, 20, 70],
	  labels: ['Phones', 'Tablet', 'Desktop']
	}, {
	  donut: true,
	  showLabel: false,
		  plugins: [
		  	Chartist.plugins.legend()
		  ]
	});