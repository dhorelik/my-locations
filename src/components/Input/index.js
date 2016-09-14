import React, { Component, PropTypes } from 'react'
import styles from './input.scss'

export default class Input extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    handleChange = (e) => {
        this.props.onChange(this.props.label, e.target.value)
    }

    render () {
        return (
            <label className={styles.row}>
                <span>{this.props.label}*:</span>
                <div className={styles.wrapper}>
                    <input
                        type='text'
                        value={this.props.value}
                        onChange={this.handleChange}
                    />
                </div>
            </label>
        )
    }
}
