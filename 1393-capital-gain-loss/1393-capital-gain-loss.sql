/* Write your PL/SQL query statement below */
SELECT stock_name, sum(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss
FROM stocks
GROUP BY stock_name