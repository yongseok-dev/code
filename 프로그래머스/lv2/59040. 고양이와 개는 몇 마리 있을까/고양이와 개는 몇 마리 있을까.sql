-- 코드를 입력하세요
SELECT animal_type, COUNT(*)
FROM animal_ins 
WHERE animal_type = 'Cat' OR animal_type = 'Dog'
GROUP BY animal_type
ORDER BY animal_type