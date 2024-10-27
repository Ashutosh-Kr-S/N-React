import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// // React.createElement => object =>  on renedreing its becomes an HTMLElement
// // const heading  = React.createElement("h1",{id:"heading"},"Namaste React 🚀");

// //JSX - HTML like syntax
// // const jsxheading  = (<h1 className="head">Namaste React using JSX 🚀</h1>)

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(jsxheading);

// // React component
// //1.class based components - no body uses now

// //2.function based components - today

// // component composition

// const title = <h1>Namaste React using JSX using variable 🚀</h1>;

// const Title = () => (
//   <h1 className="head" tabIndex={5}>
//     Namaste React !
//   </h1>
// );
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {/* <Title /> */}
//       {title}
//       <h1 className="heading"> Namaste React using functional components 🚀</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// Lets Start

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      //footer
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
