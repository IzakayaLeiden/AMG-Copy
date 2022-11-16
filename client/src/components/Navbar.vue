<template>
    <!-- Navbar Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

    <!-- Qubeat logo -->
    <router-link to="/" class="navbar-brand">
        <img
          src="../assets/QubeatLogo.svg"
          height="40"
          alt="Qubeat logo"
          loading="lazy"
          style="margin-top: -5px;"
        />
    </router-link>

        <!-- Navbar toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- Links navbar on left side -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/leaderBoard" class="nav-link">Leaderboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/info" class="nav-link">Information</router-link>
      </li>
      </ul>
    <!-- Links navbar on right side -->
    <router-link to="/game" class="nav-link">
      <button type="button" class="btn btn-primary me-3">
      Play the game!
      </button>
    </router-link>
      
  </div>
</div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #6610f2;
}
</style>
