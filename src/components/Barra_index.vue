<template>
  
  <section id="inicio">
        <div class="contenido">
            <header>
                <div class="contenido-header">
                    <h1>|JJ|</h1>
                    <nav id="nav" class="">
                        <ul id="links">
                            <li><a href="#" class="seleccionado" onclick="seleccionar(this)">INICIO</a></li>
                            <li><a href="#sobremi" onclick="seleccionar(this)">SOBRE MI</a></li>
                            <li><a href="#skills" onclick="seleccionar(this)">HABILIDADES</a></li>
                            <li><a href="#proyectos" onclick="seleccionar(this)">PORTAFOLIO</a></li>
                            <li><a href="#contacto" onclick="seleccionar(this)">CONTACTO</a></li>
                        </ul>
                    </nav>

                    <!-- Icono del menu responsive -->
                    <div id="icono-nav" onclick="responsiveMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </div>


                    <div class="redes">
                        <a href="https://www.linkedin.com/in/juan-jos%C3%A9-jara-%C3%A1lvarez-a3a7731b4/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/juanj72" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/juanjara1078/"><i class="fa-brands fa-instagram-square"></i></a>
                    </div>
                </div>
            </header>
           
        </div>
    </section>
 

</template>

<script>
export default{
    name: 'Barra_index',
    
}

</script>


<style scoped>
 /* #inicio {
            background: linear-gradient( rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("../assets/dev-1.webp");
            background-size: cover;
            background-position: center center;
            height: 100vh;
        } */
        #inicio .contenido header {
            background-color: rgba(0, 0, 0, .8);
            position: fixed;
            width: 100%;
            z-index: 100;
            top: 0;
        }


        
        #inicio .contenido header .contenido-header {
            max-width: 1100px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }
        
        #inicio .contenido header .contenido-header h1 {
            text-align: center;
            color: #5062ff;
        }
        
        #inicio .contenido header .contenido-header nav ul {
            list-style: none;
            display: flex;
            align-items: center;
        }
        
        #inicio .contenido header .contenido-header nav ul li a {
            text-decoration: none;
            color: #fff;
            margin: 0 12px;
            font-weight: 400;
            transition: .5s;
        }
        
        #inicio .contenido header .contenido-header nav ul li a:hover {
            color: #5062ff;
        }
        
        #inicio .contenido header .contenido-header .redes a {
            text-decoration: none;
            color: #fff;
            display: inline-block;
            margin-left: 10px;
            transition: .5s;
        }
        
        #inicio .contenido header .contenido-header .redes a:hover {
            color: #5062ff;
        }
        
        #inicio .contenido header .contenido-header .seleccionado {
            color: #5062ff;
        }
        #icono-nav{
          display: none;
        }
        
        @media  screen and (max-width:768px) {
          .redes {
                display: none;
            }
            nav {
                display: none;
            }
            nav.responsive {
                display: block;
                background-color: rgba(0, 0, 0, 0.8);
                width: 100%;
                position: absolute;
                top: 48px;
                left: 0;
                padding: 10px 0;
            }
            nav.responsive ul {
                display: block !important;
                text-align: center;
            }
            nav.responsive ul li {
                margin: 5px 0;
            }
            #icono-nav {
             
              color: #fff;
                display: block;
            }





          
        }
       



</style>