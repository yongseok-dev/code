SELECT history_id, MIN(daily_fee*(1-NVL(DISCOUNT_RATE,0)/100)*(end_date-start_date+1)) AS fee
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY ccrh 
    LEFT JOIN CAR_RENTAL_COMPANY_CAR ccc
    ON ccrh.car_id = ccc.car_id 
    LEFT JOIN (SELECT * FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN) crcdp
    ON (ccc.car_type = crcdp.car_type 
        AND (end_date-start_date+1) >= TO_NUMBER(SUBSTR(duration_type,1,INSTR(duration_type,'일')-1)))
WHERE ccc.car_type = '트럭'
GROUP BY history_id
ORDER BY fee DESC, history_id DESC



-- SELECT history_id, MIN(daily_fee*(1-NVL(DISCOUNT_RATE,0)/100)*(end_date-start_date+1)) AS fee
-- FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY ccrh 
--     LEFT JOIN CAR_RENTAL_COMPANY_CAR ccc
--     ON ccrh.car_id = ccc.car_id 
--     LEFT JOIN (SELECT * FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN) crcdp
--     ON (ccc.car_type = crcdp.car_type 
--         AND (end_date-start_date+1) >= REGEXP_REPLACE(duration_type, '[^0-9]+'))
-- WHERE ccc.car_type = '트럭'
-- GROUP BY history_id
-- ORDER BY fee DESC, history_id DESC;