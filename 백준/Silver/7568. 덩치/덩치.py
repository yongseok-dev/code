n = int(input())
data = []
rank_count = []
for _ in range(n):
    data.append(list(map(int,input().split())))
for i in data:
    temp = 1
    for j in data:
        if i[0]<j[0] and i[1]<j[1]:
            temp += 1
    rank_count.append(temp)
print(*rank_count)