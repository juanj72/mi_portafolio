<template>
 <!-- SECCION H A B I L I D A D E S -->
 <div class="contenedor-skills" id="skills">
        <h3>HABILIDADES </h3>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Html & Css</p>
                <span class="porcentaje">55%</span>
            </div>

            <div class="barra">
                <div class="" id="html"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Python</p>
                <span class="porcentaje">60%</span>
            </div>

            <div class="barra">
                <div class="" id="js"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Bases de Datos</p>
                <span class="porcentaje">70%</span>
            </div>

            <div class="barra">
                <div class="" id="bd"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>JavaScript</p>
                <span class="porcentaje">35%</span>
            </div>

            <div class="barra">
                <div class="" id="ps"></div>
            </div>
        </div>
      
    </div>

</template>


<script>
export default{
    name:'skills_page'
}

</script>

<style scoped>


.contenedor-skills {
            margin-top: 22%;
             background: linear-gradient( #5c5aebcc, rgba(33, 16, 16, 0.8)), url("/src/assets/dev-2.jpeg"); 
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            color: #fff;
            background-position: center center;
            padding: 100px 0;
            text-align: center;
        }
        
        .contenedor-skills .skill {
            max-width: 600px;
            margin: 30px auto;
        }
        
        .contenedor-skills .skill .info {
            display: flex;
            justify-content: space-between;
        }
        
        .contenedor-skills .skill .lista {
            display: inline-block;
            margin-right: 20px;
            height: 10px;
            width: 10px;
            background-color: #fff;
        }
        
        .contenedor-skills .skill .barra {
            background-color: #919191;
            width: 100%;
            height: 6px;
            margin: 10px 0px;
        }
        
        .contenedor-skills .skill .barra .barra-progreso1 {
            background-color: #fff;
            width: 55%;
            height: 6px;
            animation: progreso1 2s forwards;
        }
        
        .contenedor-skills .skill .barra .barra-progreso2 {
            background-color: #fff;
            width: 90%;
            height: 6px;
            animation: progreso2 2s forwards;
        }
        
        .contenedor-skills .skill .barra .barra-progreso3 {
            background-color: #fff;
            width: 90%;
            height: 6px;
            animation: progreso3 2s forwards;
        }
        
        .contenedor-skills .skill .barra .barra-progreso4 {
            background-color: #fff;
            width: 85%;
            height: 6px;
            animation: progreso4 2s forwards;
        }
        
        @keyframes progreso1 {
            0% {
                width: 0;
            }
            100% {
                width: 55%;
            }
        }
        
        @keyframes progreso2 {
            0% {
                width: 0;
            }
            100% {
                width: 60%;
            }
        }
        
        @keyframes progreso3 {
            0% {
                width: 0;
            }
            100% {
                width: 70%;
            }
        }
        
        @keyframes progreso4 {
            0% {
                width: 0;
            }
            100% {
                width: 35%;
            }
        }

</style>