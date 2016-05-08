define([
    'react',
    'reactDOM'
], function(
    React,
    ReactDOM
) {
    return {displayName: 'Comment',
        render: function() {
            return (
                React.createElement('div', {className: "comment"},
                    "Hello, world! I am a CommentBox."
                )

                //<CommentList />
            );
        }
    }

});