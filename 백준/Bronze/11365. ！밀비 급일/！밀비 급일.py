while True:
    a = str(input())
    if a=="END":
        break
    answer = ""
    for i in a:
        answer = i+answer
    print(answer)