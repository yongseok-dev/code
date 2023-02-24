-- 코드를 입력하세요
SELECT *
FROM(
    SELECT crcc.car_id, crcc.car_type, 30*crcc.daily_fee*(1-crcdp.discount_rate/100) AS FEE
    FROM CAR_RENTAL_COMPANY_CAR crcc LEFT JOIN (
        SELECT * 
        FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN 
        WHERE duration_type = '30일 이상'
    ) crcdp
    ON crcc.car_type=crcdp.car_type
    WHERE crcc.car_type IN('SUV','세단') AND crcc.car_id IN(
        SELECT car_id
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
        GROUP BY car_id
        HAVING MAX(CASE WHEN TO_DATE('2022-11-01','YYYY-MM-DD') BETWEEN start_date AND end_date THEN 1
                   WHEN TO_DATE('2022-11-30','YYYY-MM-DD') BETWEEN start_date AND end_date THEN 1 
                   ELSE 0 END)=0
    ) 
)
WHERE FEE>=500000 AND FEE<2000000
ORDER BY FEE DESC, car_type ASC, car_id DESC;

