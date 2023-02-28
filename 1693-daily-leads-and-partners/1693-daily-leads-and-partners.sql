/* Write your PL/SQL query statement below */
SELECT TO_CHAR(date_id,'YYYY-MM-DD') AS date_id, make_name, count(DISTINCT lead_id) AS unique_leads, count(DISTINCT partner_id) AS unique_partners 
FROM dailysales
GROUP BY TO_CHAR(date_id,'YYYY-MM-DD'), make_name;


