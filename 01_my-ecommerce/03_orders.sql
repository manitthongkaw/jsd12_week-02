-- Clear existing data to prevent duplication
TRUNCATE TABLE Orders RESTART IDENTITY CASCADE;

-- Mock Data for Orders
INSERT INTO Orders (order_id, order_date, order_totalprice, customer_id) VALUES
(1, '2024-03-10 10:30:00', 15900.00, 1),
(2, '2024-03-11 14:15:00', 36000.00, 2),
(3, '2024-03-12 09:00:00', 22000.00, 3);