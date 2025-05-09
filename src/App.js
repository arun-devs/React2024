import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header  from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

  





     
   


    const resobj=
        {
          "info": {
            "id": "763910",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Edappally",
            "areaName": "Vazakala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.6K+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-01-31 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Fried%20Rice.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Fried%20Rice.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-f903016b-a440-444d-b621-cfb9c0eff141"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/kochi/chinese-wok-edappally-vazakala-rest763910",
            "type": "WEBLINK"
          }
        };








const AppLayout=()=>{
  const[userName,setUserName]=useState();
  useEffect(()=>{
      const data={
        uname:"arun",
      }
      console.log(data.uname);
      setUserName(data.uname);
  },[]);
    return ( 
      <Provider store={appStore}>
      <UserContext.Provider value={{UserInfo:userName}}>
        <div className="app">
      <Header/>
        <Outlet/>
        </div>
      </UserContext.Provider>
      </Provider>
        
    ) ;
};

const browserRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
        
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
        
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
    errorElement:<Error/>,
  },
  
]);



const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={browserRouter}/>);









// const heading=React.createElement(
//     "h1",
//     {id:"heading"

//     }
//     ,"hello world from react")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


//nested elements in react
// const headingnew=React.createElement("div",{id:"heading"},
//     React.createElement("div",{id:"heading2"},
//         [React.createElement("hi",{id:"heading3"},"hii"),React.createElement("hi",{id:"heading4"},"hii2")])
//     )

// const root=ReactDOM.createRoot(document.getElementById("root"))
// const final=root.render(headingnew)
// console.log(headingnew)


//jsx

// const jsxheading = <h1 id="heading">my jsx react</h1>;
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
// console.log(jsxheading);

//functional componet
// const FunctionalComponent=()=>
// {return <h1>hii arun</h1>;

// // }
// const HeadingCmp=()=><h1>welcome</h1>

// const FunctionalComponent=()=>(
//     <div>
//     <HeadingCmp/>
//     <h1 id="heading" className="heading">hii arundev</h1></div>
// )


// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FunctionalComponent/>);
