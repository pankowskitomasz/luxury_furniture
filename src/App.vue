<template>
    <div id="app" class="w-100">
        <Navbar/>
        <main class="minh-100vh w-100">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue' 

export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  }
}

</script>