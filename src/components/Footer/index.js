import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import styles from './footer.scss'

export default class Footer extends Component {
    render () {
        const classesFooter = classNames('app-footer', styles.footer)
        const classesIcon = classNames('icon-footer', styles.icon)

        return (
            <footer className={classesFooter}>
                <Link to='/categories'>
                    <svg className={classesIcon}>
                        <use xlinkHref='/icons.svg#icon-categories' />
                    </svg>
                    Categories
                </Link>
                |
                <Link to='/locations'>
                    <svg className={classesIcon}>
                        <use xlinkHref='/icons.svg#icon-locations' />
                    </svg>
                    Locations
                </Link>
            </footer>
        )
    }
}
