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

            <form netlify>
              <p><label for="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required></p>
              <p><label for="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required></p>
              <p><label for="email">Email Address:</label>
              <input type="email" id="email" name="email" required></p>
              <p><label for="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required></p>   

              <p><label for="address">Address:</label>
              <textarea id="address" name="address" required></textarea></p>
              <p><label for="dateOfBirth">Date of Birth:</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" required></p>

              <h3>Client History</h3>
              <p><label for="medicalHistory">Medical History:</label>
              <textarea id="medicalHistory" name="medicalHistory"></textarea></p>
              <p><label for="medication">Medication:</label>
              <textarea id="medication" name="medication"></textarea></p>
              <label for="pregnancy">Are you pregnant?</label> <br />
              <p><input type="radio" id="pregnantYes" name="pregnancy" value="yes">
              <label for="pregnantYes">Yes &nbsp;&nbsp;</label>
              <input type="radio" id="pregnantNo" name="pregnancy" value="no">
              <label for="pregnantNo">No</label></p>
              <p><label for="pregnancyWeeks">If yes, how many weeks?</label>
              <input type="number" id="pregnancyWeeks" name="pregnancyWeeks" disabled></p>
              <label for="postNatal">Are you post-natal?</label> <br />
              <p><input type="radio" id="postNatalYes" name="postNatal" value="yes">
              <label for="postNatalYes">Yes &nbsp;&nbsp;</label>
              <input type="radio" id="postNatalNo" name="postNatal" value="no">
              <label for="postNatalNo">No</label></p>
              <p><label for="postNatalWeeks">If yes, how many weeks?</label>
              <input type="number" id="postNatalWeeks" name="postNatalWeeks" disabled></p>

              <h3>Client Daily Movement</h3>
              <p><label for="physicalActivity">Current level of physical activity:</label>
              <textarea id="physicalActivity" name="physicalActivity"></textarea></p>
              <p><label for="occupation">Occupation:</label>
              <input type="text" id="occupation" name="occupation"></p>
              <p><label for="dailyMovement">Physical movement during the day:</label>
              <textarea id="dailyMovement" name="dailyMovement"></textarea></p>
              <p><label for="sleep">How much sleep do you get at night?</label>
              <input type="text" id="sleep" name="sleep"></p>

              <h3>Client Goals</h3>
              <p><label for="goals">Goals for the 6-week challenge:</label>
              <textarea id="goals" name="goals" required></textarea></p>

              <h3>Emergency Contact</h3>
              <p><label for="emergencyFirstName">First Name:</label>
              <input type="text" id="emergencyFirstName" name="emergencyFirstName" required></p>
              <p><label for="emergencyLastName">Last Name:</label>
              <input type="text" id="emergencyLastName" name="emergencyLastName" required></p>
              <p><label for="emergencyPhoneNumber">Contact Number:</label>
              <input type="tel" id="emergencyPhoneNumber" name="emergencyPhoneNumber" required></p>

              <p><input type="checkbox" id="termsAndConditions" name="termsAndConditions" required>
              <label for="termsAndConditions"> &nbsp; I understand that by submitting this form and signing up to Move-To Pilates Classes, you agree to be bound by the <a href="https://example.com/terms-and-conditions">Terms and Conditions</a> and <a href="https://example.com/liability-waiver">Liability Waiver</a>. These Terms and Conditions may change at Move-To Pilates discretion, and you may not be notified of this change.</label></p>

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