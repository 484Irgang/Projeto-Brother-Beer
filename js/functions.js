window.onload = function(){

    // A função abaixo vai manusear o menu
    manusearMenu();



    // A função abaixo vai manusear o menu
    function manusearMenu(){
        var menuAberto;
        const fundoMenu = document.querySelector('.fundo-menu');
        const menu = document.querySelector('.menu');
        const botao = document.querySelector('#botao');


        menu.addEventListener('click',abrirMenu);
        botao.addEventListener('click',fecharMenu);
        fundoMenu.addEventListener('click',fecharMenu);

        function abrirMenu(e){
            fundoMenu.style.display = 'block';
            document.body.style.overflow = 'hidden';
            menuAberto = true;
        }
        function fecharMenu(e){
            const trajeto = e.target.className;
            if(trajeto == 'menu-nav' || trajeto == 'lista')
            e.preventDefault();
            else{
                if(menuAberto){
                    fundoMenu.style.display = 'none'
                    document.body.style.overflow = 'auto';
                    menuAberto = false;
                }
            }
        }
    }

}