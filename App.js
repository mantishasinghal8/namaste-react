import React from "react";
import ReactDOM from "react-dom/client";


//~ Single Structure
const heading = React.createElement(
    "h1",//^ tag name
    { id: "heading" }, //^ object that takes the attributes of the element  
    "Hello World from React!"// ^ Data to be shown
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


/* Normal Structure
*<div id="parent">
* <div id="child">
*    <h1>
*         I'm an h1 tag
*      </h1>
*   </div>
*</div>
*
*/


//~ Nested Structure
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         React.createElement(
//             "h1",
//             {},
//             "I'm an h1 Tag"
//         )
//     )
// )

// root.render(parent)

/* Siblings Structure
We will Convert create element to an array 
*<div id="parent">
*   <div id="child">
*       <h1>
*         I'm an h1 tag
*       </h1>
*       <h2>
*         I'm an h2 tag
*       </h2>
*   </div>
*</div>
*
*/

const parent1 = React.createElement(
    "div",
    { id: "parent1" },
    [React.createElement(
        "div",
        { id: "child1" },
        [
            React.createElement("h1", {}, "This is Namaste React🚀"),
            React.createElement("h2", {}, "I'm an h2 Tag"),
        ]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", {}, "I'm an h1 Tag"),
            React.createElement("h2", {}, "I'm an h2 Tag"),
        ]
    )]
)
root.render(parent1)
