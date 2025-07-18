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

            <form name="New Client" method="POST" netlify>
              <p><label>First Name</label>
              <input type="text" name="firstName"> </p>
              <p><label>Last Name</label>
              <input type="text" name="lastName"></p>
              <p><label>Email Address</label>
              <input type="text" name="email"></p>
              <p><label>Phone Number</label>
              <input type="text" name="phoneNumber"></p>
              <p><label>Address</label>
              <textarea name="address" rows="2"></textarea></p>
              <p><label>Date of Birth</label>
              <input type="date" name="dateOfBirth"></p>

              <h3>Client History</h3>
              <p><label>Relevant Medical History <br /> <span>(i.e Injuries, surgeries, medical plans, general aches & pains, pregnant, post-natal)</span></label>
              <textarea name="medicalHistory"></textarea></p>
              <p><label>Relevant Medication</label>
              <textarea name="medication"></textarea></p>

              <h3>Client Daily Movement</h3>
              <p><label>Current Exercise</label>
              <textarea name="physicalActivity"></textarea></p>
              <p><label>Occupation<br /><span>(i.e stay at home mum, part time or part-time/full time work)</span></label>
              <input type="text" name="occupation"></p>
              <p><label>Physical movement required for occupation<br /><span>(i.e running around after kids all day, waitressing tables, computer work, combination)</span></label>
              <textarea name="dailyMovement"></textarea></p>

              <h3>Client Goals</h3>
              <p><label>Exercise Goals This Term<br /><span>(e.g. attend every class, build core strength, reduce back pain)</span></label>
              <textarea name="goals"></textarea></p>

              <h3>Emergency Contact</h3>
              <p><label>First Name</label>
              <input type="text" name="emergencyFirstName"></p>
              <p><label>Last Name</label>
              <input type="text" name="emergencyLastName"></p>
              <p><label>Contact Number</label>
              <input type="text" name="emergencyPhoneNumber"></p>

              <p><input type="checkbox" name="termsAndConditions" required>
              <label> &nbsp; I understand that by submitting this form and signing up to Move-To Pilates’ sessions, you agree to be bound by the <a href="/terms-conditions" target="_blank">Terms and Conditions</a> and <a href="/liability" target="_blank">Liability Waiver</a>. These Terms and Conditions may change at Move-To Pilates’ discretion, and you may not be notified of this change.</label></p>

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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
</script>