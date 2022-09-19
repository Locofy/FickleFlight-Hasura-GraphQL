# FickleFlight Demo using Locofy.ai for front-end and Hasura's GraphQL APIs for backend

### Run the app locally

`npm start`

### Build the app

`npm run build`

### Deployment to netlify

`npm install netlify-cli -g`

`netlify login`

`npm run deploy`

### Live demo

Note: Only these two routes are in the database

1. Singapore to San Francisco
2. Singapore to Dubai

https://fickleflight-locofy-hasura.netlify.app/

#### Database Tables:

<img width="226" alt="Database schema" src="https://user-images.githubusercontent.com/85879023/191053775-8fabc91e-b8c3-4950-a651-685ec314426a.png">

Airports table:

<img width="351" alt="Airlines table" src="https://user-images.githubusercontent.com/85879023/189372527-e192db3c-1736-45f9-88c0-45badaeeeda3.png">

Routes table:

![Routes](https://user-images.githubusercontent.com/85879023/189371961-ea310c31-a705-4373-907c-b2f26ab6b21d.png)

Recently booked table:

<img width="1202" alt="Recently booked" src="https://user-images.githubusercontent.com/85879023/191054246-1433328e-8b2b-43f1-82ae-9df27c77588f.png">

Data Relationships:

<img width="735" alt="Data Relationships" src="https://user-images.githubusercontent.com/85879023/189375153-6daec667-5f74-467d-9057-5303cd3d92d8.png">

#### GraphQL Queries:

###### Get list of airpots:

```
query getAirports {
  airports {
    id: code
    label: name
  }
}
```

###### Get recommended holiday destinations:

```
query getHolidayDestinations {
  recommended_holidays {
    code
    image
    name
    price
    duration
  }
}
```

###### Get recent searches:

```
query GetRecentSearches {
  recent_searches(limit: 2, order_by: { timestamp: desc }) {
    departure_date
    timestamp
    departure_code
    arrival_code
  }
}
```

###### Mutate recent searches:

```
mutation RecentSearchesMutation(
  $arrival_code: String
  $departure_code: String
  $departure_date: String
) {
  insert_recent_searches(
    objects: {
      arrival_code: $arrival_code
      departure_code: $departure_code
      departure_date: $departure_date
    }
  ) {
    returning {
      timestamp
    }
  }
}
```

###### Get routes:

```
query getRoutes($departure_code: String, $arrival_code: String) {
  routes(
    limit: 10
    where: {
      departure_code: { _eq: $departure_code }
      _and: { arrival_code: { _eq: $arrival_code } }
    }
  ) {
    id
    price
    duration
    departure_time
    arrival_code
    airline {
      logo
      name
    }
    arrival_time
    departure_code
  }
}
```

###### Stream data from recently_booked table:

```
subscription getRecentBookings(
  $departure_code: String
  $arrival_code: String
  $start_from: timestamptz
) {
  recently_booked_stream(
    cursor: { initial_value: { timestamp: $start_from }, ordering: ASC }
    batch_size: 3
    where: {
      departure_code: { _eq: $departure_code }
      _and: { arrival_code: { _eq: $arrival_code } }
    }
  ) {
    airline {
      name
      logo
    }
    departure {
      code
      name
    }
    arrival {
      code
      name
    }
    timestamp
    booked_on
    price
    cabin_class
    passengers
  }
}
```

- Frontend Stack

  - React 18
  - Typescript 4.5.4
  - Apollo Client 3.6.9

- Backend
  - Hasura GraphQL Engine
