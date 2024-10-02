<template>
  <div>
    <div class="site-banner">

      <div class="container">
      
        <div class="site-header-content">
          <h1>Book an Appointment</h1>
        </div><!-- #end site-header-content -->

      </div><!-- #end container -->

    </div><!-- #end site-banner -->

    <section class="section-light section-p">

      <div class="container-m">

          <main class="main-content">

            <iframe src="https://go.appointmentcore.com/book/LhRiN2?view=Slots&embed=1" width="100%" height="400" style="border:none;" frameborder="0"></iframe>

        </main><!-- #end main-content -->

    </div><!-- #end container -->

  </section><!-- #end section-introduction -->

  </div>
</template>

<style lang="scss" scoped>
  .site-banner {
    background: #4f5a7a;
  }

  .section-light {
    background: #fafbfc;
  }
</style>

<script>
  export default {
    head: {
      script: [
        { src: 'https://go.appointmentcore.com/frontend/js/app/booking-link-embed-helper.js' }
      ]
    }
  }
</script>
</template>