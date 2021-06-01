<template>
    <transition :name="effect">
      <div>
        <div v-if="persistent" @click="close" class="icon-close-modal">
          <div class="content-icon-modal">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6666 2.68337L21.3166 0.333374L11.9999 9.65004L2.68325 0.333374L0.333252 2.68337L9.64992 12L0.333252 21.3167L2.68325 23.6667L11.9999 14.35L21.3166 23.6667L23.6666 21.3167L14.3499 12L23.6666 2.68337Z"
                fill="#E0E0E0"
              />
            </svg>
            <span class="text-icon-modal">Esc</span>
          </div>
        </div>
        <div class="modal-backdrop">
          <div :style="{ ...cardModal }" class="modals">
            <section class="modal-bodys">
              <slot name="body">
                I'm the default body!
                <button type="button" class="btn-close" @click="close">
                  x
                </button>
              </slot>
            </section>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
const ESCAPE = 27;
export default {
  name: "modal-rooms",
  props: {
    effect: {
      type: String,
      default: "",
    },
    persistent: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  watch: { 
    effect: function(newVal, oldVal) { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },
  data () {
      return {
          effects: this.effect
      }
  },
  mounted() {
    this.closeWithEsc();
  },
  methods: {
    closeWithEsc() {
      if (this.persistent) {
        document.body.addEventListener("keyup", (e) => {
          if (e.keyCode === ESCAPE) {
            this.close();
          }
        });
      }
    },
    close() {
      this.$emit("close");
    },
  },
  computed: {
    cardModal() {
      if (this.width > 0 || this.height > 0) {
        return {
          minHeight: this.height + "px",
          width: this.width + "px",
          display: "flex",
        };
      } else {
        return {
          minWidth: "0px",
          minHeight: "100%",
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-close-modal {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  .content-icon-modal {
    display: grid;
    flex-direction: row-reverse;
    cursor: pointer;
    padding: 50px;
    z-index: 99999;
    .text-icon-modal {
      color: white;
      font-size: 14px;
    }
  }
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modals {
    background: #ffffff;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
  }
  .modal-headers {
    color: black;
    justify-content: space-between;
    .btn-close {
      border: none;
      font-size: 20px;
      padding: 20px;
      cursor: pointer;
      font-weight: bold;
      color: #4aae9b;
      background: transparent;
    }
  }
  .modal-headers,
  .modal-footers {
    display: flex;
    justify-content: center;
  }
  .modal-footers {
    justify-content: flex-end;
    .btn-green {
      color: white;
      background: #4aae9b;
      border: 1px solid #4aae9b;
      border-radius: 2px;
    }
  }
  .modal-bodys {
    position: relative;
    text-align: center;
  }
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
