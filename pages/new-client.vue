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
              <p><label>First Name:</label>
              <input type="text" name="firstName"></p>
              <p><label>Last Name:</label>
              <input type="text" name="lastName"></p>
              <p><label>Email Address:</label>
              <input type="text" name="email"></p>
              <p><label>Phone Number:</label>
              <input type="text" name="phoneNumber"></p>
              <p><label>Address:</label>
              <textarea name="address" rows="2"></textarea></p>
              <p><label>Date of Birth:</label>
              <input type="date" name="dateOfBirth"></p>

              <h3>Client History</h3>
              <p><label>Medical History:</label>
              <textarea name="medicalHistory"></textarea></p>
              <p><label>Medication:</label>
              <textarea name="medication"></textarea></p>
              <label>Are you pregnant?</label> <br />
              <p><input type="radio" name="pregnancy" value="yes">
              <label>Yes &nbsp;&nbsp;</label>
              <input type="radio" name="pregnancy" value="no">
              <label>No</label></p>
              <p><label>If yes, how many weeks?</label>
              <input type="text" name="pregnancyWeeks"></p>
              <label>Are you post-natal?</label> <br />
              <p><input type="radio" name="postNatal" value="yes">
              <label>Yes &nbsp;&nbsp;</label>
              <input type="radio" name="postNatal" value="no">
              <label>No</label></p>
              <p><label>If yes, how many weeks?</label>
              <input type="text" name="postNatalWeeks"></p>

              <h3>Client Daily Movement</h3>
              <p><label>Current level of physical activity:</label>
              <textarea name="physicalActivity"></textarea></p>
              <p><label>Occupation:</label>
              <input type="text" name="occupation"></p>
              <p><label>Physical movement during the day:</label>
              <textarea name="dailyMovement"></textarea></p>
              <p><label>How much sleep do you get at night?</label>
              <input type="text" name="sleep"></p>

              <h3>Client Goals</h3>
              <p><label>Goals for the 6-week challenge:</label>
              <textarea name="goals"></textarea></p>

              <h3>Emergency Contact</h3>
              <p><label>First Name:</label>
              <input type="text" name="emergencyFirstName"></p>
              <p><label>Last Name:</label>
              <input type="text" name="emergencyLastName"></p>
              <p><label>Contact Number:</label>
              <input type="text" name="emergencyPhoneNumber"></p>

              <p><input type="checkbox" name="termsAndConditions">
              <label> &nbsp; I understand that by submitting this form and signing up to Move-To Pilates Classes, you agree to be bound by the <a href="https://example.com/terms-and-conditions">Terms and Conditions</a> and <a href="https://example.com/liability-waiver">Liability Waiver</a>. These Terms and Conditions may change at Move-To Pilates discretion, and you may not be notified of this change.</label></p>

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
</script>