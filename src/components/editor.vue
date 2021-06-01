<template>
    <div class="editor-content">
        <div class="print">
            <img :src="print" alt="">
        </div>
        <div class="title-editor">
            <h4>PENGKAJIAN AWAL PASIEN RAWAT INAP</h4>
        </div>
        <div class="headline-editor">
            <span>Autoanamnesis</span>
            <span>Tanggal Masuk Bangsal: Senin, 26 Oktober 2020, 12.00 wib</span>
        </div>
        <div class="headline-editor">
            <span>Alloanamneis: Tn. Rizal (Suami)</span>
            <span>Anamnesis oleh: dr.sukma ayu</span>
        </div>
        <div class="loop" v-for="(clue, idx) in clues" :key="idx">
            <div class="box-editor">
                <div>{{clue.title}}<span>{{clue.details}}</span></div>
            </div>
            <img style="width: 20px; height: 20px" :src="icone" alt="">
        </div>
    </div>
</template>

<script>
import editIcon from '@/assets/edit.svg'
import printer from '@/assets/print.svg'
export default {
    data () {
        return {
            print: printer,
            icone: editIcon,
            clues: [
                {
                    title: 'KELUHAN PERTAMA: ',
                    details: 'Muntah darah sejak 1 hari yang lalu'
                },
                {
                    title: 'RIWAYAT PENYAKIT SEKARANG: ',
                    details: 'Pasien mengalami muntah darah sejak 1 hari yang lalu. Muntah terlihat warna kehitaman disertai makanan. muntah dialami pasien sebanyk 4 kali sejak 1 hari SMRS, dengan banyak sekitar 1/4 botol aqua setiap muntah'
                },
                {
                    title: 'RIWAYAT PENYAKIT DAHULU: ',
                    details: 'Pasien mengalami muntah darah sejak 1 hari yang lalu. Muntah terlihat warna kehitaman disertai makanan. muntah dialami pasien sebanyk 4 kali sejak 1 hari SMRS, dengan banyak sekitar 1/4 botol aqua setiap muntah'
                },
                {
                    title: 'RIWAYAT PENYAKIT KELUARGA: ',
                    details: 'Pasien mengalami muntah darah sejak 1 hari yang lalu. Muntah terlihat warna kehitaman disertai makanan. muntah dialami pasien sebanyk 4 kali sejak 1 hari SMRS, dengan banyak sekitar 1/4 botol aqua setiap muntah'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.editor-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 30px;
    .print {
        display: flex;
        justify-content: flex-end;
        img {
            width: 24px;
            height:24px;
            cursor: pointer;
        }
    }
    .title-editor {
        width: 100%;
        text-align: center;
    }
    .headline-editor {
        display: flex;
        width: 100%; 
        justify-content: 
        space-evenly;
    }
    .loop {
        display: flex;
        align-items: center;
        cursor: pointer;
        .box-editor {
            display: flex; 
            width: 100%; 
            border: 1px solid grey; 
            padding: 5px;
            border-radius: 10px; 
            margin-top: 20px;
        }
    }
}
</style>