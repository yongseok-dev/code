SELECT COUNT(*)
FROM user_info
WHERE TO_CHAR(joined,'YY')='21' 
    AND age BETWEEN 20 AND 29;