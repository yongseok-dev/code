import sys
n = int(sys.stdin.readline().rstrip())
data = [0]
point = int(0)

for i in range(n):
    com = sys.stdin.readline().rstrip().split()
    if len(com)>1:
        data.append(com[1])
        point += 1
    elif com[0]=="pop":
        if point==0:
            print(-1)
        else:
            a = data.pop()
            print(a)
            point -= 1
    elif com[0]=="size":
        print(point)
    elif com[0]=="empty":
        if point==0:
            print(1)
        else:
            print(0)
    elif com[0]=="top":
        if point==0:
            print(-1)
        else:
            print(data[point])