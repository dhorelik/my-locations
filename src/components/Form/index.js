import React, { Component, PropTypes } from 'react'
import styles from './form.scss'
import Input from '../Input'
import Select from '../Select'

export default class Form extends Component {
    constructor (props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            ...this.props.fields
        }
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        fields: React.PropTypes.shape({
            name: PropTypes.string.isRequired,
            address: PropTypes.string,
            coordinates: PropTypes.string,
            category: PropTypes.string
        }).isRequired,
        onSubmit: PropTypes.func.isRequired,
        categoriesList: PropTypes.array
    }

    handleChange (field, value) {
        this.setState({
            [field]: value
        })
    }

    handleCancel (e) {
        e.preventDefault()
        this.props.onSubmit(this.props.id, this.props.fields)
    }

    handleSave (e) {
        e.preventDefault()
        this.props.onSubmit(this.props.id, this.state)
    }

    render () {
        return (
            <form className={styles.form} onSubmit={this.handleSave} noValidate>
                {Object.keys(this.props.fields).map((key, i) => {
                    return (key === 'category') ? (
                        <Select
                            key={i}
                            label={key}
                            value={this.state[key]}
                            options={this.props.categoriesList}
                            onChange={this.handleChange}
                        />
                    ) : (
                        <Input
                            key={i}
                            label={key}
                            value={this.state[key]}
                            onChange={this.handleChange}
                        />
                    )
                })}

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
