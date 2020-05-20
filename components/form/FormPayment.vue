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
      :list="updatedPaymentList"
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
      saldo: (state) => state.purchase.saldo,
      dropshipmentCost: (state) => state.purchase.bills.dropshipment,
      costOfGoods: (state) => state.purchase.bills.goods,
      total: (state) => state.purchase.total
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
    ...mapMutations([
      'setSelectedShipment',
      'setSelectedPayment',
      'setShipmentCost',
      'setTotal'
    ]),
    selectShipment(data) {
      this.setSelectedShipment(data)
      this.setShipmentCost(data.cost)
      const total = this.costOfGoods + data.cost + this.dropshipmentCost
      this.setTotal(total)
    },
    selectPayment(data) {
      this.setSelectedPayment(data)
    }
  }
}
</script>
