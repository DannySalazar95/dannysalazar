<template>
  <div class="app">
    <div class="app-header">
      <Navbar/>
    </div>
    <div class="app-content h-screen pt-20">
      <CardPresentation/>
      <slider-images-work />
      <Knowledge/>
      <Experience/>
      <SocialNetwork/>
      <Gallery/>
      <Footer/>
    </div>
  </div>
</template>

<script>
	import Navbar from './components/Navbar.vue';
  import CardPresentation from './components/CardPresentation.vue';
  import SliderImagesWork from './components/SliderImagesWork.vue'
	import Knowledge from './components/Knowledge.vue';
	import Experience from './components/Experience.vue';
	import SocialNetwork from './components/SocialNetwork.vue';
	import Gallery from './components/Gallery.vue';
  import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    CardPresentation,
    SliderImagesWork,
    Knowledge,
    Experience,
    SocialNetwork,
    Gallery,
    Footer
  }
}
</script>
