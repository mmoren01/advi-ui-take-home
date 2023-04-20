## Running the application

To run the application locally you will need to add the environment variables included in the email install the dependencies and start the development server with the following commands:

```bash
npm install
npm run dev:local (to run locally with sample data)
npm run dev (to run locally with real data)
```

## API

For this app we use the (News API)[https://newsapi.org/]. It is free, allows us to query the data by search terms, category, date, and popularity. We call the api from the `[...paths].js` file in the `pages/api/news` folder. This file acts as our pseudo api proxy server. We do this to keep the api calls out of the components and to keep the components clean and easy to read. We also do this to make it easier protect the api key if we decide to deploy the app. Please use they queries in the `src/queries/news` folder to make the api calls. This will help keep the api calls consistent and easy to read. For more information on the api please visit the (News API Documentation)[https://newsapi.org/docs] website.

API key can be found in the email from me (@mmoren01).

## Design

For this app I decided to use Next.js to take advantage of the built in server side rendering and query. I also decided to use MUI to take advantage of the component library and the built in responsive design. I also decided to use React Query to take advantage of the caching and prefetching features to help me save on API calls and handle their state. I also decided to use Jest and React Testing Library for unit testing. I decided to use ESLint to keep my code clean and consistent. I opted to use the default Next.js babel config to avoid any bloated dependencies. I also opted to use the default Next.js eslint config to avoid any bloated dependencies.

Overall my approach to this project was to create a project other devs can easily jump into and have patterns set that they could follow with minimal direction. I also wanted to create a project that was easy to maintain and easy to add features to. My thought process here is that most any dev can create the app you described. My hope is that building an app that is easy to maintain and easy to add features to is what will set me apart from the rest.
