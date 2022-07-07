import sys
n = int(sys.stdin.readline().rstrip())
a = list(map(int,sys.stdin.readline().rstrip().split()))
b,c = map(int,sys.stdin.readline().rstrip().split())
#n:시험장, a:응시자, b:감시가능(정), c:감시가능(부)
count = n
for i in a:
    if i-b>0:
        count+=((i-b)//c+int((i-b)%c!=0))
print(count)