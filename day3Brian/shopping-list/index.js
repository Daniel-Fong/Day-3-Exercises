$(function(){
    $("#js-shopping-list-form").submit( event => {
        let inputVal = $('#shopping-list-entry').val();
        console.log(inputVal);
        event.preventDefault();
        $("ul").append('<li>' +
            `<span class="shopping-item">${inputVal}</span>` +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              ' <button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
          '</li>')
    });
});

$(function() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this)
          .closest('li')
          .remove();
    });
});

$(function() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {
      $(this)
      .closest('li')
      .find('span.shopping-item')
        .toggleClass('.shopping-item__checked');
    });
  });