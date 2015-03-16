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
    <link href="css/myStyle.css" rel="stylesheet">

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
        	<div class="pages"  id="page1">
	            <div class="col-lg-12 text-center">
	               <h1>Choose the event you want to work with</h1>
	               <p class="lead">Then click NEXT</p>
	               <br><br><br>
					<form role="form" id="mainForm">
						<table class="table borderless">
							<tr>
								<td class="col-md-3">
									<select class="form-control" id="gendSelect">
										<option value="Select">--SELECT--</option>
										<option value="Men">Men</option>
										<option value="Women">Women</option>
										<option value="Team">Team</option>
									</select>
								</td>

								<td class="col-md-3">
									<select class="form-control" id="eventSelect">
										<option value="Select" class="select">--SELECT--</option>
									</select>
								</td>

								<td class="col-md-3">
									<select class="form-control" id="typeSelect">
										<option value="Select">--SELECT--</option>
										<option value="Start List">Start List</option>
										<option value="Results">Results</option>
									</select>
								</td>
							</tr>

							<tr>
								<td class="col-md-3">
								</td>

								<td class="col-md-3">
								</td>

								<td class="col-md-3">
									<button type="submit" id="sbmtBttn" class="btn btn-default" style="float:right">NEXT</button>	
								</td>
							</tr>
						</table>
					</form>
				</div>
			</div>

			<div class="pages" id="page2">
	            <div class="col-lg-12 text-center">
	               <h1>Select the .XLS file you to use</h1>
	               <p class="lead">Then click NEXT</p>
	               <br><br><br>
						<table class="table borderless">
							<tr>
								<td class="col-md-2">
								</td>
								<td class = "col-md-2">
									<form id="uploadform">
										<input type="file" class="filestyle" data-buttonName="btn-primary">
									</form>
								</td>
							</tr>

							<tr>
								<td class="col-md-2">
									<button id="prevBttn1" class="btn btn-default" style="float:left">PREV</button>	
								</td>

								<td class="col-md-2">
									<button type="submit" id="sbmtBttn2" class="btn btn-default" style="float:right">NEXT</button>	
								</td>
							</tr>
						</table>
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
    <script src="js/bootstrap-filestyle.min.js"></script>

</body>

</html>
