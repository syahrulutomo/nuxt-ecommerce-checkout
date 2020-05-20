<template>
  <div class="thankyou">
    <div class="thankyou__title">
      <h1 class="thankyou__title__text">Thankyou</h1>
      <div class="thankyou__title__underline" />
    </div>
    <div class="thankyou__content">
      <p class="thankyou__content__id">
        Order ID : <span v-if="random">{{ random }}</span>
      </p>
      <p class="thankyou__content__delivery">
        Your order will be delivered {{ shipment.time }} with
        {{ shipment.name }}
      </p>
    </div>
    <div class="thankyou__back-btn">
      <i class="material-icons back-icon" @click="back()">arrow_back</i>
      <span class="text">Go to homepage</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    random: null
  }),
  computed: {
    ...mapState({
      shipment: (state) => state.shipment.selected
    })
  },
  created() {
    this.generateRandom()
  },
  methods: {
    ...mapMutations(['setCurrentStep']),
    generateRandom() {
      const chars = 'ABCDEFGHJKLMNPQRSTUFWXYZ23456789'
      this.random = _.sampleSize(chars, 5).join('')
    },
    back() {
      this.setCurrentStep(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.thankyou
  display flex
  flex-wrap wrap
  align-items center
  justify-content center
  width 55%
  margin-left auto
  margin-right auto

  @media screen and (max-width: 800px)
    margin-bottom 2rem

  &__title
    display block
    width 100%
    margin-top 15%

    &__text
      color #ff8600
      letter-spacing 1.1px
      font-size 36px

    &__underline
      background-color #eee
      width 60%
      height 8px
      margin-top -12px

  &__content
    width 100%
    margin-top 2rem

    &__id
      width 100%
      margin-bottom .75rem
      font-size 16px
      color #1c1c1c

    &__delivery
      width 100%
      font-size 14px
      color #858685

  &__back-btn
    width 100%
    display flex
    margin-top 4.5rem

    .back-icon
      color #656565
      font-size 20px
      margin-right .75rem

      &:hover
        cursor pointer

    .text
      font-family 'Roboto', sans-serif
      color #656565
</style>
