//v1.0 - 18/04/2024
$(".format-data").mask("99/99/9999");
$(".format-cpf").mask("999.999.999-99");
$('.format-cnpj').mask("99.999.999/9999-99");
$(".format-reais").maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.',decimal:',', affixesStay: false});
var controlePassem = true;
//Etapa 1
$('#avancar-1').click(function(){
	var tipoContrato = $('#tipo-contrato').val();
	$('#txt-data-e-numeracao, #txt-forma-de-entrega, #txt-condicoes-pagamento, #txt-local-entrega').find('.campo-obrigatorio').show();
	if (tipoContrato === '') {
		$('#tipo-contrato').parent().parent().addClass('validacao-erro');
	} else {
		$('.nome-formulario').text(tipoContrato);
		$('#tipo-contrato').removeClass('validacao-erro');
		$('#slide-form-1').hide();
		$('#slide-form-2').fadeIn('medium', function(){
    	dataAuto('form1-data');
    });
	}
});
//

//Etapa 2
$('#avancar-2').click(function(){
	controlePassem = true;
	var tipoContrato = $('#tipo-contrato').val();
	$('.campos-extra').hide();
	$('.anexos-do-contrato').hide();
	//aditivo
	if(tipoContrato === 'Aditivo'){
		$('.show-aditivo').show();
		$('.show-aditivo-anexos').show();
		$('.hide-aditivo').hide();
		$('#txt-data-e-numeracao, #txt-forma-de-entrega, #txt-condicoes-pagamento, #txt-proposta-comercial').find('.campo-obrigatorio').hide();
	}
	//work orde
	if(tipoContrato === 'Work Order'){
		$('.show-work-order').show();
		$('.show-work-order-anexos').show();
	}
	//termo de recisao
	if(tipoContrato === 'Termo de Rescisão e Quitação') {
		$('.hide-termo-recisao').hide();
		$('.show-termo-recisao').show();
		$('.show-termo-recisao-anexos').show();
		$('#texto-condicoes-pagamento').text('Informar valores pendentes e a forma de pagamento desses valores');
		$('#txt-condicoes-pagamento, #txt-comprovante-pagamento').find('.campo-obrigatorio').hide();
	}
	//Produtos e serviços
	if(tipoContrato === 'Produtos e Serviços') {
		$('.show-produtos-e-servicos').show();
		$('.show-produtos-e-servicos-anexos').show();
		$('.hide-produtos-e-servicos').hide();
	}
	//
	//stand alone
	if(tipoContrato === 'Proposta Comercial Stand Alone') {
		$('.show-stand-alone').show();
		$('.show-stand-alone-anexos').show();
		$('.hide-stand-alone').hide();
	}
	//Procuração
	if(tipoContrato === 'Procuração') {
		$('.show-procuracao').show();
		$('.show-procuracao-anexos').show();
		$('.hide-procuracao').hide();
		$('#txt-contratada').text('Outorgado (pessoa que vai receber os poderes)');
		$('#txt-contratada-complemento').text('Inserir nome completo da Outorgada.');
		$('#txt-radio--dadoscadastrais-pj').text('Outorgado pessoa jurídica');
		$('#txt-radio--dadoscadastrais-pf').text('Outorgado pessoa física');
		$('#aviso-pular-etapa').show();
	}
	//Master
	if(tipoContrato === 'Master') {
		$('.show-master').show();
		$('.show-master-anexos').show();
		$('.hide-master').hide();
	}
	//CDA
	if(tipoContrato === 'CDA') {
		$('.show-cda').show();
		$('.show-cda-anexos').show();
		$('.hide-cda').hide();
		$('#txt-contratada').text('Parte');
		$('#txt-contratada-complemento').text('Inserir nome completo da parte.');
		$('#txt-radio--dadoscadastrais-pj').text('Parte pessoa jurídica');
		$('#txt-radio--dadoscadastrais-pf').text('Parte pessoa física');
	}
	//patrocinio
	if(tipoContrato === 'Patrocínio') {
		$('.show-patrocinio').show();
		$('.show-patrocinio-anexos').show();
		$('.hide-patrocinio').hide();
	}
	//Speaker
	if(tipoContrato === 'Speaker (master/eventual)') {
		$('.show-speaker').show();
		$('.show-speaker-anexos').show();
		$('.hide-speaker').hide();
	}
	//contratante
	validaSelect('form1-empresa-contratante');
	//
	//solicitante
	validaTxt('form1-solicitante');
	//
	//solicitante email
	validaEmail('form1-solicitante-email');
	//
	//business owner
	validaTxt('form1-business-owner');
	//
	//Area
	validaSelect('form1-area');
	//
	passagem('2','3',controlePassem);
});

//Etapa 3
$('#avancar-3').click(function(){
	controlePassem = true;
	var tipoContrato = $('#tipo-contrato').val();
	excluirValidacao = [];
	idsValidaTxt = ['form1-data-proposta', 'form1-numeracao-proposta', 'form1-forma-de-entrega', 'form1-objeto', 'form1-contratada-complemento'];
	idsValidaSelect = ['form1-contratada'];
	//contrato aditivo
	if(tipoContrato === 'Aditivo'){
		validaRadio('Prorrogar-Prazo');
		if($('input[name="Prorrogar-Prazo"]:checked').val() === 'Sim'){
			validaTxt('aditivo-informe-o-prazo');
		}

		validaRadio('Reajuste-de-Valor');
		if($('input[name="Reajuste-de-Valor"]:checked').val() == 'Sim'){
			validaTxt('aditivo-informe-o-valor');
		}
		//excluir da validação
		excluirValidacao.push('form1-data-proposta', 'form1-numeracao-proposta','form1-forma-de-entrega');
	}
	//contrato termo de recisão e quitação
	if(tipoContrato === 'Termo de Rescisão e Quitação') {
		validaRadio('ProdutosOuServicos');
		if($('input[name="ProdutosOuServicos"]:checked').val() == 'Produtos'){
			validaRadio('ProdutosEntregues');
			
		}else {
			validaRadio('servicosEmPrestacao');
		}
		
		validaRadio('ValorIntegralPago');
		if($('input[name="ValorIntegralPago"]:checked').val() == 'Nao'){
			validaTxt('Complemento-do-valor-integral-pago');
		}
		validaRadio('FornecedorNotificado');
		if($('input[name="FornecedorNotificado"]:checked').val() == 'Sim'){
			validaAnexos('Email-encerramento-contrato');
		}
		validaRadio('ObrigacoesVerificadas');
		if($('input[name="ObrigacoesVerificadas"]:checked').val() == 'Sim'){
			validaAnexos('Email-obriga-es-com-a-rea');
		}
		//excluir da validação
		excluirValidacao.push('form1-data-proposta','form1-numeracao-proposta', 'form1-forma-de-entrega', 'form1-objeto');
	}
	//stand alone
	if(tipoContrato === 'Proposta Comercial Stand Alone') {
		validaTxt('Nome-completo-que-assinara-pelo-fornecedor');
		validaTxt('Cargo-de-quem-assinara-pelo-fornecedor');
		validaEmail('email-de-quem-assinara-pelo-fornecedor');
		validaTxt('Nome-da-testemunha');
		validaEmail('email-da-testemunha');
		validaTxt('CPF-da-testemunha');
		excluirValidacao.push('form1-forma-de-entrega', 'form1-objeto');
	}
	//procuracao
	if(tipoContrato === 'Procuração'){
		validaTxt('Poderes-da-procuracao');
		validaTxt('Validade-da-procuracao');
		validaTxt('Periodo-de-vigencia');
		validaRadio('procuracaoExistente');
		excluirValidacao.push('form1-objeto','form1-data-proposta','form1-numeracao-proposta','form1-forma-de-entrega');
	}
	//MAster
	if(tipoContrato === 'Master'){
		validaRadio('tabelaDeServicos');
		excluirValidacao.push('form1-data-proposta','form1-numeracao-proposta');
	}
	//CDA
	if(tipoContrato === 'CDA'){
		validaTxt('Finalidade');
		excluirValidacao.push('form1-objeto','form1-data-proposta','form1-numeracao-proposta','form1-forma-de-entrega');
	}
	//patrocinio
	if(tipoContrato === 'Patrocínio') {
		excluirValidacao.push('form1-data-proposta','form1-numeracao-proposta','form1-forma-de-entrega');
	}
	//Speaker
	if(tipoContrato === 'Speaker (master/eventual)') {
		excluirValidacao.push('form1-data-proposta','form1-numeracao-proposta','form1-forma-de-entrega');
	}
	////////////////////////////
	idsValidaTxt.forEach(function(idCampo) {
		if (!excluirValidacao.includes(idCampo)) {
			validaTxt(idCampo);
		}
	});
	idsValidaSelect.forEach(function(idCampo) {
		if (!excluirValidacao.includes(idCampo)) {
			validaSelect(idCampo);
		}
	});
	////////////////////////////
	passagem('3','4',controlePassem);
});

//step 4
$('#avancar-4').click(function(){
	controlePassem = true;
	var tipoContrato = $('#tipo-contrato').val();
	excluirValidacao = [];
	idsValidaTxt = ['form1-valor-total','form1-condicoes-pgmento'];
	idsValidaRadio = [];
	//dados cadastrais
	var verificaDadosCadastrais = validaRadio('Dados-Cadastrais');
	if(verificaDadosCadastrais === 'pj'){
		idsValidaTxt.push('form1-dados-cadastrais-cnpj-1');
		$('#form1-dados-cadastrais-cpf1').removeClass('validacao-erro');
	}else {
		idsValidaTxt.push('form1-dados-cadastrais-cpf1');
		$('#form1-dados-cadastrais-cnpj-1').removeClass('validacao-erro');
	}
	
	if(tipoContrato === 'Produtos e Serviços'){
		var verificaCNPJ2 = $('#form1-dados-cadastrais-cnpj-2').val();
		var verificaCNPJ3 = $('#form1-dados-cadastrais-cnpj-3').val();
		
		if(verificaCNPJ2 !== ''){
			$('.anexo-outros-cnpj-2').show();
		}else {
			$('.anexo-outros-cnpj-2').hide();
		}
		if(verificaCNPJ3 !== ''){
			$('.anexo-outros-cnpj-3').show();
		}else {
			$('.anexo-outros-cnpj-3').hide();
		}
	}
	
	if(tipoContrato === 'Aditivo'){
		excluirValidacao.push('form1-condicoes-pgmento','form1-valor-total');
	}
	if(tipoContrato === 'Termo de Rescisão e Quitação'){
		excluirValidacao.push('form1-valor-total','form1-condicoes-pgmento')
	}
	if(tipoContrato === 'Proposta Comercial Stand Alone') {
		excluirValidacao.push('form1-condicoes-pgmento');
	}
	//stand alone
	if(tipoContrato === 'Produtos Comercial Stand Alone') {
		excluirValidacao.push('form1-condicoes-pgmento');
	}
	//procuracao
	if(tipoContrato === 'Procuração'){
		excluirValidacao.push('form1-valor-total','form1-condicoes-pgmento');
	}
	//Master
	if(tipoContrato === 'Master'){
		excluirValidacao.push('form1-valor-total','form1-condicoes-pgmento');
	}
	//CDA
	if(tipoContrato === 'CDA'){
		excluirValidacao.push('form1-valor-total','form1-condicoes-pgmento');
	}
	//spekaer
	if(tipoContrato === 'Speaker (master/eventual)'){
		validaTxt('CPF-speaker');
		validaTxt('Numero-conselho---uf');
		validaEmail('Email-speaker');
		validaTxt('Endereco-do-speaker');
	}
	////////////////
	idsValidaTxt.forEach(function(idCampo) {
		if (!excluirValidacao.includes(idCampo)) {
			validaTxt(idCampo);
		}
	})
	////////////////
	passagem('4','5',controlePassem);
});

//step 5
$('#avancar-5').click(function(){
	controlePassem = true;
	var tipoContrato = $('#tipo-contrato').val();
	excluirValidacao = [];
	idsValidaTxt = ['form1-prazo-do-contrato','form1-prazo-inicio','form1-prazo-fim'];
	idsValidaSelect = ['form1-local-de-execucao'];
	idsValidaRadio = ['RadioFarmaco'];
	
	if(tipoContrato === 'Termo de Rescisão e Quitação'){
		excluirValidacao.push('RadioFarmaco', 'form1-local-de-execucao');
	}
	//procuracao
	if(tipoContrato === 'Procuração'){
		excluirValidacao.push('form1-local-de-execucao','form1-prazo-do-contrato','form1-prazo-inicio','form1-prazo-fim','RadioFarmaco');
	}
	//CDA 
	if(tipoContrato === 'CDA'){
		excluirValidacao.push('form1-local-de-execucao');
	}
	//patrocinio
	if(tipoContrato === 'Patrocínio') {
		validaTxt('Banco','Agencia','Conta');
		excluirValidacao.push('form1-local-de-execucao');
	}
	//speaker
	if(tipoContrato === 'Speaker (master/eventual)') {
		validaTxt('Banco','Agencia','Conta');
		excluirValidacao.push('form1-local-de-execucao');
	}
	//////////
	idsValidaRadio.forEach(function(idCampo) {
		if (!excluirValidacao.includes(idCampo)) {
			if(idCampo === 'RadioFarmaco') {
				var verificaFarmacovigilancia = validaRadio('RadioFarmaco');
				if(verificaFarmacovigilancia === 'Necessaria'){
					//valida os 3 checks
					validaRadio('farmacovigilancia-opcoes');
					validaAnexos('form1-documento-farmacovigilancia');
				}
			}
		}
	});
	idsValidaTxt.forEach(function(idCampo) {
		if (!excluirValidacao.includes(idCampo)) {
			validaTxt(idCampo);
		}
	});
	idsValidaSelect.forEach(function(idCampo) {
		if (!excluirValidacao.includes(idCampo)) {
			validaSelect(idCampo);
		}
	});
	/////////////
	passagem('5','6',controlePassem);
});

//envio e validação de anexos
$('#form-contrato-gsb').on( "submit", function( event ) {
	controlePassem = true;
	var tipoContrato = $('#tipo-contrato').val();
	if(tipoContrato === 'Work Order'){
		validaAnexos('Contrato-Principal-Contrato-Master');
		if($('input[name="AditivoMaster"]:checked').val() == 'Sim'){
			validaAnexos('Aditivo-ao-master');
		}
		validaAnexos('Proposta-Comercial');
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('E-mail-aprova-o-Value-approval-ou-PR');
		validaAnexos('DD');
	}
	if(tipoContrato === 'Aditivo') {
		validaAnexos('Contrato-Principal-Contrato-Master');
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('E-mail-aprova-o-Value-approval-ou-PR');
		validaAnexos('DD');
	}
	if(tipoContrato === 'Termo de Rescisão e Quitação') {
		validaAnexos('Contrato-ou-Estatuto-Social');
	}
	if(tipoContrato === 'Proposta Comercial Stand Alone') {
		validaAnexos('Proposta-Comercial');
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('E-mail-aprova-o-Value-approval-ou-PR');
		validaAnexos('DD');
		validaAnexos('documento-que-comprova-os-poderes');
	}
	if(tipoContrato === 'Master'){
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('DD');
	}
	if(tipoContrato === 'Patrocínio'){
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('Proposta-Comercial');
		validaAnexos('RFA-ou-g360');
		validaAnexos('Mapa-de-stand');
	}
	if(tipoContrato === 'Speaker (master/eventual)'){
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('RFA-ou-g360');
	}
	if(tipoContrato === 'Produtos e Serviços') {
		var verificaCnpj2 = $('.form1-dados-cadastrais-cnpj-2').val();
		var verificaCnpj3 = $('.form1-dados-cadastrais-cnpj-3').val();
		
		validaAnexos('Proposta-Comercial');
		validaAnexos('Contrato-ou-Estatuto-Social');
		validaAnexos('E-mail-aprova-o-Value-approval-ou-PR');
		validaAnexos('DD');
		
		if(verificaCnpj2 !== ''){
			validaAnexos('Contrato-ou-Estatuto-Social-2');
			validaAnexos('DD-2');
		}
		
		if(verificaCnpj3 !== ''){
			validaAnexos('Contrato-ou-Estatuto-Social-3');
			validaAnexos('DD-3');
		}
	}
	if(controlePassem === false) {
		return false;
	}
	
});

function dataAuto(idCampo){
	var campoData = $('#'+idCampo);
    var dataAtual = new Date();
    
    var dia = dataAtual.getDate().toString().padStart(2, '0');
    var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    var ano = dataAtual.getFullYear();
    var dataFormatada = dia + '/' + mes + '/' + ano;
    
    campoData.val(dataFormatada);
		campoData.attr('disabled','true');
}
function validaSelect(idSelect){
	let campoValidar = $('#'+idSelect).val();
	if (campoValidar === '') {
		$('#'+idSelect).parent().parent().addClass('validacao-erro');
		controlePassem = false;
	} else {
		$('#'+idSelect).parent().parent().removeClass('validacao-erro');
	}
}

function validaEmail(idEmail){
	var email = $('#'+idEmail).val();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(email)) {
    $('#'+idEmail).removeClass('validacao-erro');
  } else {
    $('#'+idEmail).addClass('validacao-erro');
		controlePassem = false;
  }
}

function validaTxt(idTxt) {
	let campoValidar = $('#'+idTxt).val();
	if (campoValidar === '' || campoValidar.length < 3) {
		$('#'+idTxt).addClass('validacao-erro');
		controlePassem = false;
	} else {
		$('#'+idTxt).removeClass('validacao-erro');
	}
}

function validaRadio(radioGroup) {
	 var valueRadioChecked = $('input[name="'+radioGroup+'"]:checked').val();
	if ($('input[name="'+radioGroup+'"]:checked').length === 0) {
        $('input[name="'+radioGroup+'"]').parent().find('.f-radio-button').addClass('validacao-erro');
		controlePassem = false;
    } else {
        $('input[name="'+radioGroup+'"]').parent().find('.f-radio-button').removeClass('validacao-erro');
    }
	return valueRadioChecked;
}

function validaAnexos(idAnexo){
	if($('#'+idAnexo).val() !== ''){
		$('#'+idAnexo).parent().removeClass('validacao-erro');
	}else{
		$('#'+idAnexo).parent().addClass('validacao-erro');
		controlePassem = false;
	}
}

function passagem(origem,destino,controlador){
	if(controlador === true) {
		$('#slide-form-'+origem).hide();
		$('#slide-form-'+destino).fadeIn();
    $('html, body').animate({scrollTop : 0}, 800);
	}
}

function voltarStep(origem, destino){
	$('#slide-form-'+origem).hide();
	$('#slide-form-'+destino).fadeIn();
}

function reiniciaForm(){
	$('.campos-extra').hide();
	$('.anexos-do-contrato').hide();
	$('.campo-inicial').show();
	$('#texto-condicoes-pagamento').text('Descrever as condições de pagamento, como: número de parcelas, parcela única, outros.');
	$('#txt-contratada').text('Contratada');
	$('#txt-contratada-complemento').text('Inserir nome completo da Contratada.');
	$('#txt-radio--dadoscadastrais-pj').text('Contratada pessoa jurídica');
	$('#txt-radio--dadoscadastrais-pf').text('Contratada pessoa física');
}

//setagem dos botoes de voltar
$('#voltar1').click(function(){
	voltarStep('2', '1');
	reiniciaForm();
});
$('#voltar2').click(function(){
	voltarStep('3', '2');
});
$('#voltar3').click(function(){
	voltarStep('4', '3');
});
$('#voltar4').click(function(){
	voltarStep('5', '4');
});
$('#voltar5').click(function(){
	voltarStep('6', '5');
});

//controle dos campos de cpf e cnpj
$(document).ready(function(){
    var currentIndex = 1;
    $('#plus-cnpj').click(function() {
        currentIndex++;
        $('#form1-dados-cadastrais-cnpj-' + currentIndex).removeClass('hide');
        if (currentIndex === 3) {
            $(this).addClass('hidden');
        }
    });
});
$(document).ready(function(){
    var currentIndex2 = 1;
    $('#plus-cpf').click(function() {
        currentIndex2++;
        $('#form1-dados-cadastrais-cpf-' + currentIndex2).removeClass('hide');
        if (currentIndex2 === 3) {
            $(this).addClass('hidden');
        }
    });
});
$(document).ready(function(){
    var currentIndex3 = 1;
    $('#plus-email').click(function() {
        currentIndex3++;
        $('#Email-de-quem-recebera-o-serivco---' + currentIndex3).removeClass('hide');
        if (currentIndex3 === 3) {
            $(this).addClass('hidden');
        }
    });
});
