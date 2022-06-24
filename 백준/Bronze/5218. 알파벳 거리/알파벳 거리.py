t = int(input())
for _ in range(t):
    a,b = map(str,input().split())
    output="Distances:"
    for i in range(len(a)):
        c = ord(b[i])-ord(a[i])
        if c<0:
            c = 26+c
        output += " "+str(c)
    print(output)