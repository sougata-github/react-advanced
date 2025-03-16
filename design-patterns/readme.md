## Design Patterns

Design Patterns are common solutions and best practices used to structure code efficiently, making it more maintainable, resuable and scalable.

### Layout Components (Split Screen, List Data and Modal)

Layout components are strategies for organising and composing components that manage the layout structure of a project. The components typically control the positioning and arrangement of child elements within a page, acting as containers for other UI elements or sections.

### Container Components

Container Components are responsible for loading and managing data for their child components. This pattern is often used in conjunction with Presentational Components to keep UI more modular and maintainable.

### Controlled & Uncontrolled Components

A controlled component is a form element whose value is controlled by React State. React handles the state of the component and updates it based on user input through event handlers (example: onChange).

Uncontrolled component is a form element that maintains its own internal state, and React does not directly manage or track the value. Instead, we interact with the form element using refs to access its value when needed.

### HOC (Higher Order Components)

Higher Order Component design patter is used to resuse component logic. It is a function that takes a component as an argument and returns a new component that enhances the original one. This pattern allows us to share functionality across multiple components without repeating code.

An HOC does not modify the original component directly, but instead wraps it in a new component, thereby adding additional behaviour or modifying its props.

### Custom Hooks

Functions that allows us to encapsulate and reuse logic across components and use or more existing hooks. Makes the code more cleaner, more modular, and easier to maintain.

When creating a `custom hook`, you have to start the hook name with `use` ex: useFetch().

### Fatory

The Factory Design Pattern is a way to create objects without specifying exactly what kind of object you're creating. It's like having a `factory` that makes objects for us, based on some conditions or inputs.

### Compound Component

The Compound Component Design Pattern allows for creating more flexible, resuable, and easy-to-combine components. It involves splitting a complex component into smaller, individual subcomponents that can be used together but maintain some degree of internal control over their behaviour.

This pattern is useful when you want to create a component that has multiple subcomponents, but you want to maintain the ability to customise or control the behaviour of each subcomponent from the parent or container.
