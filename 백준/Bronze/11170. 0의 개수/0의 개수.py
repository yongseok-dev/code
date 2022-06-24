t = int(input())
for _ in range(t):
    n,m = map(int, input().split())
    data = ""
    for i in range(n,m+1):
        data += str(i)
    answer = data.count(str(0))
    print(answer)