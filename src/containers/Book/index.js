import React, { Fragment, useEffect, useState } from 'react'

import { Box } from '../../components/FlexBox'
import * as book_actions from '../../actions/book';
import Select from 'react-select';

import CircularProgress from '../../components/CircularProgress'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table, TableContainer, TableRow, TableCell, TableHeaderRow, TableHeaderCell } from '../../components/Table'
import Pagination from '../../components/Pagination'

import usePagination from '../../utils/Pagination'


const List = ({ books, categories, list_book, list_categories }) => {

  useEffect(() => list_book(), [list_book]);
  useEffect(() => list_categories(), [list_categories]);

  const [category, setCategory] = useState({});
  const categoriesOptions = categories.map(category => ({ value: category.list_name_encoded, label: category.display_name }))
  const [paginationProps, currentPageItems] = usePagination(books)

  return (
    <Fragment>
      <Box mb={5}>
        <Select
          value={category}
          onChange={(value) => setCategory(value)}
          options={categoriesOptions}
        />
        <TableContainer>
          <Table>
            <TableHeaderRow>
              <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Título</TableHeaderCell>
              <TableHeaderCell>Autor</TableHeaderCell>
              <TableHeaderCell>Editor</TableHeaderCell>
            </TableHeaderRow>
            {currentPageItems.map(item => (
              <TableRow key={item.rank}>
                <TableCell data-title='Rank' width={160}>{item.rank}</TableCell>
                <TableCell data-title='Titulo' width={160}>{item.title}</TableCell>
                <TableCell data-title='Autor' width={160}>{item.author}</TableCell>
                <TableCell data-title='Editor' width={160}>{item.publisher}</TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Pagination {...paginationProps} pageSize={10} />
      </Box>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  books: state.book.books,
  categories: state.book.categories
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...book_actions
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(List)
