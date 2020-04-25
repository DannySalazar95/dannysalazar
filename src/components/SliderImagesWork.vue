<template>
    <div class="flex flex-wrap w-full md:w-3/5 md:mx-auto mb-20 py-5">
        <HeaderSection title="Works"/>
        <div class="w-full">
            <infinite-slide-bar :barStyle="{ padding: '5px 0' }">
                <img
                    class="slide-bar__img"
                    v-for="(work, index) in works"
                    :key="index"
                    :src="work.image_url"
                >
            </infinite-slide-bar>
        </div>
    </div>
</template>

<script>
    import HeaderSection from './HeaderSection.vue';
    import InfiniteSlideBar from 'vue-infinite-slide-bar'

    export default {
        name:'SliderImagesWork',
        components:{
            HeaderSection,
            InfiniteSlideBar
        },
        data () {
            return {
                works: [
                    {
                        image_url: '/img/udl.png'
                    },
                    {
                        image_url: '/img/secrea.png'
                    },
                    {
                        image_url: '/img/stm.png'
                    },
                    {
                        image_url: '/img/global_hitss.png'
                    }
                ]
            }
        }
    }
</script>
<style>
    .slide-bar__img {
        float: right;
        height: 100px;
        padding-right: 100px;
        padding-left: 100px;
    }
</style>