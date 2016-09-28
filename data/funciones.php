<?php 
	function conectaBD(){
        include '../config/config.php';
        // realpath('../config/config.php');
        return $conexion;
    }

    function GuardaCliente(){
        $respuesta = false;
        $idctl 		= $_POST['id_cliente'];
        $nombre 	= $_POST['nombre'];
        $apellidop 	= $_POST['apellidop'];
        $apellidom 	= $_POST['apellidom'];
        $rfc 		= $_POST['rfc'];

        $conexion = conectaBD();

        $agregacliente = 'INSERT INTO clientes (id_cliente,nombre,apellidoP,apellidoM,RFC) VALUES ('.$idctl.',"'.$nombre.'","'.$apellidop.'","'.$apellidom.'","'.$rfc.'")';
        $resultagregactl  = $conexion -> prepare($agregacliente);
        $resultagregactl -> execute(array());
        $res = $resultagregactl->fetchAll();

        if($res != 0){
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta);
        print json_encode($salidaJSON);

    }

    function TraeId(){
        $respuesta = false;
        $muid = '';

    	$conexion = conectaBD();

        $query = $conexion->prepare("SELECT * FROM clientes ORDER BY id_cliente DESC LIMIT 1");
        $query -> execute(array());

        if ($query->rowCount() == 1) {
            while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
                $muid = $row['id_cliente']+1;
            }
            $respuesta = true;

        }else{
        	$muid = 1;
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta,'muestraid' => $muid);
        print json_encode($salidaJSON);

    }

    function CargaClientes(){
	    
    	$respuesta = false;
    	$pru = $_POST['pru'];
    	$conexion = conectaBD();
    	$iden='';
    	//$com = '';
    	$elementos = '';
    	$sentencia = "SELECT * FROM clientes order by id_cliente DESC";
		$qry_prod = $conexion->prepare($sentencia);
		$qry_prod->execute(array($pru));
		
		if ($qry_prod->rowCount() != 0) {
			$respuesta = true;
		}	
			while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){


				$iden = $row["id_cliente"];
				
				if($row["id_cliente"]>=10 & $row["id_cliente"]<100 ){
				
					$com = '00';
				
				}elseif($row["id_cliente"]>=100 & $row["id_cliente"]<1000){
				
					$com = '0';
				
				}elseif($row["id_cliente"]<10){
				
					$com = '000';
				
				}
				$elementos = $elementos. '<tr id="'.$iden.'" data-idprod="'.$iden.'"><td width="20%" id="idctl'.$iden.'">'.$com.$row['id_cliente'].'</td><td width="69%" id="nomb'.$iden.'">'.$row['nombre'].' '.$row['apellidoP'].' '.$row['apellidoM'].'</td><td width="10%"><div class="edi_prod"><button style="float:left;margin-left:3px;"class="btn btn_mod edt_ctl" data-toggle="modal" data-target="#edit_ctl" value="2"><span class="glyphicon glyphicon-edit"></span></button></div></td></tr>';

			}
			echo $elementos;
        // $salidaJSON = array('respuesta' => $respuesta,'cargactl' => $elementos);
        // json_encode($salidaJSON);
    }

    function EditaCliente(){
    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	$busca 		= $_POST['id_cliente'];
    	
    	$idc 		= '';
    	$nombrect 	= '';
    	$apellidop 	= '';
    	$apellidom 	= '';
    	$rfc 		= '';


		$qry_prod = $conexion->prepare("SELECT * FROM clientes WHERE id_cliente = '".$busca."' "); 
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$iden = $row["id_cliente"];
			
			if($row["id_cliente"]>=10 & $row["id_cliente"]<100 ){
			
				$com = '00';
			
			}elseif($row["id_cliente"]>=100 & $row["id_cliente"]<1000){
			
				$com = '0';
			
			}elseif($row["id_cliente"]<10){
			
				$com = '000';
			
			}else{

			}


			$idc 		= $com.$row["id_cliente"]; 
			$nombrect 	= $row["nombre"];
			$apellidop 	= $row["apellidoP"];
			$apellidom 	= $row["apellidoM"];
			$rfc 		= $row["RFC"];
		}

        $salidaJSON = array('respuesta' => $respuesta,'ide' => $idc,'nombrec' => $nombrect,'apellidope' => $apellidop,'apellidome' => $apellidom,'rfce' => $rfc);
        print json_encode($salidaJSON);

    }

    function ActualizaCliente(){

    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	//$busca 		= $_POST['id_cliente'];
    	
    	$idc 		= $_POST['id_cte'];
    	$nombrect 	= $_POST['nombre_cte'];
    	$apellidop 	= $_POST['apellidop_cte'];
    	$apellidom 	= $_POST['apellidom_cte'];
    	$rfc 		= $_POST['rfc_cte'];



		$qry_prod = $conexion->prepare("UPDATE clientes set nombre = '".$nombrect."', apellidoP = '".$apellidop."', apellidoM = '".$apellidom."', RFC = '".$rfc."' WHERE id_cliente = '".$idc."'" );
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$iden = $row["id_cliente"];
			
			if($row["id_cliente"]>=10 & $row["id_cliente"]<100 ){
			
				$com = '00';
			
			}elseif($row["id_cliente"]>=100 & $row["id_cliente"]<1000){
			
				$com = '0';
			
			}elseif($row["id_cliente"]<10){
			
				$com = '000';
			
			}else{

			}


			$idc 		= $com.$row["id_cliente"]; 
			$nombrect 	= $row["nombre"];
			$apellidop 	= $row["apellidoP"];
			$apellidom 	= $row["apellidoM"];
			$rfc 		= $row["RFC"];
		}

        $salidaJSON = array('respuesta' => $respuesta,'ide' => $idc,'nombrec' => $nombrect,'apellidope' => $apellidop,'apellidome' => $apellidom,'rfce' => $rfc);
        print json_encode($salidaJSON);

    }

    function TraeIdArt(){
        $respuesta = false;
        $muid = '';

    	$conexion = conectaBD();

        $query = $conexion->prepare("SELECT * FROM articulos ORDER BY id_articulo DESC LIMIT 1");
        $query -> execute(array());

        if ($query->rowCount() == 1) {
            while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
                $muid = $row['id_articulo']+1;
            }
            $respuesta = true;

        }else{
        	$muid = 1;
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta,'muestraid' => $muid);
        print json_encode($salidaJSON);

    }

    function CargaArticulos(){
	    
    	$respuesta = false;
    	$pru = $_POST['pru'];
    	$conexion = conectaBD();
    	$iden='';
    	//$com = '';
    	$elementos = '';
    	$sentencia = "SELECT * FROM articulos order by id_articulo DESC";
		$qry_prod = $conexion->prepare($sentencia);
		$qry_prod->execute(array($pru));
		
		if ($qry_prod->rowCount() != 0) {
			$respuesta = true;
		}	
			while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){


				$iden = $row["id_articulo"];
				
				if($row["id_articulo"]>=10 & $row["id_articulo"]<100 ){
				
					$com = '00';
				
				}elseif($row["id_articulo"]>=100 & $row["id_articulo"]<1000){
				
					$com = '0';
				
				}elseif($row["id_articulo"]<10){
				
					$com = '000';
				
				}
				$elementos = $elementos. '<tr id="'.$iden.'" data-idprod="'.$iden.'"><td width="20%" id="idctl'.$iden.'">'.$com.$row['id_articulo'].'</td><td width="69%" id="nomb'.$iden.'">'.$row['descripcion'].'</td><td width="10%"><div class="edi_prod"><button style="float:left;margin-left:3px;"class="btn btn_mod edt_art" data-toggle="modal" data-target="#edit_art" value="2"><span class="glyphicon glyphicon-edit"></span></button></div></td></tr>';

			}
			echo $elementos;
        // $salidaJSON = array('respuesta' => $respuesta,'cargactl' => $elementos);
        // json_encode($salidaJSON);
    }

    function GuardaArticulo(){
        $respuesta = false;
        $idart 			= $_POST['id_articulo'];
        $descripcion 	= $_POST['descripcion'];
        $modelo 		= $_POST['modelo'];
        $precio 		= $_POST['precio'];
        $existencia 	= $_POST['existencia'];

        $conexion = conectaBD();

        $agregaarticulo = 'INSERT INTO articulos (id_articulo,descripcion,modelo,precio,existencia) VALUES ('.$idart.',"'.$descripcion.'","'.$modelo.'","'.$precio.'","'.$existencia.'")';
        $resultagregaart  = $conexion -> prepare($agregaarticulo);
        $resultagregaart -> execute(array());
        $res = $resultagregaart->fetchAll();

        if($res != 0){
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta);
        print json_encode($salidaJSON);

    }

    function EditaArticulo(){
    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	$busca 		= $_POST['id_articulo'];
    	
    	$ida 			= '';
    	$descripcionar 	= '';
    	$modeloar 		= '';
    	$precioar 		= '';
    	$existenciaar 	= '';


		$qry_prod = $conexion->prepare("SELECT * FROM articulos WHERE id_articulo = '".$busca."' "); 
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$iden = $row["id_articulo"];
			
			if($row["id_articulo"]>=10 & $row["id_articulo"]<100 ){
			
				$com = '00';
			
			}elseif($row["id_articulo"]>=100 & $row["id_articulo"]<1000){
			
				$com = '0';
			
			}elseif($row["id_articulo"]<10){
			
				$com = '000';
			
			}else{

			}


			$ida 			= $com.$row["id_articulo"]; 
			$descripcionar 	= $row["descripcion"];
			$modeloar 		= $row["modelo"];
			$precioar 		= $row["precio"];
			$existenciaar 	= $row["existencia"];
		}

        $salidaJSON = array('respuesta' => $respuesta,'ide' => $ida,'descripcion' => $descripcionar,'modelo' => $modeloar,'precio' => $precioar,'existencia' => $existenciaar);
        print json_encode($salidaJSON);

    }

    function ActualizaArticulo(){

    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	//$busca 		= $_POST['id_cliente'];
    	
    	$ida 			= $_POST['id_art'];
    	$descripcionar 	= $_POST['descripcion_art'];
    	$modeloar 		= $_POST['modelo_art'];
    	$precioar 		= $_POST['precio_art'];
    	$existenciaar 	= $_POST['existencia_art'];



		$qry_prod = $conexion->prepare("UPDATE articulos set descripcion = '".$descripcionar."', modelo = '".$modeloar."', precio = '".$precioar."', existencia = '".$existenciaar."' WHERE id_articulo = '".$ida."'" );
		//echo "UPDATE articulos set descripcion = '".$descripcionar."', modelo = '".$modeloar."', precio = '".$precioar."', existencia = '".$existenciaar."' WHERE id_cliente = '".$ida."'" ;
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$iden = $row["id_articulo"];
			
			if($row["id_articulo"]>=10 & $row["id_articulo"]<100 ){
			
				$com = '00';
			
			}elseif($row["id_articulo"]>=100 & $row["id_articulo"]<1000){
			
				$com = '0';
			
			}elseif($row["id_articulo"]<10){
			
				$com = '000';
			
			}else{

			}


			$ida 		= $com.$row["id_articulo"]; 
			$descripcionar 	= $row["descripcion"];
			$modeloar 	= $row["modelo"];
			$precioar 	= $row["precio"];
			$existenciaar 		= $row["existencia"];
		}

        $salidaJSON = array('respuesta' => $respuesta,'ide' => $ida,'descripcion' => $descripcionar,'modelo' => $modeloar,'precio' => $precioar,'existencia' => $existenciaar);
        print json_encode($salidaJSON);

    }

    function GuardaconFiguracion(){
        $respuesta = false;

        $tasaa 		= $_POST['tasa'];
        $enganchea 	= $_POST['enganche'];
        $plazoa		= $_POST['plazo'];

        $conexion = conectaBD();

        $agregaconf = 'INSERT INTO configuraciones (tasa_financiamiento,enganche,plazo_max) VALUES ('.$tasaa.',"'.$enganchea.'","'.$plazoa.'")';
        $resultagregaconf  = $conexion -> prepare($agregaconf);
        $resultagregaconf -> execute(array());
        $res = $resultagregaconf->fetchAll();

        if($res != 0){
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta);
        print json_encode($salidaJSON);

    }

    function TraeConfU(){
    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	$busca 		= $_POST['tasa'];
    	
    	$engancheb 	= '';
    	$plazob 	= '';


		$qry_prod = $conexion->prepare("SELECT * FROM configuraciones WHERE tasa_financiamiento = '".$busca."' "); 
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$engancheb 	= $row["enganche"]; 
			$plazob 	= $row["plazo_max"];
			
		}

        $salidaJSON = array('respuesta' => $respuesta,'enganche' => $engancheb,'plazo' => $plazob);
        print json_encode($salidaJSON);

    }

    function TraeConfD(){
    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	$busca 		= $_POST['enganche'];
    	
    	$financiamientoc = '';
    	$plazoc = '';


		$qry_prod = $conexion->prepare("SELECT * FROM configuraciones WHERE enganche = '".$busca."' "); 
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$financiamientoc 	= $row["tasa_financiamiento"]; 
			$plazoc 	= $row["plazo_max"];
			
		}

        $salidaJSON = array('respuesta' => $respuesta,'financiamiento' => $financiamientoc,'plazo' => $plazoc);
        print json_encode($salidaJSON);

    }

    function TraeConfT(){
    	$respuesta = false;

    	$conexion = conectaBD();
    	
    	$busca 		= $_POST['plazo'];
    	
    	$financiamientod = '';
    	$enganched = '';


		$qry_prod = $conexion->prepare("SELECT * FROM configuraciones WHERE plazo_max = '".$busca."' "); 
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){

			$financiamientod 	= $row["tasa_financiamiento"]; 
			$enganched 	= $row["enganche"];
			
		}

        $salidaJSON = array('respuesta' => $respuesta,'financiamiento' => $financiamientod,'enganche' => $enganched);
        print json_encode($salidaJSON);

    }

    function Autocomplete_Cliente(){
        $conexion       = conectaBD();
        $filtrar        = $_POST['nombre'];    
        //$where = "nombre LIKE ?";

        $query  = $conexion->prepare("  SELECT * FROM clientes WHERE nombre LIKE ?");
        $query->execute(array('%'.$filtrar.'%'));
        //echo '<ul class="ul_select">';
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li class="ctl_slc" data-idctl="'.$row['id_cliente'].'" data-rfc ="'.$row['RFC'].'" tabindex="1">'.$row['nombre'].' '.$row['apellidoP'].' '.$row['apellidoM'].'</li>';
        }

        //echo '</ul>';

    }

    function Autocomplete_Articulo(){
        $conexion       = conectaBD();
        $filtrar        = $_POST['nombre'];    
        //$where = "nombre LIKE ?";

        $query  = $conexion->prepare("  SELECT * FROM articulos WHERE descripcion LIKE ?");
        $query->execute(array('%'.$filtrar.'%'));
        //echo '<ul class="ul_select">';
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li class="art_slc" data-idart="'.$row['id_articulo'].'" tabindex="1">'.$row['descripcion'].'</li>';
        }

        //echo '</ul>';

    }

    function ValidaArticulo(){
    	$respuesta = false;


        $conexion	= conectaBD();
        $buscar		= $_POST['idarti'];

        $descripcion = '';
        $modelo = '';
        $existencia = '';
        $precio = '';


        $query  = $conexion->prepare("  SELECT * FROM articulos WHERE id_articulo = ?");
        $query->execute(array($buscar));
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        	$descripcion = $row['descripcion'];
        	$modelo = $row['modelo'];
            $existencia = $row['existencia'];
            $precio = $row['precio'];
        }

        if($existencia>0){
        	$respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta,'descripcion' => $descripcion,'modelo' => $modelo,'precio' => $precio);
        print json_encode($salidaJSON);

    }

    function ObtenConf(){
    	$respuesta = false;


        $conexion	= conectaBD();
        

        $tasa = '';
        $enganche = '';
        $plazo = '';


        $query  = $conexion->prepare("  SELECT * FROM configuraciones");
        $query->execute(array());
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        	$tasa = $row['tasa_financiamiento'];
        	$enganche = $row['enganche'];
            $plazo = $row['plazo_max'];
        }

        if($query->rowCount() == 1){
        	$respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta,'tasa' => $tasa,'enganche' => $enganche,'plazo' => $plazo);
        print json_encode($salidaJSON);

    }

    function TraeIdVenta(){
        $respuesta = false;
        $muid = '';

    	$conexion = conectaBD();

        $query = $conexion->prepare("SELECT * FROM ventas ORDER BY id_venta DESC LIMIT 1");
        $query -> execute(array());

        if ($query->rowCount() == 1) {
            while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
                $muid = $row['id_venta']+1;
            }
            $respuesta = true;

        }else{
        	$muid = 1;
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta,'muestraid' => $muid);
        print json_encode($salidaJSON);

    }

    function GuardaVenta(){
        $respuesta = false;
        $idventa 	= $_POST['id_venta'];
        $idctl 		= $_POST['id_cliente'];
        $cantidad 	= $_POST['cant_total'];
        $fecha 		= $_POST['fecha_venta'];
        

        $conexion = conectaBD();

        $agregaarticulo = 'INSERT INTO ventas (id_venta,id_cliente,cantidad_total,fc_venta) VALUES ('.$idventa.',"'.$idctl.'","'.$cantidad.'","'.$fecha.'")';
        $resultagregaart  = $conexion -> prepare($agregaarticulo);
        $resultagregaart -> execute(array());
        $res = $resultagregaart->fetchAll();

        if($res != 0){
            $respuesta = true;
        }

        $salidaJSON = array('respuesta' => $respuesta);
        print json_encode($salidaJSON);

    }

    function DescProducto(){

    	$respuesta = false;

    	$idart = $_POST['id_arti'];
    	$cantidad_desc = $_POST['cantidadd'];
    	$existe = 0;
    	$resultado = 0;

    	$conexion = conectaBD();

    	$query = $conexion->prepare("SELECT * FROM articulos ORDER BY id_articulo DESC LIMIT 1");
        $query -> execute(array());

        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $existe = $row['existencia'];
        }

        $resultado = $existe - $cantidad_desc;

        $qry_prod = $conexion->prepare("UPDATE articulos set existencia = '".$resultado."' WHERE id_articulo = '".$idart."'" );
		$qry_prod->execute(array());

		if ($qry_prod->rowCount() == 1) {
			$respuesta = true;
		}

		$salidaJSON = array('respuesta' => $respuesta);
        print json_encode($salidaJSON);
    }

    function CargaVentas(){
    	//echo "entra";
    	$respuesta = false;
    	$conexion = conectaBD();
    	$iden='';
    	$com = '';
    	$elementos = '';
    	$sentencia = "SELECT * FROM ventas v INNER JOIN clientes c WHERE v.id_cliente=c.id_cliente";
		$qry_prod = $conexion->prepare($sentencia);
		$qry_prod->execute(array());
		
		if ($qry_prod->rowCount() != 0) {
			$respuesta = true;
		}	
			while ($row = $qry_prod->fetch(PDO::FETCH_ASSOC)){


				$iden = $row["id_venta"];
				
				if($row["id_venta"]>=10 & $row["id_venta"]<100 ){
				
					$com = '00';
				
				}elseif($row["id_venta"]>=100 & $row["id_venta"]<1000){
				
					$com = '0';
				
				}elseif($row["id_venta"]<10){
				
					$com = '000';
				
				}

				if($row["id_cliente"]>=10 & $row["id_cliente"]<100 ){
				
					$com2 = '00';
				
				}elseif($row["id_cliente"]>=100 & $row["id_cliente"]<1000){
				
					$com2 = '0';
				
				}elseif($row["id_cliente"]<10){
				
					$com2 = '000';
				
				}


				$elementos = $elementos. '<tr id="'.$iden.'" data-idprod="'.$iden.'"><td width="15%" id="idventa'.$iden.'">'.$com.$row['id_venta'].'</td><td width="15%" id="idctlv'.$iden.'">'.$com2.$row['id_cliente'].'</td><td width="39%" id="nomctlv'.$iden.'">'.$row['nombre'].' '.$row['apellidoP'].' '.$row['apellidoP'].'</td><td width="15%" id="totalv'.$iden.'">'.$row['cantidad_total'].'</td><td width="15%" id="fechav'.$iden.'">'.$row['fc_venta'].'</td></tr>';

			}
			echo $elementos;
        // $salidaJSON = array('respuesta' => $respuesta,'cargactl' => $elementos);
        // json_encode($salidaJSON);
    }


    $opcion = $_POST["opc"];
	switch ($opcion) {
	   
	    // opcion guardado cliente
	    case 'guardacliente':
	        GuardaCliente();
	        break;
	    // aqui se trae el id-nuevo para los clientes
	    case 'traeid':
	        TraeId();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'cargaclientes':
	        CargaClientes();
	        break;

	     // aqui se trae el id-nuevo para los clientes
	    case 'editacliente':
	        EditaCliente();
	        break;

	     // aqui se trae el id-nuevo para los clientes
	    case 'actualizacliente':
	        ActualizaCliente();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'traeidart':
	        TraeIdArt();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'cargaarticulos':
	        CargaArticulos();
	        break;

	     // opcion guardado cliente
	    case 'guardaarticulo':
	        GuardaArticulo();
	        break;

	     // aqui se trae el id-nuevo para los clientes
	    case 'editaarticulo':
	        EditaArticulo();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'actualizaarticulo':
	        ActualizaArticulo();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'guardaconfiguracion':
	        GuardaconFiguracion();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'traeconf1':
	        TraeConfU();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'traeconf2':
	        TraeConfD();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'traeconf3':
	        TraeConfT();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'autocomplete_cliente':
	        Autocomplete_Cliente();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'autocomplete_articulo':
	        Autocomplete_Articulo();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'validaarticulo':
	        ValidaArticulo();
	        break;

	    case 'obtenconf':
	        ObtenConf();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'traeidventa':
	        TraeIdVenta();
	        break;

	    // aqui se trae el id-nuevo para los clientes
	    case 'guardaventa':
	        GuardaVenta();
	        break;

	     // aqui se trae el id-nuevo para los clientes
	    case 'descproducto':
	        DescProducto();
	        break;

	     // aqui se trae el id-nuevo para los clientes
	    case 'cargaventas':
	        CargaVentas();
	        break;
    
	}
?>