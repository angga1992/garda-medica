<template>
  <div>
    <h1>modal</h1>
    <button @click="showModal('openme', 'fade', 300)">openme</button>
    <button @click="showModal('larger', 'slide-fade', 1000)">larger</button>
    <button @click="showModal('smallest', 'modal-fade', 500)">smallest</button>
    <h1>tabel</h1>
    <table>
      <tr>
        <th>Nama</th>
        <th>NRM</th>
        <th>Poli</th>
      </tr>
      <tr>
        <td>Sobri</td>
        <td>123</td>
        <td>Bedah umum</td>
      </tr>
    </table>
    <modal
      :persistent="component !== 'ModalClearRoom'"
      v-show="isModalVisible"
      @close="closeModal"
      :width="width"
      :effect="effect"
    >
      <template v-slot:body>
        <component :is="component" @close="closeModal" />
      </template>
    </modal>
  </div>
</template>

<script>
import smallest from "@/components/modal/small";
import openme from "@/components/modal/openme";
import larger from "@/components/modal/larger";
export default {
  components: {
    openme,
    larger,
    smallest,
  },
  beforeCreate: function () {
    this.$options.components.modal = require("@/components/modal").default;
    // this.$options.components.openme = require("@/components/modal/openme").default;
    // this.$options.components.larger = require("@/components/modal/larger").default;
    // this.$options.components.small = require("@/components/modal/small").default;
  },
  data() {
    return {
      effect: "",
      component: "",
      isModalVisible: false,
      width: 0,
    };
  },
  methods: {
    showModal(val1, val2, val3) {
      console.log("val2", val2);
      this.width = val3;
      this.component = val1;
      this.effect = val2;
      console.log(this.effect);
      this.isModalVisible = true;
      this.disableLoad = false;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>