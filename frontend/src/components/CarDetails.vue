<script>
export default {
  name: "CarDetails",
  props: ["car"],
  methods: {
    close() {
      this.$emit("close-modal-event");
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Car Details </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="row">
              <div class="col-sm-4">
                <b>WareHouse Name:</b>
              </div>
              <div class="col-sm-8">
                {{ car.datawarehouse.warehouse_name }}
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <b>Location:</b>
              </div>
              <div class="col-sm-8">
                {{ car.datawarehouse.warehouse_location }}
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <b>Longitude:</b>
              </div>
              <div class="col-sm-8">
                {{ car.datawarehouse.warehouse_lng }}
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <b>Latitude:</b>
              </div>
              <div class="col-sm-8">
                {{ car.datawarehouse.warehouse_lat }}
              </div>
            </div>
          </slot>
        </section>

        <footer class="modal-footer">
          <button
            type="button"
            class="btn btn-success"
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #262525;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #262525;
  box-shadow: 2px 2px 20px 1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: white;
  font-size: 40px;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
