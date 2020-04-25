<template>
    <div class="flex w-full">
        <span class="text-xl text-white bg-gray-800 px-4 pt-1 mb-2"> 
            {{title}}
        </span>
        <span class="bg-teal-500 mb-2">
            <svg class="fill-current text-gray-800 w-6 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="90 110 50 280"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"/></svg>
        </span>
        <span class="flex text-xl text-white bg-teal-500 px3 pt-1 mb-2">
            <svg class="fill-current text-white w-6 h-4 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg>
            <span class="truncate">{{subtitle}}</span>
        </span>
        <span class="mb-2">
            <svg class="fill-current text-teal-500 w-6 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="90 110 50 280"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"/></svg>
        </span>
    </div>
</template>

<script>
    export default {
        name:'HeaderSection',
        props:{
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                default: 'dev'
            },
        }
    }
</script>

