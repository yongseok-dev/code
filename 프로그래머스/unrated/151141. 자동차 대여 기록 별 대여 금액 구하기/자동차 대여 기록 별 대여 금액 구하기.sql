-- 코드를 입력하세요
SELECT history_id, MIN((end_date-start_date+1)*(100-NVL(DISCOUNT_RATE,0))*daily_fee/100) AS fee
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY ccrh 
LEFT JOIN CAR_RENTAL_COMPANY_CAR ccc
ON ccrh.car_id = ccc.car_id 
LEFT JOIN (SELECT * FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN) crcdp
ON (ccc.car_type = crcdp.car_type AND (end_date-start_date+1) >= REGEXP_REPLACE(duration_type, '[^0-9]+'))
WHERE ccc.car_type = '트럭'
GROUP BY history_id
ORDER BY fee DESC, history_id DESC;