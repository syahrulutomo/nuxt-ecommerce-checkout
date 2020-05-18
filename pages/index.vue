<template>
  <content-layout :stepper="true">
    <jakmall-stepper slot="stepper" :list="listStepper" :current-step="1" />
    <div slot="header" class="back-btn">
      <i class="material-icons back-icon">arrow_back</i>
      <span class="text">Back to cart</span>
    </div>
    <form-delivery slot="content" />
    <form-summary slot="summary" />
  </content-layout>
</template>

<script>
import ContentLayout from '~/layouts/content'
import FormDelivery from '~/components/form/FormDelivery'
import FormSummary from '~/components/form/Summary'
import JakmallStepper from '~/components/base/Stepper'

export default {
  components: {
    ContentLayout,
    FormDelivery,
    FormSummary,
    JakmallStepper
  },
  data: () => ({
    listStepper: ['Delivery', 'Payment', 'Finish']
  })
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

  .text
    font-family 'Roboto', sans-serif
    color #656565
</style>
