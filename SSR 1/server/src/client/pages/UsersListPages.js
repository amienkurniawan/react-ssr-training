import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { Helmet } from 'react-helmet';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    head() {
        <Helmet>
            <title>{`${this.props.users.length} User Loaded`}</title>
            <meta property="og:title" content="User App" />
        </Helmet>
    }
    render() {
        return (
            <div>
                {this.head()}
                list of user
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}
function loadData(store) {
    return store.dispatch(fetchUser())
}
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUser })(UserList)
};