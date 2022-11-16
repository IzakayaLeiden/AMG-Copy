<template>
    <header>
        <Navbar>

        </Navbar>
    </header>
    <h2>Not Found 404</h2>
    <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from "./Footer.vue";
export default{
    name: 'NotFound',
    components:{
        Navbar,
        Footer
    }
}
</script>

<style>
#NotFound {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>