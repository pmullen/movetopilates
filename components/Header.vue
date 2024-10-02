<template>
  <div>
    <header class="site-header">
      <div class="container container-nav">
        <div class="flex">
          <NuxtLink to="/" class="site-logo ir">
            Move to Pilates
          </NuxtLink>

          <NuxtLink to="/appointment" class="button button-nav button-demo">Book a free 15-minute chat</NuxtLink>
        </div><!-- #end grid -->
      </div><!-- #end container -->
    </header><!-- #end site-header -->

  </div>
</template>

<style lang="scss" scoped>
  .site-header {
    background: white;
    height: 100px;
  }

  @media only screen and (max-width: 960px) {
    .site-header {
      height: 80px;
    }
  }

  @media only screen and (max-width: 500px) {
    .site-header {
      height: 70px;
    }
  }

  .site-logo {
    background: url(../assets/img/logo/site-logo.png) no-repeat;
    background-size: cover;
    display: block;
    height: 50px;
    margin: auto 0 auto 0;
    width: 131px
  }

  @media only screen and (max-width: 600px) {
    .site-logo {
      height: 40px;
      width: 105px;
    }
  }

  .button-nav {
    margin: auto 0 auto auto;

    @media only screen and (max-width: 600px) {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 0;
      z-index: 1;
    }
  }
</style>