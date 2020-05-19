<template>
  <div class="input">
    <ValidationProvider v-slot="{ valid, errors }" :rules="rules">
      <label
        v-if="label"
        class="input__label"
        :class="[
          isFocused ? 'focused' : '',
          valid && isFocused && !disabled
            ? 'success'
            : errors && !disabled && isFocused
            ? 'warning'
            : ''
        ]"
        :for="id"
        >{{ label }}</label
      >
      <textarea
        :id="id"
        ref="textfield"
        v-model="input"
        class="input__box__textfield"
        :class="[
          valid && isFocused && !disabled
            ? 'success-border'
            : errors && isFocused && !disabled
            ? 'warning-border'
            : ''
        ]"
        :rows="rows"
        :cols="cols"
        :max-length="maxLength"
        @focus="onFocus"
        @blur="onBlur"
      />
      <div class="input__validation">
        <i
          v-if="valid && isFocused && !disabled"
          class="material-icons validation-icon"
          :class="[
            isFocused ? 'focused' : '',
            valid && isFocused && !disabled ? 'success' : ''
          ]"
        >
          done
        </i>
        <i
          v-else-if="errors && isFocused && !disabled"
          class="material-icons validation-icon"
          :class="[
            isFocused ? 'focused' : '',
            errors && isFocused && !disabled ? 'warning' : ''
          ]"
        >
          clear
        </i>
        <p class="counter">{{ counter }}</p>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  props: {
    id: { type: String, default: '' },
    label: { type: String, default: undefined },
    width: { type: String, default: '100%' },
    value: { type: String, default: undefined },
    color: { type: String, default: '#999' },
    borderColor: { type: String, default: '#e5e5e5' },
    rows: { type: Number, default: 5 },
    cols: { type: Number, default: 33 },
    maxLength: { type: Number, default: 300 },
    rules: { type: [String, Object], default: 'required' },
    disabled: { type: Boolean, default: false },
    setFocused: { type: Boolean, default: false }
  },
  data: () => ({
    input: null,
    isFocused: false
  }),
  computed: {
    customWidth() {
      return this.width
    },
    counter() {
      if (this.input) {
        return 120 - Number(this.input.split('').length)
      }

      return 0
    }
  },
  watch: {
    value(value) {
      this.input = value
    },
    input(value) {
      this.$emit('input', value)
    },
    setFocused(value) {
      this.isFocused = this.setFocused
    }
  },
  created() {
    this.input = this.value
    if (this.setFocused) this.isFocused = this.setFocused
  },
  methods: {
    onFocus(e) {
      this.isFocused = true
      this.$emit('focus', e)
    },
    onBlur(e) {
      if (this.input === null || this.input === '') {
        this.isFocused = false
      }
      this.$emit('blur', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.input
  position relative
  & + .input
    margin-top 16px


.input
  &__label
    position absolute
    left 0
    top 1rem
    left 13px
    color #999
    background-color #fff
    z-index 10
    transition transform 150ms ease-out, font-size 150ms ease-out
    font-size 15px
    font-weight 500

  &__label.focused
    transform translateY(-40%)
    font-size 12px

  &__box
    display flex
    align-items center

    &__textfield
      position relative
      padding 1.5rem 13px .75rem 12px
      width 90%
      outline 0
      border 0
      transition border 150ms ease-out
      resize none
      color #444
      font-size 16px
      border 1.5px solid #e5e5e5

      @media screen and (min-width: 540px)
        width 93%

      @media screen and (min-width: 640px)
        width 94%

      @media screen and (min-width: 740px)
        width 95%

      @media screen and (min-width: 800px)
        width 94%

      @media screen and (min-width: 900px)
        width 91%

  &__validation
    display flex

    .counter
      font-size 14px
      font-family 'Roboto', sans-serif
      color #999
      text-align right
      position absolute
      right 0px

    .validation-icon
      font-size 18px
      position absolute
      right 30px

.success-border
  border 1px solid #4fef8f !important

.warning-border
  border 1px solid #ff8600 !important

.success
  color #4fef8f

.warning
  color #ff8600
</style>
