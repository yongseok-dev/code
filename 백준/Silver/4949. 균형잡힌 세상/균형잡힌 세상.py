import sys
while True:
    a = sys.stdin.readline().rstrip()
    if a==".":
        break
    data = [0]
    point = int(0)
    for i in a:
        if i==" " or "A"<=i<="Z" or "a"<=i<="z":
            continue
        elif i=="(":
            data.append(1)
            point += 1
        elif i=="[":
            data.append(3)
            point += 1
        elif i==")":
            if data[point]==1:
                data.pop()
                point-=1
            else:
                data.append(2)
                point += 1
        elif i=="]":
            if data[point]==3:
                data.pop()
                point-=1
            else:
                data.append(4)
                point += 1
    if point:
        print("no")
    else:
        print("yes")