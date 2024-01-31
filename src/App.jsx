import React, {useState, useEffect, Fragment, useRef, useMemo, lazy, Suspense} from 'react'
import './App.css'
import Overview from "./components/Overview.jsx";
import TestComp from "./components/TestComp.jsx";
import HighOrder from "./components/HighOrder.jsx";
import WithToggler from "./components/WithToggler.jsx";
import Grandparent from "./components/Grandparent.jsx";
import useCounter from "./hooks/useCounter.jsx";
import useTypingGame from "./hooks/useTypingGame.js";
import {Link, Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home.jsx";
import '@fontsource/inter';

import RoutesHeader from "./components/RoutesHeader.jsx";
import ProfileRoute from "./components/ProfileRoute.jsx";
import SettingsRoute from "./components/SettingsRoute.jsx";
import InfoRoute from "./components/InfoRoute.jsx";
import settingsRoute from "./components/SettingsRoute.jsx";
import infoRoute from "./components/InfoRoute.jsx";
import ServicesList from "./components/ServicesList.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import ProductsRouter from "./components/ProductsRouter.jsx";
import ProductsDetails from "./components/ProductsDetails.jsx";




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
//making elements inside a variable like this is not that common, later will be making custom compnents
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
    //this is the whole point of React, putting components into separate files neatly!
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
we want to make components like imdb has a format for new movies, so it can simply add them to the website fast from dynamic content.
    a developer doesn't have to individually add each movie, they already have the format, these are called props in react

    anything after the arrows, enter jsx mode like html. to input javascript, react lets us input it with {  } ,
    inside braces, were back to javascript mode

    //best practice to hold things in variables, then input var in the braces in jsx below, rather than calculate inside braces

    when we simply place a contact-card into our app multiple times, we are just copying the data 4 times, we want the same format.. with
        4 different sets of data. like a function that returns 1 + 2, always returns 3. it's entirely useless for a format, so we use paramaters, arguments..

    in HTML, we can't just make up a random attribute and add it, but with react, we can make our own custom attribute used, to pass in arguments to our component
        these look the same as attributes we know from HTML, in react these are properties, called Props

   **Prop names can be whatever we want, they are simply attribute like items, that work like an argument in a function
        remember, we need a parameter, so in the actual component () -> we put a word to hold all our arguments like (props)
        the parameter is actually an object, that holds all our arguments, so we access them like props.img  etc..
        since jsx is html and javascript through react, we pass in argument, then put the js code in braces {props.name}
        now we have an easily replicable component, we simply pass the argument through props when we render it

        we can NOT add props to a native DOM element passed in JSX like <div blahblah="hi"> , remember props -> attribute like
            are for our CUSTOM components, so when react renders the JSX div, it sees it is native HTML and sees our prop on it, it knows the built-in element
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
                ->so we don't use  <JokeElements />  like it is a component, we input the array like {JokeElements}
                ** THIS made our lives MUCH easier, so we have not types out multiple 5+ Joke components, and typed the props for each one!
                        we are merging data and returning components to the new array, we use this when we want many of the SAME component

        conditional rendering - jokes.jsx -> we see that we may not always want to render the joke if we don't have it, and only the punchline
            if we don't put conditional, then we render an empty element.. we don't want this, so inside the components return we put
            {props.joke && <h2>setup:{props.joke} </h2>}  -> so we see now, we can put the jsx inside brackets, we remember && looks for
                the first falsy value, if we get false before &&  -> it never gets to the second item to render it.. <div></div>

            -> in the component, when we are mapping data, we can check a passed in prop -> see if it meets conditon, then render based off that
                -> above we, simply check if it exists then render, here we check specific value to render. possibilities are endless!

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
                                         -> learn about directly mutating data like arrays, which we normally map and spread over data in setState to not touch the original http://web.archive.org/web/20211101150139/https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/
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

              **  -> we can simply set styles = { backgroundColor: red}   ->inside the element in jsx, we write in style={styles}  for simplicity..

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
                                    if (square.id === id) {                   -->             return square.id === id ? {...square, on: !square.on} : square
                                        return {...square, on: !square.on}    -->          })
                                    } else {                                  -->         })
                                        return {...square}
                                    }
                               })
                            })
                    when we have a two option if statement like above, we simply use a ternary!

                    Instead of passing in id as a prop and changing     onClick={toggle} ->  onClick={()=> props.toggle(props.id)}
                            we simply pass in the id from the component at the parent level   toggle={() => toggle(item.id)}


Conditional rendering -  { isShown && <p>{props.punchline}</p>}   -> p element will not exist unless isShown is true
        && -> double ampersands -> checks for first falsy value since both need to be true.. meaning, if isShown is false, then it stops and never
                -> gets around to <p> so it never renders it.
                {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}

        Most of the time condition rendering will be either && -> or ternary where we have 2 options to show -> if we need more, then chain if -> else if..
                    and place var in braces
                <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>

Forms ** - when using forms in react, we can make a separate state for items up to 4 separate inputs.
    this is good practice because once we get more than 4 or so, it becomes difficult to keep making states
    so we would then hold the inputs values in a single state object.

    ** with few inputs only
        const [firstName, setFirstName] = React.useState("")
         const [lastName, setLastName] = React.useState("")

    ->  inside the inputs, we don't need to make a separate function, but simply inside the onChange={}
        -> here we simply replace firstName state -> using setFirstName, we don't need its previous value, so always replace it with new inputs value on Change
           <input
                type="text"
                placeholder="First Name"
                onChange={event => setFirstName(event.target.value)}
            />



    **With Many inputs - we hold in a single state, with value of an object, that we set its properties to our inputs. and have a single handleChange function
       -> remember the "name" property from using labels in js, we use them here to identify the unique input, to match it with its object property
            -> we access that name property by console.log(event.target.name)
        const [formData, setFormData] = React.useState(
            {firstName: "", lastName: ""});

            function handleChange(event) {
                setFormData(prevForm => {
                    return {
                        ...prevForm,
                        [event.target.name]: event.target.value          -> we must wrap event.target.name in brackets, so it renders a computed string as property
                    }
                })
            }

            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name={"firstName"}
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder={"Last Name"}
                onChange={handleChange}
                name={"lastName"}
                value={formData.lastName}
           />

        -> Currently our html onChange -> is driving our react state, and it simply mirrors its value, where as we want react to be driving the value of state
            -> so we need a value property.. value={state variable}  -> or if were using multiple with object data.. value={formData.firstName}
    
            -> visually there is no difference, but conceptually, html is no longer setting value, react now runs the setState function, which re-renders our elements
                -> which sets the value property in the inputs to match the data in it's current state.
            -> simply remember, these are CONTROLLED components in react, react does not like uncontrolled components, and we simply set value={current-state}

    
    Text Area -  in html text area looks like this, with open/close tags <textarea name="" id="" cols="30" rows="10"></textarea>
        -> unlike <input/> that is self closing, the text areas value is between the two tags.. BUT in React, text area is self closing also!
        <textarea/>  -> this means no text between, it works like input, to set value={state}
        -> there is no type="text"  because textarea is already text only

            <textarea
                placeholder={"comments"}
                onChange={handleChange}
                name={"comments"}
                value={formData.comments}
           />

    Checkbox - is really <input/> element with type="checkbox" -> remember labels? we can wrap our checkbox input inbetween the labels or separate them
            -> when separated, we must make sure they are connected by using htmlFor="idName"  attribute
            -> checkbox has no string, so we only use boolean. it has no value, but simply check={}
            -> in the handleChange function, we have been using [event.target.name]: event.target.value -> but now we need to handle checked, NOT value
            -> we destructure to get these values out, now we can make some changes  const {name, value, check} = event.target;
            -> we learned, when not using all inputs that need value only, like checked, we must use syntax below to determine what to use, otherwise use above
             setFormData(prevForm => {
                const {name, value, type, checked} = event.target;
                return {
                    ...prevForm,
                    [name] : type === "checkbox" ? checked : value,

                }
            })

            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

    Radio input - radio buttons work much like checkbox but only 1 can be selected in a fieldset, since we have multiple, we must set its value AND use a special checked
        -> property, because we have more than 2 options, so we need more than true/false.
            <input
                type="radio"
                id="unemployed"
                name={"employment"}
                value={"unemployed"}
                onChange={handleChange}
                checked={formData.employment === "unemployed"}
            />
            <label htmlFor="unemployed">Unemployed</label>

        ->when selecting a check, we run onChange -> this updates state which sets employment: "unemployed" etc..
            -> which re-renders the dom, now react in the checked={formData.employment === "unemployed"} sees the state we just updated, which sets checked=true/false
            -> for the radio we just selected, now react is driving the values, and no longer html
            ->The checked property sets or returns the checked state of a radio button.
            -> radio buttons are the most complex because it combines checked and value, but it only gets easier from here!

    Select Input - since we default the favColor prop to blank string in state "", we need a selection with that blank value, that we see is -- choose --
            <select
                   name="favColor"
                   id="favColor"
                   onChange={handleChange}
                   value={formData.favColor}
               >
                   <option value="">-- Choose --</option>
                   <option value="red">red</option>
                   <option value="blue">blue</option>
                   <option value="green">green</option>
                   <option value="yellow">yellow</option>
               </select>

     Submitting Form - <input type="submit" value="send it in" />  or we can simply use a normal button
         ** Buttons in a form will default to type="submit" -> if we want a button to NOT submit, we would set type="button"
            -> clicking the button will trigger the form elements onSubmit={} event handler-> instead of type="post" action="php file"
            -> in this handler function, we want to event.preventDefault(); -> in the old days, this clears the form because we would use actions in js
            -> with event.default() it wont re-render our page and reset our state
            -> since we have been updating our state all along, we have our form data, and would easily be able to pass that to an api by someAPI(formData)

                 <form className={"form1"} onSubmit={handleSubmit}>
                function handleSubmit(event) {
                    event.preventDefault();
                    console.log(formData);
                }


        -> *Remember the name attribute must match the property name for data object below, all types default to empty string but checkbox, which is false
        ->  all have value attribute which is value={datastate.nameAttribute} -> except checkbox with is checked={data.nameAttribute}
        -> the state and onchange function to remember  -> inputs have onChange={handleChange}  listener
                const [formData, setFormData] = React.useState(
                    {
                        firstName: "",
                        lastName: "",
                        email: "",
                        comments: "",
                        isFriendly: true,
                        employment: "",
                        favColor: ""
                    }
                )
                console.log(formData.favColor)

                function handleChange(event) {
                    console.log(event)
                    const {name, value, type, checked} = event.target
                    setFormData(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: type === "checkbox" ? checked : value
                        }
                    })
                }

    conditional refresh - when we need only 2 options, we use ternary ? 1 : 2;  -> when we need more we use multi if() {  } elseif() statements
        -> we can simplify short conditionals with the &&, that we learned above, it is up to us whichever is easier to read
            if (signup.emailMe) console.log("Thanks for signing up for our newsletter!");
            signup.emailMe && console.log("Thanks for signing up for our newsletter!");


    API* - using APIs react, if we remember from javascript, this is almost the same
        1 -> get the data (fetch)
        2 -> save the data to state
        **we quickly find out, setting state in the fetch call makes an infinite loop! -> api gets data, converts to json, then calls set state -> state reloads and refreshes
                -> entire react component, we are on the top level so we have problems! -> on refresh, we api call again and set state again.. and again..
            fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))



            //remember we must get the fetch -> then make it .json() -> we make this easy with async and await, so there isnt multiple .then() statements
                async function starwars() {
                    try {
                        let data = await (await (fetch("https://swapi.dev/api/people/1"))).json();
                        console.log(data.name)
                    }
                    catch (err) {
                        throw new Error(err)
                    }
                }

    Side Effects -  what can't react handle on its own?
            -> local storage
            -> api/database interactions
            -> subscriptions ( web sockets)
            -> syncing 2 internal states together
            -> basically anything react is NOT in charge of

        useEffect() -> a hook, like useState() also a hook. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

        Hooks must be called on the top level of our components -> hooks should NOT be inside an if statement or run on condition, this fails reacts way to run hooks like useEffect
            it simply runs the state and Effect in order, so it matches them up, if we put it in a condition, it might not run and mess up the order!
            -> we can put if statements inside the useEffect()
            -> Don’t call Hooks inside loops, conditions, or nested functions -> and before any returns to ensure they are ran in the same order every time
            
        React.useEffect() -> our fetch is considered a side Effect because it's reaching OUTSIDE reacts ecosystem, but also trying to SET state in the process
                            fetch(setstate) -> fetches info, sets the state -> re renders app -> fetches again.. -> infinite loop.. -> we need useEffect()!!


        -> if we don't provide a 2nd parameter to useEffect, there is almost no difference if our fetch() is in the callback function or outside
            -> the only difference, useEffect() is guaranteed to run AFTER the jsx components have rendered to the dom.
            parameter -> [] -> called "dependencies array" -> useEffect looks to the array to see if we should keep running useEffect again
                    --> if the value inside the param changes between renders, then the useEffect runs.. if it's still the same value. it does NOT run.
                    -> https://css-tricks.com/run-useeffect-only-once/
                    ->[] empty array dependency value will run once, but if we insert state -> [stateVar] -> it always equals current state and runs like if it wasnt inside Effect
                    -> if we simply want the fetch useEffect() called once on first render, simply leave [] blank for one run

            React.useEffect(function () {
                fetch("https://swapi.dev/api/people/1")         -->     we put our
                .then(res => res.json())
                .then(data => setStarWarsData(data))
            }, [])

        How to use Array dependencies in useEffect -> the question is, do we want our api called once on render, or every time we have some event?
            -> we have 2 states, one for array dependency, one for api call data holder --> our count state fits nicely in the api call
                    -> we run every time count changes -> count changes onClick -> click changes setCount which adds one to previous number
                    -> as we see with our meme generator, we don't necessarily need a count state separately to run a fetch on every button click
                        -> we could simply update another useful state on each function click that will re-render, and run our  useEffect on load. []
                            -> useEffect would be left blank, but still runs every time onClick because a separate state like the count
                const [starWarsData, setStarWarsData] = React.useState({})
                const [count, setCount] = React.useState(1)

                React.useEffect(function() {
                    fetch(`https://swapi.dev/api/people/${count}`)
                        .then(res => res.json())
                        .then(data => setStarWarsData(data))
                    }, [count])

                <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>

        Await & Async in useEffect() - we know Async functions always return a promise, and useEffect return is the "cleanup" function, so it doesn't work directly..
            -> cleanup function in useEffect like for event listeners.. but for async fetch()! if user stops or exits while loading fetch, we want to stop it like we stop event listener
                    -> when component is deleted https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm
                            -> https://dillionmegida.com/p/why-you-should-cleanup-when-component-unmounts/

            --> once again, we use a callback function, async inside that function.. not Async as the MAIN function passed in useEffect
            -> remember our postfix completion  name.useasync
                useEffect(() => {
                        async function getMemes() {
                            try {
                                let res = await fetch("https://api.imgflip.com/get_memes");
                                let data = await res.json();
                                setAllMemes(data.data.memes)
                            }
                            catch (err) {
                                throw new Error(err)
                            }
                        }
                        getMemes()
                    }, [])

                                       ->when we have event on parent, and child, in the child we must event.stopPropogation() to stop that click from running parent https://react.dev/learn/responding-to-events
        **useEffect() for REMOVING event listeners -> since some events can't be simply added to our jsx element, it's a side effect because react doesn't watch the event
                ->if we simply addEventListener in the open, it will run on each render.. wrong
                -> run once, add event to change our state, which ignores useEffect() on 2nd run because array dependency is same. -> log one time only
                -> if log was inside the event, it would log every single time we move the window width, that is separate event handler function from entire  useEffect()!

                                 const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
                                        React.useEffect(() => {
                                            console.log("effect run")
                                            window.addEventListener("resize", function() {
                                                setWindowWidth(window.innerWidth)
                                            })
                                        }, [])
                                  <h1>Window width: {windowWidth}</h1>

                -> bug & memory leak! -> in the main component, we conditionally render the WindowTracker component..
                -> now if show is false, WindowTracker component won't render -> BUT we already rendered it once, which added our event listener above,
                -> so the component is not there, but our event is listening on every window width change, which is leaking memory for us and taking resources..
                -> because the component is not rendered but has a state variable windowWidth that is changing, we get an error since state is changing
                            ->  Can't perform a React state update on an unmounted component.
                -> we fix this by returning a function inside useEffect(), this is our cleanup function, event listeners must have their function outside the event, so
                    -> it can then be passed to the removeEventListener() as well!
            **  -> we see when the component is removed from the page, it activates the cleanup function (what we return from useEffect) and removes event listener, no memory leak!!
                                                    https://bobbyhadz.com/blog/react-remove-event-listener
                        React.useEffect(() => {
                            function moveWidth() {
                                setWindowWidth(window.innerWidth)
                            }
                            window.addEventListener("resize", moveWidth)

                            return function() {
                                window.removeEventListener("resize", moveWidth)
                            }
                        }, [])

                    -> remember when component is deleted, our onClick event on jsx gets removed for us, when setting it in useEffect, we must cleanup and remove it ourself


            uses for useEffect outside of fetch() and event listeners..  LOCALSTORAGE
                        --> as we see in the note taking app, we want to add to local storage on each note creation and note update. so instead
                            -> of putting localStorage.setItem("notes", JSON.Stringify(notes)) -> in each function, we make a use effect
                            ->which handles side effect and things outside reacts control, which localstorage is.. BUT we also get to run this localstorage.setitem
                            -> every time the notes state changes, remember array dependencies. [notes]
                            ->with the useEffect, we get to pick what state sets it off to run vs having it run on every re-render

            Lazy state loading - every time we have an onChange event, react is re-rendering, our state changes to what we want
                    -> BUT the code inside useState() runs again like useState(console.log) would log again, event though it's not using that state
                    -> since we have a VERY resource hungry call like localStorage.getItem() inside useState(), we could be slowing things down alot
                    -> to prevent this we "lazy load" which simply makes sure our code in useState() runs one time on first render and never again
                            const [notes, setNotes] = React.useState( JSON.parse(localStorage.getItem("notes")) || [])
                     --> to do this, we simply.. use a callback function once again.
                     -> once local storage is called or set to the state at first load, we can make sure local storage is in sync with our state like controlled forms
                        -> the neat trick of using effect means every time this state changes, it watches for updates and changes localstorage to match it.
                                             useEffect(() => {
                                                localStorage.setItem("formData", JSON.stringify(formData))

                                                return () => {

                                                }
                                            },[formData])

                Lazy state initialization - const [notes, setNotes] = useState(() => console.log() )
                    -> now our initial useState code runs once on first render and never again


          Local storage - remember local storages is stores info on the persons browser forever, until we learn databses this can be an easy great solution
                -> to making cool project. for accessing, we must remember JSON.stringify() and JSON.parse() to get the string format for storage https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/





Practice review -

    First challenge is adding darkmode to the page from a switcher div. remember the magic happens in css!
        -> every element has an under dark class option, that sets the color or background to dark
        -> in CSS       nav.dark .toggler--slider {  }

        Outside css, in the components we have a simple ternary to make classname blank or "dark" if the prop passed in is true/falsy
         -> on the main, and Nav element very top     className={props.darkMode ? "dark": ""}
          -> we pass in props for the darkMode=true/false value for className AND the onClick function.
          -> remember we have state at the app level because BOTH components need access, but only nav needs the onClick toggle function

          -> so we set a state holder, onClick will change and re-render to dark mode and back, since state is at app level
            -> toggle function will be at app level too, and we simply switch the setstate() which we did many times with NOT operator
            const [dark_Mode, setDark_Mode] = useState(false)

                function toggleDarkMode() {
                    setDark_Mode(prevState => !prevState)
                }

              <FunFacts_Navbar
                // key={1}
                darkMode={dark_Mode}
                toggleDarkMode={toggleDarkMode}
               />


        when we need to pass data in through an event, as parameter, then compare that with each item in an array, we can do 2 ways
            const dieElements = dice.map((Dice) => {
                return <Die value={Dice.value} isHeld={Dice.isHeld} key={Dice.id} holdDice={() => holdDice(Dice.id)} />
            })
            in the component, we already passed in the prop, so it simply calls it..
                <div className={props.isHeld ? "dice held" : "dice"}  onClick={props.holdDice}>{props.value}</div>

          ->  or, instead of passing it in here we can use the 2nd way, little more time
            -> we simply pass in the function only, BUT also need the id, then match them up in the component, basicaly reverse to above
                     const dieElements = dice.map((Dice) => {
                return <Die value={Dice.value} isHeld={Dice.isHeld} key={Dice.id} holdDice={holdDice} id={Dice.id} />
                    })
                    in the component, we already passed in the prop, so it simply calls it..
                        <div className={props.isHeld ? "dice held" : "dice"}  onClick={() => props.holdDice(props.id)}>{props.value}</div>









   */


/*

** Advanced React Notes -           Thinking in react, planning app layout and where state should be held - https://react.dev/learn/thinking-in-react

    Beginner Mistakes to avoid - https://piped.kavin.rocks/watch?v=Fhu5cu864ag&list=865d8065-2c21-473a-ae2f-84939591eff7&index=2
               * ->when using a state, we should not set the state using the state variable, we use prevState passed in.
                            const [num, setNum] = setState(0)
                        -> if we use num inside setNum, between the 2 seconds it took to run, num could have already changed, it saves num when it's called not ran
                            setTimeout(() => {
                                setNum(num + 1)
                            },2000)
                       * -> we must use our callback that bob taught us in the course! Now it does not save old value when called, but the current state when ran.
                            setNum(prev => prev + 1)

               *  creating a blank state - we know we will add properties and data to a state later, but listing it in our jsx gives us errors on render, because it doesn't exist
                       -> below span will break our page because the property on user does not exist, we have many fixes
                                 const [user, setUser] = useState()
                                 <span>username is:{user.name} <span/>
                        1) use conditional rendering, first if we even want to render the element
                           {user &&  <span>username is:{user.name} <span/>}

                        2) conditional rendering, render element, but not info, no error
                                <span>username is:{user && user.name} <span/>
                            -> javascript gives us this condition already, with ? -> it says, if object/array does not exist, we verify it does before trying
                                <span>username is:{user?.name} <span/>

                      **3) Best option - create data type with blank values in state, so for object, we create the properties set to blank strings etc..
                            -> this way, if we forget the conditional rendering (we will), we get no error!
                                <span>profile picture is:{user.images[1]} <span/> -> simply gives blank for images
                            const [user, setUser] = useState({name:"", email:"", images:[])

                * when using a form, do not handle each inputs value in a separate state, we can hold them all in one single object state
                    -> look at notes above in search to find
                           const [formData, setFormData] = React.useState(
                                {
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    comments: "",
                                    isFriendly: true,
                                    employment: "",
                                    favColor: ""
                                }
                            )

                            function handleChange(event) {
                                console.log(event)
                                const {name, value, type, checked} = event.target
                                setFormData(prevFormData => {
                                    return {
                                        ...prevFormData,
                                        [name]: type === "checkbox" ? checked : value
                                    }
                                })
                            }












    Keys - when rendering elements with data.map(item => <div key={id}> <div>) -> KEYS should be added in the data itself
            -> react does NOT recomment, using index in the array as the key, because if we filter, or an item changes in the array, index can change
            ->when index changes, the key changes, which forces a re-render. if we used index, deleting 1 in [1,2,3,4,5] would make 2, now have index of 0. so it's key changed
            -> this makes all elements place change, then re-render, if we set ID, then even if 1 gets deleted/filtered the rest still have the same key id.. so no re render!!
        --> React says DO NOT USE INDEX as key. if we have no id in our data, we can use nano-id to generate one..
                -> https://www.npmjs.com/package/nanoid   npm i nanoid
                ->  in array data,  id: nanoid()
        -> react wants to run fast, so it simply checks the key of the element, if it is the same, no re-render. if changed, then re-render. this prevents heavy scanning of the whole data
            -> in our data, make sure we have a unique unchanging id, so no re render



    Fragments - when we don't need to render a parent element to hold elements, no need for extra parent node holder..   https://dev.to/tumee/react-fragments-what-why-how-2kh1
            -> fragments let us render elements without creating a parent node. remember how hard we had to keep making flexbox parents?
                -> this would simplify that a TON and keep our flex & grid in check!
        -> we get a div with 1 inside, with no parent rendered. simply way to not have extra parent divs!  we can also use blank arrow brackets <> </>
            return (
                <Fragment>
                    <div>1</div>
                </Fragment>
            )



                                            https://react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop
   Default Props - just like default arguments in function (name = "moose") => {}   ->if no name is passed in, we default to the value we wrote. just like.. DEFAULT props
            --> default props, if inside our Person component, we don't pass down name={name} or something like that, we have no value to grab from props.name, so we get an error
                    -> default props let us put.. a default value to avoid this. of course, we have a second way to do this below, this is reacts built in prop
                ComponentName.defaultProps = {
                    name: "moose",
                    hobby: "art"
                }

            -> we can also destructure right in the top easily!, remember how we avoid props.name, we destructure, and use like default argument above
                function Person({name="moose", hobby="art"})

            ->destructure above gives us a chance to default prop in the parameter section.. BUT if we need to pass all props down below, this can be tough typing it all again!
            ->separate from default props. when we need to forward many props to another grandchild element we simply use items={...props}
            -> using props and not destructure, is the best option for us, reminder, we can put defaultProps after export!
                ->if we conditionally render {props.hobby && <div>{props.hobby}</div>} prop not passed down, but set default above, we WILL always render,
                        ->since we have default that always exist


            -> props must NOT be changed, bad practice props.name = "bob" *we will get an error. props are for passing values down to components.

    Prop Types - How we enforce the variable type passed in prop, num, string, boolean, obj, array function. prop Types validate our types         https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
            -> before React 15.5 it was included, now we must install it ourselves!
            -> npm install prop-types --save

            -> we have very similar syntax to ComponentName.defaultProps above! we do not need this on small projects, but we surely do for big things and production!
            -> we get a logged WARNING if types are wrong, this is not the same as throwing an error that prevents all rendering. our program runs like normal

                ComponentName.propTypes = {
                    propName: propTypes.number,
                    name: propTypes.string,
                    data: propTypes.array
                }


            ->we can also see how useful they are for debugging your apps when the app is too big to find the bug with just conventional methods.

      useEffect() advanced -  this lets us do many things like, handle side effects, handle things outside of reacts control.. fetch() calling only once on load.
            -> we can create events on things we can't in jsx like window, AND we get the CLEANUP return function, that runs when unounted, AND cleansup the previous call   https://maxrozen.com/demystifying-useeffect-cleanup-function
                -> when it's called again, it has to be working on a clean slate, so we run the clean before the main code
            -> 1, we can the 2nd param to nothing - call on initial and call every re-render
            -> 2, we set the array dependency to blank - call on initial and never call again, simply calls our code once, like starting interval, code in open calls every re-render!
            -> 3, we set the array dependency to a state - call every time state changes
                    useEffect(() => {
                        console.log(count)
                    },[count])

            *Advanced - since primitives can be easily compared 1 === 1 or "bob === "bob" will always be true. numbers, strings, booleans, null, undefined
                    -> things like objects and arrays use REFERENCES not content like number or string that is easily comparable,
                    -> let a = {} , let b = {} , a === b -> FALSE!  but -> let a = {}  , b = a; a === b is TRUE

                    ** NO primitive values, instead of useMemo() to hold object or array reference.. we can simply get the values and set as useEffects array dependency
                        -> below we have count state, and it's an object, even if those items are the same, we rerun if we simply put person.. but we put it's primitive values instead!!
                         useEffect(() => {
                            console.log(count)
                        },[count.num, otherState.props..])
            *cleanup functions - what we return from useEffect() -> we need this for many things like setting interval timer etc.. or else we set that interval every time it changes..
                    -> before every useEffect()  run, it runs the cleanup function to start with clean slate
                                useEffect(() => {
                                    console.log("counting!")
                                    return () => {
                                        console.log("clean up!")
                                    }
                                },[count.num])
                **  -> Cleanup fetch() -> what if the user moves before we load fetch, it is still fetching, on exit the cleanup would run and it runs before every run anyway
                            ->an easy trick for fetch is a boolean,  access with name.useasync  postfix completion
                            -> it might look simple, but in testing this simplicity works easily over the controller abort

                    -> above is the beginner way, there is a more proper way to "abort" the fetch when user has stopped, so we get and handle the error, with controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController
                        -> we access advanced abort way with .useasyncadvanced           https://piped.kavin.rocks/watch?v=QQYeipc_cik&pp=ygUPcmVhY3QgdXNlZWZmZWN0



        useMemo() - gives us the result of a function call, returns memoizes values, has dependency array like useEffect(), will usually be set to variable to memoize return value
                -> useMemo() returns memoized result, while useCallback() returns memoized function, *both only run when their dependencies update
            Uses for useMemo()
                1) stop heavy code running on every re-render it must re run, this means every state change too! with an input, every letter type can slow us down!
                2) check referential equality, {} === {} false, above we see how useEffect() with useState() could be running every render,
                        -> even if it's array dependency is an object state that hasn't changed! remember, we set the object state to NEW reference object with same values

                -> below we show how useMemo is used with useEffect as its dependency, to provide an reference if our array,object hasn't changed, where as before
                    -> if we simply set a state that is array/obj as dependency for useEffect, it would NOT be the same reference
                  const myArray = useMemo(() => getArray(), [] ) -> this memo has no dependency, now myArray holds the return of getArray and won't rerun on each render
                    useEffect(() => {
                        console.log("new array")
                    }, [myArray])


        Self closing Components (Children) - used to pass in JSX to children components, we keep and reuse our components style while changing it's elements
            -> but just want to change a little of the elements inside
                -> The standard way of using components is.. <TestComp/>  , but they can also be used like an element  <TestComp> </TestComp>

            ->Anything put between the 2 Component tags are accessible in the component by -> props.children
                -> instead of filling the component with HTML(JSX) elements, we now put {props.children} -> so all the elements are passed from the parent, so it's a dynamic style format
                    -> we keep the style but use new/different elements!
                    function TestComp(props) {
                        return
                            <div className={"container"}>
                                {props.children}
                            </div>
                    -> we can't magically put JSX between <TestComp> </TestComp> and expect output.. We must specificy where by putting {props.children}
                  * -> instead of simply passing DATA through props, we keep a parent format, while making it FULLY changeable with what's inside. Incredible!
                        <TestComp><p>hi</p></TestComp>
                      -> styles on all parents will be changed for every separate time the component is used even with different elements
                       * -> Uses - sidebar, popup, we want same styles but different content when moving pages
                            -> we must ask ourselves, what needs to be here hard coded for the component, what do we want the user to be able to modify
                                    -> and if no modification, simply pass data through props to our already created elements, over new children passed


          Higher Order Components - from reading around, people say these are obsolete with hooks, and overly complicated, we will learn anyway, but not too deep
                -> Bob taught us HOC's because when reading legacy code, we will surely come across these and must understand them!
                    -> in App.jsx we write like normal, but now we have props passed down from the higher order function
                        ->in App.jsx we also DON't export App, now  -> export default HighOrder(App)
                    -> main.jsx imports App -> which really is importing the return function form higher order component
                    -> which that higher order component now renders app with props passed in.. easy!
                            export default function HighOrder(component) {
                                let Comp = component;
                                return function(props) {
                                    return (
                                        <Comp favNum={7} {...props}  />
                                    )
                                }
                            }

        rendering - another way to use Higher order components, it is not made inside react, people created this pattern on their own.
                -> a cool use is our DataFetcher component, we use is, set the url to pass down, now we have a param holding all data returned
                        ->and param state saying if we have the data or not.

                -> This format is more confusing, but we simply return the new component we want, with our passed in fetch() data,
                    -> so no re-writing if we need loads of fetches, with the same type of format!
                    -> if we use no render prop. a component with our the fetching logic pre made would have the SAME HTML elements every time..
                    -> and {props.children} would not work, if we place elements we want inside the <DataComponent><DataComponent/>
                    -> because, that gives the same styling from DataComponent every time.. oof -> we want our OWN styling from every component and our own elements..
                    -> BUT we want this reusable logic to make fetch EASY -> passing in render function lets us copy the logic easly, TAKE the style from the component we want
                    ->  and, we get to create all new elements every time, it's a win win win
                            <DataFetcher
                                url={"https://swapi.dev/api/people/1/?format=json"}
                                render={(fetchData, isLoaded) => {
                                    console.log(isLoaded)
                                   return (
                                     <Fragment>
                                         { isLoaded ? <GetRandomComponent!/>
                                         : <h1>Loading...</h1>}
                                    </Fragment>
                                   )
                                }}
                            />


        Managing state - https://react.dev/learn/managing-state
                    Reacting to input with states - in forms we may have different styles such as when the user is.. empty = disabled submit, typing, submitting, success, failure https://react.dev/learn/reacting-to-input-with-state
                                1) identify all the components visual states
                                2) determine human and computer triggers for state changes
                                3) model state with useState()
                                4) remove non essential state to avoid bugs
                                5) connect event handlers to set state

                    Choosing state structure - a component can be easy to modify and debug or a pain, this is how we do it easily
                            1) Group related state: if we update 2 or more states at a time, consider an object to merge that state easy
                            2) avoid contradictions, states that disagree with eachother: when we have 2 or more options, instead of boolean, make it a string and test ===
                            3) avoid redundant state: if we have firstname & lastname in state, in render we want fullname. do NOT make fullname state, simply add the 2 values
                            4) avoid duplication: the same data in multiple state variables makes it hard to keep them in sync
                            5) avoid deeply nested state: it is hard to update, simple properties in an object is good for us.

                    Sharing state between components - we usually move the state up and pass it down to both

                    Preserving and resetting state - React keeps track of which state belongs to which component based on their place in the UI tree https://react.dev/learn/preserving-and-resetting-state
                            -> we create a component, but render it many times, now we have 3 <count/> components on the page
                                -> React is going to give every new count component it's own counting state, so a click on count1 does not add to count 2,3

                            -> we set counter state on 2 components, but a checkbox will conditionally render one of the counts, which deletes it until it's clicked again
                                    <Counter />
                                     {showB && <Counter />}
                            ->  when React REMOVES a component, it destroys its state, so we get the state resetting on counter #2, back to 0, while the first continues normally

                            -> The conditional render above actually removes it, in our example below, we also conditionally render, BUT we always have at least one component
                                  {    isFancy ?  <Counter isFancy={true} /> : <Counter isFancy={false} />     }
                                    -> It’s the same component at the SAME position, so from React’s perspective, it’s the same counter. Which keeps the state the same and counting!
                                    ->  remember that it’s the POSITION in the UI tree—not in the JSX markup—that matters to React! component in same place = same state

                            -> only when that component is deleted, does react reset its state, in above react still rendering one each time, not completely deleting it on render
                                        {isFancy ? (
                                            <div>
                                              <Counter isFancy={true} />
                                            </div>
                                          ) : (
                                            <section>
                                              <Counter isFancy={false} />
                                            </section>
                                 -> When the child div was removed from the DOM, the whole tree below it (including the Counter and its state) was destroyed as well.
                                    ->although we render the same counter, the first element inside the main div is now, div -> section, which deletes everything below

                         ** ->As a rule of thumb, if you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another.
                                ->If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.


                            -> we saw a component function be inside another component, which means, every re-render of the main component, re-runs the child components code
                                    -> This effectively deletes it, makes a new component, which means.. new state reset
                            *-> always declare component functions at the top level, and don’t nest their declarations. we usually don't do this, because we put components in
                                    -> their own file, and import it, which is great! but loads of files. we could simply put those in the same top level comp file,


                     *   When we want to specifically reset a state in the SAME position: get a unique state for a component in the exact same position
                            -> The two Counters appear in the same position, so React sees them as the same Counter whose prop has changed.
                            -> but we want 2 separate components with 2 separate states, even though they are in the same UI position
                                  countState ? <Count class={"dark-mode"}/> : <Count class={"light-mode"}/>

                            There are 2 ways to get separate states:
                              1)  Render components in different positions - even though they may look the same below, we are deleting one in 1st position and re-adding in 2nd
                              2)  Give each component an explicit identity with key

                                Render in different positions - unlike the ternary above, doing conditional this way does create a new state for each div,
                                        -> even though it doesn't move in the UI, Count1 gets destroyed and Count2 gets added. vs above where react doesn't see it that way
                                       {countState && <Count class={"dark-mode"} /> }
                                       {!countState && <Count class={"light-mode"} /> }

                                Keys - they aren't just for list! when specifying a key -> react uses the key instead of position in the UI like above
                                    -> even though they render in the same place, react sees 2 separate counts that do NOT share state.
                                                countState ? <Count key={"dark"} class={"dark-mode"}/> : <Count key={"light"} class={"light-mode"}/>

                                  * we must remember, even if it looks complicated, react sees these braces as a "position" taken, even if the UI looks blank
                                        {countState && <Count class={"dark-mode"} /> }
                                        <div/>
                                    -> our div will not move, even if countState is false and we render NOTHINg, moving it's UI position, react sees braces taking up position #1
                                    -> in our ternary solution, we keep the same state because there are no braces at all taking up positions
                                        countState ? <Count class={"dark-mode"}/> : <Count class={"light-mode"}/>




            useReducer() - replaces state, but more complicated to write and handle https://react.dev/reference/react/useReducer
                Moving state logic into a reducer - our state could be edited with map, added to with {...task, {new}} , or deleted with filter method
                    -> we have 3 different actions here, on different event listeners, which means making 3 separate times to call setState() in each
                    -> a reducer will make this shorter and put all our logic in one place
                    -> when using Context, we put state in the context component file to access anywhere without props..
                        ->using a reducer allows us to set the value={reducer} now we never look at that file again, write all state that needs passing deeply in reducer file!
                        -> or state that has multiple actions like a setState() on 3 different functions. reduce it!




    *Performance Optimizing section - Bob showed us a huge Tree  App < Grandparent < parent < child  -> in this example, if we have state change in App, and none of the child components
                -> depend on the state, they will ALL still re-render because state changed at the very top, once we localize state where it is, such as parent
                    ->Then only that parent and lower components, such as <child will re-render. app and grandparent do not, because they are higher
                -> we will learn how to optimize performance and say when we want to re-render rather than rendering everything below on every state change


            shallow comparison - remember how primitives are compared by value, 1 === 1 -> true.. while arrays, objects are compared by REFERENCE.
                        -> {} === {} -> false, because they take up different places in memory, even with the same value.
                        -> remember deep cloning? we have this issue again when holding data in states
                                people={
                                    person: {name:"bob}
                                }
                        -> simply comparing people.person === people.person2, will give false, because 2 objects have separate references..
                        -> the same goes for arrays, const arr1 = [1,2,[3]]
                        -> const arr2 = [1,2,[3]]  , arr1[2] === arr2[2]  , false -> we use triple equal sign comparison to get shallow comparison for primitives, but can't use
                            -> the same triple equals === for objects, arrays, as we see above, but now we know how nested objects/arrays are considered shallow equal or not!

                        shouldComponentUpdate() - Bob says we will never use this, but need it to understand purecomponent and useMemo()
                                    -> lifecycle method on Class components, we use function components now that made class obsolete.
                                    -> determines if component should update or not
                                    -> receives upcoming props & state to compare against previous props & state
                                    -> return true, then should update, false, then no update


                            PureComponent(Class based, obsolete) - alternative to React.Component() -> class component, not functional
                                    -> automatically impliments shouldComponentUpdate() for shallow props & state comparisons
                                    -> disallows using shouldComponentUpdate() manually and preferred over it.
                                    -> skips rendering all children in the tree automatically, they must be pure as well
                                    -> since it skips rendering automatically, a state change in App will not affect grandparent, UNLESS we pass our state down to grandparent,
                                        -> and grandparent auto handles that state prop coming in, sees it changed, and re-renders for us
                                    It is only when we pass the state down, that PureComponent (class component) sees a change and re-renders, by default we don't run again!! woo
                                        in App     <Grandparent count={count}></Grandparent>

                                                    class Grandparent extends PureComponent{
                                                        render() {
                                                            console.log("gp rendered")
                                                            return (
                                                                <Fragment>
                                                                    <div>grandparent</div>
                                                                </Fragment>
                                                            )
                                                        }
                                                    }
                                    --> Now App.jsx passes count to Grandparent comp.. but all Grandparents children render as well, we only want App and GP to render, not parent.. child..
                                        -> solution: make the direct child of Grandparent PureComponent as well, to not re-render it. now we get App & Gp rendering only

                                    *-> Remember, the whole reason we do this, is to prevent all of the children re-rendering (heavy resources) on every little state change like count
                                            -> at the very top level, unless we pass it down as a prop
                                         -> by default, leave components normal, and log to see if it is running when we dont want the child to. If we optimize before seeing slow issues
                                            -> this would simply waste time, build the app then optimize!

            Memoizing https://attardi.org/why-we-memo-all-the-things/  ,
                React.memo() - Higher order component made by react, for functional components. The replacement for PureComponent but for functional Components
                            -> only compares previousProps and nextProps, no state checking
                            -> we can optionally make our own checking function, to determine if it should use the memoized result
                            -> check function: return true if props equal, false if not. This controls if react re-renders the component
                                ->we pass this function as 2nd argument to React.memo() ,the first argument is the actual component, that we export as a Higher order Comp like before
                             ->by default, with no check function, we use SHALLOW comparison, to get more advanced we create our own
                                 export default React.memo(Grandparent, areEqual);
                                    function areEqual(prevProps, nextProps) {
                                        console.log({prevProps, nextProps})
                                        if (prevProps.count.num === nextProps.count.num) {
                                            return true
                                        } else
                                            return false
                                        }

                                    }
                            *** -> we must use our own custom checker function when the data type is object or array, because the referential equality will change each time
                                ->this change would cause the re-render even if our state props value is the same, as in no change, but still shows change..
                                    -> so we see above, we access that by prevProps.state.num -> above to check if they equal, now DEEP equality check!
                                       -> do not forget, we must pass down the prop in the first place to check it for change,
                                            ->and if none passed down, we never re-render when parent above re-renders, because were not using a prop's changing data anyway

                                -> When to use React.memo(comp,checker) - * remember build first, think about optimizing later or when our app is incredibly slow
                                    1) render cost is high and uses many resources on child
                                    2) we render with the same props passed down and our app is slowed significantly 100ms



        *Context - In react, data flows downwards, as in our props. Bob showed us the tree with 5 layers, because data flows down, we can't easily move a
                    -> a state to a sibling element, we have to move it up to the parent, and pass it down. easy enough, until we need it on another branch
                        -> just to pass props to a component 4 layers deep. Now state must be at the very top App. and we pass it through many props that don't even need it
                        -> This props pass through is called "drilling"

                    *-> Context solves the problem easily - it lets us easily pass props down to a component, without having to pass it manually through each level
                        ->that doesn't use it, to reach the component that needs it.

                    -> we get a context.provider and useContext(), which tells where state is held and who it can be DIRECTLY passed to without going through others components
                      -> create a file for the Provider, instead of wrapping App in this, we pass it by using props.children, wrapping it in our custom component here..
                            import { useState, createContext} from "react";
                                const ThemeContext = React.createContext({});

                                    function ThemeContextProvider(props) {
                                        const [mode, setMode] = useState(false)
                                        return (
                                            <ThemeContext.Provider value={{mode, setMode}}>
                                                {props.children}
                                            </ThemeContext.Provider>
                                        )
                                    }
                                    export  {ThemeContextProvider, ThemeContext}
                        -> we set all our state in this component, and pass with value, easy!
                       -> Now in main.jsx we import it, in braces! we are not using default import because we need the component and the context to use
                                <ThemeContextProvider>
                                    <App/>
                                </ThemeContextProvider>
                        -> any component we want to access, no matter how deep. we simply use, and access that state with Theme.mode & Theme.setMode . were DONE!
                            const Theme = useContext(ThemeContext)
                             <div className={Theme.mode ? "dark-mode" : "light-mode"}>child</div>
                             <button onClick={() => Theme.setMode(prev => !prev)}>set Theme</button>

                        -> React itself has said we should try to use props always because context everywhere will not be as easy, but of course a big project should useContext
                        * -> we tried not having to render {props.children} in ThemeContext file, if we don't do this, and simply import it to main.jsx
                                ->main.jsx won't let us make a state in the open, since it has no function to put it inside, so use the format above!!


        *Hooks -   So far we've used useState, useEffect, useContext (to pass props without drilling far below for context).    We use React.memo to optimize if a component
                    -> should render or not, to prevent excessive rendering when it's not dependent on anything above..
                    -> later we will use useMemo() like React.memo() but useMemo() memoizes data

            useMemo() - useMemo is for returning a memoized value, useCallback is for returning a memoized function
                -> remember React.Memo() , we optimize and see if we want to stop re-rendering unless certain prop is changed
                -> the same is for useMemo(), stop re-render unless certain thing is changed, so we don't have to recalculate heavy intensive function
               * use if page is taking significant time to load like 1ms per call, don't useMemo by default, quite often code without memoization is fine

            useCallback()

                            https://react.dev/reference/react/useRef
            useRef() -  it is not just for changing jsx elements, we can keep data between renders, unlike useState, changes in your useRef "box" does not trigger a new render.
                    reasons to use:
                    1)grabbing jsx elements to do html dom event on. focus(), innerText.. etc
                    2) hold values between rendering, changing it's value does not re-render
                    3) with those unchanging values, we could hold props, then since it doesn't change. on re-render we compare the old props to new
                    4) when you want to track a value that's unique to a component instance but you don't want React to necessarily be notified when it updates.

                    -> This can be useful when we need to keep a reference, but NOT render that value to the screen, since it won't cause a re-render
                        -> like our timer, imagine if we didn't want to show the countdown, but of course, we need to store the time left somewhere!
                        -> see how many times a button is clicked, if we use state to set this, then our page would re-render every time, now we simply track the values,
                        ->   with no change to the page ref.current += 1;
                    ->we want to imperatively grab a jsx element, in javascript we would do querySelector() or grab by ID. In react if we reuse this component..
                        -> creating more of this component would mess up, because we'd copy the id/class and it wouldn't know which one to select. so useRef()
                        -> is going to let us grab elements in React, so we can do things to it, remember .focus() to focus into input on button click
                        To use:
                    const inputRef = useRef(null)    -> this creates the ref, now put the variable name inside the jsx element
                    <input ref={textRef} type="text"/>    -> give the element the ref attribute with the matching variable used for useRef

                    -> now we can access the element in react by inputRef.current   , since inputRef is now an object holding the element in current property
                    -> since ref attribute on html is used, we replace the useRef(null) value with it, if none is used, that's when we'd use the value on creation useRef(0)
                    -> simply use our javascript methods on the element now, inputRef.current.focus()
                    -> useRef() will show undefined for the first render, but not when inside a useEffect(), it will work the first time, be mindful of this

                    -> in the future, we may need to hold variables that do NOT re-run the component, like a variable. useRef is better than a simple variable though
                        -> multiple instances of the same component using regular variables will NOT isolate their values. useRef does separate those values. so it's our default
                        -> when we don't want to reload and can't use useState()


            Custom Hooks - don't repeat yourself, if we want to reuse a counter, we need it's state and function to count up. we don't want to copy paste this is all new components
                    -> we could make a higher order component , but this is more complicated. we simply make a custom Hook that has all count logic in it
                    Convention: name file starts with "use" -> useCounter.jsx and function
                        -> we do NOT import react because there is no jsx inside custom hooks
                            function useCounter() {
                                const [count, setCount] = useState(0)
                                function countUp() {
                                    setCount(prevState => prevState + 1)
                                }
                                return {count, countUp}
                            }
                            export default useCounter

                    To use this inside our component now - we destructure it so it's only called once, and state is created once, and we don't have to call it each time!
                    const {count, countUp} = useCounter()
                    -> now use it like normal, onClick={countUp}    &  <div>counter:{count}</div>

              **  -> notice we return an object, {count, countUp} -> because of this, objects are named by property, so the user using our custom hook must destructure exactly
                -> whereas, if we destructured an array return [count, countUp] -> the user could rename those anything they wanted on import, because arrays are named by index
                    -> [num, countNumbersUp] = useCounter()   -> array should be for a few items only, if using many, object is better

                -> previously we thought separating logic was for components, but that is for JSX not necessarily the javascript
                    -> now with custom hooks, we can hold all our hooks and javascript separately from the component, so it's short and neat
                    -> then simply import that custom hook logic to the component, this is not best practice because our typing game is not reused, we're just
                    -> offloading logic elsewhere so the actual component looks very neat and in 1 single hook line, now just save the jsx for later!



    * React Router - way to render single page websites, conditionally render large parts of your page, Declarative API, It's own Hooks  https://reactrouter.com/en/main
            * - remember when we learn NextJS it will replace router, but if using react without server side rendering, we need router for multi page websites
            The O.G. way - We make request to server, and get index.html -> navigate to about page -> make another request to server for about.html
            The React way - Single page application -> make request to server, -> get entire react App -> navigate to about page -> react gets that, no more server request
                ->for example, our header and footer can be the same on each page, now react shows us different content component in the middle on page change, no server request

            -> we need a dependency, then need to import, ->
                 npm install react-router-dom
                 import {BrowserRouter as Router} from "react-router-dom"
            -> we rename as router because it is commonly used. now 'router' is a useContext provider, remember wrapping App component with our context in main.jsx
                -> or we could put Router inside the App return jsx itself
                 <React.StrictMode> <Router> <App/> </Router>  </React.StrictMode>

        v6 Updates:  https://reactrouter.com/en/main/upgrading/v5    instead of <Switch> wrapping our Route, we use <Routes> </Routes> to wrap <Route>
                <Route> now uses element attribute over render,  <Route path={"/"} element={<h3>Home page</h3>}/>

            Components:
                Link - has required "to" attribute, to where it sends us, "/" is the home, "/about" changes the domain to.. /about page
                        -> Link under the hood, is an <a> anchor tag in html for styling. this links to .. links normally like we've done
                        <Link to={"/about"}>about</Link>
                    -> router v6 no longer needs 'exact' attribute to specify home, because all paths are Relative, so it auto does it for us
                    -> Link to somewhere, must have a Route with a path to an element. Here is standard v6 setup

                        import {Link, Route, Routes, BrowserRouter as Router} from "react-router-dom";
                           <Link to={"/"}>Home</Link>
                            <Link to={"/about"}>about</Link>
                            <Routes>
                                <Route path={"/"} exact element={<Home/>}/>
                                <Route path={"/about"} element={<h3>about page</h3>}></Route>
                            </Routes>

                    -> we either want nested routes to show over the original route before it, or ADD onto it, usually we want a whole new page and elements
                            -> this has us putting the nested route in the original single routes element on App, if we want to add on, make a new routes element in the component

                Dynamic routes - we create a new route that lets us handle any new routes created on a path now our route does not have to be exact because we can't know all of them
                        -> this will work and /services/:Id  will allow any text or number there and matches to a link we create
                        <Route path={"/services/:serviceId"} element={<ServiceDetail/>}/>

                                        remember the old way, making elements from data array with map, now we can add links to those elements
                                                const services = servicesData.map(item => {
                                                    return (
                                                        <Fragment key={item._id}>
                                                            <Link to={`/services/${item._id}`}>{item.name}</Link>
                                                            <p>price: {item.price}</p>
                                                        </Fragment>
                                                    )
                useParams() - used to get data passed through link creation and held in a variable in the route :ID , we can match it's it'd id with database id
                    -> inside the component Service Detail above, we need to match the component with the route, router gives us useParams for this
                    -> now we rendered an element from data that gives each element a link, and dynamic routes lets each link have a route on command
                    -> useParams lets us see in the Route element above, <ServiceDetail/> inside, we now can access the :serviceId
                    -> inside <ServiceDetail/> we need to match it's particular data with the id we get from the link and useParams :serviceId

                    The solution with a database would be making a fetch to match the id passed on the route.. in the pages path! and matching it in the databse
                        -> were just using local data, the solution involved array.find() -> like filter but returns the first item that meets a condiiton
                             const param = useParams();
                             const thisService = servicesData.find(service => service._id === param.serviceId )
                        -> we import param, now inside ServiceDetail component, match id made from ServiceList Link
                        -> now we have access to all things matching the id in the link and can use its data on the page, it's returned inside: thisService

                        -> it's all about the initial <Link to={`/services/${item._id}`}> creation that makes the page link up top, matching the data's id,
                                -> then accessing that id we set in route path, with  const param = useParams() -> and finally array.find() to match data id with route id
                        * -> this is also for many of the same component, with just different data inside matching our id passed in link

            useResolvedPath() - inside a path, we want to make more links relative on this path, what if the path name changes? we have to rewrite every link inside
                            -> if we simply put these links as a variable, this makes it easy for us it's not hardcoded!
                            -> bob showed us useRouteMatch() , this is v5 version
                            -> now we use useResolvedPath() which gives an object with pathname inside, we can destructure or leave it
                            const match = useResolvedPath()
                                <Link to={`${match.pathname}/settings`}><button>settings service</button></Link>

            useNavigate() - instead of links, if were in a component already, we want to go back to previous page from a button click. The user can click the back button
                    -> in the browser, or our own button can navigate to any /pages we want! we will usually just link, but what about form submits.
                    -> when the form submits, we want to navigate once the user is logged in and the database returns good, this is a major use case
                    -> bob showed us the v5 version useHIstory() and history.push() and history.replace() .. in v6 we use useNavigate() and redirect()
                    -> It's recommended to use redirect in loaders and actions rather than useNavigate in your components when the redirect is in response to data (fetch).
                     const navigate = useNavigate()
                        navigate("/services")  -> inside the button on click
            useLocation() - used to get the current location link in browser and get query search after ?search in the browser bar
                    -> we will need this data to do something with it and confirm the right user is on a page etc..
                    -> unlike useNavigate() which actually moves us to a link, location just tells us where we currently are



            lazy loading - there are some built in ways inside react for lazy loading, and there are packages, which we used https://www.npmjs.com/package/react-lazy-load-image-component
                    -> this makes it very easy to not load an image until it's scrolled into view, I think we can do the same with components, when they're scrolled as well

                more advanced cases are not simply lazy loading a component when scrolled, but not loading a component at all until the page is visited
                    -> this is where react lazy and suspense come in, and is more advanced that our simple package https://il.ax/watch?v=1_dLaSjzOMY
                    -> in tutorials we saw, the example was an admin password page, normal users don't access, which means.. we don't want this loaded every single page load
                    -> since every person won't see it. by not loading it every time, we would save 300ms in the example. we can have big time savings when pages get big!

                difference between React lazy and suspense
                    *   our website might get very big, so when the user visits for the first time, we don't want it taking 5 seconds.. so we don't load every single thing
                        at once, we will wait until they visit those pages to load, this is Lazy loading.

                        const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));
                    -> lazy lets you defer loading components until it's requested & rendered for the first time, such as going to it's link with router
                        ->we must use suspense on a lazy loaded component, while its loading, it's dependencies are not yet loaded, so suspense waits for that.
                        -> the component could be shown instantly on lazy load, but it's imported libraries being used are not, suspense is for this!
                    ->suspense lets you display a fallback until its children have finished loading/to the screen. it's to be used in combination, so until we lazy load,
                        ->lets show a suspenseful.. loading spinner on the screen

                    -> it makes sense how we combine these, lazy load our component until page is visited -> set up suspense so while that is loading, we show a spinner etc..


            useEffect review - if we put code in the global scope, like a time interval, it will run then run again on re-render, making infinite times!
                    to prevent this, we use useEffect to ONLY run the code when the component is created
                    -> the array dependency tells what instruction.

                          useEffect(() => {
                              // This runs after every render
                            });

                            useEffect(() => {
                              // This runs only on mount (when the component appears)
                            }, []);

                            useEffect(() => {
                              // This runs on mount *and also* if either a or b have changed since the last render
                            }, [a, b]);


        Testing in react review - vitest            https://www.robinwieruch.de/vitest-react-testing-library/
          1)      npm install vitest --save-dev
                     in package.json add script
                        "test": "vitest",
          2)       create test file somewhere: App.test.jsx
          3) add the code in the testing file
                   import { describe, it, expect } from 'vitest';

                    describe('something truthy and falsy', () => {
                      it('true to be true', () => {
                        expect(true).toBe(true);
                      });

                      it('false to be false', () => {
                        expect(false).toBe(false);
                      });
                    });
            4)  download jsdom
                    npm install jsdom --save-dev
            5) add to vite config file
                      test: {
                        environment: 'jsdom',
                      },
            6) install react testing library
                    npm install @testing-library/react @testing-library/jest-dom --save-dev

            7) create tests folder then make tests/setup.js  -> add this code
                    import { expect, afterEach } from 'vitest';
                    import { cleanup } from '@testing-library/react';
                    import matchers from '@testing-library/jest-dom/matchers';

                    // extends Vitest's expect method with methods from react-testing-library
                    expect.extend(matchers);

                    // runs a cleanup after each test case (e.g. clearing jsdom)
                    afterEach(() => {
                      cleanup();
                    });

            8) we can change the vite config to this, so we don't have to manually import anymore
                    test: {
                    globals: true,
                    environment: 'jsdom',
                    setupFiles: './tests/setup.js',
                  },

            9) install another package
                    npm install @testing-library/user-event --save-dev


        Proptypes and DefaultProps review -      https://legacy.reactjs.org/docs/typechecking-with-proptypes.html        https://blog.logrocket.com/validate-react-props-proptypes/
            -> propTypes must be installed in new react with      npm install --save prop-types
             -> we use these to confirm we are passing the correct type of prop, like string, number, object.. this gives us a warning, not an app stopping error
             componentName.propTypes = { propName: PropTypes.string.isRequired }

            default props - if we forget to pass in a prop, we use our default method, this way we get no error when reading props that might have been forgotten
                componentName.defaultProps = {
                      name: 'Zach',
                    };

        React router review -
                    Client side routing - javascript handles routing in the browser. the url changes and the page is modified without refreshing, in general for SPA
                        single page applications. link request are intercepted by js instead of going to the server, we never leave the main page, its content just changes
                    Multi page applications - the client reloads every time we navigate to a page.

                -> when the browser refreshes, it notifies the screen reader there is new content to read, with client side routing, we have to notify the screen
                    reader of route updates manually. The routing libraries help us with this.

                -> we can look up dynamic routes and param above. this is for a local item id matching id in databse, so we make the id the unique link to route to

                protected routes - like by password. if we need an admin page, we can see if the user is admin, this is authentication.
                    usually this is to see if user is signed up or signed in, so a home link might navigate them to signup page or not.
                    https://reactrouter.com/en/main/components/navigate      https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6/64347082#64347082
                    this can ensure no random user can go to the cart/checkout page or access content unless they are logged in!

        Data fetching review -  https://www.developerway.com/posts/how-to-fetch-data-in-react
            -> when a component needs to make a request when it renders, its best to useEffect, this way we set array dependency to only run []
                -> on the first render only
            *Error Handling
                we use try{} and catch{} to tell us if we get an error, so we put async fetch inside this. but
                we also need to give the user an indication there is something wrong. if our fetch is correct then response.status gives us 200
                if there is an error, it is 404
                    let res = await fetch("https://picsum.photos/v7/list?page=4&limit=10", { mode: "cors" });
                            console.log(res.status)

                *note, the error will already be shown in the console, we use try..catch.. to throw our own custom error message!
                    ->now inside catch{} we can set an error state to our thrown new Error("") message, since we already have it in console, this is
                    -> for setting a state so we can pass that along to the user on the page!
                    try {
                        if (response.status >= 400) {
                           throw new Error(`server error http, the status is: ${response.status}`)
                        }
                    } catch (error) {
                        setErrorHandler(error.message)
                    } finally {
                            setLoading(prevState => false)

                    }

                Axios - after researching, fetch will do us good most of the time, we can search other libraries for more features, fetch does not support older browsers like
                        internet explorer(if we ever need to support that, we'd have to polyfill, or use axios for this
                        -> axios can easily intercept and cancel subsequent API calls, *This is most important, when authenticating calls, we might cancel on error*
                            -> so cancelling an api call in progress seems useful, and axios is useful if we have data from different api endpoints.
                fetch replacements - we should always know fetch fundamentals and understand why we might need an external library, such as..
                    -> error handling, multiple components fetching the same endpoint, how to cache the resonses, how long to cache, race conditions for fetching
                    ->what if the component removes from the screen, how to cancel request in progress, memory leaks..

                        Axios, swr https://swr.vercel.app/docs/getting-started ,
                    -> we should be mindful of starting fetch request and times, such as does our 2nd and 3rd api call start after the 1st finishes or
                            do they all start at the same time, to Drastically reduce times?
                    -> to do this, we should fetch our data in one place, but not at the top level to prevent prop drilling, we can fetch data in our context provider!
                    -> * remember the browser can only fetch 6 request in paralell, then the 7th has to be queued and wait for 1 to finish to begin.
                    a fetching library replaces the loading state we created, and <suspense> does it automatically to


        Performance review -*check usememo review below as well, we should Never think about performance first, build the app, then worry about preventing unnecessary re-renders
            useMemo() - memoizes values, uses array dependency to run, instead of running each render, will run before the re-render unlike useEffect, which runs after render
            useCallBack() - memoizes functions,

            when optimizing performance, many make the mistake of trying to make props not change and unnecessarily memoize them.
             -> because when state OR props change, the component re-renders AND all of it's children will as well.
             -> we should use this guide to know when to memoize and useCallback() https://www.developerway.com/posts/how-to-use-memo-use-callback
            -> we can cause a whole chain reaction of child components to re-render when it didn't need to happen at all
            -> React.memo() solves this. or now just memo() -> it basically says, if the components prop has not changed, then don't trigger re-render https://react.dev/reference/react/memo
            -> this is where we need usecallback() if we have not memoized an event listener function, then it will trigger a re-render, even though the function is the same
                const Page = () => <Item />;
                const PageMemoized = React.memo(Page);

                  const onClick = useCallback(() => {
                    console.log('Do something on click');
                  }, []);
                <PageMemoized onClick={onClick} value={[1, 2, 3]} />
                  -> now on re-render, PageMemoized will also render, unless we memoize value as well, ALL props must be memoized

            -> what are "resource intensive calculations"? react says we should memoize them, unless we are looping over 1000+ items in js, it's not worth it
            -> the real bottleneck is actually re-rendering children, so any component that loops over data to render, is intensive, and slow
            -> such as below, if we don't memo, then this could take 20ms on each render, now it takes 2ms if no values changed.
            const List = ({ countries }) => {
              const content = useMemo(() => {
                const sortedCountries = orderBy(countries, 'name', sort);

                return sortedCountries.map((country) => <Item country={country} key={country.id} />);
              }, [countries, sort]);
              return content;
            };
            ->remember using memo() is only useful if we plan on using the exact same props, otherwise if they change, we want the component different as well!


            <suspense> -> is not performance, BUT deals with showing a loading placeholder for elements, such as waiting for the server response api.
                -> in modern sites, we don't want an ugly spinning loader, so while waiting, we should use a modern loader like react skeleton
                        https://www.npmjs.com/package/react-loading-skeleton


        Style review - the different ways we can use css
            -> classic .css files
            -> css utility frameworks, predefined classes like https://tailwindcss.com/ lets you write a class in your element and it's auto styled
            -> css in js,  write directly in the jsx, like removing the .css file https://css-tricks.com/a-thorough-analysis-of-css-in-js/ https://emotion.sh/docs/introduction  https://styled-components.com/
            -> component libraries, many things are already made for us, like the popular https://mui.com/  https://www.radix-ui.com/  https://chakra-ui.com/

        Context review - context prevent prop drilling when needing to pass props through many components
            drawbacks - ALL components using our context will re-render when only one state changes.. this makes prop drilling simpler, BUT
                -> we can easily see the massive performance issues with this & unnecessary re-rendering.
                -> nested components can be hard to follow as state isn't passed as props from the parent, but from one location that makes it complicated to read.
            solutions - smaller context to prevent re-renders for entire apps components, but this makes it complicated keeping up with more context, at this point
                -> it might be better performance to keep up with props, if the layers aren't too deep
                -> possibly redux the state management tool can prevent this re-rendering while still holding state in one place, we haven't tried it yet.
                -> zustand is another state management tool like redux https://github.com/pmndrs/zustand

        Reducer review - for components that have many state updates, we can combine them into one reducer, such as notes having a different function to add, update, delete state..
            instead of being different functions to add, update.. we can combine these different functions in the same reducer location.. we REDUCE the needed code and area.
            -> we will usually use a switch statement that's easy to read than if..else, it's basically an if statement where the condition is always checking if our values equal



        redux - setup and how to use **note we are only doing synchronous for now, to replace useContext so components will not update, but when fetching async api data
            -> we need to get more advanced to set up, for now when fetching and storing state, we will simply use a fetch in useeffect, BUT this isn't good long term
            -> as we should have this async data away from the component so it's lighter.
                * all redux setup code can be found in vite-project-setup project

            step 1) npm install @reduxjs/toolkit react-redux
            2) go inside main.jsx -> we have removed context, now using redux only
                    import {store} from './store.js';
                    import {Provider } from 'react-redux';
                  -> wrap the App component
                    <Provider store={store}>
                            <App/>
                     </Provider>

            3) inside src folder, create store.js ->
                  -> we import all state slices and add them in here, as sliceReducer
                    import { configureStore } from '@reduxjs/toolkit';
                    import testReducer from './features/test/testSlice.js'
                    export const store = configureStore({
                      reducer: {
                        test: testReducer,
                      },
                    });

            4) inside src folder, create features folder, then features/sliceName folder
                -> inside our slice folder we make the sliceName.js file to hold slice code
                -> we should have src/features/test/testSlice.js

                know the slice name, now use our live template: reduxcreateslice
                -> this completes the entire file for us
                ->*remember! every time we make a reducer to set the state, we must add it to exports to use
                    export const {testMakeFalse, reducersHere} = testSlice.actions;

            5) inside the actual code, we want to access state and set the state,
                import {useDispatch, useSelector} from "react-redux";
                import {testMakeFalse, testMakeTrue, toggleColor} from "../features/test/testSlice.js";

                -> we have imported each reducer from each individual slice folder and file above
                -> now to access and set it
                const dispatch = useDispatch()
                const testState = useSelector((store) => store.test);

                -> inside a button we put this in the dispatch, in the callback
                    onClick={() => dispatch(toggleColor())}
                -> to access that same state, we changed above with reducer
                    <p>{testState.colorMode}}</p>
                -> we can also destructure useSelector to get colorMode directly, but i like specifying
                    -> its a state object I'm accessing


        useRef review - we can hold values between each render without causing re-renders and create reference to an element to add events and stuff.
                -> with normal state -> cause re-render -> local variables destroy & reset

                Dom manipulation - sometimes we need direct control over elements, and useRef lets us access that, such as when we want to .focus() and input field
                    1) create the useRef
                        const buttonRef = useRef(null); -> we set to null as the initial value that will be changed
                    2) we pair with any elements by the ref attribute
                        <button ref={buttonRef}>Click Me!</button>
                    3) so we don't focus on every render, we useEffect to only focus when component first mounts
                        useEffect(() => {
                            buttonRef.current.focus();
                          }, []);
                      -> buttonRef.current is null, then it is connected to the button element, react renders and paints the screen before running useEffect, so its connected

            we can do almost any dom manipulation from vanilla javascript, however we should only use useRef for NON destructive dom operations
                it's best to edit the text in jsx directly      buttonRef.current.textContent = "Click Me!";

                if we use element.queryselector() -> it would defeat the purpose of react, so we let react commit to the DOM itself.
                    ->this can also be more inefficient and lead to unexpected behaviors.

                useRef - mutable reference, updating values do not trigger re-render, can control DOM elements & actions on them.
                useState - immuteable reference, changing its value triggers re-renders


        useMemo review - remember premature optimization is the root of all evil, keep our app simple and BUILD it first, such as normal state and props, then worry
            about adding in redux later, and adding in React.memo and useMemo for performance gains.
            as useRef does not trigger re-renders while setting a value to keep. useMemo chooses dependency array, to not run again/calculate ON future re-renders after initial.

            in my example on Testing component, i use a for loop out in the open, and click a button to change a state, that triggers re-rendering.
            then I comment the for loop out, and useMemo to return a value that loops over on the first render only
                            const [unchanging, setUnchanging] = useState(null)
                            const [reTest, setReTest] = useState(0)
                            const Num = useMemo(() => {
                                let tempNum = 0;
                                for (let i = 0; i < 100000000; i++) {
                                    tempNum = i;
                                }
                                return tempNum;
                            }, [unchanging]);
                        <button onClick={() => setReTest(prevState => prevState + 1)}>test button: {reTest}</button>
                -> the button is not setting "unchaing" state used for useMemo. so useMemo does NOT run again after the first when clicking button.
                -> we go into inspect -> profiler, since we have react dev tools extension. Now reload and start profiling.
                -> when NOT using memo it takes 230ms on initial Testing render, then 100ms+ each time we click the button
                -> when using Memo, it takes 230ms on initial Testing render, then only 1ms for each click of the button.
                -> we can EASILY see the huge difference, memo is for large calculations that slow our page


        Memo review- I have better notes from previous course, but memo or React.memo() basically prevents the entire component from re-renders if its props
                have not changed, where as useMemo() stops a function from calling and stores a calculation or return value. https://www.developerway.com/posts/how-to-use-memo-use-callback

                Ex -  a nested component won't re-render every time it's parent does, only when its props change or it's state inside, which makes sense.
                    -> so we just wrap the component in memo() and read the guide for more advanced issues,such as shallow comparison
                      https://react.dev/reference/react/memo    React compares old and new props by shallow equality: that is,
                      it considers whether each new prop is reference-equal to the old prop

                    const ButtonComponent = memo(({ children, onClick }) => {
                          return (
                            <button type="button" onClick={onClick}>
                            </button>
                          );

              -> we must also memoize the function onClick that is passed in, it changes due to shallow equality in the link above. same as objects/arrays
               --> ** if you create a new function when rendering the parent component, React will consider it to have changed even if the function has the same definition.
                To avoid this, we memoize the actual function definition with useMemo or useCallBack() , in addition to making the component wrapped in memo()

                 const memoizedHandleClick = useMemo(() => handleClick, []);
                <button type="button" onClick={memoizedHandleClick}>

                -> this way, we kept all our same code, but wrapped our component in memo() and now memoized the function to make it not re-render every time
                    -> unless real props have changed that we want, we have no array dependency above because a function is always the same code.

            ** After seeing these incredibly easy to implement performance gains, we should always create our app with normal props and no memoizing at first
                -> it will be easy to put state in redux later if it is connected to other components, but things like forms do not need redux because no connection
                -> but we will most likely put fetching in redux so we can grab data for all components before it loads, instead of waiting until it renders.
                -> memoizing is almost useless without wrapping a component in React.memo()
                -> the biggest performance gain will be preventing element rendering such as mapping over data array to render component list. memoize them
                    -> to prevent heavy component re-renders, unless the data, (dependency array) changes.
                ->we can potentially use context and simply memoize every value passed in, so every dependent consumers does not update on one state change,
                    -> but we should be using redux anyway.

            useCallback - same as useMemo() except, it is ONLY for memoizing functions, since the function won't change like a calculated useMemo, we
                    -> will never be using an array dependency most likely.
                    -> when wrapping a component in memo, remember above, it uses shallow equality and sees functions as changed each time which means re-render
                    -> so we put the already written function in useMemo, but now we can specifically use useCallBack, or simplify with useMemo for everything
                    const memoizedHandleClick = useMemo(() => handleClick, []);
                    const memoizedHandleClick = useCallback(handleClick, []);



            setInterval() review - in this article we see pitfalls of setInterval and we should use useInterval a custom flexible hook https://overreacted.io/making-setinterval-declarative-with-react-hooks/
                    -> with strict mode being on in development, our intervals run twice, so we have 2 intervals counting. this is good because it catches us not "cleaning" up
                    -> like in useEffect, to fix we should clear the interval in the useEffect cleanup return function. Now with the 2nd run it removes that
                    -> interval and starts the 2nd interval that runs smoothly.
                            useEffect(() => {
                                let time = setInterval(() => {
                                    setTimer(prevState => prevState + 1)
                                }, 1000)
                                return () => {
                                    clearInterval(time)
                                }
                            },[])
                             <div>counts:{timer}</div>
                    -> to make our own customizeable delay by input, like in the link we change delay from hardset number to a state
                    -> potential use cases are, if we fetch constantly to the server or need constant updates, but then notice the user goes to another tab
                    -> we could then slow down our calls, no need to waste server time while the user is away!
                                const [timer, setTimer] = useState(0)
                                const [delay, setDelay] = useState(1000)
                                useEffect(() => {
                                    let time = setInterval(() => {
                                        setTimer(prevState => prevState + 1)
                                    }, delay)
                                    return () => clearInterval(time)
                                },[delay])

                    -> other unique ideas can be passing in a value that determines if we want the interval to start or not, this is so it doesn't auto start
                    -> on page render, and we can start it ourselves. it doesn't involve chaing delay, its simply, DONT start the interval if were not ready, inside if()
                                if (delay !== null) {
                                  let id = setInterval(tick, delay);
                                  return () => clearInterval(id);
                                }

            *** This is the end of The Odin projects react course, I'm now moving to nodejs***

        Zustand notes - zustand replaces redux due to being much simpler for us without slices
       we will still learn react-query to handle data fetch from our api, which could in theory replace zustand
        but we will use both for now

        we create a store.js file -> I have made a createstore live template

        -> we MUST use the spread operator with nested objects or something like immer
            import {create} from 'zustand'
            import {createJSONStorage, persist} from "zustand/middleware";

          export const useStore = create(devtools((set) => ({
                person: {age: 30, name: 'Michel', favNums: [4, 5]},
                addAge: () => set((state) => ({
                    person: {
                        ...state.person,
                        age: state.person.age + 1,
                        favNums: [...state.person.favNums]
                    }
                }), false, 'add age'),

            })))


         note zustand has merging behavior, so when we reset the counter, we don't need to do spread operator {...state, counter: 0} -> we can just do {counter: 0}
            doing the above, zustand merges previous state, so we keep name: 'bob' and only change counter to 0
            -> in react state, we would have to spread ...prevState, to keep all other state properties,

        -> when we make persist, we should wrap it in devtools first, so we can see the state changes in redux devtools
             the 'false' after the state setter, 'resetCounter' means, do not batch state changes
                 when this was true, the toggle color mode would batch changes, and it did not change
                 when we set it to false, it worked as expected

            ->the string after true/false is a debugger name, so we can see what state setter is being called in redux devtools

                export const sessionStore = create(devtools(persist((set, get) => ({
                name: 'bob',
                counter: 0,
                resetCounter: () => set((state) => ({
                    ...state,
                    counter: 0
                }), false, 'reset counter'),
                incrementCounter: () => set((state) => ({
                    ...state,
                    counter: state.counter + 1
                }), false, 'increment counter'),

            }),
            {
                name: 'app-session-storage',
                storage: createJSONStorage(() => sessionStorage),
            },
        )))




       -> we see, if we set the state we don't need to do {...state, counter: 0} -> we can just do {counter: 0}
       -> we must remember in regular state the default way so we don't mutate state, like zustand lets us.

   inside the actual component:
        Never access the entire store, it will re-render when state in the same store in another component changes
            const { counter, username } = sessionStore((state) => state); XXXXXX

       -> we make sure to import store from store.js and not zustand. I made a livetemplate for usestore as well
         -> if this is a big store, we will re-render a lot, so we should select the state we need from the store this way
         -> we use the destructure method here, but we can use the single way, but the single way does NOT let us access multiple states
             const { counter } = sessionStore((state) => ({ counter: state.counter }));

      *** The best solution is to access each state we will use, so like above, only access the state we need, not the entire store
            const { counter, username } = sessionStore((state) => ({
              counter: state.counter,
              username: state.username,
            }));
            -> can be written separately as:
                const counter = sessionStore((state) => state.counter);
                const username = sessionStore((state) => state.username);


            <button className={"test-btn"} onClick={toggleColorMode}>toggle color mode
            </button>
            <p>{`current state: ${colorMode}`}</p>

-------------------------------------------------------------------------------------------------------

            React error boundary - we use this so errors dont crash the entire website, instead if we put them around each route
                -> we can have a custom error page, or a fallback component that shows a message to the user, and we can log the error
                -> we also have a wrapper for the whole page that shows a neat error page telling the user to refresh or close and try again
                -> we must make sure if we need suspense around each route, and if we even need error boundarys at the entire page level or more local
                     -> remember having error boundarys locally prevents the entire app from breaking so the user can stil navigate

               *** when we get an error we need to let the user click a button to reset state and call the api again. or else they are stuck forever!
                   -> this video helps us https://www.youtube.com/watch?v=1_dLaSjzOMY , https://www.npmjs.com/package/react-error-boundary
                   -> we also need the Error boundary fallback which has a reset button, and we need to pass the reset function to the fallback component
                    -> our component may be complex and have different shaped skeletons, so we make 1 bigger skeleton fallback component with them all in 1

                  <ErrorBoundary fallbackComponent={ErrorFallback} onReset={() => setCurrentUserId(0)}>
                      <Suspense fallback={<SkeletonComponent/>}>
                        <Posts currentUserId={currentUserId}
                    </Suspense>
                    </ErrorBoundary>

                The fallback will have a button and say the error: and we can reset the component to what it looked like before, while reseting the state ourself
                    <div role="alert">
                      <p>Something went wrong:</p>
                      <pre style={{ color: "red" }}>{error.message}</pre>
                      <button onClick={() => resetErrorBoundary()}>Retry</button>
                    </div>

                npm install react-error-boundary
                we wrap the entire app and have a custom page for it, similar to a standard 404 error page
                        <ErrorBoundary fallback={<CustomPageFallback/>}>
                            <App/>
                        </ErrorBoundary>




                Now inside the Chart component we must lazy load its dependencies, such as the chart library
                    -> if we don't, then even thought we lazy load Charts component, the library is loaded by simply going
                    -> to our home page, which makes it useless, lazy load all its packages!!

                const LazyReactECharts = React.lazy(() => import('echarts-for-react'));

             Lazy load - since we are lazy loading, we now know to always use suspense, even if we don't really want a fallback we can leave it blank
                *** it should be important to note, one user said we should not code split every route this way unless the user has to click a button to access the page
                    -> we want the landing page to be as fast as possible, so we should code split everything we can, and lazy load it
                   *Remember, do NOT pre optimize, build the app normally then see our whole package size and decide if to code split,
                        -> error boundarys and suspense can be used without splitting, suspense will wait for async request AND for the code to load(which is fast)
                            -> so suspense is replacing our loading state for waiting on the api call

                   vite needs to know to give us time to wait for the lazy loaded code, so we must add this to vite.config.js
                     optimizeDeps: {
                        include: ['echarts-for-react'], // Add your dependencies here
                      },
                      // Set the suspense timeout
                      suspense: { timeout: 10000 },
                      experiments: {
                        optimizeDeps: {
                          entries: ['echarts-for-react'], // Add your dependencies here
                          experimentalCodeSplitting: true,
                        },
                      },


          Floating points decimal fix & bigInt -
                In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard)
                   all numbers positive or negative can be up to 15 digits before

                    -> these are regular numbers in js
                        let x = 999999999999999 -> logs 999999999999999 because 15 digits
                        let y = 9999999999999999 -> logs 10000000000000000 because 16 digits
                        let z = 999999999999999999999 -> logs 1e+21 because 21 digits

                -> when we want to use numbers bigger than 15 digits, we can use bigInt
                    -> bigInt is created in 2 ways, by appending n to a number or putting it inside bigInt()
                        let bigX = 12345678901234567890123456789n -> logs 12345678901234567890123456789
                        let bigY = BigInt(1234567890123456789012345)  -> logs 1234567890123456789012345

                        typeOf x -> number
                        typeOf bigX -> bigInt
                -> math between bigInt and a number are not possible and give error -Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
                -> to do this math we need to convert the bigInt
                    let x = 5n;
                    let y = Number(x) / 2;

                -> if we need to check numbers to see if they're in 15 digit range or NOT a decimal, we can use
                    Number.isSafeInteger() -> which gives true/false
                -> we access the maximum/minimum number allowed to be a number and not bigInt
                    let x = Number.MIN_SAFE_INTEGER;
                    let x = Number.MAX_SAFE_INTEGER;

        Floating point decimals -
               -> When doing math in js, we notice adding 0.01 + 0.02 does not give 0.03 it gives 0.030000000000000004
               -> to get what we want, we can use packages like decimal.js or others here https://github.com/MikeMcl/big.js/wiki
               -> if we have simple math we know the decimal places, then we can add whole numbers, then divide by what we need
                       let c = 1
                        let d = 2
                        let dec = (c + d) / 100 -> 0.3

                -> if we don't need advanced math, big.js might be enough for decimals https://www.npmjs.com/package/big.js?activeTab=readme

                    npm install big.js
                -> pick the rounding method we want, such as roundHalfUp, roundHalfEven, roundHalfDown, roundUp, roundDown
                    Big.RM = Big.roundHalfUp

                -> simply create decimals with new Big()
                    let num1 = new Big(0.1);
                    let num2 = new Big(0.2)
                    console.log(num1.plus(num2).toFixed(5)) -> 0.300

                -> our problems with floating point math are fixed. use toFixed() to get decimal places we want, or toPrecision() to get total numbers we want
                -> simply chain math methods and put toFixed() at the end
                    num1.div(num2).plus(0.5).times(9).toFixed(4)

  */

import Testing from "./components/Testing.jsx";
import {ErrorPageTest} from "./components/ErrorPageTest.jsx";
// import Chart from "./components/Chart.jsx";
import {localStore} from "./store.js";
import {ErrorBoundary} from "react-error-boundary";
import Big from 'big.js';

const LazyChart = lazy(() => import('./components/Chart.jsx'))

function App(props) {


    Big.RM = Big.roundHalfUp
    let num1 = new Big(0.1);
    let num2 = new Big(0.1)
    console.log(num1.plus(num2).toFixed(3))
    console.log("hello world")

    const {colorMode, toggleColorMode} = localStore((state) => ({
        colorMode: state.colorMode,
        toggleColorMode: state.toggleColorMode
    }));

    return (
        <div className={`${colorMode} App`}>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to="/test">Test</Link>
                <Link to="/chart">chart</Link>
            </div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path="/test" element={<Testing/>}/>
                <Route path="/chart" element={
                    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
                        <Suspense fallback={<div></div>}>
                            <LazyChart/>
                        </Suspense>
                    </ErrorBoundary>
                }/>
                <Route path="*" element={<ErrorPageTest/>}/>
            </Routes>

        </div>
    )
}



export default App




/*
Typing game
const [wordCount, setWordCount, isStarted, setIsStarted, timeRemaining, setTimeRemaining, STARTING_TIME, textData, textRef, handleChange, startGame  ] = useTypingGame();

<div id="container">
            <h1>Typing speed game</h1>
            <textarea ref={textRef} name="words" id="" cols="30" rows="10"  value={textData} onChange={handleChange} disabled={!isStarted}/>
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isStarted} >start game</button>
            <h2>word count: {wordCount}</h2>
            <br/>

        </div>
*/

/* render prop function- to create a format that lets us keep our components style & elements, while easily keeping render logic to not rewrite.


<DataFetcher
    url={"https://swapi.dev/api/people/1/?format=json"}
    render={(data, isLoaded) => {
       return (
         <>
             {
             isLoaded ? <p>{data.name}</p>
             :  <h1>Loading...</h1>
             }
        </>
       )
    }}
/>
*/


/*
form data list gen with submit button
function App() {
    const [formData, setFormData] = useState({task: ""})

    const [tasks, setTasks] = useState([]);

    function handleChange(event) {
        setFormData(prevData => {
            return {
            ...prevData,
                [event.target.name]: event.target.value
            }
        })

    }

    function submitTask(event) {
        event.preventDefault();
        setTasks(prevTask => {
            return [
                ...prevTask,
                formData
            ]
        })
        setFormData({task: ""});
        document.querySelector('input[type="text"]').focus();
    }



    return (
        <div className="container">
            <form action="" onSubmit={submitTask} >
                <input type="text"
                    placeholder={"task"}
                    name={"task"}
                    value={formData.task}
                    onChange={handleChange}
                />
                <button >Submit</button>
            </form>

            <Overview
                tasks={tasks}
            />
        </div>
    )
}


*
*  */

/* Box testing, local state and passed down state


function App(props) {


    const [squares, setSquares] = React.useState(boxes);

    function toggle(id) {
        //something with setSquares and loop over to match id!
        console.log(id);
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square;
            })
        })
    }

    const squareElements = squares.map(item => {
        return <Box on={item.on} key={item.id} toggle={() => toggle(item.id)}></Box>
    })

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="holder">
                {squareElements}
            </div>

        </main>
    )
}
*/

/* meme generator project
<div className={"container"}>
                <MemeGen_Navbar />
                <div className="content">
                    <Meme />

                </div>
            </div> */

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

/* Darkmode project
function App() {

    const [dark_Mode, setDark_Mode] = useState(false)

    function toggleDarkMode() {
        setDark_Mode(prevState => !prevState)
    }




    return (
       <div className={"container"}>
           <FunFacts_Navbar
            // key={1}
            darkMode={dark_Mode}
            toggleDarkMode={toggleDarkMode}
           />
           <FunFacts_Main
           // key={2}
           darkMode={dark_Mode}


           />

            </div>
    )
} */







