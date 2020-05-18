import {
  excluded,
  numeric,
  required,
  email,
  max,
  min,
  regex
} from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('numeric', {
  ...numeric,
  message: 'This field must be contain number'
})

extend('max', {
  ...max,
  message: 'This field must be {length} characters or less'
})

extend('min', {
  ...min,
  message: 'This field must be at least {length} characters'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('excluded', {
  ...excluded,
  message: 'The value is not valid'
})

extend('regex', {
  ...regex,
  message: 'Regex not matched'
})
