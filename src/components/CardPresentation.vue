<template>
    <div id="start" class="flex flex-col w-full bg-gray-800 text-white" style="border-radius: 0 0 50px 50px">
        <div class="w-full md:w-3/5 md:mx-auto p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
                <img class="rounded-full mb-2 m-auto md:ml-0" :src="`${url}/img/profile.jpg`" alt="Avatar of Danny Salazar">
                <typical
                    class="font-bold text-2xl md:text-5xl mb-2"
                    :steps="['Hello!', 1000, 'Hello world!', 500, 'Hola! Soy Danny Salazar', 500]"
                    :wrapper="'h2'"
                />
                <typical
                    class="font-bold text-xl md:text-5xl mb-2 text-teal-200"
                    :steps="['👋 Bienvenido a mi portafolio', 2000, '👋 Bach. Ingeniería de Sistemas', 3000, '👋 Desarrollador Full Stack', 3000]"
                    :loop='Infinity'
                    :wrapper="'h3'"
                />
            </div>
        </div>
         <div class="flex flex-row text-sm justify-center pb-5">
            <span class="mr-2"> 
                {{ (new Date).getFullYear() - 1995 }} años - Lambayeque, Perú 
            </span>
            <div class="flag-peru flex flex-row">
                <div class="flex bg-red-600 w-3 h-4"></div>
                <div class="flex bg-white w-3 h-4"></div>
                <div class="bg-red-600 w-3 h-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import typical from 'vue-typical'

    export default {
        name:'CardPresentation',
        components: {
            typical
        },
        data(){
            return {
                url: process.env.VUE_APP_URL,
                name: process.env.VUE_APP_NAME,
                list_info: [
                    {
                        icon_svg: {
                            path_d: 'M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z',
                            view_box: '0 0 448 512',
                        },
                        content: 'Bachillerato en Ingeniería de Sistemas' 
                    },
                    {
                        icon_svg: {
                            path_d: 'M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z',
                            view_box: '0 0 512 512',
                        },
                        content: 'Universidad Nacional Pedro Ruiz Gallo' 
                    },
                    {
                        icon_svg: {
                            path_d: 'M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z',
                            view_box: '0 0 512 512',
                        },
                        content: process.env.VUE_APP_EMAIL_1 
                    },
                    {
                        icon_svg: {
                            path_d: 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z',
                            view_box: '0 0 320 512',
                        },
                        content: process.env.VUE_APP_PHONE 
                    }
                ]
            }
        }
    }
</script>
