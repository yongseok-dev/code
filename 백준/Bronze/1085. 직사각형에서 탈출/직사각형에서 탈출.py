x, y, w, h = map(int,input().split())
print(min(list(map(abs,[x,y,w-x,h-y]))))