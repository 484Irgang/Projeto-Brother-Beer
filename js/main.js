   
    mediaQuery();
   function mediaQuery(){
        window.addEventListener('load',tamWindow)
        window.addEventListener('resize',tamWindow);
        
        function tamWindow(){
            //CONDIÇÃO SE ESTIVER NA PAGINA SAIBA MAIS 
            if(window.location.pathname === '/Projetos/Brother-Beer/saibamais.php'){
                if(window.innerWidth < 576){
                    const imgProduto = document.querySelectorAll('#img-produto');
                    
                    for(i=0;i<imgProduto.length;i++){
                        imgProduto[i].style.width = "100%";
                        imgProduto[i].style.paddingTop = "100%";
                    }
                }
                else{
                    const imgProduto = document.querySelectorAll('#img-produto');
                    
                    for(i=0;i<imgProduto.length;i++){
                        imgProduto[i].style.width = "40%";
                        imgProduto[i].style.paddingTop = "40%";
                    }
                }
            }    
            //ABAIXO SÃO AS FUNÇÕES NA PAGINA PRINCIPAL
            else{
                const widthWin = window.innerWidth;
                if(widthWin > 992)
                    return tamGrande();
                else if(widthWin > 768)
                    return tamMedio();
                else if(widthWin > 576)
                    return tamPequeno();
                else
                    return extraPequeno();
            }
        }
    
        function tamGrande(){ 
            const boxTexto = document.getElementById('box-text');
            const boxLogo = document.getElementById('box-logo');
            //Acima são elementos do DOM
            boxTexto.classList.remove('text-center');
            boxTexto.classList.add('text-end');
            boxLogo.classList.remove('text-center');
        }
        
        function tamMedio(){
            const boxTexto = document.getElementById('box-text');
            const boxLogo = document.getElementById('box-logo');
            //Acima são elementos do DOM
            boxTexto.classList.remove('text-center');
            boxTexto.classList.add('text-end');
            boxLogo.classList.remove('text-center');
        }

        function tamPequeno(){
            const boxTexto = document.getElementById('box-text');
            const boxLogo = document.getElementById('box-logo');
            //Acima são elementos do DOM
            boxTexto.classList.remove('text-end');
            boxTexto.classList.add('text-center');
            boxLogo.classList.add('text-center');
        } 

        function extraPequeno(){
            const boxTexto = document.getElementById('box-text');
            const boxLogo = document.getElementById('box-logo');
            //Acima são elementos do DOM
            boxTexto.classList.remove('text-end');
            boxTexto.classList.add('text-center');
            boxLogo.classList.add('text-center');
        }
         
}



