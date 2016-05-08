var UserGist = React.createClass({
    displayName: 'UserGist',

    getInitialState: function () {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            console.log(result);
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {
        return React.createElement(
            'div',
            null,
            this.state.username,
            '\'s last gist is',
            React.createElement(
                'a',
                { href: this.state.lastGistUrl },
                'here'
            ),
            '.'
        );
    }
});

ReactDOM.render(React.createElement(UserGist, { source: 'https://api.github.com/users/octocat/gists' }), document.getElementById('container'));