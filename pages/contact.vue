<template>
  <div>
    <div class="site-banner">

      <div class="container">
      
        <div class="site-header-content">
          <h1>Contact Us</h1>
        </div><!-- #end site-header-content -->

      </div><!-- #end container -->

    </div><!-- #end site-banner -->

    <section class="section">

      <div class="container-m">

          <main class="main-content">

            <form name="Contact Us" method="POST" netlify>
              <p><label>First Name</label>
              <input type="text" name="firstName" placeholder="* Required"></p>
              <p><label>Last Name</label>
              <input type="text" name="lastName" placeholder="* Required"></p>
              <p><label>Email</label>
              <input type="text" name="email" placeholder="* Required"></p>
              <p><label>Phone Number</label>
              <input type="text" name="phoneNumber"></p>
             
              <p><label>Message</label>
              <textarea name="message"></textarea></p>

              <p><button type="submit" class="button">Submit</button></p>
          </form>
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
    max-width: 600px;
    margin: 0 auto;

    h1, h2, h3, h4 {
      margin-top: 2rem;
    }

    h1, h2, h3 {
      color: var(--primary-color)
    }

    h3 {
      color: var(--secondary-color);
      margin-top: 4rem;
    }
  }
  
</style>

<script>
  export default {
    head: {
      title: 'Contact Alexis - Move to Pilates',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Alexis - Move to Pilates'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
</script>