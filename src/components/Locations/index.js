import React, { Component, PropTypes } from 'react'
import LocationItem from '../LocationItem'
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
                        <LocationItem
                            key={key}
                            select={this.props.actions.selectLocation}
                            submitForm={this.props.actions.submitFormLocation}
                            categoriesList={this.props.categoriesList}
                            {...this.props.locations[key]}
                        />
                    )
                })}
            </div>
        )
    }
}
