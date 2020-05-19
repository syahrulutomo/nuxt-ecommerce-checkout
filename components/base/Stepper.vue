<template>
  <section>
    <div v-if="list && width >= 1000" class="stepper">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="stepper__item"
        :style="{ width: 'calc(100%/' + size + ')' }"
      >
        <div
          v-if="currentStep >= index + 1"
          class="stepper__item__bullet--active"
        >
          {{ index + 1 }}
        </div>
        <div v-else class="stepper__item__bullet--nonactive">
          {{ index + 1 }}
        </div>
        <p class="stepper__item__title">{{ item }}</p>
        <i class="material-icons next-icon">keyboard_arrow_right</i>
      </div>
    </div>
    <div v-else-if="list && width < 1000" class="stepper">
      <div class="stepper__item" style="width: 100%">
        <div class="stepper__item__bullet--active">
          {{ currentStep }}
        </div>
        <p class="stepper__item__title">
          {{ list[currentStep - 1] }}
        </p>
        <i class="material-icons next-icon">keyboard_arrow_right</i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: null },
    currentStep: { type: Number, default: 1 }
  },
  data: () => ({
    width: window.innerWidth
  }),
  computed: {
    size() {
      return this.list.length
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  }
}
</script>

<style lang="stylus">
.stepper
  z-index 99
  display flex
  flex-wrap wrap
  align-items center
  padding .75rem 1rem
  background #fff3e5
  width 50%
  max-width 450px
  border-radius 40px
  margin-left auto
  margin-right auto

  &__item
    display flex
    flex-wrap wrap
    align-items center

    @media screen and (max-width: 1000px)
      width 100% !important
      margin-bottom .75rem
      justify-content center


    &__bullet
      &--active
        width 30px
        height 30px
        display flex
        justify-content center
        align-items center
        border-radius 50%
        font-family 'Roboto', sans-serif
        background-color #ff8600
        color #fff

      &--nonactive
        width 30px
        height 30px
        display flex
        justify-content center
        align-items center
        border-radius 50%
        font-family 'Roboto', sans-serif
        background-color #ffe9b4
        color #ff8600

    &__title
      font-family 'Roboto', sans-serif
      font-size 16px
      color #ff8301
      font-weight 400
      margin-left .75rem
      margin-right 1rem

    .next-icon
      color #ff9427
</style>
