const loadExchangeRates = async () => {

    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/exchange-rates/index.php');

    const data = await response.json();

    const ul = document.querySelector('#exchange-rates');

    // the function that is the argument to forEach
    // will be called once for every element of the
    // array data
    // .forEach is a method of an array
    data.forEach( (item) => {

        // <li>AUD: 1.627 / 1 EUR</li>
        ul.innerHTML = ul.innerHTML + '<li>' + item.currency + ': ' + item.rate + ' / 1 EUR</li>';

    } )

}


loadExchangeRates();