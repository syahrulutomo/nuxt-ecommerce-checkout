<template>
  <div class="summary">
    <h1 class="summary__title">Summary</h1>
    <div v-if="goods" class="summary__purchased-items">
      <p class="text">{{ goodSize }} items purchased</p>
      <div class="text-underline" />
    </div>
    <div v-if="shipment" class="summary__delivery-estimation">
      <p class="text">Delivery Estimation</p>
      <p v-if="shipment" class="value">
        {{ shipment.time }} by {{ shipment.name }}
      </p>
      <div class="text-underline" />
    </div>
    <div
      v-else
      class="summary__delivery-estimation"
      style="margin-bottom: 20%"
    />
    <div v-if="payment" class="summary__payment-method">
      <p class="text">Payment method</p>
      <p v-if="payment" class="value">{{ payment.name }}</p>
    </div>
    <div
      v-else
      class="summary__delivery-estimation"
      style="margin-bottom: 20%"
    />
    <div class="summary__bills">
      <div class="summary__bills__cost-of-goods">
        <p class="text">Cost of goods</p>
        <p class="value">{{ currencyFormatter(goodsCost) }}</p>
      </div>
      <div class="summary__bills__dropship-fee">
        <p class="text">Dropshipping Fee</p>
        <p class="value">{{ currencyFormatter(dropshipmentCost) }}</p>
      </div>
      <div v-show="shipment" class="summary__bills__shipment-fee">
        <p class="text"><span>GO-SEND</span> shipment</p>
        <p class="value">{{ currencyFormatter(shipmentCost) }}</p>
      </div>
      <div class="summary__bills__total">
        <p class="text">Total</p>
        <p class="value">{{ currencyFormatter(total) }}</p>
      </div>
      <slot name="submit-btn" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MixCurrency from '~/mixins/currency'

export default {
  mixins: [MixCurrency],
  data: () => ({
    step: 1
  }),
  computed: {
    ...mapState({
      buyerEmail: (state) => state.purchase.buyer.email,
      buyerPhone: (state) => state.purchase.buyer.phone,
      buyerAddress: (state) => state.purchase.buyer.address,
      dropshipperName: (state) => state.purchase.dropshipper.name,
      dropshipperPhone: (state) => state.purchase.dropshipper.phone,
      goodsCost: (state) => state.purchase.bills.goods,
      dropshipmentCost: (state) => state.purchase.bills.dropshipment,
      shipmentCost: (state) => state.purchase.bills.shipment,
      total: (state) => state.purchase.total,
      goods: (state) => state.purchase.goods,
      shipment: (state) => state.shipment.selected,
      payment: (state) => state.payment.selected,
      currentStep: (state) => state.purchase.currentStep
    }),
    goodSize() {
      return this.goods.length
    }
  },
  watch: {
    currentStep(value) {
      this.step = value
    }
  },
  created() {
    this.step = this.currentStep
  },
  methods: {
    ...mapMutations(['setCurrentStep']),
    submitDetails() {
      this.setCurrentStep(this.step++)
    },
    submitDelivery() {
      this.setCurrentStep(this.step++)
    }
  }
}
</script>

<style lang="stylus" scoped>
.summary
  width 100%
  min-height 100%
  padding 1rem

  &__title
    width 100%
    color #ff8707
    font-size 24px

  &__purchased-items
    width 100%
    position relative
    display inline-block
    padding 1rem 0
    margin-bottom 1rem

    .text
      font-size 16px
      color #858685

    .text-underline
      position absolute
      bottom 0
      background-color #dcdddc
      width 60%
      height 1px

  @media screen and (max-width: 800px)
    .text-underline
      display none

  &__delivery-estimation, &__payment-method
    width 100%
    position relative
    display inline-block
    padding 1rem 0
    margin-bottom .5rem

    .text
      font-size 16px
      color #1c1c1c
      margin-bottom .25rem

    .value
      font-size 18px
      color #00ee80
      box-sizing border-box

    .text-underline
      position absolute
      bottom 0
      background-color #dcdddc
      width 60%
      height 1px

  &__bills
    width 100%

    &__cost-of-goods, &__dropship-fee, &__shipment-fee
      display flex
      justify-content space-between
      margin-bottom 1rem

      .text
        font-size 16px
        color #858685

      .value
        font-size 16px
        color #010101
        font-weight 500

    &__total
      width 100%
      display flex
      justify-content space-between
      margin-top 2.25rem
      font-size 22px
      font-weight 600
      color #ff8400
</style>
