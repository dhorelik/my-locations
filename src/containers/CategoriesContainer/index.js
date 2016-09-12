import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/category'
import Categories from '../../components/Categories'

export const CategoriesContainer = (props) => {
    return (
        <Categories
            actions={props.actions}
            categories={props.categories}
        />
    )
}

CategoriesContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        categories: state.categories
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
)(CategoriesContainer)
