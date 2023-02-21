<template>
    

    <section id="sobremi">
        <div class="contenedor-foto">
            <img src="../assets/soy.jpg" alt="">
        </div>
        <div class="sobremi">
            <p class="titulo-seccion">Sobre Mi</p>
            <h2>Hola, Soy <span>Juan José Jara Álvarez</span> </h2>
            <h3>Desarrollador de software <span>jr</span></h3>
            <p>Soy estudiante de ingeniería en sistemas de noveno semestre, con gran capacidad de aprendizaje, <b>desarrollador de software junior</b> , experiencia con lenguajes de programación como <b>Java, Python, JavaScript(básico), marcos de trabajo como Django, lenguaje de etiquetas como HTML, CSS, y manejo de bases de datos relacionales como MySQL.</b>  <br>

Desarrollé el sistema de gestión de inventario básico ACS para la empresa Jara Inmobiliaria S.A.S.

Me motiva el constante deseo de aprender nuevas tecnologías.</p>
<h2>Cuando no soy <span>Desarrollador</span> </h2>
<p>En mis tiempos libres me gusta tocar la guitarra, escribir, jugar video juegos, pasar tiempo con mi familia, y sobre todo aventurarme a nuevos retos interpersonales</p>
           
            <a href="./public/src/assets/soy.jpg" download="soy.jpg">Descargar CV</a>
        </div>
    </section>

</template>

<script>
export default{
    name:'sobremi_page'
}
</script>

<style scoped>
 #sobremi {
            max-width: 1100px;
            margin: auto;
            padding: 100px 15px;
            color: #111135;
            display: flex;
        }
        
        #sobremi .contenedor-foto {
            max-width: 400px;
            margin-right: 80px;
        }
        
        #sobremi .contenedor-foto img {
            padding: 20px;
            width: 100%;
            border-radius: 20px;
            background-color: #f3f3f3;
        }
        
        #sobremi .sobremi {
            margin: 0 40px;
        }
        
        #sobremi .sobremi .titulo-seccion {
            font-size: 22px;
            text-transform: uppercase;
            color: #111135;
            text-decoration: underline;
            text-decoration-color: #d3d3d3;
            text-decoration-thickness: 5px;
        }
        
        #sobremi .sobremi h2 {
            font-size: 34px;
            font-weight: bold;
            margin: 20px 0;
            letter-spacing: 2px;
        }
        
        #sobremi .sobremi h2 span {
            color: #5062ff;
        }
        
        #sobremi .sobremi h3 {
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: 1px;
        }
        
        #sobremi .sobremi p {
            font-size: 14px;
            line-height: 25px;
            color: #565656;
            margin-bottom: 12px;
        }
        
        #sobremi .sobremi a {
            display: inline-block;
            text-decoration: none;
            color: #000;
            border-radius: 30px;
            border: 1px solid #000;
            padding: 10px 20px;
            margin-top: 30px;
            transition: .5s;
        }
        
        #sobremi .sobremi a:hover {
            background-color: #5062ff;
            color: #fff;
        }

       @media screen and (max-width:800px){
         #sobremi{
            display:block;
         }
         #sobremi .contenedor-foto{
            margin-left:80px;
         }
         #sobremi {
                padding: 50px 0;
                display: block;
            }
            #sobremi .contenedor-foto {
                max-width: 200px;
                margin: auto;
            }
            #sobremi .contenedor-foto img {
                padding: 8px;
            }
            #sobremi .sobremi .titulo-seccion {
                text-align: center;
            }
            #sobremi .sobremi h2 {
                font-size: 25px;
                text-align: center;
            }

       }
     

</style>