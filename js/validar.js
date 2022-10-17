
$(document).ready(function(){
    
    const btn = $('#consultar');
    const btnDespesas = $('#despesas');
    
    btn.on('click',validar);
    btnDespesas.on('click',buscarDespesas);

    function validar(e){
        e.preventDefault();
        const id = document.querySelector('#id-consulta');
        const select = document.querySelector('#seletor');
            $.ajax({
                url: './php/consultar.php',
                method: 'post',
                dataType: 'json',
                data: {id: id.value, select: select.value},
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

    function buscarDespesas(e){
        e.preventDefault();

        $('.box-result-all').fadeOut();
        $('.box-result').fadeOut();
        $('.box-btn').fadeOut();
        $('.box-despesas').fadeIn();

        $.ajax({
            url: './php/despesas.php',
            method: 'post',
            dataType: 'json',
            data: {btn: e.target.id},
            success: function(data){
                mostrarDespesas(data);
            }
        })
    }

    function mostrarStatusCliente(data){
        if(data[0] == null){
            abrirMsg('Cliente não encontrado');
        }
        else{
            $('.box-result-all').fadeOut();
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
        $('.msg').css('height',$(document).height()+'px')
        $('.msg').fadeIn();
        $('.box-msg').fadeIn();
        $('html,body').animate({scrollTop: 0});
        $('body').css('overflowY','hidden');
        $('.box-msg h2').html(d);
        $('.box-msg h2').css('color','#b91c1c');
        $('.msg').on('click', function(){
            location.reload();
        })
    }

    function mostrarStatusTudo(data){
            $('.box-result-all').fadeIn();
            $('.box-result').fadeOut();
            $('.box-btn').fadeIn();
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

    function mostrarDespesas(d){
        $('#table-despesas').html('<tr><th>Data</th><th>Gasolina</th><th>Gás</th><th>Agua</th><th>Luz</th><th>Aluguel</th><th>Saco</th><th>Oficina</th><th>Copo</th><th>Equipamentos</th><th>Ferramentas</th></tr>');
        for(i=0;i<d.length;i++){
            const data = d[i].data.split('-').reverse().join('/');
            
            $('#table-despesas').append("<tr><th>"+data+"</th><th>"+d[i].gasolina+",00</th><th>"+d[i].gas+",00</th><th>"+d[i].agua+",00</th><th>"+d[i].luz+",00</th><th>"+d[i].aluguel+",00</th><th>"+d[i].saco+",00</th><th>"+d[i].oficina+",00</th><th>"+d[i].copo+",00</th><th>"+d[i].equipamentos+",00</th><th>"+d[i].ferramentas+",00</th></tr>");
        }
    }
    
    
})
