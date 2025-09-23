<template>
  <div>
    <header class="site-header">
      <div class="container container-nav">
        <div class="flex">
          <NuxtLink to="/" class="site-logo ir">
            Move to Pilates
          </NuxtLink>

          <div class="nav-group">
            <nav class="main-nav">
              <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
              <NuxtLink to="/timetable" class="nav-link">Timetable</NuxtLink>
            </nav>
            <a href="https://momence.com/m/534120" class="button button-nav button-demo" target="_blank" rel="noopener">
              Book Intro Offer &nbsp; &raquo;
            </a>
          </div>
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

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-group {
  display: flex;
  align-items: center;
}

.main-nav {
  display: flex;
  align-items: center;
  margin-right: 20px; 

  .nav-link {
    color: #111111;
    text-decoration: none;
    font-weight: 500;
    margin-right: 1.5rem;
    font-size: 1rem;
    transition: color 0.2s;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: var(--primary-color, #2d3a5a);
      text-decoration: none;
    }
  }
}

.button-nav {
  margin: 0;

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