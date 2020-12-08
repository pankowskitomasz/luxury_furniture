<template>
    <section class="privacy-s1 align-items-center d-flex p-header">
        <div class="row justify-content-center mx-0 w-100">
            <div class="col-10 col-md-6 card p-4 privacy-container my-4">
                <h1 class="h5 font-weight-bold text-secondary text-uppercase text-center">
                    Privacy policy
                </h1>
                <p class="pt-2">
                    This website is a demo version of real website, It doesn't collect and process, 
                    in long term meaning (longer than needed for website operation during visitor's 
                    presence), any user (visitor) data. All information collected during visitor's 
                    presence on this website is used only for technical purposes, required for correct 
                    operation of website or demonstration purposes related to technical mechanisms 
                    and presentation of its operation.
                </p>
                <p class="pt-2">
                    All data stored in cookies is directly related to saved visitor's settings 
                    for website's mechanisms, and can be managed by visitor with functionality 
                    provided by visitor's web browser - in order to get more information visitor 
                    should check web browser's manual.
                </p>
                <p  class="pt-2">
                    However this website may contain attached third-party addons (like for 
                    example: scripts added by hosting services provider) which may collect 
                    visitors data for security and technical purposes. In order to know more 
                    about them, visitor should visit hosting provider's website and check 
                    privacy policy related to collected data.
                </p>
                <p class="pt-2">
                    All materials used for creation of this website were acquired from legal 
                    resources. Any convergences and similarities with any materials presented 
                    on other websites or resources are accidental.
                </p>
                <div class="p-3 text-center">
                    <router-link to="/" class="btn btn-outline-dark d-inline">
                        back to <span class="font-weight-bold">Home</span> page
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Privacy'
    }
</script>
