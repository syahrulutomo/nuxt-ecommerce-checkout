export default {
  methods: {
    currencyFormatter(currency) {
      const formatter = new Intl.NumberFormat('ID')

      return formatter.format(currency)
    }
  }
}
