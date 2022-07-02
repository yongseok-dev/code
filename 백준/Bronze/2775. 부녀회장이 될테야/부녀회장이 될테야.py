import sys
t = int(sys.stdin.readline().rstrip())
data = []
input_data_k = []
input_data_n = []
for i in range(t):
    input_data_k.append(int(sys.stdin.readline().rstrip()))
    input_data_n.append(int(sys.stdin.readline().rstrip()))
# print(input_data_k,input_data_n)
for j in range(max(input_data_k)+1):
    temp = []
    for i in range(1,max(input_data_n)+1):
        if j:
            # print(j,i)
            temp.append(sum(data[j-1][:i]))
        else:
            temp.append(i)
    data.append(temp)
# print(data)
for i in range(t):
    print(data[input_data_k[i]][input_data_n[i]-1])