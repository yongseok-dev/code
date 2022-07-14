class Solution:
    def isPalindrome(self, x: int) -> bool:
        s = str(x)
        answer = True
        
        for i in range(len(s)):
            if s[i]!=s[-1-i]:
                answer = False
                
        return answer
        