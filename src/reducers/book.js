const initialState = {
  loading: false,
  error: false,
  books: [],
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_REQUEST': {
      return { ...state, loading: true, error: false }
    }

    case 'LIST_BOOK_SUCCESS': {
      const { response } = action;
      return { ...state, loading: false, error: false, books: response }
    }

    case 'LIST_ERROR': {
      return { ...state, loading: false, error: true }
    }

    case 'LIST_CATEGORY_SUCCESS': {
      const { response } = action;
      return { ...state, loading: false, error: false, categories: response }
    }

    default: {
      return state;
    }
  }
}