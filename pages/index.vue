<template>
    <div>
      <div class="site-banner">

        <div class="container">
        
          <div class="site-header-content">
            <h1>Reclaim your body<br />
              Live 15-minute workout at home<br />
                <i>With my 6 weeks <span>Energise and Revitalise</span> Challenge</i>
            </h1>

            <p><NuxtLink to="/appointment" class="button button-header">Contact Alexis &nbsp; &raquo;</NuxtLink></p>
          </div><!-- #end site-header-content -->
 
        </div><!-- #end container -->

      </div><!-- #end site-banner -->

      <section class="section-p section-featured-items">

        <div class="container">

          <h2 class="section-title">What do you get?</h2>

          <div class="grid grid-3 list-benefits">
            <div class="item-featured">
              <h3 class="tilde">Weekly 15 Minute Online Session </h3>
              <p>Semi-private (max. 4 people) sessions giving personalised guidance and coaching for BIG RESULTS. </p>
            </div><!-- #end item-featured -->

            <div class="item-featured">
              <h3 class="tilde">Home Exercise Program</h3>
              <p>Suitable to do anywhere at any time (max. 3 exercises).</p>
            </div><!-- #end item-featured -->

            <div class="item-featured">
              <h3 class="tilde">Save Time</h3>
              <p>Reclaim your time spent travelling, lengthy classes and schedules that don't work. </p>
            </div><!-- #end item-featured -->

            <div class="item-featured">
              <h3 class="tilde">Feel More Energised</h3>
              <p>Reclaim feeling energised and stressfree.</p>
            </div><!-- #end item-featured -->
            
             <div class="item-featured">
              <h3 class="tilde">SMS Accountability</h3>
              <p>Weekly check-ins to keep you on track and motivated.</p>
            </div><!-- #end item-featured -->

            <div class="item-featured">
              <h3 class="tilde">Greater Strength</h3>
              <p>Get your body back into shape with greater strength.</p>
            </div><!-- #end item-featured -->

          </div><!-- #end grid -->

          <p class="isolated-cta"><NuxtLink to="/appointment" class="button button-header">Book a free 15-minute chat &nbsp; &raquo;</NuxtLink></p>

        </div><!-- #end container -->

      </section><!-- #end section-featured-items -->

      <section class="section-p section-light">

        <div class="container-m">

          <div class="grid grid-2">

            <div class="block-content grid-order-2">
              <h2>Hello, I'm Alexis!</h2>

              <p>A proud, busy mum to three beautiful, wild, and wonderfully chaotic boys! I’ve always loved staying active and keeping fit, but let’s be real – once you have kids, squeezing in “me time” for exercise becomes a bit like chasing a unicorn. It’s important, yet somehow always elusive. Whether it’s school holidays, sick days, last-minute performances, or those mad dashes to grab birthday presents – there’s always something!</p>

              <p>After years of teaching Pilates, I realised that mums like us need a solution that actually fits into our lives. That’s why I’ve created a home-based exercise program that’s quick, effective, and designed to help you reclaim your body – no matter how hectic things get. It's all about prioritizing yourself, even with interruptions along the way.</p>

              <p>Book a free 15-minute chat with me to see if my program fits into your busy schedule, and together, we can work on getting you back to feeling strong, energised, and ready to take on whatever life throws your way!</p>

              <p><NuxtLink to="/appointment" class="button button-cta">Book a free 15-minute chat &nbsp; &raquo;</NuxtLink></p>

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
      background-color: #000e3699;
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
    title: 'Move to Pilates - Reclaim your body | Live 15-minute workout at home | 6 weeks Energise and Revitalise Challenge',
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