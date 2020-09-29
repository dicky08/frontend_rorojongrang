<template>
    <div>
        <Navbar />
        <b-row>
            <b-col lg="12">
                <b-row class="body text-center mx-3">
                    <b-col lg="3" class="left-mybooking mx-3 mt-5">
                        <b-row class="mt-5">
                            <b-col lg="12">photo</b-col>
                            <b-col>photo</b-col>
                            <b-col>photo</b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="8" class="right-mybooking mx-3 mt-5">
                        <b-row>
                            <b-col lg="12" class="top">
                                <b-row>
                                    <b-col lg="12"><h5 style="color: #2395FF;" class="text-left mx-3 my-3">MY BOOKING</h5></b-col>
                                    <b-col></b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
  name: 'My-Booking',
  components: {
    Navbar
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
    .right-mybooking{
        background: #F5F6FA;
    }
    .top{
        background: #FFFFFF;
border-radius: 15px;
    }
</style>
