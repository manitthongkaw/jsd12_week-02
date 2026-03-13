-- Clear existing data to prevent duplication
TRUNCATE TABLE ProductItems RESTART IDENTITY CASCADE;

-- Mock Data for ProductItems
INSERT INTO ProductItems (product_id, product_name, product_sku, product_price) VALUES
(1, 'โซฟา 3 ที่นั่ง รุ่นนอร์ดิก', 'SF-001', 15900.00),
(2, 'โต๊ะอาหารไม้สัก พร้อมเก้าอี้ 4 ตัว', 'DT-002', 28500.00),
(3, 'เตียงนอน 6 ฟุต รุ่นโมเดิร์น ลักชูรี่', 'BD-003', 22000.00),
(4, 'ตู้เสื้อผ้าไม้โอ๊ค บานสไลด์', 'WD-004', 18900.00),
(5, 'เก้าอี้อาร์มแชร์ ผ้ากำมะหยี่', 'AC-005', 7500.00);