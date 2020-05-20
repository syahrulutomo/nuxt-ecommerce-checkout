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
    <ValidationObserver ref="form">
      <div class="delivery__form">
        <div class="delivery__form-left">
          <jakmall-input
            id="email"
            v-model="email"
            label="Email"
            class="delivery__form-left__input"
            rules="email|required"
          />
          <jakmall-input
            id="phone"
            v-model="phone"
            label="Phone Number"
            class="delivery__form-left__input"
            :rules="{
              min: 6,
              max: 20,
              required: true,
              regex: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/
            }"
          />
          <jakmall-text-area
            id="address"
            v-model="address"
            label="Delivery Address"
            class="delivery__form-left__input address"
            rules="required|max:120"
          />
        </div>
        <div class="delivery__form-right">
          <jakmall-input
            id="dropshipper-name"
            v-model="dropshipper.name"
            label="Dropshipper name"
            class="delivery__form-right__input dropshipper-name"
            :disabled="!isDropshipper"
            :rules="isDropshipper ? 'required' : ''"
          />
          <jakmall-input
            id="dropshipper-phone"
            v-model="dropshipper.phone"
            label="Dropshipper phone number"
            class="delivery__form-right__input"
            :disabled="!isDropshipper"
            :rules="
              isDropshipper
                ? 'min: 6| max: 20| required: true | regex: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/'
                : ''
            "
          />
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import JakmallInput from '../base/Input'
import JakmallTextArea from '../base/TextArea'
import JakmallCheckbox from '../base/Checkbox'

export default {
  components: {
    JakmallInput,
    JakmallTextArea,
    JakmallCheckbox,
    ValidationObserver
  },
  data: () => ({
    email: null,
    phone: null,
    address: null,
    isDropshipper: false,
    dropshipper: {
      name: null,
      phone: null
    },
    dropshipCost: 0,
    errors: []
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
      total: (state) => state.purchase.total,
      goods: (state) => state.purchase.goods
    }),
    costOfGoods() {
      const data = this.goods.reduce(
        (total, current) => total + current.price,
        0
      )
      return data
    },
    currentTotal() {
      return this.costOfGoods + this.dropshipCost
    }
  },
  watch: {
    isDropshipper(value) {
      if (value === false) this.resetDropship()
      else this.dropshipCost = 5900
    },
    dropshipCost(value) {
      this.setDropshipmentCost(value)
    },
    currentTotal(value) {
      this.setTotal(value)
    },
    email(value) {
      this.submit()
    },
    phone(value) {
      this.submit()
    },
    address(value) {
      this.submit()
    },
    'dropshipper.name'(value) {
      this.submit()
    },
    'dropshipper.phone'(value) {
      this.submit()
    }
  },
  created() {
    this.setGoodsCost(this.costOfGoods)
    this.resetData()
  },
  methods: {
    ...mapMutations([
      'setBuyerEmail',
      'setBuyerPhone',
      'setBuyerAddress',
      'setIsDropshipper',
      'setDropshipperName',
      'setDropshipperPhone',
      'setGoodsCost',
      'setDropshipmentCost',
      'setShipmentCost',
      'setTotal',
      'setValid',
      'setSelectedShipment',
      'setSelectedPayment'
    ]),
    resetDropship() {
      this.dropshipper.name = null
      this.dropshipper.phone = null
      this.dropshipCost = 0
    },
    resetData() {
      this.email = null
      this.phone = null
      this.address = null
      this.isDropshipper = false
      this.dropshipper.name = null
      this.dropshipper.phone = null
      this.dropshipCost = 0
      this.setBuyerEmail(null)
      this.setBuyerPhone(null)
      this.setBuyerAddress(null)
      this.setDropshipperName(null)
      this.setDropshipperPhone(null)
      this.setSelectedPayment(null)
      this.setSelectedShipment(null)
      this.setTotal(0)
      this.setValid(false)
    },
    submit() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.setBuyerEmail(this.email)
          this.setBuyerPhone(this.phone)
          this.setBuyerAddress(this.address)
          this.setDropshipperName(this.dropshipper.name)
          this.setDropshipperPhone(this.dropshipper.phone)
          this.setValid(true)
        }
      })
    }
  }
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
      margin-top 1rem

    @media screen and (min-width: 700px)
      &-left
        width 70%
        display inline-block
        width 18rem

      &-right
        width 30%
        margin-top 0

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
@media screen and (max-width: 800px)
  .address
    margin-bottom 1rem
</style>
