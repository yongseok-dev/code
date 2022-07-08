import sys
t= int(sys.stdin.readline().rstrip())
data = [[10],[1],[6,2,4,8],[1,3,9,7],[6,4],[5],[6],[1,7,9,3],[6,8,4,2],[1,9]]
for i in range(t):
    a,b = map(int, sys.stdin.readline().rstrip().split())
    a%=10
    b%=len(data[a])
    if a==0 or a==1 or a==5 or a==6:
        print(data[a][0])
    else:
        print(data[a][b])