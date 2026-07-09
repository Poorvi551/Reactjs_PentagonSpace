# Reactjs_PentagonSpace

# Table of Contents :-

1. [React.js](#reactjs)
2. [Library](#library)
3. [Framework](#framework)
4. [Feature of Reactjs](#feature-of-reactjs)
5. [Component](#component)
6. [Virtual DOM/ Reconcilation](#virtual-dom-reconcilation)
7. [Single Page Application](#single-page-application)
8. [Javascript XML](#javascript-xml)
9. [Vite Installation](#Vite-Installation)
10. [Map Filter and Reduce](#map-filter-and-reduce)
11. [Component](#component)
12. [Props](#props)
13. [Hooks](#hooks)
14. [Conditional rendering](#conditional-rendering)
15. [React Portal](#react-portal)
16. [Toast Example](#toast-example)
17. [React Router](#react-router)
18. [useRef() Hook](#useref-hook)
19. [Form Components](#form-components)
20. [useEffect() Hook](useEffect()-Hook)
21. [Props Drilling](#props-drilling)
22. [React Application Optimization](#react-application-optimization)
23. [LifeCycle methods](#lifecycle-methods)
24. [Private Routing/ Private Route](#private-routing-/-private)
25. [Higher order ](#higher-order-component)

# React.js

#### * **React.js :-** React.js is a open source frontend javascript library used to built user interfaces quickly, particularly for *single page application*.

* React.js wa developed by ***Jordan Walke*** in 2012 and open sourced in 2013.
* It is maitained by ***meta*** (Facebook).

## Library

* Library is a collection of pre written codes, functions and Tools,that can be used in our program to build application faster.

## Framework 

* Framework is a collection of pre written codes, functions and tools plus a complete structure and set of rules we must follow.

### Feature of Reactjs 

1. Component based Architecture
2. React.js uses virtual DOM.
3. React.js is used to develop single page applications(SPA)
4. React.js uses jsx
5. Unidirectional data flow.

## Component 

* React.js is a component based architecture it means it allows us to divide user interfaces into small piece of blocks that blocks is nothing but component and it is reusable.

## Virtual DOM/ Reconcilation 

* There are two types of DOM :-
    1. Real DOM
    2. Virtual DOM

### * **1. Virtual DOM :-**

* Virtual DOM is a replica of Real DOM.
* Real DOM and Virtual DOM will be in sink with the help of *"Reconcilation"*. ***Reconciliation*** is achieved through ***"diffing algorithm"***.
* *Reconciliation* means comparing old virtual DOM and new virtual DOM to find difference.

## Multipage Application 

* **Multipage Application (MPA) :-(Server-side Rendering)** 

* Multipage Application is a Fullstack web application, for each and every request made by the user, server loads and sends new html pages or files.
* *Ex :- Traditional portals*
* Traditional websites like banking applicaations , e-commerce website, university portals etc..

* ***Drawbacks:-***

  1. Slow navigation
  2. Bad user experience(entire page reload each time)
  3. Less mobile friendly due to network.

## Single page Application 

#### * **SPA:-**

* SPA is a fullstack web application that loads a single HTML file only once from the server and dynamically updates the content on the same page without reloading.
* *Ex :- Facebook, Gmail, Flipkart, and Social Media Applications etc..*

#### * **Advantages :-**

1. Smooth navigation
2. Reduces Server Load (Everything client will render)
3. Feels like mobile App

## Javascript XML 

* *JSX* is a way to write HTML like code inside the javascript code to create component.
* JSX is similar to HTML.
* JSX is not understandable by the browser.
* ***Browser will not understand react js or JSX it uses translator to convert it to js which is understandable by browser.

###  ***Translator/transcompiler -> Babel.js***

### * Difference between HTML and JSX :-

    **HTML**                                                |                         **JSX**
                                                            |
    1. <!--Comment-->                                       |    1. {/*Comment*/}
    2. <h1 class="head">Hello</h1>                          |    2. <h1 className="head">Hello</h1>
    3. <h1 id="head">Hey</h2>                               |    3. <h1 id="head">Hey</h2>
    4. <label for="user">Name </label>                      |    4. <label htmlFor="user">Name</label>
    5. <p style="color:red">Hello</p></tr>                  |    5. <p style={{color:"red"}}>Hello</p>
    6. No camelcase onclick, onsubmit,onchange etc..        |    6. CamelCase - onClick, onSubmit,onChange etc..

### * Rules of JSX :-  

1. Always File name and component name should start with capital letter.
2. If there are multiple elements, use parent tag (<div> or <> </>)
3. Strict syntax is followed in JSX.
4. JSX expression '{}' is present.

* **Create react project :-**

* There are two types to create project:

   1. Standard method
   2. vite method - quick and mostly used by companies.

## Vite Installation :-

      > npm create vite@latest
      > Project name - in lowercase - first_project
      > Select Framework - React
      > Select variant - javascript
      > Install with npm and start now? yes

#### **Open project folder - delete -> app.css and index.css -> open main.jsx -> remove - import index.css -> than open app.jsx -> remove whole complete code and write your logics for the project.**

* In case of multiple elements use parent tag <div> or empty fragments(<> </>).

* *Ex:- Source code - []()*
* *Ex:- Source code - []()*

## Map Filter and Reduce

#### * Map

*Ex:- Source code - []()*

#### * Filter

*Ex:- Source code - []()*

#### * Reduce

*Ex:- Source code - []()*

## Component

* Component - React.js is a component based it means it allows us to divide user interfaces into small pieces of blocks this block is nothing but component and it is reusable.
* There are 2 types of components:

  1. Function based component
  2. Class based component

<table>
   <tr>
     <td><b>Function based component</b></td>
     <td><b>Class based component</b></td>
   </tr>
   <tr>
     <td>FBC is also known as stateless component,but using hooks we can manage states.</td>
     <td>CBC is also known as stateful component</td>
   </tr>
    <tr>
        <td>FBC is very simple and easy to use</td>
        <td>CBC is very complex and requires more code. </td>
    </tr>
    <tr>
       <td>No need of constructor, render() and this.</td>
       <td>Needs constructor,render() and this.</td> 
    </tr>
    <tr>
        <td>Lifecycle method is not supported, but using hooks we can achieve.</td>
        <td>Lifecycle method is supported.</td>
    </tr>
</table>

* Structure of FBC :-

      import React from 'react'
      const App=()=>{
      return(
         <h1>Welcome</h1>
      )
      }
      export Default App;

* Structure of CBC :-

      import React from 'react'
      import {Component} from 'react'
      class App extends Component
          render(){
             return(
                 <h1>Welcome</h1>
       )
       }
      export Default App;

## Props

#### * Props are nothing but properties or attributes

* Props are way to transfer data from one component to another component (i.e parent -> to child.
* The component which receives data that data cannot be modified, it is immutable (read-only).
* Props are unidirectional.
* *Ex: Source code - [props_example](./props_example)*

App.jsx

    import React from 'react'
    import UserData from './pages/UserData'
    const App =()=>{
       let username='Poorvi'
       return(
       <>
       <UserData a={username}/>
       </>
       )
    }
    export Default App;

UserData.jsx

    import React from 'react'
    const UserData=(props)=>{
    return(
        <>
        <h1>Name:{props.a}</h1>
        </>
    )
    }
    export Default UserData;


***NOTE :- Function should always be returned to display the value if you use console.log - value will not be displayed so use return keyword.***

## Hooks

* **Current version of react.js is - 19.2**
* **Hooks :-** Hooks are special functions that allows function based components to use features like state management,lifecycle methods, side effects etc.

  <table>
      <tr>
          <td>Hook names</td>
          <td>Purpose</td>
      </tr>
      <tr>
          <td>useState()</td>
          <td>To manage states</td>
      </tr>
      <tr>
          <td>useEffect()</td>
          <td>To perform side effects(making API calls)</td>
      </tr>
      <tr>
          <td>useContext()</td>
          <td>For global  state management </td>
      </tr>
      <tr>
          <td>useNavigate() </td>
          <td>To perform </td>
      </tr>
  </table>
  
  ### State Management

  * **State :-** State is an object that holds data and allows it to change over the time.
  * Whenever the data changes, this changes are captured and stored.
 
  * *Syntax :-*

        import {useState} from 'react'

        const [state,setState]=useState(initial value)
                 /       \
    state variable        state function

* Ex :- Source code - 
* Ex :- Countdown Example - []

 ## Conditional rendering

 * Conditional Rendering means based on the condition the components or elements will be rendered on the UI (user interface).
 * To write conditions we use :
      1. if-else
      2. ternary operator
      3. short-circuit operator

### 1. if-else :

  * Example : Source code :


        import React from 'react'
        import {useState} from 'react'
        const App = () => {
           const [state,setState]=useState(false)
           let message;
           if (state){
               message = <h1>Welcome to home page</h1>
           }else{
               message=<h1>Please Login</h1>
           }
           function toggle(){
               setState(!state)
           }
           return (
              <>
                 <h1>{message}</h1>
                 <button onClick={toggle}>Click me</button>
              </>
           )
        }
        export Default App

### 2. Ternary Operator :

* *Example : Source code -*

App.jsx

      import React from 'react'
      import { useState } from 'react'

      const App = () => {
        const [state,setState]=useState(false)
        function toggle(){
            setState(!state)
        }
      return (
          <>
            <h1>{state ? "Welcome" : "Please Login"}</h1> 
            <button onClick={toggle}>Click</button>
         </>
      )
      }

      export default App

* *Ex : Login logout example : Source code -*

      import React from 'react'
      import { useState } from 'react'

      const App = () => {
         const [state,setState]=useState(false)
         function toggle(){
             setState(!state)
         }
       return (
             <>
               <h1>My App</h1> 
               <button onClick={toggle}>
                  {state ? "Welcome" : "Please Login"}
               </button>
            </>
       )
      }

      export default App

* *Example :- Password Visibility (masking and unmasking): Source code -*

      import React from 'react';
      import { useState } from 'react';

      const App = () => {
         const [show,setShow]=useState(false)
         function toggle(){
             setShow(!show)
         }
      return (
            <>
               <input type={show ? "text" : "password"}/>
               <button on onClick={toggle}>
                 {show ? "Hide" : "Show"}
               </button>
           </>
      )
      }

      export default App

### 3. Short circuit Operator 

1. Logical AND Operator.
2. Logical OR Operator.

### 1. Logical AND Operator.

* *Ex : Source code -*

      import React,{useState} from 'react'

      const App = () => {
         const [state, setState] = useState(false)
         function toggle(){
            setState(!state)
         }

       return (
              <>
                <center>
                    <img src='https://www.oppo.com/content/dam/oppo_com/common/mkt/v2-2/reno15-series-en/list-page/reno15-pro-max/480-600-gold.png' height=  {'200px'}></img>
                    <h2>Oppo A5 5G</h2>
                    <p><b>Price:</b>20000</p>
                    <p><b>Ratings:</b>⭐⭐⭐⭐</p>
                    <button onClick={toggle}>{state ? "Hide" :"View" }</button>
                    {state && <div>
                     <h2>Specifications</h2>
                     <p><b>8GB and 256GB</b></p>
                     <p>Snapdragon</p>
                     <p><b>50 MP</b></p>
                     <p><b>6.7inch</b></p>
                     </div>}
                 </center>
             </>
       )
      }

      export default App

### 2. Logical OR Operator.

* *Ex : Source code -*

      import React from 'react'

      const App = () => {
      let users=[
       {id:1,name:'Rajesh',image:"https://media.istockphoto.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=ZXRPTG9VMfYM3XDo1UL9DEpfO8iuGVSsyh8dptfKQsQ="},
      {id:2,name:'Maasha',image:""},
      {id:3,name:'Tom',image:"https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"}
      ]
      return (
             <>
               <h1>Users</h1>
               <div style={{display:"flex",gap:"20px"}}>
               { users.map((x)=>{
               return<div>
               <h2>{x.id}</h2>
               <h3>{x.name}</h3>
               <img src={x.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ANz49vSwixmIZwGMtfJb8KO8raLm81ZN35BTJhoiGA&s"} height={"200px"} alt=""/>
              </div>
            })
           }</div>
       </>
      )
      }

      export default App


## React Portal 

* React portal allows us to render the components UI in different DOM Node outside parent DOM node.
* *Ex:- Use case -> modals,tool-tips,popups etc.*
* *Ex - Source code -*

  index.html
<hr>

    <!doctype html>
    <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>react_portal</title>
     </head>
    <body>
      <div id="root"></div>
      <div id="portal"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
    </html>

  PortalExample.jsx

    import React from 'react'
    import ReactDOM from 'react-dom'

    const PortalExample = () => {
     return ReactDOM.createPortal(
     <div>
        <h1>React Portal</h1>
        <h1>JS</h1>
     </div>,
    document.getElementById("portal")
    )
    }

    export default PortalExample

App.jsx

    import React from 'react'
    import PortalExample from './components/PortalExample'

    const App = () => {
    return(
        <>
        <h1>Welcome</h1>
        <PortalExample/> 
        </>
     )
    }
    export default App
    
## Toast Example 

* *Ex:- Source code-[toast_example](./toast_example)*
  
App.jsx

    import React,{useState} from 'react'
    import ToastExample from './components/ToastExample'

    const App = () => {
       const[toast,setToast]=useState("")
       function changeData(){
          setToast("Item added to cart")
       setTimeout(()=>{
       setToast("")
       },2000)
     }
    return (
        <>
          <button onClick={changeData}>Add Item</button>
          {toast && <ToastExample a={toast}/>}
    </>
    )
    }

    export default App

* PortalExample.jsx

      import React from 'react'
      import ReactDOM from 'react-dom'

      const ToastExample = (props) => {
      return ReactDOM.createPortal(
      <div style={{
        position:'fixed',
        right:"20px",
        top:"10px",
        backgroundColor:"black",
        color:"white",
        borderRadius:"10px",
        padding:"10px"
      }}>
        <h1>{props.a}</h1>
      
      </div>,
       document.getElementById("toast")
      )
      }

      export default ToastExample

* Library Installation :

* Toastify library is provided by react

  * Installing library :

        npm install react-toastify
      or

        npm i react-toastify

  * Example for creating toast using react-toastify library:
  * *toast* -> To create or Trigger the message.
  * *ToastContainer* -> To display the message on UI.
 
  * *Values*
    1. success
    2. error
    3. info
    4. warn
    5. loading

* Position :
  1. top-right
  2. bottom-right
  3. top-center
  4. botton-center
  5. top-left
  6. bottom-left

* Theme :

  1. light
  2. colored
  3. dark
 
* Auto Close
  
* autoclose={2000}

* *Ex:- Source code -[toastify_example](./toastify_example)*

  App.jsx

      import React from 'react'
      import {toast,ToastContainer} from 'react-toastify'

      const App = () => {
         function toastExample(){
            toast.success("Login Success...")
         }
      return (
          <>
            <button onClick={toastExample}>Click</button>
            <ToastContainer theme='colored' autoClose={3000}/> 
          </>
      )
      }

      export default App

## React Router

* **React router** is used to perform navigation between the pages or components without reloading.
* Don't use anchor tag in react.js

### * Installation of react-router :

* Installation :

  >> npm i react-router-dom

* Steps :

  1. Activate *or* Enable Routing for the app component(Parent)using {BrowserRouter}.
  2. Create a path for the components(child) using {Routes,Route}.
  3. Create a link for the Child Components to navigate using {Link}.

## UseRef() Hook

* useRef() is used to target and manipulate DOM elements like getElementById,getElementByClassName, querySelector and querySelectorAll.
* useRef deal with **Real DOM**.

<table>
    <tr>
        <td>Use case</td>
        <td>Syntax </td>
    </tr>
    <tr>
        <td>To read input value </td>
        <td>.current.value</td>
    </tr>
    <tr>
        <td>To change text</td>
        <td>.current.textcontent=" "</td>
    </tr>
    <tr>
        <td>To Apply styles</td>
        <td>.current.style.color=" "</td>
    </tr>
    <tr>
        <td>To control Audio/Video</td>
        <td>.current.plat() & .current.pause()</td>
    </tr>
</table>

App.jsx

    import React,{useRef} from 'react'
    const App=()=>{
      let headingRef=useRef(null)
      function change(){
        headingref.current.textContent="Welcome"
        headingRef.current.style.color="Green"
      }
      return(
           <>
             <h1 ref={headingRef}>Hello</h1>
             <button onClick={change}>Click</button>
           </>
      )
    }
    export default App

## Form Components 

* There are 2 types of form components
   1. Controlled components
   2. Uncontrolled components

<table>
    <tr>
        <td>Controlled form Components</td>
         <td>Uncontrolled form components</td>                                                                                                                                                                                                                         
    </tr>
    <tr>
         <td>Controlled form component is a form event whose value is controlled by react state using useState() hook</td>
        <td>Uncontrolled form component is a form event whose value is controlled by real DOM using using useRef() hook</td>
    </tr>
</table>

* Controlled Form Components :

  * *Ex:-Source code*

App.jsx

    import React,{useState} from 'react'
    const App=()=>{
        const [state,setState]=useState("")
        const [email,setEmail]=useState("")
        function emailFunction(e){
            setEmail(e.target.value)
            console.log(e.target.value)
        }
        return(
             <>
              <h1>Name:{state}</h1>
              <h1>Email:{email}</h1>
              <input
              type="text"
              value={state}
              onChange={(e)=>{setState(e.target.value)}}/>
              <br/>
              <input
              type="email"
              value={email}
              onChange={emailFunction}/>
            </>
       )
     }
    export default App

* Uncontrolled form components

  App.jsx

      import React,{useRef,useState} from 'react'
      const App=()=>{
          let inputRef=useref(null)
          const [display,setDisplay]=useState("")
          function targetInput(){
               console.log(inputRef.current.value);
               setDisplay(inputRef.current.value);
           }
           return(
                 <>
                   <h1>{display}</h1>
                   <input type="text" ref={inputRef}/>
                   <button onClick={targetInput}>Click</button>
                 </>
            )
       }
       export default App

### Nested Ternary Operator

* *Ex:Source code-*

  App.jsx

      import React,{useState} from 'react'
      const App=()=>{
         const [product, setProduct]=useState("")
         let items=["Samsung F23","Samsung S23","Samsung M12","Samsung J7"," Redmi Note 10","Poco M3","Nothing 2a","Nothing 3a","Oppo K13"]
         let result=items.filter((x)=>{
              return x.toLowerCase().startswith(product.toLowerCase())
         })
         return (
               <>
                 <input
                   type="text"
                   value={product}
                   onChange={(e)=>{setProduct(e.target.value)}}
                   />
                 {product==" " ? (<p>Search products</p> : (result.length>0 ? (
                     <ol>
                       {result.map((x)=>{
                         return <li>{x}</li>
                       })}
                     </ol>
                   ) : (<p>No products Found</p>)
               )}
             </>
         )
        }
        export default App

*ProductsExample.jsx*

    import React,{useState} from 'react'
    const App=()=>{
        const [category,setCategory]=useState("")
        let items=[
           {id:1,name:"Boat speaker",image:"(https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_Ignite.jpg?v=1694163047)",category:"Electronics"}
           {id:2,name:"Nokia 1100",image:"https://www.astore.in/cdn/shop/files/1_e07c8c04-d4bb-463a-aabd-7660e2bde6ed.jpg?v=1762949501",category:"Electronics"}
           {id:3,name:"T shirt",image:"[https://www.astore.in/cdn/shop/files/1_e07c8c04-d4bb-463a-aabd-7660e2bde6ed.jpg?v=1762949501](https://image.hm.com/assets/hm/6f/15/6f156a9bdcd72598b4e470dd68a8e154b1844b50.jpg?imwidth=2160)",category:"Fashion"}
           let result=items.filter((x)=>{
               return (
                   <>
                     <button onclick={()=>{setCategory("Electronics")}}>Electronics</button>
                     <button onclick={()=>{setCategory("fashion")}}>fashion</button>
                     { category===" " ? (<p>Choose Category</p>) :(
                        result.length>0 ? (
                        result.map((x)=>{
                        return <div>
                        <h2>{x.name}</h2>
                        <img src={x.image} height={"200px"} alt=" " />
                        </div>
                        })
                        ) :(<p>no products</p>)
                     ))
                     </>
                )
            }
            export default App


   ## useEffect()

   * useEffect hook is a react hook that allows us to perforn side effects in functional components.
   * What is side effects?
   * Side effect is anything that happens outside the virtual DOM.
   * Ex :
        1. Making API calls
        2. Interacting with browser DOM directly
        3. Storing and reading data from local storage.
    * React handles UI useEffect will handle external stuff.
    * React will render the component first,later useEffect will run.

* Syntax :

      import {useEffect} from 'react'
         useEffect(function,[dependencies])
  
* *Ex: Source code -*

## Props drilling

* **Props Drilling** - Props drilling is a process of transforming the data from parent component to the deeply nested child component through one or more intermediate components.
* To overcome the problem of props drilling, we use *Context API.*
* Steps to achieve it :
   1. Create a context
   2. Provide data for the Context
   3. Use the Context

* Example : Contextapi_example

  Data.jsx

      import {createContext} from 'react'
      export const Data=createContext(null)

  or

      import {createContext} from 'react';
      const Data=createContext(null)
      export default Data

  > pages/
      |_ Grandparent.jsx
      |_ Parent.jsx
      |_ Child.jsx
  
   Grandparent.jsx

      import React from 'react'
      import Parent from './parent'
      const GrandParent=()=>{
          return (
              <>
                <h1>This is grandparent</h1>
              </>
          )
      }
      export default App

## React Application Optimization

    cmd
       >> npm create vite@latest optimization-technique

* Optimization is a process of improving the performance of an application.
* There are few techniques:
     1. ReactMemo
     2. useMemo
     3. useCallback
     4. Lazyloading

1. ReactMemo - React memo is used to prevent unnecessary re-renders between components.

* React will keep it in memory when component changes it will update .
* ***NOTE :- Optimization techniques also include useEffect and react portal.***

Component2.jsx

    import React from 'react'
    const Component2=()=>{
      console.log("Component 2 rendered...")
      return (
          <>
            <h1>component2</h1>
          </>
      )
    }
    export default React.memo(Component2)

Component1.jsx

    import React,{useState} from 'react'
    import Component2 from './Component2'
    const Component1=()=>{
      const [count,setCount]=useState(0)
      function inc(){
         setCount(count+1)
      }
      console.log("Component 1 rendered...")
      return (
          <>
            <h1>{count}</h1>
            <button onClick={inc}>Click</button>
            <Component2/>
          </>
      )
    }
    export default Component1

2. useMemo - It is used to prevent unnecessary re-calculations of expensive function we use useMemo hook.

App.jsx

    import React,{useState,useMemo} from 'react'
    const App=()=>{
       const [count,setCount]=useState(0)
       const [user,setUser]=useState("")
       function inc(){
          setCount(count+1)
       }
       function square(n){
          console.log("Calculating square");
          return n*n
       }
       // with useMemo
       let result=useMemo(()=>{return square(count)},[count])
       // Without useMemo
       //let result=square(count)
       return (
           <>
             <h1>Square of {count} is {result}</h1>
             <button onClick={inc}>Click</button><br/>
             <input 
             type="text"
             value={user}
             onChange={(e)=>{setUser(e.target.value)}}
             />
          </>
        )
     }
     export default App
       
3. useCallback - It is used to prevent unnecessary re-creation of function.
4. lazyLoading - It is used to load the page one-by-one. Instead of loading everything in single shot we load it one-by-one using lazyLoading.

## LifeCycle methods

* In FBC we don't have in built functions - Mount,update,unmunt using (useEffect hook)
* In CBC we have built in functions.
    1. ComponentDidMount()
    2. ComponentDidUpdate()
    3. ComponentWillUnmount()

* MOUNT and UNMOUNT - router example

* Update - countdown example

* The term lifecycle refers to series of phases where components goes through creation to removal from the DOM.
* In FBC we don't have traditional lifecycle methods like :
    1. ComponentDidMount()
    2. ComponentDidUpdate()
    3. ComponentWillUnmount()
* But using useEffect() hook we can perform similar action
* In FBC we have 3 phases
    1. Mount
    2. Update
    3. Unmount

1. Mount - Mount means component is created and inserted into a DOM.
2. Update - Update means component is rendered due to states or props change.
3. Unmount - Unmount means component is removed from the DOM

* Private Routings / Private Route

PrivateRoute.jsx

    import React from 'react'
    import {Navigate} from 'react-router-dom'
    import {toast} from 'react-toastiy'
    const PrivateRoute=(props)=>{
       let isLoggedIn=localStorage.getItem('loggedIn')
       console.log(typeof isLoggedIn);
       if (isLoggedIn){
           return props.children
       }else{
           toast.warn("Please Login")
           return <Navigate to={"/"}/>
       }
    }
    export default PrivateRoute

* To protect dashboard and Profile page :

  App.jsx

      import React from 'react'
      import {Routes, Route} from 'react-router-dom'
      const App=()=>{
        return (
             <>
               <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/dashboard' eleent={
                   <PrivateRoute>
                   <Dashboard/>
                   </PrivateRoute>}/>
                   <Route path='/profile' element={
                    <PrivateRoute>
                    <Profile/>
                    </PrivateRoute>}/>
              </Routes>
           </>
        )
      }
      export default App

## Higher Order Component (HOC)

* HOC is a function which takes another component as input and it returns a new enhanced component with additional features or logics.
  
###  Feature

1. Code Reusability
2. To avoid duplicate-logics
3. For Authentication
4. For Authorization
5. Protected Routes

* Example

  StyledComponent.jsx

      import React from 'react'
      const StyledComponent=(WrappedComponent)=>{
        return ()=>{
           return (
                 <>
                   <div style ={{background:"yellow",color:"red"}}/>
                   <WrappedComponent/>
                   </div>
                 </>
          )
       } 
      }
      export default StyledComponent

Message1.jsx

    import React from 'react'
    const Message1=()=>{
       return ()=>{
         return (
             <>
               <h1>Good Morning!</h1>
             </>
         )
       }
    }
    export default Message1

Message2.jsx

    import React from 'react'
    const Message2=()=>{
       return ()=>{
         return (
             <>
               <h1>Good Night!</h1>
             </>
         )
       }
    }
    export default Message2

App.jsx

    import React from 'react'
    import Message1 from './pages/message1.jsx'
    import Message2 from './pages/Message2.jsx'
    import StyledComponent from './components/StyledComponent'
    const App =()=>{
        let ModifiedMessage1=StyledComponent(Message1)
        let ModifiedMessage2=StyledComponent(Message2)
        return (
           <>
             <ModifiedMessage1/>
             <ModifiedMessage2/>
        )
    }
    export default App

# Projects

1. Crud opererations - student_ management project
   
   >> npm i -g json-sever  // to install mock backend or server
   
2. Create file for database outside src folder

   db.json

3. Install Axios()
   
   >>npm i axios

4. Install toastify

   >> npm i react-toastify

5. To run backend server

   * Go to cmd
       >> json-server __watch db. json __port 3000
       * *Copy endpoint and  paste it g*
       
6. To run frontend server
   
     >> npm run dev










































































































































































































































































































































































                     


































































  

 

