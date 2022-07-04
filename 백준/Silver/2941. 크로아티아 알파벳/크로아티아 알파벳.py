import sys
s = str(sys.stdin.readline().rstrip())
data = ["c=","c-","dz=","d-","lj","nj","s=","z="]
n = len(s)
for i in data:
    n -= s.count(i)
print(n)