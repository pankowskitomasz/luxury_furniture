<template>
    <section class="error-s1 align-items-center d-flex">
        <div class="row justify-content-center mx-0 w-100">
            <div class="col-10 col-sm-6 text-center text-shadow">
                <h2 class="font-weight-bold text-white">
                    Page not found!
                </h2>
                <router-link to="/" class=" text-white">
                    Back to <span class="font-weight-bold">Home</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Error'
}
</script>
