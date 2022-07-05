import sys
def factorial(a):
    if a:
        for i in range(a-1,1,-1):
            a *= i
    else:
        a = 1
    return a
def binomial_coefficient(n,r):
    a = factorial(n)/factorial(n-r)/factorial(r)
    return int(a)
n,r = map(int,sys.stdin.readline().rstrip().split())
print(binomial_coefficient(n,r))