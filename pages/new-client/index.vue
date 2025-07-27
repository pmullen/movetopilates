<template>
  <div>
    <div class="site-banner">

      <div class="container">
      
        <div class="site-header-content">
          <h1>New Client</h1>
        </div><!-- #end site-header-content -->

      </div><!-- #end container -->

    </div><!-- #end site-banner -->

    <section class="section">

      <div class="container-m">

          <main class="main-content">

            <div id="hubspot-form"></div>

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
    title: 'New Client - Move to Pilates',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'New Client - Move to Pilates'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // Load the HubSpot embed script in the head
    script: [
      {
        charset: "utf-8",
        type: "text/javascript",
        src: "//js-ap1.hsforms.net/forms/embed/v2.js",
        async: true, // Recommended for external scripts
        defer: true // Recommended for external scripts
      }
    ]
  },
  mounted() {
    // Ensure hbspt is available before trying to create the form
    // Use a setTimeout or a watcher if you face a persistent race condition,
    // though mounted() is usually sufficient.
    if (typeof window.hbspt !== 'undefined') {
      window.hbspt.forms.create({
        portalId: "442003764",
        formId: "b0f2e865-a2ae-4544-a689-9115772a4cdb",
        region: "ap1",
        target: "#hubspot-form" // Specify the target div here
      });
    } else {
      // Fallback/retry logic if hbspt isn't immediately available
      // This can happen if the script is very large or network is slow.
      // A simple setTimeout with a check is often sufficient for retries.
      const checkHubspot = setInterval(() => {
        if (typeof window.hbspt !== 'undefined') {
          clearInterval(checkHubspot);
          window.hbspt.forms.create({
            portalId: "442003764",
            formId: "b0f2e865-a2ae-4544-a689-9115772a4cdb",
            region: "ap1",
            target: "#hubspot-form"
          });
        }
      }, 200); // Check every 200ms
      setTimeout(() => {
          clearInterval(checkHubspot); // Stop trying after a certain time
          console.warn("HubSpot script did not load in time.");
      }, 5000); // Stop after 5 seconds
    }
  },
  // You don't need __dangerouslyDisableSanitizersByTagID for this approach
}
</script>