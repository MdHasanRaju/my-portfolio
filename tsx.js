
    const arr = [1, 33, 54, 30, 11, 203, 323, 100, 9, 32, 49, 44];

    const isDivisibleBy3and4 = arr => arr.filter(val => val % 7 == 0 || val % 4 == 0);

    console.log(isDivisibleBy3and4(arr));