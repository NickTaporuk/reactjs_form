var Avatar = React.createClass({
    displayName: 'Avatar',

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(PagePic, { pagename: this.props.pagename }),
            React.createElement(PageLink, { pagename: this.props.pagename })
        );
    }
});

var PagePic = React.createClass({
    displayName: 'PagePic',

    render: function () {
        return React.createElement('img', { src: 'https://graph.facebook.com/' + this.props.pagename + '/picture' });
    }
});

var PageLink = React.createClass({
    displayName: 'PageLink',

    render: function () {
        return React.createElement(
            'a',
            { href: 'https://www.facebook.com/' + this.props.pagename },
            this.props.pagename
        );
    }
});

ReactDOM.render(React.createElement(Avatar, { pagename: 'Engineering' }), document.getElementById('container'));