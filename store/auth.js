import { auth, firestore, firebase } from "~/plugins/firebase";
import { nanoid } from "nanoid";
export default {
  namespaced: true,
  state() {
    return {
      auth_user: {},
      loading: false,
      error: null,
      isLogged: false,
      message: "",
      verificationMsg: "",
    };
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
    clearError(state) {
      state.error = null;
      (state.message = ""), (state.verificationMsg = "");
    },
    loggedInUser(state, payload) {
      state.isLogged = payload;
    },
    current_user(state, payload) {
      state.auth_user = payload;
    },
    setMsg(state, payload) {
      state.verificationMsg = payload;
    },
  },
  actions: {
    async logIn({ commit, dispatch }, payload) {
      commit("setLoading", true);
      commit("clearError");
      try {
        const { user } = await auth().signInWithEmailAndPassword(
          payload.email,
          payload.password
        );

        await firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            dispatch("current_user", user.uid);
            this.$router.push("/profile/dashboard");
          });
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error);
      }
      commit("setLoading", false);
    },
    async Register({ commit, dispatch }, payload) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      commit("setLoading", true);
      commit("clearError");
      try {
        const { user } = await auth().createUserWithEmailAndPassword(
          payload.email,
          payload.password
        );
        payload.role = "user";
        payload.is_verify = false;
        payload.id = user.uid;
        payload.profile_pic =
          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
        payload.created_at = timestamp;
        payload.updated_at = timestamp;
        delete payload.password;
        await firestore.collection("users").doc(user.uid).set(payload);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        console.log(error, "err");
        commit("setError", error);
      }
    },

    async current_user({ commit, dispatch }, payload) {
      await firestore
        .collection("users")
        .doc(payload)
        .get()
        .then((snapshot) => {
          commit("current_user", snapshot.data());
        });
    },
    async logInWithGoogle({ commit, dispatch }, payload) {
      let validEmail = ["admin@gmail.com", "admin@admin.com"];

      commit("clearError");
      try {
        let googleUser = null;
        const { user: authUser } = await auth().signInWithPopup(
          new auth.GoogleAuthProvider()
        );
        googleUser = authUser;
        if (validEmail.indexOf(googleUser.email) !== -1) {
          let user = {
            email: googleUser.email,
          };
          this.$router.push("/profile/dashboard");
        } else {
          auth().signOut();
          this.$swal.fire({
            toast: true,
            position: "top-end",
            title: "Account doesn't exit",
            icon: "error",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
          });
        }
      } catch (error) {}
    },
    logout({ commit, dispatch }) {
      auth().signOut();
      commit("loggedInUser", false);

      this.$router.push("/login");
    },
    loggedInUser({ commit }, payload) {
      commit("loggedInUser", payload);
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    message(state) {
      return state.message;
    },
    verificationMsg(state) {
      return state.verificationMsg;
    },
    isLoggedIn(state) {
      if (process.server) {
        const user = auth().currentUser;
        console.log("user from auth", user);
        if (user) {
          return true;
        }
      }
      return state.isLogged;
    },
    getAuthUser(state) {
      return state.auth_user;
    },
  },
};
