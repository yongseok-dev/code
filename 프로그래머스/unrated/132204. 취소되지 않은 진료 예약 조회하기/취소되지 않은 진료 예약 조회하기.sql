-- 코드를 입력하세요
SELECT apnt_no,pt_name,apnt.pt_no,apnt.mcdp_cd,dr.dr_name,apnt_ymd
FROM appointment apnt LEFT JOIN doctor dr
ON apnt.mddr_id = dr.dr_id 
LEFT JOIN patient pt
ON apnt.pt_no = pt.pt_no
WHERE apnt.apnt_ymd >= TO_DATE('20220413','YYYYMMDD') 
    AND apnt.apnt_ymd < TO_DATE('20220414','YYYYMMDD') 
    AND apnt_cncl_ymd IS NULL 
    AND apnt.mcdp_cd='CS'
ORDER BY apnt_ymd
/*
PATIENT, DOCTOR 그리고 APPOINTMENT 테이블
예약 내역 < 의사정보 < 환자정보
2022년 4월 13일 취소되지 않은 흉부외과(CS) 진료 예약 내역을 조회하는 SQL문을 작성
진료예약번호, 환자이름, 환자번호, 진료과코드, 의사이름, 진료예약일시 항목이 출력
결과는 진료예약일시를 기준으로 오름차순 정렬
*/