import sys
m,n = map(int,sys.stdin.readline().rstrip().split())
data = [1]*(n+1)
data[0],data[1] = 0,0
for i in range(2,n+1):
    if data[i]:
        for j in range(2,n//i+1):
            data[i*j]=0
for i in range(m,n+1):
    if data[i]:
        print(i)