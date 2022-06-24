k = int(input())
data = []
for _ in range(k):
    t = int(input())
    if t:
        data.append(t)
    else:
        data.pop()
print(sum(data))