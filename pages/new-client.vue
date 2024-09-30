<template>
  <div>
    <div class="site-banner">

      <div class="container">
      
        <div class="site-header-content">
          <h1>Client Intake Form</h1>
        </div><!-- #end site-header-content -->

      </div><!-- #end container -->

    </div><!-- #end site-banner -->

    <section class="section">

      <div class="container-m">

          <main class="main-content">

            <form name="client-intake" netlify>
              <p><label>First Name:</label>
              <input type="text" name="firstName" required></p>
              <p><label>Last Name:</label>
              <input type="text" name="lastName" required></p>
              <p><label>Email Address:</label>
              <input type="email" name="email" required></p>
              <p><label>Phone Number:</label>
              <input type="tel" name="phoneNumber" required></p>
              <p><label>Address:</label>
              <textarea name="address" required></textarea></p>
              <p><label>Date of Birth:</label>
              <input type="date" name="dateOfBirth" required></p>

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
              <input type="number" name="pregnancyWeeks"></p>
              <label>Are you post-natal?</label> <br />
              <p><input type="radio" name="postNatal" value="yes">
              <label>Yes &nbsp;&nbsp;</label>
              <input type="radio" name="postNatal" value="no">
              <label>No</label></p>
              <p><label>If yes, how many weeks?</label>
              <input type="number" name="postNatalWeeks"></p>

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
              <textarea name="goals" required></textarea></p>

              <h3>Emergency Contact</h3>
              <p><label>First Name:</label>
              <input type="text" name="emergencyFirstName" required></p>
              <p><label>Last Name:</label>
              <input type="text" name="emergencyLastName" required></p>
              <p><label>Contact Number:</label>
              <input type="tel" name="emergencyPhoneNumber" required></p>

              <p><input type="checkbox" name="termsAndConditions" required>
              <label> &nbsp; I understand that by submitting this form and signing up to Move-To Pilates Classes, you agree to be bound by the <a href="https://example.com/terms-and-conditions">Terms and Conditions</a> and <a href="https://example.com/liability-waiver">Liability Waiver</a>. These Terms and Conditions may change at Move-To Pilates discretion, and you may not be notified of this change.</label></p>

              <p><input type="submit" value="Submit" class="button"></p>
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