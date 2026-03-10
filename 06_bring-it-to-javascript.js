const product_1 = {
  productID    : 1,
  productName  : "โต๊ะไม้",
  productSKU   : "1n1",
  productPrice : 199
}
const product_1_2 = {
  productID    : 2,
  productName  : "โต๊ะไม้ (สีน้ำตาล)",
  productSKU   : "1n2",
  productPrice : 199
}
const product_2 = {
  productID    : 3,
  productName  : "เก้าอี้ไม้",
  productSKU   : "1n1",
  productPrice : 99
}
const product_2_2 = {
  productID    : 4,
  productName  : "เก้าอี้ไม้ (สีดำ)",
  productSKU   : "2n2",
  productPrice : 99
}

let productList = [product_1, product_1_2, product_2, product_2_2]

const productCart = [{
  productID    : product_1_2.productID,
  productSKU   : product_1_2.productSKU,
  amount       : 1
},{
  productID    : product_2.productID,
  productSKU   : product_2.productSKU,
  amount       : 2
}]

console.log("กำลังดูสินค้าไหนอยู่ :", product_2_2)
console.log("สินค้าในตะกร้าตอนนี้ :", productCart)