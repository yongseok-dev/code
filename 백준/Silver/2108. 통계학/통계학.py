import sys
n = int(sys.stdin.readline().rstrip())
data = []
for _ in range(n):
    data.append(int(sys.stdin.readline().rstrip()))
data.sort()

count = [0]*(data[-1]-data[0]+1)
if data[-1]!=data[0]:
    for i in data:
        count[i-data[0]] += 1
    check = []
    for i in range(len(count)):
        if count[i] == max(count):
            check.append(i+data[0])
            mode = i+data[0]
            if len(check)==2:
                mode=check[1]
                break
else:
    mode = data[0]
    
print(round(sum(data)/n))
print(data[n//2])
print(mode)
print(data[-1]-data[0])