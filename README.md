# Currency Converter API

A simple REST API to convert between different currencies using real-time exchange rates.

## Demo Site
[FrontEnd](https://kartz-currency-converter-api-fronte.vercel.app/)

## Features
- Convert amounts between supported currencies
- Fast JSON-based API responses

## Tech Stack
- Node.js
- Express.js
- MongoDb
- Hosted on Vercel

## EndPoints

### Get All Currency Rates
#### Method: GET
##### [https://currency-converter-api-psi.vercel.app/currency/all](https://currency-converter-api-psi.vercel.app/currency/all) 
##### Response : 
{ 
"sccsess": true, 
"data":[{"USD": 1 }]
}
  

### Currency Conversion
#### Method: GET
##### [https://currency-converter-api-psi.vercel.app/currency/rates?c1=currency1&c2=currency2&q=quantity](https://currency-converter-api-psi.vercel.app/currency/rates?c1=currency1&c2=currency2&q=quantity)
##### Paramerters
- c1: Source currency code (e.g., USD)
- c2: Target currency code (e.g., INR)
- q: Quantity to convert

  
##### Response 
{ "rate": 827.5 }

