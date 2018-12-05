var sum_pairs = function(ints, s) {
    var map = {}
    var pair 
    var pairMax = ints.length - 1;
        for (var i = 0; i <= pairMaxIndex; i++) {
            var a = ints[i];
            var b = s - a;
            var j = map[b];
            if (j !== undefined && i <= pairMax && j <= pairMax) {
                pairMax = i > j ? i : j;
                pair = i < j ? [a, b] : [b, a];
            }
            var tmp = map[a];
            if (tmp === undefined || i < tmp) {
                map[a] = i;
            }
        }
        return pair;
        console.log(map)
        console.log(pair)
    };

sum_pairs([1,3,4,5,6,7,8,9,3,4,2,5], 14)

// var tester = function(){
//     var test = [], player, dope = 1+5;
//     test.push('t')
//     console.log(dope)
// }

// tester()