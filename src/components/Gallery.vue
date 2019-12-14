<template>
    <div id="gallery" class="flex flex-col">
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
                        company: 'STM',
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
                        company: 'SECREA',
                        images:[
                            {
                                src: '/img/secrea/home.png',
                                name: 'Home'
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>
