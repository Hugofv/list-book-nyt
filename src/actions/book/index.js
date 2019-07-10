import { urlAPI, apiKey } from '../index'

export const list_book = () => dispatch => {
  fetch(`${urlAPI}/current/food-and-fitness.json?api-key=${apiKey}`, {
    method: 'GET'
  })
    .then(response => response.status === 200 && response.json())
    .then(({ results: { books } }) => dispatch({ type: 'LIST_BOOK_SUCCESS', response: books }))
}


export const list_categories = () => dispatch => {
  fetch(`${urlAPI}/names.json?api-key=${apiKey}`, {
    method: 'GET'
  })
    .then(response => response.status === 200 && response.json())
    .then(({ results }) => dispatch({ type: 'LIST_CATEGORY_SUCCESS', response: results }))
}
