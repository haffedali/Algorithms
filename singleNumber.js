var singleNumber = function(nums) {
    let seen = {}
    for (let i=0; i<nums.length; i++){
        let dictNum = String(nums[i]);
        if (!seen[dictNum]){
            seen[dictNum] = 1;
        }else{
            seen[dictNum] += 1;
        }
        }
    // var ans = seen.find(obj => {
    //     return obj.b === 1
    // })
    console.log(seen);

};

singleNumber([1,2,3,4,5,6,1,2,3,4,5])