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
          <v-btn elevation="2" class="new-story" @click="openAddClientModal"
            >+ ADD CLIENT</v-btn
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
import moment from "moment";
import AddClientModal from "@/components/stories/AddClientModal";
import { firestore, auth } from "../../plugins/firebase";
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
    sortDesc: true,
    sortBy: "title",
    headers: [],
    story: {},
    stories: [],
    editedIndex: -1,
  }),
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
  methods: {
    getDate(val) {
      const format1 = "YYYY-MM-DD hh:mm A";
      var date1 = new Date(val.seconds * 1000);
      var dateTime1 = moment(date1).format(format1);
      return dateTime1;
    },
    limitText(text) {
      if (text && text.length > 27) {
        return text.substring(0, 27) + "...";
      } else {
        return text;
      }
    },
    viewItem(item) {
      let url = window.location.origin + "/" + item.id + "/" + item.slug;
      return url;
    },
    openAddStroryModal() {
      this.ShowAddClientModal = true;
    },
    async editItem(item) {
      try {
        await firestore
          .collection("stories")
          .doc(item.id)
          .get()
          .then((snapshot) => {
            this.story = snapshot.data();
          });
      } catch (error) {
        this.story = {};
      }
    },
    async deleteItem(item, value) {
      let confirmed = (
        await this.$swal({
          title: "Are you sure?",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        })
      ).value;

      if (confirmed) {
        try {
          let payload = {
            id: item.id,
            isDeleted: value,
          };
          await this.softDelete(payload);
          this.$swal({
            toast: true,
            position: "top-end",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
          });
        } catch (error) {
          this.$swal({
            toast: true,
            position: "top-end",
            title: `Something went wrong, try again later`,
            icon: "warning",
            timer: 2000,
            timerProgressBar: true,
          });
        }
      }
    },
    copyItem(item) {
      let url = window.location.origin + "/" + item.id + "/" + item.slug;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          this.$swal({
            toast: true,
            position: "top-end",
            title: `Link copied!`,
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
          });
        })
        .catch(() => {
          console.log("ncopy");
        });
    },
    UpdatedBy(id) {
      console.log(id);
      return "Menny";
    },
    async modeChange(value, id, title) {
      let payload = {
        id: id,
        private_mode: value,
      };
      try {
        await this.updateStory(payload);
        this.$swal({
          toast: true,
          position: "top-end",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        });
      } catch (err) {
        this.$swal({
          toast: true,
          position: "top-end",
          title: `Sorry try again later`,
          icon: "warning",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    },
  },
};
</script>

<style scoped>
.light-blue {
  background-color: #277cee !important;
  border-color: #277cee !important;
}
.v-input.stories-search {
  border: 1px solid #818181;
  padding-left: 10px;
  border-radius: 4px;
  max-width: 450px;
}
.title {
  color: #fff !important;
}
#mystoriestable {
  padding: 14px;
  border-radius: 10px !important;
  margin-bottom: 50px;
}
button.v-icon {
  font-size: 20px !important;
  color: #277cee !important;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 18px !important;
}
.v-data-table-header {
  background-color: black !important;
}
#mystoriestable td.text-end {
  display: flex !important;
  height: 98px !important;
  align-items: center !important;
}
a.v-btn.view-icon.v-btn--icon {
  background: #277cee;
  border-radius: 3px;
  width: 30px !important;
  height: 30px !important;
  font-size: 16px !important;
  color: #fff !important;
  text-align: center;
}

#mystoriestable .v-btn.StoryTitle {
  padding: 0px !important;
  text-align: left !important;
  justify-content: flex-start;
  color: #277cee !important;
  text-transform: capitalize !important;
}
#mystoriestable .v-btn.StoryTitle:hover {
  text-decoration: underline;
  background: transparent !important;
}
.table-right-btns {
  display: flex;
}
</style>
