<template>
  <body>
    <header>
      <Navbar>
      </Navbar>
    </header>
    <div class='wrapper'>
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </div>
    <footer class="footer">
      <Footer/>
    </footer> 

  </body>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from "./Footer.vue";
export default{
    name: 'App',
    components:{
        Navbar,
        Footer
    }
}
</script>
<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
