/* Write your PL/SQL query statement below */
SELECT firstname, lastname, city, state
FROM person p
LEFT JOIN address a
ON p.personid=a.personid