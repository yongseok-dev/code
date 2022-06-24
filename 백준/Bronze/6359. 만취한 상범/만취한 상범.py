t = int(input())
for _ in range(t):
    n = int(input())
    data = [0]*(n+1)
    for i in range(1,n+1):#라운드
        for j in range(1,n+1):#방번호
            if j%i==0:
                data[j] = not data[j]
    print(data.count(1))