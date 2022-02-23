<template>
  <v-app dark>
    <div class="pagenotfound">
      <div class="nofoundcontent">
        <div v-if="error.statusCode === 404">
          <!-- {{ pageNotFound }} -->
          <h1>404</h1>
          <h4>Page Not Found</h4>
        </div>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <p>Back to <NuxtLink to="/profile/dashboard">Home</NuxtLink></p>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "auth",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Page Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
