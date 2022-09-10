window.onload = function(){
    if(window.location.pathname === '/Projetos/Brother-Beer/saibamais.php'){
        const item = document.querySelectorAll('#item-vitrine');
        const array = [];
        const outrosDesc = document.querySelectorAll('.desc');

        for(i=0;i<item.length;i++){
            array.push(item[i]);
            
            item[i].addEventListener('mouseover',function(){
                if(this.id == 'clck'){
                    this.style.backgroundColor = '#f8f9fa';
                }
                else{
                    this.style.backgroundColor = 'rgba(250,250,250,0.6)';
                }
            });

            item[i].addEventListener('click',function(){
                for(c=0;c<array.length;c++){
                    array[c].removeAttribute('id');
                    array[c].style.backgroundColor = '';
                }
                this.style.backgroundColor = '#f8f9fa';
                this.setAttribute('id','clck');
                const desc = document.querySelector('.desc'+array.indexOf(this));
                for(x=0;x<outrosDesc.length;x++){
                    outrosDesc[x].style.display = 'none';
                }
                desc.style.display = 'inline-block';
                desc.scrollIntoView({block:'start', behavior:'smooth'})
            });

            item[i].addEventListener('mouseout',function(){
                if(this.id == 'clck'){
                    this.style.backgroundColor = '#f8f9fa';
                }
                else{
                    this.style.backgroundColor = '';
                }
             });
            
            
        }
        
    }
    else{
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
            else if( trajeto == 'li'){
            e.preventDefault();
            const id = e.target.children[0].hash;
            document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'})
            fundoMenu.style.display = 'none'
            document.body.style.overflow = 'auto';
            menuAberto = false;
            }
            else{
                if(menuAberto){
                    fundoMenu.style.display = 'none'
                    document.body.style.overflow = 'auto';
                    menuAberto = false;
                }
            }
        }
    }

    href();
    function href(){
       const href = document.querySelectorAll("[href^='#']");
       const sm = document.querySelector("[href='saibamais.php']");
       const btn = document.querySelector('#botao2');
       for(x=0;x<href.length;x++){
        href[x].onclick = function(e){
            e.preventDefault();

            id = this.getAttribute('href');
            document.querySelector(id).scrollIntoView({block:'start', behavior:'smooth'});
                }
        }
        sm.addEventListener('click',abrirSaibaMais);
        btn.addEventListener('click',abrirSaibaMais);

        function abrirSaibaMais(e){
            e.preventDefault();
            window.open('saibamais.php','_self');
        }
    }
}
    chamarWpp();
    function chamarWpp(){
        const btnWpp = document.querySelector('#btn-wpp');
        btnWpp.addEventListener('click',function(){
            window.open('https://wa.me/5547988881415?text=Olá,%20Gostaria%20de%20saber%20sobre%20os%20produtos%20da%20Brother%20Beer!');
        })
        
    }
    
}