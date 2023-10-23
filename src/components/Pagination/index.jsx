import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const PAGE_STEP = 1;

const Pagination = ({ page = 1, limit = 6, total = 1, handleChangePage }) => {
  const totalPage = Math.ceil(Number(total) / Number(limit)) || 1;
  const currentPage = Number(page);

  const getListPage = () => {
    let start = currentPage - PAGE_STEP;
    let end = currentPage + PAGE_STEP;

    if (start <= 0) {
      start = 1;
      end = start + PAGE_STEP * 2;

      if (end > totalPage) {
        end = totalPage;
      }
    }

    if (end > totalPage) {
      end = totalPage;
      start = end - PAGE_STEP * 2;

      if (start < 1) {
        start = 1;
      }
    }

    const list = [];
    for (let i = start; i <= end; i++) {
      list.push(i);
    }

    return list;
  };

  const listPage = getListPage();

  const _onClickPrev = (e) => {
    const prev = currentPage - 1;
    if (prev >= 1) {
      handleChangePage(e, prev);
    }
  };

  const _onClickNext = (e) => {
    const next = currentPage + 1;
    if (next <= totalPage) {
      handleChangePage(e, next);
    }
  };

  if (totalPage > 1) {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={classNames('page-item', { disabled: currentPage === 1 })}>
            <Link onClick={_onClickPrev} className="page-link page-link-prev">
              <span aria-hidden="true">
                <i className="icon-long-arrow-left" />
              </span>
              Prev
            </Link>
          </li>
          {listPage.map((pageNumber) => {
            return (
              <li
                key={pageNumber}
                className={classNames('page-item', {
                  active: pageNumber === currentPage,
                })}
                aria-current="page"
              >
                <Link onClick={(e) => handleChangePage(e, pageNumber)} className="page-link">
                  {pageNumber}
                </Link>
              </li>
            );
          })}

          <li className="page-item-total">of {totalPage}</li>
          <li className={classNames('page-item', { disabled: currentPage === totalPage })}>
            <Link onClick={_onClickNext} className="page-link page-link-next" aria-label="Next">
              Next
              <span aria-hidden="true">
                <i className="icon-long-arrow-right" />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return false;
};

export default Pagination;
