<template>
    <div class="container">
        <form @submit.prevent="editBook">
            <div class="form-group">
                <label>Title: </label>
                <input id="title" type="text" class="form-control" placeholder="book title" v-model="book.title">
            </div>
            <div class="form-group">
                <label>Year: </label>
                <input type="text" class="form-control" placeholder="book year" v-model="book.year" id="year">
            </div>
            <div class="form-group">
                <label>Author: </label>
                <input class="form-control" v-model="book.author"  placeholder="Book Author"/>
            </div>
            <div class="form-group">
                <label>Publisher: </label>
                <input class="form-control" v-model="book.publisher" placeholder="Book Publisher"/>
            </div>
            <div class="form-group">
                <label>Genre: </label>
                <input class="form-control"  v-model="book.genre"  placeholder="Book Genre"/>
            </div>
            <div class="form-group"><br/>
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>


<script>

    import useBooks from "../../composable/books";
    import { onMounted, computed } from "vue";

    export default {
        props: {
            id: {
                required: true,
                type: String
            }
        },
        
        setup(props){
            const {errors, book, getBook, updateBook} = useBooks()

            onMounted(() => getBook(props.id))

            const editBook = async () => {
                await updateBook(props.id)
            }

            return{
                errors, 
                book,
                editBook
            }

        }


    }



</script>