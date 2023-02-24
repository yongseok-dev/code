-- 코드를 입력하세요
SELECT car_id, CASE WHEN SUM(AVAILABILITY)=1 THEN '대여중' ELSE '대여 가능' END AS AVAILABILITY
FROM(
SELECT car_id, CASE WHEN (TO_CHAR(end_date,'YYYY-MM-DD')>='2022-10-16' AND TO_CHAR(start_date,'YYYY-MM-DD')<='2022-10-16') THEN 1
                    ELSE 0 END AS AVAILABILITY
FROM car_rental_company_rental_history
)
GROUP BY car_id
ORDER BY car_id DESC