<template>
  <content-layout :stepper="true">
    <jakmall-stepper
      slot="stepper"
      :list="listStepper"
      :current-step="currentStep"
    />
    <div slot="header" class="back-btn">
      <i class="material-icons back-icon" @click="back()">arrow_back</i>
      <span v-if="currentStep === 1" class="text">Back to cart</span>
      <span v-if="currentStep === 2" class="text">Back to delivery</span>
    </div>
    <form-delivery v-if="currentStep === 1" ref="details" slot="content" />
    <form-payment v-else-if="currentStep === 2" slot="content" />
    <form-thankyou v-else-if="currentStep === 3" slot="content" />
    <form-summary slot="summary">
      <button
        v-if="currentStep === 1"
        slot="submit-btn"
        class="submit-btn"
        @click="submitDetails()"
      >
        Continue to Payment
      </button>
      <button
        v-else-if="currentStep === 2"
        slot="submit-btn"
        class="submit-btn"
        @click="submitDelivery()"
      >
        Pay with <span v-if="payment">{{ payment.name }}</span>
      </button>
    </form-summary>
  </content-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ContentLayout from '~/layouts/content'
import FormDelivery from '~/components/form/FormDelivery'
import FormPayment from '~/components/form/FormPayment'
import FormThankyou from '~/components/form/Thankyou'
import FormSummary from '~/components/form/Summary'
import JakmallStepper from '~/components/base/Stepper'

export default {
  components: {
    ContentLayout,
    FormDelivery,
    FormPayment,
    FormThankyou,
    FormSummary,
    JakmallStepper
  },
  data: () => ({
    listStepper: ['Delivery', 'Payment', 'Finish'],
    step: 1
  }),
  computed: {
    ...mapState({
      currentStep: (state) => state.purchase.currentStep,
      payment: (state) => state.payment.selected,
      shipment: (state) => state.shipment.selected,
      valid: (state) => state.purchase.valid
    })
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
    back() {
      const step = this.currentStep - 1
      if (step >= 1) this.setCurrentStep(step)
    },
    submitDetails() {
      if (this.valid) this.setCurrentStep(this.step + 1)
      else this.$toast.error('Data is not valid yet')
    },
    submitDelivery() {
      if (this.shipment && this.payment) this.setCurrentStep(this.step + 1)
      else this.$toast.error('Please select shipment method')
    }
  }
}
</script>

<style lang="stylus" scoped>
.back-btn
  display flex
  align-items center
  margin-bottom 2rem

  .back-icon
    color #656565
    font-size 20px
    margin-right .75rem

    &:hover
      cursor pointer

  .text
    font-family 'Roboto', sans-serif
    color #656565

.submit-btn
  width 100%
  padding 1rem 2rem
  margin-top 2rem
  background-color #ff8600
  color white
  font-family 'Roboto', sans-serif
  font-size 16px
  letter-spacing .5px
  border 1px solid #ff8600
  box-shadow none
  border-radius 2px
  font-weight 400

  &:hover
    cursor pointer
</style>
