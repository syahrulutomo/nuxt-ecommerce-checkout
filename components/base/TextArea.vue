<template>
  <div class="input">
    <ValidationProvider v-slot="{ valid, errors }" :rules="rules">
      <label
        v-if="label"
        class="input__label"
        :class="[isFocused ? 'focused' : '']"
        for="tetxtfield"
        :style="{ color: color }"
        >{{ label }}</label
      >
      <textarea
        id="textfield"
        ref="textfield"
        v-model="input"
        class="input__textfield"
        :class="[
          valid && input !== '' && input !== null
            ? 'success-border'
            : errors && input !== '' && input !== null
            ? 'warning-border'
            : ''
        ]"
        :rows="rows"
        :cols="cols"
        :max-length="maxLength"
        @focus="onFocus"
        @blur="onBlur"
      />
      <p class="counter">{{ counter }}</p>
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
    label: { type: String, default: undefined },
    width: { type: String, default: '100%' },
    value: { type: String, default: undefined },
    color: { type: String, default: '#999' },
    borderColor: { type: String, default: '#e5e5e5' },
    rows: { type: Number, default: 5 },
    cols: { type: Number, default: 33 },
    maxLength: { type: Number, default: 300 },
    rules: { type: [String, Object], default: 'required' }
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
    }
  },
  created() {
    this.input = this.value
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


.input__label
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

.input__label.focused
  transform translateY(-40%)
  font-size 12px

.input__textfield
  position relative
  padding 1.5rem 13px .75rem 12px
  width 100%
  outline 0
  border 0
  transition border 150ms ease-out
  resize none
  color #444
  font-size 16px
  border 1.5px solid #e5e5e5

.success-border
  border 1px solid #4fef8f !important

.warning-border
  border 1px solid #ff8600 !important

.counter
  font-size 14px
  font-family 'Roboto', sans-serif
  color #999
  text-align right
  position absolute
  right -20px
</style>
