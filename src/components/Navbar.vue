<template>
    <nav class="fixed top-0 flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-50">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <a href="#start" class="flex">
                <img src="https://img.icons8.com/dusk/64/000000/developer.png" width="35px" height="35px"/>
                <span class="font-semibold text-xl tracking-tight mt-1 ml-2">{{nick_name}}</span>
            </a>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded border-teal-400 text-teal-200 hover:border-white"
                    @click="()=> navbar_show = !navbar_show">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div class="w-full flex-grow lg:flex lg:block lg:items-center lg:w-auto" :class="{hidden:!navbar_show}">
            <div class="lg:flex-grow">
                <a href="#experience" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Experiencia
                </a>
                <a href="#gallery" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Galería
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name:'Navbar',
        data(){
            return {
                navbar_show: false,
                nick_name: process.env.VUE_APP_NICK_NAME
            }
        }
    }
</script>

