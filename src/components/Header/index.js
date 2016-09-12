import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import styles from './header.scss'

export default class Header extends Component {
    render () {
        const headerClasses = classNames(styles.header, 'text-center')

        return (
            <header className={headerClasses}>
                <h1>
                    <Link to='/'>
                        My Locations
                    </Link>
                </h1>
            </header>
        )
    }
}
