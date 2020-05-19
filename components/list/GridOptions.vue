<template>
  <div class="grid-options">
    <div v-if="title" class="grid-options__title">
      <h1 class="grid-options__title__text">{{ title }}</h1>
      <div class="grid-options__title__underline" />
    </div>
    <div v-if="list" class="grid-options__content">
      <div
        v-for="(data, index) in list"
        :key="index"
        class="grid-options__content__item"
        :class="[
          selected
            ? data.name === selected.name
              ? 'active'
              : 'nonactive'
            : 'nonactive'
        ]"
        :style="{ width: 'calc(100%/' + size + ' - 2rem)' }"
        @click="$emit('clicked', data)"
      >
        <p class="name">{{ data.name }}</p>
        <p v-if="data.cost" class="cost">{{ currencyFormatter(data.cost) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MixCurrency from '~/mixins/currency'

export default {
  mixins: [MixCurrency],
  props: {
    title: { type: String, default: '' },
    selected: { type: [String, Object], default: undefined },
    list: { type: Array, default: null }
  },
  computed: {
    size() {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.grid-options

  &__title
    display inline-block
    width 100%

    &__text
      color #ff8600
      letter-spacing 1.1px
      font-size 36px

    &__underline
      background-color #eee
      width 100%
      height 8px
      margin-top -12px

      @media screen and (min-width: 450px)
        width 70%

      @media screen and (min-width: 550px)
        width 70%

      @media screen and (min-width: 600px)
        width 55%

      @media screen and (min-width: 700px)
        width 60%

      @media screen and (min-width: 900px)
        width 40%

  &__content
    display flex
    flex-wrap wrap
    width 100%
    margin-top 2.5rem
    margin-bottom 4rem

    &__item
      padding 1rem 1.25rem
      margin-right 2rem
      box-sizing border-box
      display flex
      flex-direction column
      justify-content center

      &:hover
        cursor pointer

      .name
        font-size 16px
        margin-bottom 1rem
        font-weight 500

      .cost
        font-size 16px
        font-weight 500

      @media screen and (max-width: 700px)
        .name
          font-size 14px

        .cost
          font-size 14px

  .active
    background-color #e4fff2
    border 2px solid #00ec72
    border-radius 2px
    color #08040d

  .nonactive
    background-color #fff
    border 2px solid #dbdcdc
    border-radius 2px
    color #87878a
</style>
