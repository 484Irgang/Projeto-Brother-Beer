<?php
    $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
    $pdo = new PDO('mysql:host=localhost;dbname=basedados','root','',$options);

    $btn = $_POST['btn'];

    if($btn == 'despesas'){
        $sql = $pdo->prepare("SELECT * FROM despesas");
        $sql->execute();
        $info = $sql->fetchAll();
        $json = json_encode($info);
        echo $json;
    }

?>