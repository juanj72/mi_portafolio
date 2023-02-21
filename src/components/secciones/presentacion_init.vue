<template>
<section id="inicio">
    <div class="contenido">
        <div class="presentacion">
                <p class="bienvenida">Bienvenidos</p>
                <h2>Soy <span>Juan José Jara Alvarez</span>, Desarrollador Jr</h2>
                <p class="descripcion">¡Me motiva el constante deseo de aprender! </p>
                <a href="#proyectos">Ir a Portafolio</a>
</div>

    </div>
    

</section>

<img src="/src/assets/soy.jpg" alt="">

</template>

<script>
export default{
  name:'presentacion_init',

}

</script>



<style scoped>
 #inicio {
            background: linear-gradient( rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("/src/assets/wallp.jpg");
            background-size: cover;
            background-position: center center;
            height: 100vh;
        }
#inicio .contenido .presentacion {
            max-width: 1100px;
            height: 100vh;
            margin: auto;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        #inicio .contenido .presentacion .bienvenida {
            font-size: 16px;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 5px;
        }
        
        #inicio .contenido .presentacion h2 {
            font-size: 55px;
            margin-bottom: 25px;
            text-align: center;
        }
        
        #inicio .contenido .presentacion h2 span {
            font-size: 25px;
            color: #5062ff;
        }
        
        #inicio .contenido .presentacion .descripcion {
            max-width: 700px;
            margin: 25px auto;
            font-size: 18px;
            text-align: center;
        }
        
        #inicio .contenido .presentacion a {
            text-decoration: none;
            display: inline-block;
            margin: 25px;
            padding: 20px 25px;
            border: 2px solid #fff;
            border-radius: 50px;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            transition: .5s;
        }
        
        #inicio .contenido .presentacion a:hover {
            background-color: #5062ff;
        }
        
        #icono-nav {
            color: #fff;
            display: none;
        }
     



</style>