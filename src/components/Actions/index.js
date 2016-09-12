import React, { Component, PropTypes } from 'react'
import Button from '../Button'
import styles from './actions.scss'

export default class Actions extends Component {
    static propTypes = {
        actions: React.PropTypes.shape({
            add: PropTypes.func.isRequired,
            delete: PropTypes.func.isRequired,
            edit: PropTypes.func.isRequired,
            view: PropTypes.func
        }).isRequired
    }

    render () {
        return (
            <div className={styles.actions}>
                {Object.keys(this.props.actions).map((key, i) => {
                    return (
                        <Button
                            key={i}
                            name={key}
                            onClick={this.props.actions[key]}
                        />
                    )
                })}
            </div>
        )
    }
}
