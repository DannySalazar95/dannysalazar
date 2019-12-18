<template>
    <div id="footer" class="flex flex-col bg-gray-800 text-white w-full">
        <div class="flex flex-row w-full bg-black py-2 relative">
            <div class="flex flex-row absolute pt-3 top-0 left-0">
                <svg class="fill-current text-red-600 w-4 h-4 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>
                <svg class="fill-current text-yellow-600 w-4 h-4 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>
                <svg class="fill-current text-green-600 w-4 h-4 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>
            </div>
            <div class="w-full text-center">
                {{nick_name}}
            </div>
        </div>
        <div class="flex flex-wrap md:flex-row w-full ">
            <div class="md:w-1/2 flex flex-col p-4 md:p-40">
                <div class="mb-2"><a :href="platzi" target="_blank" class="hover:underline text-teal-200">Visita mi perfil en Platzi</a></div>
                <div class="mb-2"><a :href="github" target="_blank" class="hover:underline text-teal-200">Visita mi GitHub</a></div>
                <div class="mb-2"><a :href="linkedin" target="_blank" class="hover:underline text-teal-200">Visita mi Linkedin</a></div>
            </div>
            <div class="md:w-1/2 flex flex-col p-4 md:p-40">
                <div class="flex flex-row mb-2">
                    <svg class="fill-current text-white w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"/></svg>
                    {{email_1}}
                </div>
                <div class="flex flex-row mb-2">
                    <svg class="fill-current text-white w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"/></svg>
                    {{email_2}}
                </div>
                <div class="flex flex-row mb-2">
                    <svg class="fill-current text-white w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/></svg> 
                    {{phone}}
                </div>
                <div class="flex flex-row">
                    <a class="text-teal-200" href="https://icons8.com/icon/55457/developer">Developer icon by Icons8</a>
                </div>
            </div>
        </div>
        <div class="w-full text-center pb-2">
            © 2019 {{nick_name}}.Todos los derechos reservados
        </div>
    </div>
</template>
<script>
    export default {
        name:'Footer',
        data(){
            return {
                nick_name: process.env.VUE_APP_NICK_NAME,
                platzi: process.env.VUE_APP_PLATZI,
                github: process.env.VUE_APP_GITHUB,
                linkedin: process.env.VUE_APP_LINKEDIN,
                email_1: process.env.VUE_APP_EMAIL_1,
                email_2: process.env.VUE_APP_EMAIL_2,
                phone: process.env.VUE_APP_PHONE
            }
        }
    }
</script>