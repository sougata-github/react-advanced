## Design Patterns

Design Patterns are common solutions and best practices used to structure code efficiently, making it more maintainable, resuable and scalable.

### Layout Components (Split Screen, List Data and Modal)

Layout components are strategies for organising and composing components that manage the layout structure of a project. The components typically control the positioning and arrangement of child elements within a page, acting as containers for other UI elements or sections.

### Container Components

Container Components are responsible for loading and managing data for their child components. This pattern is often used in conjunction with Presentational Components to keep UI more modular and maintainable.

### Controlled & Uncontrolled Components

A controlled component is a form element whose value is controlled by React State. React handles the state of the component and updates it based on user input through event handlers (example: onChange).

Uncontrolled component is a form element that maintains its own internal state, and React does not directly manage or track the value. Instead, we interact with the form element using refs to access its value when needed.
