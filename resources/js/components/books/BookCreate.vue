<template>
    <div class="container">
        <form @submit.prevent="saveBook">
            <div class="form-group">
                <label>Title: </label>
                <input type="text" class="form-control" placeholder="Book Title" v-model="form.title">
            </div>
            <div class="form-group">
                <label>Year: </label>
                <input type="text" class="form-control" placeholder="Book year" v-model="form.year">
            </div>
            <div class="form-group">
                <label>Author: </label>
                <input class="form-control" v-model="form.author"  placeholder="Book Author"/>
            </div>
            <div class="form-group">
                <label>Publisher: </label>
                <input class="form-control" v-model="form.publisher" placeholder="Book Publisher"/>
            </div>
            <div class="form-group">
                <label>Genre: </label>
                <input class="form-control"  v-model="form.genre"  placeholder="Book Genre"/>
            </div>
            <div class="form-group"><br/>
                <button :disabled="!submittable" type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script>

    import useBooks from "../../composable/books";
    import { reactive, computed } from "vue";

    export default {
        setup(){
            const {errors, storeBook} = useBooks()

            const form = reactive({
                title: '',
                author: '',
                publisher: '',
                genre: '',
                year: null
            })

            const submittable = computed(() => {
                return form.title !== '' && form.author !== '' &&
                    form.publisher !== '' && form.genre !== '' &&
                    form.year !== null;
            })

            const saveBook = async () => {
                await storeBook({...form})
            }

            return {
                form,
                errors,
                saveBook,
                submittable
            }

        }
    }

</script>