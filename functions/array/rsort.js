function rsort (inputArr, sort_flags) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir
    // *     example 1: rsort(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 2: rsort(fruits);
    // *     returns 2: true
    // *     results 2: fruits == {0: 'orange', 1: 'lemon', 2: 'banana', 3: 'apple'}

    var valArr = [], keyArr=[];
    var k = '', i = 0;
    
    for (k in inputArr) { // Get key and value arrays
        valArr.push(inputArr[k]);
        delete inputArr[k] ;
    }

    var sorter = false;

    // For now only SORT_NUMERIC has a custom sorter
    // and SORT_REGULAR, SORT_STRING, and SORT_LOCALE_STRING
    // are all handled with the default sorter
    if (sort_flags === 'SORT_NUMERIC') {
        sorter = function (a, b) {
            return(a - b);
        };
    }
    if (sorter !== false) {
        valArr.sort(sorter);
    } else {
        valArr.sort();
        valArr.reverse();
    }

    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        inputArr[i] = valArr[i];
    }
    return true;
}