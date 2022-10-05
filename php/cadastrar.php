<?php
    // $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
    $pdo = new PDO('mysql:host=108.167.188.55:3306;dbname=broth212_database','broth212_bbeer','110721',$options);

    $nome = $_POST['n'];
    $telefone = $_POST['t'];
    $rua = $_POST['r'];
    $numcasa = $_POST['num'];
    $dataE = $_POST['dE'];
    $dataS = $_POST['dS'];
    $maquina = $_POST['m'];
    $barril50 = $_POST['b50'];
    $barril30 = $_POST['b30'];
    $agua = $_POST['a'];
    $bombona = $_POST['b'];
    $pao = $_POST['p'];
    $carvao = $_POST['c'];

    // $dadosRec = [$barril50,$barril30,$pao,$agua,$carvao];

    $sql = $pdo->prepare("INSERT INTO `clientes` (nome,telefone,rua,numcasa,dataE,dataS,maquina,barril50L,barril30L,agua,galao,pao,carvao) VALUES ('$nome','$telefone','$rua','$numcasa','$dataE','$dataS','$maquina','$barril50','$barril30','$agua','$bombona','$pao','$carvao')");
    $sql->execute();

    echo "Cliente foi adicionado";

    // $sql = $pdo->prepare("SELECT barril50,barril30,pao,agua,bombona,carvao FROM empresa");
    // $sql->execute();
    // $info = $sql->fetchAll();
    // $dadosEmp = $info[0];

    // calcularValorEmp($dadosEmp,$dadosRec,$pdo);

    

    // function calcularValorEmp($dE,$dR,$pdo){
    //     $cont = count($dR);
    //     for($i=0;$i<$cont;$i++){
    //         $dR[$i] = $dE[$i] + $dR[$i];
    //     }

    //     enviarTroca($dR,$pdo);
    // }

    // function enviarTroca($d,$pdo){
    //     $sql = $pdo->prepare("UPDATE empresa SET barril50 = '$d[0]', barril30 = '$d[1]',pao = '$d[2]',agua = '$d[3]',carvao = '$d[4]' WHERE id = '1'");
    //     $sql->execute();
    // }
?>