<template>
  <div>
    <v-container>
      <client-only>
        <v-toolbar flat>
          <v-toolbar-title>All Clients</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn elevation="2" class="new-client" @click="openAddClientModal"
            >New Client</v-btn
          >
        </v-toolbar>
        <add-client-modal
          :ShowAddClientModal="ShowAddClientModal"
          @close="ShowAddClientModal = false"
        />
      </client-only>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AddClientModal from "@/components/clients/AddClientModal";
import { auth } from "../../plugins/firebase";
import { getUserFromCookie } from "../../helpers/index";
export default {
  components: { AddClientModal },
  layout: "adminlayout",
  async asyncData({ req, redirect, store }) {
    let user = null;
    if (process.server) {
      user = getUserFromCookie(req);
      if (user) {
        await store.dispatch("auth/current_user", user.user_id);
      }
    } else {
      user = auth().currentUser;
      if (user) {
        await store.dispatch("auth/current_user", user.uid);
      }
    }
    if (!user) {
      redirect("/login");
    }
  },
  data: () => ({
    dialog: false,
    ShowAddClientModal: false,
    dialogDelete: false,
  }),
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
  methods: {
    openAddClientModal() {
      this.ShowAddClientModal = true;
    },
    UpdatedBy(id) {
      console.log(id);
      return "TimeStamp";
    },
  },
};
</script>

<style scoped>
.light-blue {
  background-color: #277cee !important;
  border-color: #277cee !important;
}
</style>
