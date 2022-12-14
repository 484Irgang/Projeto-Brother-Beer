<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="img/logo.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sistema de administração</title>
        <link rel="stylesheet" type="text/css" href="css/estilo.css">
        <script src="js/JQuery.js"></script>
        <script src="js/validar.js"></script>
        <script src="js/cadastrar.js"></script>
        <script src="js/edicao.js"></script>
        <script>
           
        $(function(){
            slct = $('.slct');
            var i = 0;
            while(i<slct.length){
                if(i === 4 || i === 10){
                    for(x=0;x<=500;x++){
                        opt = document.createElement('option');
                        opt.append(x);
                        slct[i].append(opt);
                    }
                }
                else{
                    for(x=0;x<=100;x++){
                        opt = document.createElement('option');
                        opt.append(x);
                        slct[i].append(opt);
                    }
                }
                i++;
            }
        })

        </script>
    </head>
    <body>
        <div class="container">
            <h2 style="color: #6B7280;">Painel de controle</h2>
            <br/>
            <div class="form">
                <form>
                    <span>Selecione qual painel</span>
                    <select id="seletor">
                        <option selected >Tudo</option>
                        <option>Clientes</option>
                    </select>
                    <br/>
                    <p>Id do cliente: </p>
                    <input style="width: calc(100% - 37px);" type="text" id="id-consulta" placeholder="Id">
                    <span id="consultar"></span>
                        <input type="submit" id="cadastrar" value="Cadastrar">
                        <input type="submit" id="despesas" value="Consultar despesas">
                </form>
            </div>    
            <div class="box-result-all">
                <h2>Resultado das vendas da empresa<h2>
                <table id="table-empresa">
                    <tr>
                        <th>Barril 30L: </th>
                        <th class="item barril30Emp"></th>
                    </tr>
                    <tr>
                        <th>Barril 50L: </th>
                        <th class="item barril50Emp"></th>
                    </tr>
                    <tr>
                        <th>Agua: </th>
                        <th class="item aguaEmp"></th>
                    </tr>
                    <tr>
                        <th>Pães: </th>
                        <th class="item paoEmp"></th>
                    </tr>
                    <tr>
                        <th>Carvão: </th>
                        <th class="item carvaoEmp"></th>
                    </tr>
                </table><!--TABELA QUE MOSTRA STATUS DA EMPRESA-->
                <div class="btn-edit-lucros-emp">
                
                    <button id="limpar-lucros">Limpar</button>
                    <button id="calc-lucros">Calcular</button>
                    
                </div>
                <!-- BOTÕES QUE EDITAM OS LUCROS DA EMPRESA -->
                <h2>Resultado dos clientes<h2>
                <div class="box-table-clientes">    
                    <table id="table-clientes">
                    </table> 
                </div><!--TABELA QUE MOSTRA TODOS OS CLIENTES-->
            </div><!--RESPOSTA PARA CONSULTA DE TUDO -->
            <div class="box-result">
                <h2>Resultado Clientes</h2>
                <br/>
                <table class="tabela">
                    <tr>
                        <th>Id: </th>
                        <th class="item idCliente"></th>
                    </tr>
                    <tr>
                        <th>Nome: </th>
                        <th class="item nome"></th>
                    </tr>
                    <tr>
                        <th>Telefone: </th>
                        <th class="item telefone"></th>
                    </tr>
                    <tr>
                        <th>Rua: </th>
                        <th class="item rua"></th>
                    </tr>
                    <tr>
                        <th>Numero: </th>
                        <th class="item numcasa"></th>
                    </tr>
                    <tr>
                        <th>Data de entrada: </th>
                        <th class="item dataE"></th>
                    </tr>
                    <tr>
                        <th>Data de saida: </th>
                        <th class="item dataS"></th>
                    </tr>
                    <tr>
                        <th>Usando máquina: </th>
                        <th class="item maquina"></th>
                    </tr>
                    <tr>
                        <th>Barril 30L: </th>
                        <th class="item barril30"></th>
                    </tr>
                    <tr>
                        <th>Barril 50L: </th>
                        <th class="item barril50"></th>
                    </tr>
                    <tr>
                        <th>Agua: </th>
                        <th class="item agua"></th>
                    </tr>
                    <tr>
                        <th>Bombona: </th>
                        <th class="item bombona"></th>
                    </tr>
                    <tr>
                        <th>Pães: </th>
                        <th class="item pao"></th>
                    </tr>
                    <tr>
                        <th>Carvão: </th>
                        <th class="item carvao"></th>
                    </tr>
                </table>
            </div><!--TABELA QUE MOSTRA STATUS DE UM CLIENTE ESPECIFICO-->
            <div class="box-cadastro">
                <h2>Cadastre o cliente abaixo</h2>
                <br/>
                <div class="form-cadastro">
                    
                    <p>Nome do cliente:</p>
                    <input type="text" id="nomeCad">
                    <p>Telefone:</p>
                    <input type="text" id="telefoneCad">
                    <p>Rua:</p>
                    <input type="text" id="ruaCad">
                    <p>Numero da casa:</p>
                    <input type="text" id="numCasaCad">
                    <p style="display: inline-block;">Data entrada:</p>
                    <input type="date" id="dataECad">
                    <br/>
                    <p style="display: inline-block;">Data saida:</p>
                    <input type="date" id="dataSCad">
                    <br/>
                    <span>Vai usar maquina?</span>
                    <select id="select-maquina">
                        <option>SIM</option>
                        <option selected >NÃO</option>
                    </select>
                    <br/>
                    <span>Barril de 50L:</span>
                    <select class="slct" id="select-barril50">
                    </select>
                    <br/>
                    <span>Barril de 30L:</span>
                    <select class="slct" id="select-barril30">
                    </select>
                    <br/>
                    <span>Aguas:</span>
                    <select class="slct" id="select-agua">
                    </select>
                    <br/>
                    <span>Bombonas:</span>
                    <select class="slct" id="select-bombona">
                    </select>
                    <br/>
                    <span>Pães:</span>
                    <select class="slct" id="select-pao">
                    </select>
                    <br/>
                    <span>Carvão:</span>
                    <select class="slct" id="select-carvão">
                    </select>
                    <br/>
                    <input type="submit" id="enviar" value="Enviar">
                </div>
            </div>
            <div class="box-btn">
                <input type="submit" id="btn-editar-cliente" value="Editar Cliente"/>
                <input type="submit" id="btn-editar-produto" value="Editar Produtos"/>
            </div>    
            <div class="editar-cliente" >
                <h2>Editar cliente</h2>
                <form>
                    <p>Id cliente:</p>
                    <input type="text" id="idCliente"/>
                    <p>Nome:</p>
                    <input type="text" id="editNome" />
                    <p>Telefone:</p>
                    <input type="text" id="editTel" />
                    <p>Rua:</p>
                    <input type="text" id="editRua" />
                    <p>Numero da casa:</p>
                    <input type="text" id="editNumCasa" />
                    <br/>
                    <p style="display: inline-block;">Data entrada:</p>
                    <input type="date" id="editDataE">
                    <br/>
                    <p style="display: inline-block;">Data saida:</p>
                    <input type="date" id="editDataS">
                    <br/>
                    <input type="submit" id="enviar-edit-cliente" value="Enviar edição"/>
                    <input type="submit" id="apagar-cliente" value="Apagar cliente"/>
                <form>
            </div><!--EDITAR CLIENTE-->   
            <div class="editar-produto" >
                <h2>Editar Produto</h2>
                <form>
                    <p>Id cliente:</p>
                    <input style="width: calc(100% - 37px);" type="text" id="id-cliente"/><span class="src-btn"></span>
                    <p>Nome do cliente:</p><span id="put-nome"></span>
                    <br/>
                    <span>Vai usar maquina?</span>
                    <select id="edit-maquina">
                        <option>SIM</option>
                        <option>NÃO</option>
                    </select>
                    <br/>
                    <span>Barril de 50L:</span>
                    <select class="slct" id="edit-barril50L">
                        <option></option>
                    </select>
                    <span class="limpar" id="barril50L"></span>
                    <br/>
                    <span>Barril de 30L:</span>
                    <select class="slct" id="edit-barril30L">
                        <option></option>
                    </select>
                    <span class="limpar" id="barril30L"></span>
                    <br/>
                    <span>Aguas:</span>
                    <select class="slct" id="edit-agua">
                        <option></option>
                    </select>
                    <span class="limpar" id="agua"></span>
                    <br/>
                    <span>Bombonas:</span>
                    <select class="slct" id="edit-galao">
                        <option></option>
                    </select>
                    <br/>
                    <span>Pães:</span>
                    <select class="slct" id="edit-pao">
                        <option></option>
                    </select>
                    <span class="limpar" id="pao"></span>
                    <br/>
                    <span>Carvão:</span>
                    <select class="slct" id="edit-carvao">
                        <option></option>
                    </select>
                    <span class="limpar" id="carvao"></span>
                    <br/>
                    <input type="submit" id="enviar-edit-produto" value="Enviar">
                <form>
            </div><!--EDITAR PRODUTO-->
            <div class="box-despesas">
                <h2>Despesas da empresa</h2>
                <div style="width: 100%; overflow-x: auto;">
                    <table id="table-despesas"></table>
                </div>
                
                <div class="btns-despesa">
                    <input id="cad-despesa" type="submit" value="Cadastrar despesa"/>
                    <input id="edit-despesa" type="submit" value="Editar despesa"/>
                    <input id="calc-despesa" type="submit" value="Calcular total"/>
                </div>

                <div class="cadastro-despesa">
                    <h2>Cadastre as despesas abaixo</h2>

                    <div class="form-desp">
                        <span>Selecione a data:</span><input type="date" id="data-desp"/><br/>
                        <span>Gasolina: </span><input type="number" id="desp-gasolina"/>
                        <span>Gás: </span><input type="number" id="desp-gas"/>
                        <span>Agua: </span><input type="number" id="desp-agua"/>
                        <span>Luz: </span><input type="number" id="desp-luz"/>
                        <span>Aluguel: </span><input type="number" id="desp-aluguel"/>
                        <span>Saco: </span><input type="number" id="desp-saco"/>
                        <span>Oficina: </span><input type="number" id="desp-oficina"/>
                        <span>Copo: </span><input type="number" id="desp-copo"/>
                        <span>Equipamentos: </span><input type="number" id="desp-equip"/>
                        <span>Ferramentas: </span><input type="number" id="desp-ferramenta"/>
                        <input style="background-color: #3b82f6;" id="envia-cad-desp" type="submit" value="Enviar"/>
                    </div>
                </div><!--sessão de cadastro de despesas -->
                
                <div class="edit-desp">
                    <h2>Edite a despesa abaixo</h2>
                    <div class="form-edit-desp">
                        <span>Selecione a data:</span><input type="date" id="data-desp-edit"/><i id="src-btn-edit-desp"></i>
                        <span>Gasolina: </span><input type="number" id="edit-desp-gasolina"/>
                        <span>Gás: </span><input type="number" id="edit-desp-gas"/>
                        <span>Agua: </span><input type="number" id="edit-desp-agua"/>
                        <span>Luz: </span><input type="number" id="edit-desp-luz"/>
                        <span>Aluguel: </span><input type="number" id="edit-desp-aluguel"/>
                        <span>Saco: </span><input type="number" id="edit-desp-saco"/>
                        <span>Oficina: </span><input type="number" id="edit-desp-oficina"/>
                        <span>Copo: </span><input type="number" id="edit-desp-copo"/>
                        <span>Equipamentos: </span><input type="number" id="edit-desp-equip"/>
                        <span>Ferramentas: </span><input type="number" id="edit-desp-ferramenta"/>
                        <input style="background-color: #a3e635;" id="envia-edit-desp" type="submit" value="Enviar"/>
                        <button id="enviar-apagar-despesa" class="apagar-despesa">Apagar despesa</button>
                    </div>
                </div><!-- /.edit-desp -->

            </div>
        </div><!--CONTAINER-->
        <div class="msg">
            <div class="box-msg">
                <img src="./img/logo.png"/>
                <h2></h2>
                <br/>
            </div>
            <div class="box-confirm">
                <h2>Você tem certeza que deseja apagar esse cliente?</h2>
                <input type="button" id="apagar" value="Sim"/>
                <input type="button" id="n-apagar" value="Não"/>
            </div>
        </div><!--MENSAGEM-->
    </body>
</html>