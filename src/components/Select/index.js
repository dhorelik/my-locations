import React, { Component, PropTypes } from 'react'
import styles from './select.scss'

export default class Select extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
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
                    <select
                        value={this.props.value}
                        onChange={this.handleChange}>
                        {this.props.options.map((key, i) => {
                            return (
                                <option key={i} value={key}>
                                    {key}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </label>
        )
    }
}
