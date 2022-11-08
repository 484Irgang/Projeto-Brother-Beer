<?php
    // $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
    $pdo = new PDO('mysql:host=localhost;dbname=basedados','root','');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $btn = $_POST['btn'];

    if($btn == 'despesas'){
        $sql = $pdo->prepare("SELECT * FROM despesas");
        $sql->execute();
        $info = $sql->fetchAll();
        $json = json_encode($info);
        echo $json;
    }
    else if($btn == 'envia-cad-desp'){
        $dados = $_POST['d'];
        try{
            $sql = $pdo->prepare("INSERT INTO `despesas` VALUES (?,?,?,?,?,?,?,?,?,?,?)");
            $sql->execute($dados);
        }
        catch(PDOException $e) {
            echo 'data-ja-cad';
        }
    }
    else if($btn == 'src-btn-edit-desp'){
        $data = $_POST['d'];
        $sql = $pdo->prepare("SELECT * FROM `despesas` WHERE `data` = '$data'");
        $sql->execute();
        $info = $sql->fetchAll();
        if($info == null){
            echo '{"0":"nE"}';
        }
        else{
            $json = json_encode($info[0]);
            echo $json;
        }
    }
    else if($btn == 'envia-edit-desp'){
        $dados = $_POST['d'];
       
        $sql = $pdo->prepare("UPDATE despesas SET gasolina = '$dados[1]', gas = '$dados[2]', agua = '$dados[3]', luz = '$dados[4]', aluguel = '$dados[5]', saco = '$dados[6]', oficina = '$dados[7]', copo = '$dados[8]', equipamentos = '$dados[9]', ferramentas = '$dados[10]' WHERE `data` = '$dados[0]'");
        $sql->execute();
        echo 'feito';

    }
    else if($btn == 'enviar-apagar-despesa'){
        $data = $_POST['d'];
        $sql = $pdo->prepare("DELETE FROM `despesas` WHERE `data` = '$data'");
        $sql->execute();
        echo 'feito';
    }

?>