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
            <h2>Painel de controle</h2>
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
                    <input type="text" id="id-consulta" placeholder="Id">
                    <span id="consultar"></span>
                    <input type="submit" id="cadastrar" value="Cadastrar">
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
                <h2>Resultado dos clientes<h2>
                <div class="box-table-clientes">    
                    <table id="table-clientes">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Rua</th>
                            <th>Numero</th>
                            <th>Data Entrada</th>
                            <th>Data Saida</th>
                            <th>Maquina</th>
                            <th>Barril 50L</th>
                            <th>Barril 30L</th>
                            <th>Agua</th>
                            <th>Bombona</th>
                            <th>Pães</th>
                            <th>Carvão</th>

                        </tr>
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
                    <input type="text" id="nomeCad" required>
                    <p>Telefone:</p>
                    <input type="text" id="telefoneCad" required>
                    <p>Rua:</p>
                    <input type="text" id="ruaCad" required>
                    <p>Numero da casa:</p>
                    <input type="text" id="numCasaCad" required>
                    <p style="display: inline-block;">Data entrada:</p>
                    <input type="date" id="dataECad" required>
                    <br/>
                    <p style="display: inline-block;">Data saida:</p>
                    <input type="date" id="dataSCad" required>
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
                    <input type="date" id="editDataE" required>
                    <br/>
                    <p style="display: inline-block;">Data saida:</p>
                    <input type="date" id="editDataS" required>
                    <br/>
                    <input type="submit" id="enviar-edit-cliente" value="Enviar edição"/>
                    <input type="submit" id="apagar-cliente" value="Apagar cliente"/>
                <form>
            </div><!--EDITAR CLIENTE-->   
            <div class="editar-produto" >
                <h2>Editar Produto</h2>
                <form>
                    <p>Id cliente:</p>
                    <input type="text" id="id-cliente"/><span class="src-btn"></span>
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