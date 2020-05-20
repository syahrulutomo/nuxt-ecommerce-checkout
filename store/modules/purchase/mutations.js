export default {
  setBuyerEmail(state, data) {
    state.buyer.email = data
  },
  setBuyerPhone(state, data) {
    state.buyer.phone = data
  },
  setBuyerAddress(state, data) {
    state.buyer.address = data
  },
  setIsDropshipper(state, data) {
    state.isDropshipper = data
  },
  setDropshipperName(state, data) {
    state.dropshipper.name = data
  },
  setDropshipperPhone(state, data) {
    state.dropshipper.phone = data
  },
  setCurrentStep(state, data) {
    state.currentStep = data
  },
  setGoodsCost(state, data) {
    state.bills.goods = data
  },
  setDropshipmentCost(state, data) {
    state.bills.dropshipment = data
  },
  setShipmentCost(state, data) {
    state.bills.shipment = data
  },
  setTotal(state, data) {
    state.total = data
  },
  setGoods(state, data) {
    state.goods = data
  },
  setValid(state, data) {
    state.valid = data
  }
}
