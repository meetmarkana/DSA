function isHappy(number){
    let num = new Set()

    while(number !== 1){
        let sum = 0
        while (number > 0){
            let digit = number % 10
            sum += digit * digit
            number = Math.floor(number / 10)
        }
        if (num.has(sum)){
            return false
        }
        num.add(sum)
        number = sum
    }
    return true
}
console.log(isHappy(2))