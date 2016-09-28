$( document ).ready(function() {
    var time = new Date();
    var domingo = time.getDay();
    //console.log(domingo);
    if(domingo == 0){
        var f_corte = new Date();
        var ano_corte = f_corte.getFullYear();
        var ms_corte = f_corte.getMonth();
        var mes_corte = ms_corte+1;
        var dia_corte = f_corte.getDate();
        var fecha_corte = ano_corte+'-'+mes_corte+'-'+dia_corte;

        var parametros3 = 'opc=guardafcorte'+'&fecha='+fecha_corte;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",
            dataType: "json",
            data: parametros3,
            success: function(response){
                if (response.respuesta ==true)//== true)
                {
                    // console.log('es domingo');
                    // res1 = true
                    // console.log(res1+'------la respuesta');
                    //cont_guarda++;
                    // swal({   title: "Producto Guardado",   text: "el producto se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                    // $('.formu_producto input').val('');
                    // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                    // $('#canguarda_producto').click();
                }
                else{
                    // console.log('no es domingo');
                } 
            }
        });
    }

    // MENU ACTIVO
    // var li = $('ul').find('li');
    $(document).on('keyup keypress','.numero',function(e){
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 8) || (keynum == 46))
        return true;
         
        if (keynum == 13 & $('#pagar').prop('disabled') == false) {
            $('#pagar').click();
        }
        return /\d/.test(String.fromCharCode(keynum));

    })

    $('ul li>p').on('click',function(){
        view($(this).text());

    })
    var ancho = $(window).width();
    $(document).on('click','#btngasto',function(){
        console.log($("#car_gastos").val());
        //console.log($( "#car_gastos option:selected" ).text());

    });

    $(document).on('click','#btngasto',function(){
        // var arr4 = [];
        var res1 = false;


        var nombresproducto = $('#ctrl_inv').children('.nom_inv_pro');
        var cantidadesproducto = $('#ctrl_inv').children('.val_inv_pro');
        var cont_guarda = 0;

        var val_proveedor = $('#car_gastos').val();
        var monto = $('#montgastos').val();

        var f = new Date();
        var ano = f.getFullYear();
        var ms = f.getMonth();
        var mes = ms+1;
        var dia = f.getDate();
        var fecha = ano+'-'+mes+'-'+dia;

        var parametros2 = 'opc=guardacompra'+'&fecha='+fecha+'&idprov='+val_proveedor+'&monto='+monto;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",
            dataType: "json",
            data: parametros2,
            success: function(response){
                if (response.respuesta ==true)//== true)
                {
                    res1 = true
                    console.log(res1+'------la respuesta');
                    //cont_guarda++;
                    // swal({   title: "Producto Guardado",   text: "el producto se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                    // $('.formu_producto input').val('');
                    // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                    // $('#canguarda_producto').click();
                }
                else 
                    alert("nombre de ususario y/o contraseña incorrectos");
            
            }

        });
//esta es la funcon que le queria comentar al felipe recordar mañana 
         $.each(nombresproducto, function(index){
            console.log($(nombresproducto[index]).text());
            console.log($(cantidadesproducto[index]).val());
            // arr4[index] = $(practiva2[index]).val();

            var parametros = 'opc=guardainventario'+'&nombreproducto='+$(nombresproducto[index]).text()+'&cantidadproducto='+$(cantidadesproducto[index]).val()+'&fecha='+fecha;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        //cont_guarda++;
                        console.log('se logro');
                        // swal({   title: "Producto Guardado",   text: "el producto se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                        // $('.formu_producto input').val('');
                        // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        // $('#canguarda_producto').click();
                    }
                    else{
                        console.log("no se logro");
                    } 
                }

            });
        });
    });

    $('.trapecio').on('click',function(){
        //console.log($('#grch').attr('class'));
        if($('#grch').attr('class')=='glyphicon glyphicon-triangle-left'){
            $('#grch').removeClass('glyphicon glyphicon-triangle-left');
            $('#grch').addClass('glyphicon glyphicon-triangle-right');
            $('#menurojo').removeClass('expanded');
            $('#menurojo').addClass('collapsed');
            $('.trapecio').css('left','65px');
            $('.op_menu p').css('display','none');
            $('.offico').addClass('onico');
            $('.onico').removeClass('offico');
            $('.contenedor').removeClass('contenido-expanded');
            $('.contenedor').addClass('contenido-collapsed');



        }
        else{
            $('#grch').removeClass('glyphicon glyphicon-triangle-right');
            $('#grch').addClass('glyphicon glyphicon-triangle-left');
            $('#menurojo').addClass('expanded');
            $('#menurojo').removeClass('collapsed');
            $('.trapecio').css('left','100%');
            $('.op_menu p').css('display','block');
            $('.onico').addClass('offico');
            $('.offico').removeClass('onico');
            $('.contenedor').removeClass('contenido-collapsed');
            $('.contenedor').addClass('contenido-expanded');

        }


    });

    $("#opc_venta").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

    });

    $("#opc_inventario").on('click',function(){
        
        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

        $('#secinventario').toggle();


    });

    $("#opc_gastos").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

        $.ajax({
           url: 'data/Gastos.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });

    });

    $("#opc_corte").on('click',function(){
        
        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }
        
        $('#seccorte').toggle();

    });

    var x;

    $(window).resize(function(){
        x = $(window).width();
        if (x < 992){
            $('.offico').addClass('onico');
            $('.onico').removeClass('offico');
        }
        else{
            $('.onico').addClass('offico');
            $('.offico').removeClass('onico');
        }
    });

  // EVENTOS PARA CERRAR E INICIAR SESION
    $('#btn_logout').on('click',function(){
        logout();
    })
    $('#btn_log').on('click',function(){
        log();
    })

    $('.cen_log').keypress(function(e) {
        if (e.which == 13) {
            $('#btn_log').click();
        }
    });
    
    $(document).on('click','#agrega_pro',function(){
        $('.agrega_prove').css('display','block');
        $('.borra_prove').css('display','none');

    });

    $(document).on('click','#elimina_pro',function(){
        $('.borra_prove').css('display','block');
        $('.agrega_prove').css('display','none');

    });

    $(document).on('click','#agrega_aap',function(){
       var pron = $('#alg_pro').val();
       var parametros = 'opc=guardaprovedor'+'&prove='+pron;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        //cont_guarda++;
                        //console.log('se logro');
                        swal({   title: "proveedor Guardado",   text: "el proveedor se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                        // $('.formu_producto input').val('');
                        // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        // $('#canguarda_producto').click();
                    }
                    else{
                        console.log("no se logro");
                    } 
                }

            });

    });

    $(document).on('click','#btn_abp',function(){
       var pron = $('#car_provedor').val();
       var parametros = 'opc=borraprovedor'+'&prove='+pron;
       console.log(pron);
            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        //cont_guarda++;
                        //console.log('se logro');
                         swal({   title: "Proveedor Borrado",   text: "el proveedor se borro correctamente.",   timer: 2000,   showConfirmButton: false });
                        // $('.formu_producto input').val('');
                        // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        // $('#canguarda_producto').click();
                    }
                    else{
                        console.log("no se logro");
                    } 
                }

            });

    });

    $(document).on('click','#elimina_cap',function(){
        $('#alg_pro').val('');
    });

});

var logout = function(){
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        data: {'opc': 'salir'},
    })
    .done(function() {
        window.location=('/PuntoDeVenta/login.php');
    })
}

var log = function(){
    var nb_user         = $('#usuario').val().trim();
    var nb_password     = $('#password').val().trim();
    var param = {'opc':'entrar','nb_user':nb_user,'nb_password':nb_password};
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        data: param,
    })
    .done(function(login) {
        $('.respuesta').html(login);
        
    })
    .fail(function(login) {
        console.log(login);
    })

}

var usuarios = function(){
    var user = $('#search_usuario').val().trim();
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        // dataType: 'json',
        data: {'opc':'listadoUsuarios','nombre':user},
    })
    .done(function(list) {
        $('.data_grid tbody').html(list);       
    })
    .fail(function(error) {
        console.log(error+'error');
    })
}


// FUNCION A CARGAR ELEMENTOS A MODAL
var change_modal = function(modal){
    $('.modal-body').html(modal);
}

var save = function(save){
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        data: save,
    })
    .done(function(save) {
        if (save != 1) {
            $('#save_user')[0].reset();
            $('.close').click();
            usuarios();       
            swal({  title: "Usuario Agregado",   
                    text: "el usuario se agrego correctamente.",   
                    timer: 2000,   
                    showConfirmButton: false });
        }else{
            $('.validacion').text('Usuario ya existe').fadeIn('slow');
            setTimeout(function() {
                $('.validacion').text('Usuario ya existe').fadeOut('slow');
            }, 10000);
        }
        
    })
    .fail(function() {
        console.log("error");
    })
}

var edit = function(edit)
{
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        dataType: 'json',
        data: edit,
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
}

// FUNCION PARA CARGAR PANTALLA
var view = function(screem){
    $(".contenedor").children().remove();
    $.ajax({
        url: 'views/'+screem+'.php',
        type: 'POST',
    })
    .done(function(screem) {
        $(".contenedor").html(screem);
    })
    .fail(function() {
        console.log("error");
    })
}

function inventarios(){
    var filtrar = $('#busqueda_inventario').val().trim();
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        data: {'opc':'inventarios','filtrar':filtrar},
        success:function(inventario){
            $('.data_grid tbody').html(inventario);       
        },
        error:function(error){
            console.log(error);
        }
    })
}

function checked(){

}








$( document ).ready(function() {

    $(document).on('keyup','.number',function(){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
         var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 8) || (keynum == 46))
        return true;
         
        return /\d/.test(String.fromCharCode(keynum));
    });

    var ancho = $(window).width();
    //console.log (ancho);

    $(document).on('click','#btngasto',function(){
        // var arr4 = [];
        var res1 = false;


        var nombresproducto = $('#ctrl_inv').children('.nom_inv_pro');
        var cantidadesproducto = $('#ctrl_inv').children('.val_inv_pro');
        var cont_guarda = 0;

        var val_proveedor = $('#car_gastos').val();
        var monto = $('#montgastos').val();

        var f = new Date();
        var ano = f.getFullYear();
        var ms = f.getMonth();
        var mes = ms+1;
        var dia = f.getDate();
        var fecha = ano+'-'+mes+'-'+dia;

        var parametros2 = 'opc=guardacompra'+'&fecha='+fecha+'&idprov='+val_proveedor+'&monto='+monto;

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",
            dataType: "json",
            data: parametros2,
            success: function(response){
                if (response.respuesta ==true)//== true)
                {
                    res1 = true
                    console.log(res1+'------la respuesta');
                    //cont_guarda++;
                    // swal({   title: "Producto Guardado",   text: "el producto se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                    // $('.formu_producto input').val('');
                    // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                    // $('#canguarda_producto').click();
                }
                else 
                    alert("nombre de ususario y/o contraseña incorrectos")
            
            }

        });


        $.each(nombresproducto, function(index){
            console.log($(nombresproducto[index]).text());
            console.log($(cantidadesproducto[index]).val());
            // arr4[index] = $(practiva2[index]).val();

            var parametros = 'opc=guardainventario'+'&nombreproducto='+$(nombresproducto[index]).text()+'&cantidadproducto='+$(cantidadesproducto[index]).val()+'&fecha='+fecha;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        cont_guarda++;
                        // swal({   title: "Producto Guardado",   text: "el producto se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                        // $('.formu_producto input').val('');
                        // $('.table').append('<tr id="'+response.res_id+'" data-idprod="'+response.res_id+'"><td id="id'+response.res_id+'">'+response.res_id+'</td><td id="cod'+response.res_id+'">'+response.res_codigo+'</td><td id="prod'+response.res_id+'">'+response.res_producto+'</td><td id="cost'+response.res_id+'">'+response.res_costo+'</td><td id="prec'+response.res_id+'">'+response.res_precio+'</td><td id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        // $('#canguarda_producto').click();
                    }
                    else{
                        alert("nombre de ususario y/o contraseña incorrectos")
                    } 
                }

            });


        });
        // $.each(arr4, function(index){
        //     // console.log(arrr4.length());
        //     console.log(arr4[index]);
        // });
    });
    // EVENTO AUTOCOMPLETE DE PRODUCTOS
    $(document).on('keypress keyup','#cod_kits',function(e){
         var nom_cod_prod = $(this).val();
       
        $.ajax({
            url: 'data/funciones.php',
            type: 'POST',
            cache:false,
            dataType: 'html',
            data: {opc: 'autocomplete_producto',nombre:nom_cod_prod},
            success:function(autocomplete){
                $('.autocomplete .select').html(autocomplete);
            },
            error:function(error){
                console.log(error);
            }
        });
    });

    // $(document).on('keypress keyup','#cod_prod',function(e){
    //      var nom_cod_prod = $(this).val();
    //     if ($(this).val().trim() == '') {
    //         e.stopPropagation;
    //             $('.ul_select').css('display','none');
    //     }
    //     $.ajax({
    //         url: 'data/funciones.php',
    //         type: 'POST',
    //         cache:false,
    //         dataType: 'html',
    //         data: {opc: 'autocomplete_producto',nombre:nom_cod_prod},
    //         success:function(autocomplete){
    //             $('.autocomplete .select').html(autocomplete);
    //         },
    //         error:function(error){
    //             console.log(error);
    //         }
    //     });
    // });

    $(document).on('click','.ul_select li',function(){
        $('#cod_kits').val($(this).data('code'));
        $('.ul_select').css('display','none');
    })

    //  $(document).on('click','.ul_select li',function(){
    //     $('#cod_prod').val($(this).data('code'));
    //     $('.ul_select').css('display','none');
    // })

    // $('.trapecio').on('click',function(){
    //     //console.log($('#grch').attr('class'));
    //     if($('#grch').attr('class')=='glyphicon glyphicon-triangle-left'){
    //         $('#grch').removeClass('glyphicon glyphicon-triangle-left');
    //         $('#grch').addClass('glyphicon glyphicon-triangle-right');
    //         $('#menurojo').removeClass('col-xs-2');
    //         $('#menurojo').addClass('menuch');
    //         $('.trapecio').css('left','65px');
    //         $('.op_menu p').css('display','none');
    //         $('.offico').addClass('onico');
    //         $('.onico').removeClass('offico');



    //     }
    //     else{
    //         $('#grch').removeClass('glyphicon glyphicon-triangle-right');
    //         $('#grch').addClass('glyphicon glyphicon-triangle-left');
    //         $('#menurojo').removeClass('menuch');
    //         $('#menurojo').addClass('col-xs-2');
    //         $('.trapecio').css('left','100%');
    //         $('.op_menu p').css('display','block');
    //         $('.onico').addClass('offico');
    //         $('.offico').removeClass('onico');

    //     }
    // });

    $("#opc_venta").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }
    });

    $("#opc_inventario").on('click',function(){
        
        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

        $('#secinventario').toggle();
    });

    $("#opc_gastos").on('click',function(){
        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

        $.ajax({
           url: 'data/Gastos.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#opc_productos").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

        $.ajax({
           url: 'data/Productos.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#opc_proveedores").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        if($('#seccorte').is(':visible')){
            $('#seccorte').css('display','none');
        }

        $.ajax({
           url: 'data/Proveedores.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });



    $("#sec_opc_gastos").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        $.ajax({
           url: 'data/Compras.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#sec_opc_ventas").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        $.ajax({
           url: 'data/Ventas.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });

    $("#sec_opc_ganancia").on('click',function(){

        if($('#secinventario').is(':visible')){
            $('#secinventario').css('display','none');
        }

        $.ajax({
           url: 'data/Ganancias.php',
           success: function(response) {
              $(".contenedor").html(response);
           }
        });
    });
     
    var x;

    $(window).resize(function(){
        x = $(window).width();
        if (x < 992){
            $('.offico').addClass('onico');
            $('.onico').removeClass('offico');
        }
        else{
            $('.onico').addClass('offico');
            $('.offico').removeClass('onico');
        }
    });

    $(document).on('click','[type="checkbox"]',function(){
        var parent = $(this).parent().parent().parent().parent().prop('id');
        var check = $('#'+parent).find($(this)).prop('id');
        var input;

        if (!$('#'+check).is(':checked')) {
            $(this).prop({'checked':true});
        } else {
            $('#'+parent).each(function(val,index){
                $(this).find('[type="checkbox"]').removeAttr('checked');
            });
            $(this).prop({'checked':true});

            if ($(this).val() == 1) {
                $('#cant_'+parent).prop({'disabled':false});
                $('#cant_rel_'+parent).prop({'disabled':false});
                $('#cod_'+parent).prop({'disabled':false});
            } else {
                $('#cant_'+parent).prop({'disabled':true});
                $('#cod_'+parent).prop({'disabled':true});
                $('#cant_rel_'+parent).prop({'disabled':true});

            }
        }
    });

    $('#menu li a').on('click', function(){
    $('li a.activo').removeClass('activo');
    $(this).addClass('activo');
});

    $(document).on('click','.btn_mod',function(){
        var z = $(this).val();
        //console.log(z);

        switch(z) {
            case '1':
                $('#myModalLabel').text('Ingresar');
                $('.content_prod').html('<div class="add_produc">'
                                            +'<div class="formu_producto">'
                                                +'<div id="prover"></div>'

                                                +'<p class="descadd_produc">C&oacute;digo &nbsp;<span class="glyphicon glyphicon-barcode"></span></p>'
                                                +'<input id="cod_produc" class="in_product form-control" type="text">'
                                                +'<span id="val_cod" class="validador">*</span>'

                                                +'<p class="descadd_produc">Nombre del producto</p>'
                                                +'<input id="nom_produc" class="in_product form-control" type="text">'
                                                +'<span id="val_prod" class="validador">*</span>'

                                                +'<p class="descadd_produc">Descrici&oacute;n del producto</p>'
                                                +'<input id="des_produc" class="in_product form-control" type="text">'
                                                +'<span id="val_des" class="validador">*</span>'

                                                +'<p class="descadd_produc">Costo del producto</p>'
                                                +'<input id="cost_produc" class="in_product number form-control" type="text">'
                                                +'<span id="val_cost" class="validador">*</span>'

                                                +'<p class="descadd_produc">Precio del producto</p>'
                                                +'<input id="pre_product" class="in_product number form-control" type="text">'
                                                +'<span id="val_prec" class="validador">*</span>'

                                                
                                                +'<div class="form-group" id="unidades" style="text-align:left;">'
                                                    +'<div class="col-xs-8">'
                                                        +'<p class="" style="text-align:center;">Se vende por unidades sueltas</p>'
                                                    +'</div>'
                                                    +'<div class="col-sm-1">'
                                                        +'<div class="checkbox" style="margin-top:0;">'
                                                            +'<label>'
                                                                +'<input name="unidades" id="unidades_si" value="1" type="checkbox">Si'
                                                            +'</label>'
                                                        +'</div>'
                                                    +'</div>'
                                                    +'<div class="col-sm-1">'
                                                        +'<div class="checkbox" style="margin-top:0;">'
                                                            +'<label>'
                                                                +'<input name="unidades" id="unidades_no" value="0" type="checkbox" checked>No'
                                                            +'</label>'
                                                        +'</div>'
                                                    +'</div>'
                                                +'</div>'

                                                +'<p class="descadd_produc">Cantidad de unidades</p>'
                                                +'<input id="cant_unidades" class="in_product number form-control" type="text" disabled="true">'
                                                +'<span id="val_unidades" class="validador">*</span>'

                                                +'<div class="form-group" id="kits" style="text-align:left;">'
                                                    +'<div class="col-xs-8">'
                                                        +'<p class="" style="text-align:center;">Kits/Pack</p>'
                                                    +'</div>'
                                                    +'<div class="col-sm-1">'
                                                        +'<div class="checkbox" style="margin-top:0;">'
                                                            +'<label>'
                                                                +'<input name="kits" id="kit_si" value="1" type="checkbox">si'
                                                            +'</label>'
                                                        +'</div>'
                                                    +'</div>'
                                                    +'<div class="col-sm-1">'
                                                        +'<div class="checkbox" style="margin-top:0;">'
                                                            +'<label>'
                                                                +'<input name="kits" id="kit_no" value="0" type="checkbox" checked>no'
                                                            +'</label>'
                                                        +'</div>'
                                                    +'</div>'
                                                +'</div>'

                                                +'<div class="autocomplete">'
                                                    +'<p class="descadd_produc">Producto relacionado <span class="glyphicon glyphicon-barcode"></span></p>'
                                                    +'<input id="cod_kits" class="in_product form-control" type="text" disabled="true">'
                                                    +'<div class="select"></div>'
                                                +'</div>'
                                                +'<span id="val_kits" class="validador">*</span>'

                                                +'<p class="descadd_produc">Cantidad relacionada</p>'
                                                +'<input id="cant_rel_kits" class="in_product numero form-control" type="text" disabled="true">'
                                                +'<span id="val_cant_rel" class="validador">*</span>'
                                            +'</div>'
                                        +'</div>'


                                        +'<script>carga_proovedor();$("#cod_produc").focus();</script>');
                $('.modal-footer').html('<button id="canguarda_producto" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button><button id="guarda_producto" type="button" class="btn btn-success">Guardar <span class="glyphicon glyphicon-ok"></span></button>');
                break;
            case '2':
                var cid  = $(this).parent().parent().parent().data('idprod');
                $('#myModalLabel').text('Editar');
                $('.content_prod').html('<div class="edit_produc"><div class="form_edit"><p class="descedi_produc">C&oacute;digo &nbsp;<span class="glyphicon glyphicon-barcode"></span></p><p id="edit_codprod" class="descedi_produc2"></p><p class="descedi_produc">Nombre del producto</p><p id="edit_nomprod" class="descedi_produc2"></p><p class="descedi_produc">Descrici&oacute;n del producto</p><p id="edit_desprod" class="descedi_produc2"></p><p class="descedi_produc">Costo del producto</p><input id="edit_costproduc" class="in_product" type="text"><p class="descedi_produc">Precio del producto</p><input id="edit_precproduc" class="in_product" type="text"></div><input id="valor_padred" type="hidden" value="'+ cid +'"></div>');
                $('.modal-footer').html('<button id="canactualiza_producto" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button><button id="actualiza_producto" type="button" class="btn btn-success">Guardar <span class="glyphicon glyphicon-ok"></span></button>');
                $('#edit_codprod').text($('#cod'+cid).text());
                $('#edit_nomprod').text($('#prod'+cid).text());
                $('#edit_desprod').text($('#desc'+cid).text());
                $('#edit_costproduc').val($('#cost'+cid).text());
                $('#edit_precproduc').val($('#prec'+cid).text());
                break;
            case '3':
                var cid  = $(this).parent().parent().parent().data('idprod');
                var dlt = $('#cod'+cid).text();
                $('#myModalLabel').text('Eliminar');
                $('.content_prod').html('<div class="dlt_produc"><div class="msg_dltprod"><p>¿esta seguro que desea eliminar el producto de la lista?</p></div><input id="valor_coddigo" type="hidden" value="'+ dlt +'"><input id="valor_padre" type="hidden" value="'+ cid +'"></div>');
                $('.modal-footer').html('<button id="canborra_producto" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button><button id="borra_producto" type="button" class="btn btn-success">Confirmar <span class="glyphicon glyphicon-ok"></span></button>');
                break;
            default:
                console.log('se hizo el default');
        }
    });

    $(document).on('focus','#nom_produc',function(){
        if($('#cod_produc').val()==''){
            $('#cod_produc').focus();
            $('#val_cod').css('display','inline-block');
        }
        else{
            $('#val_cod').css('display','none');
        }
    });

    $(document).on('focus','#des_produc',function(){
        if($('#cod_produc').val()==''){
            $('#cod_produc').focus();
            $('#val_cod').css('display','inline-block');
        }
        else{
            $('#val_cod').css('display','none');
        }
    });

    $(document).on('focus','#cost_produc',function(){
        if($('#cod_produc').val()==''){
            $('#cod_produc').focus();
            $('#val_cod').css('display','inline-block');
        }
        else{
            $('#val_cod').css('display','none');
        }
    });

    $(document).on('focus','#pre_product',function(){
        if($('#cod_produc').val()==''){
            $('#cod_produc').focus();
            $('#val_cod').css('display','inline-block');
        }
        else{
            $('#val_cod').css('display','none');
        }
    });

    $(document).on('click','#guarda_producto',function(){

        if(valida_codigo() & valida_nomprod() & valida_descprod() & valida_cost() & valida_precio()){
            var produ_cod               = $('#cod_produc').val();
            var produ_nom               = $('#nom_produc').val();
            var produ_des               = $('#des_produc').val();
            var produ_cos               = $('#cost_produc').val();
            var produ_pre               = $('#pre_product').val();
            var produ_pro               = $('#pro_produc').val();
            var prod_por_unidades       = $('[name="unidades"]:checked').val();
            var cant_unidades           = $('#cant_unidades').val();
            var kits                    = $('[name="kits"]:checked').val();
            var cod_kits                = $('#cod_kits').val();
            var cantidad_relacionada    = $('#cant_rel_kits').val();


            var f = new Date();
            var ano = f.getFullYear();
            var ms = f.getMonth();
            var mes = ms+1;
            var dia = f.getDate();
            var fecha = ano+'-'+mes+'-'+dia;
            //console.log(fecha);

            var parametros = 'opc=guardaproducto'+'&codigoproducto='+produ_cod+'&nombreproducto='+produ_nom+'&descripcionproducto='+produ_des+'&costoproducto='+produ_cos+'&precioproducto='+produ_pre+'&proveedorproducto='+produ_pro+'&fecha='+fecha+'&prod_por_unidades='+prod_por_unidades+'&cant_unidades='+cant_unidades+'&kits='+kits+'&cod_kits='+cod_kits+'&cantidad_relacionada='+cantidad_relacionada;
            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",                                                                            
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true)//== true)
                    {
                        swal({title: "Producto Guardado",   text: "el producto se guardo correctamente.",   timer: 2000,   showConfirmButton: false });
                        $('.formu_producto input').val('');
                        $('.data_grid tbody').append('<tr id="'+response.res_id+'" data-id prod="'+response.res_id+'"><td style="display:none" id="id'+response.res_id+'">'+response.res_id+'</td><td width="20%" id="cod'+response.res_id+'">'+response.res_codigo+'</td><td width="20%"  id="prod'+response.res_id+'">'+response.res_producto+'</td><td width="15%"  id="cost'+response.res_id+'">'+response.res_costo+'</td><td width="15%" id="prec'+response.res_id+'">'+response.res_precio+'</td><td width="20%"  id="desc'+response.res_id+'">'+response.res_descripcion+'</td><td width="10%" ><div class="edi_prod"><button style="float:left;margin-left:3px;" class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="2"><span class="glyphicon glyphicon-pencil"></span></button></div><div class="edi_prod"><button style="float:left;margin-left:3px;" class="btn btn_mod" data-toggle="modal" data-target="#myModal" value="3"><span class="glyphicon glyphicon-trash"></span></button></div></td></tr>');
                        $('#canguarda_producto').click();
                    }
                    else 
                        alert("nombre de usuario y/o contraseña incorrectos")
                },
                error:function(error){
                    console.log(error);
                }

            });

        }
        else{
            $('#cod_produc').focus();
        }
    });

    $(document).on('click','#borra_producto',function(){
        var bolsa = $('#valor_coddigo').val();
        var borra_renglon = $('#valor_padre').val();

        var f = new Date();
        var ano = f.getFullYear();
        var ms = f.getMonth();
        var mes = ms+1;
        var dia = f.getDate();
        var fecha = ano+'-'+mes+'-'+dia;
        //console.log(fecha);

        if(bolsa != ''){

            var parametros = 'opc=borraproducto'+'&codigoproducto='+bolsa+'&fecha='+fecha;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true){
                        $('#canborra_producto').click();
                        swal({   title: "Producto Borrado",   text: "el producto se elimino correctamente.",   timer: 2000,   showConfirmButton: false });
                        $('tr#'+borra_renglon).remove();
                    }
                    else{
                        alert("elemento no borrado");
                    }
                
                }

            });

        }
    });

    $(document).on('click','#actualiza_producto',function(){
        var edit = $('#valor_padred').val();
        var ed_cod = $('#edit_codprod').text();
        var ed_cost = $('#edit_costproduc').val();
        var ed_prec = $('#edit_precproduc').val();
        // console.log(edit);
        // console.log(ed_cod);
        // console.log(ed_cost);
        // console.log(ed_prec);


        if(ed_cod != ''){

            var parametros = 'opc=actualizaproducto'+'&codigoproducto='+ed_cod+'&costoproducto='+ed_cost+'&precioproducto='+ed_prec;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true){
                        
                        $('tr#'+edit+' td#cost'+edit).text(ed_cost);
                        $('tr#'+edit+' td#prec'+edit).text(ed_prec);
                        $('#canactualiza_producto').click();
                        swal({   title: "Producto Actualizado",   text: "el producto se Actualizo correctamente.",   timer: 2000,   showConfirmButton: false });
                        // $('#'+borra_renglon).remove();
                    }
                    else{
                        alert("elemento no borrado");
                    }
                
                }

            });
        }
    });

    $(document).on('change','#car_gastos',function(){

        var val_proveedor = $('#car_gastos').val();
        console.log(val_proveedor);


        if(val_proveedor != ''){

            var parametros = 'opc=traeproductos'+'&codigoproveedor='+val_proveedor;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true){
                        console.log(response.option);
                        $('#ctrl_inv').html(response.option);
                    }
                    else{
                        swal({   title: "no hay productos de este proveedor",   text: "favor de seleccionar otro proveedor.",   timer: 2000,   showConfirmButton: false });
                    }
                
                }

            });
        }

    });


});

$(document).on('click','.corte_dia',function(){

        var f = new Date();
        var ano = f.getFullYear();
        var ms = f.getMonth();
        var mes = ms+1;
        var dia = f.getDate();
        var fecha = ano+'-'+mes+'-'+dia;

        if(dia == 1){
            if(mes == 1){
                ano = ano-1;
                mes = 12;
                dia = 31;
            }
            else{
                mes = mes-1;

                if(mes==1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
                    dia = 31;
                }

                else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
                    dia = 30;
                }

                else if(mes == 2){
                    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
                        dia =29;
                    }
                    else{
                        dia = 28;
                    }
                }

                else{
                    console.log('no se hizo el año');
                }
            }
        }
        else{
            dia = dia-1;
        }

        // console.log(ano+'-'+mes+'-'+dia);
        var fcom = ano+'-'+mes+'-'+dia
        var co = $(this).val();
        //console.log(z);

        switch(co) {
            case 'compras':
                var parametros = 'opc=gastosdia'+'&fecha='+fcom;
                $.ajax({
                    cache:false,
                    url:"data/funciones.php",
                    type:"POST",
                    dataType: "json",
                    data: parametros,
                    success: function(response){
                        if (response.respuesta == true){
                            //console.log(response.comprasdias);
                            $('.tabla_compras').html(response.comprasdias);
                            $('.total_com').val(response.total_com);
                        }
                        else{
                            swal({   title: "En este dia no existen registros de compra",   text: "favor de revisar en otro momento.",   timer: 3000,   showConfirmButton: false });
                        }
                    
                    }

                });
                //console.log('que puedo hacer con las compras');
                break;
            case 'ventas':
                var parametros = 'opc=ventasdia'+'&fecha='+fcom;
                $.ajax({
                    cache:false,
                    url:"data/funciones.php",
                    type:"POST",
                    dataType: "json",
                    data: parametros,
                    success: function(response){
                        if (response.respuesta == true){
                            //console.log(response.comprasdias);
                            $('#table_venta').html(response.ventadia);
                            $('#total_vend').val(response.total_vend);
                        }
                        else{
                            swal({   title: "En este dia no existen registros de compra",   text: "favor de revisar en otro momento.",   timer: 3000,   showConfirmButton: false });
                        }
                    
                    }

                });
                
                break;
            case 'ganancias':
                var parametros = 'opc=gananciasdia'+'&fecha='+fcom;
                $.ajax({
                    cache:false,
                    url:"data/funciones.php",
                    type:"POST",
                    dataType: "json",
                    data: parametros,
                    success: function(response){
                        if (response.respuesta == true){
                            //console.log(response.comprasdias);
                            $('#table_ganancia').html(response.ganta);
                            //$('#total_vend').val(response.total_vend);
                        }
                        else{
                            swal({   title: "En este dia no existen registros de compra",   text: "favor de revisar en otro momento.",   timer: 3000,   showConfirmButton: false });
                        }
                    
                    }

                });
                
                break;
            default:
                console.log('se hizo el default');
        }
    });

     $(document).on('click','.corte_semana',function(){
        var co = $(this).val();
        //console.log(z);

        switch(co) {
            case 'compras':
                var parametros = 'opc=gastosemana';
                $.ajax({
                    cache:false,
                    url:"data/funciones.php",
                    type:"POST",
                    dataType: "json",
                    data: parametros,
                    success: function(response){
                        if (response.respuesta == true){
                            console.log(response.comprasmes);
                            $('.tabla_compras').html(response.comprasmes);
                            $('.total_com').val(response.total_com);
                        }
                        else{
                            swal({   title: "En este dia no existen registros de compra",   text: "favor de revisar en otro momento.",   timer: 3000,   showConfirmButton: false });
                        }
                    
                    }

                });
                //console.log('que puedo hacer con las compras');
                break;
            case 'ventas':
                var parametros = 'opc=ventasemana';
                $.ajax({
                    cache:false,
                    url:"data/funciones.php",
                    type:"POST",
                    dataType: "json",
                    data: parametros,
                    success: function(response){
                        if (response.respuesta == true){
                            console.log(response.comprasmes);
                            $('#table_venta').html(response.ventadia);
                            $('#total_vend').val(response.total_vend);
                        }
                        else{
                            swal({   title: "En este dia no existen registros de compra",   text: "favor de revisar en otro momento.",   timer: 3000,   showConfirmButton: false });
                        }
                    
                    }

                });
                
                break;
            case 'ganancias':
                var parametros = 'opc=gananciasemana';
                $.ajax({
                    cache:false,
                    url:"data/funciones.php",
                    type:"POST",
                    dataType: "json",
                    data: parametros,
                    success: function(response){
                        if (response.respuesta == true){
                            $('#table_ganancia').html(response.gantasem);

                        }
                        else{
                            swal({   title: "En este dia no existen registros de compra",   text: "favor de revisar en otro momento.",   timer: 3000,   showConfirmButton: false });
                        }
                    
                    }

                });
                
                break;
            default:
                console.log('se hizo el default');
        }
    });

  $(document).on('change','#prove_ga',function(){

        $('#prove_ga').prop('disabled', true);

    });

    $(document).on('change','#co_gas',function(){

        var code = $('#co_gas').val();
        var prov = $('#prove_ga').val();
        // console.log(code);
        if(code != ''){

            var parametros = 'opc=traeproductos2'+'&codigoprodu='+code+'&proveedorprodu='+prov;

            $.ajax({
                cache:false,
                url:"data/funciones.php",
                type:"POST",
                dataType: "json",
                data: parametros,
                success: function(response){
                    if (response.respuesta ==true){
                        //console.log(response.tabpr);
                        $('#table_gasto').append(response.tabpr);
                        //$('#ctrl_inv').html(response.option);
                    }
                    else{
                        swal({   title: "no existe producto",   text: "con este proveedor",   timer: 2000,   showConfirmButton: false });
                    }
                
                }

            });
        }

    });

    $(document).on('change','.cantipro',function(){
        // var arr4 = [];
        var codigo_an = [];
        var cantidad_an = [];

        var tablap = $('table#table_gasto').find('.hit');
        var hijos;
        //console.log(tablap);
        $.each(tablap, function(index2){
            var hijos = $(tablap[index2]).find('td');
            // console.log(tablap[index2]);
            $.each(hijos,function(index3){

                //console.log(hijos[index3]);

                var gan = $(hijos[index3]).attr('class');

                switch(gan) {
                    case 'gacodpro':

                        codigo_an[index2] = $(hijos[index3]).text();

                        break;
                    
                    case 'gacantpro':

                        cantidad_an[index2] = $(hijos[index3]).find('input').val();

                         console.log($(hijos[index3]).find('input').val());

                        break;
                    
                    default:
                        //console.log('esta clase es: '+gan);
                }
            });
        });
        
         var parametros = 'opc=actualizatotal'+'&codigo_an='+JSON.stringify(codigo_an)+'&cantidad_an='+JSON.stringify(cantidad_an);

        $.ajax({
            cache:false,
            url:"data/funciones.php",
            type:"POST",
            dataType: "json",
            data: parametros,
            success: function(response){
                if (response.respuesta ==true){
                    $('#total_ga').val(response.gpt);
                    console.log('se esta mandando gpt');
                }
                else{
                    swal({   title: "no se logro cargar la cantidad",   text: "favor de continuar.",   timer: 2000,   showConfirmButton: false });
                }
            }
        });
    });

function valida_codigo(){
    var cod = $('#cod_produc').val();
    if(cod != ''){
        $('#val_cod').css('display','none');
        return true;
    }
    else{
        $('#val_cod').css('display','inline-block');
        return false;
    }
}

function valida_nomprod(){
    var noprod = $('#nom_produc').val();
    if(noprod != ''){
        $('#val_prod').css('display','none');
        return true;
    }
    else{
        $('#val_prod').css('display','inline-block');
        return false;
    }
}

function valida_descprod(){
    var desprod = $('#des_produc').val();
    if(desprod != ''){
        $('#val_des').css('display','none');
        return true;
    }
    else{
        $('#val_des').css('display','inline-block');
        return false;
    }
}

function valida_cost(){
    var costprod = $('#cost_produc').val();
    if(costprod != ''){
        $('#val_cost').css('display','none');
        return true;
    }
    else{
        $('#val_cost').css('display','inline-block');
        return false;
    }
}

function valida_precio(){
    var precprod = $('#pre_product').val();
    if(precprod != ''){
        $('#val_prec').css('display','none');
        return true;
    }
    else{
        $('#val_prec').css('display','inline-block');
        return false;
    }
}

function carga_proovedor(){
    var parametros = 'opc=cargaproveedor';

    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",
        dataType: "json",
        data: parametros,
        success: function(response){
            if (response.respuesta ==true){
                $('#prover').html('<p class="descadd_produc">Proveedor </p>'+response.prov);
            }
            else{
                alert("elemento no borrado");
            }
        
        }

    });

}


function venta_producto(cod_prod){
    $.ajax({
        url: 'data/funciones.php',
        type: 'POST',
        data: {'opc':'carga_producto_venta','cod_prod':cod_prod},
        success:function(venta){
            var cod = $(document).find('[data-cod='+cod_prod+']');
            var tr  = $('.data_grid').find('tr');
            if (venta.trim() == '' && tr.length == 0) {
                $('#cobrar').prop({'disabled':true});
            } else {
                $('#cobrar').prop({'disabled':false});
            }
            if (cod.length == 0) {
                $('.data_grid tbody').append(venta);
            } else {
               $('.noticia').text('Producto ya existe en la lista cambie Cantidad').fadeIn('slow');
               setTimeout(function() {
                   $('.noticia').text('Producto ya existe en la lista cambie Cantidad').fadeOut('slow');
               }, 5000);
            }


        },
        error:function(error){
            console.log(error);
        }
    })
}

function add_compra(){
    // var arr4 = [];
    var codigo = [];
    var proveedor = $('#prove_ga').val();
    var cantidad = [];
    var total_gastos = $('#total_ga').val();

    //fecha
    var f = new Date();
    var ano = f.getFullYear();
    var ms = f.getMonth();
    var mes = ms+1;
    var dia = f.getDate();
    var fecha = ano+'-'+mes+'-'+dia;

    var tablap = $('table#table_gasto').find('.hit');
    var hijos;
    //console.log(tablap);
    $.each(tablap, function(index2){
        var hijos = $(tablap[index2]).find('td');
        // console.log(tablap[index2]);
        $.each(hijos,function(index3){

            //console.log(hijos[index3]);

            if($(hijos[index3]).attr('class')=='gacantpro'){
                
            }

            var gan = $(hijos[index3]).attr('class');

            switch(gan) {
                case 'gacodpro':

                    codigo[index2] = $(hijos[index3]).text();

                    // var que1 = $(hijos[index3]).text();
                    // console.log(que1);
                    // console.log('si entra al codigo');
                    
                    break;
                
                case 'gacantpro':

                    cantidad[index2] = $(hijos[index3]).find('input').val();

                    // var que = $(hijos[index3]).find('input').val();
                    // console.log(que);
                    // console.log('si entra al ultimo hijo');

                    break;
                
                default:
                    console.log('se hizo el default');
            }



        });
        //hijos = (tablap[index2]).children();
        //console.log(index2);


    });
    // console.log(codigo.length);
    // var prueba = codigo;
    // for (var i=0; i<codigo.length; i++) {
    //     console.log('codigo --->'+prueba[i]+' --->'+proveedor[i]+' --->'+cantidad[i]);
        
    // }
    // var jsonString = JSON.stringify(codigo);
    // var jsonString = JSON.stringify(proveedor);
    // var jsonString = JSON.stringify(cantidad);
    var parametros = 'opc=guardainventario2'+'&vcodigo='+JSON.stringify(codigo)+'&vproveedor='+proveedor+'&vcantidad='+JSON.stringify(cantidad)+'&fecha_c='+fecha+'&total='+total_gastos;

    $.ajax({
        cache:false,
        url:"data/funciones.php",
        type:"POST",
        dataType: "json",
        data: parametros,
        success: function(response){
            if (response.respuesta == true){
                //console.log(response.tabpr);
                //$('#table_gasto').append(response.tabpr);
                //$('#ctrl_inv').html(response.option);
            }
            else{
                swal({   title: "no existe producto",   text: "favor de seleccionar otro proveedor.",   timer: 2000,   showConfirmButton: false });
            }
        
        }

    });
    
}



// function numero(){
//        var keynum = window.event ? window.event.keyCode : e.which;
//         if ((keynum == 8) || (keynum == 46))
//         return true;
         
//         return /\d/.test(String.fromCharCode(keynum));
// }

    




















