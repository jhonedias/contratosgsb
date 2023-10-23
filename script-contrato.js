function preencheExtrato(){
    let data = 			$('#form1-data').val();
    let solicitante = 		$('#form1-solicitante-nome').val();
    let solicitante2 = 		$('#form1-solicitante-owner').val();
    let area = 			$('#form1-area').val();
    let objeto = 		$('#form1-objeto').val();
    let tipoContrato = 		$('#Tipo-do-contrato').val();
    let tipoContrato2 = 	$('#O-que-sera-contratado').val();
    let contratada = 		$('#form1-contratada').val();
    let contratada2 = 		$('#form1-descricao-da-contratada').val();
    let dadosCadastrais = 	$('#form1-dados-cadastrais').val();
    let valorTotal = 		$('#form1-valor-total').val();
    let valorRS = 		$('#form1-valor-em-reais').val();
    let contratosHCT = 		$('#Valor-total---informacoes-de-honorarios').val();
    let formaPagamento = 	$('#form1-forma-de-pagamento').val();
    let localExecucao = 	$('#form1-local-de-execucao').val();
    let localExecucao2 = 	$('#Outros---local-de-execucao').val();
    let prazoVigencia = 	$('#form1-prazo-de-vigencia').val();
    let prazoVigencia2 = 	$('#Outro---Prazo-de-vig-ncia').val();
    let clasulaAdversa = 	$("#radio-form1 input[type='radio']:checked").val();
    let anexo1 = 		$('#Value-approval-form1').val().replace(/.*(\/|\\)/, '');
    let anexo2 = 		$('#Contrato-social').val().replace(/.*(\/|\\)/, '');
    let anexo3 = 		$('#Due-diligence-approval-5').val().replace(/.*(\/|\\)/, '');
    let anexo4 = 		$('#Proposta-comercial').val().replace(/.*(\/|\\)/, '');
    let anexo5 = 		$('#RFA-ou-G360').val().replace(/.*(\/|\\)/, '');
    let anexo6 = 		$('#Safety-language').val().replace(/.*(\/|\\)/, '');
    
    $('#form1-data-text').text(data);
    $('#form1-solicitante-text').text(solicitante);
    $('#form1-solicitanteowner-text').text(solicitante2);
    $('#form1-area-text').text(area);
    $('#form1-objeto-text').text(objeto);
    $('#form1-objetotipo-text').text(tipoContrato);
    $('#form1-objetooquecontratado-text').text(tipoContrato2);
    $('#form1-contratada-text').text(contratada);
    $('#form1-contratadanome-text').text(contratada2);
    $('#form1-dadoscadastrais-text').text(dadosCadastrais);
    $('#form1-valortotal-text').text(valorTotal);
    $('#form1-valortotalemrs-text').text(valorRS);
    $('#form1-valortotalhonorarios-text').text(contratosHCT);
    $('#form1-formapagamento-text').text(formaPagamento);
    $('#form1-localexecucao-text').text(localExecucao);
    $('#form1-localexecucaoespecificacao-text').text(localExecucao2);
    $('#form1-prazovigencia-text').text(prazoVigencia);
    $('#form1-prazovigenciaespecificacao-text').text(prazoVigencia2);
    $('#form1-eventoadverso-text').text(clasulaAdversa);
	$('#form1-anexo1-text').text(anexo1);
	$('#form1-anexo2-text').text(anexo2);
	$('#form1-anexo3-text').text(anexo3);
	$('#form1-anexo4-text').text(anexo4);
	$('#form1-anexo5-text').text(anexo5);
	$('#form1-anexo6-text').text(anexo6);
}

function preencheExtrato2(){
  	let item1 = 	$('#form2-data-name').val();
    let item2 = 	$('#form2-solicitante-nome').val();
    let item2_1 = 	$('#form2-solicitante-business-owner').val();
    let item3 = 	$('#form2-area').val();
    let item4 = 	$('#form2-objeto-v2').val();
    let item4_1 = 	$('#form2-tipo-do-contrato').val();
	let item4_2 = 	$('#form2-objeto-do-contrato').val();
    let item5 = 	$('#form2-contratada').val();
    let item5_1 = 	$('#form2-descricao-da-contratada').val();
    let item6 = 	$('#form2-dados-cadastrais').val();
    let item7 = 	$('#form2-valor-total').val();
    let item7_1 = 	$('#form2-valor-em-reais').val();
    let item7_2 = 	$('#form2-Informacos-sobre-honorarios').val();
    let item8 = 	$('#form2-forma-de-pagamento').val();
    let item9 = 	$('#form2-dados-bancarios').val();
    let item9_1 = 	$('#form2-agencia').val();
    let item9_2 = 	$('#form2-conta').val();
    let item10 = 	$('#form2-prazo-de-vigencia').val();
	let item10_1 = 	$('#form2-Outros---prazo-de-vigencia').val();
    let item11 = 	$("#radio-form2 input[type='radio']:checked").val();
    let item12_1 = 	$("#form2-anexo1").val().replace(/.*(\/|\\)/, '');
    let item12_2 = 	$('#form2-anexo2').val().replace(/.*(\/|\\)/, '');
    let item12_3 = 	$('#form2-anexo3').val().replace(/.*(\/|\\)/, '');
    let item12_4 = 	$('#form2-anexo4').val().replace(/.*(\/|\\)/, '');
	
    $('#form2-data-text').text(item1);
    $('#form2-solicitante-text').text(item2);
    $('#form2-solicitanteowner-text').text(item2_1);
    $('#form2-area-text').text(item3);
    $('#form2-objeto-text').text(item4);
    $('#form2-objetotipo-text').text(item4_1);
    $('#form2-objetooquecontratado-text').text(item4_2);
    $('#form2-contratada-text').text(item5);
    $('#form2-contratadanome-text').text(item5_1);
    $('#form2-dadoscadastrais-text').text(item6);
    $('#form2-valortotal-text').text(item7);
    $('#form2-valortotalemrs-text').text(item7_1);
    $('#form2-valortotalhonorarios-text').text(item7_2);
    $('#form2-formapagamento-text').text(item8);
    $('#form2-banco-text').text(item9);
    $('#form2-agencia-text').text(item9_1);
    $('#form2-conta-text').text(item9_2);
    $('#form2-prazovigencia-text').text(item10);
$('#form2-prazovigenciaespecificacao-text').text(item10_1);
    $('#form2-eventoadverso-text').text(item11);
	$('#form2-anexo1-text').text(item12_1);
	$('#form2-anexo2-text').text(item12_2);
	$('#form2-anexo3-text').text(item12_3);
	$('#form2-anexo4-text').text(item12_4);
}

function preencheExtrato3(){
  	let item1 = 	$('#form3-Data').val();	
    let item2 = 	$('#form3-Solicitante').val();	
    let item2_1 = 	$('#form3-Solicitante-3').val();	
    let item3 = 	$('#form3-area').val();	
    let item4 = 	$('#form3-objeto').val();	
    let item4_1 = 	$('#form3-Tipo-do-contrato-2').val();
	let item4_2 = 	$('#form3-Objeto-do-contrato-2').val();
    let item5 = 	$('#form3-Tipo-de-contrato-2').val();
    let item5_1 = 	$('#form3-descricao-da-contratada').val();
    let item6 = 	$('#form3-Dados-cadastrais-3').val();
    let item7_1 = 	$('#form3-Dados-speaker---CPF-2').val();
    let item7_2 = 	$('#form3-Dados-speaker---N-conselho-UF-3').val();
	let item7_3 = 	$('#form3-Dados-speaker---endereco').val();
	let item7_4 = 	$('#form3-Dados-speaker---email-3').val();
    let item8 = 	$('#form3-Valor-Total-4').val();
	let item8_1 = 	$('#form3-Valor-em-reais').val();
	let item8_2 = 	$('#form3-Informacoes-sobre-honorarios').val();
    let item9 = 	$('#form3-Forma-de-pagamento-2').val();
	let item10_1 = 	$('#form3-Dados-bancarios---banco-2').val();
	let item10_2 = 	$('#form3-Dados-bancarios---AG-2').val();
	let item10_3 = 	$('#form3-Dados-bancarios---conta-2').val();
	let item11 = 	$('#form3-Prazo-de-vigencia-v2').val();
    let item12 = 	$("#radio-form3 input[type='radio']:checked").val();
    let item13_1 = 	$('#form3-anexo1').val().replace(/.*(\/|\\)/, '');
    let item13_2 = 	$('#form3-anexo2').val().replace(/.*(\/|\\)/, '');
	
    $('#form3-data-text').text(item1);	
    $('#form3-solicitante-text').text(item2);	
    $('#form3-solicitanteowner-text').text(item2_1);	
    $('#form3-area-text').text(item3);	
    $('#form3-objeto-text').text(item4);	
    $('#form3-objetotipo-text').text(item4_1);
    $('#form3-objetooquecontratado-text').text(item4_2);
    $('#form3-contratada-text').text(item5);
    $('#form3-contratadanome-text').text(item5_1);
    $('#form3-dadoscadastrais-text').text(item6);
    $('#form3-cpf').text(item7_1);
    $('#form3-nConselho').text(item7_2);
    $('#form3-endereco').text(item7_3);
	$('#form3-email').text(item7_4);	
    $('#form3-valortotal-text').text(item8);
	$('#form3-valortotalemrs-text').text(item8_1);
	$('#form3-valortotalhonorarios-text').text(item8_2);
    $('#form3-formapagamento-text').text(item9);
    $('#form3-prazovigenciaespecificacao-text').text(item10_1);
	$('#form3-agencia-text').text(item10_2);
	$('#form3-conta-text').text(item10_3);
    $('#form3-prazovigencia-text').text(item11);
	$('#form3-eventoadverso-text').text(item12);
	$('#form3-anexo1-text').text(item13_1);
	$('#form3-anexo2-text').text(item13_2);
}
  
$('#select-field').on('change', function() {
	let tipoForm = $(this).val();
	if(tipoForm == 1) {
		$('#form-1').slideDown();
		$('#form-2').slideUp();
		$('#form-3').slideUp();
	}else if(tipoForm == 2) {
		$('#form-2').slideDown();
		$('#form-1').slideUp();
		$('#form-3').slideUp();
	}else if(tipoForm == 3){
		$('#form-3').slideDown();
		$('#form-2').slideUp();
		$('#form-1').slideUp();
	}else {
		$('#form-3').slideUp();
		$('#form-2').slideUp();
		$('#form-1').slideUp();
	}
});

$('#form1-objeto').on('change', function() {
	let tipoContrato = $(this).val();
	if(tipoContrato == 'Outro'){
		$('.show-tipo-contrato').slideDown();
	}else {
		$('.show-tipo-contrato').slideUp();
	}
});

$('#form1-local-de-execucao').on('change', function() {
	let localExecucao = $(this).val();
	if(localExecucao == 'Outro'){
		$('.show-local-execucao').slideDown();
	}else {
		$('.show-local-execucao').slideUp();
	}
});

$('#form1-prazo-de-vigencia').on('change', function() {
	let localExecucao = $(this).val();
	if(localExecucao == 'Outro'){
		$('.show-prazo-vigencia').slideDown();
	}else {
		$('.show-prazo-vigencia').slideUp();
	}
});
  
//controle de envio
var controle1 = true;
  
$('#form-produtos-servicos').on( "submit", function( event ) {
	validaDadosForm1();
	
	if(controle == false) {
		return false;
	}else {
  	preencheExtrato();
  }
	
});

function validaDadosForm1(){
	controle = true;
	//data
	let data = $('#form1-data').val();
	validaInputs('#form1-data', data);
  
  //solicitante
  let solicitante = $('#form1-solicitante-nome').val();
	validaInputs('#form1-solicitante-nome', solicitante);
  
  //area
  let area = $('#form1-area').val();
	validaSelects('#form1-area', area);
  
  //objeto
  let objeto = $('#form1-objeto').val();
	validaSelects('#form1-objeto', objeto);
  
  //objeto do contrato
  let objetoContrato = $('#Objeto-do-contrato').val();
	validaInputs('#Objeto-do-contrato', objetoContrato);
  
  //contratada
  let contratada = $('#form1-contratada').val();
	validaSelects('#form1-contratada', contratada);
  
  //descricao contratada
  let descricaoContratada = $('#form1-descricao-da-contratada').val();
	validaInputs('#form1-descricao-da-contratada', descricaoContratada);
  
  //dados cadastrais
  let dadosCadastrais = $('#form1-dados-cadastrais').val();
	validaInputs('#form1-dados-cadastrais', dadosCadastrais);
  
  //valor total
  let valorTotal = $('#form1-valor-total').val();
	validaSelects('#form1-valor-total', valorTotal);
  
  //dados cadastrais
  let valorRS = $('#form1-valor-em-reais').val();
	validaInputs('#form1-valor-em-reais', valorRS);
  
  //forma de pagamento
  let formaPagamento = $('#form1-forma-de-pagamento').val();
	validaSelects('#form1-forma-de-pagamento', formaPagamento);
  
  //local de execucao
  let localExecucao = $('#form1-local-de-execucao').val();
	validaSelects('#form1-local-de-execucao', localExecucao);
  
  //prazo de vigencia
  let prazoVigencia = $('#form1-prazo-de-vigencia').val();
	validaSelects('#form1-prazo-de-vigencia', prazoVigencia);
  
  //clausula de contrato adverso
  var selectedVal = "";
  var selected = $("#radio-form1 input[type='radio']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
  validaInputs('#radio-form1', selectedVal);
  
  //anexos
  let anexo1 = $('#Value-approval-form1').val();
  validaAnexos('#Value-approval-form1', anexo1);
  
  let anexo2 = $('#Contrato-social').val();
  validaAnexos('#Contrato-social', anexo2);
  
  let anexo3 = $('#Due-diligence-approval-5').val();
  validaAnexos('#Due-diligence-approval-5', anexo3);
  
  let anexo4 = $('#Proposta-comercial').val();
  validaAnexos('#Proposta-comercial', anexo4);

  
  let safetyLanguage = $('input[name="safety-language"]:checked').val();

  if(safetyLanguage == 'Sim'){
    let anexo5 = $('#Safety-language').val();
    validaAnexos('#Safety-language', anexo5);
  }else {
    validaAnexos('#Safety-language', 'true');
  }
  
}

//controle de envio
var controle2 = true;
  
$('#form-patrocinio').on("submit", function( event ) {
	validaDadosForm2();
	
	if(controle2 == false) {
		return false;
	}else {
  	preencheExtrato2();
  }
	
});

function validaDadosForm2(){
	controle2 = true;
	//data
	let data = $('#form2-data-name').val();
	validaInputs('#form2-data-name', data);
  
  //solicitante
  let solicitante = $('#form2-solicitante-nome').val();
	validaInputs('#form2-solicitante-nome', solicitante);
  
  //area
  let area = $('#form2-area').val();
	validaSelects('#form2-area', area);
  
  //objeto
  let objeto = $('#form2-objeto-v2').val();
	validaSelects('#form2-objeto-v2', objeto);
  
  //objeto do contrato
  let objetoContrato = $('#form2-objeto-do-contrato').val();
	validaInputs('#form2-objeto-do-contrato', objetoContrato);
  
  //contratada
  let contratada = $('#form2-contratada').val();
	validaSelects('#form2-contratada', contratada);
  
  //descricao contratada
  let descricaoContratada = $('#form2-descricao-da-contratada').val();
	validaInputs('#form2-descricao-da-contratada', descricaoContratada);
  
  //dados cadastrais
  let dadosCadastrais = $('#form2-dados-cadastrais').val();
	validaInputs('#form2-dados-cadastrais', dadosCadastrais);
  
  //valor total
  let valorTotal = $('#form2-valor-total').val();
	validaSelects('#form2-valor-total', valorTotal);
  
  //dados cadastrais
  let valorRS = $('#form2-valor-em-reais').val();
	validaInputs('#form2-valor-em-reais', valorRS);
  
  //forma de pagamento
  let formaPagamento = $('#form2-forma-de-pagamento').val();
	validaSelects('#form2-forma-de-pagamento', formaPagamento);
  
  //dados bancarios
  let banco = $('#form2-dados-bancarios').val();
  validaInputs('#form2-dados-bancarios', banco);
  let agencia = $('#form2-agencia').val();
  validaInputs('#form2-agencia', agencia);
  let conta = $('#form2-conta').val();
  validaInputs('#form2-conta', conta);
  
  
  //prazo de vigencia
  let prazoVigencia = $('#form2-prazo-de-vigencia').val();
	validaSelects('#form2-prazo-de-vigencia', prazoVigencia);
  
  //clausula de contrato adverso
  var selectedVal = "";
  var selected = $("#radio-form2 input[type='radio']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
  validaInputs('#radio-form2', selectedVal);
  
  //anexos
  let anexo1 = $('#form2-anexo1').val();
  validaAnexos('#form2-anexo1', anexo1);
  
  let anexo2 = $('#form2-anexo2').val();
  validaAnexos('#form2-anexo2', anexo2);
  
  let anexo3 = $('#form2-anexo3').val();
  validaAnexos('#form2-anexo3', anexo3);
}

//controle de envio
var controle3 = true;
  
$('#formulario-speaker').on("submit", function( event ) {
	validaDadosForm3();
	
	if(controle3 == false) {
		return false;
	}else {
  	preencheExtrato3();
  }
	
});

function validaDadosForm3(){
	controle3 = true;
	//data
	let data = $('#form3-Data').val();
	validaInputs('#form3-Data', data);
  
  //solicitante
  let solicitante = $('#form3-Solicitante').val();
	validaInputs('#form3-Solicitante', solicitante);
  
  //area
  let area = $('#form3-area').val();
	validaSelects('#form3-area', area);
  
  //objeto
  let objeto = $('#form3-objeto').val();
	validaSelects('#form3-objeto', objeto);
  
  //objeto do contrato
  let objetoContrato = $('#form3-Objeto-do-contrato-2').val();
	validaInputs('#form3-Objeto-do-contrato-2', objetoContrato);
  
  //contratada
  let contratada = $('#form3-Tipo-de-contrato-2').val();
	validaSelects('#form3-Tipo-de-contrato-2', contratada);
  
  //descricao contratada
  let descricaoContratada = $('#form3-descricao-da-contratada').val();
	validaInputs('#form3-descricao-da-contratada', descricaoContratada);
  
  //dados cadastrais
  let dadosCadastrais = $('#form3-Dados-cadastrais-3').val();
	validaInputs('#form3-Dados-cadastrais-3', dadosCadastrais);
  
  //dados do speaker
  let cpfSpeaker = $('#form3-Dados-speaker---CPF-2').val();
	validaInputs('#form3-Dados-speaker---CPF-2', cpfSpeaker);
	
	let numeroConselho = $('#form3-Dados-speaker---N-conselho-UF-3').val();
	validaInputs('#form3-Dados-speaker---N-conselho-UF-3', numeroConselho);
	
	let endereco = $('#form3-Dados-speaker---endereco').val();
	validaInputs('#form3-Dados-speaker---endereco', endereco);
	
	let email = $('#form3-Dados-speaker---email-3').val();
	validaInputs('#form3-Dados-speaker---email-3', email);
  
  //valor total
  let valorTotal = $('#form3-Valor-Total-4').val();
  validaSelects('#form3-Valor-Total-4', valorTotal);
  
  let valorRS = $('#form3-Valor-em-reais').val();
	validaInputs('#form3-Valor-em-reais', valorRS);
  
  //forma de pagamento
  let formaPagamento = $('#form3-Forma-de-pagamento-2').val();
	validaSelects('#form3-Forma-de-pagamento-2', formaPagamento);
  
  //dados bancarios
  let banco = $('#form3-Dados-bancarios---banco-2').val();
  validaInputs('#form3-Dados-bancarios---banco-2', banco);
  let agencia = $('#form3-Dados-bancarios---AG-2').val();
  validaInputs('#form3-Dados-bancarios---AG-2', agencia);
  let conta = $('#form3-Dados-bancarios---conta-2').val();
  validaInputs('#form3-Dados-bancarios---conta-2', conta);
  
  
  //prazo de vigencia
  let prazoVigencia = $('#form3-Prazo-de-vigencia-v2').val();
  validaSelects('#form3-Prazo-de-vigencia-v2', prazoVigencia);
  
  //clausula de contrato adverso
  var selectedVal = "";
  var selected = $("#radio-form3 input[type='radio']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
  validaInputs('#radio-form3', selectedVal);
  
  //anexos
  let anexo1 = $('#form3-anexo1').val();
  validaAnexos('#form3-anexo1', anexo1);
}


function validaInputs(id, valor){
	if(valor != ''){
		$(id).removeClass('validError');
	}else{
		$(id).addClass('validError');
		controle = false;
controle2 = false;
controle3 = false;
	}
}

function validaSelects(id, valor){
	if(valor != 'Vazio'){
		$(id).parent().parent().find('.fs-select_toggle-1').removeClass('validError');
	}else{
		$(id).parent().parent().find('.fs-select_toggle-1').addClass('validError');
		controle = false;
controle2 = false;
controle3 = false;
	}
}

function validaAnexos(id, valor){
	if(valor != ''){
		$(id).parent().removeClass('validError');
	}else{
		$(id).parent().addClass('validError');
		controle = false;
controle3 = false;
controle3 = false;
	}
}


