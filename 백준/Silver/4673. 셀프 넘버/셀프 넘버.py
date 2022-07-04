n = 10000
data = [1]*(n+1)
for i in range(n):
    a = i+sum(map(int, str(i)))
    if a<=n:
        data[a] = 0
for i in range(1,len(data)):
    if data[i]:
        print(i)