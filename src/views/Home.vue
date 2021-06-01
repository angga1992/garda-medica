<template>
    <div>
        <button @click="go('tahap1')">tahap 1</button>
        <button @click="go('tahap2')">tahap 2</button>
        <button @click="go('tahap3')">tahap 3</button>
    </div>
</template>

<script>
export default {
    methods: {
        go (val) {
            this.$router.push({
                path: `/${val}`
            })
        }
    }
}
</script>