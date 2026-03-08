<template>
  <div :class="$style.wrapper">
    <header>
      <div :class="$style.pageBanner">
        <h1 :class="$style.title">Book Collections</h1>
        <p>Books</p>

        <form @submit.prevent="handleSearchBook" :class="$style.searchBooks">
          <input
            type="text"
            placeholder="Search books..."
            v-model="searchTerm"
          />
        </form>
      </div>
    </header>

    <div :class="$style.bookList">
      <h2 :class="$style.title">Books to Read</h2>

      <ul>
        <li v-for="(book, index) in books" :key="index">
          <span :class="$style.name">{{ book }}</span>
          <span
            @click="handleDeleteBook(book)"
            :class="$style.delete"
          >
            delete
          </span>
        </li>
      </ul>
    </div>

    <form @submit.prevent="handleAddBook" :class="$style.addBook">
      <input
        type="text"
        v-model="newBook"
        placeholder="Add a book..."
      />
      <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import books from "./MockBooklist.vue";
const fetchBooks = async ()=>{
    try{
        const listOfBooks = await books();
        console.log(listOfBooks);
    }catch(error){
        console.error("Error fetching books:", error);
    }
};

fetchBooks();

</script>

<style src="./Booklist.module.css" module>
.wrapper {}
.pageBanner {}
.title {}
.searchBooks {}
.bookList {}
.name {}
.delete {}
.addBook {}
</style>
