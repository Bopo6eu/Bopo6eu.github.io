// Создайте новый график с помощью библиотеки Chart.js
function selectCheckBox()
{
  var total="";
  for(var i=0; i < document.form.languages.length; i++)
  {
    if(document.form.languages[i].checked)
    {
      total +=document.form.languages[i].value + "\n";
    }
  }
  if(total=="")
  {
    alert("select checkboxes");
  }
  else
  {
    alert("Selected Values are : \n"+total);
  }
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [{
      label: name,
      data: injuries,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});\
