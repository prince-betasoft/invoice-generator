<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="600px">
      <v-card class="addnew-story">
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-form
          ref="profile_form"
          v-model="valid"
          lazy-validation
          @submit.prevent="UpdateProfile"
        >
          <v-card-text>
            <v-container>
              <v-row>
                <v-col sm="6">
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="pl-0 py-1">
                      <v-text-field
                        label="First name*"
                        required
                        :rules="nameRules"
                        v-model="user_data.first_name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="pl-0 py-1">
                      <v-text-field
                        label="Last name"
                        :rules="nameRules"
                        v-model="user_data.last_name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="pl-0 py-1">
                      <v-text-field
                        label="Email*"
                        required
                        v-model="user_data.email"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col lg="6">
                  <label>Profile Image</label>
                  <label>
                    <v-file-input
                      @change="uploadFile"
                      accept="image/*"
                      ref="profile_image"
                      id="profile_upload"
                      style="display: none; object-fit: cover"
                    ></v-file-input>
                    <div class="image-upload-section profile-picture mt-1">
                      <v-img
                        :src="user_data.profile_pic"
                        v-if="user_data.profile_pic"
                        style="width: 100%"
                        height="200px"
                      ></v-img>
                      <div class="inner-content" v-if="!user_data.profile_pic">
                        <v-icon> mdi-camera </v-icon>
                        <p>Click here to upload the Profile image</p>
                      </div>
                    </div>
                    <v-progress-linear
                      :value="uploadValue"
                      v-if="uploadValue"
                    ></v-progress-linear>
                  </label>
                </v-col>
                <v-col cols="12" class="pl-0 py-0 mt-4">
                  <label>Default Story Image</label>
                  <label>
                    <v-file-input
                      @change="uploadImage"
                      accept="image/*"
                      ref="story_image"
                      id="story_upload"
                      style="display: none; object-fit: cover"
                    ></v-file-input>
                    <div class="image-upload-section mt-1">
                      <v-img
                        :src="user_data.default_story_pic"
                        v-if="user_data.default_story_pic"
                        style="width: 100%"
                        height="200px"
                      ></v-img>
                      <div
                        class="inner-content"
                        v-if="!user_data.default_story_pic"
                      >
                        <v-icon> mdi-camera </v-icon>
                        <p>Click here to upload the story image</p>
                      </div>
                    </div>
                  </label>
                  <v-progress-linear
                    :value="uploadPercentage"
                    v-if="uploadPercentage"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="btn-secondary mr-2" @click="closeModal">
              Close
            </v-btn>
            <v-btn class="btn-primary" @click="UpdateProfile"> Update </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { auth, storage, firestore, firebase } from "~/plugins/firebase";

export default {
  props: {
    editProfileModal: {
      default: false,
      type: Boolean,
    },
    userData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      uploadValue: 0,
      uploadPercentage: 0,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 25) || "Name must be less than 25 characters",
      ],
      valid: true,
    };
  },
  computed: {
    isVisible: {
      get() {
        return this.editProfileModal;
      },
      set() {
        return false;
      },
    },
    user_data() {
      return this.userData;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    uploadFile(evt) {
      var imageRef = storage.ref();
      var thisRef = imageRef.child(evt.name);
      const storageRef = thisRef.put(evt);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.user_data.profile_pic = url;
          });
        }
      );
    },
    uploadImage(evt) {
      var imageRef = storage.ref();
      var thisRef = imageRef.child(evt.name);
      const storageRef = thisRef.put(evt);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadPercentage = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.user_data.default_story_pic = url;
          });
        }
      );
    },
    async UpdateProfile() {
      this.uploadValue = 0;
      if (this.$refs.profile_form.validate()) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        let payload = {
          first_name: this.user_data.first_name,
          last_name: this.user_data.last_name,
          profile_pic: this.user_data.profile_pic,
          default_story_pic: this.user_data.default_story_pic,
          updated_at: timestamp,
        };
        try {
          await firestore
            .collection("users")
            .doc(auth().currentUser.uid)
            .update(payload);
          this.$store.dispatch("auth/current_user", auth().currentUser.uid);
          this.closeModal();
          this.$swal.fire({
            toast: true,
            position: "top-end",
            title: "Profile updated successfully",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
          });
        } catch (error) {
          this.closeModal();
          this.$swal.fire({
            toast: true,
            position: "top-end",
            title: "Something went wrong. Please try again later",
            icon: "warning",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
          });
        }
      }
    },
  },
};
</script>
<style scoped>
.addnew-story .image-upload-section {
  border: 2px dashed #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}
.profile-picture {
  border: 2px dashed #ddd;
  padding: 0px !important;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 100px !important;
  /* margin: 0 auto; */
}
</style>
