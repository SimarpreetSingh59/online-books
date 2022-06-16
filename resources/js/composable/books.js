import { ref } from "vue";
import axios from "axios";
import {useRouter} from 'vue-router'

export default function useBooks(){
    const books = ref([])
    const book = ref([])
    const errors = ref('')
    const router = useRouter()

    const authors = ['Author A', 'Author B', 'Author C'];
    const genres = ['Fiction', 'Romantic', 'Thriller'];
    const publishers = ['Pub A', 'Pub B', 'Pub C'];


    const getBooks = async () => {
        const response = await axios.get('http://localhost:8000/api/books/');
        books.value = response.data.data;
    }

    const getBook =  async (id) => {
        let response = await axios.get(`http://localhost:8000/api/books/${id}`);
        book.value = response.data.data;
    }

    const storeBook = async (data) => {
        errors.value = ''
        try{
            const res = await axios.post('http://localhost:8000/api/books', data)

            console.log(res)

            await router.push({name: 'home'})

        }catch(e){
            if(e.response.status === 422){
                errors.value = e.response.data.errors
            }
        }
    }

    const updateBook = async (id) => {
        errors.value=''
        try{

            await axios.put('http://localhost:8000/api/books' + id, book.value)
            await router.push({name: 'home'})

        }catch(e){
            if(e.response.status === 422){
                errors.value = e.response.data.errors
            }
        }
    }

    const removeBook = async (book) => {

        await axios.delete(`http://localhost:8000/api/books/${book.id}`)
        
        await router.go()
    }

    return{
        errors,
        authors,
        publishers,
        genres,
        books,
        book,
        getBook,
        getBooks,
        storeBook,
        updateBook,
        removeBook
    }
}