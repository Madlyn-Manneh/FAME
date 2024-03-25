$(function () {
  $("#header").load("includes/navbar.html");
  $("#footer").load("includes/footer.html");
  $("#crights").load("includes/crights.html");
  $("#contactus").load("includes/contact.html");
});
// Populate days based on selected month
$("#dob_month").change(function () {
  var month = $(this).val();
  var days = 31; // Default to 31 days
  if (month == "04" || month == "06" || month == "09" || month == "11") {
    days = 30;
  } else if (month == "02") {
    days = 29; // Assume non-leap year
  }
  $("#dob_day").empty();
  $("#dob_day").append('<option value="">Day</option>');
  for (var i = 1; i <= days; i++) {
    $("#dob_day").append(
      '<option value="' +
        (i < 10 ? "0" : "") +
        i +
        '">' +
        (i < 10 ? "0" : "") +
        i +
        "</option>"
    );
  }
});

// Populate years
var currentYear = new Date().getFullYear();
for (var i = currentYear; i >= currentYear - 100; i--) {
  $("#dob_year").append('<option value="' + i + '">' + i + "</option>");
}
