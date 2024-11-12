// const heading=React.createElement(
//     "h1",
//     {id:"heading"

//     }
//     ,"hello world from react")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


//nested elements in react
const headingnew=React.createElement("div",{id:"heading"},
    React.createElement("div",{id:"heading2"},
        [React.createElement("hi",{id:"heading3"},"hii"),React.createElement("hi",{id:"heading4"},"hii2")])
    )

const root=ReactDOM.createRoot(document.getElementById("root"))
const final=root.render(headingnew)
console.log(headingnew)

