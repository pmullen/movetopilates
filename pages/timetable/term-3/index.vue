<template>
  <div>
    <div class="site-banner">

      <div class="container">
      
        <div class="site-header-content">
          <h1>Timetable - Term 3</h1>
        </div><!-- #end site-header-content -->

      </div><!-- #end container -->

    </div><!-- #end site-banner -->

    <section class="section">

      <div class="container-m">

          <main class="main-content">

            <img src="https://info.movetopilates.com.au/hubfs/Timetable%20-%20Weekly%20Pilates%20(WEBP).webp" alt="Timetable - Term 3 - Move to Pilates">

        </main><!-- #end main-content -->

      </div><!-- #end container -->

    </section><!-- #end section-introduction -->

</div>
</template>

<style lang="scss" scoped>
  .site-banner {
    background: #4f5a7a;
  }

  .main-content {
    h1, h2, h3, h4 {
      margin-top: 2rem;
    }

    h1, h2, h3 {
      color: var(--primary-color)
    }

    h3 {
      color: var(--secondary-color)
    }
  }
</style>

<script>
  export default {
    head: {
      title: 'Timetable - Term 3 - Move to Pilates',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Timetable - Term 3 - Move to Pilates'
        },
        { property: 'og:image', content: 'https://movetopilates.com.au/og-homepage.png' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
</script>