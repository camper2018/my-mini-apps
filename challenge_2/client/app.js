$(document).ready(function() {
  $('form').on('submit', (e) => {
    e.preventDefault();
    var form = $('form')[0];
    var formData = new FormData(form);
    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: 'http://127.0.0.1:3000/upload_json',
      contentType: false,
      cache: false,
      data: formData,
      processData: false,
      success: function(data) {
        // var result = data.split('\n');
        // result.forEach(function(item) {
        //  $div = $('<div></div>');
        //  $div.text(item);
        //  $('#data').append($div);
        // });
        $('#download').append(data);

      },
      error: function (error) {
          console.error('Failed to send form', error);
      }
    });
  });
});

