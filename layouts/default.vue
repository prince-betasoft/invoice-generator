<template>
  <v-app light>
    <HeaderSection />
    <v-main class="storypage">
      <v-container id="container">
        <nuxt />
      </v-container>
    </v-main>
    <FooterSection />
  </v-app>
</template>

<script>
// import FrontStyle from "@/assets/css/style.css"
import { mapActions, mapGetters } from "vuex";
import FooterSection from "@/components/footer.vue";
import HeaderSection from "@/components/header.vue";

export default {
  components: {
    // FrontStyle,
    FooterSection,
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
          icon: "mdi-apps",
          title: "Story",
          to: "/story",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/login",
        },
      ],
      socials: [
        {
          icon: "mdi-facebook",
          color: "indigo",
        },
        {
          icon: "mdi-twitter",
          color: "cyan darken-1",
        },
        {
          icon: "mdi-gmail",
          color: "red lighten-3",
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
