<template>
  <div>详情页面{{id}}</div>
</template>
<script>
export default {
  name: 'Detail',
  data() {
    return {
      id: null
    }
  },
  activated() {
    console.log(this.$route.params)
    this.id = this.$route.params.id;
  }
}
</script>