-- 코드를 입력하세요
SELECT DISTINCT(ccc.car_id)
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY ccrh LEFT JOIN CAR_RENTAL_COMPANY_CAR ccc
ON ccrh.CAR_ID = ccc.CAR_ID
WHERE ccc.car_type = '세단' AND TO_CHAR(ccrh.start_date,'MM')=10
ORDER BY car_id DESC