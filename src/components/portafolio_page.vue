<template>

<section id="portfolio">
        <h3 class="titulo-seccion">Mis Proyectos</h3>
        <div class="fila">
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="../assets/proyecto1.png" alt="">
                <div class="info">
                    <h4>Pagina web HTML, CSS,JavaScript</h4>
                    <p>pagina web estatica informatica para la entidad hotelera Restrepo Plaza Hotel </p>
                    <a href="https://www.restrepoplaza.com.co/" target="_blank">Demo aqui</a>
                </div>
            </div>
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="../assets/proyecto2.png" alt="">
                <div class="info">
                    <h4>Pagina web, HTML, CSS, Javascript</h4>
                    <p>pagina web estatica informativa para la empresa Sales del llano S.A.  </p>
                    <a href="https://salesupin.com.co/" target="_blank">Demo aqui</a>
                </div>
            </div>
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="../assets/proyecto3.png" alt="">
                <div class="info">
                    <h4>Aplicación Web</h4>
                    <p>Aplicacion web para gestión de inventarios con python, django, HTML, CSS, Jquery, Javascript , MySQL</p>
                </div>
                
            </div>
        </div>
        <!-- <div class="fila">
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="img/proyecto4.jpg" alt="">
                <div class="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="img/proyecto5.jpg" alt="">
                <div class="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="img/proyecto6.jpg" alt="">
                <div class="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
        </div>
        <div class="fila">
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="img/proyecto7.jpg" alt="">
                <div class="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="img/proyecto8.jpg" alt="">
                <div class="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
            <div class="proyecto">
                <div class="overlay"></div>
                <img src="img/proyecto9.jpg" alt="">
                <div class="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
        </div> -->
    </section>

</template>

<script>
export default{
 name:'portafolio_page'

}
</script>


<style scoped>

#portfolio {
            max-width: 1100px;
            padding: 100px 0;
            margin: auto;
        }
        
        #portfolio .titulo-seccion {
            text-align: center;
            font-size: 22px;
            text-transform: uppercase;
            color: #111135;
            text-decoration: underline;
            text-decoration-color: #d3d3d3;
            text-decoration-thickness: 5px;
        }
        
        #portfolio .fila {
            display: flex;
            justify-content: space-between;
            margin: 30px 0;
        }
        
        #portfolio .fila .proyecto {
            max-width: 450px;
            border: 1px solid #000000;
            margin: 0 10px;
            position: relative;
            overflow: hidden;
        }
        
        #portfolio .fila .proyecto img {
            width: 100%;
            height: 100%;
            ;
            /* filter: grayscale(1); */
            object-fit: cover;
            transition: .5s;
        }
        
        #portfolio .fila .proyecto:hover img {
            filter: grayscale(0);
        }
        
        #portfolio .fila .proyecto .info {
            position: absolute;
            left: 0px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #ffffff;
            width: 100%;
            padding: 10px;
            opacity: 0;
            bottom: -40px;
            transition: .5s;
        }
        
        #portfolio .fila .proyecto:hover .info {
            opacity: 1;
            bottom: 0;
        }

        @media screen and (max-width:800px){

#portfolio {
    padding: 50px 0;
}
#portfolio .fila {
    display: block;
}
#portfolio .fila .proyecto {
    margin: 10px auto;
}
}

</style>