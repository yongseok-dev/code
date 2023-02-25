SELECT TO_CHAR(sales_date,'YYYY') AS year,TO_NUMBER(TO_CHAR(sales_date,'MM')) AS month,
-- 2021년에 가입한 전체 회원들 중 상품을 구매한 회원수
COUNT(DISTINCT os.user_id) AS puchased_users,
-- 소수점 두번째자리에서 반올림: 2021년에 가입한 회원 중 상품을 구매한 회원수/2021년에 가입한 전체 회원 수(인라인 뷰)
ROUND(COUNT(DISTINCT os.user_id)/(
        SELECT COUNT(DISTINCT user_id) 
        FROM user_info 
        WHERE TO_CHAR(joined,'YYYY') = '2021'
),1) AS puchased_ratio
FROM online_sale os LEFT JOIN user_info ui
    ON os.user_id = ui.user_id
WHERE TO_CHAR(ui.joined,'YYYY') = '2021'
GROUP BY TO_CHAR(sales_date,'YYYY'),TO_NUMBER(TO_CHAR(sales_date,'MM'))
ORDER BY year, month