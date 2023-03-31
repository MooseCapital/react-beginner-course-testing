import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Jokes from "./components/jokes.jsx";

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
    //when calling the component function, we put it in < jokes=/ > like html, like like normal function()


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

        Array.map() -> creates a new array, does not affect original array -> runs a function for each item in the array, skips blanks
            -> new array has every item, that we ran the function on, so we could change it. like forEach, or a for loop
            -> whatever we return, gets placed in the same index, in the new array
            -> remember .map() is making the for loop for us, to loop over and run the function. so it's declarative. and shortens what we make

        Arrays in React - if we put an array in react, it will know how to loop over it and create elements from it
                const elements = [<h3>h3</h3>, <h2>h2</h2>, <h1>h1</h1>,<p>hi p</p>]  -> in the app return ( {elements} )
            -> now we know react auto loops over an array of elements for us and renders our jsx
            -> we get an array of data [1,2,3] -> now map over it, to put data in elements, [1,2,3].map()
            -> use map() to get new array that our function ran on the original, now React will place are new arrays elements
            -> and will render All the elements from an array, so we did NOTHING manually. all easily automated!!

            const JokeElements = JokesData.map((joke) => {
            return <Jokes setup={joke.setup} punchline={joke.punchline} />
                ->we are not done yet, since JokeElements is an array of jsx elements we've rendered from Jokes component
                -> & the JokesData.. remember React gets this array of elements and renders it, JokeElements is NOT a component
                ->so we dont use  <JokeElements />  like it is a component, we input the array like {JokeElements}
                ** THIS made our lives MUCH easier, so we have not types out multiple 5+ Joke components, and typed the props for each one!
                        we are merging data and returning components to the new array, we use this when we want many of the SAME component

        conditional rendering - jokes.jsx -> we see that we may not always want to render the joke if we don't have it, and only the punchline
            if we don't put conditional, then we render an empty element.. we don't want this, so inside the components return we put
            {props.joke && <h2>setup:{props.joke} </h2>}  -> so we see now, we can put the jsx inside brackets, we remember && looks for
                the first falsy value, if we get false before &&  -> it never gets to the second item to render it.. <div></div>

            -> in the component, when we are mapping data, we can check a passed in prop -> see if it meets conditon, then render based off that
                -> above we, simply check if it exist then render, here we check specific value to render. possibilities are endless!

            {props.openspots === 0 && <div className="card-badge">SOLD OUT</div>}
                Smart example used for sold out sign -> we pass in open spots from data -> card checks if openspots === 0. then use && again. which
                will return the 2nd item if the first is true, which renders our sold-out sign
            -> we go a step further and have 3 situations. online, soldout, both, or neither. so we make badgetext variable to hold the text, and see
                ->if it's created in the first place in the card component, clearly combining javascript up top, and implanting it in jsx
                    {badgeText && <div className="card-badge">{badgeText}</div>}

            since we are passing many things to our component, we have many rows of props.. we can simplify this by passing the entire object by
                item={item}  -> in the component, we would add props.item.img  etc.. so it makes it much shorter on the map() generation side
                    we must remember since we pass in the entire data object. we use the exact property names from data, not our prop names we made before *coverImg={item.image}

            passing in data #2 -> like above, we used item={item} which gives prop the entire object.  props.item.img  -> but now
                ->we learned how to use the spread operator, which spreads the data object out, and makes all the props for us with every property in the object.
                   {...items}  -> now there is no item object passed to the component, it's simply props.coverImage  -> and we didn't have to type it out!!

                ->  we prefer the item={item} way of passing in the data, because we know exactly what's happening and being passed, where {...item} can look odd.

*  */


import Contact_Card from "./components/Contact_Card.jsx";
import Airbnb_Navbar from "./components/Airbnb_Navbar.jsx";
import Airbnb_Content from "./components/Airbnb_content.jsx";
import Airbnb_Card from "./components/Airbnb_Card.jsx";
import AirData from "./data/air-data.jsx";



function App() {

    let AirElements = AirData.map((item) => {
    return <Airbnb_Card
            key={item.id}
            item={item}
    />
})


    return (

            <div className={"container"}>
                <Airbnb_Navbar></Airbnb_Navbar>
                <Airbnb_Content></Airbnb_Content>
                <div className="airbnb-cards">
                    {AirElements}
                </div>
            </div>
  )
}

/* let AirElements = AirData.map((item) => {
    return <Airbnb_Card
            image={item.coverImg}
            rating={item.stats.rating}
            reviews={item.stats.reviewCount}
            location={item.location}
            description={item.title}
            price={item.price}
            key={item.id}
            openspots={item.openSpots}
    />
}) */

export default App
