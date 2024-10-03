<template>
  <div>
    <section class="section-p section-dark">

      <div class="container-m container-form">
        <div class="grid grid-2">

          <div class="block-content">
            <h2>Contact Us</h2>
            <p>We're always available to chat. If you have any questions regarding our classes or studio, please get in touch using the adjacent form.</p>
          </div><!-- #end block-content -->

          <div class="block-content">
            <form name="contact" method="POST" data-netlify="true" class="form">
              <p>
                <label>Name</label>  
                <input type="text" name="name" /> 
              </p>
              <p>
                <label>Email</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone</label>
                <input type="phone" name="phone" />
              </p>
              <p>
                <label>Message</label>
                <textarea name="message"></textarea>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div><!-- #end block-content -->

        </div><!-- #end grid -->
      </div><!-- #end container -->

      </section><!-- #end section-download -->
  </div>
</template>