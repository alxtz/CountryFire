console.log('this is the feed')
$(document).ready(function() {
  $.get( "https://cors-anywhere.herokuapp.com/http://35.199.156.92:8787/api/all", function( data ) {
    console.log(data)
    data.data.forEach(function functionName(feed) {
      if(feed.helpText == undefined || feed.helpText == 2) {
        return
      }
      $('#feeds').append(`
        <div class="feed row">
          <div class="col-md-3 pic">
            <img class="my-house" src="image/house.jpg" alt="house">
          </div>
          <div class="col-md-6 text">
            <p class="help-text">` + feed.helpText + `</p>
          </div>
          <div class="col-md-3 do">
            <button class="do-button" type="button" name="button">Help Him !</button>
          </div>
        </div>`)
    })
  });
});
