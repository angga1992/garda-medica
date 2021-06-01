<template>
    <div style="display: flex;">
        <stepper />
        <div style="display: flex; margin: 5em 0em 5em 0em; border: 1px solid grey; flex-direction: column; height: 690px; width: 260px;  overflow: auto;">
            <div style="width: 180px; margin: 10px" v-for="(lists, idx) in list" :key="idx">
                <button style="width: 130px" class="btns">{{ lists.title }}</button>
            </div>
        </div>
        <div style="display: flex; margin: 5em 0em 5em 0em; border: 1px solid grey; width: 80%">
            dfdshfgskdj
        </div>
    </div>
</template>
<script>
import stepper from '@/components/stepper'
export default {
    components: {
        stepper
    },
    data () {
        return {
            list: [
                {
                    title: 'Anamnesis',
                    active: true
                },
                {
                    title: 'Riw. Alergi',
                    active: false
                },
                {
                    title: 'Fungsional',
                    active: false
                },
                {
                    title: 'Resiko Jatuh',
                    active: false
                },
                {
                    title: 'Skrining Gizi',
                    active: false
                },
                {
                    title: 'Edukasi',
                    active: false
                },
                {
                    title: 'Pem. Fisik',
                    active: false
                },
                {
                    title: 'Lab',
                    active: false
                },
                {
                    title: 'Radiologi',
                    active: false
                },
                {
                    title: 'Daf. Masalah',
                    active: false
                },
                {
                    title: 'Tatalaksana',
                    active: false
                },
                {
                    title: 'Riw.Obat',
                    active: false
                },
            ]
        }
    }
    
}
</script>

<style scoped>
.btns {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 2px;
}
</style>