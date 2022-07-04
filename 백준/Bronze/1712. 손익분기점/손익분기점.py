A,B,C = map(int,input().split())
if B>=C:
    print(-1)
else:
    i = int(A/(C-B))
    while A>=(C-B)*i:
        i+=1    
    print(i)