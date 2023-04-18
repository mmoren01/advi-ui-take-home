## Running the application

To run the application locally you will need to add the environment variables included in the email install the dependencies and start the development server with the following commands:

```bash
npm install
npm run dev
```

## API

For this app we use the (News API)[https://newsapi.org/]. It is free, allows us to query the data by search terms, category, date, and popularity. We call the api from the `[...paths].js` file in the `pages/api/news` folder. This file acts as our pseudo api proxy server. We do this to keep the api calls out of the components and to keep the components clean and easy to read. We also do this to make it easier protect the api key if we decide to deploy the app. Please use they queries in the `src/queries/news` folder to make the api calls. This will help keep the api calls consistent and easy to read. For more information on the api please visit the (News API Documentation)[https://newsapi.org/docs] website.

API key can be found in the email from me (@mmoren01).
