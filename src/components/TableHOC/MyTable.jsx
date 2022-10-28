import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  generateFilteredTable,
  getUniqueOptions,
  searchInTable,
  selectSearch,
  sortTable,
} from './utilities/filters';
import SelectK from '../SelectK/SelectK';
import styled, { css } from 'styled-components';
import Pagination from './utilities/Pagination';

const PagesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.182%;
  ${(className) => className}
`;
const KrknTr = styled.tr`
  border: 1px solid #bebebe;
  &:nth-child(odd) {
    background-color: #bebebe;
  }
`;
const KrknTh = styled.th`
  min-width: 10em;
  padding: 5px;
  background-color: #ddd;
  border-width: 1px;
  border-color: #bebebe;
  ${({ sortable }) =>
    sortable
      ? css`
          &:before {
            opacity: 0.125;
            float: right;
            bottom: 50%;
            content: '▴';
          }
          &:after {
            opacity: 0.125;
            float: right;
            top: 50%;
            content: '▾';
          }
        `
      : ''};
`;

const KrknTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 18px;
`;

const KrknTd = styled.td`
  text-align: center;
  padding: 5px;
`;

const TableFilter = styled.input`
  background-image: url('https://img.icons8.com/ios-filled/2x/search--v4.png');
  background-size: 3%;
  background-repeat: no-repeat;
  width: 100%;
  height: 90%;
  font-size: 16px;
  padding: 12px 20px 12px 65px;
  border: 1px solid #ddd;
  display: block;
`;

const MyTable = ({
  header = [],
  body = [],
  filter = false,
  sortableGeneral = false,
  resultsPerPage = 10,
  pagination = true,
  filterCat = false,
}) => {
  const originalData = [...body];

  console.log('originalData :>> ', originalData);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(originalData);

  // filters object
  const sampleObject = {};

  const createFilterObj = useMemo(() => {
    const filterOptions = header.map((title) => title.slug);
    console.log('filterOptions :>> ', filterOptions);

    for (let i = 0; i < filterOptions.length; i++) {
      sampleObject[filterOptions[i]] = [];

      return sampleObject;
    }
  }, []);

  console.log('sampleObject :>> ', sampleObject);
  // filters state
  const [currentFilters, setCurrentFilters] = useState(createFilterObj);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * resultsPerPage;
    const lastPageIndex = firstPageIndex + resultsPerPage;
    if (pagination) {
      return currentData
        .map((data) => ({ ...data }))
        .slice(firstPageIndex, lastPageIndex);
    } else {
      return currentData;
    }
  }, [currentPage, currentData, resultsPerPage, pagination, currentFilters]);

  const sortColumn = (id) => {};

  return (
    <>
      <div id='tblParent'>
        {filter ? (
          <TableFilter
            type='text'
            id='filterInput'
            onKeyUp={searchInTable}
            placeholder='Search for names...'
          />
        ) : (
          ''
        )}
        <KrknTable id='myTable'>
          <thead>
            <tr>
              {header.map(({ id, filter = false, sortable = false }, index) => {
                return (
                  <KrknTh
                    id={id}
                    className='headerTbl'
                    key={`header-${id}`}
                    sortable={sortable}
                    onClick={() => (sortable ? sortColumn(id) : '')}
                  >
                    {id}
                    {filter ? (
                      <SelectK
                        id={'select-filter'}
                        multiOps
                        label={''}
                        content={getUniqueOptions(
                          currentData.map((el) => el[id]),
                        )}
                        onChange={(e) => {
                          sampleObject[id] = e.map((el) => el.value);
                          console.log('sampleObject :>> ', sampleObject);
                          selectSearch(e);
                          console.log('currentFilters :>> ', currentFilters);
                        }}
                        className={'select-filter'}
                      />
                    ) : (
                      <></>
                    )}
                  </KrknTh>
                );
              })}
            </tr>
          </thead>
          <tbody className='bodyTbl'>
            {currentTableData.map((item, index) => {
              const values = Object.values(item);
              const keys = Object.keys(item);

              return (
                <KrknTr key={`${keys[index]}-${values[index]}-${index}`}>
                  {values.map((value, index) => {
                    return (
                      <KrknTd key={`${index}-${value}`}>
                        {value ? value : 'NA'}
                      </KrknTd>
                    );
                  })}
                </KrknTr>
              );
            })}
          </tbody>
        </KrknTable>
        {pagination ? (
          <PagesWrapper>
            <Pagination
              id='pagination'
              currentPage={currentPage}
              totalCount={currentData.length}
              pageSize={resultsPerPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </PagesWrapper>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

MyTable.propTypes = {
  /** Receives an array of strings to create the header. */
  header: PropTypes.array,
  /** Receives an array to create the data table. */
  body: PropTypes.any,
  /** Set to true to add input filter. */
  filter: PropTypes.bool,
  /** Set to true to enable sort by clicking header. */
  // sortable: PropTypes.bool,
  /** Recieves a number that will limit the length of the table rows per page. */
  resultsPerPage: PropTypes.number,
};
export default MyTable;
