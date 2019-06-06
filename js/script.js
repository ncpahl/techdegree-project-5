lightbox.option({
  "wrapAround": true,
  "showImageNumberLabel": false,
  "disableScrolling": true,
  "alwaysShowNavOnTouchDevices": true
});

//search function

$('#search').keyup(function() {
    $(this).val($(this).val().toLowerCase()); //turn input into lowercase
    const $value = $( this ).val(); //hold search value
    console.log($value); // log

    $('a').hide(); // hide images when typing

    $('.gallery a').each(function (index, value) { //select each anchor in gallery class
      var $caption = $(this).attr('data-title'); //select caption text
      console.log($caption); // log caption text
      if ($caption.includes($value)) { // if caption includes search term
        $(this).show(); //show img with caption
      }
    });
  });
