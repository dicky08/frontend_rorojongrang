<template>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" hide-header>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="mdl">
            <div>
                <h5 class="font-weight-bold">Hey,</h5>
                <h5 class="font-weight-bold">Where you want go??</h5>
                <div class="ty-recent">
                    <h4 class="text-primary">Recently searched</h4>
                    <b-icon stacked icon="arrow-right" variant="primary" style="width: 30px" ></b-icon>
                </div>
                <div class="box-form mt-3 row" >
                  <div class="col-lg-12">
                    <div class="row my-2">
                      <div class="col-lg-5">
                        <div class="row text-left ml-1" >
                          <div class="col-lg-12">From</div>
                            <b-form-select @change="depart" v-model="search.from" class="my-2">
                              <b-form-select-option v-for="(item,index) in dep_city" :key="index" :value="item.name_departure_city" required>
                               {{item.name_departure_city}}
                              </b-form-select-option>
                            </b-form-select>
                          <div class="col-lg-12">Indonesia</div>
                        </div>
                      </div>
                      <div class="col-lg-2 my-4">
                        <b-icon stacked icon="arrow-left-right " variant="primary" style="width: 40px" ></b-icon>
                      </div>
                      <div class="col-lg-5">
                        <div class="row text-left mr-1">
                          <div class="col-lg-12">To</div>
                            <b-form-select @change="destination" v-model="search.to" class="my-2">
                              <b-form-select-option v-for="(item,index) in dest_city" :key="index" :value="item.city_arrived" required>
                               {{item.city_arrived}}
                              </b-form-select-option>
                            </b-form-select>
                          <div class="col-lg-12">Japan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="type mt-4">
                    <button class="btn btn-primary">roundtrip</button>
                    <button class="btn btn-tayo">one way</button>
                </div>
                <div class="mt-2">
                    <span>Departure Day</span>
                    <input class="custom-select" type="date" placeholder="Monday, 20 July '20">
                </div>
                <div class="mt-2">
                    <span>how many person</span>
                    <div style="display: flex;">
                    <select class="custom-select" name="" id="">
                        <option  value="">4 child</option>
                    </select>
                    <select class="custom-select ml-2" name="" id="">
                        <option  value="">2 adult</option>
                    </select>

                    </div>
                </div>
                <div class="mt-2">
                    <span>Which class do you want ?</span>
                    <div class="cek">
                        <div v-for="(item,index) in class_airlines" :key="index" :value="item.name_class" >
                            <input type="checkbox"  id="item.name_class" >
                            <label for="">{{item.name_class}}</label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 my-5">
                  <a href="/findtiket">
                  <button class="btn-primary search-flight mt-3" @click="searchFlight()">
                    <b-row class="mt-3">
                      <b-col lg="7">
                        <p style="font-size:18px;"> SEARCH FLIGHT
                        </p>
                        </b-col>
                      <b-col lg="5">
                        <img class="text-right"
                   src="../assets/assets/img/panah.png" alt="">
                      </b-col>
                    </b-row>
                    </button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      search: {
        from: '',
        to: '',
        airline_class: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      dataAirlines: 'landing/getDataAirlines',
      dep_city: 'landing/getDepartureCity',
      dest_city: 'landing/getDestinationCity',
      class_airlines: 'landing/getClass'
    })
  },
  methods: {
    ...mapActions({
      getAirlines: 'landing/getData',
      getDeptCity: 'landing/getDepCity',
      getDestCity: 'landing/getDestCity',
      getClass: 'landing/getClass',
      getFlight: 'landing/searchFlight'
    }),
    searchFlight () {
      const flight = {
        from: this.search.from,
        to: this.search.to
      }
      this.getFlight(flight)
    }
  },
  mounted () {
    this.getAirlines()
    this.getDeptCity()
    this.getDestCity()
    this.getClass()
  }
}
</script>

<style scoped>
.btn-tayo{
  background-color: #F0F0F0;
}
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
  border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 6px;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}
.search-flight{
  background: #2395FF;
box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
border-radius: 10px;
width: 100%;
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
