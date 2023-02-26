-- 코드를 입력하세요
SELECT order_id,product_id,TO_CHAR(out_date,'YYYY-MM-DD') AS out_date, (CASE WHEN out_date IS NULL THEN '출고미정' WHEN out_date<TO_DATE('20220502','YYYYMMDD') THEN '출고완료' ELSE '출고대기' END) AS 출고여부
FROM food_order
ORDER BY order_id