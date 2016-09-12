import React, { Component, PropTypes } from 'react'
import styles from './form.scss'

export default class LocationForm extends Component {
    constructor (props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            name: this.props.name,
            address: this.props.address,
            coordinates: this.props.coordinates,
            category: this.props.category
        }
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        coordinates: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
        categoriesList: PropTypes.array.isRequired
    }

    getFields () {
        const name = document.getElementById('name')
        const address = document.getElementById('address')
        const coordinates = document.getElementById('coordinates')
        const category = document.getElementById('category')

        return {
            name: name.value,
            address: address.value,
            coordinates: coordinates.value,
            category: category.value
        }
    }

    handleChange (e) {
        const fields = this.getFields.bind(this)()

        this.setState(fields)
    }

    handleCancel (e) {
        e.preventDefault()
        this.props.onSubmit(this.props.id, this.props)
    }

    handleSave (e) {
        e.preventDefault()
        this.props.onSubmit(this.props.id, this.state)
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

                <label className={styles.row}>
                    <span>Address*:</span>
                    <div className={styles.wrapper}>
                        <input
                            id='address'
                            type='text'
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </div>
                </label>

                <label className={styles.row}>
                    <span>Coordinates*:</span>
                    <div className={styles.wrapper}>
                        <input
                            id='coordinates'
                            type='text'
                            value={this.state.coordinates}
                            onChange={this.handleChange}
                        />
                    </div>
                </label>

                <label className={styles.row}>
                    <span>Category*:</span>
                    <div className={styles.wrapper}>
                        <select
                            id='category'
                            value={this.state.category}
                            className={styles.select}
                            onChange={this.handleChange}>
                            {this.props.categoriesList.map((key, i) => {
                                return (
                                    <option key={i} value={key}>
                                        {key}
                                    </option>
                                )
                            })}
                        </select>
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
