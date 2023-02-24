SELECT *
FROM(
    SELECT crcc.car_id, crcc.car_type, 30*crcc.daily_fee*(1-crcdp.discount_rate/100) AS FEE
    FROM CAR_RENTAL_COMPANY_CAR crcc LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN crcdp
    ON crcc.car_type=crcdp.car_type AND crcdp.duration_type='30일 이상'
    -- 자동차 종류가 '세단' 또는 'SUV' 
    WHERE crcc.car_type IN('SUV','세단')
    -- 2022년 11월 1일부터 2022년 11월 30일까지 대여 가능
    AND crcc.car_id IN(
        SELECT car_id
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
        GROUP BY car_id
        HAVING MAX(CASE WHEN TO_DATE('2022-11-01','YYYY-MM-DD') BETWEEN start_date AND end_date THEN 1
                   WHEN TO_DATE('2022-11-30','YYYY-MM-DD') BETWEEN start_date AND end_date THEN 1 
                   ELSE 0 END)=0
    ) 
)
-- 30일간의 대여 금액이 50만원 이상 200만원 미만
WHERE FEE>=500000 AND FEE<2000000
-- 결과는 대여 금액(내림차순),자동차 종류(오름차순),자동차 ID(내림차순) 정렬
ORDER BY FEE DESC, car_type ASC, car_id DESC;