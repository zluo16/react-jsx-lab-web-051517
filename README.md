# React JSX Lab

## Overview

In this lab, you'll define component with JSX and compile Javascript. 

## Setup

We'll focus on writing JSX code to render components. Make sure you export your components; otherwise the
tests won't be able to access your code! The tests won't run correctly until you have exported your components too. 

## Registration form
1. In the `components/RegistrationForm.js` file, create a React component called `RegistrationForm`.
2. This component should contain the following:
    1. One `<form>` element
    2. Two `<input>` elements — one has a `text` type, the other one is a `password`
    3. One `<button>` element with the `submit` type
    
## FillerText
1. In the `components/FillerText.js` file, create React component called `FillerText`.
2. This component should be a paragraph containing the following text: `I am a filler text. I can be used to fill your
screen. Amazing!`.

## Webpage
1. In the `components/Webpage.js` file, create React component called `Webpage`.
2. This component should contain a title with the text `The world's coolest webpage`.
3. This component should also contain _two_ instances of the `FillerText` component.

## Resources
- [Webpack][Webpack]
- [Babel](http://babeljs.io/)
- [Babelify][babelify]
- [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)

[Webpack]: webpack.github.io
[babelify]: https://github.com/babel/babelify
