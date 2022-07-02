import sys
#1 문제 정보 받기
t = int(sys.stdin.readline().rstrip())
input_data_k = []
input_data_n = []
for i in range(t):
    input_data_k.append(int(sys.stdin.readline().rstrip()))
    input_data_n.append(int(sys.stdin.readline().rstrip()))
# print(input_data_k,input_data_n)

#2 계산하기: 주어지는 조건의 최대값을 활용 1회만 계산
data = []
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

#3 문제 조건에 따른 출력
for i in range(t):
    print(data[input_data_k[i]][input_data_n[i]-1])
