import React from "react";
import ReactDOM from "react-dom/client";
// ~ React Element
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;

// ~ Title Component
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Title Component using JSX
  </h1>
);

// ~ elem Element
const elem = <span>React Eleemnt in Span </span>;

// ~ title Element
const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React title Element using JSX
  </h1>
);

// ~ React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
