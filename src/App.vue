<template>
  <div id="app">
    <!-- <headers />
    <sidebar />
    <tabs /> -->
    <router-view/>
  </div>
</template>

<script>
// import sidebar from '@/components/sidebarMenu'
// import headers from '@/components/header'
// import tabs from '@/components/tabs'
export default {
  components: {
    // sidebar,
    // headers,
    // tabs
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
