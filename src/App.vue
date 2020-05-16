<template>
  <div id="app">
    <div id="nav">
    <line-chart :data="chartData"></line-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dataChart: {
        '1pm': 1,
        '2pm': 2,
        '3pm': 3
      }
    }
  }
}

</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
