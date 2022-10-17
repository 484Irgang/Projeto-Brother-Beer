<?php
        $id = $_POST['id'];
        $select = $_POST['select'];

        $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
        $pdo = new PDO('mysql:host=localhost;dbname=basedados','root','',$options);

        if($select === 'Tudo'){
           $sql = $pdo->prepare("SELECT * FROM empresa");
           $sql->execute();
           $infoEmp = $sql->fetchAll();
           $sql = $pdo->prepare("SELECT * FROM clientes");
           $sql->execute();
           $infoCli = $sql->fetchAll();
           $json = json_encode(array($infoCli,$infoEmp));
           echo $json;
        }
        else if($select === 'Clientes'){
            $sql = $pdo->prepare("SELECT * FROM clientes WHERE id = '$id'");
            $sql->execute();
            $info = $sql->fetchAll();
            if($info == null){
                $json = json_encode($info);
                echo $json;
            }
            else{
                $json = json_encode($info);
                echo $json;
            }

        }
?>