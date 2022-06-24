#n!의 5의 인수의 개수와 0의 개수는 같다!!
n= int(input())
count = int(0)
for i in range(1, n+1):
    a = i
    while a%5==0:
        count += 1
        a //= 5
answer=count
print(answer)