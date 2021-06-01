<template>
  <div class="home">
    <headers />
    <sidebar />
    <tabs />
    <contents />
  </div>
</template>

<script>
// @ is an alias to /src
import contents from '@/components/contents'
import sidebar from '@/components/sidebarMenu'
import headers from '@/components/header'
import tabs from '@/components/tabs'
export default {
  // name: "Home",
  components: {
    contents,
    sidebar,
    headers,
    tabs
  },
};
</script>
