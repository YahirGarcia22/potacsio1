<?php 

	$conexion=mysqli_connect('localhost','root','','potacsio');

 ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PotacsioFactura</title>
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/icons.css">
    <link rel="stylesheet" href="css/responsee.css">
    <link rel="stylesheet" href="owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="owl-carousel/owl.theme.css">
    <link rel="stylesheet" href="css/lightcase.css">
    
    <link rel="stylesheet" href="css/template-style.css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,400,600,900&subset=latin-ext" rel="stylesheet"> 
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>    
    
    
  </head>

<body>
<div id="page-wrapper">
      
      <header role="banner" class="position-absolute margin-top-30 margin-m-top-0 margin-s-top-0">    
        
        <nav class="background-transparent background-transparent-hightlight full-width sticky">
          <div class="s-12 l-2">
            <a href="index.html" class="logo">
              <!-- Logo version before sticky nav -->
              <img class="logo-before" src="papas/logo2.jpeg" alt="">
              <!-- Logo version after sticky nav -->
              <img class="logo-after" src="papas/logo2.jpeg" alt="">
            </a>
          </div>
          <div class="s-12 l-10">
            <div class="top-nav right">
              <p class="nav-text"></p>
              <ul class="right chevron">
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">Sobre Nosotros</a></li>             
              </ul>
            </div>
          </div>  
        </nav>
      </header>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<H1 align="center"> PotacsioFactura </H1>
	<table border="1" >
		<tr>
			<td>No. Factura</td>
			<td>Fecha</td>
			<td>No. Cliente</td>
			<td>Dirección</td>
		</tr>

		<?php 
		$sql="SELECT * from factura";
		$result=mysqli_query($conexion,$sql);

		while($mostrar=mysqli_fetch_array($result)){
		 ?>

		<tr>
			<td><?php echo $mostrar['id_factura'] ?></td>
			<td><?php echo $mostrar['Fecha'] ?></td>
			<td><?php echo $mostrar['id_cliente'] ?></td>
			<td><?php echo $mostrar['dirección'] ?></td>
		</tr>
	<?php 
	}
	 ?>
	</table>

</body>
</html>