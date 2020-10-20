<template>
<div v-if="type==='home'">
<!-- Modal -->
<div class="modal fade" id="search" tabindex="-1" aria-labelledby="searchLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="searchLabel">Search Flight</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="searchFlight" >
        <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                <p class="font-weight-bold"> hey,</p>
                <h5 class="mt-n2 mb-3 font-weight-bold">Where you want to go?</h5>
                </div>
                <div class="col-lg-11 col-md-6 mb-4">
                  <a href="" class="font-weight-bold ">Recently Searched</a>
                </div>
                <div class="col-lg-1 col-md-6">
                  <b-icon-chevron-right class="nav-item text-primary font-weight-bold"></b-icon-chevron-right>
                </div>
              </div>
              <div class="col-lg-12 shadow rounded p-2 mb-4">
                <div class="row">
                  <div class="col-lg-9 ml-2">from</div>
                  <div class="col-lg-2 text-right">to</div>
                  <div class="col-lg-5 ">
                    <select class="form-control" v-model="dataSearch.from">
                      <option disabled value>Departure</option>
                      <option :value="departure.name_departure_city" v-for="(departure,index) in getDeparture" :key="index">{{departure.name_departure_city}}</option>
                    </select>
                  </div>
                  <!-- <div class="col-lg-5 ml-2"><h5 class="font-weight-bold">MEDAN</h5></div> -->
                  <div class="col-lg-2 text-center"><b-icon-arrow-left-right></b-icon-arrow-left-right></div>
                  <div class="col-lg-5 text-right">
                    <select class="form-control" v-model="dataSearch.to">
                      <option disabled value>Destination </option>
                      <option :value="destination.city_arrived" v-for="(destination,index) in getDestination" :key="index">{{destination.city_arrived}}</option>
                    </select>
                  </div>
                  <!-- <div class="col-lg-3 text-right"><h5 class="font-weight-bold">TOKYO</h5></div> -->
                  <div class="col-lg-8 ml-2"><p class="small">Indonesia</p></div>
                  <div class="col-lg-3"><p class="small ml-4 text-right">Japan</p></div>
                </div>
              </div>
              <div class="col-lg-12 mb-4 ">
                <div class="row d-flex justify-content-between">
                  <div class="col-lg-5 p-0">
                    <button class="btn btn-primary btn-block d-flex" @click.prevent="trip('one_way')">
                    <span><img src="../assets/assets/img/Vector (3).png" ></span>
                    <span class="text-capitalize ml-2"> One Way</span>
                    </button>
                  </div>
                  <!-- <div class="col-lg-2"></div> -->
                  <div class="col-lg-5 p-0 float-right">
                    <button class="btn btn-light btn-block" @click.prevent="trip2('round_trip')">
                    <span><b-icon-arrow-clockwise></b-icon-arrow-clockwise></span>
                    <span class="text-capitalize"> Round trip</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 p-0 mb-3">
                <div class="row">
                  <div class="col-lg-12"><p>Departure</p></div>
                  <div class="col-lg-12">
                    <div class="departure">
                        <b-form-datepicker
                          id="datepicker-dateformat1"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            weekday: 'short'
                          }"
                          locale="en"
                          v-model="dataSearch.day"
                        ></b-form-datepicker>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 p-0 mb-4">
                <div class="row">
                  <div class="col-lg-12"><p>How many person?</p></div>
                  <div class="col-lg-6">
                    <select class="form-control" v-model="dataSearch.child">
                      <option disabled value>Select Child</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <select class="form-control" v-model="dataSearch.adult">
                      <option disabled value>Select Adult</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 p-0">
                <div class="row">
                  <div class="col-lg-12 "><p>Which class do you want?</p></div>
                    <div class="col-lg-4">
                      <input type="radio" value="economy" v-model="dataSearch.class_airlines"> Economy
                    </div>
                    <div class="col-lg-4">
                      <input type="radio" value="bussiness" v-model="dataSearch.class_airlines"> Bussiness
                    </div>
                    <div class="col-lg-4">
                      <input type="radio" value="first_class" v-model="dataSearch.class_airlines"> First Class
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary btn-block d-flex justify-content-between">
            <span class="text-uppercase text-left">search flight</span>
            <b-icon-arrow-right ></b-icon-arrow-right>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
<div v-else-if="type==='editbooking'">
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Payment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="updatePayment">
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-lg-12">
              <h4>Dicky FIrmansyah</h4>
            </div>
          </div>
          <div class="row mb-3">
            <h4 class="col-lg-3 font-weight-bold">{{detail_booking.code_departure}}</h4>
            <div class="col-lg-3"><img src="../assets/assets/img/Vector.png"></div>
            <h4 class="col-lg-3 font-weight-bold">{{detail_booking.code_destination}}</h4>
            <p class="col-lg-3 font-weight-bold">{{detail_booking.code_airlines}}</p>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <label> Total Payment</label>
              <input type="text" class="form-control" :value="detail_booking.total_payment" readonly>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <label> Upload Payment</label>
              <input type="file" class="form-control" @change="onSelectFile($event)">
            </div>
          </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Payment</button>
      </div>
      </form>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['type', 'detail_booking'],
  data () {
    return {
      image_proof: null,
      dataSearch: {
        from: '',
        to: '',
        trip: 'one_way',
        day: '',
        child: '',
        adult: '',
        class_airlines: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getAirlines: 'findtiket/getAllAirlines',
      getDeparture: 'findtiket/getDepartureCity',
      getDestination: 'findtiket/getDestinationCity'
    })
  },
  methods: {
    ...mapActions({
      actionSearchTiket: 'findtiket/SearchTiket',
      actionDeparture: 'findtiket/getDeparture',
      actionDestination: 'findtiket/getDestination'
    }),
    onSelectFile (event) {
      this.image_proof = event.target.files[0]
    },
    updatePayment () {
      const fd = new FormData()
      fd.append('proof_of_payment', this.image_proof)
      const data1 = {
        id: this.detail_booking.id_booking,
        formData: fd
      }
      this.$emit('updatePayment', data1)
    },
    searchFlight () {
      localStorage.setItem('SearchAirlines', JSON.stringify(this.dataSearch))
      window.location = '/findtiket'
    },
    trip (trip1) {
      this.dataSearch.trip = trip1
    },
    trip2 (trip2) {
      this.dataSearch.trip = trip2
    }
  },
  mounted () {
    this.actionDeparture()
    this.actionDestination()
  }
}
</script>

<style scoped>

/* .modal-dialog {
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 0;
  left: 0;
  z-index: 10040;
  overflow: auto;
  overflow-y: auto;
} */
.ty-recent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.from-to {
    display: flex;
    justify-content: space-between;
}
.arrow {
    display: flex;
    justify-content: space-between;
}
.ctry {
    display: flex;
    justify-content: space-between;
}
.box-form {
    background: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    border-radius: 12px;
}
.type {
    display: flex;
    justify-content: space-around;
}
.dept {
    background: #FFFFFF;
box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
border-radius: 12px;
}
/* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.cek {
    display: flex;
    justify-content: space-around;
}

</style>
