<template>
  <div class="container-fluit" style="overflow-x: hidden;">
    <div class="row">
      <div class="col-lg-8">
        <img class="overlay" src="../assets/assets/img/overlay4.png" alt="">
      </div>
      <div class="login col-lg-4">
        <div class="head m-5">
          <img src="../assets/assets/img/blueAirplane.png" alt="">
          <strong class="pl-3">Ankasa</strong>
        </div>
        <div class="back m-5">
          <img src="../assets/assets/img/btnback.png" alt="">
        </div>
        <div class="m-5">
          <h2 class="textLogin"><strong>Register</strong></h2>
          <p></p>
          <b-form-input v-model="text" placeholder="Full Name"></b-form-input>
          <p></p>
          <b-form-input v-model="text" placeholder="Email"></b-form-input>
          <p></p>
          <b-form-input v-model="text" placeholder="Password"></b-form-input>
          <p class="pb-2"></p>
          <b-button class="p-2" block variant="primary"><strong>Sign Up</strong></b-button>
          <p></p>
          <b-form-checkbox>Accept terms and condition</b-form-checkbox>
        </div>
        <div>
          <img class="divider ml-5" src="../assets/assets/img/divider.png" alt="">
        </div>
        <div class="signIn">
          <h6>Already have an account</h6>
          <div class="m-5">
          <b-button class="p-2" block variant="outline-primary"><strong>Sign In</strong></b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
}
.textLogin {
  padding-top: 70px;
  padding-bottom: 30px;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #D2C2FF;
}
.back {
  display: none;
}
.login p {
  text-align: center;
}
.divider {
  width: 77%;
}
.signIn {
text-align: center;
padding-bottom: 35px;
}
.signIn img {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
 .overlay {
  display: none;
 }
 .head {
   display: none;
 }
 .back {
   display: block;
 }
 .divider {
  width: 80%;
 }
 .signIn {
 padding-bottom: 30px;
 }
}
</style>
