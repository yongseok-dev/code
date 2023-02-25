/*
MEMBER_PROFILE와 REST_REVIEW 테이블
에서 리뷰를 가장 많이 작성한 회원의 리뷰들을 조회하는 SQL문을 작성
회원 이름, 리뷰 텍스트, 리뷰 작성일이 출력
mp.member_name, rr.review_text, rr.review_date
결과는 리뷰 작성일을 기준으로 오름차순, 리뷰 작성일이 같다면 리뷰 텍스트를 기준으로 오름차순 정렬
*/

SELECT mp.member_name, rr.review_text, TO_CHAR(rr.review_date,'YYYY-MM-DD') AS review_date
FROM REST_REVIEW rr LEFT JOIN MEMBER_PROFILE mp
ON rr.member_id = mp.member_id
WHERE mp.member_id IN (
    SELECT member_id
    FROM (SELECT member_id, COUNT(*) AS count_review
        FROM rest_review
        GROUP BY member_id
        ORDER BY count_review DESC)
    WHERE count_review = (
        SELECT count_review
        FROM (
            SELECT member_id, COUNT(*) AS count_review
            FROM rest_review
            GROUP BY member_id
            ORDER BY count_review DESC)
        WHERE ROWNUM = 1))
ORDER BY rr.review_date, review_date