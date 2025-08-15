# Currency Converter API

A simple REST API to convert between different currencies using real-time exchange rates.

## Live Demo
[Base URL](https://kartzcurrencyconverterapi.vercel.app)

## Features
- Convert amounts between supported currencies
- Fast JSON-based API responses

## Tech Stack
- Node.js
- Express.js (assumed—please confirm)
- External API provider for rates (please specify)
- Hosted on Vercel

## EndPoints

### Get All Currency Rates
#### Method: GET
##### [https://kartzcurrencyconverterapi.vercel.app/currency/all](https://kartzcurrencyconverterapi.vercel.app/currency/all) 
##### Response : 
{ "USD": 1, "EUR": 0.91, "GBP": 0.78 }
  

### Currency Conversion
#### Method: POST
##### [https://kartzcurrencyconverterapi.vercel.app/currency/rates?c1=currency1&c2=currency2&q=quantity ](https://kartzcurrencyconverterapi.vercel.app/currency?c1=currency1&c2=currency2&q=quantity )
##### Paramerters
- c1: Source currency code (e.g., USD)
- c2: Target currency code (e.g., INR)
- q: Quantity to convert

  
##### Response 
{ "rate": 827.5 }

