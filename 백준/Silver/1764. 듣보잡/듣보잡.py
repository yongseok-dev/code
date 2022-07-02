import sys
n,m = map(int,sys.stdin.readline().rstrip().split())
data = []
output = []
for i in range(n+m):
    data.append(sys.stdin.readline().rstrip())
data.sort()
for i in range(n+m-1):
    if data[i]==data[i+1]:
        output.append(data[i])
print(len(output))
for i in output:
    print(i)