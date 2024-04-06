import ReactPaginate from 'react-paginate';
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import './Table.css';

export function Table({tableHeader, tableData, pageDetails, handlePageChange, handleEdit, handleDelete}) { 
    const createMarkup = (text)  => { return {__html: text}; };
    const editHandler = (d) => {
        handleEdit(d);
    }

    const deleteHandler = (d) => {
        handleDelete(d);
    }
    return (
        <div className='tableComponent'>
            <table>
                <thead>
                    <tr>
                        {
                            tableHeader && tableHeader.map((header) => ( 
                                <th>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData && tableData.map((data) => 
                                    <tr>
                                        {
                                            data.map((d, index) => {
                                                const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(d);
                                                if (index != data.length - 1) {
                                                return <>{
                                                    
                                                    <td>{hasHtmlTags ? <div id="htmlDiv" dangerouslySetInnerHTML={createMarkup(d)} /> : d}</td>
                                                    
                                                    }</>
                                                } else {
                                                    return (
                                                        <td>
                                                            <div id="editDiv">
                                                                <GrEdit id="editIcon" onClick={() => editHandler(d)}/>
                                                            </div>
                                                            <div id="deleteDiv">
                                                                <MdDeleteForever id="deleteIcon" onClick={() => deleteHandler(d)}/>
                                                            </div>
                                                            
                                                        </td>
                                                    )
                                                }
                                            })
                                        }
                                        
                                        
                                    </tr>
                                )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={tableHeader.length}>
                            {pageDetails}
                        </td>
                    </tr>
                </tfoot>
            </table>
                <ReactPaginate
                    previousLabel= {"< Prev"}
                    nextLabel = {"Next >"}
                    pageCount={pageDetails.totalPages}
                    forcePage={pageDetails.currentPage}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName={"active"}
                    renderOnZeroPageCount={null}
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="activee boxx"
                />
        </div>
    )
  }