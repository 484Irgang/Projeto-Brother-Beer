$(function(){
    $("#enviar").on('click',validarCadastro);
    $('#cadastrar').on('click',abrirCadastro);

    function abrirCadastro(e){
        e.preventDefault();
        $('.form').fadeOut();
        $('.box-result-all').fadeOut();
        $('.box-result').fadeOut();
        $('.box-noFound').fadeOut();
        $('.box-despesas').fadeOut();
        $('.box-cadastro').fadeIn();
        $('#btn-editar-cliente').fadeOut();
        $('#btn-editar-produto').fadeOut();
        $('#btn-editar-empresa').fadeOut();
    }

    function validarCadastro(){
        const dataInput = $('input[type=date]');
        const select = $('select');
        const nome = $('#nomeCad')[0].value;
        const telefone = $('#telefoneCad')[0].value;
        const rua = $('#ruaCad')[0].value;
        const num = $('#numCasaCad')[0].value;
        const dataEnt = dataInput[0].value.split('-').reverse().join('/');
        const dataSai = dataInput[1].value.split('-').reverse().join('/');
        var maquina;
            if(select[1].value === 'SIM')
                maquina = 1;
            else 
                maquina = 0;
        const barril50 = select[2].value;      
        const barril30 = select[3].value;
        const agua = select[4].value;
        var bombona = select[5].value;
            if(bombona == '0'){
                bombona = agua;
            }
        const pao = select[6].value;
        const carvao = select[7].value;
        
        if(nome == '' || rua == '' || num == ''){
            abrirMsg('');
        }
        else{
            enviarAjax(nome,telefone,rua,num,dataEnt,dataSai,maquina,barril50,barril30,agua,bombona,pao,carvao);
        }
    }    
    
    function enviarAjax(n,t,r,num,dE,dS,m,b50,b30,a,b,p,c){
        $.ajax({
            url: './php/cadastrar.php',
            method: 'post',
            data: {n: n, t: t, r: r, num: num, dE: dE, dS: dS, m: m, b50: b50, b30: b30, a: a, b: b, p: p, c: c},
            erro: function(){
                alert('Deu erro na requisição');
            },
            success: function(data){
                abrirMsg(data);
            }
        })
    }

    function abrirMsg(d){
        if(d == ''){
            $('.msg').css('height',$(document).height()+'px')
            $('.msg').fadeIn();
            $('.box-msg').fadeIn();
            $('html,body').animate({scrollTop: 0});
            $('body').css('overflowY','hidden');
            $('.box-msg h2').html('Os seguintes campos precisam estar preenchidos:<br/><br/>*Nome.<br/>*Rua.<br/>*Numero da casa.');
            $('.box-msg h2').css('color','#d98507').css('fontSize','20px').css('textAlign','left');
            $('.msg').on('click', function(){
                $('.msg').fadeOut();
                $('body').css('overflowY','auto');
            });
        }
        else{
            $('.msg').css('height',$(document).height()+'px')
            $('.msg').fadeIn();
            $('.box-msg').fadeIn();
            $('html,body').animate({scrollTop: 0});
            $('body').css('overflowY','hidden');
            $('.box-msg h2').html(d);
            $('.box-msg h2').css('color','green').css('fontSize','22px').css('textAlign','center');
            $('.msg').on('click', function(){
                location.reload();
            });
        }
    }
    
})