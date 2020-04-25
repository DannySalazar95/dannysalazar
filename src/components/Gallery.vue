<template>
    <div id="gallery" class="flex flex-col mb-20">
        <div v-for="({ company, images}, g_index) in gallery_by_work" :key="g_index" class="flex flex-col w-full md:w-3/5 md:mx-auto py-5">
            <HeaderSection title="Galería" :subtitle="company" />
            <viewer class="overflow-x-auto flex flex-no-wrap" :images="images">
                <div v-for="({src,name}, i_index) in images" :key="i_index" class="p-2" style="min-width:300px;">
                    <div class="border border-gray-400 p-1">
                        <div class="relative">
                            <img :src="`${url}${src}`" :alt="name" width="100%"/>
                            <div class="absolute top-0  right-0 text-white text-right pb-5 pl-5 pt-2 pr-2 z-10 rounded-bl-full bg-gray-800">
                                {{name}}
                            </div>
                        </div>
                    </div>
                </div>
            </viewer>
        </div>
    </div>
</template>
<script>
    import HeaderSection from './HeaderSection.vue';
    export default {
        name:'Gallery',
        components:{
            HeaderSection
        },
        data(){
            return{
                url: process.env.VUE_APP_URL,
                gallery_by_work:[
                    {
                        company: 'GLOBAL HITSS',
                        images:[
                            {
                                src: '/img/global_hitss/notifications.PNG',
                                name: 'Alertas'
                            },
                            {
                                src: '/img/global_hitss/automatic_procedure.PNG',
                                name: 'Procedimientos'
                            },
                            {
                                src: '/img/global_hitss/automatic_procedure_control.PNG',
                                name: 'Control'
                            },
                            {
                                src: '/img/global_hitss/console.PNG',
                                name: 'Console'
                            },
                            {
                                src: '/img/global_hitss/charts.PNG',
                                name: 'Charts'
                            },
                            {
                                src: '/img/global_hitss/charts2.PNG',
                                name: 'Charts'
                            },
                        ]
                    },
                    {
                        company: 'STM INTRANET',
                        images:[
                            {
                                src: '/img/stm/login.png',
                                name: 'Login'
                            },
                            {
                                src: '/img/stm/home.png',
                                name: 'Home'
                            },
                            {
                                src: '/img/stm/assistance.png',
                                name: 'Assistance'
                            },
                        ]
                    },
                    {
                        company: 'SECREA WEB',
                        images:[
                            {
                                src: '/img/secrea/web_home.png',
                                name: 'Home'
                            },
                            {
                                src: '/img/secrea/web_1.png',
                                name: 'Courses'
                            },
                            {
                                src: '/img/secrea/web_2.png',
                                name: 'Course'
                            },
                            {
                                src: '/img/secrea/web_3.png',
                                name: 'Content'
                            },
                            {
                                src: '/img/secrea/web_4.png',
                                name: 'Chat'
                            },
                        ]
                    },
                    {
                        company: 'SECREA APP',
                        images:[
                            {
                                src: '/img/secrea/app_1.png',
                                name: 'Login'
                            },
                            {
                                src: '/img/secrea/app_2.png',
                                name: 'Home'
                            },
                            {
                                src: '/img/secrea/app_3.png',
                                name: 'Sidebar'
                            },
                            {
                                src: '/img/secrea/app_4.png',
                                name: 'Courses'
                            },
                            {
                                src: '/img/secrea/app_5.png',
                                name: 'Course'
                            },
                            {
                                src: '/img/secrea/app_6.png',
                                name: 'Content'
                            },
                            {
                                src: '/img/secrea/app_7.png',
                                name: 'Content'
                            },
                        ]
                    }
                ]
            }
        },
    }
</script>
