document.addEventListener('DOMContentLoaded', () => {
    // for
    let string = '';

    for (let i = 0; i < 10; i++) {
        string += i
    }
    // console.log(string);


    //for of
    // const arr1 = ['a', 'b', 'c'];

    // for (const element of arr1) {
    //     console.log('element', element);
    // }


    //forEach
    // arr1.forEach((item, index) => console.log('item', index + ' ', item));


    // const arr1 = ['1', '2', '3'];
    // //map
    // arr1.map((el, idx) => {
    //     console.log('index', idx + ' ', el);

    //     return el + 2;
    // });

    // console.log('arr1', arr1);
    // console.log('arr2 ===>', arr2);


    //at
    // const arr1 = ['1', '2', '3'];
    // console.log('arr1 2 index ', arr1.at(-2));


    // const arr1 = ['1', '2', '3'];
    // const arr2 = ['6', '7', '8'];

    // //concat
    // const arr3 = arr2.concat(arr1);
    // console.log(arr3);


    // const arr1 = ['a', 'b', 'c'];

    // const a = arr1.entries();

    // console.log(a.next().value);//[0, a]
    // console.log(a.next().value);//[1, b]
    // console.log(a.next().value);//[2, c]


    // const arr1 = ['a', 'b', 'c'];
    // const arr2 = ['6', '7', '8'];
    //every()
    // function validateArr(el) {
    //     if (el < 10) {
    //         return true;
    //     }

    //     return true;
    // }
    // const isValid = validateArr(arr2);
    // console.log('isValid', isValid);


    // const arr2 = ['16', '17', '18'];
    // const isValid = (value) => value < 10;

    // console.log('isValid', arr2.every(isValid));


    //fill
    // console.log(arr2.fill('hello', 1, arr2.length ));

    // const newArr = new Array(100).fill('hello');
    // console.log('newArr', newArr);
    // console.log(+'1' + 1);

    //filter()
    // const arr3 = arr1.concat(arr2);
    // const arr4 = arr3.filter((item) => typeof item === 'number');

    // console.log(arr4);


    //find & findLast()

    // // const element = arr2.find((el) => el < 3);
    // const element = arr2.find((el) => el < 10);

    // console.log(element);


    // //findIndex() & findLastIndex()
    // const element = arr2.findIndex((el) => el < 9);
    // const element = arr2.findLastIndex((el) => el < 9);
    // console.log('index' + element, 'value' + arr2[element]);



    //flat()
    // const arr4 = arr3.flat(Infinity);

    // console.log('arr4', arr3);
    // console.log('arr4', arr4);


    //flatMap()
    // const arr4 = arr1.flatMap((item) => {
    //     // item === 'a' ? [['f', 'g']] : 'hello'
    //     if (item === 'a') {
    //         return ['f', 'g'];
    //     } else {
    //         return 'hello';
    //     }
    // });
    // console.log('arr4', arr4);

    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['6', '7', '8', '9', '10', '40', '40', '50', '30', '55', '7', '4'];
    const arr3 = [0, 1, [2, [3, [4, 5]]]];
    //from()
    // const arr4 = Array.from(arr2, (el) => el + 2);
    // console.log('arr2', arr2);
    // console.log('arr4', arr4);


    //includes()
    console.log(arr2.includes(50));
});