// khai bao ham tim min trong day
function minArray(arr) {
    if (arr.length === 0) {
        alert("-1");
    } else {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

}
// su dung ham
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let min_arr1 = minArray(arr1);
alert(min_arr1);

let arr2 = [7, 12, 6, 9, 20, 56, 89]
let min_arr2 = minArray(arr2);
alert(min_arr2);

let arr3 = [];
let min_arr3 = minArray(arr3);
alert(min_arr3);

let arr4 = [0, 0, 0, 0, 0, 0];
let min_arr4 = minArray(arr4);
alert(min_arr4);
