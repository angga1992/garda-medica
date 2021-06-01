<template>
  <div class="home">
      <contents />
  </div>
</template>

<script>
// @ is an alias to /src
import contents from '@/components/contents'
export default {
  name: 'Home',
  components: {
    contents
  }
}
</script>
