<template>
  <div class="invoice-build">
    <v-container>
      <v-row>
        <v-col md="3" lg="3" xl="3" cols="12" style="padding-top: 0px">
          <v-card elevation="6" class="autor-details">
            <div class="admin-left-content">
              <v-list-item class="grow user-profile px-0">
                <v-list-item-content class="user-info">
                  <p>Client Details</p>
                  <v-list-item-title class="pt-2">{{
                    clientModel.clientFirstName
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <div class="divider mt-2"></div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { auth } from "../../../../plugins/firebase";
import { getUserFromCookie } from "../../../../helpers/index";
export default {
  layout: "adminlayout",
  asyncData({ req, redirect }) {
    let user = null;
    if (process.server) {
      user = getUserFromCookie(req);
    } else {
      user = auth().currentUser;
    }
    if (!user) {
      redirect("/login");
    }
  },
  data() {
    return {
      clientModel: {},
    };
  },
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
};
</script>
