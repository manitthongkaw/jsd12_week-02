SELECT
    Staff.first_name,
    Staff.last_name,
    COUNT(Orders.order_id) AS order_count
FROM Staff
JOIN Orders ON Staff.staff_id = Orders.staff_id
GROUP BY Staff.staff_id
ORDER BY order_count DESC;