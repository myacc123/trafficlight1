<template>
  <div id="app">
      <center><h1>Приложение "Светофор"</h1></center>
      <router-view></router-view>
      <center>
      <button class="indent"><a href="/">Перейти на главную страницу</a></button>
      <button class="indent"><a href="/1">Перейти на красный</a></button>
      <button class="indent"><a href="/2">Перейти на желтый</a></button>
      <button class="indent"><a href="/3">Перейти на зеленый</a></button>
      </center>
  </div>

</template>

<script>

  export default {
      name: 'app'
  }
</script>

<style scoped>

.indent{
    margin-left: 5%;
    margin-top: 10%;
}

#app{
    margin-bottom: 10%;

}
</style>