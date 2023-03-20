import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import OrderList from "./OrderList.jsx";

/*

react 17 old way ->
    /!* ReactDOM.render(
        <h1>hi old way</h1>,
        document.querySelector(".root")
    )

//Why use React ->
    //components are more easily maintainable, sharable and readable than long html
    //it's declarative -> tell computer what should be done
        //with old imperative javascript, we have to write out every line of html we wanted, instead of JSX doing it for us
    //JSX syntax? -> flavor of javascript that looks like html -> made react declarative
        //JSX is like a function, when ran turns our html like js into an object for react to read -> then react interprets and puts it on the screen for us
    //subtle differences -> html attributes class-> className
    //we import react to translate our JSX Syntax for us, without it, nothing would be able to read
        //our JSX language and make our page for us!
    //we may want to render(add elements to) a single element/root more than once, but we only need
        //to createRoot() once -> so we hold that inside a variable to be used again
    //what is composable? we can separate pieces of our page into components and share them, or get them
        //and add to create the whole page

//we can hold JSX/html in an element or function to put as a variable -> function must use pascal case
    //this is a custom component
    function TestFunNav() {
        return (
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        )
    }
//making elements inside a variable like this is not that common, later will will be making custom compnents
    let uList = (
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
    )
//can only have ONE parent element at once, not multiple sibling elements, unless under one parent
    /!*
    ReactDOM.createRoot(document.querySelector(".root")).render(
        uList
    )
    *!/



/!* let funFacts = (
    <nav>
        <img src="images/React-icon.svg.png" width={"40"} height={"40"}  alt="react logo"/>
          <h1>Fun facts about React</h1>
        <ul>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </nav>
) *!/

//Components -> reusable function that returns our JSX
    // Pascal case always -> capitalize ALL letters
    //when calling the component function, we put it in < /> like html, like like normal function()


//Parent -> Child components - it is not ideal to stuff all our markup in a single component like above
    //since it is always Pascal case(uppercase), we can stuff any component in another by
        //writing it like a normal tag <Header> -> not confused with lowercase <header>
    //This is what makes React Composable -> see how we split up our page into many components


//once we have thousands or maybe even 10's of thousands of lines, we need to split that up into modules
    //this is the whole point of react, putting components into separate files neatly!
    //always need to import React from "react" in the components module, so it React changes the jsx


//since we get error "require is not defined" from babel trying to run modules in the browser
//we actually test on react file on a vite built easily in webstorm, or can try online stackblitz
*/





function App() {

  return (
        <div>
            <Header></Header>
            <OrderList></OrderList>
            <Footer></Footer>
        </div>
  )
}










export default App
