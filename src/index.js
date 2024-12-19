import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


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

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

const [userName, setUserName] = useState();

  useEffect(() => {
    // API call for user info.
    const data ={
      name:"Ashutosh"
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}> 
      <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
        <div className="app">
          {/* <UserContext.Provider value={{loggedInUser : "Elon musk"}}> */}
            <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path:"/resturant/:redId",           // dynamic route
        element:<ResturantMenu />
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement:<Error />
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
