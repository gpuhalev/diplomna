<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Index</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <style>
        body {
            padding-top: 70px;
        }
    </style>

</head>

<body>

    <?php
        include "navigation.html";
    ?>

    <!-- Page Content -->
    <div class="container">

        <div class="row">
            <div class="col-lg-12 text-center">
                <h1>Choose the event you want to work with</h1>
                <p class="lead">Then click NEXT</p>
                <div class="boxes" id="start_box">
					<form role="form" id="mainForm">
						<table class="table">
							<thead>
								<tr>
									<th class=".text-center">
										Men Disciplines
									</th>
									
									<th class=".text-center">
										Women Disciplines
									</th>

									<th class=".text-center">
										Team Disciplines
									</th>
								</tr>
							</thead>

							<tr>
								<td>
									<ul name="Men" class="list-unstyled">
									</ul>
								</td>

								<td>
									<ul name="Women" class="list-unstyled">
									</ul>
								</td>

								<td>
									<ul name="Team" class="list-unstyled">
										
									</ul>
								</td>
							</tr>
						</table>
							<div class="col-sm-offset-6 col-sm-10">
						    	<button type="submit" id="sbmtBttn" class="btn btn-default">NEXT</button>
						    </div>
					</form>
				</div>
            </div>
        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>
	<script src="js/myScript.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>

</html>
