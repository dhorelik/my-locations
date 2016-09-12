import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './category.scss'
import CategoryForm from '../CategoryForm'

export default class CategoryItem extends Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isEdited: PropTypes.bool.isRequired,
        select: PropTypes.func.isRequired,
        submitForm: PropTypes.func.isRequired
    }

    handleClick () {
        this.props.select(this.props.id)
    }

    render () {
        const categoryClasses = classNames(styles.category, {[styles.selected]: this.props.isSelected})

        return (
            (() => {
                if (this.props.isEdited) {
                    return (
                        <CategoryForm
                            id={this.props.id}
                            name={this.props.name}
                            onSubmit={this.props.submitForm}
                        />
                    )
                } else {
                    return (
                        <li className={categoryClasses}
                            onClick={this.handleClick}>
                            {this.props.name || <i>~~no name specified~~</i>}
                        </li>
                    )
                }
            })()
        )
    }
}
