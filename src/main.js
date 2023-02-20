import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld'
import presentacion_init from './components/secciones/presentacion_init'
import sobremi_page from './components/sobremi_page'
import skills_page from './components/skills_page'
import portafolio_page from './components/portafolio_page'
import contacto_page from './components/contacto_page'

const routes=[

    {path:'/hello',component:
     HelloWorld},
     {path:'/',component:presentacion_init},
     {path:'/sobremi',component:sobremi_page},
     {path:'/skills',component:skills_page},
     {path:'/proyectos',component:portafolio_page},
     {path:'/contacto',component:contacto_page}
]


const router =createRouter({
    history: createWebHashHistory(),
    routes,

})




const app =createApp(App)
app.use(router)
.mount('#app')
