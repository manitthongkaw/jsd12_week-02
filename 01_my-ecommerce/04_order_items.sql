-- Clear existing data to prevent duplication
TRUNCATE TABLE OrderItems RESTART IDENTITY CASCADE;

-- Mock Data for OrderItems
INSERT INTO OrderItems (orderitem_id, order_id, product_id, quantity) VALUES
(1, 1, 1, 1), -- Order 1: โซฟา 1 ตัว (15,900)
(2, 2, 2, 1), -- Order 2: โต๊ะอาหาร 1 ตัว (28,500)
(3, 2, 5, 1), -- Order 2: อาร์มแชร์ 1 ตัว (7,500) -> รวม 36,000
(4, 3, 3, 1); -- Order 3: เตียงนอน 1 ตัว (22,000)