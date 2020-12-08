<template>
    <footer class="container-fluid bg-dark text-center text-white p-3 border-top border-dark">
        <small class="my-0">
            Copyright &copy; 2020 Tomasz Pankowski. All rights reserved.
            <router-link class="text-white" to="/privacy">
                Privacy policy
            </router-link>
        </small>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>