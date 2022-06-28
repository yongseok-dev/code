n = int(input())
expenses = 0.8
tariff = 0.22
case1 = n*(1-tariff)
case2 = n*(1-(1-expenses)*tariff)
print(int(case1), int(case2))