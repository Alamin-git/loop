function singara(taka) {
    console.log('singara er jonno diche', taka);
    console.log('singara niye aso');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

// function call korar somoy () moddhe j man bosano hobe ta function er parameter er man hisebe kaj korbe .

// singara(333);

// () er moddhe  amra kono veriable o bosate pari 
var money = 500;
var singaras = singara(money);
console.log('ei new singra', singaras);
//  কোন function কে যেখান থেকে কল করা হবে সেটার বামপাশে কোন ভেরিয়েবল থাকলে ঐ function এর return এর পর যা লেখা থাকবে সেটার মান (value) হয়ে যাবে ওই ভেরিয়েবল এর মান বা value.এখানে singaras এর মান হয়ে গেছে return এর পরের singaraQuantity এর মানের সমান।
