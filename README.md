![Air Radar](https://raw.githubusercontent.com/sanicodeplayground/portfolio-sanita/main/public/images/projects/AirplaneRadar.png)

This project provides a real-time visualisation of airplane locations on a map along with tabular data. It uses React for the front-end, Leaflet for map rendering, and Material-UI for styling components, and is deployed using Vercel

[**Live Demo →**](https://flight-radar-seven.vercel.app/)

## Table of Contents

- [Project Goal](#project-goal)
- [Job Story](#job-story)
- [Project Scope](#project-scope)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [Testing](#testing)
- [Credits](#credits)
- [Learning and Takeaway](#learning-and-takeaway)
- [Personal Reflections](#personal-reflections)
- [License](#license)

# Project Goal

The goal of this project was to create a real-time visualisation of airplane locations, demonstrating skills in React, state management, React hooks, fetching data from API, and integration with mapping libraries. It aims to provide users with an interactive way to view airplane data both geographically and in a tabular format.

# Job Story

When I am monitoring air traffic,

I want to see real-time updates of airplane positions on a map and in a table,

So that I can quickly assess the current state of air traffic and track specific airplanes.

# Project Scope

The project was developed with a focus on core functionality and real-time updates. Features were prioritised into "Now," "Then," and "Later" categories:

## Now

- Display a map with airplane markers
- Show a table with airplane data
- Implement real-time updates for airplane positions
- Use geolocation to center the map on the user's location
- Integrate with a real API for live airplane data

## Then

- Add more detailed information for each airplane
- Implement filtering and sorting options for the data table

## Later

- Add historical data tracking
- Implement user authentication for personalised views

# Design

The application consists of three main components:

1. A header showing company logo on today's date
2. A map view (AirplaneGeoView) showing airplane positions
3. A data table (AirplaneDataTable) displaying detailed information

The layout is responsive, allowing for easy viewing on various device sizes.

# Technologies Used

## React

- Used for building the user interface
- Utilised hooks (useState, useEffect, useCallback) for state management and side effects

## TypeScript

- Employed for type safety and improved developer experience

## Leaflet & React-Leaflet

- Used for rendering interactive maps and airplane markers

## Material-UI

- Utilised for styling components and creating a responsive layout

## Custom Hooks

- `useCurrentLocation`: For getting the user's current location, browser API
- `useAirplaneData`: For fetching and managing airplane data

# Challenges

- Implementing real-time updates without overwhelming the system
- Balancing between realistic data simulation and performance
- Ensuring responsive design for both map and table components
- Managing state across multiple components efficiently
- Only re-render parts of the code relying on the API data: map view and data table rows

# Testing

I used React Developer Tools available in a Chrome DevTools extension. React DevTools let you check the props and the state of your React components.
Specifically, I used Profiler. I configured settings to highlight updates when components render and record why each component rendered while profiling.

# Credits

- Leaflet for providing an excellent mapping library
- Material-UI for their comprehensive component library
- OpenStreetMap contributors for map data

# Learning and Takeaway

- Gained experience in integrating mapping libraries with React
- Improved skills in state management using component composition only and real-time data handling
- Learned to create and use custom React hooks for reusable logic

# Personal Reflections

This project was an exciting opportunity to combine various technologies and create a dynamic, real-time application. It pushed me to think about efficient state management and how to handle frequent updates without compromising performance. The challenge of integrating a mapping library with React was particularly rewarding, and I feel more confident in my ability to work with complex, data-driven applications.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![LEAFLET](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)

# License

[MIT](https://choosealicense.com/licenses/mit/)

[⬆ Back to Top](#table-of-contents)
