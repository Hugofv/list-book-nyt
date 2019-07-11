import * as actions from '../book'
import { urlAPI, apiKey } from '../index'

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const mockStore = configureMockStore([thunk])

const response = {
  success: {
    result: {
      books: [
        {
          age_group: "",
          amazon_product_url: "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBS-20",
          article_chapter_link: "",
          asterisk: 0,
          author: "Tara Westover",
          book_image: "https://s1.nyt.com/du/books/images/9780399590504.jpg",
          book_image_height: 495,
          book_image_width: 328,
          book_review_link: "https://www.nytimes.com/2018/03/01/books/review/tara-westover-educated.html",
          buy_links: [{ name: "Local Booksellers", url: "http://www.indiebound.org/book/9780399590504?aff=NYT" }],
          contributor: "by Tara Westover",
          contributor_note: "",
          dagger: 0,
          description: "The daughter of survivalists, who is kept out of school, educates herself enough to leave home for university.",
          first_chapter_link: "",
          isbns: [{ isbn10: "0399590501", isbn13: "9780399590504" }, { isbn10: "039959051X", isbn13: "9780399590511" }],
          price: 0,
          primary_isbn10: "0399590501",
          primary_isbn13: "9780399590504",
          publisher: "Random House",
          rank: 1,
          rank_last_week: 1,
          sunday_review_link: "",
          title: "EDUCATED",
          weeks_on_list: 72,
        },
        {
          age_group: "",
          amazon_product_url: "https://www.amazon.com/Pioneers-Heroic-Settlers-Brought-American/dp/1501168681?tag=NYTBS-20",
          article_chapter_link: "",
          asterisk: 0,
          author: "David McCullough",
          book_image: "https://s1.nyt.com/du/books/images/9781501168680.jpg",
          book_image_height: 491,
          book_image_width: 330,
          book_review_link: "https://www.nytimes.com/2019/05/13/books/review/david-mccullough-pioneers.html",
          buy_links: [{ name: "Local Booksellers", url: "http://www.indiebound.org/book/9781501168680?aff=NYT" }],
          contributor: "by David McCullough",
          contributor_note: "",
          dagger: 0,
          description: "The Pulitzer Prize-winning historian tells the story of the settling of the Northwest Territory through five main characters.",
          first_chapter_link: "",
          isbns: [{ isbn10: "1501168681", isbn13: "9781501168680" }, { isbn10: "1982131667", isbn13: "9781982131661" }],
          price: 0,
          primary_isbn10: "1501168681",
          primary_isbn13: "9781501168680",
          publisher: "Simon & Schuster",
          rank: 2,
          rank_last_week: 2,
          sunday_review_link: "",
          title: "THE PIONEERS",
          weeks_on_list: 9
        }
      ]
    }
  },
}

describe('book actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      book: {}
    })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  // Parâmetros
  test('list_book_category_request / list_book_category_success', async () => {
    const url = `${urlAPI}/current/teste.json?api-key=${apiKey}`
    fetchMock.mock(url, response.success)

    const expectedActions = [
      { type: 'LIST_REQUEST' }
    ]

    await store.dispatch(actions.list_book_category('teste'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
