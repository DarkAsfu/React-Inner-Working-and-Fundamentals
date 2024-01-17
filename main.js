// const HelloWorld = () => { 
//     return React.createElement(
//         'p',
//         {},
//         "HelloWorld"
//     )
// }

// const App = () => {
//     return React.createElement(
//         'h1',
//         { style: {color: 'blue'} },
//         'Hello Ashraful!',
//         HelloWorld(),
//     )
// };
const HelloWorld = () =>{
    return (
        <h1>Hello World</h1>
    )
} 
const App = () => {
    return (
        <React.Fragment>
            <p>Hello, Ashraful!</p>
            <HelloWorld/>
        </React.Fragment>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));