<template>
  <div class="tabs-content">
    <div class="loop" v-for="(menu, idx) in menus" :key="idx">
      <button class="btns">
        <span>{{ menu.name }}</span>
        <span class="notify" v-if="menu.id === '2' || menu.id === '5'">{{menu.id === '2' ? '4' : '1'}}</span>
        <span class="warning" v-if="menu.id === '4'">!</span>
      </button>
    </div>
    <img :src="burger" alt="">
  </div>
</template>
<script>
import burg from '@/assets/menu.svg'
export default {
  data() {
    return {
      burger: burg,
      menus: [
        {
          id: "1",
          name: "Pengkajian Awal",
        },
        {
          id: "2",
          name: "Lab/Radiologi",
        },
        {
          id: "3",
          name: "CPPT Ranap",
        },
        {
          id: "4",
          name: "Informed Concent",
        },
        {
          id: "5",
          name: "Skrining",
        },
        {
          id: "6",
          name: "Rekonsiliasi Obat",
        },
        {
          id: "7",
          name: "Resume Medis",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.tabs-content {
  margin-left: 100px;
  margin-top: 10px;
  display: flex;
  position: fixed;
  z-index:99;
  width: 100%;
  background-color: white;
  align-items: center;
  .loop {
      .btns {
          background-color: #4caf50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 2px;
          cursor:pointer;
          .notify {
              position: absolute;
              top: 0;
              width: 19px;
              height: 16px;
              background: red;
              border-radius: 50%;
              padding-top: 2px;
              font-size: 11px;
          }
          .warning {
              position: absolute;
              top: 0;
              width: 19px;
              height: 16px;
              background: yellow;
              border-radius: 50%;
              padding-top: 2px;
              font-size: 11px;
              color: red;
          }
      }
  }
  img {
      width: 40px;
      height: 40px;
      margin-left: 10px;
      cursor: pointer;
  }
}
</style>