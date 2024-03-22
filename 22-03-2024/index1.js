let s = "meet"
let t = "temm"



function Anagram(s,t){
    let arr1 = []
    let arr2 = []
    if (s.length !== t.length) {
         return false;
     }
     for (let i = 0; i < s.length; i++) {
         arr1.push(s[i])
         arr2.push(t[i])
     }
 
     arr1.sort()
     arr2.sort()
     
 
     let ans1 = arr1.join()
     let ans2 = arr2.join()
 
     console.log(ans1)
     console.log(ans2)
 
     return ans1 === ans2
 
 }

console.log(Anagram(s,t))