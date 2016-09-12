import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './button.scss'

export default class Button extends Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    static defaultProps = {
        name: 'button'
    }

    handleClick () {
        this.props.onClick()
    }

    render () {
        const classesIcon = classNames('icon-actions', styles.icon)

        return (
            <a className={styles.button} onClick={this.handleClick}>
                <svg className={classesIcon}>
                    <use xlinkHref={'/icons.svg#icon-' + this.props.name} />
                </svg>
                <span>
                    {this.props.name}
                </span>
            </a>
        )
    }
}
