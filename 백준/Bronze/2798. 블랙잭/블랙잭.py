n,m = map(int,input().split())
data = list(map(int,input().split()))
hap = 0
for i in range(n-2):
    for j in range(i+1,n-1):
        for k in range(j+1,n):
            s = data[i]+data[j]+data[k]
            if s==m:
                hap=s
                # print(data[i],data[j],data[k])
                break
            elif s>hap and s<m:
                hap=s
print(hap)