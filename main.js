import {HelloWorld, anotherHello, anotherHello1} from './another';
const App = () => {
    return React.createElement(
        'h1',
        { style: {color: 'blue'} },
        'Hello Ashraful!',
        HelloWorld(),
        anotherHello(),
        anotherHello1()
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));