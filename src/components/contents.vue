<template>
    <div style="display: flex;">
        <stepper />
        <div style="display: flex;     width: 100%; margin: 90px 0 0 0;padding: 5px;">
            <div style="display: flex; flex-direction: column; height: 690px; width: 200px;  overflow: auto;">
                <div style="width: 180px; margin: 10px" v-for="(lists, idx) in list" :key="idx">
                    <button :disabled="!lists.active" class="btns">{{ lists.title }}</button>
                </div>
            </div>
            <div style="display: flex; margin: 12px 0em 5em 0em; border: 1px solid grey; width: 80%;     border-radius: 30px;">
                <editor />
            </div>
        </div>
    </div>
</template>
<script>
import stepper from '@/components/stepper'
import editor from '@/components/editor'
export default {
    components: {
        stepper,
        editor
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
  width: 130px;
  cursor:pointer;
}
button:disabled {
  background: grey;
}

</style>