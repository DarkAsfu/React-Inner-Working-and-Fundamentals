// console.log("Install React Manually");
// console.log("React =>", React);
// console.log("ReactDOM =>", ReactDOM);

// const root = document.getElementById("root");
// root.innerText = "Hello Ashraful!"
// creating JSX element
const App = React.createElement('h1', {style: { color: 'red' }}, 'Hello Ashraful!')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);