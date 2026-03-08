import React, { useEffect } from 'react'
import styles from "./Booklist.module.css"
import mockBookList from './mockBookList'

 
 const Booklist = () => {
    const [books, setBooks] = React.useState([])
    const [result, setResult] = React.useState("")
    const [books2, setBooks2] = React.useState([])

    

    const handleDeleteBook = (clickedBook) => {
        setBooks(books.filter((book) => book !== clickedBook))
        setBooks2(books2.filter((book) => book !== clickedBook))
    }

    const changeHandle = (event) => {
        setResult(event.target.value.trim());
    }

    const handleAddBook = (event) => {
        event.preventDefault()
        if(result){
            setBooks([...books, result])
            setBooks2([...books2, result])
        }else{
            alert("Please enter a book name")
        }
    }

    const searchBooks = (event) => {
        const SearchInput = event.target.value.trim().toLowerCase()
        if(SearchInput){
            const filteredBooks = books2.filter((book) => book.toLowerCase().includes(SearchInput))
            setBooks(filteredBooks)
        }
    }

    const handleSearchBook = (event) => {
        event.preventDefault()
    }


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const listOfBooks = await mockBookList()
                setBooks(listOfBooks.books)
                setBooks2(listOfBooks.books)
                console.log("Books fetched:", listOfBooks.books)
            } catch (error) {
                console.error("Error fetching books:", error)
            }
        }
        fetchBooks()
    },[])

    return (
     <div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form  onSubmit={handleSearchBook} className={styles.searchBooks}>
            <input  onChange={searchBooks}type="text" placeholder="Search books..." />
          </form>
	    	</div>
	    </header>
	    <div className={styles.bookList}>
	    	<h2 className={styles.title}>Books to Read</h2>{}
	    	<ul>
                {
                    books.map((book,index) => (
                        <li key={index}>
                            <span className={styles.name}>{book}</span>
                            <span onClick={() => handleDeleteBook(book)} className={styles.delete}>delete</span>
                        </li>
                    ))
                }
	    	</ul>
	    </div>
	    <form  onSubmit={handleAddBook}  className={styles.addBook}>
	    	<input type="text"  onChange={changeHandle} placeholder="Add a book..." />
	    	<button >Add</button>
	    </form>
    </div>

     ) }
export default Booklist
