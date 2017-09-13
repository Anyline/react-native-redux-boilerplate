
	 _____         _ _         
	|  _  |___ _ _| |_|___ ___ 
	|     |   | | | | |   | -_|
	|__|__|_|_|_  |_|_|_|_|___|
	          |___|            
	          
# React-Native Redux Boilerplate
A lightweight React-Native Redux Boilerplate with ready to use modern technologies. This Repo provides you a good
state of the art start for your next React-Native project.

## Getting Started

1. Check the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project
1. Run `npm install` from root directory
1. Run `react-native start` for the packager running
1. Start your platform `react-native run-android` or  `react-native run-ios` (or which fancy output you want to).


## Technologies


| Tech | Summary |
| --- | --- |
| [React-Navigation](https://reactnavigation.org) | Learn once, navigate anywhere  |
| [Redux](https://github.com/reactjs/react-redux) | Redux is a predictable state container for JavaScript apps. |
| [ImmutableJS](https://facebook.github.io/immutable-js/) | Immutable persistent data collections for Javascript which increase efficiency and simplicity. |
| [Styled Components](https://www.styled-components.com/) | Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. |
| [Babel](https://babeljs.io/) | Use next generation JavaScript, today. |
| [EsLint](https://eslint.org/) / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. |


## Understanding the File Structure

- `/android` - The native Android stuff
- `/ios` - The native iOS stuff
- `/src` - Contains the React-Native Stuff
  - `/assets` - Self explanatory right?
  - `/components` - 'Dumb-components' 
  - `/containers` - 'Smart-components' 
    -   `actions`      -   dispatched actions triggered by the UI for state manipulations
    -   `constants`    -   the type for state changes
    -   `reducers`      -   state manipulations
  - `/configs` - Everything you have to outsource
  - `/util` - Utils, for your own good
  - `/screens` - All your screens
  - `/store` - Where your state happens
    - `combineReducers` - Combining all your reducers from every container
    - `configureStore` - applying your MiddleWares to the state


