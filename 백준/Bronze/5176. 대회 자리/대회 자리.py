t = int(input())
for j in range(t):
    p,m = map(int, input().split())
    data = [0]*501
    count = int(0)
    for i in range(p):
        a= int(input())
        if data[a]:
            count+=1
        else:
            data[a]+=1
    if p-count>m:
        print(p-m)
    else:
        print(count)