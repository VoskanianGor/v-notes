<script setup lang="ts">
import MENU from "~router/menu";
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">📝 v-note</RouterLink>
    <nav class="navigation">
      <RouterLink
        class="link"
        v-for="{ name, path } in MENU"
        :key="name"
        :to="path"
      >
        {{ name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "~styles/variables.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 30px;
}

.logo {
  font-size: 18px;
  color: $c-text-secondary;
}

.link {
  color: $c-text-secondary;
  font-size: 18px;
  transition: $transition;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    color: $c-accent-hover;
  }

  &.router-link-exact-active {
    color: $c-accent-active;
  }
}
</style>
