import React, { Component, PropTypes } from 'react'
import CategoryItem from '../CategoryItem'
import Actions from '../Actions'

export default class Categories extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        categories: PropTypes.object.isRequired
    }

    render () {
        return (
            <div>
                <div className='app-title'>
                    <h2>Categories</h2>
                    <Actions actions={{
                        add: this.props.actions.addCategory,
                        delete: this.props.actions.deleteCategory,
                        edit: this.props.actions.editCategory
                    }} />
                </div>

                {Object.keys(this.props.categories).map((key) => {
                    return (
                        <CategoryItem
                            key={key}
                            select={this.props.actions.selectCategory}
                            submitForm={this.props.actions.submitFormCategory}
                            {...this.props.categories[key]}
                        />
                    )
                })}
            </div>
        )
    }
}
