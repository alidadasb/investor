import * as React from "react";
import {GameManager} from "../core/gameManager";
import PropTypes from 'prop-types'
import {User} from "../user/User";
import './profile.css'
export class Profile extends React.Component {
    constructor(params) {
        super(params);

        this.gameManager = new GameManager();

        this.props.users.forEach((user) => {
            this.gameManager.register(new User(user.username, user.money));
        });

        this.state = { };

        this.activate = this.activate.bind(this)
    }

    static get propTypes() {
        return {
            users: PropTypes.array,
        }
    }

    activate(userId) {
        this.setState({render: Math.random()});
        this.gameManager.activateUser(userId);
    }

    render() {
        let usersList = this.gameManager.usersList();
        return (
            <div>
                {usersList.map((userId) => {
                    let user = this.gameManager.getUser(userId);
                    return ( <div onClick={() => this.activate(userId)} key={userId}>
                        <div>{this.gameManager.currentUserId === user.id ? '*' : ''} <span className="clickable"> {user.username}</span>
                            : ${user.account.balanceStr}</div>
                    </div>)
                })}
            </div>
        )

    }
}