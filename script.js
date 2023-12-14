const loadExchangeRates = async () => {

    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/exchange-rates/index.php');

    const data = await response.json();

    console.log(data);

}


loadExchangeRates();