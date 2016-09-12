import React, { Component } from 'react'
import styles from './about.scss'

export default class About extends Component {
    render () {
        return (
            <ul className={styles.list}>
                <li>
                    The sample application allows the user to maintain a list of categorized name locations.
                </li>
                <li>
                    The domain model contains two main entities, a Category and a Location. A Category has a
                    single property: Name. A Location has the following properties: Name, Address, Coordinates, and
                    Category.
                </li>
                <li>
                    All data is saved to localStorage for simplicity.
                </li>
            </ul>
        )
    }
}
