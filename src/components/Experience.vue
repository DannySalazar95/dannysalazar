<template>
    <div id="experience" class="flex flex-wrap w-full md:w-3/5 md:mx-auto py-5 overflow-x-auto mb-20">
        <HeaderSection title="Experiencia"/>
        <div class="w-full flex flex-col">
            <div v-for="({company, logo,description,link,work_dates},index) in works" :key="index" class="w-full rounded-lg border border-gray-400 bg-white py-4 px-8 flex flex-col justify-between leading-normal mb-4">
                <div class="mb-8">
                    <img class="mb-2" :src="`${url}${logo.url}`" :alt="company" :width="logo.width" :height="logo.height">
                    <hr>
                    <vue-markdown class="text-gray-700 text-base py-5">{{description}}</vue-markdown>
                    <a class="flex flex-row text-blue-600" :href="link" target="_blank">
                        <svg class="fill-current text-blue-600 w-4 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>
                        <span>Visitar sitio web de la empresa o institución</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" :src="`${url}/img/profile.jpg`" alt="Avatar of Danny Salazar">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{{name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import VueMarkdown from 'vue-markdown';

    import HeaderSection from './HeaderSection.vue';

    export default {
        name:'Experiencie',
        components:{
            HeaderSection,
            VueMarkdown
        },
        data(){
            return {
                url: process.env.VUE_APP_URL,
                name:process.env.VUE_APP_NAME,
                works:[
                    {
                        company: 'Global Hitss Perú',
                        logo:{
                            url:'/img/global_hitss.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Sistema para automatización de procesos, utilizando las siguientes herramientas, tecnologías y lenguajes: <br>`Laravel` `php` `Vuejs` `Nuxtjs` `AdminLTE` `Mysql` `Oracle` `GitLab` `Passport` `Websockets` y otros',
                        link:'https://www.globalhitss.com/'
                    },
                    {
                        company: 'I.E.P Santo Toribio de Mogrovejo',
                        logo:{
                            url:'/img/stm.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Desarrollo y mantenimiento de sistema intranet , utilizando las siguientes herramientas, tecnologías y lenguajes: <br>`Laravel` `php` `Vuejs` `vuex` `vue-router` `Javascript` `jquery` `boostrap` `Admin4b` `Mysql` `GitLab` `Passport` y otros',
                        link:'https://stm.edu.pe/'
                    },
                    {
                        company: 'Secundaria creativa',
                        logo:{
                            url:'/img/secrea.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Desarrollo de nuevo sistema web y desarrollo de app-android SECREA. El desarrollo de la app se realizó con: <br>`react-native` `react-navigation`',
                        link:'https://www.secundariacreativa.com/'
                    },
                    {
                        company: 'Universidad de Lambayeque',
                        logo:{
                            url:'/img/udl.png',
                            width:'150px',
                            height:'84px',
                        },
                        description:'Apoyo en mantenimiento de los sistemas académicos de la Universidad de Lambayeque, sistemas basados en el framework `Django-Python`',
                        link:'http://www.udl.edu.pe/'
                    },
                    {
                        company: 'Secundaria creativa',
                        logo:{
                            url:'/img/secrea.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Apoyo para el desarrollo de plataforma E-learning, utilizando las siguientes herramientas, tecnologías y lenguajes: <br> `Laravel` `php` `Vuejs` `vuex` `Pusher` `Mailgun` `API’s` `Passport` y otros',
                        link:'https://www.secundariacreativa.com/'
                    },
                ]
            }
        }
    }
</script>


<style>
    code {
        background: #2d3748;
        color: #b2f5ea;
		padding-right: 6px;
		padding-left: 6px;
		padding-top: 3px;
		padding-bottom: 3px;
		border-radius: 5px;
		font-size: 14px !important;
    }
</style>