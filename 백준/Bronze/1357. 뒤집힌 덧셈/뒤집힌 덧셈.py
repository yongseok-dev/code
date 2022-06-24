def rev(x):
    rx = ""
    for i in str(x):
        rx = i+rx
    x = int(rx)
    return x

#Rev(Rev(X) + Rev(Y))
x,y = map(str,input().split())
s = rev(x)+rev(y)
print(rev(s))