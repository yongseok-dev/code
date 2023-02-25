SELECT a.author_id AS author_id, a.author_name AS author_name, b.category AS category, SUM(bs.sales*b.price) AS total_sales
FROM book_sales bs LEFT JOIN book b ON bs.book_id = b.book_id
LEFT JOIN author a ON b.author_id = a. author_id
WHERE bs.sales_date >= TO_DATE('20220101','YYYYMMDD') AND bs.sales_date < TO_DATE('20220201','YYYYMMDD')
GROUP BY a.author_id, a.author_name, b.category
ORDER BY author_id, category DESC