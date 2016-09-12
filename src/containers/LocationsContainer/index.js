import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/location'
import Locations from '../../components/Locations'

export const LocationsContainer = (props) => {
    return (
        <Locations
            actions={props.actions}
            locations={props.locations}
            categoriesList={props.categoriesList}
        />
    )
}

LocationsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    locations: PropTypes.object.isRequired,
    categoriesList: PropTypes.array.isRequired
}

function mapStateToProps (state) {
    let categoriesList = []

    for (let key in state.categories) {
        categoriesList.push(state.categories[key].name)
    }

    return {
        locations: state.locations,
        categoriesList: categoriesList
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsContainer)
