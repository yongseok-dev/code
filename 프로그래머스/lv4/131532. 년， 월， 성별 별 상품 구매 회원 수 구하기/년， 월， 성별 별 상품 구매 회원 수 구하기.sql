-- 코드를 입력하세요
SELECT TO_CHAR(os.sales_date,'YYYY') AS year, TO_NUMBER(TO_CHAR(os.sales_date,'MM')) AS month, gender, count(DISTINCT ui.user_id) AS users
FROM online_sale os LEFT JOIN user_info ui
ON os.user_id = ui.user_id
WHERE ui.gender IS NOT NULL
GROUP BY TO_CHAR(os.sales_date,'YYYY'), TO_NUMBER(TO_CHAR(os.sales_date,'MM')), gender 
ORDER BY year, month, gender