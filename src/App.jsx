import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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

//remember import & export basics
    //export default for only one item per module file, can put export before function and not at page bottom
    //export default does not need curly braces around it for export/import
    //export/import normal, means we have many items, which needs curly braces wrapping.. easy!
    //when we have so many items to type, we don't want to type 20.. so we do export ap as obj -
        //this gives an object to use dot notation on any import items, like obj.Header
/*
business card project

import Header from "./components/Header.jsx";
import Content from "./components/content.jsx";
import Footer from "./components/footer.jsx";


<div className="container">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
*/
/*
Props:
we want o make components like imdb has a format for new movies, so it can simply add them to the website fast from dynamic content.
    a developer doesn't have to individually add each movie, they already have the format, these are called props in react

    anything after the arrows, enter jsx mode like html. to input javascript, react lets us input it with {  } ,
    inside braces, were back to javascript mode

    //best practice to hold things in variables, then input var in the braces in jsx below, rather than calculate inside braces

    when we simply place a contact-card into our app multiple times, we are just copying the data 4 times, we want the same format.. with
        4 different sets of data. like a function that returns 1 + 2, always returns 3. it's entirely useless for a format, so we use paramaters, arguments..

    in HTML we can't just makeup a random attribute and add it, but with react, we can make our own custom attribute used, to pass in arguments to our component
        these look the same as attributes we know from HTML, in react these are properties, called Props

   **Prop names can be whatever we want, they are simply attribute like items, that work like an argument in a function
        remember, we need a parameter, so in the actual component () -> we put a word to hold all our arguments like (props)
        the parameter is actually an object, that holds all our arguments, so we access them like props.img  etc..
        since jsx is html and javascript through react, we pass in argument, then put the js code in braces {props.name}
        now we have an easily replicable component, we simply pass the argument through props when we render it

        we can NOT add props to a native DOM element passed in JSX like <div blahblah="hi"> , remember props -> attribute like
            are for our CUSTOM components, so when react renders the JSX div, it sees it is native HTML and sees our prop on it, it knows the built in element
                does not have an attribute by that name.. and fails

        Destructuring -> in react we saw we have an object like parameter in our component, to handle prop arguments passed in..
            we can use destructuring so instead of passing in (props) -> then accessing it with dot donation inside {props.img}
            -> we destructure the prop object from the start, so we don't need dot notation when passing in the prop to our component.
            -> it might be preferred for us to always use (props) then destructure later with const {img,name,phone,email} = props; in case something is misspelled  or missing
*  */

function TestJsx() {
 let hours = new Date().getHours()
    return (
        <div> It is {hours} o'clock</div>
    )
}
//prop testing below
    import Contact_Card from "./components/Contact_Card.jsx";

/*  airbnb file

import Airbnb_Navbar from "./components/Airbnb_Navbar.jsx";
import Airbnb_Content from "./components/Airbnb_content.jsx";
import Airbnb_Card from "./components/Airbnb_Card.jsx";

            <div className={"container"}>
              <Airbnb_Navbar></Airbnb_Navbar>
                <Airbnb_Content></Airbnb_Content>
                <Airbnb_Card></Airbnb_Card>
            </div>
            */
function App() {

  return (
           <div className="contacts">
               <Contact_Card
               img="assets-proplearn/cat1.png"
               name="Mr. Whiskerson"
               phone="(501) 3843-1920"
               email="mitten1@napmail.com"
               />
                <Contact_Card
               img="assets-proplearn/cat2.jpg"
               name="Mr. Meowtians"
               phone="(501) 3383-8839"
               email="meowerson@napmail.com"
               />
               <Contact_Card
               img="assets-proplearn/cat3.jpg"
               name="Ms. Mittens"
               phone="(501) 1933-8830"
               email="mittens90@napmail.com"
               />
               <Contact_Card
               img="assets-proplearn/cat4.png"
               name="Mr. Fluff"
               phone="(501) 9042-3012"
               email="Fluff1@meowmail.com"
               />

           </div>
  )
}






export default App
