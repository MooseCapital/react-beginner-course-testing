import React, {useState, useEffect, Fragment} from 'react'
import './App.css'
import Overview from "./components/Overview.jsx";
import TestComp from "./components/TestComp.jsx";
import HighOrder from "./components/HighOrder.jsx";
import WithToggler from "./components/WithToggler.jsx";

import LogRocket from 'logrocket';
import RenderTest from "./components/RenderTest.jsx";
import DataFetcher from "./components/DataFetcher.jsx";
LogRocket.init('jgr5zk/beginner-learning-react');
LogRocket.identify('jgr5zk', {
  name: 'Moose Capital',
});

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


*  */
function App(props) {


    return (
        <div className="container">
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
        </div>
    )
}



export default App





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







