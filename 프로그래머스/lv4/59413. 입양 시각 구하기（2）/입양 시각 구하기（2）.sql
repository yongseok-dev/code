SELECT hour, sum(count) AS count
FROM(
    SELECT TO_NUMBER(TO_CHAR(datetime,'hh24')) AS hour, COUNT(*) AS count
    FROM animal_outs
    GROUP BY TO_NUMBER(TO_CHAR(datetime,'hh24'))
    UNION 
    SELECT LEVEL - 1 AS HOUR, 0 AS count
    FROM DUAL
    CONNECT BY LEVEL < 25 
)
GROUP BY hour
ORDER BY hour

