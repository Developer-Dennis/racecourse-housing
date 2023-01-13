<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/houses">Houses</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0px;
  padding: 0px;
}
nav {
  display: flex;
  background:#42b983;
  padding: 10px;
  text-align:right;
}

nav a {
  font-size: 18px;
  text-decoration: none;
  color: white;
  padding: 14px 16px;
}


</style>
