n = int(input())
row = []
data = []
#초기값

for i in range(n):
    word = str(input())
    if word not in row:
        lnt = str("0"*int(len(word)<10)+str(len(word)))
        data.append(str(lnt)+" "+word)
        row.append(word)
data.sort()
#최종

for i in data:
    print(i.split()[1])
#출력