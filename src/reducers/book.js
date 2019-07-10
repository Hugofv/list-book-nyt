const initialState = {
  books: [],
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_BOOK_SUCCESS': {
      const { response } = action;
      return { ...state, books: response }
    }

    case 'LIST_CATEGORY_SUCCESS': {
      const { response } = action;
      return { ...state, categories: response }
    }

    default: {
      return state;
    }
  }
}