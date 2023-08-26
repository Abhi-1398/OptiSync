import React, { useState } from 'react';

const GetBookComp = () => {
  const [bookId, setBookId] = useState('');
  const [bookInfo, setBookInfo] = useState(null);

  const getbookInfo = () => {
    fetch(`http://training.object.co.in/api/book/get/${bookId}`)
      .then(response => response.json())
      .then(data => setBookInfo(data));
  };
  {/*

   

*/}
  return (
    <div>
      <h2>Get Book Info</h2>
      <div>
        Enter Book ID:
        <input type="text" id="bookId" value={bookId} onChange={(e) => setBookId(e.target.value)} />
      </div>
      
      <div>
        {bookInfo ? (
          <div>
            <h3>Book Details:</h3>
            <p>Book ID: {bookInfo.Id}</p>
            <p>Title: {bookInfo.Title}</p>
            <p>Publication: {bookInfo.Publication}</p>
            <p>Price: {bookInfo.Price}</p>
            
          </div>
        ) : (
          <p>Please Enter Correct ID to retrive book information</p>
        )}
      </div>
    </div>
  );
};

export default GetBookComp;