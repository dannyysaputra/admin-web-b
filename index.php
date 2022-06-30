<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
</head>

<body>
    <table id="table-data" class="display table table-striped table-bordered" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Keterangan</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <section class="container-fluid mt-5 p-2">
        <div class="row gx-3 pb-2">
            <!-- column chart -->
            <div class="col">
                <h4 class="border border-3 border-secondary text-uppercase">Column</h4>
                <div id="column-chart" style="width: 100%; height: 480px" class="border border-3 border-secondary"></div>
            </div>
            <!-- pie chart -->
            <div class="col">
                <h4 class="border border-3 border-secondary text-uppercase">Pie</h4>
                <div id="pie-chart" style="width: 100%; height: 480px" class="border border-3 border-secondary"></div>
            </div>
        </div>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="app.js"></script>
</body>
</html>