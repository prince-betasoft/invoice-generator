<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="600px">
      <v-card class="addnew-client">
        <v-card-title>
          <span class="headline">New Client</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Name / Company Name</label>
                <v-text-field
                  v-model="clientModel.clientCompanyName"
                  required
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.clientModel.clientCompanyName.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientCompanyName.required"
                    >Name is required</span
                  >
                  <span v-if="!$v.clientModel.clientCompanyName.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">First Name</label>
                <v-text-field
                  v-model="clientModel.clientFirstName"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.clientModel.clientFirstName.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientFirstName.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>

              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Last Name</label>
                <v-text-field
                  v-model="clientModel.clientLastName"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>

                <div
                  v-if="$v.clientModel.clientLastName.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientLastName.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="8" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Email Address</label>
                <v-text-field
                  v-model="clientModel.clientEmail"
                  required
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.clientModel.clientEmail.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientEmail.required"
                    >Email is required</span
                  >
                  <span v-if="!$v.clientModel.clientEmail.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="4" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Country</label>
                <v-select
                  v-model="clientModel.clientCountry"
                  :items="currencies"
                  outlined
                  required
                  item-text="name"
                  item-value="id"
                  hide-details="auto"
                ></v-select>
                <div
                  v-if="$v.clientModel.clientCountry.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientCountry.required"
                    >Country is required</span
                  >
                  <span v-if="!$v.clientModel.clientCountry.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Address Line 1</label>
                <v-text-field
                  v-model="clientModel.clientAddress1"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>

                <div
                  v-if="$v.clientModel.clientAddress1.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientAddress1.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Address Line 2</label>
                <v-text-field
                  v-model="clientModel.clientAddress2"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>

                <div
                  v-if="$v.clientModel.clientAddress2.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientAddress2.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Phone</label>
                <v-text-field
                  v-model="clientModel.clientPhone"
                  required
                  outlined
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                  onCut="return false"
                  onDrag="return false"
                  onDrop="return false"
                  autocomplete="off"
                  hide-details="auto"
                  dense
                  @keypress="onlyNumbers"
                ></v-text-field>
                <div
                  v-if="$v.clientModel.clientPhone.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientPhone.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="pl-0 py-0 pt-3">
                <label class="form-label-outside">Extra Data</label>
                <v-text-field
                  v-model="clientModel.clientExtraData"
                  outlined
                  hide-details="auto"
                  dense
                ></v-text-field>
                <div
                  v-if="$v.clientModel.clientExtraData.$error"
                  style="color: red"
                  class=""
                >
                  <span v-if="!$v.clientModel.clientExtraData.maxLength"
                    >You have reached your maximum limit of characters
                    allowed</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="btn-primary mr-2"
            text
            @click="onSubmit"
            :loading="loading"
          >
            Save
          </v-btn>
          <v-btn class="btn-secondary" text @click="closeModal"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { required, maxLength } from "vuelidate/lib/validators";
import { nanoid } from "nanoid";
import { mapActions, mapGetters } from "vuex";
import currencyJson from "~/data/currencies.json";
export default {
  currencyJson: currencyJson,
  props: {
    ShowAddClientModal: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    countryCurrencySymbol: {
      currencies: [],
    },
    currencies: [],
    clientModel: {
      clientCompanyName: "",
      clientFirstName: "",
      clientLastName: "",
      clientEmail: "",
      clientCountry: "",
      clientAddress1: "",
      clientAddress2: "",
      clientPhone: "",
      clientExtraData: "",
      isDeleted: false,
      slug: "",
    },
    loading: false,
  }),
  validations: {
    clientModel: {
      clientCompanyName: { required, maxLength: maxLength(50) },
      clientFirstName: { maxLength: maxLength(50) },
      clientLastName: { maxLength: maxLength(50) },
      clientEmail: { required, maxLength: maxLength(50) },
      clientCountry: { required, maxLength: maxLength(50) },
      clientAddress1: { maxLength: maxLength(200) },
      clientAddress2: { maxLength: maxLength(200) },
      clientPhone: { maxLength: maxLength(16) },
      clientExtraData: { maxLength: maxLength(200) },
    },
  },
  computed: {
    isVisible: {
      get() {
        return this.ShowAddClientModal;
      },
      set() {
        return false;
      },
    },
    ...mapGetters({
      current_user: "auth/getAuthUser",
    }),
  },
  methods: {
    onlyNumbers(event) {
      let keyCode = event.keyCode ? event.keyCode : event.which;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
    closeModal() {
      (this.clientModel.clientCompanyName = ""),
        (this.clientModel.clientFirstName = ""),
        (this.clientModel.clientLastName = ""),
        (this.clientModel.clientEmail = ""),
        (this.clientModel.clientCountry = ""),
        (this.clientModel.clientAddress1 = ""),
        (this.clientModel.clientAddress2 = ""),
        (this.clientModel.clientPhone = ""),
        (this.clientModel.clientExtraData = ""),
        (this.clientModel.slug = ""),
        this.$v.clientModel.$reset(),
        this.$emit("close");
    },
    ...mapActions({
      addClient: "modules/client/addClient",
    }),
    async onSubmit() {
      this.$v.$touch();
      if (this.$v.clientModel.$error) return;
      this.loading = true;
      try {
        this.clientModel.id = "clients-" + nanoid();
        await this.addClient(this.clientModel);
        this.closeModal();
        this.$swal.fire({
          toast: true,
          position: "top-end",
          title: "Client added successfully",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        this.loading = false;
        setTimeout(() => {
          if (process.client) {
            window.open(
              window.location.origin + "/profile/client/" + this.clientModel.id,
              "_blank"
            );
          }
        }, 1500);
      } catch (error) {
        this.loading = false;
        console.log(error, "myerror");
      }
    },
  },
  mounted() {
    this.currencies = currencyJson;
  },
};
</script>
