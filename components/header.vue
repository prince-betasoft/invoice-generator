<template>
  <v-app-bar fixed app class="top-bar px-0">
    <v-container class="container-md" id="container">
      <v-row>
        <v-col sm="4" xl="6" class="pr-0 pl-0">
          <h3 class="logo-head">
            <div class="dashboard-header-logo-wrapper"></div>
          </h3>
        </v-col>
        <v-col class="pl-0 pr-0" sm="8" xl="6">
          <client-only>
            <div class="top-btns">
              <v-btn
                class="registerbtn ml-2"
                :ripple="{ center: true }"
                to="/login"
                v-if="!isLoggedUser"
                >Sign In
              </v-btn>
              <v-btn
                class="registerbtn ml-2"
                :ripple="{ center: true }"
                to="/profile/dashboard"
                v-if="isLoggedUser"
                >Dashboard</v-btn
              >
            </div>
          </client-only>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { auth } from "~/plugins/firebase";
import { getUserFromCookie } from "~/helpers/index";
export default {
  asyncData({ req }) {
    let user = null;
    if (process.server) {
      user = getUserFromCookie(req);
    } else {
      user = auth().currentUser;
    }
    return { userLoggedIn: !!user };
  },
  methods: {
    ...mapActions({
      logoutUser: "auth/logout",
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
  computed: {
    isLoggedIn() {
      return this.userLoggedIn;
    },
    ...mapGetters({
      isLoggedUser: "auth/isLoggedIn",
    }),
  },
};
</script>
