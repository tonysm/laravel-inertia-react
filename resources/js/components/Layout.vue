<template>
    <div>
        <main-menu></main-menu>
        <slot></slot>
    </div>
</template>

<script>
    import MainMenu from './MainMenu.vue';

    export default {
        components: {
            MainMenu,
        },
    }
</script>
