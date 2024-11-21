import React from "react";
import ReactDOM from "react-dom/client"
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

// }
const HeadingCmp=()=><h1>welcome</h1>

const FunctionalComponent=()=>(
    <div>
    <HeadingCmp/>
    <h1 id="heading" className="heading">hii arundev</h1></div>
)


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);
