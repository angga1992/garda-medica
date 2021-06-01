<template>
  <div style="margin-left: 100px; margin-top: 10px; display: flex; position: fixed;">
    <div v-for="(menu, idx) in menus" :key="idx">
      <button class="btns">{{ menu.name }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
<style scoped>
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
}
</style>