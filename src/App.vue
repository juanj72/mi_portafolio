<template>
  <Barra_index></Barra_index>

  <div id="app">

    <router-view></router-view>
  </div>
  <footer_page></footer_page>

  <a target="_blank" class="btn-whats"
    href="https://api.whatsapp.com/send?phone=573213437645&text=hola!,%20vengo%20de%20tu%20pagina!">
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>

<script>
import Barra_index from './components/Barra_index.vue'
import footer_page from './components/footer_page'

export default {

  name: 'App',
  components: {

    Barra_index,
    footer_page


  }
}

</script>











<style>
#app {

  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000; */
  margin-top: 4%;
  margin-bottom: 0px;

}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');

* {
  margin: 0;

  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';

}


.btn-whats{

position: fixed;
width: 55px;
height: 55px;
line-height: 55px;
bottom: 30px;
right: 30px;
background: #0df053;
color: #fff;
border-radius: 50px;
text-align: center;
font-size: 30px;
box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
z-index: 100;


}


/**aqui va la seccion para responsive */

@media screen and (max-width:800px) {
  #inicio .contenido .presentacion h2 {
    font-size: 40px;
    color: aliceblue;
  }

}
</style>
