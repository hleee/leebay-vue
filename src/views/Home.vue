<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link to="/login">
        log in
      </router-link>
      or
      <router-link to="/register">
        register
      </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'

export default {
  computed: {
    ...authComputed
  }
}
</script>
