<?php
        $nome = $_POST['nome'];
        $rua = $_POST['rua'];
        $numcasa = $_POST['numcasa'];
        $select = $_POST['select'];

        $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
        $pdo = new PDO('mysql:host=108.167.188.55:3306;dbname=broth212_database','broth212_bbeer','110721',$options);

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
           
            
            $sql = $pdo->prepare("SELECT * FROM clientes WHERE nome = '$nome' AND rua = '$rua' AND numcasa = '$numcasa'");
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