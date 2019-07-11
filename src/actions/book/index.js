import { urlAPI, apiKey } from '../index'

export const list_book_category = (category) => dispatch => {
  dispatch({type: 'LIST_REQUEST'});
  fetch(`${urlAPI}/current/${category}.json?api-key=${apiKey}`, {
    method: 'GET'
  })
    .then(response => response.status === 200 && response.json())
    .then(({ results: { books } }) => dispatch({ type: 'LIST_BOOK_SUCCESS', response: books }))
    .catch(() => dispatch({type: 'LIST_ERROR'}))
}


export const list_categories = () => dispatch => {
  dispatch({type: 'LIST_REQUEST'})
  fetch(`${urlAPI}/names.json?api-key=${apiKey}`, {
    method: 'GET'
  })
    .then(response => response.status === 200 && response.json())
    .then(({ results }) => dispatch({ type: 'LIST_CATEGORY_SUCCESS', response: results }))
    .catch(() => dispatch({type: 'LIST_ERROR'}))
}
