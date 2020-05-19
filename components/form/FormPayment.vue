<template>
  <div class="form-payment">
    <grid-options
      title="Shipment"
      :selected="shipment"
      :list="shipmentList"
      @clicked="selectShipment"
    ></grid-options>
    <grid-options
      title="Payment"
      :list="paymentList"
      :selected="payment"
      @clicked="selectPayment"
    ></grid-options>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import GridOptions from '~/components/list/GridOptions'

export default {
  components: {
    GridOptions
  },
  data: () => ({
    selectedPayment: null,
    selectedShipment: null
  }),
  computed: {
    ...mapState({
      paymentList: (state) => state.payment.patners,
      payment: (state) => state.payment.selected,
      shipmentList: (state) => state.shipment.patners,
      shipment: (state) => state.shipment.selected,
      saldo: (state) => state.purchase.saldo
    }),
    updatedPaymentList() {
      return this.paymentList.map((item) => {
        if (item.name === 'E-Wallet') {
          item.cost = this.saldo
          return item
        } else {
          return item
        }
      })
    }
  },
  methods: {
    ...mapMutations(['setSelectedShipment', 'setSelectedPayment']),
    selectShipment(data) {
      this.setSelectedShipment(data)
    },
    selectPayment(data) {
      this.setSelectedPayment(data)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
