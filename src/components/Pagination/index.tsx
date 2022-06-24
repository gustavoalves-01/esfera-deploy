import { Pagination } from '@zendeskgarden/react-pagination';
import { ThemeProvider } from '@zendeskgarden/react-theming';


import React, { useEffect, useState } from 'react'
interface PaginationItemProps {
  totalPages: number;
  funcForPage: (e: number) => void;
}

function PaginationItem({ totalPages, funcForPage }: PaginationItemProps) {
  const [quantityPages, setQuantityPages] = useState({ currentPage: 1 });

  useEffect(() => {
    if(funcForPage !== undefined) {
      funcForPage(quantityPages.currentPage)
    }
  })

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