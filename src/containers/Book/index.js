// React
import React, { Fragment, useEffect, useState } from 'react'

// Action
import * as book_actions from '../../actions/book';
import Select from 'react-select';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Componentes
import { Table, TableContainer, TableRow, TableCell, TableHeaderRow, TableHeaderCell } from '../../components/Table'
import CircularProgress from '../../components/CircularProgress'
import { Box, Flex } from '../../components/FlexBox'
import Pagination from '../../components/Pagination'
import Label from '../../components/Label'
import Modal from "react-responsive-modal";

// Utils
import usePagination from '../../utils/Pagination'

// Icons
import { FaEye } from 'react-icons/fa';
import Text from '../../components/Text';
import { containerModal, boxModal } from './styles';
import { Hiperlink } from '../../components/Hiperlink';


const List = ({ books, categories, list_book_category, list_categories }) => {

  useEffect(() => list_categories(), [list_categories]);

  const [category, setCategory] = useState({});
  const [showBook, setShowBook] = useState({ open: false, book: {} });
  const categoriesOptions = categories.map(category => ({ value: category.list_name_encoded, label: category.display_name }))
  const [paginationProps, currentPageItems] = usePagination(books)

  const handleCategory = (category) => {
    list_book_category(category.value);
    setCategory(category)
  }

  return (
    <Fragment>
      <Box mb={5} m='2%'>
        <Box mb='2%'>
          <Label>Categoria</Label>
          <Select
            value={category}
            isSearchable
            placeholder='Informe uma categoria'
            onChange={(value) => handleCategory(value)}
            options={categoriesOptions}
          />
        </Box>

        {
          books.length
            ? <TableContainer>
              <Table>
                <TableHeaderRow>
                  <TableHeaderCell>#</TableHeaderCell>
                  <TableHeaderCell>Título</TableHeaderCell>
                  <TableHeaderCell>Autor</TableHeaderCell>
                  <TableHeaderCell>Editor</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableHeaderRow>
                {currentPageItems.map(item => (
                  <TableRow key={item.rank}>
                    <TableCell data-title='Rank'>{item.rank}</TableCell>
                    <TableCell data-title='Titulo'>{item.title}</TableCell>
                    <TableCell data-title='Autor'>{item.author}</TableCell>
                    <TableCell data-title='Editor'>{item.publisher}</TableCell>
                    <TableCell width={40} lineHeight={0}>
                      <FaEye style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => setShowBook({ open: true, book: item })} />
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableContainer>
            : <Text medium>Informe uma categoria...</Text>
        }

      </Box>
      <Box>
        <Pagination {...paginationProps} pageSize={10} />
      </Box>

      <Modal open={showBook.open} onClose={() => setShowBook({ open: false, book: {} })} >
        <Flex css={containerModal} fd='column' h='100%'>
          <Box d='inline-table' position='relative' h={64} css={{ flexShrink: 0, borderBottom: '1px solid hsla(216, 40%, 90%, 1)' }}>
            <Box p={3} ta='center'><Text medium>Detalhes - {showBook.book.title}</Text></Box>
          </Box>

          <Box mb={2} css={boxModal} p={4} overflow='auto'>
            <Box>
              <img src={showBook.book.book_image} />
            </Box>

            <Box mb={3}>
              <Label>Descrição</Label>
              <Box>{showBook.book.description}</Box>
            </Box>

            <Box mb={3}>
              <Label>Autor</Label>
              <Box>{showBook.book.author}</Box>
            </Box>

            <Box mb={3}>
              <Label>Contrinuinte</Label>
              <Box>{showBook.book.contributor}</Box>
            </Box>

            <Box mb={3}>
              <Label>Editora</Label>
              <Box>{showBook.book.publisher}</Box>
            </Box>

            <Box mb={3}>
              <Label>ISBN 10</Label>
              <Box>{showBook.book.primary_isbn10}</Box>
              <Label>ISBN 13</Label>
              <Box>{showBook.book.primary_isbn13}</Box>
            </Box>

            {
              showBook.book.buy_links && <Box mb={3}>
                <Label>Links para comprar</Label>
                {
                  showBook.book.buy_links.map((store, index) => <Flex key={index}>
                    <Text fs='15' >{store.name}:</Text>
                    <Hiperlink href={store.url}>{store.url}</Hiperlink>
                  </Flex>)
                }
              </Box>
            }

          </Box>
        </Flex>
      </Modal>
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
