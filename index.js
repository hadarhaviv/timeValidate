function printAllComb(num) {
    let a = num % 10;
    let b = (Math.floor(num / 10)) % 10;
    let c = (Math.floor(num / 100)) % 10;
    let d = (Math.floor(num / 1000));

    let numbers = [a, b, c, d];



    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    if (!(i == j || y == x || i == x || i == y || j == x || j == y)) {
                        let hh = numbers[i] * 10 + numbers[j];
                        let mm = numbers[y] * 10 + numbers[x];
                        if (hh < 24 && mm < 60) {
                            console.log(`${numbers[i]}${numbers[j]}${numbers[y]}${numbers[x]}`)
                        }

                    }


                }

            }

        }


    }
}


