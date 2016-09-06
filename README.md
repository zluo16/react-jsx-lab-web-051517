# React JSX Lab

## Objectives
1. Practice defining components' appearance with JSX
2. Practice compiling JavaScript

## Introduction
In this lab, we'll focus on writing JSX code to render components. Make sure you export your components, otherwise the
tests won't be able to access your code!

## Registration form
1. In the `components/RegistrationForm.js` file, create an ES2015 React component called `RegistrationForm`.
2. This component should contain the following:
    1. One `<form>` element
    2. Two `<input>` elements — one has a `text` type, the other one is a `password`
    3. One `<button>` element with the `submit` type
    
## Webpage
1. In the `components/FillerText.js` file, create an ES2015 React component called `FillerText`.
2. This component should be a paragraph containing the following text: `I am a filler text. I can be used to fill your
screen. Amazing!`.
3. In the `components/Webpage.js` file, create an ES2015 React component called `Webpage`.
4. This component should contain a title with the text `The world's coolest webpage`.
5. This component should also contain _two_ instances of the `FillerText` component.

## Resources
- [Browserify][browserify]
- [Babel](http://babeljs.io/)
- [Babelify][babelify]
- [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)

[browserify]: https://github.com/substack/node-browserify
[babelify]: https://github.com/babel/babelify
