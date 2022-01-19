<template>
  <div>
    <v-container>
      <client-only>
        Clients
        <div class="dashboard-sidebar-logo-wrapper"></div>
        <h3>Create your first client now</h3>
        <v-btn class="download-btn" @click="openAddClientModal"
          >New Client</v-btn
        >
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
import addClientModal from "@/components/invoices/modals/add-client-modal";
import { auth, storage, firestore, firebase } from "~/plugins/firebase";
import { getUserFromCookie } from "../../helpers/index";

export default {
  components: { addClientModal },
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
    async openAddClientModal() {
      await firestore
        .collection("clients")
        .doc(auth().currentUser.uid)
        .get()
        .then(() => {
          this.ShowAddClientModal = true;
        });
    },
    UpdatedBy(id) {
      console.log(id);
      return "TimeStamp";
    },
  },
};
</script>
