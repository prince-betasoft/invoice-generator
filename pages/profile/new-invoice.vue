<template>
  <div>
    <v-container>
      <client-only>
        <v-app class="background_color">
          <v-container style="width: 1000px">
            <v-row>
              <v-col cols="4">
                <div class="template-selectbox-wrapper">
                  <v-select
                    :items="templates"
                    class="form-control"
                    v-model="invoiceAllDetails.defaultTemplete"
                    outlined
                    item-text="name"
                    item-value="id"
                    hide-details="auto"
                  ></v-select>
                </div>
              </v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <div class="save-download-bankbody-wrapper">
                  <v-btn
                    class="save-btn"
                    text
                    @click="saveInvoiceData"
                    :loading="loading"
                  >
                    Save
                  </v-btn>
                  <v-btn class="downlaod-btn">Download</v-btn>
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
                                  @click="select_file"
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
                            <div
                              v-if="isSpinner"
                              class="pt-12 pb-12 text-center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="primary"
                              ></v-progress-circular>
                            </div>
                            <v-img
                              class="preview"
                              style="width: 100%; object-fit: cover"
                              height="200px"
                              v-if="invoiceAllDetails.invoice_logo"
                              :src="invoiceAllDetails.invoice_logo"
                            ></v-img>
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
                        <div v-if="invoice_type_details">
                          <v-btn text @click="addInvoiceDetails">
                            {{ invoice_type_details.invoiceType }}</v-btn
                          >
                        </div>
                        <div v-else>
                          <v-btn text @click="addInvoiceDetails">
                            Invoice</v-btn
                          >
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="invoice-type-innerwrapper-one">
                        <v-btn
                          class="form-label-outside"
                          style="text-transform: uppercase; font-size: 11px"
                          text
                          @click="openAddSenderModal"
                          >From
                        </v-btn>
                        <div v-if="sender_details">
                          <div>
                            <b>{{ sender_details.senderCompanyName }}</b>
                          </div>
                          <div>
                            {{ sender_details.senderFirstName }}
                            {{ sender_details.senderLastName }}
                          </div>
                          <div>
                            {{ sender_details.senderAddress1 }}
                          </div>
                          <div>
                            {{ sender_details.senderAddress2 }}
                          </div>
                          <div>
                            {{ sender_details.senderCountry }}
                          </div>
                          <div>
                            {{ sender_details.senderEmail }}
                          </div>
                          <div>
                            {{ sender_details.senderPhone }}
                          </div>
                          <div>
                            {{ sender_details.senderWebsite }}
                          </div>
                          <div>
                            {{ sender_details.taxRegistrationNumber }}
                          </div>
                          <div>
                            {{ sender_details.senderTaxNumber }}
                          </div>
                        </div>
                        <div v-else>
                          <div class="sender-contentbodywrapper">
                            <span><i class="fas fa-user"></i></span>
                            <h5>Sender Name</h5>
                            <p>Sender Contact Details</p>
                          </div>
                        </div>
                        <div v-if="!isHiddenCompanyInfo">
                          <br />
                          <div class="input-terms-mainwrapper">
                            <input
                              type="value"
                              class="form-control"
                              v-model="invoiceAllDetails.companyInfo"
                              hide-details="auto"
                            />
                          </div>
                        </div>
                        <div v-if="custom_field_one_details">
                          <div
                            v-if="
                              custom_field_one_details.displayLocation ==
                              'Sender'
                            "
                          >
                            <div>
                              <b>{{ custom_field_one_details.fieldName }}</b>
                              <br />
                              {{ custom_field_one_details.fieldValue }}
                            </div>
                          </div>
                        </div>
                        <div v-if="custom_field_two_details">
                          <div
                            v-if="
                              custom_field_two_details.displayLocation ==
                              'Sender'
                            "
                          >
                            <div>
                              <b>{{ custom_field_two_details.fieldName }}</b>
                              <br />
                              {{ custom_field_two_details.fieldValue }}
                            </div>
                          </div>
                        </div>
                        <div v-if="custom_field_three_details">
                          <div
                            v-if="
                              custom_field_three_details.displayLocation ==
                              'Sender'
                            "
                          >
                            <div>
                              <b>{{ custom_field_three_details.fieldName }}</b>
                              <br />
                              {{ custom_field_three_details.fieldValue }}
                            </div>
                          </div>
                        </div>
                        <div v-if="payment_details">
                          <div
                            v-if="payment_details.displayLocation == 'Sender'"
                          >
                            <div>
                              <b>{{ payment_details.paymentTypeHeading }}</b>
                              <br />
                              {{ payment_details.paymentType }}
                              <br />
                              <b>{{ payment_details.paymentDetailsHeading }}</b>
                              <br />
                              {{ payment_details.paymentDetails }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="invoice-type-innerwrapper-one">
                        <v-btn
                          class="form-label-outside"
                          style="text-transform: uppercase; font-size: 11px"
                          text
                          @click="openAddClientModal"
                          >To
                        </v-btn>
                        <div v-if="client_details">
                          <div>
                            <b>{{ client_details.clientCompanyName }}</b>
                          </div>
                          <div>
                            {{ client_details.clientFirstName }}
                          </div>
                          <div>
                            {{ client_details.clientLastName }}
                          </div>
                          <div>
                            {{ client_details.clientEmail }}
                          </div>
                          <div>
                            {{ client_details.clientCountry }}
                          </div>
                          <div>
                            {{ client_details.clientAddress1 }}
                          </div>
                          <div>
                            {{ client_details.clientAddress2 }}
                          </div>
                          <div>
                            {{ client_details.clientPhone }}
                          </div>
                          <div>
                            {{ client_details.clientExtraData }}
                          </div>
                        </div>
                        <div v-else>
                          <div class="recipientbackground-wrapper">
                            <span><i class="fas fa-user"></i></span>
                            <h5>Recipient Name</h5>
                            <p>Recipient Contact Details</p>
                          </div>
                        </div>
                        <div v-if="!isHiddenClientInfo">
                          <br />
                          <div class="input-terms-mainwrapper">
                            <input
                              type="value"
                              class="form-control"
                              v-model="invoiceAllDetails.clientInfo"
                              hide-details="auto"
                            />
                          </div>
                        </div>
                        <div v-if="custom_field_one_details">
                          <div
                            v-if="
                              custom_field_one_details.displayLocation ==
                              'Receiver'
                            "
                          >
                            <div>
                              <b>{{ custom_field_one_details.fieldName }}</b>
                              <br />
                              {{ custom_field_one_details.fieldValue }}
                            </div>
                          </div>
                        </div>
                        <div v-if="custom_field_two_details">
                          <div
                            v-if="
                              custom_field_two_details.displayLocation ==
                              'Receiver'
                            "
                          >
                            <div>
                              <b>{{ custom_field_two_details.fieldName }}</b>
                              <br />
                              {{ custom_field_two_details.fieldValue }}
                            </div>
                          </div>
                        </div>
                        <div v-if="custom_field_three_details">
                          <div
                            v-if="
                              custom_field_three_details.displayLocation ==
                              'Receiver'
                            "
                          >
                            <div>
                              <b>{{ custom_field_three_details.fieldName }}</b>
                              <br />
                              {{ custom_field_three_details.fieldValue }}
                            </div>
                          </div>
                        </div>
                        <div v-if="payment_details">
                          <div
                            v-if="payment_details.displayLocation == 'Receiver'"
                          >
                            <div>
                              <br />
                              <b>{{ payment_details.paymentTypeHeading }}</b>
                              <br />
                              {{ payment_details.paymentType }}
                              <br />
                              <b>{{ payment_details.paymentDetailsHeading }}</b>
                              <br />
                              {{ payment_details.paymentDetails }}
                            </div>
                          </div>
                        </div>
                      </div>
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
                              @keypress="onlyNumbers"
                              maxlength="20"
                              hide-details="auto"
                              onselectstart="return false"
                              onpaste="return false;"
                              onCopy="return false"
                              onCut="return false"
                              onDrag="return false"
                              onDrop="return false"
                              autocomplete="off"
                              dense
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
                            <client-only>
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
                            </client-only>
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
                            <client-only>
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
                            </client-only>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row></v-row>
                  <div v-if="custom_field_one_details">
                    <div
                      v-if="
                        custom_field_one_details.displayLocation ==
                        'Description'
                      "
                    >
                      <div>
                        <b>{{ custom_field_one_details.fieldName }}</b>
                        <br />
                        {{ custom_field_one_details.fieldValue }}
                      </div>
                    </div>
                  </div>
                  <div v-if="custom_field_two_details">
                    <div
                      v-if="
                        custom_field_two_details.displayLocation ==
                        'Description'
                      "
                    >
                      <div>
                        <b>{{ custom_field_two_details.fieldName }}</b>
                        <br />
                        {{ custom_field_two_details.fieldValue }}
                      </div>
                    </div>
                  </div>
                  <div v-if="custom_field_three_details">
                    <div
                      v-if="
                        custom_field_three_details.displayLocation ==
                        'Description'
                      "
                    >
                      <div>
                        <b>{{ custom_field_three_details.fieldName }}</b>
                        <br />
                        {{ custom_field_three_details.fieldValue }}
                      </div>
                    </div>
                  </div>
                  <div v-if="payment_details">
                    <div
                      v-if="payment_details.displayLocation == 'Description'"
                    >
                      <div>
                        <b>{{ payment_details.paymentTypeHeading }}</b>
                        <br />
                        {{ payment_details.paymentType }}
                        <br />
                        <b>{{ payment_details.paymentDetailsHeading }}</b>
                        <br />
                        {{ payment_details.paymentDetails }}
                      </div>
                    </div>
                  </div>
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
                                <v-radio-group
                                  v-model="items[index].taxType"
                                  row
                                >
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
                                {{
                                  items[index].rate * items[index].quantity
                                }}.00
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
                                <v-icon title="Edit Item"
                                  >mdi-pencil-outline
                                </v-icon>
                                <v-icon
                                  title="Delete Item"
                                  aria-hidden="true"
                                  v-on:click="deleteItem(index)"
                                  >mdi-trash-can-outline
                                </v-icon>
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
                              <v-btn @click="addRow">
                                Add New Invoice Item
                              </v-btn>
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
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-value"
                              >
                                {{ invoiceAllDetails.currencySymbol
                                }}{{ subTotal }}
                              </v-col>
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-heading"
                                >Tax</v-col
                              >
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-value"
                              >
                                {{ invoiceAllDetails.currencySymbol
                                }}{{ taxTotal }}
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
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <div v-bind="attrs" v-on="on">
                                          <div>
                                            <div>
                                              {{
                                                invoiceAllDetails.currencySymbol
                                              }}
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
                                              <v-btn
                                                @click="dollarpickup = false"
                                              >
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
                              <v-col
                                cols="12"
                                lg="6"
                                md="6"
                                class="subtotal-value"
                              >
                                {{ invoiceAllDetails.currencySymbol
                                }}{{ grandTotal }}
                              </v-col>
                            </v-row>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-row>
                  <div v-if="custom_field_one_details">
                    <div
                      v-if="custom_field_one_details.displayLocation == 'Terms'"
                    >
                      <div>
                        <b>{{ custom_field_one_details.fieldName }}</b>
                        <br />
                        {{ custom_field_one_details.fieldValue }}
                      </div>
                    </div>
                  </div>
                  <div v-if="custom_field_two_details">
                    <div
                      v-if="custom_field_two_details.displayLocation == 'Terms'"
                    >
                      <div>
                        <b>{{ custom_field_two_details.fieldName }}</b>
                        <br />
                        {{ custom_field_two_details.fieldValue }}
                      </div>
                    </div>
                  </div>
                  <div v-if="custom_field_three_details">
                    <div
                      v-if="
                        custom_field_three_details.displayLocation == 'Terms'
                      "
                    >
                      <div>
                        <b>{{ custom_field_three_details.fieldName }}</b>
                        <br />
                        {{ custom_field_three_details.fieldValue }}
                      </div>
                    </div>
                  </div>
                  <div v-if="payment_details">
                    <div v-if="payment_details.displayLocation == 'Terms'">
                      <div>
                        <b>{{ payment_details.paymentTypeHeading }}</b>
                        <br />
                        {{ payment_details.paymentType }}
                        <br />
                        <b>{{ payment_details.paymentDetailsHeading }}</b>
                        <br />
                        {{ payment_details.paymentDetails }}
                      </div>
                    </div>
                  </div>
                  <v-row>
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
                      Invoice Settings
                      <span class="ti-close close-settings"></span>
                    </h4>
                  </div>
                  <v-col cols="12">
                    <div class="currency-symbol-mainwrapper country-selectb">
                      <label class="form-label-outside">Currency Symbol</label>
                      <v-select
                        v-model="invoiceAllDetails.currencySymbol"
                        :items="currencies"
                        outlined
                        item-text="name"
                        item-value="id"
                        hide-details="auto"
                      ></v-select>
                    </div>
                  </v-col>
                  <hr />

                  <div class="addpayment-line-wrapper">
                    <ul>
                      <li>
                        <v-icon>mdi-currency-usd </v-icon>
                        <v-btn text @click="addPaymentDetails">
                          Add payment details
                        </v-btn>
                      </li>

                      <v-form @click="onSubmitAllDetails">
                        <li @click="isHiddenCompanyInfo = !isHiddenCompanyInfo">
                          <v-icon>mdi-pencil-outline </v-icon>
                          Add company info
                        </li>
                        <li @click="isHiddenDescription = !isHiddenDescription">
                          <v-icon>mdi-square-edit-outline </v-icon>
                          Add description
                        </li>
                        <li @click="isHiddenClientInfo = !isHiddenClientInfo">
                          <v-icon>mdi-account-circle </v-icon>
                          Add client info
                        </li>
                        <li @click="isHiddenPaymentInfo = !isHiddenPaymentInfo">
                          <v-icon>mdi-currency-usd </v-icon>
                          Enter Payment
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
                            <v-icon> mdi-map-marker </v-icon>
                            Get Link
                          </li>
                        </template>
                        <v-card class="getlink-modalwrapper">
                          <v-card-text>
                            <p>
                              The link will be available once the invoice is
                              saved for the first time
                            </p>
                            <v-btn
                              color="primary"
                              text
                              @click="getlink = false"
                            >
                              Ok
                            </v-btn>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                      <v-dialog v-model="copyinvoice" width="420">
                        <template v-slot:activator="{ on, attrs }">
                          <li v-bind="attrs" v-on="on">
                            <v-icon> mdi-content-copy </v-icon>
                            Copy Invoice
                          </li>
                        </template>
                        <v-card class="getlink-modalwrapper">
                          <v-card-text>
                            <p>
                              Please save the invoice before attempting to make
                              a copy
                            </p>
                            <v-btn
                              color="primary"
                              text
                              @click="copyInvoiceData()"
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
                            <v-icon>mdi-block-helper </v-icon>
                            Delete
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
                              Are you sure you want to delete this invoice? This
                              can not be undone.
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
                      <li>
                        <v-icon> mdi-content-copy </v-icon>
                        <v-btn text @click="addCustomFieldOne">
                          Custom Field 1
                        </v-btn>
                      </li>
                      <li>
                        <v-icon> mdi-content-copy </v-icon>
                        <v-btn text @click="addCustomFieldTwo">
                          Custom Field 2
                        </v-btn>
                      </li>
                      <li>
                        <v-icon> mdi-content-copy </v-icon>
                        <v-btn text @click="addCustomFieldThree">
                          Custom Field 3
                        </v-btn>
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <add-client-modal
            :ShowAddClientModal="ShowAddClientModal"
            @fetchClientDetails="listClientDetails"
            @close="ShowAddClientModal = false"
          />
          <add-invoice-modal
            :ShowAddInvoiceModal="ShowAddInvoiceModal"
            @fetchInvoiceTypeDetails="listAddInvoiceTypeDetails"
            @close="ShowAddInvoiceModal = false"
          />
          <add-sender-modal
            :ShowAddSenderModal="ShowAddSenderModal"
            @fetchSenderDetails="listSenderDetails"
            @close="ShowAddSenderModal = false"
          />
          <add-payment-details-modal
            :addPaymentDetailsModal="addPaymentDetailsModal"
            @fetchPaymentDetails="listPaymentDetails"
            @close="addPaymentDetailsModal = false"
          />
          <add-custom-field-one-modal
            :addCustomFieldOneModal="addCustomFieldOneModal"
            @fetchCustomFieldOneDetails="listCustomFieldOneDetails"
            @close="addCustomFieldOneModal = false"
          />
          <add-custom-field-two-modal
            :addCustomFieldTwoModal="addCustomFieldTwoModal"
            @fetchCustomFieldTwoDetails="listCustomFieldTwoDetails"
            @close="addCustomFieldTwoModal = false"
          />
          <add-custom-field-three-modal
            :addCustomFieldThreeModal="addCustomFieldThreeModal"
            @fetchCustomFieldThreeDetails="listCustomFieldThreeDetails"
            @close="addCustomFieldThreeModal = false"
          />
        </v-app>
      </client-only>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import addClientModal from "@/components/invoices/modals/add-client-modal";
import addInvoiceModal from "~/components/invoices/modals/add-invoice-modal.vue";
import addCustomFieldOneModal from "~/components/invoices/modals/add-custom-field-one-modal.vue";
import addCustomFieldTwoModal from "~/components/invoices/modals/add-custom-field-two-modal.vue";
import addCustomFieldThreeModal from "~/components/invoices/modals/add-custom-field-three-modal.vue";
import addPaymentDetailsModal from "~/components/invoices/modals/add-payment-details-modal.vue";
import addSenderModal from "~/components/invoices/modals/add-sender-modal.vue";
import addTaxModal from "@/components/invoices/modals/add-client-modal";
import { auth, storage, firestore, firebase } from "~/plugins/firebase";
import { getUserFromCookie } from "../../helpers/index";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import currencyJson from "~/data/currencies.json";
import { nanoid } from "nanoid";
import Toaster from "~/services/sweetToaster.js";

export default {
  currencyJson: currencyJson,
  components: {
    addClientModal,
    addInvoiceModal,
    addPaymentDetailsModal,
    addCustomFieldOneModal,
    addCustomFieldTwoModal,
    addCustomFieldThreeModal,
    addSenderModal,
    addTaxModal,
    VueCtkDateTimePicker,
  },
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
    countryCurrencySymbol: {
      currencies: [],
    },
    currencies: [],
    isSpinner: true,
    dollarpickup: false,
    invoice_logo: "",
    imageData: null,
    dialog: false,
    getlink: false,
    copyinvoice: false,
    deleteinvoice: false,
    ShowAddClientModal: false,
    addInvoiceModal: false,
    addPaymentDetailsModal: false,
    addCustomFieldOneModal: false,
    addCustomFieldTwoModal: false,
    addCustomFieldThreeModal: false,
    ShowAddSenderModal: false,
    ShowAddInvoiceModal: false,
    isHiddenCompanyInfo: true,
    isHiddenClientInfo: true,
    isHiddenDescription: true,
    isHiddenPaymentInfo: true,
    templates: [
      {
        value: "0",
        name: "Blank Template",
      },
    ],
    invoiceAllDetails: {
      invoicePayment: "",
      companyInfo: "",
      clientInfo: "",
      invoice_logo: "",
      invoiceDescription: "",
      invoiceNumber: "001",
      invoiceTerms: "",
      defaultTemplete: "Blank Template",
      invoiceDate: "",
      dueDate: "",
      currencySymbol: "United States Dollar",
    },
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
    loading: false,
    taxRules: [
      (v) => !!v || "",
      (v) => v.length <= 20 || "Name must be less than 20 characters",
    ],
  }),
  computed: {
    ...mapGetters({
      current_user: "auth/getAuthUser",
      sender_details: "modules/invoice/getSenderDetails",
      client_details: "modules/invoice/getClientDetails",
      invoice_type_details: "modules/invoice/getInvoiceTypeDetails",
      custom_field_one_details: "modules/invoice/getCustomFieldOneDetails",
      custom_field_two_details: "modules/invoice/getCustomFieldTwoDetails",
      custom_field_three_details: "modules/invoice/getCustomFieldThreeDetails",
      payment_details: "modules/invoice/getPaymentDetails",
    }),
    subTotal: function () {
      var total = this.items.reduce(function (accumulator, items) {
        return accumulator + items.rate * items.quantity;
      }, 0);
      return total;
    },
    taxTotal: function () {
      var total = this.items.reduce(function (accumulator, items) {
        return (
          accumulator + items.rate * items.quantity * (items.Taxrate / 100)
        );
      }, 0);
      return total;
    },
    grandTotal: function () {
      var total = this.subTotal + this.taxTotal;
      return total;
    },
  },
  async mounted() {
    this.currencies = currencyJson;
    await this.listSenderDetails();
    await this.listClientDetails();
    await this.listAddInvoiceTypeDetails();
    await this.listPaymentDetails();
    await this.listCustomFieldOneDetails();
    await this.listCustomFieldTwoDetails();
    await this.listCustomFieldThreeDetails();
  },
  methods: {
    ...mapActions({
      listSenderDetails: "modules/invoice/fetchAllSenderDetails",
      listClientDetails: "modules/invoice/fetchAllClientDetails",
      addInvoiceDetails: "modules/invoice/addInvoiceDetails",
      listAddInvoiceTypeDetails: "modules/invoice/fetchAllInvoiceTypeDetails",
      listPaymentDetails: "modules/invoice/fetchAllPaymentDetails",
      listCustomFieldOneDetails: "modules/invoice/fetchCustomFieldOneDetails",
      listCustomFieldTwoDetails: "modules/invoice/fetchCustomFieldTwoDetails",
      listCustomFieldThreeDetails:
        "modules/invoice/fetchCustomFieldThreeDetails",
      logoutUser: "auth/logout",
    }),
    remove(items) {
      const index = this.newItemsTaxRate.indexOf(items.name);
      if (index >= 0) this.newItemsTaxRate.splice(index, 1);
    },
    onlyNumbers(event) {
      let keyCode = event.keyCode ? event.keyCode : event.which;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
    select_file() {
      this.$refs.input1.click();
      const post = {
        photo: this.invoiceAllDetails.invoice_logo,
      };
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.invoiceAllDetails.invoice_logo = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.invoiceAllDetails.invoice_logo = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
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
            this.isSpinner = true;
            this.invoiceAllDetails.invoice_logo = url;
            this.isSpinner = false;
          });
        }
      );
    },

    async onSubmitInvoiceLogo() {
      const formData = new FormData();
      formData.append("invoiceLogo", this.invoiceLogo.logoImage);
      Toaster.success("logo added!", "success");
      this.invoiceLogo.logoImage = "";
    },
    handleFileUpload(e) {
      console.log(e);
    },
    async openAddSenderModal() {
      this.ShowAddSenderModal = true;
    },
    async addInvoiceDetails() {
      this.ShowAddInvoiceModal = true;
    },
    async openAddClientModal() {
      this.ShowAddClientModal = true;
    },
    async addPaymentDetails() {
      this.addPaymentDetailsModal = true;
    },
    async addCustomFieldOne() {
      this.addCustomFieldOneModal = true;
    },
    async addCustomFieldTwo() {
      this.addCustomFieldTwoModal = true;
    },
    async addCustomFieldThree() {
      this.addCustomFieldThreeModal = true;
    },
    deleteinvoiceField() {
      Toaster.success("Invoice deleted successfully!", "success");
      this.logoutUser();
    },
    deleteItem: function (index) {
      this.items.splice(index, 1);
    },
    onSubmitAllDetails() {
      var db = firebase.firestore();
      db.collection("invoiceDetails")
        .add(this.invoiceAllDetails)
        .then(() => {
          const check = this.$refs.tax_slip.validate();
          if (check) {
            this.$router.push("/profile/invoice-details");
            //  this.invoiceAllDetails.id = auth().currentUser.uid;
            this.invoiceAllDetails.id = "allDetails-" + nanoid();
            this.invoiceAllDetails.invoicePayment = "";
            this.invoiceAllDetails.companyInfo = "";
            this.invoiceAllDetails.clientInfo = "";
            this.invoiceAllDetails.invoiceDescription = "";
            this.invoiceAllDetails.invoiceNumber = "";
            this.invoiceAllDetails.invoiceDate = "";
            this.invoiceAllDetails.dueDate = "";
            this.invoiceAllDetails.currencySymbol = "";
            this.invoiceAllDetails.invoiceTerms = "";
            this.onSubmitInvoiceBuild();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveInvoiceData() {
      const check = this.$refs.tax_slip.validate();
      if (check) {
        Toaster.success("Invoice data submitted successfully!", "success");
        this.onSubmitAllDetails();
        setTimeout(() => {
          if (process.client) {
            window.open(
              window.location.origin +
                "/profile/client/" +
                this.invoiceAllDetails.id,
              "_blank"
            );
          }
        }, 1500);
      } else {
        Toaster.error("Invoice Items: Add at least one invoice item", "error");
      }
    },
    async onSubmitInvoiceBuild() {
      let payload = {
        id: auth().currentUser.uid,
        tax_slip: this.items,
      };
      var db = firebase.firestore();
      db.collection("invoiceDetails")
        .add(payload)
        .then(() => {
          console.log("Items", this.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addRow() {
      const check = this.$refs.tax_slip.validate();
      if (check) {
        this.items.push({
          itemName: "",
          quantity: "",
          Taxrate: "",
          taxType: "Non Taxable",
          rate: "",
          description: "",
        });
      }
    },

    copyInvoiceData() {
      let url = window.location.origin + "/";
      // let url = window.location.origin + "/" + item.id ;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          Toaster.success("Link copied!", "success");
          this.copyinvoice = false;
        })
        .catch((error) => {
          console.log("link copied!", error);
        });
    },
    UpdatedBy(id) {
      console.log(id);
      return "TimeStamp";
    },
  },
  async created() {
    await this.listClientDetails();
  },
};
</script>
