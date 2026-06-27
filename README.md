# Reactjs_PentagonSpace

# Table of Contents :-

1. [React.js](#reactjs)
2. [Library](#library)
3. [Framework](#framework)
4. [Feature of Reactjs](#feature-of-reactjs)
5. [Component](#component)
6. [Virtual DOM/ Reconcilation](#virtual-dom-reconcilation)
7. [Single Page Application](#single-page-application)

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

## * **Multipage Application (MPA) :-(Server-side Rendering)** 

* Multipage Application is a Fullstack web application, for each and every request made by the user, server loads and sends new html pages or files.
* *Ex :- Tradidtional portals*
* Traditional websites like banking applicaations , e-commerce website, university portals etc..

* ***Drwabacks:-***

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

## Javascript XML :-

* *JSX* is a way to write HTML like code inside the javascript code to create component.
* JSX is similar to HTML.
* JSX is not understandable by the browser.
* ***Browser will not understand react js or JSX it uses translator to convert it to js which is understandable by browser.

###  ***Translator/transcompiler -> Babel.js***

### * Difference between HTML and JSX :-

    **HTML**                                             |                         **JSX**
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

* Vite Installation :-

  > npm create vite@latest
  > Project name - in lowercase - first_project
  > Select Framework - React
  > Select variant - javascript
  > Install with npm and start now? yes

## **Open project folder - delete -> app.css and index.css -> open main.jsx -> remove - import index.css -> than open app.jsx -> remove whole complete code and write your logics for the project.**

* In case of multiple elements use parent tag <div> or empty fragments(<> </>).

* *Ex:- Source code - []()*
* *Ex:- Source code - []()*

### Map, Filter and Reduce

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
     <td>Function based component</td>
     <td>FBC is also known as stateless component,but using hooks we can manage states.</td>
     <td>FBC is very simple and easy to use</td>
     <td>No need of constructor, render() and this.</td>
     <td>Lifecycle method is not supported, but using hooks we can achieve.</td>
   </tr>
   <tr>
       <td>Class based component</td>
     <td>CBC is also known as stateful component</td>
     <td>CBC is very complex and requires more code. </td>
     <td>Needs constructor,render() and this.</td>
     <td>Lifecycle method is supported.</td>
   </tr>
</table>



        

