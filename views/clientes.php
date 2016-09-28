						<div class="ventas">
							<div class="btn_add">
								<button id="new_ctl" type="button" class="btn btn-primary" data-toggle="modal" data-target="#reg_ctl"><span class="glyphicon glyphicon-plus ico_add"> </span> Nuevo Cliente</button>
							</div>
							<p class="title_ve">Clientes Registrados</p>
							<!-- prueba -->
							<div class="tab_prod">
								<div class="panel">  
									<table class="table table-hover thead"> 
										<thead> 
											<tr> 
												<th width="20%">Clave Cliente</th> 
												<th width="69%">Nombre</th> 
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
						<div class="modal fade" id="reg_ctl" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog" role="document">
								<div class="modal-content mod_ctl">
									<div class="modal-header hdr_title">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title" id="myModalLabel">Registro Clientes</h4>
									</div>
									<div class="modal-body">
										<div class="num_ctl">
											<p class="cont_cod">Clave: <span class="cod_ctl"> </span></p>
										</div>
										<div class="form_cliente">
											<p class="txt_fctl">Nombre</p><input id="nombre_ctl" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Apellido Paterno</p><input id="apellidoP_ctl" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Apellido Materno</p><input id="apellidoM_ctl" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">R.F.C.</p><input id="rfc_ctl" class="form-control inptrfc_ctl" type="text">
											
										</div>

									</div>
									<div class="modal-footer">
										
										<button id="cancela_ctl" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button>
										<button id="guarda_ctl" type="button" class="btn btn-success" data-dismiss="modal">Guardar <span class="glyphicon glyphicon-floppy-disk"></span></button>	
									</div>
								</div>
							</div>
						</div>
						<!-- Modal -->
						<div class="modal fade" id="edit_ctl" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog" role="document">
								<div class="modal-content mod_ctl">
									<div class="modal-header hdr_title">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title" id="myModalLabel">Actualizacion Clientes</h4>
									</div>
									<div class="modal-body">
										<div class="num_ctl">
											<p class="cont_cod">Clave: <span class="cod_ectl"> </span></p>
										</div>
										<div class="form_cliente">
											<p class="txt_fctl">Nombre</p><input id="nombre_ectl" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Apellido Paterno</p><input id="apellidoP_ectl" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">Apellido Materno</p><input id="apellidoM_ectl" class="form-control inpt_ctl" type="text">
											<p class="txt_fctl">R.F.C.</p><input id="rfc_ectl" class="form-control inptrfc_ctl" type="text">
											
										</div>

									</div>
									<div class="modal-footer">
										
										<button id="unactualiza_ctl" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button>
										<button id="actualiza_ctl" type="button" class="btn btn-success" data-dismiss="modal">Guardar <span class="glyphicon glyphicon-floppy-disk"></span></button>	
									</div>
								</div>
							</div>
						</div>
						<script>
							$( document ).ready(function(){
								carga_clientes();
							});
						</script>
















