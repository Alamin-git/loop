// object declear

var laptop = {
    brand: 'Hp',
    price: 50500,
    size: 15.6,
    color: 'silver'
}

var phone = {

    brand: 'redmi',
    price: 20500,
    size: 6.6,
    color: 'Glacial Blue'
}

// object property value change ways 
// 1st way 
laptop.price = 43000;
// 2nd way
laptop['brand'] = 'Apple';
// 3rd 
var laptopColor = ['color']
laptop[laptopColor] = 'blue';


console.log(laptop);
