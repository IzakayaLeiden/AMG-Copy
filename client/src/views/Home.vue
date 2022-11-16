<template>
  <body>
    <header>
      <Navbar>
      </Navbar>
    </header>
    <div class='wrapper'>
      <QubitChart></QubitChart>
    </div>
    <footer class="footer">
      <Footer/>
    </footer> 

  </body>
</template>


<script>
import QubitChart from '../components/chart.vue'
import Navbar from '../components/Navbar.vue';
import Footer from "./Footer.vue";
export default {
  name: 'App',
  components: {
    QubitChart,
    Navbar,
    Footer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  text-align:center;
  display:flex;
  flex-direction:column;
  min-height:100vh;
}
.wrapper{
  flex:1;
}

</style>