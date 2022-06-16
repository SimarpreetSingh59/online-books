<template>
   <div class="container">
       <div class="row">
            <router-link :to="{name: 'home'}" class="text-sm font-medium nav-link">
                <button class="btn btn-primary">Back</button>
            </router-link>
        </div>
       <div>
            <h2 class="card-subtitle mb-2 text-muted">{{ book.title}}</h2>
            <h6 class="card-subtitle mb-2 text-muted">year: {{ book.year}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">written by: {{ book.author}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">published by: {{ book.publisher}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">genre: {{ book.genre}}</h6>
       </div>
       <div class="row">
           <div class="col-12 border">
               <div class="card" style="width: 100%;  margin: 10px; padding: 10px;" v-for="page in 10" :key="page">
                   <div class="card-body">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius facilisis dolor,
                           at porttitor nunc luctus sit amet. In tincidunt orci id mi finibus dapibus. Proin tempus,
                           lorem eu dapibus luctus, elit ante facilisis nulla, ac tristique augue justo eu turpis.
                           Donec eu enim a sem malesuada vulputate. In at placerat ex. Nullam tincidunt dolor et magna condimentum,
                            eu pulvinar lorem dictum. Phasellus venenatis rutrum imperdiet. Aenean eu massa lobortis, condimentum nunc sed,
                            molestie sem. Integer a interdum libero. Suspendisse mollis vehicula ligula a feugiat. Curabitur non odio sit amet mi
                            condimentum iaculis. Fusce sed tincidunt sem. Aenean porta viverra neque tristique ultricies.
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>

    import useBooks from "../../composable/books";
    import { onMounted } from "vue";

    export default {
        props:{
            id:{
                required:true,
                type:String
            }
        },

        setup(props){
            const {book, getBook} = useBooks()

            onMounted(() => getBook(props.id))

            return {
                book
            }
        }
    }

</script>