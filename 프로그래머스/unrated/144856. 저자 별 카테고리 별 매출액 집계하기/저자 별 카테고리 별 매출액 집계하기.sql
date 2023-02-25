-- 코드를 입력하세요
SELECT author_id, author_name, category, SUM(sales) AS total_sales
FROM (
    SELECT a.author_id, a.author_name, b.category, bs.sales*b.price AS sales
    FROM book_sales bs LEFT JOIN book b ON bs.book_id = b.book_id
    LEFT JOIN author a ON b.author_id = a. author_id
    WHERE bs.sales_date >= TO_DATE('20220101','YYYYMMDD') AND bs.sales_date < TO_DATE('20220201','YYYYMMDD')
)
GROUP BY author_id, author_name, category
ORDER BY author_id, category DESC 
/*
2022년 1월의 도서 판매 데이터를 기준
저자 별, 카테고리 별 매출액(TOTAL_SALES = 판매량 * 판매가) 을 구하여, 
저자 ID(AUTHOR_ID), 저자명(AUTHOR_NAME), 카테고리(CATEGORY), 매출액(SALES) 리스트를 출력하는 SQL문을 작성해주세요.
결과는 저자 ID를 오름차순으로, 저자 ID가 같다면 카테고리를 내림차순 정렬해주세요.
*/