<template>
  <header class="header-container">
    <img src="../assets/logo.jpeg" alt="Imagem da Santa Benedicta">
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"

}
</script>

<style scoped>
.header-container{
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
.header-container>img{
  width: 8rem;
}
nav{
  display: flex;
  align-items: center;
}
nav>a{
  background: var(--marron);
  color: var(--azul);
  padding: 12px 20px;
  text-align: center;
  margin-right: 2rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 500;
  transition: all 0.4s;
}
nav>a:nth-child(3){
  background: var(--azul);
  color: var(--marron);
}
nav>a:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
nav>a:nth-child(3):hover{
  transform: scale(1.1);
}
</style>