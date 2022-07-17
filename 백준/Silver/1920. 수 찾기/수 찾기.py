def bi(arr,num):
    st,en = 0,len(arr)-1
    if num>arr[-1] or num<arr[0]:
        return 0
    else:
        while en>=st:
            mid = (st+en)//2
            if arr[mid]<num:
                st = mid+1
            elif arr[mid]>num:
                en = mid-1
            else:
                return 1
        return 0

n = input()
n_data = list(map(int,input().split()))
n_data.sort()
m = input()
m_data = list(map(int,input().split()))
for i in m_data:
    print(bi(n_data,i))