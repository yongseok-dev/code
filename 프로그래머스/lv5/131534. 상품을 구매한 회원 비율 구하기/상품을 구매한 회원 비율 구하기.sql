SELECT TO_CHAR(sales_date,'YYYY') AS year,TO_NUMBER(TO_CHAR(sales_date,'MM')) AS month,
-- 2021년에 가입한 전체 회원들 중 상품을 구매한 회원수
COUNT(DISTINCT os.user_id) AS puchased_users,
-- 2021년에 가입한 회원 중 상품을 구매한 회원수 / 2021년에 가입한 전체 회원 수 : 소수점 두번째자리에서 반올림
ROUND(COUNT(DISTINCT os.user_id)/(
    SELECT COUNT(DISTINCT user_id) 
    FROM user_info 
    WHERE joined >= TO_DATE('20210101','YYYYMMDD') 
        AND joined < TO_DATE('20220101','YYYYMMDD')
),1) AS puchased_ratio
-- USER_INFO 테이블과 ONLINE_SALE 테이블
FROM online_sale os LEFT JOIN user_info ui
    -- 상품을 구매한 회원
    ON os.user_id = ui.user_id
-- 2021년에 가입한 회원 
WHERE ui.joined >= TO_DATE('20210101','YYYYMMDD') 
    AND ui.joined < TO_DATE('20220101','YYYYMMDD')
-- 년, 월 별로 출력
GROUP BY TO_CHAR(sales_date,'YYYY'),TO_NUMBER(TO_CHAR(sales_date,'MM'))
-- 년:오름차순, 월:오름차순 정렬
ORDER BY year, month