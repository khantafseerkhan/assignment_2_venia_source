
let initialstate = {

  value: 10,
  allproductdata: [],
  cartProduct: localStorage.getItem("cartdata")?JSON.parse(localStorage.getItem("cartdata")):[],
  totalOfall: localStorage.getItem("totalofall")?localStorage.getItem("totalofall"):0,
  coupon: 20,
  giftCard: 10,
  etax: 50,
  shippingCharge: 0,
  cartCount: 0

}




export const changeTheState = (state = initialstate, action) => {
  switch (action.type) {
    case 'Increament':
      return { value: state.value + 1 }
    case 'Decrement':
      return { value: state.value - 1 }
    default:
      return state
  }
}


export const updateproductslist = (state = initialstate, action) => {

  if (action.type == "updateproductslist") {
    console.log("length   =" + action.data.length)
    return {
      value: state.value,
      allproductdata: action.data
    }
  } else {
    return state;
  }
}
export const updateCartProduct = (state = initialstate, action) => {


  if (action.type == "add") {
    let temparray = state.cartProduct;

    let index = temparray.findIndex(x => x.id == action.data.id);
    if (index != -1) {

      temparray[index].quantity = temparray[index].quantity + action.data.quantity;

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall",calPriceSummary(temparray))

      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: temparray,
        totalOfall: calPriceSummary(temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: temparray.length

      }



    } else {
      temparray.push(action.data);

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall",calPriceSummary(temparray))
      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: temparray,
        totalOfall: calPriceSummary(temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: temparray.length



      }

    }
  } else if (action.type == "update") {
    return state
  } else if (action.type == "remove") {
    let temparray = state.cartProduct;

    if (action.data != -1) {

      temparray.splice(action.data, 1);

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall",calPriceSummary(temparray))

      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: temparray,
        totalOfall: calPriceSummary(temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: temparray.length


      }
    } else {
      return state;
    }
  } else if (action.type == "incQuantity") {
    let temparray = state.cartProduct;
    let index = temparray.findIndex(x => x.id == action.data);
    temparray[index].quantity = temparray[index].quantity + 1;

    localStorage.setItem("cartdata", JSON.stringify(temparray))
    localStorage.setItem("totalofall",calPriceSummary(temparray))

    return {
      value: state.value,
      allproductdata: state.allproductdata,
      cartProduct: temparray,
      totalOfall: calPriceSummary(temparray),
      coupon: state.coupon,
      giftCard: state.giftCard,
      etax: state.etax,
      shippingCharge: state.shippingCharge,
      cartCount: temparray.length



    }
  } else if (action.type == "decQuantity") {
    let temparray = state.cartProduct;
    let index = temparray.findIndex(x => x.id == action.data);
    if (temparray[index].quantity > 1) {
      temparray[index].quantity = temparray[index].quantity - 1;

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall",calPriceSummary(temparray))

      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: temparray,
        totalOfall: calPriceSummary(temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: temparray.length


      }
    }

  } else {
    return state;
  }
}

const calPriceSummary = (inputdata) => {

  let totalOfall = 0;
  inputdata.forEach(element => {
    totalOfall = totalOfall + (element.price * element.quantity);
  });
  return totalOfall;
}

