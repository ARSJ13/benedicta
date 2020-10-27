<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  
  
}
</script>

<style>
  *{
    box-sizing: border-box;
    --azul:#3D5361;
    --rose: #D6B7B5;
    --marron: #D4C6BD;
    --nude: #F5F0ED;
  }
  body, ul, li, h1, h2, p {
    margin: 0px;
    padding: 0px;
  }
  ul, a{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  body{
    /* font-family: 'Grenze Gotisch', cursive; */
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    color: #345;
    background: url('./assets/background.jpg') no-repeat;
    background-size: cover;
  }
  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #main{
    flex: 1;
  }
  img{
    max-width: 100%;
    display: block;
  }

</style>
