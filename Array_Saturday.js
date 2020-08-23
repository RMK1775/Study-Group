var exampleArray = [
    ['1', '2', '3'],
    ['4', '5', '6' ],
    ['7', '8', '9']
]

function arrToCsv(arr){
    let [first, second, third] = arr
    return [first.join(','), second.join(','), third.join(',')].join('\n');
}

console.log(arrToCsv(exampleArray));

var exampleCsv = "1, 2, 3\n4, 5, 6\n7, 8, 9"

csvToArr(exampleCsv);

function csvToArr(csv){
    let csvArr =csv.split('\n');
    console.log(csvArr)
    let finalArr = [];
    for(let i = 0; i < csvArr.length; i++){
        finalArr.push(csvArr[i].split(','));
    }
    console.log(finalArr);
}
function csvToArray(csv){
    let csvArr = csv.split('\n')
    let numbersArr = []
    for (let i = 0; i < csvArr.length; i++){
        let chunks = csvArr[i].split(',')
        for (let j = 0; j < chunks.length; j++){
            let chunk = Number(chunks[j])
            chunks.splice(j,1,chunk)
        }
        numbersArr.push(chunks)
    }
    return numbersArr
}

console.log(csvToArray(exampleCsv))

function csvToArrMap(csv){
    let csvArr = csv.split(',').map( chunks => chunks.split(',').map(Number))
    return csvArr
}
