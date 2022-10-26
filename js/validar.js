
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
                }
            })
    }

    function buscarDespesas(e){
        e.preventDefault();

        $('.box-result-all').fadeOut();
        $('.box-result').fadeOut();
        $('.box-btn').fadeOut();
        $('.box-despesas').fadeIn();

        $('#cad-despesa').on('click',function(e){
            e.preventDefault();
            $('.edit-desp').fadeOut();
            $('.cadastro-despesa').fadeIn();
            $('html, body').animate({scrollTop: $('.cadastro-despesa')[0].offsetTop}, 'slow')
            $('#envia-cad-desp').on('click',cadastrarDespesa);
        });

        $('#edit-despesa').on('click', function(e){
            e.preventDefault();
            $('.cadastro-despesa').fadeOut();
            $('.edit-desp').fadeIn();
            
            setTimeout(function(){
                $('html, body').animate({scrollTop: $('.edit-desp')[0].offsetTop}, 'slow');
            }, 500);

            $('#src-btn-edit-desp').on('click',srcDespesa)
        });

        

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
            abrirMsg('Cliente não encontrado', '#ef4444');
        }
        else{
            $('.box-result-all').fadeOut();
            $('.box-despesas').fadeOut();
            $('.box-result').fadeIn();
            $('.box-btn').fadeIn();
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

    function abrirMsg(d,cor){
        $('.msg').css('height',$(document).height()+'px')
        $('.msg').fadeIn();
        $('.box-msg').fadeIn();
        // $('html,body').animate({scrollTop: 0});
        $('.box-msg h2').html(d);
        $('.box-msg h2').css('color',cor);
        $('.msg').on('click', function(){
            $('.msg').fadeOut();
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

    function cadastrarDespesa(e){
        e.preventDefault();
        const data = $('#data-desp')[0];

        if(data.value == ''){
            abrirMsg('A data precisa ser preeenchida!','#fb923c');
        }
        else{
            const btn = e.target.id;
            const gasolina = $('#desp-gasolina')[0];
            const gas = $('#desp-gas')[0];
            const agua = $('#desp-agua')[0];
            const luz = $('#desp-luz')[0];
            const aluguel = $('#desp-aluguel')[0];
            const saco = $('#desp-saco')[0];
            const oficina = $('#desp-oficina')[0];
            const copo = $('#desp-copo')[0];
            const equip = $('#desp-equip')[0];
            const ferramenta = $('#desp-ferramenta')[0];

            const dados = [data.value,gasolina.value,gas.value,agua.value,luz.value,aluguel.value,saco.value,oficina.value,copo.value,equip.value,ferramenta.value];

            $.ajax({
                url: './php/despesas.php',
                method: 'post',
                data: {btn:btn,d:dados},
                success: function(d){
                    if(d == 'data-ja-cad'){
                        abrirMsg('Data já cadastrada','#ef4444');
                    }
                    else{
                        abrirMsg('Despesa cadastrada','#A3E635');
                        setTimeout(function(){
                            location.reload();
                        },2500);
                    }
                }
            });
        }
    }
    
    function srcDespesa(e){
        const data = $("#data-desp-edit")[0];

        if(data.value == ''){
            abrirMsg('A data precisa ser preeenchida!','#fb923c');
        }else{
            $.ajax({
                url: './php/despesas.php',
                method: 'post',
                dataType: 'json',
                data: {btn: e.target.id, d: data.value},
                success: function(d){
                   if(d[0] == 'nE'){
                        abrirMsg('Data não encontrada','#ef4444');
                   }
                   else{
                        mostrarSrcDespesas(d);
                   }
                }
            });
        }
    }

    function mostrarSrcDespesas(d){
        const data = $('#data-desp-edit')[0];
        const gasolina = $('#edit-desp-gasolina')[0];
        const gas = $('#edit-desp-gas')[0];
        const agua = $('#edit-desp-agua')[0];
        const luz = $('#edit-desp-luz')[0];
        const aluguel = $('#edit-desp-aluguel')[0];
        const saco = $('#edit-desp-saco')[0];
        const oficina = $('#edit-desp-oficina')[0];
        const copo = $('#edit-desp-copo')[0];
        const equipamento = $('#edit-desp-equip')[0];
        const ferramenta = $('#edit-desp-ferramenta')[0];

        const dados = [data,gasolina,gas,agua,luz,aluguel,saco,oficina,copo,equipamento,ferramenta]

        for(i=0;i<dados.length;i++){
            dados[i].value = d[i];
        }

        $('#envia-edit-desp').on('click',function(e){
            e.preventDefault();
            editarDespesa(e,dados)
        });

        $('#enviar-apagar-despesa').on('click',function(e){
            e.preventDefault();
            apagarDespesa(e,data);
        });
    }

    function apagarDespesa(e,d){
        const btn = e.target.id;
        if(d.value == ''){
            abrirMsg('Coloque a data','#ef4444');
        }
        else{
            abrirMsg('Você tem certeza que deseja apagar?<br/><button class="apagar-confirm-sim">Sim</button><button class="apagar-confirm-nao">Não</button>','#fff')

            $(".apagar-confirm-sim").on('click',function(e){
                e.preventDefault();
                $.ajax({
                    url: './php/despesas.php',
                    method: 'post',
                    data: {btn: btn, d: d.value},
                    success: function(d){
                        if(d == 'feito'){
                            abrirMsg('Despesa excluida com sucesso<br/><a style="padding: 4px 8px; background-color: #70af08; margin: 30px 10px; text-decoration: none; color: #fff; font-size: 18px; font-weight: 500; display: inline-block; border-radius: 8px;" href="./painel.php">Home</a><button style="padding: 4px 8px;margin: 30px 10px;border: none;background-color: #c6b2b2;font-size: 18px; font-weight: 500;border-radius: 8px;color: #27272a; cursor: pointer;">Ok</button>')
                        }
                    }
                })
            })
        }
    }

    function editarDespesa(e,dados){
        const valorDados = [];
        for(i=0;i<dados.length;i++){
            valorDados.push(dados[i].value);
        }
        $.ajax({
            url: './php/despesas.php',
            method: 'post',
            data: {btn: e.target.id, d:valorDados}
        }).done(function(data){
            if(data == 'feito'){
                abrirMsg('Despesa alterada com sucesso!','#A3E635');
                setTimeout(function(){
                    location.reload();
                },2000);
            }
            else{
                alert('Erro ao editar despesa');
            }
        });
    }
})
