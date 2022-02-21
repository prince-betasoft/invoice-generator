<template>
  <div>
    <v-container>
      <client-only>
        <div>All Invoices</div>
      </client-only>
    </v-container>
  </div>
</template>
<script>
import { auth, firestore } from "~/plugins/firebase";

export default {
  data() {
    return {
      totalInvoices: 0,
      invoicesList: [],
      loading: false,
      options: {},
      observer: null,
    };
  },
  mounted() {
    this.getDataFromApi();
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
    },
  },
  methods: {
    async getDataFromApi() {
      this.loading = true;
      const {
        senderCompanyName,
        senderFirstName,
        senderLastName,
      } = this.options;

      const url =
        "http://localhost:5001/test-mode-b30/us-central1/api/fetch-sender-data";
      let authToken = await auth().currentUser.getIdToken();

      await this.$axios
        .get(
          `senderCompanyName=${senderCompanyName}&senderFirstName=${senderFirstName}&senderLastName=${senderLastName}`,
          {
            headers: { authorization: `Bearer ${authToken}` },
          }
        )
        .then((resp) => {
          this.loading = false;
          if (resp.data.status === "success") {
            this.invoicesList = resp.data.data;
            this.totalInvoices = resp.data;
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log("err", err);
        });
    },
    watcher() {
      const query = firestore
        .collection("senderDetails")
        .where("isDeleted", "==", false);

      const observer = query.onSnapshot(
        (querySnapshot) => {
          console.log(`Received query snapshot of size ${querySnapshot.size}`);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
    },
  },
};
</script>
