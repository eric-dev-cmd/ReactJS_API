var initialState = [
  {
    id: 1,
    name: "iPhone 12",
    price: 2000,
    status: true,
  },
  {
    id: 2,
    name: "Samsung A51",
    price: 3000,
    status: false,
  },
  {
    id: 3,
    name: "OPPO 1200",
    price: 1000,
    status: true,
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
