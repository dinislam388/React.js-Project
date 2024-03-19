import React from 'react';
import { MdDelete } from 'react-icons/md';

const BookRow = ({ book, deleteBooks }) => {
  const { isbn, title, author, pubYear } = book;

  return (
    <tr>
      <td>{isbn}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pubYear}</td>
      <td className='deleteBtn' onClick={() => deleteBooks(isbn)}>
        <MdDelete color='red' />
      </td>
    </tr>
  );
};

export default BookRow;





// import React from 'react';
// // import { MdOutlineDeleteOutline } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// const BookRow = ({book}) => {
//     const {isbn, title, author, pubYear} = book
//     return (
        
//             <tr>
//                 <td>{isbn}</td>
//                 <td>{title}</td>
//                 <td>{author}</td>
//                 <td>{pubYear}</td>
//                 <td className='deleteBtn' onClick={() => deleteBooks(isbn)}><MdDelete color='red'/></td>
//             </tr>
//     );
// };

// export default BookRow;









// import React from 'react'
// // import { MdDelete } from "react-icons/md";


// export default function BookRow({book}) {
//     const {isbn, title, author, pubYear} = book
//   return (
//     <tr>
//         <td>{isbn}</td>
//         <td>{title}</td>
//         <td>{author}</td>
//         <td>{pubYear}</td>
//         {/* <td className='delete_btn' onClick={()=> deleteBooks(isbn)}><MdDelete color='red'/></td> */}
//     </tr>
//   )
// }