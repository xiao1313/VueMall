<template>
  <div id="app">    
    <router-view></router-view>
  </div>
</template>
<script>
// import jsonp from 'jsonp'
export default {
  name:"app",
  components:{

  },
  methods:{

  },
  data(){
    return{
      age:30,
      data:''
    }
  },
  mounted(){
    // let url ="https://www.imooc.com/activity/servicetime";   
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss'
</style>
