import React from 'react'
import reactDOM from 'react-dom'
import Main from './Layout/Main/main'
import './Tailwind/index.css'

// const store = configureStore()

reactDOM.render(
    // <Provider store={store}>
    <Main />,
    // </Provider>,
    document.getElementById('root') as HTMLElement
)

let a: number = 5
