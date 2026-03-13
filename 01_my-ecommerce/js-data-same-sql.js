const productItems = [
  { product_id: 1, product_name: 'โซฟา 3 ที่นั่ง รุ่นนอร์ดิก', product_sku: 'SF-001', product_price: 15900 },
  { product_id: 2, product_name: 'โต๊ะอาหารไม้สัก พร้อมเก้าอี้ 4 ตัว', product_sku: 'DT-002', product_price: 28500 },
  { product_id: 3, product_name: 'เตียงนอน 6 ฟุต รุ่นโมเดิร์น ลักชูรี่', product_sku: 'BD-003', product_price: 22000 },
  { product_id: 4, product_name: 'ตู้เสื้อผ้าไม้โอ๊ค บานสไลด์', product_sku: 'WD-004', product_price: 18900 },
  { product_id: 5, product_name: 'เก้าอี้อาร์มแชร์ ผ้ากำมะหยี่', product_sku: 'AC-005', product_price: 7500 }
];

const customers = [
  { customer_id: 1, customer_firstname: 'สมชาย', customer_lastname: 'รักดี', customer_phone: '081-234-5678', customer_email: 'somchai@email.com' },
  { customer_id: 2, customer_firstname: 'สมศรี', customer_lastname: 'มีสุข', customer_phone: '082-345-6789', customer_email: 'somsri@email.com' },
  { customer_id: 3, customer_firstname: 'วิชัย', customer_lastname: 'แคล้วคลาด', customer_phone: '083-456-7890', customer_email: 'wichai@email.com' }
];

const orders = [
  { order_id: 1, order_date: '2024-03-10 10:30:00', order_totalprice: 15900.00, customer_id: 1 },
  { order_id: 2, order_date: '2024-03-11 14:15:00', order_totalprice: 36000.00, customer_id: 2 },
  { order_id: 3, order_date: '2024-03-12 09:00:00', order_totalprice: 22000.00, customer_id: 3 }
];

const orderItems = [
  { orderItemId: 1, orderId: 1, productId: 1, quantity: 1 },
  { orderItemId: 2, orderId: 2, productId: 2, quantity: 1 },
  { orderItemId: 3, orderId: 2, productId: 5, quantity: 1 },
  { orderItemId: 4, orderId: 3, productId: 3, quantity: 1 }
];

console.log("--- ข้อมูลสินค้า (ProductItems) ---");
console.table(productItems);

console.log("\n--- ข้อมูลลูกค้า (Customer) ---");
console.table(customers);

console.log("\n--- ข้อมูลการสั่งซื้อ (Orders) ---");
console.table(orders);

console.log("\n--- รายการสินค้าในคำสั่งซื้อ (OrderItems) ---");
console.table(orderItems);
