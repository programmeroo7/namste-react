const heading = [React.createElement('div', { id: 'heading' },
    [React.createElement('h1', {}, 'fist first'), React.createElement('h1', {}, 'fist second')]),
    React.createElement('div', { id: 'heading' },
        [React.createElement('h1', {}, 'second first'), React.createElement('h1', {}, 'second second')])];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);