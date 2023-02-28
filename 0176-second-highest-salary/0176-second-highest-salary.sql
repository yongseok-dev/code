/* Write your PL/SQL query statement below */
SELECT (CASE WHEN salary>-1 THEN salary ELSE NULL END) AS SecondHighestSalary 
FROM(
    SELECT ROWNUM AS RN, salary
    FROM (
        SELECT DISTINCT salary
        FROM (
            SELECT *
            FROM employee
            UNION
            SELECT NULL, (-1)
            FROM DUAL
        )
        ORDER BY salary DESC
    )
)
WHERE RN = 2;