google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // 1. Definicion de los datos a mostrar
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    // 2. opciones de visualizacion del chart
    var options = {
        title: 'My Daily Activities',
        is3D: true
    };

    // 3. Definir el objeto PieChart, que recibe como parametro el id del elmento en donde se ubicara el CHART
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    // 4. El objeto chart llama el metodo draw (dibujar), y recibe como parametros data y options
    chart.draw(data, options);
}