define(['react', 'reactDOM'], function (React, ReactDOM) {

    var CommentList = {
        displayName: 'CommentList',

        getInitialState: function () {
            return {
                name: 'search',
                props: {}
            };
        },

        render: function () {
            React.createElement(
                'div',
                null,
                'CommentList'
            );
        }
    };

    return CommentList;
});