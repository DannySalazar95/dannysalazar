<template>
    <div id="gallery" class="flex flex-col mb-20">
        <div v-for="({ company, images}, g_index) in gallery_by_work" :key="g_index" class="flex flex-wrap w-full md:w-3/5 md:mx-auto py-5">
            <HeaderSection title="Galería" :subtitle="company" />
            <div class="w-full flex flex-wrap">
                <div v-for="({src,name}, i_index) in images" :key="i_index" class="md:w-1/3 p-2">
                    <div class="border border-gray-400 p-1">
                        <div class="relative">
                            <img :src="`${url}${src}`" :alt="name"/>
                            <div class="absolute top-0  right-0 text-white text-right pb-5 pl-5 pt-2 pr-2 z-10 rounded-bl-full bg-gray-800">
                                {{name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                            }
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
                                src: '/img/secrea/app_1.jpg',
                                name: 'Login'
                            },
                            {
                                src: '/img/secrea/app_2.jpg',
                                name: 'Home'
                            },
                            {
                                src: '/img/secrea/app_3.jpg',
                                name: 'Sidebar'
                            },
                            {
                                src: '/img/secrea/app_4.jpg',
                                name: 'Courses'
                            },
                            {
                                src: '/img/secrea/app_5.jpg',
                                name: 'Course'
                            },
                            {
                                src: '/img/secrea/app_6.jpg',
                                name: 'Content'
                            },
                            {
                                src: '/img/secrea/app_7.jpg',
                                name: 'Content'
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>
