<template>
    <div>
      <div class="site-banner">

        <div class="container">
        
          <div class="site-header-content">
            <h1>Express &amp; Restorative Pilates<br />
                <i>Introduction Offer - $50 for 3 weeks (Unlimited Classes)</i>
            </h1>

            <NuxtLink to="contact" class="button button-header">Contact Alexis &nbsp; &raquo;</NuxtLink>
          </div><!-- #end site-header-content -->
 
        </div><!-- #end container -->

      </div><!-- #end site-banner -->

      <section class="section">

        <div class="container-m">

          <div class="grid grid-2">

            <div class="block-content grid-order-2">
              <h2>Hello, I'm Alexis!</h2>

              <p>A proud, busy mum to three beautiful, wild, and wonderfully chaotic boys! I’ve always loved staying active and keeping fit, but let’s be real – once you have kids, squeezing in “me time” for exercise becomes a bit like chasing a unicorn. It’s important, yet somehow always elusive. Whether it’s school holidays, sick days, last-minute performances, or those mad dashes to grab birthday presents – there’s always something!</p>

              <p>After years of teaching Pilates, I realised that mums like us need a solution that actually fits into our lives. That’s why I’ve created a home-based exercise program that’s quick, effective, and designed to help you reclaim your body – no matter how hectic things get. It's all about prioritizing yourself, even with interruptions along the way.</p>

              <p>Book a free 15-minute chat with me to see if my program fits into your busy schedule, and together, we can work on getting you back to feeling strong, energised, and ready to take on whatever life throws your way!</p>

              <p><NuxtLink to="contact" class="button button-header">Contact Alexis &nbsp; &raquo;</NuxtLink></p>

            </div><!-- #end block-content -->

            <div class="block-media grid-order-1">
              <img src="~/assets/img/profile-02.webp" class="image-plus image-plus-right image-profile" />
            </div><!-- #end block-media -->
          </div><!-- #end grid -->

        </div><!-- #end container -->

      </section><!-- #end section-introduction -->

  </div>
</template>

<style lang="scss" scoped>
  .price-list {
    strong {
      color: #8892af;
    }

    @media only screen and (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .timetable {
    display: grid;
    grid-template-columns: auto 1fr;
    font-size: 0.875rem;
    gap: 0.5rem 1rem;
    margin-top: 1.25rem;
  }

  .timetable-time {
    color: #8892af;
    font-weight: 600;
  }

  .block-title {
    margin-bottom: 3.75rem;

    span {
      border-bottom: 4px solid var(--secondary-color);
      padding-bottom: 8px;
    }
  }

  h4 {
    margin-bottom: 1rem;
  }

  .container-form {
    .block-content {
      margin-top: 0;
    }
  }

  .list-benefits {
    @media only screen and (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .popular {
    &::after {
      background: var(--secondary-color);
      border-radius: 20px;
      color: white;
      content: 'POPULAR';
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin-left: 1rem;
      padding: 0.25rem 0.5rem;
      vertical-align: middle;
    }
  }

  .image-profile {
    min-width: 425px;
    max-width: 425px;

    @media only screen and (max-width: 960px) {
      max-width: 100%;
      min-width: auto;
    }
  }

  .button-cta {
    margin-top: 2rem;
  }

  .site-banner {
    &:before {
      background-color: rgb(0 14 54 / 60%);
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }

  .site-header-content {
    padding: 8rem 0 6rem 0;
  }
</style>

<script>
export default {
  head: {
    title: 'Express and Restorative Pilates - Kalamunda - Move to Pilates',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>