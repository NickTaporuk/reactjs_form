
define(['react', 'reactDOM'], function (React, ReactDOM) {

    var CommentForm = React.createClass({
        displayName: 'CommentForm',

        render: function () {
            return React.createElement(
                'div',
                { className: 'commentForm' },
                'Hello, world! I am a CommentForm.'
            );
        }
    });
});