$(function(){
    const btnEditCli = $("#btn-editar-cliente");
    const btnEditPro = $("#btn-editar-produto");
    
    btnEditCli.on('click',abrirEditar);
    btnEditPro.on('click',abrirEditar);

    function abrirEditar(e){
        e.preventDefault();
        $('.box-result-all').fadeOut();
        $('.box-result').fadeOut();
        $('.form').fadeOut();

        if(e.target.id === 'btn-editar-cliente'){
            $(".box-btn").fadeOut();
            $('.editar-cliente').fadeIn();
            const enviarEdit = $('#enviar-edit-cliente');
            const btnApagarCliente = $('#apagar-cliente');
            enviarEdit.on('click',validarEnvio);
            btnApagarCliente.on('click',confirmApagar);
        }
        else if(e.target.id === 'btn-editar-produto'){
            $(".box-btn").fadeOut();
            $('.editar-produto').fadeIn();
            const srcBtn = $('.src-btn');
            const btnEnviar = $('#enviar-edit-produto');
            const btnLimpar = $('.limpar');
            srcBtn.on('click',procurarCliente);
            for(i=0;i<btnLimpar.length;i++){
                btnLimpar[i].addEventListener('click',limparProduto)
            }
            btnEnviar.on('click',enviarProduto);
        }

    }

    function validarEnvio(e){
        e.preventDefault();
        if(e.target.id === 'enviar-edit-cliente'){
            const idBtn = e.target.id;
            const id = $('#idCliente')[0].value;
            const nome = $('#editNome')[0].value;
            const tel = $('#editTel')[0].value;
            const rua = $('#editRua')[0].value;
            const numCasa = $('#editNumCasa')[0].value;
            const dataE = $('#editDataE')[0].value.split('-').reverse().join('/');
            const dataS = $('#editDataS')[0].value.split('-').reverse().join('/');
            
            $.ajax({
                url: './php/editar.php',
                method: 'post',
                data: {idB: idBtn, id: id, n: nome, t: tel, r: rua, num: numCasa, dE: dataE, dS: dataS},
                erro: function(){
                    alert("Ocorreu um erro ao enviar a edição!");
                },
                success: function(data){
                   abrirMsg(data);
                }
            });
        }
    }

    function enviarProduto(e){
        e.preventDefault();
        const idB = e.target.id;
        const id = $('#id-cliente')[0].value;
        const select = $("select");
        var maquina = select[8].value;
        if(maquina === 'SIM'){
            maquina = 1;
        }
        else{
            maquina = 0;
        }
        const b50 = select[9].value;
        const b30 = select[10].value;
        const a = select[11].value;
        const b = select[12].value;
        const p = select[13].value;
        const c = select[14].value;

        $.ajax({
            url: './php/editar.php',
            method: 'post',
            data: {idB: idB, id: id, m: maquina, b50: b50, b30: b30, a: a, b: b, p: p, c: c},
            success: function(data){
                abrirMsg(data);
            }
        })
    }

    function limparProduto(e){
        e.preventDefault();
        const produto = $('#edit-'+e.target.id)[0];
        const idPro = e.target.id;
        const idBtn = e.target.className;
        const id = $('#id-cliente')[0].value;
        $.ajax({
            url: './php/editar.php',
            method: 'post',
            data: {idP: idPro, idB: idBtn, id: id},
            success: function(data){
                if(data === 'feito'){
                    produto.value = '';
                }
                else if(data === 'feito-os-2'){
                    $('#edit-agua')[0].value = '';
                    $('#edit-galao')[0].value = '';
                }
            }
        })
    }

    function procurarCliente(e){
        e.preventDefault();
        const idBtn = e.target.className;
        const id = $('#id-cliente')[0].value;
        if(id === ''){
            abrirMsg(id)
        }
        else{
            $.ajax({
                url: './php/editar.php',
                method: 'post',
                data: {idB: idBtn, id: id},
                dataType: 'json',
                success: function(data){
                    if(data == ''){
                        abrirMsg('');
                    }
                    else{
                        mostrarProdutosCliente(data[0]);
                    }
                }
            });
        }
    }

    function mostrarProdutosCliente(d){
        
        const select = $('select');
        var maquina;
        if(d[0] === 0){
            maquina = 'NÃO';
        }
        else{
            maquina = 'SIM';
        }
        select[8].value = maquina;
        select[9].value = d[1];
        select[10].value = d[2];
        select[11].value = d[3];
        select[12].value = d[4];
        select[13].value = d[5];
        select[14].value = d[6];

        $("#put-nome").html(d[7]);
    }
    function confirmApagar(e){
        e.preventDefault();
        $('.msg').fadeIn();
        $('.box-confirm').fadeIn();
        $('html,body').animate({scrollTop: 0});
        $('body').css('overflowY','hidden');
        const apagar = $('#apagar');
        const naoApagar = $('#n-apagar');
        apagar.on('click',apagarCliente);
        naoApagar.on('click', function(e){
            e.preventDefault();
            $('.msg').fadeOut();
            $('.box-confirm').fadeOut();
            $('body').css('overflowY','auto');
        })
    }

    function apagarCliente(e){
        e.preventDefault();
        const idBtn = e.target.id;
        const idCli = $('#idCliente')[0].value;
        if(idCli == ''){
            alert('Coloque o id do cliente que deseja apagar');
        }
        else{
            $.ajax({
                url: './php/editar.php',
                method: 'post',
                data: {idB: idBtn, id: idCli},
                success: function(data){
                    $('.box-confirm').fadeOut();
                    abrirMsg(data);
                }
            })
        }
    }
    function abrirMsg(d){
        if(d == '' || d == 'nE'){
            $('.msg').fadeIn();
            $('.box-msg').fadeIn();
            $('html,body').animate({scrollTop: 0});
            $('body').css('overflowY','hidden');
            $('.box-msg h2').html('Esse id não foi encontrado');
            $('.box-msg h2').css('color','red');
            $('.msg').on('click', function(){
                $('.msg').fadeOut();
                $('.box-msg').fadeOut();
                $('body').css('overflowY','auto');
            })
        }
        else{
            $('.msg').fadeIn();
            $('.box-msg').fadeIn();
            $('html,body').animate({scrollTop: 0});
            $('body').css('overflowY','hidden');
            $('.box-msg h2').html(d);
            $('.msg').on('click', function(){
                location.reload();
            })
        }
    }
});