<template>
    <div class="container-fluid">
        <Navbar />
        <b-row>
            <b-col lg="12">
                <b-row class="body text-center px-4" v-for="(getData,index) in getDetailTransaksi.transaction.data" :key="index">
                    <b-col lg="3" class="left-mybooking mx-3 mt-4 mb-4">
                        <b-row class="mt-4">
                            <b-col lg="12">
                                <div class="text-center">
                                    <img class="avatar" src="../assets/assets/img/me.png" alt="" srcset="">
                                </div>
                            </b-col>
                            <b-col lg="12" class="mt-4">
                                <b-button md variant="outline-primary">Select Photo</b-button>
                            </b-col>
                            <b-col lg="12" class="mt-4">
                                <p style="color: #6B6B6B; font-size:14px;"> {{getData.address}}</p>
                            </b-col>
                            <b-col lg="12" class="mt-3">
                                <b-row>
                                    <b-col lg="5" class="text-left ml-2"><p>Cards</p></b-col>
                                    <b-col lg="6" class="text-right" style="font-size:14px;color:#2395FF;"><p>+Add</p></b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12">
                                <b-row class="xcard mx-3">
                                    <b-col lg="12">
                                        <p class="text-left mt-2 text-white">{{getData.cards}}</p>
                                    </b-col>
                                    <b-col lg="5" class="text-left mb-2" style="color: #AEFAFF;">X Card </b-col>
                                    <b-col lg="5" class="text-right mb-2" style="color: #AEFAFF;">$ 1,440.2</b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12">
                                <b-row class="mt-4">
                                    <b-col lg="4">
                                        <span class="fa fa-user text-primary"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6>Profiles</h6></b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col lg="4">
                                        <span class="fa fa-star"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6>My Review</h6></b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col lg="4">
                                        <span class="fa fa-cogs"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6>Setting</h6></b-col>
                                </b-row>
                                <b-row class="my-4">
                                    <b-col lg="4">
                                        <span class="fa-sign-out text-danger"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6>Sign Out</h6></b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="8" class="right-mybooking mx-3 mt-4">
                        <b-row>
                            <b-col lg="12" class="right">
                                <b-row>
                                    <b-col lg="12">
                                        <h5 style="color: #2395FF; font-size: 14px; text-align:left;" class="my-3">MY BOOKING</h5>
                                    </b-col>
                                    <b-col lg="6" md="6" sm="6" cols="6" class="mb-2 my-book">

                                        <h4>My Booking</h4>
                                    </b-col>
                                    <b-col lg="6" md="6" sm="6" cols="6" class="mb-2">
                                        <h4 class="history mr-3" style="text-align:right;">Order History</h4>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12" >
                                <b-row class="right mt-4">
                                    <b-col lg="12">
                                        <p style="text-align:left;color: #000000;" class="mt-3">Monday, 20 July '20 - 12.33</p>
                                    </b-col>
                                    <b-col lg="3" cols="6">
                                       <b-row>
                                           <b-col lg="4" cols="4" ><h3>IDN</h3></b-col>
                                           <b-col lg="4" cols="4" ><img src="../assets/assets/img/Vector.png" alt=""></b-col>
                                           <b-col lg="4" cols="4" ><h3>JPN</h3></b-col>
                                       </b-row>
                                    </b-col>
                                    <b-col lg="12" class="text-left code">
                                        <p>{{getData.name_airlines}}, AB-221</p>
                                    </b-col>
                                    <b-col lg="12" class="divider"></b-col>
                                    <b-col lg="12">
                                        <b-row class="mt-3">
                                            <b-col lg="2" md="2" sm="2" cols="6" class="text-left" style="color: #7A7A7A;"><p>Status</p></b-col>
                                            <b-col lg="3" md="5" sm="6" cols="6">
                                                <p class="waiting">Waiting for payment</p>
                                            </b-col>
                                            <b-col lg="7" md="5" sm="4" cols="4">
                                                <p class="details mr-3" style="text-align:right;">View Details</p>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>

                            <!-- bottom -->
                            <b-col lg="12">
                                <b-row class="right mt-3">
                                    <b-col lg="12">
                                        <p style="text-align:left;color: #000000;" class="mt-3">Monday, 20 July '20 - 12.33</p>
                                    </b-col>
                                    <b-col lg="3" cols="6">
                                       <b-row>
                                           <b-col lg="4" cols="4" ><h3>IDN</h3></b-col>
                                           <b-col lg="4" cols="4" ><img src="../assets/assets/img/Vector.png" alt=""></b-col>
                                           <b-col lg="4" cols="4" ><h3>JPN</h3></b-col>
                                       </b-row>
                                    </b-col>
                                    <b-col lg="12" class="text-left code">
                                        <p>{{getData.name_airlines}}, AB-221</p>
                                    </b-col>
                                    <b-col lg="12" class="divider"></b-col>
                                    <b-col lg="12">
                                        <b-row class="mt-3">
                                            <b-col lg="2" md="2" sm="2" cols="6" class="text-left" style="color: #7A7A7A;"><p>Status</p></b-col>
                                            <b-col lg="3" md="5" sm="6" cols="6">
                                                <p class="issued">Eticket Issued</p>
                                            </b-col>
                                            <b-col lg="7" md="5" sm="4" cols="4">
                                                <p class="details mr-3" style="text-align:right;">View Details</p>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <Footer />
        </b-row>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapGetters, mapActions, mapState } from 'vuex'
// import Swal from 'sweetalert2'
export default {
  name: 'My-Booking',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      id_transaksi: localStorage.getItem('id_transaction')
    }
  },
  computed: {
    ...mapState({
      id: 'id'
    }),
    ...mapGetters({
      // getTransaksi: 'transaction/getTransaction',
      getDetailTransaksi: 'transaction/getDetailTransaksi'
    })
  },
  methods: {
    ...mapActions({
      actionTransaksi: 'transaction/getTransaksi',
      actDetailTransaksi: 'transaction/detailTransaksi'
    })
  },
  mounted () {
    this.actDetailTransaksi(this.id_transaksi)
  }
}
</script>
<style scoped>
    .body{
        background: #F5F6FA;
    }
    .left-mybooking{
        background: #FFFFFF;
        border-radius: 15px;
    }
    .right{
        background: #FFFFFF;
        border-radius: 15px;
    }
    .my-book{
        font-weight: 600;
        font-size: 24px;
        text-align:left;
        line-height: 36px;
    }
    .code p {
        color: #979797;
        font-size: 14px;
    }
    .divider{
        background: #E6E6E6;
        height: 1px;
    }
    .waiting{
        background: #FF7F23;
        height: 30px;
        border-radius: 3px;
        color: white;
    }
    .issued{
        background: #4FCF4D;
        border-radius: 3px;
        height: 30px;
        color: white;
    }
    .details{
        color: #2395FF;
        font-size: 16px;
    }
    .history{
        color: #2395FF;
        font-size: 16px;
    }

    /* profile */
    .avatar{
         width:70px;
    margin: 6px;
    border:5px solid #1D9BFA;
    padding: 7px;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    }
    .xcard{
        background: #2395FF;
        box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
        border-radius: 10px;
    }
    @media (max-width: 900px){
        .left-mybooking {
            display: none;
        }
        .details{
            display:none
        }
    }
</style>
