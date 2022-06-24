data = list(map(str,input().split("-")))
answer = ""
for i in range(len(data)):
    answer += data[i][0]
print(answer)