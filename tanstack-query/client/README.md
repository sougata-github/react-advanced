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

### Stale Time

Stale time refers to the duration during which cached data remains fresh. During this period, the data is served from the cache without triggering a background refetch, which can improve performance and reduce unnecessary network requests.

### refetchInterval

It is an option used to automatically refetch data at a specified interval. It allows us to keep our data fresh without requiring manual intervention.

### useQueries

useQueries is a hook that allows us to execute multiple queries in parallel and manage their results in a unified way. This is a useful when you need to fetch data from multipe sources or endpoints in a single component but want to handle each query's state separately.

### useMutation

useMutation is a hook used to handle mutative operations that create, update and delete data on a backend or remote server. Unlike useQuery, which is used for fetching and caching data, useMutation is specifically designed for actions that change data.

- onMutate: called cancelled before the mutation function is fired
- onError: handles errors
- onSucess: handles success
- onSettled: called once the mutation either succeeds or fails
