<template>
  <div class="delivery">
    <div class="delivery__title">
      <div class="delivery__title-left">
        <h1 class="delivery__title-content">Delivery details</h1>
        <div class="delivery__title-underline" />
      </div>
      <div class="delivery__title-right">
        <jakmall-checkbox v-model="isDropshipper" />
      </div>
    </div>
    <div class="delivery__form">
      <div class="delivery__form-left">
        <jakmall-input
          v-model="email"
          label="Email"
          class="delivery__form-left__input"
          rules="required|min:8|max:12|email"
        />
        <jakmall-input
          v-model="phone"
          label="Phone Number"
          class="delivery__form-left__input"
          :rules="{
            min: 6,
            max: 20,
            regex: /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/
          }"
        />
        <jakmall-text-area
          v-model="address"
          label="Delivery Address"
          class="delivery__form-left__input"
          rules="required|max:120"
        />
      </div>
      <div class="delivery__form-right">
        <jakmall-input
          v-model="dropshipper.name"
          label="Dropshipper name"
          class="delivery__form-right__input dropshipper-name"
          :disabled="!isDropshipper"
        />
        <jakmall-input
          v-model="dropshipper.phoneNumber"
          label="Dropshipper phone number"
          class="delivery__form-right__input"
          :disabled="!isDropshipper"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JakmallInput from '../base/Input'
import JakmallTextArea from '../base/TextArea'
import JakmallCheckbox from '../base/Checkbox'

export default {
  components: {
    JakmallInput,
    JakmallTextArea,
    JakmallCheckbox
  },
  data: () => ({
    email: null,
    phone: null,
    address: null,
    isDropshipper: false,
    dropshipper: {
      name: null,
      phoneNumber: null
    }
  })
}
</script>

<style lang="stylus" scoped>
.delivery
  font-family 'Roboto', sans-serif

  &__title
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items baseline

    &-left
      display inline-block
      width 100%

    &-right
      width 100%

    @media screen and (min-width: 700px)
      &-left
        display inline-block
        width 18rem

      &-right
        width 20%

  &__title-content
    color #ff8600
    letter-spacing 1.1px
    font-size 36px

  &__title-underline
    background-color #eee
    width 100%
    height 8px
    margin-top -10px

    @media screen and (min-width: 450px)
      width 70%

    @media screen and (min-width: 550px)
      width 70%

    @media screen and (min-width: 600px)
      width 55%

    @media screen and (min-width: 700px)
      width 100%

  &__form
    width 100%
    margin-top 2.5rem
    display flex
    flex-wrap wrap

    &-left
      width 100%

      &__input
        width 90%

    &-right
      width 100%

      &__input
        width 90%

      &__input.dropshipper-name
        margin-top 16px

  @media screen and (min-width: 900px)
    &__form

      &-left
        width 52.5%
        margin-right 2.5%

      &-right
        width 45%

        &__input.dropshipper-name
          margin-top 0px
</style>
