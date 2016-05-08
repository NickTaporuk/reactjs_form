var handleClick = function (i, props) {
    console.log('You clicked: ' + props.items[i]);
};

function GroceryList(props) {
    return React.createElement(
        'div',
        null,
        props.items.map(function (item, i) {
            return React.createElement(
                'div',
                { onClick: handleClick.bind(this, i, props), key: i },
                item
            );
        })
    );
}

ReactDOM.render(React.createElement(GroceryList, { items: ['Apple', 'Banana', 'Cranberry'] }), document.getElementById('container'));