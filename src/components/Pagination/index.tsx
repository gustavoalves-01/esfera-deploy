import { Pagination } from '@zendeskgarden/react-pagination';
import { CursorPagination } from '@zendeskgarden/react-pagination';
import { ThemeProvider } from '@zendeskgarden/react-theming';


import React, { useState } from 'react'
interface PaginationItemProps {
  totalPages: number;
}
function PaginationItem({ totalPages }: PaginationItemProps) {
  const [quantityPages, setQuantityPages] = useState({ currentPage: 1 });

  return (
    <div>
      <ThemeProvider>
        <Pagination
          totalPages={totalPages}
          currentPage={quantityPages.currentPage}
          onChange={currentPage => setQuantityPages({ currentPage })}
        />
      </ThemeProvider>

    </div>
  )
}

export default PaginationItem