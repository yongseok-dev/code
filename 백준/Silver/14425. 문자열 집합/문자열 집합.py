import sys
n,m = map(int,sys.stdin.readline().rstrip().split())
checker = []
for _ in range(n):
    checker.append(str(sys.stdin.readline().rstrip()))
count = 0
for _ in range(m):
    s = str(sys.stdin.readline().rstrip())
    if s in checker:
        count += 1
print(count)