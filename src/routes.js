import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'
import Categories from './containers/CategoriesContainer'
import Locations from './containers/LocationsContainer'

export default (
    <Route path='/' component={App}>
        <IndexRoute component={About} />

        <Route path='/categories' component={Categories}>
            <Route path='/categories/:categoryName' component={Categories} />
        </Route>

        <Route path='/locations' component={Locations}>
            <Route path='/locations/:locationName' component={Locations} />
        </Route>

        <Route path='404' component={NotFound} status={404} />
        <Redirect from='*' to='404' />
    </Route>
)
