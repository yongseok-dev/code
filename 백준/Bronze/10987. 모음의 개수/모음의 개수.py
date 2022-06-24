s = str(input())
check = list(map(str, "a, e, i, o, u".split(", ")))
count = int(0)
for i in s:
    if i in check:
        count += 1
print(count)