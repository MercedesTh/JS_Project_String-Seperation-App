let input1 = document.getElementById('sepString');
let input2 = document.getElementById('sepPosition');

let option1 = document.getElementById('sepBefore');
let option2 = document.getElementById('sepAfter');

let out1 = document.getElementById('output1');
let out2 = document.getElementById('output2');


// 1. split sentence into two parts >>> slice()
// 2. look for position in sentence >>> indexOf()
// 3. if position in sentence break sentence into 2 parts >>> slice()
// 4. if before is checked return front part of sentence
// 5. if after is cheked return rear part of sentence


function seperate() {
    console.log('test1');
    let position = input1.value.indexOf(input2.value);

    if (position === -1) {
        out1.innerHTML = `<p>Invalid</p>`;
        out2.innerHTML = `<p>Invalid</p>`;
    } else {
        if (option1.checked) {
            out1.innerHTML = `<p>${input1.value.slice(0, position)}</p>`;
            out2.innerHTML = `<p>${input1.value.slice(position)}</p>`;
        } else {
            out1.innerHTML = `<p>${input1.value.slice(0, position + input2.value.length)}</p>`;
            out2.innerHTML = `<p>${input1.value.slice(position + input2.value.length)}</p>`;
        }
    }
}


// 1. alle id's ins js holen
// 2. function schreiben
// 3. alle values checken
      // >>> was bekomme ich heraus?
      // >>> string methods
// 4. herausfinden, was die aufgabe ist


// splice (schneidet raus)
// slice (kopiert den string und gibt diesen unverändert zurück)
// >>> .slice() / arr.slice[(begin), (end)]
// string methods >> search >> .indexOf
// >>> if (input2 === -1) (clg fehler)
// else if (before == checked)
// >>> (input1.slice(0, input2.indexOf()))
// else if (after == checked)
// >>> (input1.slice(input2.indexOf(), input1.lenght)
