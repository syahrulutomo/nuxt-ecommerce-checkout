export const initial = () => ({
  id: null,
  goods: [
    { name: 'Sweater X1', price: 50000 },
    { name: 'Sweater X2', price: 50000 },
    { name: 'Sweater X3', price: 50000 },
    { name: 'Sweater X4', price: 50000 },
    { name: 'Sweater X5', price: 50000 },
    { name: 'Sweater X6', price: 50000 },
    { name: 'Sweater X7', price: 50000 },
    { name: 'Sweater X8', price: 50000 },
    { name: 'Sweater X9', price: 50000 },
    { name: 'Sweater X10', price: 50000 }
  ],
  buyer: {
    email: null,
    phone: null,
    address: null
  },
  isDropshipper: false,
  dropshipper: {
    name: null,
    phone: null
  },
  bills: {
    goods: 0,
    dropshipment: 0,
    shipment: 0
  },
  total: 0,
  currentStep: 1,
  saldo: 1500000,
  valid: false
})

export default initial
