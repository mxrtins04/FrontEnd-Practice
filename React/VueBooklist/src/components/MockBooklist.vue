
<script setup>
import { ref, onMounted } from 'vue'
const books = ref([])
onMounted(() => {
  Promise.resolve({
    books: [
      "Name of the Wind",
      "The Wise Man's Fear",
      "Kafka on the Shore",
      "The Master and the Margarita"
    ]
  }).then(response => {
    books.value = response.books
  })
})
</script>
