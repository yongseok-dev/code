n = int(input())
m,k = n,int(1)
for i in range(1,n+1):
    if m<=0:
        break
    else:
        m -= i
        k = i
if k%2:#홀수
    print("{0}/{1}".format(abs(m)+1,k+m))
else:#짝수
    print("{0}/{1}".format((m+k),abs(m)+1))