-- Clear existing data to prevent duplication
TRUNCATE TABLE Customer RESTART IDENTITY CASCADE;

-- Mock Data for Customer
INSERT INTO Customer (customer_id, customer_firstname, customer_lastname, customer_phone, customer_email) VALUES
(1, 'สมชาย', 'รักดี', '081-234-5678', 'somchai@email.com'),
(2, 'สมศรี', 'มีสุข', '082-345-6789', 'somsri@email.com'),
(3, 'วิชัย', 'แคล้วคลาด', '083-456-7890', 'wichai@email.com');