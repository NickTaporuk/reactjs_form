requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './js/',
    paths: {
        react       : 'bower_components/react/react',
        reactDOM    : 'bower_components/react/react-dom',
        app         : 'app',
        comment     : 'components/comment',
        commentList : 'components/commentList'
    }
});

requirejs([
     'react'
    ,'reactDOM'
    ,'comment'
    ,'commentList'
], function(
    React
    ,ReactDOM
    ,Comment
    ,CommentList
) {

    var render = function() {
        var container = document.getElementById('content');
        ReactDOM.unmountComponentAtNode(container); // needed if init has been called again

        ReactDOM.render(
            React.createElement(React.createClass(Comment),null),
            container
        );

    };
    console.log(Comment);

    render();
});