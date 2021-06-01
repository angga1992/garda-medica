<template>
  <div class="sidebar">
    <a href="#home">home</a>
    <a href="#antrian">antrian</a>
    <a href="#regis">regis</a>
    <a href="#rajal">rajal</a>
    <a href="#ranap">ranap</a>
    <a href="#rekmed">rekmed</a>
    <a href="#farmasi">farmasi</a>
    <a href="#radiologi">radiologi</a>
    <a href="#lab">lab</a>
    <a href="#kasir">kasir</a>
    <a href="#sekre">sekre</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        "home",
        "antrian",
        "regis",
        "rajal",
        "ranap",
        "rekmed",
        "farmasi",
        "radiologi",
        "lab",
        "kasir",
        "sekre",
      ],
    };
  },
};
</script>

<style scoped>
body {
  /* margin: 0; */
  font-family: "Lato", sans-serif;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 75px;
  background-color: #0caa4e;
  color: white;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 12px;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #04aa6d;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color:white;
  color: green;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>