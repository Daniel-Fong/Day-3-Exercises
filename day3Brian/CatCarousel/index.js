
   $(function() {
    $( 'main' ).on('click', '.thumbnail img', function(event) {
      event.preventDefault();
      
      let thumbSrc = $(event.currentTarget).attr('src');
      let thumbAlt = $(event.currentTarget).attr('alt)');

      $('.hero img').attr('src', thumbSrc);
      $('.hero img').attr('alt', thumbAlt);
  });
});