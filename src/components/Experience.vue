<template>
    <div id="experience" class="flex flex-wrap w-full md:w-3/5 md:mx-auto py-5 overflow-x-auto mb-20">
        <HeaderSection title="Experiencia"/>
        <div class="w-full flex flex-col">
            <div v-for="({company, logo,description,link,work_dates},index) in works" :key="index" class="w-full border border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal mb-1">
                <div class="mb-8">
                    <img class="mb-2" :src="`${url}${logo.url}`" :alt="company" :width="logo.width" :height="logo.height">
                    <hr>
                    <p class="flex text-gray-800 text-base mt-2">
                        <svg class="fill-current text-gray-800 w-4 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>
                        <span>{{work_dates}}</span>
                    </p>
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
                        company: 'I.E.P Santo Toribio de Mogrovejo',
                        logo:{
                            url:'/img/stm.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Desarrollo y mantenimiento de sistema intranet , utilizando las siguientes herramientas, tecnologías y lenguajes: `Laravel` `php` `Vuejs` `vuex` `jquery` `boostrap` `Mysql` `Git Lab` y otros',
                        link:'https://stm.edu.pe/',
                        work_dates:'Marzo de 2019 - Oct de 2019'
                    },
                    {
                        company: 'Secundaria creativa',
                        logo:{
                            url:'/img/secrea.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Mantemiento de sistema web y desarrollo de app-android SECREA. El desarrollo de la app se realizó con el framework `react-native`',
                        link:'https://www.secundariacreativa.com/',
                        work_dates:'Mayo de 2018 - Enero de 2019'
                    },
                    {
                        company: 'Universidad de Lambayeque',
                        logo:{
                            url:'/img/udl.png',
                            width:'150px',
                            height:'84px',
                        },
                        description:'Apoyo en mantenimiento de los sistemas académicos de la Universidad de Lambayeque, sistemas basados en el framework `Django`',
                        link:'http://www.udl.edu.pe/',
                        work_dates:'Noviembre de 2017 - Mayo de 2018'
                    },
                    {
                        company: 'Secundaria creativa',
                        logo:{
                            url:'/img/secrea.png',
                            width:'250px',
                            height:'90px',
                        },
                        description:'Apoyo para el desarrollo de plataforma E-learning, utilizando las siguientes herramientas, tecnologías y lenguajes: `Laravel` `php` `Vuejs` `vuex` `Pusher` `Mailgun` `API’s` y otros',
                        link:'https://www.secundariacreativa.com/',
                        work_dates:'Julio de 2017 - Noviembre de 2017'
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
		padding-right: 5px;
		padding-left: 5px;
		padding-top: 2px;
		padding-bottom: 2px;
		border-radius: 5px;
		font-size: 14px !important;
    }
</style>