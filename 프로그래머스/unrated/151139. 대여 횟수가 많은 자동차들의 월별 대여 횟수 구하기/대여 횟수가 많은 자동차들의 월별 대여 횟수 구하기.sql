-- 코드를 입력하세요
SELECT month, car_id, COUNT(*) AS records
FROM (
    SELECT TO_NUMBER(TO_CHAR(start_date,'MM')) AS month, car_id
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
    WHERE TO_CHAR(start_date,'YYYYMM') BETWEEN '202208' AND '202210'
)
WHERE car_id IN(
    SELECT car_id
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
    WHERE TO_CHAR(start_date,'YYYYMM') BETWEEN '202208' AND '202210'
    GROUP BY car_id
    HAVING COUNT(*)>=5
)
GROUP BY month, car_id
ORDER BY month, car_id DESC;