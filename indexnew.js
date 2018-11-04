function getNumbers(num) {
    let a = num % 10;
    let b = (Math.floor(num / 10)) % 10;
    let c = (Math.floor(num / 100)) % 10;
    let d = (Math.floor(num / 1000));

    let outputs = [];
    let inputs = [a, b, c, d];
    printAllPermutations(inputs, outputs)
}




function printAllPermutations(inputs, outputs) {

    if (outputs.length == 4) {
        let hh = outputs[0] * 10 + outputs[1]
        let mm = outputs[2] * 10 + outputs[3]
        if (hh < 24 && mm < 60) {
            console.log(outputs.join(""))
        }


    }
    else {

        for (var i = 0; i < inputs.length; i++) {
            tempInput = inputs.slice();
            tempoutputs = outputs.slice();
            tempoutputs.push(tempInput[i]);
            tempInput.splice(i, 1)
            printAllPermutations(tempInput, tempoutputs);


        }



    }

}