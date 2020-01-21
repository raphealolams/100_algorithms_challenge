function addTwoDigits(nums: any): number {
    nums = nums.toString().split('')

    return parseInt(nums[0]) + parseInt(nums[1])
}

console.log(addTwoDigits(29))