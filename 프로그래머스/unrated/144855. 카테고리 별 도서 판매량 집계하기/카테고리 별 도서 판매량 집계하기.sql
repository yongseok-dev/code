-- 코드를 입력하세요
SELECT b.category, SUM(bs.sales) AS total_sales
FROM  book_sales bs LEFT JOIN book b
ON bs.book_id = b.book_id
WHERE TO_CHAR(bs.sales_date,'YYYY-MM') = '2022-01'
GROUP BY b.category
ORDER BY b.category