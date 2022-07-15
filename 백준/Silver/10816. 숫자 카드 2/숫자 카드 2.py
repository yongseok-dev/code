n = int(input())
data = list(map(int,input().split()))
data_count1 = [0]*10000001
data_count2 = [0]*10000001
for i in data:
    if i>-1:
        data_count1[i] += 1
    else:
        data_count2[-i] += 1

m = int(input())
check = list(map(int,input().split()))
output = []
for i in check:
    if i>-1:
        output.append(data_count1[i])
    else:
        output.append(data_count2[-i])
print(*output)