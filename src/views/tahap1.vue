<template>
  <div style="display: flex; width: 100%; flex-direction: column">
    <h1>IMAGE ROTATOR</h1>
    <div
      style="
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
      "
    >
      <h3>Goku</h3>
      <img class="image" :src="image1" alt="" />
      <span>"Ultra insting Goku"</span>
    </div>
    <div
      style="
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
      "
    >
      <h3>Monkey D Luffy</h3>
      <img class="image" :src="image2" alt="" />
      <span>"Haki gear 5?."</span>
    </div>
    <div
      style="
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
      "
    >
      <h3>Naruto</h3>
      <img class="image" :src="image3" alt="" />
      <span>"Sage mode"</span>
    </div>
    <div
      style="
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
      "
    >
      <h3>Roronoa Zoro</h3>
      <img class="image" :src="image4" alt="" />
      <span>"Where am I?."</span>
    </div>

    <h1>TABBED CONTENT</h1>

    <div id="tabs" class="container">
      <div class="tabs">
        <a
          v-on:click="activetab = 1"
          v-bind:class="[activetab === 1 ? 'active' : '']"
          >Tab 1</a
        >
        <a
          v-on:click="activetab = 2"
          v-bind:class="[activetab === 2 ? 'active' : '']"
          >Tab 2</a
        >
        <a
          v-on:click="activetab = 3"
          v-bind:class="[activetab === 3 ? 'active' : '']"
          >Tab 3</a
        >
      </div>

      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          Gingerbread muffin gummies gingerbread macaroon. Lollipop candy
          applicake toffee faworki. Bear claw topping jelly toffee toffee powder
          tiramisu candy chupa chups. Chupa chups dragee icing applicake chupa
          chups dessert. Croissant jelly faworki marzipan tootsie roll
          marshmallow. Marshmallow toffee sweet roll fruitcake.
        </div>
        <div v-if="activetab === 2" class="tabcontent">
          Chocolate faworki croissant brownie halvah macaroon gummi bears wypas.
          Chupa chups icing gummies pudding dessert carrot cake. Cupcake jelly
          beans sweet roll icing ice cream apple pie tootsie roll gummi bears
          marzipan. Brownie gummies chupa chups pie. Cupcake jujubes topping.
        </div>
        <div v-if="activetab === 3" class="tabcontent">
          Cheesecake jelly beans ice cream lollipop sweet pastry. Chupa chups
          dessert cheesecake sesame snaps. Cookie ice cream candy canes pastry
          cake muffin. Icing chocolate sweet gummi bears powder oat cake oat
          cake lemon drops.
        </div>
      </div>
    </div>

    <h1>TEXT SEARCH</h1>
    <div style="text-align: left; padding: 40px">
      <h3>search</h3>
      <input type="text" v-model="searchText" placeholder="cari text" />
      <h4>result</h4>
      <span style="text-decoration: underline; margin-bottom: 10px; font-weight: 800">Found {{ count }} occurances of the word "{{ searchText }}" in the below text.</span>
      <div v-html="highlight()"></div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/kat_1.jpeg";
import img2 from "@/assets/kat_2.jpeg";
import img3 from "@/assets/kat_3.jpeg";
import img4 from "@/assets/kat_4.jpeg";
export default {
  data() {
    return {
      temp: "",
      count: 0,
      keys: "",
      activetab: 1,
      image1: img1,
      image2: img2,
      image3: img3,
      image4: img4,
      text: `Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] "Turtle" may either refer to the order as a whole, or to particular turtles which make up a form taxon that is not monophyletic.

The order Chelonii or Testudines includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[4] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the many species alive today, some are highly endangered.[5]

Like all other extant reptiles, turtles are ectotherms their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water.

Like other amniotes (reptiles, dinosaurs, birds, and mammals), they breathe air and do not lay eggs underwater, although many species live in or around water. The largest turtles are aquatic.`,
    };
  },
  methods: {
    highlight() {
      if (!this.keys) {
        return this.text
      }
      return this.text.replace(new RegExp(this.keys, "gi"), (match) => {
        return '<span class="highlightText">' + match + "</span>"
      })
    }
  },
  computed: {
    searchText: {
      get() {
        return this.keys !== "" ? this.keys : ""
      },
      set(val) {
        console.log("kosong", val)
        this.keys = val;
        if (this.keys === "") {
          this.count = 0;
        } else {
          this.count = (
            this.text.match(new RegExp(this.keys, "g")) || []
          ).length;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 620px;
  min-width: 420px;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}
.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px;
}
.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}
.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.image {
  display: inline-block;
  height: 500px;
  width: 500px;
  font-size: 1px;
  padding: 1px;
  margin-right: 5px;
  margin-left: 5px;
  animation: roll 3s infinite;
  transform: rotate(30deg);
  opacity: 0.7;
}

@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

body,
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style>
.highlightText {
  background: red;
}
</style>

