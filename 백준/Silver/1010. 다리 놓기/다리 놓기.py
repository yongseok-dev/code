import sys
t = int(sys.stdin.readline().rstrip())
for i in range(t):
    a,b = map(int,sys.stdin.readline().rstrip().split())
    s = 1
    for j in range(a):
        s *= (b/a)
        b-=1
        a-=1
    print(round(s))