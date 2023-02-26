-- 코드를 입력하세요
SELECT *
FROM(
    SELECT TO_CHAR(sales_date,'YYYY-MM-DD') AS sales_date, product_id, user_id, sales_amount
    FROM online_sale
    WHERE sales_date>=TO_DATE('20220301','YYYYMMDD') AND sales_date<TO_DATE('20220401','YYYYMMDD')
    UNION ALL
    SELECT TO_CHAR(sales_date,'YYYY-MM-DD') AS sales_date, product_id, NULL AS user_id, sales_amount
    FROM offline_sale
    WHERE sales_date>=TO_DATE('20220301','YYYYMMDD') AND sales_date<TO_DATE('20220401','YYYYMMDD')
)
ORDER BY sales_date, product_id, user_id

/*
ONLINE_SALE 테이블과 OFFLINE_SALE 테이블에서 
2022년 3월의 오프라인/온라인 상품 판매 데이터의 
판매 날짜, 상품ID, 유저ID, 판매량을 출력하는 SQL문을 작성해주세요. 

OFFLINE_SALE 테이블의 판매 데이터의 USER_ID 값은 NULL 로 표시

해주세요. 결과는 판매일을 기준으로 오름차순 정렬해주시고 판매일이 같다면 상품 ID를 기준으로 오름차순, 상품ID까지 같다면 유저 ID를 기준으로 오름차순 정렬해주세요.
*/