import sys
while True:
    n = int(sys.stdin.readline().rstrip())
    if n:
        n1=""
        for i in str(n):
            n1 = i+n1
        if str(n)==n1:
            print("yes")
        else:
            print("no")
    else:
        break