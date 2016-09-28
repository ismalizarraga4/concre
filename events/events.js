var mensaje = "";
var mensaje2 = "";
var num = '';
var num2 = '';
var num3 = '';
$( document ).ready(function() {

    var cfc = '';
    var f = new Date();
    var dia = f.getDate();
    var mes = f.getMonth()+1;
    if(mes<10){
        cfc='0';
    }
    var ano = f.getFullYear();
    var fecha = dia+'/'+cfc+mes+'/'+ano;
    $('#fc_venta').text(fecha);



    $(".muestra_menu").on('click',function(){
        
        $('#menu').toggle();

    });

    $("#opc_ventas").on('click',function(){
        $.ajax({
           url: 'views/ventas.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#opc_clientes").on('click',function(){
        $.ajax({
           url: 'views/clientes.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#opc_articulos").on('click',function(){
        $.ajax({
           url: 'views/articulos.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#opc_configuracion").on('click',function(){
        $.ajax({
           url: 'views/configuracion.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $(document).on('click','#new_ctl',function(){
        carga_id();
    });

    $(document).on('click','#guarda_ctl',function(){
        console.log("se le dio click al boton de guardar clientes");
        
        if(valida_nombre() & valida_apellidop() & valida_apellidom() & valida_rfc()){
            var nombre      = $('#nombre_ctl').val();
            var apellidop   = $('#apellidoP_ctl').val();
            var apellidom   = $('#apellidoM_ctl').val();
            var rfc         = $('#rfc_ctl').val();

            var parametros = 'opc=guardacliente'+'&id_cliente='+num+'&nombre='+nombre+'&apellidop='+apellidop+'&apellidom='+apellidom+'&rfc='+rfc;
            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        swal({title: "Cliente Guardado",   text: "Bien Hecho. El cliente ha sido registrado correctamente",   timer: 2000,   showConfirmButton: false });
                        //$('.formu_producto input').val('');
                        //$('.data_grid tbody').append('<tr id="'+response.res_id+'" data-id prod="'+response.res_id+'"><td style="display:none" id="id'+response.res_id+'">'+response.res_id+'</td><td width="20%" id="cod'+response.res_id+'">'+response.res_codigo+'</td><td width="20%"  id="prod'+response.res_id+'">'+response.res_producto+'</td><td width="15%"  id="cost'+response.res_id+'">'+response.res_costo+'</td><td width="15%" id="prec'+response.res_id+'">'+response.res_precio+'</td><td width="20%"  id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td width="10%" ><div class="edi_prod"><button style="float:left;margin-left:3px;" class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button style="float:left;margin-left:3px;" class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        //$('#canguarda_producto').click();
                    }
                    else 
                        console.log("nombre de usuario y/o contraseña incorrectos");

                    $('#nombre_ctl').val('');
                    $('#apellidoP_ctl').val('');
                    $('#apellidoM_ctl').val('');
                    $('#rfc_ctl').val('');
                    

                },
                error:function(error){
                    console.log(error);
                }

            });

        }
        else{
            swal({title: "Cliente No Guardado",   text: "No es posible continuar debe ingresar,"+mensaje+" es obligatorio",   timer: 2000,   showConfirmButton: false });

            // var total_mensaje = "No es posible continuar debe ingresar,"+mensaje+" es obligatorio";
            // console.log(total_mensaje+' el numero del id es: '+num);
        }

    });

    $(document).on('click','.edt_ctl',function(){
        var cid = $(this).parent().parent().parent().data('idprod');
        console.log("se estara carando el cliente");

        var parametros = 'opc=editacliente'+'&id_cliente='+cid;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",                                                                            
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true)
                {
                    $('.cod_ectl').text(response.ide);
                    console.log(response.ide);
                    $('#nombre_ectl').val(response.nombrec);
                    $('#apellidoP_ectl').val(response.apellidope);
                    $('#apellidoM_ectl').val(response.apellidome);
                    $('#rfc_ectl').val(response.rfce);
                }
                else 
                    console.log("nombre de usuario y/o contraseña incorrectos");
            },
            error:function(error){
                console.log(error);
            }

        });

    });

    $(document).on('click','#actualiza_ctl',function(){

        var idct = $('.cod_ectl').text();
        var nombrect = $('#nombre_ectl').val();
        var apellidopct = $('#apellidoP_ectl').val();
        var apellidomct = $('#apellidoM_ectl').val();
        var rfcct = $('#rfc_ectl').val();

        var parametros = 'opc=actualizacliente'+'&id_cte='+idct+'&nombre_cte='+nombrect+'&apellidop_cte='+apellidopct+'&apellidom_cte='+apellidomct+'&rfc_cte='+rfcct;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",                                                                            
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true)
                {
                    console.log('se guardo correctamente---- aqui nos quedamos');
                }
                else 
                    console.log("nombre de usuario y/o contraseña incorrectos");

                $('#nombre_ectl').val('');
                $('#apellidoP_ectl').val('');
                $('#apellidoM_ectl').val('');
                $('#rfc_ectl').val('');
            },
            error:function(error){
                console.log(error);
            }

        });

    });

    /*articulos*/
    $(document).on('click','#new_art',function(){
        //console.log("se le dio click al boton agrega articulos");
        carga_idart();
    });

    $(document).on('click','#guarda_art',function(){
        console.log("se le dio click al boton de guardar clientes");
        
        if(valida_descripcion() & valida_modelo() & valida_precio() & valida_existencia()){
            var descripcion  = $('#descripcion_art').val();
            var modelo      = $('#modelo_art').val();
            var precio      = $('#precio_art').val();
            var existencia  = $('#existencia_art').val();

            var parametros = 'opc=guardaarticulo'+'&id_articulo='+num2+'&descripcion='+descripcion+'&modelo='+modelo+'&precio='+precio+'&existencia='+existencia;
            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        swal({title: "Articulo Guardado",   text: "Bien Hecho. El Articulo ha sido registrado correctamente”",   timer: 2000,   showConfirmButton: false });
                        //$('.formu_producto input').val('');
                        //$('.data_grid tbody').append('<tr id="'+response.res_id+'" data-id prod="'+response.res_id+'"><td style="display:none" id="id'+response.res_id+'">'+response.res_id+'</td><td width="20%" id="cod'+response.res_id+'">'+response.res_codigo+'</td><td width="20%"  id="prod'+response.res_id+'">'+response.res_producto+'</td><td width="15%"  id="cost'+response.res_id+'">'+response.res_costo+'</td><td width="15%" id="prec'+response.res_id+'">'+response.res_precio+'</td><td width="20%"  id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td width="10%" ><div class="edi_prod"><button style="float:left;margin-left:3px;" class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button style="float:left;margin-left:3px;" class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        //$('#canguarda_producto').click();
                    }
                    else 
                        console.log("descripcion de usuario y/o contraseña incorrectos");

                    $('#descripcion_art').val('');
                    $('#modelo_art').val('');
                    $('#precio_art').val('');
                    $('#existencia_art').val('');
                },
                error:function(error){
                    console.log(error);
                }

            });

        }
        else{

            swal({title: "Articulo No Guardado",   text: "No es posible continuar debe ingresar,"+mensaje2+" es obligatorio",   timer: 2000,   showConfirmButton: false });
            // var total_mensaje2 = "No es posible continuar debe ingresar,"+mensaje2+" es obligatorio";
            // console.log(total_mensaje2+' el numero del id es: '+num2);
        }

    });

    $(document).on('click','.edt_art',function(){
        var aid = $(this).parent().parent().parent().data('idprod');
        console.log("se estara carando el cliente"+aid);

        var parametros = 'opc=editaarticulo'+'&id_articulo='+aid;
        console.log(parametros);

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",                                                                            
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true)
                {
                    $('.cod_eart').text(response.ide);
                    console.log(response.ide);
                    $('#descripcion_eart').val(response.descripcion);
                    $('#modelo_eart').val(response.modelo);
                    $('#precio_eart').val(response.precio);
                    $('#existencia_eart').val(response.existencia);
                }
                else 
                    console.log("nombre de usuario y/o contraseña incorrectos");
            },
            error:function(error){
                console.log(error);
            }

        });

    });

    $(document).on('click','#actualiza_art',function(){

        var idar = $('.cod_eart').text();
        var descripcionar = $('#descripcion_eart').val();
        var modeloar = $('#modelo_eart').val();
        var precioar = $('#precio_eart').val();
        var existenciaar = $('#existencia_eart').val();

        var parametros = 'opc=actualizaarticulo'+'&id_art='+idar+'&descripcion_art='+descripcionar+'&modelo_art='+modeloar+'&precio_art='+precioar+'&existencia_art='+existenciaar;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",                                                                            
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true)
                {
                    console.log('se guardo correctamente---- aqui nos quedamos');
                }
                else 
                    console.log("nombre de usuario y/o contraseña incorrectos");

                $('#descripcion_eart').val('');
                $('#modelo_eart').val('');
                $('#precio_eart').val('');
                $('#existencia_eart').val('');
            },
            error:function(error){
                console.log(error);
            }

        });

    });

    /*fin articulos*/

    /*configuraciones*/
    $(document).on('click','#guarda_conf',function(){

        if(valida_tasa() & valida_enganche() & valida_plazo()){

            var tasa = $('#financiamiento').val();
            var enganche = $('#enganche').val();
            var plazo = $('#plazo').val();

            var parametros = 'opc=guardaconfiguracion'+'&tasa='+tasa+'&enganche='+enganche+'&plazo='+plazo;


            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)
                    {
                        swal({title: "Confioguracion Guardado",   text: "Bien Hecho. La configuración ha sido registrada",   timer: 2000,   showConfirmButton: false });
                    }
                    else 
                        console.log("nombre de usuario y/o contraseña incorrectos");
                },
                error:function(error){
                    console.log(error);
                }

            });
        }else if(valida_tasa() & !valida_enganche() & !valida_plazo()){

            var tasa = $('#financiamiento').val();
            
            var parametros = 'opc=traeconf1'+'&tasa='+tasa;


            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)
                    {
                        $('#enganche').val(response.enganche);
                        $('#plazo').val(response.plazo);
                        console.log('se guardo correctamente---- aqui nos quedamos');
                    }
                    else 
                        console.log("nombre de usuario y/o contraseña incorrectos");
                },
                error:function(error){
                    console.log(error);
                }

            });
        }else if(!valida_tasa() & valida_enganche() & !valida_plazo()){

            var enganche = $('#enganche').val();

            var parametros = 'opc=traeconf2'+'&enganche='+enganche;


            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)
                    {
                        $('#financiamiento').val(response.financiamiento);
                        $('#plazo').val(response.plazo);
                        console.log('se guardo correctamente---- aqui nos quedamos');
                    }
                    else 
                        console.log("nombre de usuario y/o contraseña incorrectos");
                },
                error:function(error){
                    console.log(error);
                }

            });
        }else if(!valida_tasa() & !valida_enganche() & valida_plazo()){

            var plazo = $('#plazo').val();

            var parametros = 'opc=traeconf3'+'&plazo='+plazo;


            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)
                    {
                        $('#financiamiento').val(response.financiamiento);
                        $('#enganche').val(response.enganche);
                        console.log('se guardo correctamente---- aqui nos quedamos');
                    }
                    else 
                        console.log("nombre de usuario y/o contraseña incorrectos");
                },
                error:function(error){
                    console.log(error);
                }

            });
        }
        $('#financiamiento').val('');
        $('#enganche').val('');
        $('#plazo').val('');

    });
    /*fin configuraciones*/
    /*ventas*/
    // $(document).on('change keyup','#npt_vent',function(){
    //     var x = $('.npt_ventas').val();
    //     console.log(x);
    // });

     // EVENTO AUTOCOMPLETE DE clientes
    $(document).on('keypress keyup','#npt_vent',function(e){
         var nom_ctl = $(this).val();
         //console.log(nom_ctl);
         if (nom_ctl.length>=3){
            //$('#par_clientes').append('<p>'+nom_ctl+'</p>');
            $.ajax({
                url: 'data/funciones.php',
                type: 'POST',
                cache:false,
                dataType: 'html',
                data: {opc: 'autocomplete_cliente',nombre:nom_ctl},
                success:function(autocomplete){
                    $('#list_ctl').html(autocomplete);
                },
                error:function(error){
                    console.log(error);
                }
            });
            
        }
       
    });

    //al acer clic sobre algun elemento de los clientes del autocomplete
    $(document).on('click','.ctl_slc',function(){
        var srfc = $(this).data('rfc');
        var sidclt = $(this).data('idctl');
        var cero = ''
        if(sidclt>=10 & sidclt<100){
            cero = '00';
        }
        else if(sidclt>=100 & sidclt<1000){
            cero = '0';
        }
        else if(sidclt>=1000){
            cero = '';
        }
        else{
            cero = '000'; 
        }
        $('#npt_vent').val( cero+sidclt+'-'+$(this).text());
        $('#vtn_rfc').text('R.F.C.: '+srfc);
        $('#idctl_ag').val(sidclt);
        $('#list_ctl').html(' ');


        //console.log(seleccion);

    });

    // EVENTO AUTOCOMPLETE DE articulos
    $(document).on('keypress keyup','#npta_vent',function(e){
         var nom_art = $(this).val();
         //console.log(nom_ctl);
         if (nom_art.length>=3){
            //$('#par_articulos').append('<p>'+nom_art+'</p>');
            $.ajax({
                url: 'data/funciones.php',
                type: 'POST',
                cache:false,
                dataType: 'html',
                data: {opc: 'autocomplete_articulo',nombre:nom_art},
                success:function(autocomplete){
                    $('#list_art').html(autocomplete);
                },
                error:function(error){
                    console.log(error);
                }
            });
            
        }
       
    });

    //al acer clic sobre algun elemento de los clientes del autocomplete
    $(document).on('click','.art_slc',function(){

        $('#npta_vent').val( $(this).text());
        $('#idart_ag').val($(this).data('idart'));
        $('#list_art').html(' ');


        //console.log(seleccion);

    });

    $(document).on('click','#agrega_producto',function(){

        var obidp = $('#idart_ag').val();
        //console.log(obidp);

        var parametros = 'opc=validaarticulo'+'&idarti='+obidp;
        var tasa = 0;
        var enganche = 0;
        var plazo = 0;

        var precio = 0;
        var importe = 0;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",                                                                            
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true)
                {

                    var parametros2 = 'opc=obtenconf';

                    $.ajax({
                        cache:false,
                        url:"data/funciones.php",
                        type:"POST",                                                                            
                        dataType: "json",
                        data: parametros2,
                        success: function(response2){
                            if (response2.respuesta ==true)
                            {
                                tasa = response2.tasa;
                                enganche = response2.enganche;
                                plazo = response2.plazo;
                                precio = Math.round(response.precio*(1+(tasa*plazo)/100));
                                importe = precio;
                                $('#lista_ventas thead').append('<tr id="'+obidp+'" data-articulo=""><td width="39%">'+response.descripcion+'</td><td width="15%">'+response.modelo+'</td><td width="10%"><input class="cant_pro form-control snumero" value="1" type="text"></td><td width="15%" data-precio="">'+precio+'</td><td width="15%" id="imp'+obidp+'" data-importe="">'+importe+'</td><td width="5%"><div class=""><button class="btn btn_mod borra_venta" value="3"><span id="dlt_venta" class="glyphicon glyphicon-remove-circle"></span></button></div></td></tr>');

                                
                            }
                            else 
                                console.log("no hay productos con esta cantidad");
                            console.log(tasa*plazo);
                            console.log((tasa*plazo)/100);
                            console.log(1+((tasa*plazo)/100));
                            console.log(response.precio*(1+((tasa*plazo)/100)));
                        },
                        error:function(error){
                            console.log(error);
                        }

                    });
                }
                else 
                    swal({title: "",   text: "El articulo selecionado no cuenta con existencia, favor de verificar",   timer: 2000,   showConfirmButton: false });
            },
            error:function(error){
                console.log(error);
            }

        });
        $('#npta_vent').val('');
        setTimeout(function(){
            sumaImporte();
            $('#'+obidp+' .cant_pro').focus();
        },1000);


    });

    $(document).on('change','.cant_pro',function(){
        var cantidad = $(this).val();
        console.log(cantidad);
        var padre = $(this).parent().parent().attr('id');
        console.log(padre);
        var cimporte = eval($('#'+padre+' [data-precio]').text())*cantidad;
        $('#'+padre+' [data-importe]').text(cimporte);
        sumaImporte();
        //eval($(this).text())

    });

    $(document).on('click','.borra_venta',function(){
        var padre = $(this).parent().parent().parent().attr('id');
        $('tr#'+padre).remove();
        sumaImporte();
    });

    $(document).on('click','#sig_venta',function(){
        if(validaCliente() & validaVentas()){
            var tasa = 0;
            var enganche = 0;
            var plazoMax = 0;
            var precioContado = 0;
            var totalAdeudo = eval($('#total_venta').text());
            var totalpagart = 0;
            var totalpagars = 0;
            var totalpagarn = 0;
            var totalpagard = 0;
            var importepagrt = 0;
            var importepagrs = 0;
            var importepagrn = 0;
            var importepagrd = 0;
            var ahorrot = 0;
            var ahorros = 0;
            var ahorro9 = 0;
            var ahorrod = 0;
            //aqui me quede
            var parametros = 'opc=obtenconf';

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response2){
                    if (response2.respuesta ==true)
                    {
                        tasa = response2.tasa;
                        enganche = response2.enganche;
                        plazoMax = response2.plazo;
                        //para sacar precio contado
                        precioContadop = totalAdeudo/(1+((tasa*plazoMax)/100));
                        precioContado = Math.round(precioContadop* 100) / 100;

                        //total a pagar meses
                        totalpagart = Math.round((precioContado*(1+(tasa*3)/100))*100)/100;
                        totalpagars = Math.round((precioContado*(1+(tasa*6)/100))*100)/100;
                        totalpagarn = Math.round((precioContado*(1+(tasa*9)/100))*100)/100;
                        totalpagard = totalAdeudo;

                        //importe de abonos
                        importepagrt = Math.round((totalpagart / 3)*100)/100;
                        importepagrs = Math.round((totalpagars / 6)*100)/100;
                        importepagrn = Math.round((totalpagarn / 9)*100)/100;
                        importepagrd = Math.round((totalpagard / 12)*100)/100;

                        //lo que se ahorra en dif plazos
                        ahorrot = Math.round((totalAdeudo-totalpagart)*100)/100;
                        ahorros = Math.round((totalAdeudo-totalpagars)*100)/100;
                        ahorron = Math.round((totalAdeudo-totalpagarn)*100)/100;
                        ahorrod = Math.round((totalAdeudo-totalpagard)*100)/100;

                        $('#abonomt').text('$'+totalpagart);
                        $('#totalpt').text('TOTAL A PAGAR $'+importepagrt);
                        $('#ahorromt').text( 'SE AHORRA $'+ahorrot);

                        $('#abonoms').text('$'+totalpagars);
                        $('#totalps').text('TOTAL A PAGAR $'+importepagrs);
                        $('#ahorroms').text( 'SE AHORRA $'+ahorros);

                        $('#abonomn').text('$'+totalpagarn);
                        $('#totalpn').text('TOTAL A PAGAR $'+importepagrn);
                        $('#ahorromn').text( 'SE AHORRA $'+ahorron);

                        $('#abonomd').text('$'+totalpagard);
                        $('#totalpd').text('TOTAL A PAGAR $'+importepagrd);
                        $('#ahorromd').text( 'SE AHORRA $'+ahorrod);

                        $('.opc_abono').css('display','block');
                        $('#guarda_venta').css('visibility','visible');
                        $('#sig_venta').css('visibility','hidden');

                        
                    }
                    else 
                        console.log("no hay productos con esta cantidad");
                },
                error:function(error){
                    console.log(error);
                }

            });
        }
        else
            swal({title: "",   text: "Los datos ingresados no son correctos, favor de verificar",   timer: 2000,   showConfirmButton: false });


    });

    $(document).on('click','#new_venta',function(){
        carga_idventa();
    });

    $(document).on('click','#guarda_venta',function(){
        if(validaPlazos()){

            var idctlg = $('#idctl_ag').val();
            var cant_total = eval($('#total_venta').text());
            var fc_sis = $('#fc_venta').text();
            var diag = fc_sis.substring(0,2);
            var mesg = fc_sis.substring(3,5);
            var anog = fc_sis.substring(6,10);
            var fechag = anog+'-'+mesg+'-'+diag;

            var parametros = 'opc=guardaventa'+'&id_venta='+num3+'&id_cliente='+idctlg+'&cant_total='+cant_total+'&fecha_venta='+fechag;
            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        swal({title: "Venta Guardada",   text: "La venta se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                        descuentaProducto();
                    }
                    else 
                        console.log("nombre de usuario y/o contraseña incorrectos");

                    $('#npt_vent').val('');
                    $('#idctl_ar').val('');
                    $('#npta_vent').val('');
                    $('#idart_ag').val('');
                    $('#lista_ventas thead').html(' ');

                    swal({title: "",   text: "Bien Hecho, Tu venta ha sido registrada correctamente”",   timer: 2000,   showConfirmButton: false });
                },
                error:function(error){
                    console.log(error);
                }

            });

            
        }
        else 
            swal({title: "",   text: "Debe seleccionar un plazo para realizar el pago de su compra",   timer: 2000,   showConfirmButton: false });
    });

    /*fin ventas*/

    $(document).on('click','#cancela_ctl',function(){
        $('#nombre_ctl').val('');
        $('#apellidoP_ctl').val('');
        $('#apellidoM_ctl').val('');
        $('#rfc_ctl').val('');
    });

    $(document).on('click','#unactualiza_ctl',function(){
        $('#nombre_ectl').val('');
        $('#apellidoP_ectl').val('');
        $('#apellidoM_ectl').val('');
        $('#rfc_ectl').val('');
    });

    $(document).on('click','#cancela_art',function(){
        $('#descripcion_art').val('');
        $('#modelo_art').val('');
        $('#precio_art').val('');
        $('#existencia_art').val('');
    });

    $(document).on('click','#unactualiza_art',function(){
        $('#descripcion_eart').val('');
        $('#modelo_eart').val('');
        $('#precio_eart').val('');
        $('#existencia_eart').val('');
    });

    $(document).on('click','#cancela_conf',function(){
        $('#financiamiento').val('');
        $('#enganche').val('');
        $('#plazo').val('');
    });

    $(document).on('click','#cancela_venta',function(){
        $('#npt_vent').val('');
        $('#idctl_ar').val('');
        $('#npta_vent').val('');
        $('#idart_ag').val('');
        $('#lista_ventas thead').html(' ');
    });

    $(document).on('keydown','.snumero',function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) || 
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
 
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


});

function valida_nombre(){
    var cod = $('#nombre_ctl').val();
    if(cod != ''){
        return true;
    }
    else{
        mensaje += " nombre,";
        // console.log("1"+mensaje);
        return false;
    }
}

function valida_apellidop(){
    var noprod = $('#apellidoP_ctl').val();
    if(noprod != ''){
        return true;
    }
    else{
        mensaje += " apellido paterno,";
        // console.log("2"+mensaje);
        return false;
    }
}

function valida_apellidom(){
    var desprod = $('#apellidoM_ctl').val();
    if(desprod != ''){
        return true;
    }
    else{
        mensaje += " apellido materno,";
        // console.log("3"+mensaje);
        return false;
    }
}

function valida_rfc(){
    var costprod = $('#rfc_ctl').val();
    if(costprod != ''){
        return true;
    }
    else{
        mensaje += " R.F.C.,";
        // console.log("4"+mensaje);
        return false;
    }
}

function carga_id(){

    var parametros = 'opc=traeid';

    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        dataType: "json",
        data: parametros,
        success: function(response){
            if (response.respuesta == true)
            {
                num = '' + response.muestraid;
                console.log (num.length);
                if(num.length == 1){

                    $('.cod_ctl').text('000'+num);
                
                }else if(num.length == 2){

                    $('.cod_ctl').text('00'+num);
                
                }else if(num.length == 3){

                    $('.cod_ctl').text('0'+num);
                
                }else if(num.length == 4){

                    $('.cod_ctl').text(''+num);
                
                }
            }
            else 
                console.log("nombre de usuario y/o contraseña incorrectos");
        },
        error:function(error){
            console.log(error);
        }

    });

}

function carga_clientes(){

    //var parametros = 'opc=cargaclientes';
    
    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        //dataType: "json",
        data: {'opc':'cargaclientes','pru':'0'},
        success: function(response){
                $('.data_grid tbody').html(response);
            // if ($.parseJSON(response.respuesta) == true){
            // }else 
            //     console.log(response);
        },
        error:function(error,response){
            console.log(error);
            console.log(response);
        }

    });

}
/*articulos*/
function valida_descripcion(){
    var cod = $('#descripcion_art').val();
    if(cod != ''){
        return true;
    }
    else{
        mensaje2 += " Descripcion,";
        // console.log("1"+mensaje2);
        return false;
    }
}

function valida_modelo(){
    var noprod = $('#modelo_art').val();
    if(noprod != ''){
        return true;
    }
    else{
        mensaje2 += " Modelo,";
        // console.log("2"+mensaje2);
        return false;
    }
}

function valida_precio(){
    var desprod = $('#precio_art').val();
    if(desprod != ''){
        return true;
    }
    else{
        mensaje2 += " Precio,";
        // console.log("3"+mensaje2);
        return false;
    }
}

function valida_existencia(){
    var costprod = $('#existencia_art').val();
    if(costprod != ''){
        return true;
    }
    else{
        mensaje2 += " Existencia,";
        // console.log("4"+mensaje);
        return false;
    }
}

function carga_articulos(){

    //var parametros = 'opc=cargaclientes';
    
    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        //dataType: "json",
        data: {'opc':'cargaarticulos','pru':'0'},
        success: function(response){
                $('.data_grid tbody').html(response);
            // if ($.parseJSON(response.respuesta) == true){
            // }else 
            //     console.log(response);
        },
        error:function(error,response){
            console.log(error);
            console.log(response);
        }

    });

}

function carga_idart(){

    var parametros = 'opc=traeidart';

    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        dataType: "json",
        data: parametros,
        success: function(response){
            if (response.respuesta == true)
            {
                num2 = '' + response.muestraid;
                console.log (num2.length);
                if(num2.length == 1){

                    $('.cod_art').text('000'+num2);
                
                }else if(num2.length == 2){

                    $('.cod_art').text('00'+num2);
                
                }else if(num2.length == 3){

                    $('.cod_art').text('0'+num2);
                
                }else if(num2.length == 4){

                    $('.cod_art').text(''+num2);
                
                }
            }
            else 
                console.log("nombre de usuario y/o contraseña incorrectos");
        },
        error:function(error){
            console.log(error);
        }

    });

}
/*fin articulos*/
/*configuraciones*/

function valida_tasa(){
    var noprod = $('#financiamiento').val();
    if(noprod != ''){
        return true;
    }
    else{
        return false;
    }
}

function valida_enganche(){
    var desprod = $('#enganche').val();
    if(desprod != ''){
        return true;
    }
    else{
        return false;
    }
}

function valida_plazo(){
    var costprod = $('#plazo').val();
    if(costprod != ''){
        return true;
    }
    else{
        return false;
    }
}

/*fin configuraciones*/
/*ventas*/
function sumaImporte(){
    console.log('aqui llega1');

    var cantidad_total = 0;
    $("[data-importe]").each(function(index,value){
        cantidad_total = cantidad_total + eval($(this).text());
        //console.log("entra al each");

    });
    calculaEnganche(cantidad_total);
    console.log(cantidad_total);
}

function calculaEnganche(cantidad_total){
    var parametros2 = 'opc=obtenconf';

    var tasa = 0;
    var enganche = 0;
    var plazo = 0;
    var tenganche = 0; 
    var bonificacion = 0;


    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        dataType: "json",
        data: parametros2,
        success: function(response2){
            if (response2.respuesta ==true)
            {
                tasa = response2.tasa;
                enganche = response2.enganche;
                plazo = response2.plazo;
                tenganche = (enganche/100)*cantidad_total;
                bonificacion = tenganche*((tasa*plazo)/100);
                timporte = cantidad_total-tenganche-bonificacion;
                $('#enganche_venta').text(Math.round(tenganche*100)/100);
                $('#bonificacion_venta').text(Math.round(bonificacion*100)/100);
                $('#total_venta').text((Math.round(timporte*100)/100));

                Math.round(num * 100) / 100

                // precio = Math.round(response.precio*(1+(tasa*plazo)/100));
                // importe = precio;
            }
            else 
                console.log("no hay productos con esta cantidad");
        },
        error:function(error){
            console.log(error);
        }

    });

}

function validaCliente(){
    var vcliente =$('#idctl_ag').val(); 
    if(vcliente != 0){
        return true;
    }
     else{
        return false;
    }
}

function validaVentas(){
    var varticulos = $('#obj_venta').find('tr').length;
    if(varticulos != 0){
        return true;
    }
    else{
        return false;
    }
}

function validaPlazos(){

    var res = false;

    $("[data-abono]").each(function(index,value){

        if ($(this).is(':checked')){
            res = true;
        }
    });

    return res;

}

function carga_idventa(){

    var parametros = 'opc=traeidventa';

    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        dataType: "json",
        data: parametros,
        success: function(response){
            if (response.respuesta == true)
            {
                num3 = '' + response.muestraid;
                console.log (num3.length);
                if(num3.length == 1){

                    $('.cod_venta').text('000'+num3);
                
                }else if(num3.length == 2){

                    $('.cod_venta').text('00'+num3);
                
                }else if(num3.length == 3){

                    $('.cod_venta').text('0'+num3);
                
                }else if(num3.length == 4){

                    $('.cod_venta').text(''+num3);
                
                }
            }
            else 
                console.log("nombre de usuario y/o contraseña incorrectos");
        },
        error:function(error){
            console.log(error);
        }

    });

}

function descuentaProducto(){
    $("[data-articulo]").each(function(index,value){
        var idartd = $(this).attr('id');
        var cantartd = $('#'+idartd+' .cant_pro').val();

        var parametros = 'opc=descproducto'+'&id_arti='+idartd+'&cantidadd='+cantartd;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",                                                                            
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true)
                {
                   console.log('se realizo el descuento de: '+idartd);
                }
                else 
                    console.log("nombre de usuario y/o contraseña incorrectos");
            },
            error:function(error){
                console.log(error);
            }

        });


        // console.log('este es el id de guardado '+idartd);
        // console.log('esta es la cantidad de guardado '+cantartd);

    });

}

function carga_ventas(){

    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",                                                                            
        //dataType: "json",
        data: {'opc':'cargaventas'},
        success: function(response){
            $('.data_grid tbody').html(response);
        },
        error:function(error,response){
            console.log(error);
            console.log(response);
        }

    });

}
/*fin ventas*/












