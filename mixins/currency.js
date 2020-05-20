export default {
  methods: {
    currencyFormatter(currency) {
      const formatter = new Intl.NumberFormat('en-US')

      return formatter.format(currency)
    }
  }
}
