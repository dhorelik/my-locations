import React, { Component, PropTypes } from 'react'
import { omit } from 'lodash'
import classNames from 'classnames'
import styles from './item.scss'
import Form from '../Form'

export default class Item extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        data: React.PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            address: PropTypes.string,
            coordinates: PropTypes.string,
            category: PropTypes.string,
            isSelected: PropTypes.bool.isRequired,
            isEdited: PropTypes.bool.isRequired
        }).isRequired,
        selectItem: PropTypes.func.isRequired,
        submitItemForm: PropTypes.func.isRequired,
        categoriesList: PropTypes.array
    }

    handleClick = () => {
        this.props.selectItem(this.props.data.id)
    }

    /**
     * gets the data used for form fields construction
     * @returns {*}
     */
    getFormFields (data) {
        return omit(data, [
            'id',
            'isSelected',
            'isEdited'
        ])
    }

    /**
     * gets the item details markup
     * @returns {*}
     */
    getItemDetails (data) {
        if (data.category || data.address || data.coordinates) {
            return (
                <div className={styles.details}>
                    {data.category && <p>Category: {data.category}</p>}
                    {data.address && <p>Address: {data.address}</p>}
                    {data.coordinates && <p>Coordinates: {data.coordinates}</p>}
                </div>
            )
        }
    }

    render () {
        const data = this.props.data
        const itemClasses = classNames(styles.item, {[styles.selected]: data.isSelected})
        const formFields = this.getFormFields(data)
        const itemDetails = this.getItemDetails(data)

        return (
            (() => {
                if (data.isEdited) {
                    return (
                        <Form
                            id={data.id}
                            fields={formFields}
                            onSubmit={this.props.submitItemForm}
                            categoriesList={this.props.categoriesList}
                        />
                    )
                } else {
                    return (
                        <li className={itemClasses}
                            onClick={this.handleClick}>
                            <p>{data.name || <i>~~no name specified~~</i>}</p>
                            {itemDetails}
                        </li>
                    )
                }
            })()
        )
    }
}
