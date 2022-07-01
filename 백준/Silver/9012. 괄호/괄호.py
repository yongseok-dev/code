n = int(input())
for i in range(n):
    data = [""]
    point = 0
    s = input()
    for j in str(s):
        if point==0 or j==data[point] or j==data[point] or j=="(":
            data.append(j)
            point += 1
        else:
            data.pop()
            point -= 1
        # print(j,data)
    if point:
        print("NO")
    else:
        print("YES")