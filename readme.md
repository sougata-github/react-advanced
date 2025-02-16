## Design Patterns

Design Patterns are common solutions and best practices used to structure code efficiently, making it more maintainable, resuable and scalable.

### Layout Components (Split Screen, List Data and Modal)

Layout components are strategies for organising and composing components that manage the layout structure of a project. The components typically control the positioning and arrangement of child elements within a page, acting as containers for other UI elements or sections.

### Challenges

1. Build a Dashboard Layout

   - Create `Header` component will contain the dashboard title and profile/logout button
   - Create `Footer` component with some text.
   - Create `Sidebar` component, will be a sidebar on the left side with links: home, settings and profile.
   - Create `Content` component with some stats like total users and revenue, use tailwindcss grid to layout in two columns
   - Create `SplitScreen` component which will manage layout between the sidebar and content area. This component will accept two children - left and right, width should be controlled through props.
   - Finally assemble everything in App.tsx.
