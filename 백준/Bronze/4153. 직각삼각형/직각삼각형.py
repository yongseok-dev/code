import sys
while True:
    a,b,c = map(int, sys.stdin.readline().rstrip().split())
    a,b,c = a**2,b**2,c**2
    if a+b+c==0:
        break
    else:
        if a==b+c or a+b==c or a+c==b:
            print("right")
        else:
            print("wrong")