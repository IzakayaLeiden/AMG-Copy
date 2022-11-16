<template>
  <body>
    <header>
      <Navbar>
      </Navbar>
    </header>
    <div class='wrapper'>
      <div class="about">
        <h1>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation 
          ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. 
          Duis aute irure dolor in 
          reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </h1>
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
