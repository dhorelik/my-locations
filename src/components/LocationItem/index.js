import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './location.scss'
import LocationForm from '../LocationForm'

export default class LocationItem extends Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        coordinates: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isEdited: PropTypes.bool.isRequired,
        select: PropTypes.func.isRequired,
        submitForm: PropTypes.func.isRequired,
        categoriesList: PropTypes.array.isRequired
    }

    handleClick () {
        this.props.select(this.props.id)
    }

    render () {
        const locationClasses = classNames(styles.location, {[styles.selected]: this.props.isSelected})

        return (
            (() => {
                if (this.props.isEdited) {
                    return (
                        <LocationForm
                            id={this.props.id}
                            name={this.props.name}
                            address={this.props.address}
                            coordinates={this.props.coordinates}
                            category={this.props.category}
                            onSubmit={this.props.submitForm}
                            categoriesList={this.props.categoriesList}
                        />
                    )
                } else {
                    const renderedCategory = this.props.category && (<span> ({this.props.category})</span>)
                    const renderedAddress = this.props.address && (this.props.address)
                    const renderedCoordinates = this.props.coordinates && (this.props.coordinates)

                    return (
                        <li className={locationClasses}
                            onClick={this.handleClick}>
                            <p>
                                {this.props.name}
                                {renderedCategory}
                            </p>
                            <p>
                                {renderedAddress}
                                {renderedAddress && renderedCoordinates
                                    ? ` | ${renderedCoordinates}`
                                    : renderedCoordinates
                                }
                            </p>
                        </li>
                    )
                }
            })()
        )
    }
}
