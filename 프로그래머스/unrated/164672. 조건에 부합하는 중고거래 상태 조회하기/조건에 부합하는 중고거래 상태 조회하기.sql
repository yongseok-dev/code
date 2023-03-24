-- 코드를 입력하세요
SELECT BOARD_ID,	WRITER_ID,	TITLE,	PRICE,	
    (CASE WHEN STATUS='SALE' THEN '판매중'
    WHEN STATUS='RESERVED' THEN '예약중'
    WHEN STATUS='DONE'THEN '거래완료'
    ELSE '' END) AS STATUS
FROM USED_GOODS_BOARD
WHERE CREATED_DATE=TO_DATE('20221005','YYYYMMDD')
ORDER BY BOARD_ID DESC
--2022년 10월 5일에 등록된 중고거래 게시물의 게시글 ID, 작성자 ID, 게시글 제목, 가격, 거래상태를 조회하는 SQL문을 작성해주세요. 
--거래상태가 분류하여 출력해주시고, 