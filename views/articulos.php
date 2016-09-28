						<div class="ventas">
							<div class="btn_add">
								<button type="button" id="new_art" class="btn btn-primary" data-toggle="modal" data-target="#reg_art"><span class="glyphicon glyphicon-plus ico_add"> </span> Nuevo Articulo</button>
							</div>
							<p class="title_ve">Articulos Registrados</p>
							<!-- prueba -->
							<div class="tab_prod">
								<div class="panel">  
									<table class="table table-hover thead"> 
										<thead> 
											<tr> 
												<th width="25%">Producto</th> 												
												<th width="64%">Descripci&oacute;n</th> 
												<th width="10%">opciones</th> 
											</tr> 
										</thead> 
									</table>
									<div class="data_grid">
										<table class="table table-hover">
											<tbody>

											</tbody>
										</table>
									</div>
								</div>
							</div>
							<!-- fin prueba -->
						</div>
						<!-- Modal -->
						<div class="modal fade" id="reg_art" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog" role="document">
								<div class="modal-content mod_ctl">
									<div class="modal-header hdr_title">
										<button type="button" ng-click="empleado = {};" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title" id="myModalLabel">Registro Articulos</h4>
									</div>
									<div class="modal-body">
										<div class="num_ctl">
											<p class="cont_cod">Clave: <span class="cod_art"> </span></p>
										</div>
										<div class="form_cliente">
											<p class="txt_fctl">Descripci&oacute;n</p><input id="descripcion_art" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Modelo</p><input id="modelo_art" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Precio</p><input id="precio_art" class="form-control inptpr_art" type="text">
											<p class="txt_fctl">Existencia</p><input id="existencia_art" class="form-control inptex_art" type="text">
										</div>
									</div>
									<div class="modal-footer">
										
										<button id="cancela_art" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button>
										<button id="guarda_art" type="button" class="btn btn-success" data-dismiss="modal">Guardar <span class="glyphicon glyphicon-floppy-disk"></span></button>
									</div>
								</div>
							</div>
						</div>
						<!-- Modal -->
						<div class="modal fade" id="edit_art" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog" role="document">
								<div class="modal-content mod_ctl">
									<div class="modal-header hdr_title">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title" id="myModalLabel">Actualizacion Articulos</h4>
									</div>
									<div class="modal-body">
										<div class="num_ctl">
											<p class="cont_cod">Clave: <span class="cod_eart"> </span></p>
										</div>
										<div class="form_cliente">
											<p class="txt_fctl">Descripci&oacute;n</p><input id="descripcion_eart" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Modelo</p><input id="modelo_eart" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Precio</p><input id="precio_eart" class="form-control inptpr_art snumero" type="text">
											<p class="txt_fctl">Existencia</p><input id="existencia_eart" class="form-control inptex_art snumero" type="text">
											
										</div>

									</div>
									<div class="modal-footer">
										
										<button id="unactualiza_art" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button>
										<button id="actualiza_art" type="button" class="btn btn-success" data-dismiss="modal">Guardar <span class="glyphicon glyphicon-floppy-disk"></span></button>	
									</div>
								</div>
							</div>
						</div>
						<script>
							$( document ).ready(function(){
								carga_articulos();
							});
						</script>










