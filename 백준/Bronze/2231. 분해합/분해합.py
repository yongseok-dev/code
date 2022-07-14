n = int(input())
data = [0]*(n+1)
for i in range(n+1):
    data[i] = i+sum(list(map(int,str(i))))
if data.count(n):
    print(data.index(n))
else:
    print(0)