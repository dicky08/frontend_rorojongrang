<template>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div   class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="mdl">
            <div >
                <h5 class="font-weight-bold">hey,</h5>
                <h5 class="font-weight-bold">where you want go??</h5>
                <div class="ty-recent">
                    <h4 class="text-primary">recently searched</h4>
                    <b-icon stacked icon="arrow-right" variant="primary" style="width: 30px" ></b-icon>
                </div>
                <div  class="box-form mt-3">
                    <div class="from-to">
                        <span>from</span>
                        <span>to</span>
                    </div>
                    <div class="arrow">
                        <h2 class="font-weight-bold">medan</h2>
                        <b-icon stacked icon="arrow-left-right" variant="primary" style="width: 40px" ></b-icon>
                        <h2 class="font-weight-bold">Tokyo</h2>
                    </div>
                    <div class="ctry">
                        <h5>indonesia</h5>
                        <h5>jepang</h5>
                    </div>
                </div>
                <div class="type mt-4">
                    <button class="btn btn-primary">roundtrip</button>
                    <button class="btn btn-secondary">one way</button>
                </div>
                <div class="mt-2">
                    <span>departure</span>
                    <select class="custom-select" name="" id="">
                        <option  value="">Monday, 20 July 2020</option>
                    </select>
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
                    <span>which class do you want ?</span>
                    <div class="cek">
                        <div>
                            <input type="checkbox">
                            <label for="">economy</label>
                        </div>
                        <div>
                            <input type="checkbox">
                            <label for="">economy</label>
                        </div>
                        <div>
                            <input type="checkbox">
                            <label for="">economy</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-dialog {
  position: absolute;
  top: 50px;
  right: 20px;
  bottom: 0;
  left: 0;
  z-index: 10040;
  overflow: auto;
  overflow-y: auto;
}
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
