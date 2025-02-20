## Challenges

### Design Patterns challenges

1.  Build a Dashboard Layout

    Steps:

    - Create `Header` component will contain the dashboard title and profile/logout button
    - Create `Footer` component with some text.
    - Create `Sidebar` component, will be a sidebar on the left side with links: home, settings and profile.
    - Create `Content` component with some stats like total users and revenue, use tailwindcss grid to layout in two columns
    - Create `SplitScreen` component which will manage layout between the sidebar and content area. This component will accept two children - left and right, width should be controlled through props.
    - Finally assemble everything in App.tsx.

2.  Product Display Application

    Create a container component that can dynamically render a list of items based on the props it receives. In this case, you'll be rendering a list of products.

    Steps:

    - Create a new component named `RenderList.tsx`

    This component should accept the following props:

    - data: An array of items (products).
    - resourceName: The name of the resource for the items (e.g., "product").
    - dataToRender: The component that should be used to render each item ( ProductInfo).

    In the component:

    - Use the .map() method to iterate over the data array.
    - For each item in the list, pass the individual item to the
    - dataToRender component as a prop (using resourceName to determine the key).

    Now, you need to create a presentational component that will display the details of each individual product. The goal here is to make the UI clean and reusable for any product object passed to it.

    Steps:

    - Create a new component named `ProductInfo.tsx`

    This component will receive a product prop, which is an object containing:

    - name
    - description
    - price
    - rating
    - imageUrl

    Inside the component

    - Display the product's imageUrl as an image.
    - Display the name, description, and price in styled elements.
    - Render the rating as a series of stars (5 stars total). You can use the Unicode star character (&#9733;) and fill in the stars based on the rating.

    Product Data - Use Sample Data Which Is Already Provided

    Main App Component - Render Lists for Each Category

    Steps:

    - In `App.tsx`, import the `RenderList` component and the data arrays (electronics, clothing, homeGoods).

    Render the `RenderList` component for each category (electronics, clothing, and homeGoods).

    - For each category, pass the respective data array to the `RenderList` component via the `data` prop.
    - Pass "product" as the `resourceName` prop to dynamically pass each product.
    - Pass `ProductInfo` as the `dataToRender` prop to render the individual product details.
