SELECT
    MenuItems.name,
    SUM(OrderItems.quantity) AS total_sold
FROM OrderItems
JOIN MenuItems ON OrderItems.item_id = MenuItems.item_id
GROUP BY MenuItems.name
ORDER BY total_sold DESC
LIMIT 1;