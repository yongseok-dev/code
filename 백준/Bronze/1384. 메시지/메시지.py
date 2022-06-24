k = int(0)
while True:
    k += 1
    t = int(input())
    if t==0:
        break
    data=[]
    n = int(0)
    for i in range(t):
        temp = list(map(str, input().split()))
        data.append(temp)
    if k>1:
        print("")
    print("Group "+str(k))
    for i in range(t):
        for j in range(1,t):
            if "N" == data[i][j]:
                a = (i-j+t)%t
                n += 1
                print(str(data[a][0])+" was nasty about "+str(data[i][0]))
    if n==0:
        print("Nobody was nasty")