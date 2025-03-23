## Tanstack Query

TanStack Query, previously known as React Query, is a popular library used in React applications for managing server state and handling asynchronous data fetching. It provides a set of hooks that simplify the process of fetching, caching, synchronizing, and updating data in a React app.

It is `Framework Agnostic` which means it is not limited to React, it has been expanded to support other frameworks and libraries, but its most common use is within React applications.

### Query Client

The Query Client is the core object in Tanstack Query that manages the state and configuration of queries and mutations in our application. It serves as the primary API for interacting with the library, enabling us to perform actions like fetching data, managing cache, and setting global configurations.

### useQuery

A function that helps us fetch and manage server data in our application.

- queryKey: This is a unique identifier for the query.

`useQuery({queryKey:["todo"], queryFn: fetchData})`

### Deduplication

It means that if we try to fetch same data multiple times at once, it will only send one request instead of many. Deduplication helps avoid asking for the same data over and over again.
