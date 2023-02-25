SELECT flavor
FROM (
    SELECT flavor, SUM(total_order) AS total_order
    FROM(
        SELECT *
        FROM first_half
        UNION ALL
        SELECT *
        FROM july
    )
    GROUP BY flavor
    ORDER BY total_order DESC
)
WHERE ROWNUM < 4    