<template>
  <div class="RegisterCustomer">
    <v-app class="background_color">
      <v-container style="width: 1000px">
        <v-row>
          <v-col cols="4">
            <div class="template-selectbox-wrapper">
              <client-only>
                <v-select
                  :items="templates"
                  class="form-control"
                  append-icon="true"
                  v-model="defaultTemplete"
                  outlined
                  item-text="name"
                  item-value="id"
                  hide-details="auto"
                ></v-select>
              </client-only>
            </div>
          </v-col>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <div class="save-download-bankbody-wrapper">
              <v-btn @click="saveInvoiceData" class="save-btn">Save</v-btn
              ><v-btn class="downlaod-btn">Download</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-card class="bank-template-mainwrapper">
              <v-row>
                <v-col cols="6">
                  <v-form @click="onSubmitInvoiceLogo">
                    <div
                      v-if="imageData == null"
                      class="invoice-type-innerwrapper mainwrapper-first-row"
                      style="padding-bottom: 0px"
                    >
                      <div class="drag-filebackground">
                        <label class="form-label-outside"
                          >Drag your logo here or</label
                        >
                        <div>
                          <div>
                            <span
                              title="Add New select a file"
                              @click="click1"
                              class="placeholder"
                            >
                              select a file
                            </span>
                            <input
                              type="file"
                              ref="input1"
                              style="display: none"
                              @change="previewImage"
                              accept="image/*"
                              :disabled="dialog"
                              :loading="dialog"
                              class="white--text"
                              color="purple darken-2"
                              @click="dialog = true"
                            />
                          </div>
                          <br />
                          <pre></pre>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div v-if="imageData != null">
                        <div v-if="isSpinner" class="pt-12 pb-12 text-center">
                          <v-progress-circular
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
                        </div>
                        <img
                          class="preview"
                          object-fit:
                          cover
                          width="100%"
                          :src="img1"
                        />
                        <br />
                      </div>
                    </div>
                  </v-form>
                </v-col>
                <v-col cols="6">
                  <div
                    class="invoice-type-innerwrapper mainwrapper-first-row"
                    style="padding-bottom: 30px"
                  >
                    <v-dialog
                      v-model="InvoiceDialog"
                      persistent
                      max-width="250px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                          <div>
                            {{ InvoiceTypeView.invoiceType }}
                          </div>
                        </div>
                      </template>
                      <v-card class="invoice-modalwrapper delete-invoicemodal">
                        <v-card-title>
                          <span class="new-client-innerwrapper"
                            >Invoice Type</span
                          >
                          <i
                            text
                            @click="InvoiceDialog = false"
                            class="fa fa-times sender-modalwrapper-closebtn"
                            aria-hidden="true"
                          ></i>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-form @click="onSubmitInvoice">
                              <v-row>
                                <v-col cols="12" lg="12">
                                  <div class="country-selectb">
                                    <v-select
                                      :items="invoiceType"
                                      v-model="InvoiceTypeView.invoiceType"
                                      outlined
                                      item-text="name"
                                      item-value="id"
                                      hide-details="auto"
                                    ></v-select>
                                  </div>
                                </v-col>
                              </v-row>
                            </v-form>
                            <div
                              class="new-client-innerwrapper set-invoice-modal"
                            >
                              <v-btn @click="InvoiceDialog = false">
                                Set Invoice Type
                              </v-btn>
                            </div>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-dialog v-model="dialogSender" persistent max-width="700px">
                    <template v-slot:activator="{ on, attrs }">
                      <div
                        class="invoice-type-innerwrapper"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <label
                          class="form-label-outside"
                          style="text-transform: uppercase; font-size: 11px"
                          >From</label
                        >

                        <div v-if="invoiceSenderView.senderName">
                          <div>
                            <b>{{ invoiceSenderView.senderName }}</b>
                          </div>
                          <div>
                            {{ invoiceSenderView.senderFirstName }}
                            {{ invoiceSenderView.senderLastName }}
                          </div>
                          <div>
                            {{ invoiceSenderView.senderAddress1 }}
                          </div>
                          <div>
                            {{ invoiceSenderView.senderAddress2 }}
                          </div>
                          <div>
                            {{ invoiceSenderView.senderCountry }}
                          </div>
                          <div>
                            {{ invoiceSenderView.senderEmail }}
                          </div>

                          <div>
                            {{ invoiceSenderView.senderPhone }}
                          </div>
                          <div>
                            {{ invoiceSenderView.senderWebsite }}
                          </div>
                          <div>
                            {{ invoiceSenderView.taxRegistrationNumber }}
                          </div>
                          <div>
                            {{ invoiceSenderView.senderTaxNumber }}
                          </div>
                        </div>
                        <div v-else>
                          <div class="sender-contentbodywrapper">
                            <span><i class="fas fa-user"></i></span>
                            <h5>Sender Name</h5>
                            <p>Sender Contact Details</p>
                          </div>
                          <!-- <div v-if="!isHiddenCompanyInfo">
                            <div class="input-terms-mainwrapper">
                              <input
                                type="value"
                                class="form-control"
                                v-model="invoiceAllDetails.companyInfo"
                                hide-details="auto"
                              />
                            </div>
                          </div> -->
                        </div>

                        <div v-if="customFieldOne.displayLocation == 'Sender'">
                          <div>
                            <b>{{ customFieldOne.fieldName }}</b>
                            <br />
                            {{ customFieldOne.fieldValue }}
                          </div>
                        </div>
                        <div v-if="customFieldTwo.displayLocation == 'Sender'">
                          <div>
                            <b>{{ customFieldTwo.fieldName }}</b>
                            <br />
                            {{ customFieldTwo.fieldValue }}
                          </div>
                        </div>
                        <div
                          v-if="customFieldThree.displayLocation == 'Sender'"
                        >
                          <div>
                            <b>{{ customFieldThree.fieldName }}</b>
                            <br />
                            {{ customFieldThree.fieldValue }}
                          </div>
                        </div>
                        <div v-if="paymentOverview.displayLocation == 'Sender'">
                          <div>
                            <b>{{ paymentOverview.paymentTypeHeading }}</b>
                            <br />
                            {{ paymentOverview.paymentType }}
                            <br />
                            <b>{{ paymentOverview.paymentDetailsHeading }}</b>
                            <br />
                            {{ paymentOverview.paymentDetails }}
                          </div>
                        </div>
                      </div>
                    </template>
                    <v-card class="sender-modal-mainwrapper">
                      <v-card-title>
                        <i
                          @click="setSenderClose"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form
                            ref="sender_form"
                            @click="onFormSubmit"
                            lazy-validation
                          >
                            <v-row>
                              <v-col cols="12" sm="6" md="8" lg="8">
                                <label class="form-label-outside"
                                  >Company/ Client Name</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="invoiceSenderView.senderName"
                                  required
                                  hide-details="auto"
                                  :rules="nameRules"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4" lg="4">
                                <div class="country-selectb">
                                  <label class="form-label-outside"
                                    >Country</label
                                  >
                                  <v-select
                                    v-model="invoiceSenderView.senderCountry"
                                    :items="currencies"
                                    outlined
                                    required
                                    :rules="countryRules"
                                    item-text="name"
                                    item-value="id"
                                    hide-details="auto"
                                  ></v-select>
                                </div>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >First Name</label
                                >
                                <v-text-field
                                  outlined
                                  required
                                  class="form-control"
                                  v-model="invoiceSenderView.senderFirstName"
                                  :rules="firstNameRules"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Last Name</label
                                >
                                <v-text-field
                                  outlined
                                  required
                                  class="form-control"
                                  v-model="invoiceSenderView.senderLastName"
                                  :rules="lastNameRules"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <div class="registraction-inpu-modal">
                                  <i class="fa fa-pencil"></i>
                                  <input
                                    type="value"
                                    class="form-control"
                                    v-model="
                                      invoiceSenderView.taxRegistrationNumber
                                    "
                                    placeholder="Tax Registration Number"
                                    maxlength="50"
                                    hide-details="auto"
                                  />
                                </div>
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="invoiceSenderView.senderTaxNumber"
                                  hide-details="auto"
                                  :rules="globalRules"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside">Email</label>
                                <v-text-field
                                  outlined
                                  required
                                  class="form-control"
                                  :rules="emailRules"
                                  maxlength="200"
                                  v-model="invoiceSenderView.senderEmail"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <div class="border-wrapper-modal"></div>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Address 1</label
                                >
                                <v-text-field
                                  outlined
                                  :rules="globalRulesAddress"
                                  class="form-control"
                                  v-model="invoiceSenderView.senderAddress1"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Address 2</label
                                >
                                <v-text-field
                                  outlined
                                  maxlength="200"
                                  class="form-control"
                                  v-model="invoiceSenderView.senderAddress2"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" lg="6">
                                <label class="form-label-outside">Phone</label>
                                <v-text-field
                                  outlined
                                  onselectstart="return false"
                                  onpaste="return false;"
                                  onCopy="return false"
                                  onCut="return false"
                                  onDrag="return false"
                                  onDrop="return false"
                                  autocomplete="off"
                                  class="form-control"
                                  @keypress="onlyNumbers"
                                  :rules="globalRulesPhone"
                                  v-model="invoiceSenderView.senderPhone"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Website</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  :rules="websiteRules"
                                  v-model="invoiceSenderView.senderWebsite"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-card-actions class="sender-btnwrapper">
                                  <v-btn @click="setSender">
                                    Set Sender Details
                                  </v-btn>
                                </v-card-actions>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <div v-if="!isHiddenCompanyInfo">
                    <div class="input-terms-mainwrapper">
                      <input
                        type="value"
                        class="form-control"
                        v-model="invoiceAllDetails.companyInfo"
                        hide-details="auto"
                      />
                    </div>
                  </div>
                </v-col>
                <v-col cols="6">
                  <v-dialog
                    v-model="dialogRecipient"
                    persistent
                    max-width="700px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div
                        class="invoice-type-innerwrapper"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <label
                          class="form-label-outside"
                          style="text-transform: uppercase; font-size: 11px"
                          >To</label
                        >
                        <div v-if="invoiceClientView.clientCompanyName">
                          <div>
                            <b>{{ invoiceClientView.clientCompanyName }}</b>
                          </div>
                          <div>
                            {{ invoiceClientView.clientFirstName }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientLastName }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientEmail }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientCountry }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientAddress1 }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientAddress2 }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientPhone }}
                          </div>
                          <div>
                            {{ invoiceClientView.clientExtraData }}
                          </div>
                        </div>
                        <div v-else>
                          <div class="recipientbackground-wrapper">
                            <span><i class="fas fa-user"></i></span>
                            <h5>Recipient Name</h5>
                            <p>Recipient Contact Details</p>
                          </div>
                        </div>
                        <br />
                        <br />

                        <v-div
                          v-if="customFieldOne.displayLocation == 'Receiver'"
                        >
                          <div>
                            <b>{{ customFieldOne.fieldName }}</b>
                            <br />
                            {{ customFieldOne.fieldValue }}
                          </div>
                        </v-div>
                        <v-div
                          v-if="customFieldTwo.displayLocation == 'Receiver'"
                        >
                          <div>
                            <b>{{ customFieldTwo.fieldName }}</b>
                            <br />
                            {{ customFieldTwo.fieldValue }}
                          </div>
                        </v-div>
                        <v-div
                          v-if="customFieldThree.displayLocation == 'Receiver'"
                        >
                          <div>
                            <b>{{ customFieldThree.fieldName }}</b>
                            <br />
                            {{ customFieldThree.fieldValue }}
                          </div>
                        </v-div>
                        <v-div
                          v-if="paymentOverview.displayLocation == 'Receiver'"
                        >
                          <div>
                            <b>{{ paymentOverview.paymentTypeHeading }}</b>
                            <br />
                            {{ paymentOverview.paymentType }}
                            <br />
                            <b>{{ paymentOverview.paymentDetailsHeading }}</b>
                            <br />
                            {{ paymentOverview.paymentDetails }}
                          </div>
                        </v-div>
                      </div>
                    </template>
                    <v-card class="sender-modal-mainwrapper">
                      <v-card-title>
                        <span class="new-client-innerwrapper">New Client</span>
                        <i
                          @click="setRecipientClose"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form
                            ref="client_form"
                            @click="onFormSubmitClient"
                            lazy-validation
                          >
                            <v-row>
                              <v-col cols="12">
                                <label class="form-label-outside"
                                  >Name / Company Name</label
                                >
                                <v-text-field
                                  outlined
                                  required
                                  :rules="nameRules"
                                  hide-details="auto"
                                  class="form-control"
                                  v-model="invoiceClientView.clientCompanyName"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >First Name</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="invoiceClientView.clientFirstName"
                                  hide-details="auto"
                                  :rules="globalRules"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Last Name</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="invoiceClientView.clientLastName"
                                  hide-details="auto"
                                  maxlength="200"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="8">
                                <label class="form-label-outside"
                                  >Email Address</label
                                >
                                <v-text-field
                                  outlined
                                  required
                                  :rules="emailRules"
                                  maxlength="200"
                                  class="form-control"
                                  v-model="invoiceClientView.clientEmail"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4" lg="4">
                                <div class="country-selectb">
                                  <label class="form-label-outside"
                                    >Country</label
                                  >
                                  <v-select
                                    v-model="invoiceClientView.clientCountry"
                                    :items="currencies"
                                    outlined
                                    required
                                    :rules="countryRules"
                                    item-text="name"
                                    item-value="id"
                                    hide-details="auto"
                                  ></v-select>
                                </div>
                              </v-col>
                              <v-col cols="12">
                                <div class="border-wrapper-modal"></div>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Address Line 1</label
                                >
                                <v-text-field
                                  outlined
                                  :rules="globalRulesAddress"
                                  class="form-control"
                                  v-model="invoiceClientView.clientAddress1"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Address Line 2</label
                                >
                                <v-text-field
                                  outlined
                                  maxlength="200"
                                  class="form-control"
                                  v-model="invoiceClientView.clientAddress2"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" lg="6">
                                <label class="form-label-outside">Phone</label>
                                <v-text-field
                                  outlined
                                  onselectstart="return false"
                                  onpaste="return false;"
                                  onCopy="return false"
                                  onCut="return false"
                                  onDrag="return false"
                                  onDrop="return false"
                                  autocomplete="off"
                                  class="form-control"
                                  @keypress="onlyNumbers"
                                  :rules="globalRulesPhone"
                                  v-model="invoiceClientView.clientPhone"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" lg="6">
                                <label class="form-label-outside"
                                  >Extra Data</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="invoiceClientView.clientExtraData"
                                  maxlength="200"
                                  hide-details="auto"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-card-actions class="new-client-innerwrapper">
                                  <v-btn @click="setClient"> Submit </v-btn>
                                </v-card-actions>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-div v-if="!isHiddenClientInfo">
                    <div class="input-terms-mainwrapper">
                      <input
                        type="value"
                        class="form-control"
                        v-model="invoiceAllDetails.clientInfo"
                        hide-details="auto"
                      />
                    </div>
                  </v-div>
                </v-col>
              </v-row>
              <v-row class="invoice-details-wrapper">
                <v-col cols="6">
                  <v-row>
                    <v-col cols="4" class="invoice-mainwrapper">
                      <h4>Invoice No:</h4></v-col
                    >
                    <v-col cols="8" class="invoice-contentwrapper">
                      <div class="invoice-type-innerwrapper">
                        <input
                          type="value"
                          class="form-control"
                          v-model="invoiceAllDetails.invoiceNumber"
                          placeholder="Invoice No"
                          maxlength="20"
                          hide-details="auto"
                        />
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" class="invoice-mainwrapper">
                      <h4>Invoice Date:</h4></v-col
                    >
                    <v-col cols="8" class="invoice-contentwrapper">
                      <div class="invoice-type-innerwrapper">
                        <vue-ctk-date-time-picker
                          v-model="invoiceAllDetails.invoiceDate"
                          classname="form-control"
                          :noLabel="true"
                          color="dodgerblue"
                          title="Click to change date"
                          :only-date="true"
                          :no-shortcuts="true"
                          format="DD-MM-YYYY"
                          formatted="ll"
                          :range="false"
                          placeholder=""
                        ></vue-ctk-date-time-picker>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <v-col
                      cols="3"
                      style="padding: 0px"
                      class="due-content-heading"
                    >
                      <h4>Due:</h4></v-col
                    >
                    <v-col cols="9" style="padding: 0px">
                      <div
                        class="invoice-type-innerwrapper due-date-calanderwrapper"
                      >
                        <vue-ctk-date-time-picker
                          v-model="invoiceAllDetails.dueDate"
                          :noLabel="true"
                          classname="form-control"
                          color="dodgerblue"
                          :only-date="true"
                          title="Click to change date"
                          :no-shortcuts="true"
                          format="DD-MM-YYYY"
                          formatted="ll"
                          placeholder=""
                          :range="false"
                        ></vue-ctk-date-time-picker>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-row> </v-row>
                <v-row>
                  <v-col v-if="!isHiddenDescription" cols="12">
                    <v-col cols="12">
                      <div class="input-terms-mainwrapper">
                        <input
                          type="value"
                          class="form-control"
                          v-model="invoiceAllDetails.invoiceDescription"
                          placeholder="Description"
                          hide-details="auto"
                        />
                      </div>
                    </v-col>
                  </v-col>
                  <div v-if="customFieldOne.displayLocation == 'Description'">
                    <div>
                      <b>{{ customFieldOne.fieldName }}</b>
                      <br />
                      {{ customFieldOne.fieldValue }}
                    </div>
                  </div>
                  <div v-if="customFieldTwo.displayLocation == 'Description'">
                    <div>
                      <b>{{ customFieldTwo.fieldName }}</b>
                      <br />
                      {{ customFieldTwo.fieldValue }}
                    </div>
                  </div>
                  <div v-if="customFieldThree.displayLocation == 'Description'">
                    <div>
                      <b>{{ customFieldThree.fieldName }}</b>
                      <br />
                      {{ customFieldThree.fieldValue }}
                    </div>
                  </div>
                  <div v-if="paymentOverview.displayLocation == 'Description'">
                    <div>
                      <b>{{ paymentOverview.paymentTypeHeading }}</b>
                      <br />
                      {{ paymentOverview.paymentType }}
                      <br />
                      <b>{{ paymentOverview.paymentDetailsHeading }}</b>
                      <br />
                      {{ paymentOverview.paymentDetails }}
                    </div>
                  </div>
                </v-row>
              </v-row>
              <v-row class="invoice-line-iteams-wrapper">
                <div class="invoice-box">
                  <v-form
                    ref="tax_slip"
                    @click="onSubmitInvoiceBuild"
                    lazy-validation
                  >
                    <table
                      class="responsive-table"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <thead>
                        <tr class="heading">
                          <td>Item</td>
                          <td>HRS/QTY</td>
                          <td>Rate</td>
                          <td>Tax</td>
                          <td>Tax Type</td>
                          <td>Subtotal</td>
                          <td></td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="item"
                          v-for="(item, index) in items"
                          :key="index"
                        >
                          <td rowspan="4">
                            <v-text-field
                              required
                              class="form-control"
                              outlined
                              :rules="taxRules"
                              hide-details="auto"
                              v-model="items[index].itemName"
                            ></v-text-field>
                          </td>
                          <td>
                            <v-text-field
                              required
                              hide-details="auto"
                              outlined
                              :rules="taxRules"
                              @keypress="onlyNumbers"
                              maxlength="10"
                              class="form-control"
                              type="value"
                              v-model="items[index].quantity"
                            ></v-text-field>
                          </td>
                          <td>
                            <v-text-field
                              hide-details="auto"
                              outlined
                              @keypress="onlyNumbers"
                              maxlength="10"
                              class="form-control"
                              type="value"
                              v-model="items[index].rate"
                            ></v-text-field>
                          </td>
                          <td v-if="items[index].taxType == 'Non Taxable'">
                            <v-text-field
                              hide-details="auto"
                              outlined
                              @keypress="onlyNumbers"
                              maxlength="10"
                              class="form-control"
                              type="value"
                              disabled
                              v-model="items[index].Taxrate"
                            ></v-text-field>
                          </td>
                          <td v-else>
                            <v-text-field
                              hide-details="auto"
                              outlined
                              @keypress="onlyNumbers"
                              maxlength="10"
                              class="form-control"
                              type="value"
                              v-model="items[index].Taxrate"
                            ></v-text-field>
                          </td>
                          <td>
                            <v-radio-group v-model="items[index].taxType" row>
                              <v-radio
                                label="Taxable"
                                value="Taxable"
                              ></v-radio>
                              <v-radio
                                label="Non Taxable"
                                value="Non Taxable"
                              ></v-radio>
                            </v-radio-group>
                          </td>

                          <td>
                            {{ invoiceAllDetails.currencySymbol }}
                            {{ items[index].rate * items[index].quantity }}.00
                          </td>

                          <br />
                          <td class="description-tablebody">
                            <v-textarea
                              outlined
                              class="form-control"
                              rows="1"
                              v-model="items[index].description"
                              placeholder="Description"
                              hide-details="auto"
                            ></v-textarea>
                          </td>

                          <td>
                            <!-- <div class="table-delete-edit-btnwrapper"> -->
                            <i
                              class="fa fa-pencil pencil-iconwrapper"
                              aria-hidden="true"
                              title="Edit Item"
                            ></i
                            ><i
                              class="fa fa-trash trash-iconwrapper"
                              v-on:click="deleteItem(index)"
                              aria-hidden="true"
                              title="Delete Item"
                            ></i>
                            <!-- </div> -->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <v-row>
                      <v-col cols="12">
                        <div
                          class="add-new-iteamswrapper mainwrapper-first-row"
                        >
                          <v-btn @click="addRow"> Add New Invoice Item </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-row>
                    <v-col cols="12" lg="6" md="6"></v-col>
                    <v-col cols="12" lg="6" md="6">
                      <div class="main-heading-invoice">
                        <v-row>
                          <v-col cols="12" class="invoice-summary-wrapper">
                            <h4>Invoice Summary</h4>
                          </v-col>
                          <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            class="subtotal-heading"
                            >Subtotal</v-col
                          >
                          <v-col cols="12" lg="6" md="6" class="subtotal-value">
                            {{ invoiceAllDetails.currencySymbol }}{{ subTotal }}
                          </v-col>
                          <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            class="subtotal-heading"
                            >Tax</v-col
                          >
                          <v-col cols="12" lg="6" md="6" class="subtotal-value">
                            {{ invoiceAllDetails.currencySymbol }}{{ taxTotal }}
                          </v-col>
                          <v-col
                            cols="12"
                            lg="6"
                            md="6"
                            class="subtotal-heading"
                            >Total
                            <v-col
                              cols="12"
                              lg="6"
                              md="6"
                              class="invoice-contentwrapper"
                            >
                              <div class="invoice-type-innerwrapper">
                                <v-dialog
                                  v-model="dollarpickup"
                                  persistent
                                  max-width="250px"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <div v-bind="attrs" v-on="on">
                                      <div>
                                        <div>
                                          {{ invoiceAllDetails.currencySymbol }}
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                                  <v-card
                                    class="invoice-modalwrapper delete-invoicemodal"
                                  >
                                    <v-card-title>
                                      <span class="new-client-innerwrapper"
                                        >Select Currency</span
                                      >
                                      <i
                                        text
                                        @click="dollarpickup = false"
                                        class="fa fa-times sender-modalwrapper-closebtn"
                                        aria-hidden="true"
                                      ></i>
                                    </v-card-title>
                                    <v-card-text>
                                      <v-container>
                                        <v-row>
                                          <v-col cols="12">
                                            <div class="country-selectb">
                                              <v-select
                                                v-model="
                                                  invoiceAllDetails.currencySymbol
                                                "
                                                :items="currencies"
                                                outlined
                                                required
                                                :item-text="
                                                  (item) =>
                                                    item.iso_code +
                                                    ' - ' +
                                                    item.name
                                                "
                                                item-value="item.iso_code"
                                                hide-details="auto"
                                              ></v-select>
                                            </div>
                                          </v-col>
                                        </v-row>

                                        <div
                                          class="new-client-innerwrapper set-invoice-modal"
                                        >
                                          <v-btn @click="dollarpickup = false">
                                            Submit
                                          </v-btn>
                                        </div>
                                      </v-container>
                                    </v-card-text>
                                  </v-card>
                                </v-dialog>
                              </div>
                            </v-col>
                          </v-col>
                          <v-col cols="12" lg="6" md="6" class="subtotal-value">
                            {{ invoiceAllDetails.currencySymbol
                            }}{{ grandTotal }}
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-row>
              <v-row>
                <div v-if="customFieldOne.displayLocation == 'Terms'">
                  <div>
                    <b>{{ customFieldOne.fieldName }}</b>
                    <br />
                    {{ customFieldOne.fieldValue }}
                  </div>
                </div>
                <div v-if="customFieldTwo.displayLocation == 'Terms'">
                  <div>
                    <b>{{ customFieldTwo.fieldName }}</b>
                    <br />
                    {{ customFieldTwo.fieldValue }}
                  </div>
                </div>
                <div v-if="customFieldThree.displayLocation == 'Terms'">
                  <div>
                    <b>{{ customFieldThree.fieldName }}</b>
                    <br />
                    {{ customFieldThree.fieldValue }}
                  </div>
                </div>
                <div v-if="paymentOverview.displayLocation == 'Terms'">
                  <div>
                    <b>{{ paymentOverview.paymentTypeHeading }}</b>
                    <br />
                    {{ paymentOverview.paymentType }}
                    <br />
                    <b>{{ paymentOverview.paymentDetailsHeading }}</b>
                    <br />
                    {{ paymentOverview.paymentDetails }}
                  </div>
                </div>
                <v-col cols="12">
                  <div class="input-terms-mainwrapper">
                    <input
                      type="value"
                      class="form-control"
                      v-model="invoiceAllDetails.invoiceTerms"
                      placeholder="Invoice Terms"
                      hide-details="auto"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="4">
            <div class="invoice-mainbodywrapper">
              <div class="invoice-setting-innerwrapper">
                <h4>
                  Invoice Settings <span class="ti-close close-settings"></span>
                </h4>
              </div>
              <v-col cols="12">
                <div class="currency-symbol-mainwrapper country-selectb">
                  <label class="form-label-outside">Currency Symbol</label>
                  <v-select
                    v-model="invoiceAllDetails.currencySymbol"
                    :items="currencies"
                    outlined
                    required
                    item-text="name"
                    item-value="id"
                    hide-details="auto"
                  ></v-select>
                </div>
              </v-col>
              <hr />
              <div class="addpayment-line-wrapper">
                <ul>
                  <v-dialog
                    v-model="addPaymentDetails"
                    persistent
                    max-width="350px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <li v-bind="attrs" v-on="on">
                        <i class="fas fa-dollar-sign"></i>Add payment details
                      </li>
                    </template>
                    <v-card class="invoice-modalwrapper delete-invoicemodal">
                      <v-card-title style="height: 50px">
                        <i
                          text
                          @click="addPaymentDetails = false"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form @click="onSubmitPayment">
                            <v-row>
                              <v-col cols="12" lg="12">
                                <div class="registraction-inpu-modal">
                                  <i class="fa fa-pencil"></i>
                                  <input
                                    type="value"
                                    class="form-control"
                                    v-model="paymentOverview.paymentTypeHeading"
                                    placeholder="Payment Type"
                                    maxlength="20"
                                    hide-details="auto"
                                  />
                                </div>

                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="paymentOverview.paymentType"
                                  hide-details="auto"
                                  maxlength="20"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <div class="registraction-inpu-modal">
                                  <i class="fa fa-pencil"></i>
                                  <input
                                    type="value"
                                    class="form-control"
                                    v-model="
                                      paymentOverview.paymentDetailsHeading
                                    "
                                    placeholder="Payment Details"
                                    maxlength="20"
                                    hide-details="auto"
                                  />
                                </div>
                                <v-textarea
                                  outlined
                                  rows="2"
                                  class="form-control"
                                  v-model="paymentOverview.paymentDetails"
                                  hide-details="auto"
                                  maxlength="200"
                                ></v-textarea>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Display Location</label
                                >
                                <v-select
                                  :items="displayLocation"
                                  v-model="paymentOverview.displayLocation"
                                  outlined
                                  item-text="name"
                                  item-value="id"
                                  hide-details="auto"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <div
                            class="new-client-innerwrapper set-invoice-modal"
                          >
                            <v-btn @click="setPaymentDetails"> Submit </v-btn>
                          </div>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>

                  <v-form @click="onSubmitAllDetails">
                    <li @click="isHiddenCompanyInfo = !isHiddenCompanyInfo">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                      Add company info
                    </li>
                    <li @click="isHiddenDescription = !isHiddenDescription">
                      <i class="fas fa-edit"></i>Add description
                    </li>
                    <li @click="isHiddenClientInfo = !isHiddenClientInfo">
                      <i class="fal fa-user"></i>Add client info
                    </li>

                    <li @click="isHiddenPaymentInfo = !isHiddenPaymentInfo">
                      <i class="fas fa-dollar-sign"></i>Enter Payment
                    </li>
                    <div v-if="!isHiddenPaymentInfo">
                      <label class="form-label-outside">Payment</label>
                      <v-text-field
                        outlined
                        color="black"
                        placeholder="Enter payment amount"
                        class="form-control"
                        v-model="invoiceAllDetails.invoicePayment"
                        @keypress="onlyNumbers"
                        maxlength="16"
                        type="value"
                        hide-details="auto"
                      ></v-text-field>
                    </div>
                  </v-form>
                </ul>
              </div>
              <hr />
              <div class="addpayment-line-wrapper">
                <ul>
                  <v-dialog v-model="getlink" width="470">
                    <template v-slot:activator="{ on, attrs }">
                      <li v-bind="attrs" v-on="on">
                        <i class="fa fa-map-marker"></i>Get Link
                      </li>
                    </template>
                    <v-card class="getlink-modalwrapper">
                      <v-card-text>
                        <p>
                          The link will be available once the invoice is saved
                          for the first time
                        </p>
                        <v-btn color="primary" text @click="getlink = false">
                          Ok
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="copyinvoice" width="420">
                    <template v-slot:activator="{ on, attrs }">
                      <li v-bind="attrs" v-on="on">
                        <i class="fas fa-copy"></i>Copy Invoice
                      </li>
                    </template>
                    <v-card class="getlink-modalwrapper">
                      <v-card-text>
                        <p>
                          Please save the invoice before attempting to make a
                          copy
                        </p>
                        <v-btn
                          color="primary"
                          text
                          @click="copyinvoice = false"
                        >
                          Ok
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="deleteinvoice" width="650">
                    <template v-slot:activator="{ on, attrs }">
                      <li
                        v-bind="attrs"
                        v-on="on"
                        class="delete-icon-innerwrapepr"
                      >
                        <i class="fas fa-ban"></i>Delete
                      </li>
                    </template>
                    <v-card class="delete-invoicemodal">
                      <v-card-title>
                        <span class="new-client-innerwrapper"
                          >Delete Invoice</span
                        >
                        <i
                          text
                          @click="deleteinvoice = false"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <p>
                          Are you sure you want to delete this invoice? This can
                          not be undone.
                        </p>
                        <div class="delete-invoice-modalbtnwrapper">
                          <v-btn
                            @click="deleteinvoiceField"
                            class="delete-btnwrapper"
                          >
                            Delete Invoice
                          </v-btn>
                          <v-btn
                            @click="deleteinvoice = false"
                            class="cancel-btnwrapper"
                          >
                            Cancel
                          </v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="customField1" persistent max-width="350px">
                    <template v-slot:activator="{ on, attrs }">
                      <li v-bind="attrs" v-on="on">
                        <i class="fas fa-copy"></i>Custom Field 1
                      </li>
                    </template>
                    <v-card
                      class="invoice-modalwrapper delete-invoicemodal custom-modalinnerwrapper"
                    >
                      <v-card-title>
                        <i
                          text
                          @click="customField1 = false"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form
                            ref="submit_custom_field"
                            @click="onSubmitField1"
                            lazy-validation
                          >
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Field Name</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="customFieldOne.fieldName"
                                  hide-details="auto"
                                  :rules="globalRules"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside">Value</label>
                                <v-text-field
                                  outlined
                                  required
                                  class="form-control"
                                  v-model="customFieldOne.fieldValue"
                                  hide-details="auto"
                                  :rules="customFieldRules"
                                >
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Display Location</label
                                >
                                <v-select
                                  :items="displayLocation"
                                  v-model="customFieldOne.displayLocation"
                                  outlined
                                  item-text="name"
                                  item-value="id"
                                  hide-details="auto"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <div
                            class="new-client-innerwrapper set-invoice-modal"
                          >
                            <v-btn @click="setCustomField1"> Submit </v-btn>
                          </div>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="customField2" persistent max-width="350px">
                    <template v-slot:activator="{ on, attrs }">
                      <li v-bind="attrs" v-on="on">
                        <i class="fas fa-copy"></i>Custom Field 2
                      </li>
                    </template>
                    <v-card
                      class="invoice-modalwrapper delete-invoicemodal custom-modalinnerwrapper"
                    >
                      <v-card-title>
                        <i
                          text
                          @click="customField2 = false"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form
                            ref="submit_custom_field2"
                            @click="onSubmitField2"
                            lazy-validation
                          >
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Field Name</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="customFieldTwo.fieldName"
                                  hide-details="auto"
                                  :rules="globalRules"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside">Value</label>
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="customFieldTwo.fieldValue"
                                  hide-details="auto"
                                  required
                                  :rules="customFieldRules"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Display Location</label
                                >
                                <v-select
                                  :items="displayLocation"
                                  v-model="customFieldTwo.displayLocation"
                                  outlined
                                  item-text="name"
                                  item-value="id"
                                  hide-details="auto"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <div
                            class="new-client-innerwrapper set-invoice-modal"
                          >
                            <v-btn @click="setCustomField2"> Submit </v-btn>
                          </div>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="customField3" persistent max-width="350px">
                    <template v-slot:activator="{ on, attrs }">
                      <li v-bind="attrs" v-on="on">
                        <i class="fas fa-copy"></i>Custom Field 3
                      </li>
                    </template>
                    <v-card
                      class="invoice-modalwrapper delete-invoicemodal custom-modalinnerwrapper"
                    >
                      <v-card-title>
                        <i
                          text
                          @click="customField3 = false"
                          class="fa fa-times sender-modalwrapper-closebtn"
                          aria-hidden="true"
                        ></i>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form ref="submit_custom_field3" lazy-validation>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Field Name</label
                                >
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="customFieldThree.fieldName"
                                  hide-details="auto"
                                  :rules="globalRules"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside">Value</label>
                                <v-text-field
                                  outlined
                                  class="form-control"
                                  v-model="customFieldThree.fieldValue"
                                  hide-details="auto"
                                  required
                                  :rules="customFieldRules"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" lg="12">
                                <label class="form-label-outside"
                                  >Display Location</label
                                >
                                <v-select
                                  :items="displayLocation"
                                  v-model="customFieldThree.displayLocation"
                                  outlined
                                  item-text="name"
                                  item-value="id"
                                  hide-details="auto"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <div
                            class="new-client-innerwrapper set-invoice-modal"
                          >
                            <v-btn @click="setCustomField3"> Submit </v-btn>
                          </div>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>
<script
  src="https://apis.google.com/js/platform.js?onload=renderButton"
  async
  defer
></script>
<script>
import currencyJson from "~/data/currencies.json";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import Toaster from "~/services/sweetToaster.js";

export default {
  layout: "adminlayout",
  currencyJson: currencyJson,
  name: "invoiceGenerate",
  components: {
    VueCtkDateTimePicker,
  },
  data: () => ({
    disabled: 0,
    isSpinner: true,
    autoUpdate: true,
    // isUpdating: false,
    input: [],
    dialog: false,
    show: false,
    caption: "",
    img1: "",
    imageData: null,
    invoiceDate: null,
    dueDate: null,
    countryCurrencySymbol: {
      currencies: [],
    },
    currencies: [],
    dollarpickup: false,
    isHiddenCompanyInfo: true,
    isHiddenClientInfo: true,
    isHiddenDescription: true,
    isHiddenPaymentInfo: true,
    getlink: false,
    addPaymentDetails: false,
    customField1: false,
    customField2: false,
    customField3: false,
    copyinvoice: false,
    ClientUsers: [],
    PaymentDetailsOverview: [],
    InvoiceDetailsOverview: [],
    InvoiceTypeOverview: [],
    Users: [],
    nameRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    taxRules: [
      (v) => !!v || "",
      (v) => v.length <= 20 || "Name must be less than 20 characters",
    ],
    globalRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    globalRulesAddress: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) =>
        (v && v.length <= 200) || "Address must be less than 200 characters",
    ],

    globalRulesPhone: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) =>
        (v && v.length <= 16) || "Phone Number must be less than 16 characters",
    ],
    websiteRules: [
      (v) =>
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm.test(
          v
        ) || "URL must be valid",
    ],
    firstNameRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    lastNameRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    emailRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    countryRules: [(v) => !!v || "Please complete this mandatory field."],
    customFieldRules: [
      (v) => !!v || "Please complete this mandatory field.",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    invoiceSenderView: {
      taxRegistrationNumber: "Tax Registration Number",
    },

    paymentOverview: {
      paymentTypeHeading: "",
      paymentType: "",
      paymentDetailsHeading: "",
      paymentDetails: "",
      displayLocation: "Description",
    },
    customFieldOne: {
      fieldName: "",
      fieldValue: "",
      displayLocation: "Sender",
    },
    customFieldTwo: {
      fieldName: "",
      fieldValue: "",
      displayLocation: "Sender",
    },
    customFieldThree: {
      fieldName: "",
      fieldValue: "",
      displayLocation: "Sender",
    },
    InvoiceTypeView: {
      invoiceType: "Invoice",
    },
    invoiceAllDetails: {
      invoicePayment: "",
      companyInfo: "",
      clientInfo: "",
      invoiceDescription: "",
      invoiceNumber: "001",
      invoiceTerms: "",
      invoiceDate: new Date(),
      dueDate: new Date(),
      currencySymbol: "United States Dollar",
    },
    invoiceLogo: {
      logoImage: "",
    },
    invoiceType: [
      {
        id: "Invoice",
        name: "Invoice",
      },
      {
        id: "Tax Invoice",
        name: "Tax Invoice",
      },
      {
        id: "Commercial Invoice",
        name: "Commercial Invoice",
      },
      {
        id: "Proforma Invoice",
        name: "Proforma Invoice",
      },
      {
        id: "Bill",
        name: "Bill",
      },
      {
        id: "Receipt",
        name: "Receipt",
      },
      {
        id: "Purchase Order",
        name: "Purchase Order",
      },
      {
        id: "Quote",
        name: "Quote",
      },
      {
        id: "Estimate",
        name: "Estimate",
      },
    ],
    displayLocation: [
      {
        id: "Sender",
        name: "Sender",
      },
      {
        id: "Receiver",
        name: "Receiver",
      },
      {
        id: "Description",
        name: "Description",
      },
      {
        id: "Terms",
        name: "Terms",
      },
    ],
    newItemsTaxRate: [
      {
        value: "0",
        name: "Non Taxable",
      },
      {
        value: "1",
        name: "+New Tax Rate",
      },
    ],
    invoiceClientView: {},
    items: [
      {
        itemName: "",
        quantity: "",
        Taxrate: "",
        taxType: "Non Taxable",
        rate: "",
        description: "",
      },
    ],
    item: [],
    dialogSender: false,
    deleteinvoice: false,
    fadeone: false,
    dialogRecipient: false,
    newTaxRate: false,
    InvoiceDialog: false,
    invoice: ["Invoice"],
    defaultTemplete: ["Blank Template"],
    templates: [
      ["Blank Template"],
      ["Web-Developer Template"],
      ["Marketing Template"],
      ["Travel Agency Template"],
      ["Consulting Agency Template"],
      ["Designer & Creative Agency Template"],
      ["Training, Tutoring & Education Organization Template"],
      ["Copy Writing & Content Template"],
      ["IT Service Template"],
      ["Video production Template"],
      ["Audio production Template"],
      ["Analyst Template"],
      ["Virtual Assistance Template"],
      ["Data Specialist Template"],
      ["Photography & Filming Template"],
      ["Developer Template"],
      ["UK VAT"],
      ["UK No VAT"],
      ["Japan CT"],
      ["Japan No CT"],
      ["Australia GST"],
      ["Australia No GST"],
      ["New Zealand GST"],
      ["New Zealand No GST"],
      ["Canada GST"],
      ["Canada No GST"],
      ["Philippines VAT"],
      ["Philippines No VAT"],
      ["India GST"],
      ["India No GST"],
      ["Germany VAT"],
      ["Germany No VAT"],
      ["Ireland VAT"],
      ["Ireland No VAT"],
      ["Pakistan ST"],
      ["Pakistan No ST"],
    ],
  }),
  mounted() {
    this.currencies = currencyJson;
    //console.log("currencies", this.currencies);
    // console.log("iso_code", this.currencies[0].iso_code);
  },
};
</script>

<style scoped>
.background_color {
  width: 100%;
  background: #f6f5f9;
}
.layout.login-page-main-wrapper {
  justify-content: center;
  background-color: #f8f8f8;
}
.login-form-body-wrapper {
  padding: 50px;
}

button.account-btn-wrapper span.icon.mdi.mdi-google {
  color: #fff;
  font-size: 15px;
}
button.account-btn-wrapper a.google-word {
  color: #fff !important;
  font-size: 15px;
  text-transform: capitalize;
  padding-left: 8px;
}
button.account-btn-wrapper:hover {
  opacity: 0.8;
}

.bank-template-mainwrapper {
  padding: 30px;
  order: 1px solid rgba(0, 0, 0, 0.07) !important;
  background: #fff;
  box-shadow: 2px 2px 0 rgb(0 0 0 / 7%), 1px 1px 3px rgb(0 0 0 / 6%) !important;
  border-radius: 4px;
}
.bank-template-mainwrapper label {
  color: #888;
  font-size: 14px;
  margin-bottom: 1rem;
}

.sender-contentbodywrapper {
  position: absolute;
  top: 32px;
}
.sender-contentbodywrapper span {
  position: absolute;
  font-size: 25px;
}
.sender-contentbodywrapper h5 {
  font-size: 15px;
  font-weight: 400;
  padding-left: 40px;
}
.sender-contentbodywrapper p {
  font-size: 12px;
  padding-left: 40px;
  color: #bbb;
  font-weight: 300;
  letter-spacing: 0.5px;
}
.recipientbackground-wrapper {
  position: absolute;
  top: 32px;
}
.recipientbackground-wrapper span {
  position: absolute;
  font-size: 25px;
}
.recipientbackground-wrapper h5 {
  font-size: 15px;
  font-weight: 400;
  padding-left: 40px;
}
.recipientbackground-wrapper p {
  font-size: 12px;
  padding-left: 40px;
  color: #bbb;
  font-weight: 300;
  letter-spacing: 0.5px;
}
.due-date-calanderwrapper {
  height: 50px !important;
  width: 123px;
  display: flex;
  justify-content: center;
  padding: 0px;
  margin-left: 2px;
  align-items: center;
}
.due-date-calanderwrapper span {
  font-size: 14px;
}
.due-content-heading {
  display: flex;
  justify-content: end;
  align-items: center;
}
.due-content-heading h4 {
  font-size: 15px;
}
.invoice-mainwrapper {
  padding: 2px 0px;
}
.invoice-contentwrapper {
  padding: 2px 0px;
}
.invoice-contentwrapper .invoice-type-innerwrapper {
  padding: 0px;
  width: 124px;
  height: 20px;
  display: flex;
  align-items: center;
}
.invoice-contentwrapper span {
  font-size: 12px;
}
.invoice-mainwrapper h4 {
  font-size: 14px;
  text-align: left;
}
.invoice-setting-innerwrapper h4 {
  padding: 0 0 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  margin-bottom: 40px;
  text-align: left;
  color: #000;
}
.currency-symbol-mainwrapper {
  text-align: left;
  margin-bottom: 10px;
}
.currency-symbol-mainwrapper label {
  font-size: 15px;
}
.addpayment-line-wrapper {
  text-align: left;
}
.addpayment-line-wrapper ul {
  list-style-type: none;
  padding-left: 0px;
}
.addpayment-line-wrapper ul li {
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
}
.addpayment-line-wrapper ul li:hover {
  background-color: #fff;
  border-radius: 4px;
}
.addpayment-line-wrapper ul li.delete-icon-innerwrapepr:hover {
  background-color: #ea736a !important;
  color: #fff !important;
  border-radius: 4px;
}
.addpayment-line-wrapper ul li i {
  padding-right: 10px;
  font-weight: 400;
}
.invoice-type-innerwrapper:hover {
  outline: 2px solid #257eff;
}
.preview:hover {
  outline: 2px solid #257eff;
}
.invoice-mainbodywrapper hr {
  color: #999 !important;
  margin: 5px 0px 23px;
  border-top: 1px solid #eee;
}
button.save-btn {
  background: #dedce6 !important;
  color: #000 !important;
  cursor: pointer;
  padding: 20px 30px !important;
  box-shadow: none !important;
}
button.save-btn:hover {
  background: #2cadf6 !important;
  color: #fff !important;
}
button.downlaod-btn {
  background: #552cf6 !important;
  color: #fff !important;
  /* padding: 20px 30px !important; */
}
button.downlaod-btn:hover {
  background: #285cff !important;
}
.sender-modal-mainwrapper label {
  display: flex;
  font-size: 13px;
  color: #7d8592;
}
i.fa.fa-times.sender-modalwrapper-closebtn {
  background-color: #fafafa !important;
  box-shadow: none !important;
  position: absolute;
  right: 10px;
  top: 5px;
  opacity: 0.4;
}
i.fa.fa-times.sender-modalwrapper-closebtn:hover {
  opacity: 1;
}
i.fa.fa-times.sender-modalwrapper-closebtn {
  font-size: 25px !important;
  font-weight: 300;
}
i.fa.fa-times.sender-modalwrapper-closebtn:hover {
  background-color: #fafafa !important;
}
.sender-modal-mainwrapper .v-card__title {
  border-bottom: 1px solid #e1e6ef;
  background: #fafafa;
  height: 50px;
}
button.sender-modalwrapper-closebtn:hover::before {
  opacity: 0 !important;
}
.sender-btnwrapper button {
  width: 100%;
  background: #285cff !important;
  border: none;
  color: #fff !important;
  text-transform: capitalize;
  font-weight: 400 !important;
  font-size: 15px;
}
.border-wrapper-modal::before {
  content: "";
  width: 88%;
  height: 1px;
  background-color: #eee;
  position: absolute;
  left: 34px;
}
span.new-client-innerwrapper {
  font-size: 17px;
  margin-top: -6px;
}
.new-client-innerwrapper {
  justify-content: right;
}
.new-client-innerwrapper button {
  background: #285cff !important;
  color: #fff !important;
  border: none;
  border-radius: 0px !important;
}
.new-client-innerwrapper button:hover {
  border: 1px solid #458ccf;
  box-shadow: inset 0 0 0 1px #458ccf;
  background: rgba(69, 140, 207, 0.05) !important;
  color: #458ccf !important;
}
label.form-label-outside.taxt-registration-number::after {
  content: "";
  position: absolute;
  border-bottom: 1px dashed #000;
  width: 150px;
  margin-top: 18px;
  margin-left: 1px;
}
label.form-label-outside.taxt-registration-number i {
  font-size: 10px !important;
  padding-top: 8px;
  margin-right: 8px;
  color: #000 !important;
}
.sender-modal-mainwrapper .v-card__text {
  background-color: #fefefe;
}
.getlink-modalwrapper .v-card__text {
  padding: 25px 8px 10px !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.getlink-modalwrapper .v-card__text button {
  width: 80%;
  box-shadow: none !important;
  background: #285cff !important;
  color: #fff !important;
}
.drap-icon-inputfield {
  position: absolute;
  top: -8px;
  width: 27%;
}
.invoice-type-innerwrapper.mainwrapper-first-row p {
  font-size: 14px !important;
  margin-bottom: 0px !important;
  color: #888;
  width: 75px;
}
.invoice-contentwrapper input {
  width: 100px;
  font-size: 13px !important;
}
.invoice-contentwrapper input:focus-visible {
  border: none !important;
  outline: none;
}

/********************************table css */
.invoice-box {
  padding: 9px;
  font-size: 16px;
  color: #555;
}
.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}
.invoice-box table td {
  padding: 5px;
}
.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}
.invoice-box table tr.heading {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: block;
}
.invoice-box table tr.details td {
  padding-bottom: 20px;
}
.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
  font-size: 13px;
}
.invoice-box table tr.item input {
  padding-left: 5px;
}
.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/* RTL */
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}
/* image css here  */
.image-input {
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #285cff;
  color: #fff !important;
  border: none;
}
.file-input {
  display: none;
}
.remove-logo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  outline: 2px solid #46baf9;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
