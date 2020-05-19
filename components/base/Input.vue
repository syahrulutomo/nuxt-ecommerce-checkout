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
        @click="!disabled ? clickLabel : ''"
        >{{ label }}</label
      >
      <div class="input__box">
        <input
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
          :disabled="disabled"
          :type="type"
          @focus="onFocus"
          @blur="onBlur"
        />
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
    type: { type: String, default: 'text' },
    value: { type: String, default: undefined },
    color: { type: String, default: '#999' },
    borderColor: { type: String, default: '#e5e5e5' },
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
    },
    clickLabel() {
      this.isFocused = true
      this.$refs.textfield.focus()
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
    background-color transparent
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
      padding 1.75rem 12px .75rem 13px
      width 100%
      outline 0
      border 0
      color #444
      font-size 16px
      transition border 150ms ease-out
      border 1.5px solid #e5e5e5

    .validation-icon
      font-size 18px
      position absolute
      right 13px

.success
  color #4fef8f

.warning
  color #ff8600

.success-border
  border 1px solid #4fef8f !important

.warning-border
  border 1px solid #ff8600 !important
</style>
