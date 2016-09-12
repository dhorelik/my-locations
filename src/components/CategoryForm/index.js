import React, { Component, PropTypes } from 'react'
import styles from './form.scss'

export default class CategoryForm extends Component {
    constructor (props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            name: this.props.name
        }
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    handleChange (e) {
        this.setState({
            name: e.target.value
        })
    }

    handleCancel (e) {
        e.preventDefault()
        this.props.onSubmit(this.props.id, this.props.name)
    }

    handleSave (e) {
        e.preventDefault()
        this.props.onSubmit(this.props.id, this.state.name)
    }

    render () {
        return (
            <form className={styles.form} onSubmit={this.handleSave} noValidate>
                <label className={styles.row}>
                    <span>Name*:</span>
                    <div className={styles.wrapper}>
                        <input
                            id='name'
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                </label>

                <div className={styles.row}>
                    <button
                        className={styles.btn}
                        onClick={this.handleSave}>
                        Save
                    </button>
                    <button
                        className={styles.btn}
                        onClick={this.handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}
