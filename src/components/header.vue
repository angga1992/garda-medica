<template>
  <div class="headers">
    <img :src="logo" alt="logo-garda-medica" />
    <div class="sub-content-headers">
      <div class="content-action-headers">
        <div class="back-action">
          <button><img  style="width: 23px; height: 23px" :src="iconBack" alt=""></button>
        </div>
        <div class="type-services-action">
          <input placeholder="rawat jalan" disabled type="text" />
        </div>
        <div class="search-action">
          <input placeholder="cari" type="text" />
          <img :src="search" alt="">
        </div>
      </div>
      <div class="content-info">
        <div class="sub-content-action-info">
          <div class="square-tabs"
          >
            <span class="legend">Nama (usia)</span>
            <span class="infos">{{patients.name}} ({{patients.age}})</span
            >
          </div>
          <div class="square-tabs"
          >
            <span class="legend">tanggal lahir</span>
            <span class="infos"
              >{{patients.birthDay}}</span
            >
          </div>
          <div class="square-tabs"
          >
            <span class="legend">nomor rekam medis</span>
            <span class="infos">{{patients.recordMedic}}</span>
          </div>
          <div class="square-tabs"
          >
            <span class="legend">dpjp</span>
            <span class="infos"
              >{{patients.dpjp}}</span
            >
          </div>
        </div>
        <div class="account-name">
          <div class="square-tabs"
          >
            <span class="legend">anda masuk sebagai</span>
            <div class="infos">
              <img style="width: 14px; height: 14px" :src="accountIcon" alt="">
              <span>{{account}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-spec">
          <div class="sub-content-spec">
              <div class="info-diagnose">
                <span class="title-spec">Keluhan pertama</span>
                <span class="subtitle-spec">KU: Muntah darah sejak 1 hari lalu</span>
              </div>
              <div class="info-dp">
                <span class="title-spec">Diagnosis Primer dan Sekunder</span>
                <span class="subtitle-spec">DP: Eshopageal varices with bleeding (185.01)..</span>
              </div>
          </div>
          <div class="details-info">
              <div>
                  <span style="font-weight: 600">TANDA-TANDA VITAL, H+3, Latest Updated 27 Oktober 2020</span>
              </div>
              <div class="chips-info">
                <div class="chips greens">
                    <span class="title-spec">KESADARAN</span>
                    <span class="subtitle-spec">Compos Mentis</span>
                </div>
                <div class="chips greens">
                    <span class="title-spec">TEKANAN DARAH</span>
                    <span class="subtitle-spec">110/70 mmHg</span>
                </div>
                <div class="chips reds">
                    <span class="title-spec">LAJU NADI</span>
                    <span class="subtitle-spec">120 kali/menit</span>
                </div>
                <div class="chips yellows">
                    <span class="title-spec">LAJU NAPAS</span>
                    <span class="subtitle-spec">20 kalo/menit</span>
                </div>
                <div class="chips greens">
                    <span class="title-spec">SUHU TUBUH</span>
                    <span class="subtitle-spec">37,3</span>
                </div>
                <div class="chips yellows">
                    <span class="title-spec">EWS</span>
                    <span class="subtitle-spec">3</span>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from "@/assets/user.svg";
import iconsearch from "@/assets/search.svg";
import logos from "@/assets/gardamedica.png";
import back from "@/assets/left-arrow.svg";
export default {
  data() {
    return {
      search: iconsearch,
      accountIcon: user,
      logo: logos,
      iconBack: back,
      patients: {
          name: 'ny.mariana',
          birthDay: '13 januari 1997',
          age: '23',
          recordMedic: '01234567',
          dpjp: 'dr. febri bahari, spPD, KGEH'
      },
      account: 'DR. Deny Petra, spPD'
    };
  },
};
</script>

<style lang="scss" scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text]:focus {
  border: 1px solid #0caa4e !important;
  outline: none ! important;
}

input[type=submit] {
  width: 100%;
  background-color: #0caa4e;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
.reds {
    border: 1px solid red;
}
.yellows {
    border: 1px solid rgb(68, 68, 65);
}
.greens {
    border: 1px solid green;
}
.headers {
    display: flex;
    height: auto;
    background: antiquewhite;
    background: white;
    border: 1px solid #0caa4e;
    // align-items: center;
    z-index: 99;
    top: 0;
    position: sticky;
    img {
        width: 60px;
        height: 60px;
        margin: 5px;
    }
    .sub-content-headers {
        flex-direction: column;
        display: flex;
        width: 100%;
        .content-action-headers {
            display: flex;
            padding-left: 20px;
            .back-action {
                padding: 12px;
            }
            .type-services-action {
                width: 75%;
                padding: 5px;
                input {
                    width: 100%;
                }
            }
            .search-action {
                width: 20%;
                padding: 5px;
                input {
                    width: 80%;
                }
                img {
                    width: 22px;
                    height: 21px;
                    position: absolute;
                    top: 18px;
                    right: 37px;
                }
            }
        }
        .content-info {
            display: flex;
            padding: 10px; 
            padding-left: 20px;
            .sub-content-action-info {
                display: flex;
                width: 81.5%;
                .square-tabs {
                    display: flex;
                    flex-direction: column;
                    padding: 4px;
                    margin: 5px;
                    border: 1px solid grey;
                    text-align: left;
                    border-radius: 3px;
                    .legend {
                        font-size: 10px; 
                        color: grey;
                    }
                    .infos {
                        font-size: 14px; font-weight: 800
                    }
                }
            }
            .account-name {
                display: flex; 
                width: 20%;
                .square-tabs {
                    display: flex;
                    flex-direction: column;
                    padding: 4px;
                    margin: 5px;
                    border: 1px solid grey;
                    text-align: left;
                    border-radius: 3px;
                    .legend {
                        font-size: 10px; 
                        color: grey;
                    }
                    .infos {
                        font-size: 14px;
                        font-weight: 800;
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }
        .content-spec {
            display: flex;
            // width: 100%;
            padding: 20px;
            .sub-content-spec {
                display: flex;
                width: 50%;
                flex-direction: column;
                text-align: left;
                .info-diagnose {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 5px;
                    .title-spec {
                        font-size: 10px;
                        color: grey;
                    }
                    .subtitle-spec {
                        font-size: 14px; 
                        font-weight: 600;
                    }
                }
                .info-dp {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 5px;
                    .title-spec {
                        font-size: 10px;
                        color: grey;
                    }
                    .subtitle-spec {
                        font-size: 14px; 
                        font-weight: 600;
                    }
                }
            }
            .details-info {
                display: flex;
                width: 50%;
                flex-direction: column;
                text-align: left;
                .chips-info {
                    display: flex;
                    .chips {
                        display: flex; 
                        // border: 1px solid grey; 
                        flex-direction: column; 
                        width: fit-content; 
                        border-radius: 3px;
                        padding: 4px;
                        margin: 4px;
                        .title-spec {
                            font-size: 10px;
                            color: black;
                        }
                        .subtitle-spec {
                            font-size: 14px; 
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
}
</style>