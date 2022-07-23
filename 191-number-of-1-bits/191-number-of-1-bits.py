class Solution:
    def hammingWeight(self, n: int) -> int:
        temp = 0
        n = int(n)
        while n>0:
            temp += n%2
            n//=2
        return temp