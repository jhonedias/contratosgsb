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
		$('.hide-aditivo').hide();
		$('#txt-data-e-numeracao, #txt-forma-de-entrega, #txt-condicoes-pagamento, #txt-local-entrega, #txt-proposta-comercial').find('.campo-obrigatorio').hide();
	}else {
		$('.show-aditivo').hide();
		$('.hide-aditivo').show();
		$('#txt-data-e-numeracao, #txt-forma-de-entrega, #txt-condicoes-pagamento, #txt-local-entrega, #txt-proposta-comercial').find('.campo-obrigatorio').show();
	}
	//work orde
	if(tipoContrato === 'Work Order'){
		$('.show-work-order').show();
	}else {
		$('.show-work-order').hide();
	}
	//termo de recisao
	if(tipoContrato === 'Termo de Rescisão e Quitação') {
		$('.hide-termo-recisao').hide();
		$('.show-termo-recisao').show();
		$('#texto-condicoes-pagamento').text('Informar valores pendentes e a forma de pagamento desses valores');
		$('#form1-condicoes-pgmento').find('.campo-obrigatorio').hide();
	}else {
		$('.hide-termo-recisao').show();
		$('.show-termo-recisao').hide();
		$('#texto-condicoes-pagamento').text('Descrever as condições de pagamento, como: número de parcelas, parcela única, outros.');
		$('#form1-condicoes-pgmento').find('.campo-obrigatorio').show();
	}
	//Produtos e serviços
	if(tipoContrato === 'Produtos e Serviços') {
		$('.show-produtos-e-serviços').show();
	}else {
		$('.show-produtos-e-serviços').hide();
	}
	//
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
		validaRadio('servicosEmPrestacao');
		validaRadio('ProdutosEntregues');
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
	
	if(tipoContrato === 'Aditivo'){
		excluirValidacao.push('form1-condicoes-pgmento','form1-valor-total');
	}
	if(tipoContrato === 'Termo de Rescisão e Quitação'){
		excluirValidacao.push('form1-valor-total','form1-condicoes-pgmento')
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
	
	if(tipoContrato === 'Aditivo'){
		excluirValidacao.push('form1-local-de-execucao');
	}
	
	if(tipoContrato === 'Termo de Rescisão e Quitação'){
		excluirValidacao.push('RadioFarmaco');
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
	/////////////
	passagem('5','6',controlePassem);
});

//envio e validação de anexos
$('#form-contrato-gsb').on( "submit", function( event ) {
	controlePassem = true;
	var tipoContrato = $('#tipo-contrato').val();
	if(tipoContrato === 'Work Order'){
		validaAnexos('Contrato-Principal-Contrato-Master');
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
		validaAnexos('Comprovante-pagamento');
		validaAnexos('Contrato-ou-Estatuto-Social');
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

//setagem dos botoes de voltar
$('#voltar1').click(function(){
	voltarStep('2', '1');
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
