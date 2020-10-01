<template>
<div class="wrap">
    <Navbar />
   <div class=" warp2">
       <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et quia quae natus expedita nesciunt iste minima velit corporis aperiam deserunt eum libero delectus dolor tempora aspernatur quod, aliquid accusamus.</h1>
       <div class="warp3 container">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus minus in aliquid recusandae, error deleniti quaerat! Dolorem debitis, minus inventore veritatis quaerat aspernatur illo, aliquid repellat, aut ratione dolore.
       </div>
   </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }

}
</script>

<style scoped>
.warp2{
    position: fixed;
    background: orange;
    height: 100%;
}
</style>
