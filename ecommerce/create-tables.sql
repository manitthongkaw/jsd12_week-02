-- 1. ProductItems
CREATE TABLE ProductItems (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_sku VARCHAR(20) NOT NULL UNIQUE,
    product_price DECIMAL(10,2) NOT NULL
);

-- 2. Customer
CREATE TABLE Customer (
    customer_id SERIAL PRIMARY KEY,
    customer_firstname VARCHAR(100) NOT NULL,
    customer_lastname VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20),
    customer_email VARCHAR(100) NOT NULL UNIQUE
);

-- 3. Orders
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP NOT NULL DEFAULT NOW(),
    order_totalprice DECIMAL(10,2) NOT NULL,
    customer_id INTEGER NOT NULL REFERENCES Customer(customer_id)
);

-- 4. OrderItems
CREATE TABLE OrderItems (
    orderitem_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES Orders(order_id),
    product_id INTEGER NOT NULL REFERENCES ProductItems(product_id),
    quantity INTEGER NOT NULL,
    UNIQUE(order_id, product_id)
);