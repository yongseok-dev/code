-- 코드를 입력하세요
SELECT animal_id, name
FROM(
    SELECT ao.animal_id, ao.name, (ao.datetime-ai.datetime) AS time
    FROM animal_outs ao LEFT JOIN animal_ins ai
    ON ao.animal_id = ai.animal_id
    WHERE ai.animal_id IS NOT NULL
    ORDER BY time DESC
)
WHERE ROWNUM<3;
    