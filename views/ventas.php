						<div class="ventas">
							<div class="btn_add">
								<button id="new_venta" type="button" class="btn btn-primary" data-toggle="modal" data-target="#mdl_venta"><span class="glyphicon glyphicon-plus ico_add"> </span> Nueva  Venta</button>
							</div>
							<p class="title_ve">Ventas Activas</p>
							<!-- prueba -->
							<div class="tab_prod">
								<div class="panel">  
									<table class="table table-hover thead"> 
										<thead> 
											<tr> 
												<!-- <th>#</th>  -->
												<th width="15%">folio venta</th> 
												<th width="15%">clave cliente</th> 
												<th width="39%">nombre</th>
												<th width="15%">total</th> 
												<th width="15%">fecha</th> 
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
						<!-- modal -->
						<div id="mdl_venta" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content mod_ctl">
									<div class="modal-header hdr_title">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title" id="myModalLabel">Registro Ventas</h4>
									</div>
									<div class="modal-body">
										<div class="num_ctl">
											<p class="cont_cod">Clave: <span class="cod_venta"> </span></p>
										</div>
										<div class="venta_content">
											<div class="mos_ctl">
												<span class="ctl_venta">Cliente</span><input id="npt_vent" type="text" class="form-control npt_vent"><input type="checkbox" id="idctl_ag" value="" style="display:none;"><span id="vtn_rfc"></span>
												<div id="par_clientes">
													<ul id="list_ctl">
														
													</ul>
													
												</div>
												
											</div>
											<hr class="sepa_venta">
											<div class="mos_ctl">
												<span class="ctl_venta">Articulo</span><input id="npta_vent" type="text" class="form-control npt_vent"><input type="checkbox" id="idart_ag" value="" style="display:none;"><button id="agrega_producto" type="button" class="btn" ><span class="glyphicon glyphicon-plus"></span></button>
												<div id="par_articulos">
													<ul id="list_art">
														
													</ul>
													
												</div>
												
											</div>
											<hr class="sep_venta">
											<div class="form_ventas">
												<table class="table table-hover thead2"> 
													<thead> 
														<tr> 
															<!-- <th>#</th>  -->
															<th width="39%">Descri&oacute;n Articulo</th> 
															<th width="15%">Modelo</th> 
															<th width="10%">Cantidad</th> 
															<th width="15%">Precio</th> 
															<th width="15%">Importe</th>
															<th width="5%"></th>
														</tr> 
													</thead> 
												</table>
												<table id="lista_ventas" class="table table-hover"> 
													<thead id="obj_venta"> 
														
													</thead> 
												</table>
											</div>
											<hr class="sep_venta">
											<div class="total_venta">
												<p>
													<span class="titxt_total">Enganche: </span> <span id="enganche_venta" class="cont_total"></span>
												</p>
												<p>
													<span class="titxt_total">Bonificacion Enganche: </span> <span id="bonificacion_venta" class="cont_total"></span>
												</p>
												<p>
													<span class="titxt_total">Total: </span> <span id="total_venta" class="cont_total"></span>
												</p>
											</div>
											<div class="opc_abono">
												<div class="thead"><p class="txt_am">ABONOS MENSUALES</p></div>
												<form action="">
													<table class="table table-hover">
														<tbody> 
															<tr id="tipoabono1">
																<td id="titulot" width="15%">3 ABONOS DE: </td>
																<td id="abonomt" width="15%"></td>
																<td id="totalpt" width="30%"></td>
																<td id="ahorromt" width="30%"></td>
																<td id="selecmt" width="9%"><input type="radio" name="tabono" data-abono=""></td>
															</tr> 
															<tr id="tipoabono2">
																<td id="titulos" width="15%">6 ABONOS DE: </td>
																<td id="abonoms" width="15%"></td>
																<td id="totalps" width="30%"></td>
																<td id="ahorroms" width="30%"></td>
																<td id="selecms" width="9%"><input type="radio" name="tabono" data-abono=""></td>
															</tr> 
															<tr id="tipoabono3">
																<td id="titulon" width="15%">9 ABONOS DE: </td>
																<td id="abonomn" width="15%"></td>
																<td id="totalpn" width="30%"></td>
																<td id="ahorromn" width="30%"></td>
																<td id="selecmn" width="9%"><input type="radio" name="tabono" data-abono=""></td>
															</tr>
															<tr id="tipoabono4">
																<td id="titulod" width="15%">12 ABONOS DE: </td>
																<td id="abonomd" width="15%"></td>
																<td id="totalpd" width="30%"></td>
																<td id="ahorromd" width="30%"></td>
																<td id="selecmd" width="9%"><input type="radio" name="tabono" data-abono=""></td>
															</tr>    
														</tbody>
													</table>
												</form>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										
										<button id="cancela_venta" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar <span class="glyphicon glyphicon-remove"></span></button>
										<button id="sig_venta" type="button" class="btn btn-success">Siguiente <span class="glyphicon glyphicon-chevron-right"></span></button>
										<button id="guarda_venta" type="button" class="btn btn-success">Guardar <span class="glyphicon glyphicon-floppy-disk"></span></button>	
									</div>
								</div>
							</div>
						</div>
						<script>
							$( document ).ready(function(){
								carga_ventas();
							});
						</script>
