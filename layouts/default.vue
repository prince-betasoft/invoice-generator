<template>
  <v-app light>
    <HeaderSection />
    <v-main class="invoicepage">
      <v-container id="container">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import FrontStyle from "@/assets/css/style.css"
import { mapActions, mapGetters } from "vuex";
import HeaderSection from "@/components/header.vue";

export default {
  components: {
    // FrontStyle,
    HeaderSection,
  },
  data() {
    return {
      group: null,
      clipped: false,
      drawer: false,
      left: true,
      fixed: false,
      items: [
        {
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/login",
        },
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "invoice builder",
    };
  },
  methods: {
    ...mapActions({
      logoutUser: "auth/logout",
    }),
    ...mapGetters({
      isLogged: "user/signedIn",
    }),
    logout() {
      this.logoutUser();
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped></style>
