<template>
  <div class="toast" v-show="message">{{message}}</div>
</template>
<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    show(message, duration=2000) {
      this.message = message;
      setTimeout(() => {
        this.message = '';
      }, duration);
    }
  }
}
</script>
<style scoped>
  .toast {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    color: #fff;
    padding: 6px;
    opacity: 0.6;
    border-radius: 6%;
    z-index: 9999;
  }
</style>