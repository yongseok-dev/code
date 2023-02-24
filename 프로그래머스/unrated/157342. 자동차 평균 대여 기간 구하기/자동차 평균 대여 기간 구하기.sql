-- 코드를 입력하세요
-- SELECT * 
-- FROM (SELECT car_id, ROUND(AVG(end_date-start_date+1),1) AS AVERAGE_DURATION
--         FROM car_rental_company_rental_history
--     GROUP BY car_id)
-- WHERE AVERAGE_DURATION>7
-- ORDER BY AVERAGE_DURATION DESC, car_id DESC;

SELECT car_id, ROUND(AVG(end_date-start_date+1),1) AS AVERAGE_DURATION
FROM car_rental_company_rental_history
GROUP BY car_id
HAVING ROUND(AVG(end_date-start_date+1),1) > 7
ORDER BY AVERAGE_DURATION DESC, car_id DESC;