import React from 'react'

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render, fireEvent, waitForElement } from '@testing-library/react'

// Component
import Book from '../Book'

const mockStore = configureMockStore([thunk])

const store = mockStore({
  book: {
    loading: false,
    error: false,
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
    ],
    categories: [
      {
        display_name: "Combined Print & E-Book Fiction",
        list_name: "Combined Print and E-Book Fiction",
        list_name_encoded: "combined-print-and-e-book-fiction",
        newest_published_date: "2019-07-21",
        oldest_published_date: "2011-02-13",
        updated: "WEEKLY",
      },
      {
        display_name: "Combined Print & E-Book Nonfiction",
        list_name: "Combined Print and E-Book Nonfiction",
        list_name_encoded: "combined-print-and-e-book-nonfiction",
        newest_published_date: "2019-07-21",
        oldest_published_date: "2011-02-13",
        updated: "WEEKLY",
      }
    ]
  }
})

describe('Book connected', () => {

  let props

  beforeEach(() => {
    props = {
      list_book_category: jest.fn()
    }
  })

  test('renders the component', () => {
    const { getByTestId } = render(<Provider {...{ store }}><Book /></Provider>)

    expect(getByTestId('book')).toBeInTheDocument()
  })

  test('handle "Categoria"', async () => {

    const { container, getByText } = render(<Provider {...{ store }}><Book {...props} /></Provider>)
    let listOptions = ''
    await waitForElement(() => (listOptions = container.querySelector('.react_select__input input')))
    fireEvent.focus(listOptions)
    let listControl = ''
    await waitForElement(() => (listControl = container.querySelector('.react_select__control')))
    fireEvent.mouseDown(listControl)
    const option = getByText('Combined Print & E-Book Fiction')
    fireEvent.click(option)

    const immediateID = setImmediate(() => {
      expect(props.list_book_category).toBeCalled()
    })

    clearImmediate(immediateID)
  })

  test('handle open "modal"', async () => {

    const { getByTestId } = render(<Provider {...{ store }}><Book {...props} /></Provider>)

    const cellIcon = getByTestId('show_1')
    fireEvent.click(cellIcon.children[0])
    expect(getByTestId('modal')).toBeInTheDocument()
  })

  test('handle close "modal"', async () => {

    const { container, getByTestId } = render(<Provider {...{ store }}><Book {...props} /></Provider>)

    const cellIcon = getByTestId('show_1')
    fireEvent.click(cellIcon.children[0])

    const immediateClose = setImmediate(() => {
      fireEvent.click(container.querySelector('#icon-close'))
    })

    clearImmediate(immediateClose)

    const immediateExpect = setImmediate(() => {
      expect(getByTestId('modal')).not.toBeInTheDocument()
    })

    clearImmediate(immediateExpect)
  })
})
