import sys
n = int(sys.stdin.readline().rstrip())
data = []
for _ in range(n):
    data.append(list(map(int,sys.stdin.readline().rstrip().split())))
data.sort()
for i in data:
    print(*i)