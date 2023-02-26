SELECT apnt_no,pt_name,apnt.pt_no,apnt.mcdp_cd,dr.dr_name,apnt_ymd
FROM appointment apnt 
    LEFT JOIN doctor dr
    ON apnt.mddr_id = dr.dr_id 
    LEFT JOIN patient pt
    ON apnt.pt_no = pt.pt_no
WHERE apnt.apnt_ymd >= TO_DATE('20220413','YYYYMMDD') 
    AND apnt.apnt_ymd < TO_DATE('20220414','YYYYMMDD') 
    AND apnt_cncl_ymd IS NULL 
    AND apnt.mcdp_cd='CS'
ORDER BY apnt_ymd