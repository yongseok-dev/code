n = int(input())
counter = int(0)
#초기값

if n>=100:
    counter = 99
else:
    counter = n
#중간

for i in range(100,n+1):
    if i==1000:
        break
    else:
        data = list(map(int,str(i)))
        if data[0]-data[1]==data[1]-data[2]:
            counter += 1
#최종

print(counter)
#출력

#실수 발생, 중간단계에서 n>=100을 n>100으로 설정... 실수를 반복하지 않도록하자