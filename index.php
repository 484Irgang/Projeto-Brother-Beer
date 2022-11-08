<?php
 require_once 'head.php'
?>

    <header id="header" class="col-12 bg-danger p-5">
        <div class="link-img"><a href="https://pt.depositphotos.com/stock-photos/abstract.html">Imagem fonte - pt.depositphotos.com</a></div>
        <div class="menu"></div><!--Menu-->
        <div class="fundo-menu">
            <div class="menu-nav">
                <button type="button" id="botao">X</button>
                <ul class="lista">
                    <li class="li"><a href="#header">Home</a></li>
                    <li class="li"><a href="#s2">Produtos</a></li>
                    <li class="li"><a href="saibamais.php">Saiba mais</a></li>
                    <li class="li"><a href="#footer">Contato</a></li>
                </ul>
            </div>
        <div style="clear: both;"></div>    
        </div>
        <div class="container-lg my-5">
            <div class="row align-items-center">
                <div class="co-12 col-md-6" id="box-text">
                    <h1 style="font-size: 60px; color: #efb435;" class="text-center d-inline-block my-2">Brother Beer</h1>
                    <p style="color: #e7a766;" class="w-75 d-inline-block fs-5 text-start">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                </div>
                <div class="col-12 col-md-6" id="box-logo">   
                        <div class="img-logo d-inline-block rounded-circle"></div>   
                </div>
            </div><!-- /.row -->    
        </div><!--container-->
    </header>
    <div class="s1">
        <div class="container-lg">
                <div class="box b1">
                    <h3 style="color: #bc9c62;">Entrega Rápida</h3>
                    <p style="color: #e4ca9c;">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text<br/><i class="fa-solid fa-truck-fast fs-4 my-2"></i></p>
                </div>
                <!-- /.box-1 -->
                <div class="box b2">
                    <h2>Produtos de qualidade</h2>
                    <p style="color: #bc9c62; ">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text<br/><i class="fa-solid fa-circle-check fs-4 my-2"></i></p>
                </div>
                <!-- /.box-2 -->
                <div class="box b3">
                    <h3 style="color: #bc9c62;">Atendimento</h3>
                    <p style="color: #e4ca9c;">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text<br/><i class="fa-solid fa-headset fs-4 my-2"></i></p>
                </div>
                <!-- /.box-3 -->
                <box class="row d-flex w-100">
                    <div class=" col-12 col-md-6 py-3">
                        <div class="box-text">
                            <h1 style="font-size: 40px; color: #efb435;">Exclusividade</h1>
                            <p class="w-50 d-inline-block"  style="color: #e7a766;">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                        </div>
                    </div>
                    <!-- /.box-text -->
                    <div class="imagem col-12 col-md-6"></div>
                    <!-- /.imagem -->
                 </box>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.s1 -->
    <div id="s2" class="s2 py-4">
        <div class="container-lg">
            
            <h1 class="h1">Nossos serviços</h1>
            <div class="box2">
                <h1><i style="font-size: 50px; color: #e2a337;" class="fa-solid fa-beer-mug-empty "></i></h1>
                <p style="font-size: 25px; color: #6f4a2e;">Chopp direto do barril</p>
            </div>
            <div style="clear: both;"></div>
            <div class="box2">
                <h1><i style="font-size: 50px; color: #1198d2;" class="fa-solid fa-bottle-water "></i></h1>
                <p style="font-size: 25px; color: #6f4a2e;">Galão de agua 20L</p>
            </div>
            <div style="clear: both;"></div>
            <div class="box2">
                <h1><i style="font-size: 50px; color: #8b692f;" class="fa-solid fa-bread-slice "></i></h1>
                <p style="font-size: 25px; color: #6f4a2e;">Pão feito na hora</p>
            </div>
            <div style="clear: both;"></div>
            <div class="box2">
                <h1><i style="font-size: 50px; color: #a92920;" class="fa-solid fa-fire-burner "></i></h1>
                <p style="font-size: 25px; color: #6f4a2e;">Carvão</p>
            </div>
            <div style="clear: both;"></div>
            <button id="botao2">Saiba mais</button>
            <div style="top: 100%; left: 0; transform: translateY(-100%);" class="link-img"><a href="https://br.depositphotos.com/stock-photos/industrial.html">Imagem fonte - pt.depositphotos.com</a></div>
        </div>
    </div><!--SESSÃO-2 -->
    <?php
        require_once 'footer.php';
    ?>