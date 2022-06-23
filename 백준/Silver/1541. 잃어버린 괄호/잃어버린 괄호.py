data = str(input())
sp = data.split("-")
output = int(0)
for i in range(len(sp)):
    if i == 0:
        temp = list(map(int, sp[i].split("+")))
        for j in range(len(temp)):
            output+=temp[j]
    else:
        temp = list(map(int, sp[i].split("+")))
        for j in range(len(temp)):
            output-=temp[j]
print(output)