import sys
n,k = map(int,sys.stdin.readline().rstrip().split())
point = 0
data = [i for i in range(1,n+1)]
show = []
for i in range(len(data)):
    point = (point+k-1)%len(data)
    show.append(data[point])
    data.remove(data[point])
s = "<"
for i in range(len(show)-1):
    s += str(show[i])+", "
s += str(show[-1])+">"
print(s)