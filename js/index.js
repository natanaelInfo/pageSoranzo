
const header1 = document.querySelector('header'); /*pego a header aqui */
const butao = document.querySelector('.btnMenu');/*pego o clique do botão */

const list1 = document.querySelector('.list');/*pego a classe que vou querer que apareça */

const iconeDescer1 = document.querySelector('.icone-descer');/*quando clicar no ícone descer */

const footer1 = document.querySelector('footer');/*pego a altura  */


const btnSubir1 = document.querySelector('#btn-subir');

const alturaTopo = footer1.offsetTop;


const ultimoAlbum1 = document.querySelector('.ultimo-album');/*preciso pegar a altura dessa div */


const menu1 = document.querySelector('.menu')/*pegando o menu para verificar se o clique foi dentro ou fora*/




butao.addEventListener('click', showMenu, false); /*evento do botão adicionar e remover classes*/

/*função para adicionar e remover a classe do menu*/
function showMenu(){
   if(list1.classList.contains('list')){
    list1.classList.remove('list');  
    list1.classList.add('listActive');

    butao.classList.add('btnMenuActive');/*faz o menu girar */

    header1.classList.add('imgOpacity');/*tira a opacidade da imagem */
      
   }else if(list1.classList.contains('listActive')){
      list1.classList.remove('listActive');
      list1.classList.add('list');
     
      butao.classList.remove('btnMenuActive');/*faz o menu girar */

      header1.classList.remove('imgOpacity');
   }
}


/* descer */
iconeDescer1.addEventListener('click', descer, false); /*evento do botão */

function descer(){



      window.scrollTo({
         top:alturaTopo,/*pego essa altura do topo pela varíavel */
         left:0,
         behavior:'smooth'})

     
}

/*evento para mostrar botão */
window.addEventListener('scroll',mostrarButao, false); /*evento do botão */

function mostrarButao(){
   if(window.pageYOffset > 500 && btnSubir1.classList.contains('btn-subir')){
      btnSubir1.classList.remove('btn-subir');
      btnSubir1.classList.add('mostrar-button');
     

   }else if(window.pageYOffset < 500 && btnSubir1.classList.contains('mostrar-button')){
      btnSubir1.classList.remove('mostrar-button');
      btnSubir1.classList.add('btn-subir');
   }
}



/*subir ao topo*/
btnSubir1.addEventListener('click',subir, false); /*evento do botão */

function subir(){

      
    window.scrollTo({
      top:2,/*pego essa altura do topo pela varíavel */
      left:0,
      behavior:'smooth'})

}
 


/*evento para verificar se o clique foi dentro e adicionar as classes para fechar o menu */
document.addEventListener('mousedown',(event)=>{
  
   const verificarclique = true;
  
   if(!menu1.contains(event.target)){/*se o clique no menu for diferente de true, então vai ser falso e chamo as classes */
      
      list1.classList.remove('listActive');
      list1.classList.add('list');
     
      butao.classList.remove('btnMenuActive');/*faz o menu girar */

      header1.classList.remove('imgOpacity');
   }

  
});