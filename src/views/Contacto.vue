<style>
.contact .btn{
    color: white;
    background-color: #001d3b !important;
    border-color: #001d3b!important;
}
.contact .btn:hover{
    color: white;
    
}
</style>
<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Contact Us</h2>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm contact">
          <div class="card-body ">

            <form action="https://formsubmit.co/info@epicbuildco.com" method="POST">
              <!-- Form fields -->
              <div class="mb-3">
                <label for="name" class="form-label">Full name</label>
                <input type="text" class="form-control" id="name" name="name" required>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" required>
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone number</label>
                <input type="tel" class="form-control" id="phone" name="phone">
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
              </div>

              <!-- Hidden field for redirect after submission -->
              <input type="hidden" name="_next" value="https://epicbuildco.com/">

              <!-- Hidden field to avoid spam -->
              <input type="hidden" name="_captcha" value="false">

              <button type="submit" class="btn ">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>