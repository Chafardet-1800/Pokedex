import React from 'react'

const Pagitacion = ({QuantityPages, arrayPages, currentPage, setCurrentPage}) => {

  const prevPage = () => {
    if(currentPage - 1 <= 0){
      setCurrentPage(QuantityPages)
      console.log(currentPage)
    }else{
      setCurrentPage(currentPage - 1)
      console.log(currentPage -1)
    }
  }

  const nextPage = () => {
    if(currentPage + 1 > QuantityPages){
      setCurrentPage(1)
      console.log(currentPage)
    }else{
      setCurrentPage(currentPage + 1)
      console.log(currentPage + 1)
    }
  }

  const changePageTo = n => {
    setCurrentPage(n)
    console.log(currentPage)
  }

  return (
    <div>
        <div className='pagination-container'>
            
            <button onClick={prevPage} className='pagination-prev-next FlexRowContainer BorderSecondary'>&#60;</button>
            
            <ul className='pagination-number-container'>
                {arrayPages?.map(num => 
                    (<li 
                        onClick={() => changePageTo(num)} 
                        key={num} 
                        className={currentPage === num ? 
                                    'page-number  page-active' 
                                            :
                                    'page-number' }>
                          
                          {num}

                    </li>))}
            </ul>
            
            <button onClick={nextPage} className='pagination-prev-next FlexRowContainer BorderSecondary'>&#62;</button>
            
        </div>
    </div>
  )
}

export default Pagitacion