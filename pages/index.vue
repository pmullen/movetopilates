<template>
    <div>
      <div class="site-banner">

        <div class="container">
        
          <div class="site-header-content">
            <h1>Express &amp; Restorative Pilates<br />
                <i>Get unlimited classes for 3 weeks for just $50 with our introductory offer!</i>
            </h1>

            <NuxtLink to="contact" class="button button-header">Get Started &nbsp; &raquo;</NuxtLink>
          </div><!-- #end site-header-content -->
 
        </div><!-- #end container -->

      </div><!-- #end site-banner -->

      <section class="section-p">

        <div class="container-m">

          <div class="carousel">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="testimonial"
              :class="{ active: index === currentTestimonial }"
            >
              <img v-if="testimonial.img"
              :src="testimonial.img"
              :alt="testimonial.author" />
              <div v-html="testimonial.title"></div>
              <div v-html="testimonial.quote"></div>
              <div class="author">{{ testimonial.author }}</div>
            </div>

            <div class="dots">
              <span
                v-for="(dot, index) in testimonials"
                :key="index"
                class="dot"
                :class="{ active: index === currentTestimonial }"
                @click="showTestimonial(index)"
              ></span>
            </div>
          </div>

        </div>

      </section>

      <section class="section-light section-p">

        <div class="container-m">

          <div class="grid grid-2">

            <div class="block-content grid-order-2">
              <h2>Hello, I'm Alexis!</h2>

              <p>A proud, busy mum to three beautiful, wild, and wonderfully chaotic boys! I’ve always loved staying active and keeping fit, but let’s be real – once you have kids, squeezing in “me time” for exercise becomes a bit like chasing a unicorn. It’s important, yet somehow always elusive. Whether it’s school holidays, sick days, last-minute performances, or those mad dashes to grab birthday presents – there’s always something!</p>

              <p>After years of teaching Pilates, I realised that mums like us need a solution that actually fits into our lives. That’s why I’ve created a home-based exercise program that’s quick, effective, and designed to help you reclaim your body – no matter how hectic things get. It's all about prioritizing yourself, even with interruptions along the way.</p>

              <p>Book a free 15-minute chat with me to see if my program fits into your busy schedule, and together, we can work on getting you back to feeling strong, energised, and ready to take on whatever life throws your way!</p>

              <p><NuxtLink to="contact" class="button button-header">Get Started &nbsp; &raquo;</NuxtLink></p>

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

    @media only screen and (min-width: 960px) {
      i {
        display: block;
        max-width: 60%;
      }
    }
  }
</style>

<script>
  import quoteGill from '~/assets/img/quote-gill.webp'
  import quoteLisa from '~/assets/img/quote-lisa.webp'
  import quoteNat from '~/assets/img/quote-nat.webp'

  export default {    
  head: {
    title: 'Express and Restorative Pilates - Kalamunda - Move to Pilates',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Experience Express and Restorative Pilates with Move to Pilates in Kalamunda. '
      },
      { property: 'og:image', content: 'https://movetopilates.com.au/og-homepage.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

    data() {
      return {
        currentTestimonial: 0,
        intervalId: null,
        testimonials: [
          {
            img: quoteGill,
            title: '<p><strong>You are such a great teacher!</strong></p>',
            quote: '<p>Thank you for having me – you’re so professional and encouraging and you make the Pilates classes fun and non-threatening, with a clear focus of helping us get stronger!</p>',
            author: 'Gill C.'
          },
          {
            img: quoteLisa,
            title: '<p><strong>100% recommend</strong></p>',
            quote: '<p>100% recommend Alexis as a teacher! You know sometimes when you are new in a class and you have to keep bobbing your head up to see what you are meant to be doing? Well Alexis explains everything so well rarely have to do that if at all! 😻</p>',
            author: 'Lisa K.'
          },
          {
            img: quoteNat,
            title: '<p><strong>Enjoyable!</strong></p>',
            quote: '<p>I’ve loved doing Pilates with Alexis. She explains things in a way that actually makes sense, and I always leave feeling stronger and more relaxed. The classes are welcoming, with no pressure, but you still feel like you’ve worked. I’ve noticed my posture and core strength improving since starting, and it’s become something I look forward to each week. Highly recommend if you want to feel good in your body again</p>',
            author: 'Natalie A.'
          },
          {
            title: '<p><strong>Renewed!</strong></p>',
            quote: '<p>Almost pain free and I know the stretches to do myself at home. Did not think I would enjoy it as much as I do - I really look forward to this class</p>',
            author: 'April K.'
          },
          {
            title: '<p><strong>No pain</strong></p>',
            quote: '<p>Game changer for me personally. Can do things all day and not notice any pain. How relaxing the experience is.</p>',
            author: 'Ben H.'
          },
          {
            title: '<p><strong>Calm end to the weekend 🙏🏻</strong></p>',
            quote: '<p>I have a fresh, calm end to the weekend/start to the week which I love!  Keep teaching in the dark, so lovely to switch off and just listen.</p>',
            author: 'Chloe B.'
          },
          {
            title: '<p><strong>More relaxed starting the week</strong></p>',
            quote: "<p>My back and neck tightness is so much better and I'm so much more relaxed starting the week. I have loved these classes and am looking forward to another term of Sunday night Zen.</p>",
            author: 'Cassie W.'
          }
        ]
      }
    },
    mounted() {
      this.startCarousel()
    },
    beforeDestroy() {
      clearInterval(this.intervalId)
    },
    methods: {
      showTestimonial(index) {
        this.currentTestimonial = index
      },
      startCarousel() {
        this.intervalId = setInterval(() => {
          this.currentTestimonial =
            (this.currentTestimonial + 1) % this.testimonials.length
        }, 6000)
      }
    }
  }
</script>