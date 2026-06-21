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

<table>
    <td>
        <tr>HTML</tr>
        <tr><!--Comment--></tr>
        <tr><h1 class="head">Hello</h1></tr>
        <tr><h1 id="head">Hey</h2></tr>
        <tr><label for="user">Name </label></tr>
        <tr><p style="color:red">Hello</p></tr>
        <tr>No camelcase onclick, onsubmit,onchange etc..</tr>
    </td>
    <td>
        <tr>JSX</tr>
        <tr>{/*Comment*/}</tr>
        <tr><h1 className="head">Hello</h1></tr>
        <tr><h1 id="head">Hey use Strict Syntax</h1></tr>
        <tr><label htmlFor="user">Name</label></tr>
        <tr><p style={{color:"red"}}>Hello</p></tr>
        <tr>CamelCase - onClick, onSubmit,onChange etc..</tr>
    </td>
</table>

