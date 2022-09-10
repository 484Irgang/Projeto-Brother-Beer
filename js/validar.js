
$(document).ready(function(){
    const nome = document.querySelector('#nome');
    const rua = document.querySelector('#rua');
    const numcasa = document.querySelector('#numcasa');
    const select = document.querySelector('#seletor');
    const btn = $('#consultar');
    
    btn.on('click',validar);

    function validar(e){
        e.preventDefault();
            $.ajax({
                url: './php/consultar.php',
                method: 'post',
                dataType: 'json',
                data: {nome: nome.value, rua: rua.value, numcasa: numcasa.value, select: select.value},
                success: function(data){
                        if(select.value === 'Clientes'){
                            mostrarStatusCliente(data);
                        }
                        else if(select.value === 'Tudo'){
                            mostrarStatusTudo(data);
                        }
                },
                erro: function(){
                    console.log('Deu errado');
                }
            })
    }

    function mostrarStatusCliente(data){
        if(data[0] == null){
            $('.box-cadastro').fadeOut();
            $('.box-result-all').fadeOut();
            $('.box-result').fadeOut();
            abrirMsg('Cliente não encontrado');
        }
        else{
            $('.box-cadastro').fadeOut();
            $('.box-result-all').fadeOut();
            $('.box-noFound').fadeOut();
            $('#btn-editar-empresa').fadeOut();
            $('.box-result').fadeIn();
            $('#btn-editar-cliente').fadeIn();
            $('#btn-editar-produto').fadeIn();
            const dados = data[0];
            let boxId = document.querySelector('.idCliente');
            let boxNome = document.querySelector('.nome');
            let boxTelefone = document.querySelector('.telefone');
            let boxRua = document.querySelector('.rua');
            let boxNumcasa = document.querySelector('.numcasa');
            let boxDataE = document.querySelector('.dataE');
            let boxDataS = document.querySelector('.dataS');
            let boxMaquina = document.querySelector('.maquina');
            let boxBarril50 = document.querySelector('.barril50');
            let boxBarril30 = document.querySelector('.barril30');
            let boxAgua = document.querySelector('.agua');
            let boxBombona = document.querySelector('.bombona');
            let boxCarvao = document.querySelector('.carvao');
            let boxPao = document.querySelector('.pao');

            boxId.innerText = dados.id;
            boxNome.innerText = dados.nome;
            boxTelefone.innerText = dados.telefone;
            boxRua.innerText = dados.rua;
            boxNumcasa.innerText = dados.numcasa;
            boxDataE.innerText = dados.dataE;
            boxDataS.innerText = dados.dataS;
            boxMaquina.innerText = dados.maquina;
            boxBarril50.innerText = dados.barril50L;
            boxBarril30.innerText = dados.barril30L;
            boxAgua.innerText = dados.agua;
            boxBombona.innerText = dados.galao;
            boxCarvao.innerText = dados.carvao;
            boxPao.innerText = dados.pao;
        }

    }

    function abrirMsg(d){
        $('.msg').fadeIn();
        $('.box-msg').fadeIn();
        $('html,body').animate({scrollTop: 0});
        $('body').css('overflowY','hidden');
        $('.box-msg h2').html(d);
        $('.box-msg h2').css('color','red');
        $('.msg').on('click', function(){
            location.reload();
        })
    }

    function mostrarStatusTudo(data){

            $('.container').css('max-width','900px');
            $('.box-result-all').fadeIn();
            $('.box-noFound').fadeOut();
            $('.box-result').fadeOut();
            $('.box-cadastro').fadeOut();
            $('#btn-editar-cliente').fadeIn();
            $('#btn-editar-produto').fadeIn();
            $('#btn-editar-empresa').fadeIn();
            const dadosEmp = data[1][0];
            const dadosCli = data[0];
            
            mostrarEmpresa(dadosEmp);
            mostrarClientes(dadosCli);
            
    }

    function mostrarEmpresa(dados){
        $('.barril30Emp').html(dados.barril30);
        $('.barril50Emp').html(dados.barril50);
        $('.aguaEmp').html(dados.agua);
        $('.paoEmp').html(dados.pao);
        $('.carvaoEmp').html(dados.carvao);
    }

    function mostrarClientes(dados){
        $('#table-clientes').html('<tr><th>Id</th><th>Nome</th><th>Telefone</th><th>Rua</th><th>Numero</th><th>Data Entrada</th><th>Data Saida</th><th>Maquina</th><th>Barril 50L</th><th>Barril 30L</th><th>Agua</th><th>Bombona</th><th>Pães</th><th>Carvão</th></tr>');
        for(i=0;i<dados.length;i++){
            $('#table-clientes').append("<tr><th>"+dados[i].id+"</th><th>"+dados[i].nome+"</th><th>"+dados[i].telefone+"</th><th>"+dados[i].rua+"</th><th>"+dados[i].numcasa+"</th><th>"+dados[i].dataE+"</th><th>"+dados[i].dataS+"</th><th>"+dados[i].maquina+"</th><th>"+dados[i].barril50L+"</th><th>"+dados[i].barril30L+"</th><th>"+dados[i].agua+"</th><th>"+dados[i].galao+"</th><th>"+dados[i].pao+"</th><th>"+dados[i].carvao+"</th></tr>");
        }
    }
    
    
})
