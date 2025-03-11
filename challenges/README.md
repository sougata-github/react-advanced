## Challenges

### Design Patterns challenges

1. Build a Dashboard Layout

   Steps:

   - Create `Header` component, which will contain the dashboard title and profile/logout button.
   - Create `Footer` component with some text.
   - Create `Sidebar` component, which will be a sidebar on the left side with links: home, settings, and profile.
   - Create `Content` component with some stats like total users and revenue. Use Tailwind CSS grid to layout in two columns.
   - Create `SplitScreen` component, which will manage layout between the sidebar and content area. This component will accept two children—left and right. Width should be controlled through props.
   - Finally, assemble everything in `App.tsx`.

2. Product Display Application

   Create a container component that can dynamically render a list of items based on the props it receives. In this case, you'll be rendering a list of products.

   Steps:

   - Create a new component named `RenderList.tsx`.

     This component should accept the following props:

     - `data`: An array of items (products).
     - `resourceName`: The name of the resource for the items (e.g., `"product"`).
     - `dataToRender`: The component that should be used to render each item (`ProductInfo`).

   - In the component:

     - Use the `.map()` method to iterate over the `data` array.
     - For each item in the list, pass the individual item to the `dataToRender` component as a prop (using `resourceName` to determine the key).

   - Now, you need to create a presentational component that will display the details of each individual product. The goal here is to make the UI clean and reusable for any product object passed to it.

   Steps:

   - Create a new component named `ProductInfo.tsx`.

     This component will receive a `product` prop, which is an object containing:

     - `name`
     - `description`
     - `price`
     - `rating`
     - `imageUrl`

   - Inside the component:

     - Display the `imageUrl` as an image.
     - Display the `name`, `description`, and `price` in styled elements.
     - Render the `rating` as a series of stars (5 stars total). You can use the Unicode star character (★) and fill in the stars based on the rating.

   - Product Data - Use sample data which is already provided.

   - Main App Component - Render Lists for Each Category

     Steps:

     - In `App.tsx`, import the `RenderList` component and the data arrays (`electronics`, `clothing`, `homeGoods`).
     - Render the `RenderList` component for each category (`electronics`, `clothing`, and `homeGoods`).
     - For each category, pass the respective data array to the `RenderList` component via the `data` prop.
     - Pass `"product"` as the `resourceName` prop to dynamically pass each product.
     - Pass `ProductInfo` as the `dataToRender` prop to render the individual product details.

3. Container Component Challenge

   Your goal is to implement a reusable data-fetching component in React that can fetch data from an external API and provide it to its child components. This should be done with proper error handling, conditional rendering, and flexibility in how data is passed down to child components.

   Create a `DataSource` component

   This component should take a `getData` prop that will be used to fetch data. The `getData` function can be asynchronous and will return the data. The `DataSource` component should manage the state for:

   - The fetched data.
   - An error message in case the data fetch fails.

   The component should:

   - Call `getData` when it mounts and store the fetched data in the state.
   - Display an error message if the data fetch fails.
   - Pass the fetched data down to its children as a prop.
   - The `resourceName` prop should determine the key for the data passed to the child components.

   Create a `ProductList` Component

   This component should accept a `products` prop (an array of products) and render a list of product items. Each product should display:

   - Title
   - Description
   - Price
   - Image

   If the `products` prop is `null` or `undefined`, the component should display a loading message.

   Inside the `App` Component

   - The `App` component should use the `DataSource` component to fetch data from the external API.
   - Use a function that returns the data-fetching promise (for example, using Axios) and pass this function to the `DataSource` component.

   Use the `DataSource` Component with `ProductList`

   - Inside `App`, use the `DataSource` component to fetch data from an API endpoint like `https://fakestoreapi.com/products`.
   - Pass the `products` data to the `ProductList` component as a prop.

4. Build a Form with Controlled Components

   Create a simple form with the following fields:

   - First Name (Text input)
   - Last Name (Text input)
   - Email (Email input)
   - Subscribe to newsletter (Checkbox)
   - Message (Textarea)

5. Create a HOC for Access Control and Dynamic Prop Injection

   Create a HOC for Access Control and Dynamic Prop Injection

   - Access Control: The HOC should accept a roles prop, which is an array of allowed roles. The HOC should check if the user has the required roles, and if not, it should display a fallback component (like a "Not Authorized" message or redirect to a different page).
   - Dynamic Prop Injection: The HOC should also be able to inject dynamic props into the wrapped component based on conditions. For example, based on the user's role, the HOC should inject additional props into the wrapped component (e.g., special content or features based on role).

   Requirements:

   - You need to define the types for the component's props and the HOC in TypeScript.
   - The HOC should be flexible to handle any type of component, with the ability to inject custom props.
   - Handle default props and dynamic prop injection based on roles.
   - Make sure that TypeScript ensures proper type safety throughout the code.
   - Implement the roles prop properly, ensuring that the injected component only renders for users with the correct roles.

6. Create the following custom hooks

   - usePrevious(): To track the previous value of a variable.
   - useDebounce(): Debounces a value (useful for input fields that make API calls on change).
