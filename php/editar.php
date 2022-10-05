<?php
    // $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
    $pdo = new PDO('mysql:host=108.167.188.55:3306;dbname=broth212_database','broth212_bbeer','110721',$options);

    $idB = $_POST['idB'];
    $id = $_POST["id"];

    if($idB === 'enviar-edit-cliente'){

        
        if($id === ''){
            echo null;
        }
        else{

            $sql = $pdo->prepare("SELECT nome,telefone,rua,numcasa,dataE,dataS FROM clientes WHERE id = '$id'");
            $sql->execute();
            $info = $sql->fetchAll();
            if($info == null ){
                echo 'nE';
            }
            else{
                $dadosPadrao = $info[0];
                $n = $_POST['n'];
                $t = $_POST['t'];
                $r = $_POST['r'];
                $num = $_POST['num'];
                $dE = $_POST['dE'];
                $dS = $_POST['dS'];

                $dados = [$n,$t,$r,$num,$dE,$dS];

                validarPreenchimento($dadosPadrao,$dados,$id,$pdo);

            }
        }

    }
    else if($idB === 'apagar'){
        $sql = $pdo->prepare("DELETE FROM clientes WHERE id = '$id'");
        $sql->execute();
        echo 'Cliente apagado';
    }
    else if($idB === 'src-btn'){
        $sql = $pdo->prepare("SELECT maquina,barril50L,barril30L,agua,galao,pao,carvao,nome FROM clientes WHERE id = '$id'");
        $sql->execute();
        $info = $sql->fetchAll();
        if($info == ''){
            $json = json_encode($info);
            echo $json;
        }
        else{
            $json = json_encode($info);
            echo $json;
        }

    }
    else if($idB === 'limpar'){
        $idP = $_POST['idP'];
        $sql = $pdo->prepare("SELECT $idP FROM clientes WHERE id = $id");
        $sql->execute();
        $info = $sql->fetchAll();
        adicionarContagem($idP,$info,$pdo);
        if($idP === 'agua' || $idP === 'galao'){
            $sql = $pdo->prepare("UPDATE clientes SET agua = null, galao = null WHERE id = $id");
            $sql->execute();
            echo 'feito-os-2';
        }
        else{
            $sql = $pdo->prepare("UPDATE clientes SET $idP = null WHERE id = $id");
            $sql->execute();
            echo 'feito';
        }
    }
    else if($idB === 'enviar-edit-produto'){
        $m = $_POST['m'];
        $b50 = $_POST['b50'];
        $b30 = $_POST['b30'];
        $a = $_POST['a'];
        $b = $_POST['b'];
        $p = $_POST['p'];
        $c = $_POST['c'];
        $sql = $pdo->prepare("UPDATE clientes SET maquina = '$m', barril50L = '$b50', barril30L = '$b30', agua = '$a', galao = '$b', pao = '$p', carvao = '$c' WHERE id = '$id'");
        $sql->execute();
        echo 'Produtos alterados';
    }

    function adicionarContagem($idP,$p,$pdo){
        if($idP === 'barril50L'){
            $idP = 'barril50';
        }
        else if($idP === 'barril30L'){
            $idP = 'barril30';
        }
        else if($idP === 'galao'){
            $idP = 'agua';
        }
        $sql = $pdo->prepare("SELECT $idP FROM empresa WHERE id = 1");
        $sql->execute();
        $info = $sql->fetchAll();
        $produtoVendido = $info[0][0] + $p[0][0];
        $sql = $pdo->prepare("UPDATE empresa SET $idP = '$produtoVendido' WHERE id = 1");
        $sql->execute();
    }

    function validarPreenchimento($dP,$d,$id,$pdo){
        $cont = count($d);
        for($i=0;$i<$cont;$i++){
            if($d[$i] === ''){
                $d[$i] = $dP[$i];
            }
        }
        
        editarInfoCliente($d,$id,$pdo);
    }

    function editarInfoCliente($d,$id,$pdo){
        $sql = $pdo->prepare("UPDATE clientes SET nome= '$d[0]', telefone= '$d[1]', rua= '$d[2]', numcasa= '$d[3]', dataE= '$d[4]', dataS= '$d[5]' WHERE id= '$id'");
        $sql->execute();
        echo 'Cliente editado';

    }
    
?>