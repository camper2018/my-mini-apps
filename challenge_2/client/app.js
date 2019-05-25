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
        var finalData = data.replace(/\n/g, '<br>');
        $('#data').html(finalData) ;
        //console.log('form successfully submitted', data);
      },
      error: function (error) {
          console.error('Failed to send form', error);
        }
    });
  });

});



