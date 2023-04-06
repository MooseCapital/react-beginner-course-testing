import { useState } from 'react'
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


            Static web pages - read only, no changes to the data. We've only made static so far. ex. blogs, recipes
            Dynamic web apps - read-write: ability to change data.
                    Interactive, displays your data. Ex. bank website, Airbnb

            What we'll learn - Event listeners, state, conditional rendering(we did this with &&), Forms, side effects

            Event listeners - in js, we used addEventListener, or we could use onclick directly in html.. for React we use the HTML way, in camelCase style
                HTML -> onclick="function() {  }"
                React -> onClick={function() {  } }   - since it is react, we can input js inside any brackets, so we would write the function outside, and simply write the
                    function name inside the brackets for simplicity  -> onClick={clickerFunction }

            -> the problem is after our event, we want to use a value onClick, etc.. then pass that value to another element
                -> or add a new element on some event, BUT react only renders app once, how do we get it to use our value and render again?



            STATE : make it so react watches for a change in our values, ex variables, then like onClick, our variable has changed,
                and we want it reflected in the DOM, React handles that for us with state.

            State vs props - we should never overide/change props we pass through to a component, like we wouldn't change a parameter, after passing in an argument..
                    Ex.  props.image = "a" ** NO, we have written over the value passed in..
                BUT it is completely fine to Change the VALUES PASSED in to the component, like props itself, it's not fine when we override it after it's passed in
                   -> within the body of the function, we should never change the props

            State - values defined WITHIN the component, and should be changing. Which React will watch for.. unlike props -> defined outside the component
                    -> anytime a component has values that will change and should be saved/displayed we will likely use state

                **REMINDER - React.useState() MUST be created in the main component, no inside an events function nested in the component..
                        -> BUT of course the state change function can be inside the event function.. that's the point, to change state! but not set it there initially

               React.useState()  -> is how we use state and re-render an element that has already passed in a state variable, with a new value
                        let myState = React.useState("yes")  -> myState returns an array with 2 items ["hello", f() ]
                        instead of accessing our state with { myState[0] } -> inside our component element
                        we can destructure and try ->  const [myState , func] =  React.useState("yes")   -> now we access it by simply {myState}
                        ** when destructuring array -> we can call the var whatever we want -> const [whateverCat, func] = React.useState()
                            -> an objects destructure has to MATCH prop names, we are fortunate, it's array so we get free reign to name!

                        we can NOT simply change *myState* variable made from destructuring useState() like in normal JS. we must use the function created from useState
                            -> that's the 2nd item in the destructure, func above -> controls changing myState
                        **Naming convention for the function is set(varNameHere) -> so we would use [result, setResult]
                        -> running our function setResult() changes the states value, which we want after some action
                        -> simply running setResult("no") on click will change wherever {result} is input.. and clicking again, will ALWAYS give us "no"
                                -> which is why we will put dynamic data for state, instead of a simple string here for onClick
                        *Counter example -> button has up 1 and down 1.. function for up 1 has setResult(counter + 1) -> we simply see the dynamic value over a simple "no"
                                -> setResult(counter + 1) will set anywhere we have placed {result} in the components, return elements, and update it!!
                             *** We will NEVER modify the state variable directly, setResult(count = count + 1) or (count++) WRONG** this modifies the state variable
                                    -> where as setResult(count + 1) never overrides it, it simply adds one to it. which is the point of the state function, modifies state but not the main holder

                        Best practice -> if we ever need old value in state to determine new value, we pass a callback function.. setResult(count + 1) -> NOT best practice..
                                setResult((value) => {    -> react will always pass our old state value as the variable, which lets us use it without modifying it safely!
                                    return value + 1;
                                })
                            -> this best practice makes sense, and is easy if we make it a habit over simply setResult(count + 1) .. we can always shorten with arrow functions!
                                setResult(prevCount => prevCount + 1)   -> no parenthesis needed on one param and no return needed for one liner, sweet!
                                        -> using naming convention prev(variable-name)  lets us know, it's the previous value
                                        -> when using the previous value in state, to determine the new value, always use callback function
                                                setImage(prevImage => prevImage + 1) etc.. it would be good practice to always use function instead of simple value..

                        Ternary operator refresh:  let answer = isGoingOut ? "yes" : "no" ;
                            -> if we return true before the ? -> then answer = "yes", if false, then answer = "no" -> we will learn how to use this in components like conditionals

                            <h1>{isGoingOut ? "yes": "no"}</h1>  -> instead of variable and if statements.. the component renders and checks the ternary -> if true then
                                    -> the innertext for h1 will be "yes", if false then no
                            -> *** if we have a simple boolean true or false, and want the opposite, there's no need for ternary, simply do !varName -> gets opposite simply!
                            This is a state switch, from true to false setGoingOut(prev => !prev) -> gives the opposite, now {goingOut ? "yes" : "no"} in jsx gives us option
                                to switch between easily

                 Arrays in State  When using state and an array as the original data, remember we want to return the same array, so arr.push() is out, because that MODIFIES it
            Spread operator  -> also that only returns the newest item pushed.. we must return a new array, BUT with the spread operator to get all our old items out
                            ->   setThingsArray(prevThingsArray => return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]

                  Objects in State ->  const [contact, setContact] = React.useState({ firstName: "John",  lastName: "Doe",  })
                             -> we access like an object, but with the state variable holder..  {contact.firstName} -> to use it like we did a simple string earlier

                             *Setting new props in the state, with object as value. We want to KEEP all old values while writing over some we want changed..
                                -> we spread in all old values, and the value we change overrides the previous props value, remember if we don't spread operator it in, we
                                    -> would only return the props we write in.. we want to keep all the old data!!
                                 setContact(prev => {
                                    return {
                                        ...contact,
                                        contact.firstName: "gary"

                                    }
                                 })


                 props and state together: we can make a component separate -> then pass our state holder to it through a prop name.. remember props. -> we would use props.state
                    -> now we wouldnt get very complicated unless we need the separation, but we can easily pass it in.. now when the state changes, the main app where state
                        -> was created gets re-rendered, AND our child component, that passed state as a prop get re-rendered,
                            <Count number={state} />  -> inside Count component we access it by -> props.number -> which equals the states value


            *passing state through props and event functions through components, on the parent component
                    <star onClick={toggle} >  WRONG -> we must remember we are making CUSTOM props, star is not built in, so we can't pass an event to it, onClick here represents
                            -> a custom prop, so we go to the star component directly, then add onClick={props.handleCLick}  -> we passed in the function through a prop though!
                   passing function for event to a component through props -> <star handleClick={toggleStar} >   -> handleClick is an easy convention, so we don't remember the function Name


           state and child/parent relationships - above we learn how to pass in state and even a function call through props to a child..
            -> in react sibling elements don't even know about one another, a nav doesn't contain anything about a body.. so it CAN'T pass state to it
            ->state MUST be passed through a parent with props to child Components
            -> when state must be in the Grandparent element, then passed twice. it gets complicated.. this is called context -> and can be managed by redux, a 3rd party state manager
            -> best pracice, keep state as local as we can -> meaning, if a child element only needs a state, don't put it way up in it's grandparent!

            *style - like in html, as an attribute, we can use style="background-color: white" -> to insert any css in html element
                    -> we can do the same with react, BUT remember how we insert javascript as well.. it means we can change that style like state
                    ->dynamically, where as in normal html, style is always what we set, and we would need native js to change it
                    -> in javascript, we dont use background-color like css, we use backgroundColor, because in object names, we haven o dash -  ->
                    -> js styles.backgroundColor is an object, so in react we access it by an object as well
                        -> style={ {backgroundColor: red}  }  -> see how we have to edit it like an object, vs html simply need style=""  string

                    -> we can simply set styles ={ backgroundColor: red}   ->inside the element in jsx, we write in style={styles}  for simplicity..

                    ->dynamic styles are useful, what if we pass in darkmode="true" to our main app, and have it change!
                        -> {backgroundColor: props.darkmode ? "black" : "white";  }

            *local state - we see below, we render our Box components, and want to pass in dynamic data from [boxes] array, but use state for it..
                -> we want to change the value of our "on" prop to true or false.. but the child component "Box" does not have access to setSquares.
                -> inside the child component, we simply make a copy state of the value we want to use, since we have no access to the parents state for change

                const [boxOnOrOff, setBoxOnOrOff] = React.useState(props.on)   -> now Box can use setBox to change props.on, since our state is its
                        props.on initial value -> we simply copied a states value to a child, since the parents state setter can't be passed down

                        const [squares, setSquares] = React.useState(boxes);
                            const squareElements = squares.map(item => {
                                return <Box on={item.on} key={item.id}></Box>
                            })

            ** ^^ if we find ourself passing in a specific state datapoint through the parent, and need to create a new state to hold it in the child..
                -> There is probably a better way, like simply having it in the parent only, and controlling it there

                When you create state that is initialized by incoming props to a child component:  Derived state - we DONT need it!
                    local box state has different value that parent state, so we have multiple versions of truth = bad

            We must hold the state in the parent, then pass it through components, by passing the function that is called onClick={toggle}
        **  Remember we CANNNOT pass values through -> onClick={toggle()} WRONG  -> so we use a callback function that CALLS the event function
            ->  and we need a unique id to match up our individual component with its state's value in the data array, so we pass a unique id to component
             ->key prop is for component only, make id with same value as key prop for unique matcher!!
             ->  onClick={()=> props.toggle(props.id)}  -> we have event function inside function and get to pass a unique id! and our state is still in parent
        ** inside the onClick={toggle} function, in the parent toggle function, we run the original setSquares, and match id passed through prop
                setSquares(prevSquares => {                                      setSquares(prevSquares => {
                       return prevSquares.map((square) => {                         return prevSquares.map((square) => {
                            if (square.id === id) {                   -->             return square.id === id ? {...square, on: !square.on} : {...square}
                                return {...square, on: !square.on}    -->          })
                            } else {                                  -->         })
                                return {...square}
                            }
                       })
                    })
            when we have a two option if statement like above, we simply use a ternary!

*  */

import MemeGen_Navbar from "./components/MemeGen_Navbar.jsx";
import Meme from "./components/MemeGen_Meme.jsx";






function App() {



    return (

            <div className={"container"}>
                <MemeGen_Navbar />
                <div className="content">
                    <Meme />

                </div>
            </div>
  )
}




/*
travel journal project

function App() {

const TravelElements = TravelData.map(item => {
    return <Travel_Place
            item={item}
            key={item.id}
    />
})
    return (

            <div className={"container"}>
                <Travel_Navbar></Travel_Navbar>
                <div className="content">
                    {TravelElements}
                </div>
            </div>
  )
}
*/

/*  Airbnb project
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
*  */

export default App
