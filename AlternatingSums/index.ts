function alternatingSums(params: number[]): number [] {
    let evenSum = 0;
    let oddSum = 0;

    params.forEach((element, index) => {
        if (index % 2 !== 0) {
            oddSum += element
        }
        else {
            evenSum += element
        }
    })


    return [evenSum, oddSum];
}


console.log(alternatingSums( [50, 60, 60, 45, 70]))