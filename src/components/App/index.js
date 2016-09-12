import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import styles from './app.scss'

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render () {
        const containerClasses = classNames(styles.content, 'app-container')

        return (
            <div>
                <div className='app-content'>
                    <Header />

                    <main className={containerClasses}>
                        {this.props.children}
                    </main>
                </div>

                <Footer />
            </div>
        )
    }
}
