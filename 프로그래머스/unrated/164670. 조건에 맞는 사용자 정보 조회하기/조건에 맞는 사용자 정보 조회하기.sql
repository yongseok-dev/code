-- 코드를 입력하세요
--USED_GOODS_BOARD와 USED_GOODS_USER 테이블에서 
--중고 거래 게시물을 3건 이상 등록한 사용자
--사용자 ID, 닉네임, (시, 도로명 주소, 상세 주소)전체주소, (xxx-xxxx-xxxx)전화번호를 조회하는 SQL문을 작성해주세요. .
--결과는 회원 ID를 기준으로 내림차순 정렬해주세요.
SELECT USER_ID,	NICKNAME,	(CITY||' '||STREET_ADDRESS1||' '||STREET_ADDRESS2) 전체주소,	SUBSTR(TLNO,1,3)||'-'||SUBSTR(TLNO,4,4)||'-'||SUBSTR(TLNO,8,4) 전화번호
FROM USED_GOODS_USER
WHERE USER_ID IN(
    SELECT WRITER_ID FROM USED_GOODS_BOARD GROUP BY WRITER_ID HAVING COUNT(*)>=3
)
ORDER BY USER_ID DESC