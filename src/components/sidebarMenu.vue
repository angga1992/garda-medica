<template>
  <div class="sidebar" >
    <div v-for="(menus, idx) in menu" :key="idx">
      <a :href="`#${menus.name}`">
        <img style="width: 20px; height: 20px" :src="menus.icon" alt="">
        <span>
          {{menus.name}}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import ihome from '@/assets/home.svg'
import iamb from '@/assets/ambulance.svg'
import iste from '@/assets/stethoscope.svg'
import ibed from '@/assets/bed.svg'
import ichart from '@/assets/bar-chart.svg'
import ipharmacy from '@/assets/pharmacy.svg'
import itomography from '@/assets/tomography.svg'
import imicroscope from '@/assets/microscope.svg'
import icashier from '@/assets/cashier.svg'
export default {
  data() {
    return {
      menu: [
        {
          name: "home",
          icon: ihome,
        },
        {
          name: "antrian",
          icon: ihome,
        },
        {
          name: "regis",
          icon: iamb,
        },
        {
          name: "rajal",
          icon: iste,
        },
        {
          name: "ranap",
          icon: ibed,
        },
        {
          name: "rekmed",
          icon: ichart,
        },
        {
          name: "farmasi",
          icon: ipharmacy,
        },
        {
          name: "radiologi",
          icon: itomography,
        },
        {
          name: "lab",
          icon: imicroscope,
        },
        {
          name: "kasir",
          icon: icashier,
        },
        {
          name: "sekre",
          icon: icashier,
        },
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
  position: absolute;
  height: 100%;
  overflow: auto;
  font-size: 14px;
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
  background-color: white;
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