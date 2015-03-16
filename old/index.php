<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Welcome</title>
		<link rel="stylesheet" type="text/css" href="styles/style_main.css">
		<script type="text/javascript" src="libs/jquery-1.11.2.min.js"></script>
	</head>

	<body>
		<div id="wrapper">
			<div id="header">
				<div class="header_button" id="start">START</div>
				<div class="header_button" id="continue">Continue Last Session</div>
			</div>

			<div id="main_content">

				<div class="boxes" id="start_box">
					<form>
						<div class=""><label>Event Name: <br><input type="text" name="event_name" id="event_name"></label>
						<table>
							<tr class="form_header">
								<td>
									Men Disciplines
								</td>
								
								<td>
									Women Disciplines
								</td>

								<td>
									Team Disciplines
								</td>
							</tr>

							<tr>
								<td>
									<ul class="menForm">
									</ul>
								</td>

								<td>
									<ul class="womenForm">
									</ul>
								</td>

								<td>
									<ul class="teamForm">
										
									</ul>
								</td>
							</tr>
						</table>
					</form>
				</div>

				<div class="boxes" id="continue_box">
					<p>THIS IS THE CONTINUE BOX</p>
				</div>

			</div>

		</div>
		<script type="text/javascript" src="scripts/script_main.js"></script>
	</body>
</html>
