<template>
  <section class="jakmall">
    <div class="container">
      <div v-if="stepper" class="stepper-container">
        <slot name="stepper" />
      </div>
      <div class="content">
        <div class="header">
          <slot name="header" />
        </div>
        <div class="section-left">
          <slot name="content" />
        </div>
        <div class="section-right">
          <slot name="summary" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stepper: { type: Boolean, default: false }
  }
}
</script>

<style lang="stylus" scoped>
.jakmall
  width 100%
  min-height 100vh
  box-sizing border-box
  background #fff3e5
  padding 3rem 2rem

  .container
    background-color white
    padding 2rem
    max-width 1000px
    margin-left auto
    margin-right auto

    .stepper-container
      position relative
      margin-left auto
      margin-right auto
      margin-top -60px

    .content
      display flex
      flex-wrap wrap
      padding-top 1rem

      .header
        width 100%

      .section-left
        width 100%

      .section-right
        width 100%

      @media screen and (min-width: 800px)
        .section-left
          width calc(70% - 2rem)

        .section-right
          width 30%
          border-left 1px solid #ffe8c1

      @media screen and (min-width: 1100px)
        width 1000px
        margin-left auto
        margin-right auto
</style>
