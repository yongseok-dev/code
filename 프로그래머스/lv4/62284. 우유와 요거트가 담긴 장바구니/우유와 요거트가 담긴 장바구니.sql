SELECT cart_id
FROM (
    SELECT cart_id, name, COUNT(*)
    FROM cart_products
    WHERE name IN ('Milk','Yogurt')
    GROUP BY cart_id,name
)
GROUP BY cart_id
HAVING COUNT(*)=2
ORDER BY cart_id ASC;