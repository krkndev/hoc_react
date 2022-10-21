import React from 'react';
import { usePagination, DOTS } from './usePagination';
import styled, { css } from 'styled-components';

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;
const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
  &:dots {
  }
  ${({ disabled, selected, dots }) =>
    disabled
      ? css`
          pointer-events: none;
          color: #bebebe85;
          &:hover {
            background-color: #ff0000;
          }
        `
      : selected
      ? css`
          background-color: rgba(0, 0, 0, 0.1);
        `
      : dots
      ? css`
          background-color: transparent;
          cursor: default;
          margin-top: 0.5em;
          &:hover {
            background-color: transparent;
            cursor: default;
          }
        `
      : ''}
`;

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      {/* Left navigation arrow */}
      <PaginationItem
        key={`item-${currentPage + 1}`}
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <i id='leftArrow' className='fa-solid fa-angle-left'></i>
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render this
        if (pageNumber === DOTS) {
          return (
            <PaginationItem
              key={`dots-${pageNumber}`}
              dots={pageNumber === DOTS}
            >
              <i className='fa-sharp fa-solid fa-ellipsis'></i>
            </PaginationItem>
          );
        }

        // Render our Page Pills
        return (
          <PaginationItem
            key={`item-${pageNumber}`}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <i id='rightArrow' className='fa-solid fa-angle-right'></i>
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
