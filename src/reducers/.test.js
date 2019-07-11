import book from './book'

describe('certificado reducer', () => {
  const state = {
    loading: false,
    error: false,
    books: [],
    categories: []
  }
  test('Should return the initial state', () => {
    expect(book(undefined, {})).toEqual(state)
  })

  test('Should handle LIST_REQUEST', () => {
    const action = { type: 'LIST_REQUEST' }

    expect(book(undefined, action)).toEqual({
      ...state,
      loading: true
    })
  })

  test('Should handle LIST_BOOK_SUCCESS', () => {
    const action = {
      type: 'LIST_BOOK_SUCCESS', response: [
        {
          nome: 'teste'
        }
      ]
    }

    expect(book(undefined, action)).toEqual({
      ...state,
      books: [{ nome: 'teste' }]
    })
  })

  test('Should handle LIST_ERROR', () => {
    const action = { type: 'LIST_ERROR' }

    expect(book(undefined, action)).toEqual({
      ...state,
      loading: false,
      error: true
    })
  })

  test('Should handle LIST_CATEGORY_SUCCESS', () => {
    const action = {
      type: 'LIST_CATEGORY_SUCCESS', response: [
        {
          nome: 'teste'
        }
      ]
    }

    expect(book(undefined, action)).toEqual({
      ...state,
      categories: [{ nome: 'teste' }]
    })
  })

})
