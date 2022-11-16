<template>
  <body>
    <header>
      <Navbar>
      </Navbar>
    </header>
    <div class='wrapper'>
      <div class="Leader">
        <h3>Dit is nummer 1</h3>
        <h2>Dit is nummer 2</h2>
        <h1>Dit is nummer 3!</h1>
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
  