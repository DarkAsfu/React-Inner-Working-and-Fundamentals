const HelloWorld = () => { 
    return React.createElement(
        'p',
        {},
        "HelloWorld"
    )
};

const anotherHello = () => {
    return React.createElement('p', {}, 'Another Ashraful Islam');
};

const anotherHello1 = () => {
    return React.createElement('p', {}, 'Another Ashraful Islam1');
};

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
