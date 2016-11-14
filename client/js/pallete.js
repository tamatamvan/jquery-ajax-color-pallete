function pallete() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/colors",
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      console.log(data);
      $(`#${data.box}`).css('background-color', data.randColor)
    }
  })
}
