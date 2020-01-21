function add(params1: number, params2: number): number {
    return params1 + params2
}


function add2 (...params1: number[]) : number{
    let total = 0



    params1.forEach((num) => {
        total += num
    })

    return total
}


console.log(add(2, 6))
console.log(add2(1,2,3,4,5,0))