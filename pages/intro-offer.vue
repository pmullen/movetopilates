<template>
  <div>
    <div class="site-banner">

      <div class="container">
      
        <div class="site-header-content">
          <h1>Restorative Pilates with Alexis<br />
            <i>A focus on slowing down, stretching, releasing tension, and restoring the body.</i>
          </h1>

          <p><a href="https://buy.stripe.com/9AQ2bA7XVcgy1u814q" class="button button-header" target="_blank" style="margin-right:15px;">Book 6pm Sunday Class</a> <a href="https://buy.stripe.com/14k6rQemjeoG6OsaF1" class="button button-header" target="_blank">Book 7pm Sunday Class</a></p>
        </div><!-- #end site-header-content -->

      </div><!-- #end container -->

    </div><!-- #end site-banner -->

    <section class="section-p section-featured-items">

      <div class="container">

        <h2 class="section-title">What does the class offer?</h2>

        <div class="grid grid-3 list-benefits">
          <div class="item-featured">
            <h3 class="tilde">Prioritise Self-Care Time</h3>
            <p>Give yourself space to slow down, restore your body, and prepare for the week ahead.</p>
          </div><!-- #end item-featured -->

          <div class="item-featured">
            <h3 class="tilde">Soothe Aches and Pains</h3>
            <p>Relieve back pain and stiffness with slow, controlled movement that nurtures your spine and joints.</p>
          </div><!-- #end item-featured -->

          <div class="item-featured">
            <h3 class="tilde">Stretch with Intention</h3>
            <p>Gently open up the body through slow, purposeful stretches that release tightness and improve mobility.</p>
          </div><!-- #end item-featured -->

          <div class="item-featured">
            <h3 class="tilde">Release Built-Up Tension</h3>
            <p>Let go of physical and mental tension stored in the body from daily stress and busyness.</p>
          </div><!-- #end item-featured -->
          
           <div class="item-featured">
            <h3 class="tilde">Restore Your Energy</h3>
            <p>Reconnect with yourself through gentle movement that recharges your energy and calms your mind.</p>
          </div><!-- #end item-featured -->

          <div class="item-featured">
            <h3 class="tilde">Slow Down Mindfully</h3>
            <p>Take a moment to pause, breathe deeply, and allow your nervous system to settle.</p>
          </div><!-- #end item-featured -->

        </div><!-- #end grid -->

        <p class="isolated-cta"><a href="https://buy.stripe.com/9AQ2bA7XVcgy1u814q" class="button button-header" style="margin-right:15px;" target="_blank">Book 6pm Sunday Class</a> <a href="https://buy.stripe.com/14k6rQemjeoG6OsaF1" class="button button-header" target="_blank">Book 7pm Sunday Class</a></p>

      </div><!-- #end container -->

    </section><!-- #end section-featured-items -->

</div>
</template>

<style lang="scss" scoped>

h1 {
  i {
    font-size: 1.5rem;
    max-width: 65%;
    display: block;

    @media screen and (max-width:960px) {
      max-width: 100%;
    }
  }
}

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
  background-image: url(~/assets/img/bg-header-06.webp);
  background-position: center center;

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

.button-header {
  background-color: #9e7394;

  &:hover {
    background: darken(#9e7394, 5%)
  }
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