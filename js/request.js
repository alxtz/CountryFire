console.log('test')

$(document).ready(function() {
  $('#submit').click(function functionName() {
    let imgUrl = $('#imgUrl').val()
    let helpText = $('#helpText').val()
    $.ajax({
      type: "POST",
      url: 'https://cors-anywhere.herokuapp.com/http://35.199.156.92:8787/api/create',
      data: {
        imageUrl: imgUrl,
        helpText: helpText,
        buttonText: 'Somehting',
        replyText: 'osmeoe'
      }
    });
  });
});
