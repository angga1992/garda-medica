<template>
<div>
  <ul class="events" style="width: 350px;">
    <li  v-for="(step, idx) in stepper" :key="idx">
      <time>{{step.date}}</time>
      <span><strong>{{step.info}}</strong></span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    data () {
        return {
            stepper: [
                {
                    date: '25 okt 2020',
                    info: 'IGD Ranap'
                },
                {
                    date: '3 okt 2020',
                    info: 'RAJAL'
                },
                {
                    date: '4 sept 2020',
                    info: 'RAJAL'
                },
                 {
                    date: '20 juni 2020',
                    info: 'IGD'
                },
                {
                    date: '1 feb 2020',
                    info: 'IGD-RANAP'
                },
            ]
        }
    }
}
</script>

<style scoped>
.events li {
  display: flex;
  color: #999;
  height: 140px;
}

.events time {
  position: relative;
  padding: 0 1.5em;
  width: 100px;
}

.events time::after {
  content: "";
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  transform: translateX(50%);
  border-radius: 50%;
  background: #fff;
  border: 1px #ccc solid;
  width: 0.8em;
  height: 0.8em;
}

.events span {
  padding: 0 1.5em 1.5em 1.5em;
  position: relative;
}

.events span::before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  height: 100%;
  border-left: 1px #ccc solid;
}

.events strong {
  display: block;
  font-weight: bolder;
}

.events {
  margin: 5em;
  width: 50%;
  /* z-index: 0; */
}
.events,
.events *::before,
.events *::after {
  box-sizing: border-box;
  font-family: arial;
}
</style>