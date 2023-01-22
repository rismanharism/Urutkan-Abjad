let str = "hello"

// function urutkanAbjad(str) {
//     // you can only write your code here!
//     let arr = []
//     for (let i = 0; i < arr.length; i++) {
//         arr.push(str[i])
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i]
//             arr[i] = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i - 1] = temp
//         }
//     }
//     let sorted = false;
//     while (sorted === false) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 sorted = true;
//                 let temp = arr[i]
//                 arr[i] = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i - 1] = temp
//             }
//         }
//         if (sorted === true) {
//             sorted = false
//         } else {
//             break;
//         }
//     }
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         result += arr[i] 
//     }
//     return result
// }

// ==============================================================================

function urutkanAbjad(str) {
    let result = ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < alphabet.length; i++) { // ngeloop perhuruf alphabet
        for (let j = 0; j < str.length; j++) { // neloop perhuruf str
            if (alphabet[i] === str[j]) { // jika alphabet perhuruf sama dengan str perhuruf
                result += str[j]    // maka strperhuruf di tambahkan re result
            }
        }
    }
    return result // ehllo
}

// =======================================================================================

function urutkanAbjad(str) {
    // you can only write your code here!
    const arrStr = [];
    let temp = '';
    let sorted = false;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        arrStr.push(str[i]);
    }

    while (!sorted) {
        sorted = true;

        for (let i = 1; i < arrStr.length; i++) {
            if (arrStr[i - 1] > arrStr[i]) {
                temp = arrStr[i - 1];
                arrStr[i - 1] = arrStr[i];
                arrStr[i] = temp;
                sorted = false;
            }
        }
    }

    for (let i = 0; i < arrStr.length; i++) {
        result += arrStr[i];
    }

    return result;
}

