<template>
  <header class="header-container">
    <figure class="logo-container">
      <nuxt-icon name="logo" filled />
    </figure>

    <nav>
      <figure class="menu-item">
        <nuxt-icon name="menu" filled />
      </figure>

      <figure class="menu-item">
        <nuxt-icon name="user" filled />
      </figure>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  height: 3.25rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #D9F2A5;
  color: #fafafa;
  box-sizing: border-box;

  .logo-container {
    font-size: 5.5rem;
    margin: 0;
  }

  nav {
    display: flex;

    .menu-item {
      font-size: 1rem;
      margin: 0;
      padding: 1px 0.5rem;
      cursor: pointer;
    }

    .menu-item:not(:last-child) {
      border-right: 1px solid #136262;
    }
  }
}
</style>
