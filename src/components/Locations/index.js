import React, { Component, PropTypes } from 'react'
import Item from '../Item'
import Actions from '../Actions'

export default class Locations extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        locations: PropTypes.object.isRequired,
        categoriesList: PropTypes.array.isRequired
    }

    render () {
        return (
            <div>
                <div className='app-title'>
                    <h2>Locations</h2>
                    <Actions actions={{
                        add: this.props.actions.addLocation,
                        delete: this.props.actions.deleteLocation,
                        edit: this.props.actions.editLocation,
                        view: this.props.actions.viewLocation
                    }} />
                </div>

                {Object.keys(this.props.locations).map((key) => {
                    return (
                        <Item
                            key={key}
                            type='location'
                            data={{...this.props.locations[key]}}
                            selectItem={this.props.actions.selectLocation}
                            submitItemForm={this.props.actions.submitFormLocation}
                            categoriesList={this.props.categoriesList}
                        />
                    )
                })}
            </div>
        )
    }
}
