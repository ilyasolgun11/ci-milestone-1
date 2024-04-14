function sendMail(contactForm) {
  emailjs
    .send("service_w7v896q", "template_czsiu17", {
      from_name: contactForm.name.value,
      to_name: contactForm.emailaddress.value,
      message: contactForm.projectsummary.value,
      reply_to: "ilyasolgun2015@gmail.com",
    })
    .then(
      function (response) {
        console.log("Success!", response);
      },
      function (error) {
        console.log("Failed!", error);
      }
    );
  return false;
}
