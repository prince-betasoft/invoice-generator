<template>
  <div>
    <v-container>
      <client-only>
        <h3>Clients</h3>
        <v-card class="addnew-invoice">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col lg="6"> <div></div></v-col>
                <v-col lg="6">
                  <div class="dashboard-sidebar-logo-wrapper"></div>
                  <h3>Create your first client now</h3>
                  <v-btn class="btn-primary" @click="openAddClientModal"
                    >New Client</v-btn
                  >
                </v-col>
              </v-row>
              <add-client-modal
                :ShowAddClientModal="ShowAddClientModal"
                @fetchClientDetails="listClientDetails"
                @close="ShowAddClientModal = false"
              />
            </v-container>
          </v-card-text>
        </v-card>
      </client-only>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addClientModal from "@/components/invoices/modals/add-client-modal";
import { auth } from "~/plugins/firebase";
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
    ShowAddClientModal: false,
  }),
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
  // watch: {
  //   ShowAddClientModal() {
  //     if (this.ShowAddClientModal) {
  //       // this.clientModel = this.clientModel.clientExtraData;
  //    //   this.listClientDetails();
  //     }
  //   },
  // },
  methods: {
    ...mapActions({
      listClientDetails: "modules/invoice/fetchAllClientDetails",
    }),
    async openAddClientModal() {
      this.ShowAddClientModal = true;
    },
    UpdatedBy(id) {
      console.log(id);
      return "TimeStamp";
    },
  },
  async mounted() {
    await this.listClientDetails();
  },
};
</script>
