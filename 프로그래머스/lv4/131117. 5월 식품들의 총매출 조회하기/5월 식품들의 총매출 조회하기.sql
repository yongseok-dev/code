-- 코드를 입력하세요
SELECT fo.product_id, fp.product_name, SUM(fo.amount*fp.price) AS total_sales
FROM food_order fo LEFT JOIN food_product fp
ON fo.product_id = fp.product_id
WHERE TO_CHAR(produce_date,'YYYYMM')='202205' AND fp.product_id IS NOT NULL
GROUP BY fo.product_id, fp.product_name
ORDER BY total_sales DESC, product_id