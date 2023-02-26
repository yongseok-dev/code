-- 코드를 입력하세요
SELECT hour, sum(count) AS count
FROM(
    SELECT TO_NUMBER(TO_CHAR(datetime,'hh24')) AS hour, COUNT(*) AS count
    FROM animal_outs
    GROUP BY TO_NUMBER(TO_CHAR(datetime,'hh24'))
    UNION SELECT 0 AS hour,0 AS count FROM DUAL
    UNION SELECT 1 AS hour,0 AS count FROM DUAL
    UNION SELECT 2 AS hour,0 AS count FROM DUAL
    UNION SELECT 3 AS hour,0 AS count FROM DUAL
    UNION SELECT 4 AS hour,0 AS count FROM DUAL
    UNION SELECT 5 AS hour,0 AS count FROM DUAL
    UNION SELECT 6 AS hour,0 AS count FROM DUAL
    UNION SELECT 7 AS hour,0 AS count FROM DUAL
    UNION SELECT 8 AS hour,0 AS count FROM DUAL
    UNION SELECT 9 AS hour,0 AS count FROM DUAL
    UNION SELECT 10 AS hour,0 AS count FROM DUAL
    UNION SELECT 11 AS hour,0 AS count FROM DUAL
    UNION SELECT 12 AS hour,0 AS count FROM DUAL
    UNION SELECT 13 AS hour,0 AS count FROM DUAL
    UNION SELECT 14 AS hour,0 AS count FROM DUAL
    UNION SELECT 15 AS hour,0 AS count FROM DUAL
    UNION SELECT 16 AS hour,0 AS count FROM DUAL
    UNION SELECT 17 AS hour,0 AS count FROM DUAL
    UNION SELECT 18 AS hour,0 AS count FROM DUAL
    UNION SELECT 19 AS hour,0 AS count FROM DUAL
    UNION SELECT 20 AS hour,0 AS count FROM DUAL
    UNION SELECT 21 AS hour,0 AS count FROM DUAL
    UNION SELECT 22 AS hour,0 AS count FROM DUAL
    UNION SELECT 23 AS hour,0 AS count FROM DUAL
)
GROUP BY hour
ORDER BY hour