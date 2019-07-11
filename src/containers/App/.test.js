import React from 'react'

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render } from '@testing-library/react'

// Component
import App from '../App'

const mockStore = configureMockStore([thunk])

const store = mockStore({
  book: {
    loading: false,
    error: false,
    books: [],
    categories: []
  }
})

describe('App connected', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<Provider {...{ store }}><App /></Provider>)

    expect(getByTestId('app')).toBeInTheDocument()
  })
})
