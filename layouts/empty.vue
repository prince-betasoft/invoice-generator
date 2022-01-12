<template>
  <v-app light>
    <HeaderSection />
    <v-main>
      <nuxt />
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
  data: () => ({
    drawer: false,
    group: null,
  }),
  data() {
    return {
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
      Auth_Logout: "auth/logout",
    }),
    ...mapGetters({
      isLogged: "user/signedIn",
    }),
    logout() {
      this.Auth_Logout();
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
