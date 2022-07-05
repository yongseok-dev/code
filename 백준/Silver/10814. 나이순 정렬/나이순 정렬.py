import sys
n = int(sys.stdin.readline().rstrip())
data = []
for i in range(n):
    member_age,member_name = sys.stdin.readline().rstrip().split()
    data.append((int(member_age),int(i),str(member_name)))
data.sort()
for i in data:
    print(i[0],i[2])
#문제를 올바르게 읽는 훈련이 필요합니다.