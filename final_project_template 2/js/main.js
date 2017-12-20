// Make it rain!

$('section h2').on('click', function() {
  console.log($(this).siblings('.panel'));

  $(this).next(".panel").toggle("slow");
} );

$('faq-grid h3').on('click', function() {
  console.log($(this).siblings('.dropdown'));

  $(this).next(".dropdown").toggle("slow");
} );

// insert photo carousel for about section

// insert jumplink to contact section

// insert jumplink from schedule appt button to appointment request form

// insert jumplink from about/groups/HERE to contact section
