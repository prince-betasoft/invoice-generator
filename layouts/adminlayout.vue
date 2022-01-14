<template>
  <v-app light class="admin-top-bar">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="sidebar"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content class="dashboard-username-wrapper">
            <v-list-item-title>
              <p>
                <client-only>
                  <div v-if="current_user && current_user.first_name">
                    {{ current_user.first_name }} {{ current_user.last_name }}
                  </div>
                </client-only>
              </p></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list>
        <v-list-item to="/profile/all-invoices" router exact>
          <v-list-item-icon class="dashboard-sidebar-document-wrapper">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="dashboard-sidebar-selectedheading-wrapper"
            >
              Invoices</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/profile/clients" router exact>
          <v-list-item-icon class="dashboard-sidebar-account-wrapper">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="dashboard-sidebar-selectedheading-wrapper"
            >
              Clients</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/profile/settings" router exact>
          <v-list-item-icon class="dashboard-sidebar-settings-wrapper">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="dashboard-sidebar-selectedheading-wrapper"
            >
              My Details</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-btn class="sidebar-paymentbtn-wrapper">
          International Payments
        </v-btn>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon class="dashboard-sidebar-logout-wrapper">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="dashboard-sidebar-selectedheading-wrapper"
              @click="logout"
            >
              Sign Out</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon class="dashboard-sidebar-email-wrapper">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="dashboard-sidebar-selectedheading-wrapper"
              @click="sendEmailDefault"
            >
              Contact Us</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-btn class="menu-btn-mobile" @click.stop="drawer = !drawer">
          <v-icon> mdi-menu </v-icon>
        </v-btn>
        <v-spacer />
        <v-card-actions class="top-admin-bar">
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <!-- <v-img
                class="elevation-6"
                alt=""
                :src="current_user.profile_pic"
              ></v-img> -->
            </v-list-item-avatar>
            <v-list-item-content>
              <client-only>
                <v-list-item-title
                  class="user-name"
                  v-if="current_user && current_user.first_name"
                >
                  {{ current_user.first_name }} {{ current_user.last_name }}
                </v-list-item-title>
              </client-only>
            </v-list-item-content>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn text @click="editProfile"
                      >Edit profile</v-btn
                    ></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn text @click="logout"
                      >Logout</v-btn
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-card-actions>
      </v-app-bar>
    </v-container>
    <v-main class="invoicepage">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <EditProfileModal
      :editProfileModal="editProfileModal"
      @close="editProfileModal = false"
      :userData="userData"
    />
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import EditProfileModal from "@/components/user/edit-profile-modal.vue";
import { auth, firestore } from "~/plugins/firebase";
import Toaster from "~/services/sweetToaster.js";

export default {
  components: {
    EditProfileModal,
  },

  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "invoice builder",
      editProfileModal: false,
      userData: {},
    };
  },
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
  methods: {
    sendEmailDefault() {
      var email = "contact@freeinvoicebuilder.com";
      var subject = "";
      var msgBody =
        "Thank you for contacting us, we will get back to you in 24 hours!";
      window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
    },
    ...mapActions({
      logoutUser: "auth/logout",
    }),
    logout() {
      Toaster.success(" Successfully logged out", "success");

      this.logoutUser();
    },
    goBack() {
      this.$router.back();
    },
    async editProfile() {
      await firestore
        .collection("users")
        .doc(auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          this.userData = snapshot.data();
          this.editProfileModal = true;
        });
    },
  },
};
</script>
<style scoped>
.v-menu__content {
  top: 65px !important;
}
.dashboard-username-wrapper {
  padding: 10px 50px 13px 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 2rem 0rem 15px;
}
.dashboard-username-wrapper p {
  margin-bottom: 0px !important;
  word-break: break-all;
  font-size: 14px;
}
button.sidebar-paymentbtn-wrapper {
  background: #90a7b8 !important;
  color: #fff !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 13px !important;
  border-radius: 3px;
  margin: 25px 42px !important;
  letter-spacing: 0.5px !important;
  text-transform: capitalize;
  padding: 0 10px !important;
}
</style>
