$(function() {
    $('#number-chooser').submit( event => {
        event.preventDefault();
        console.log('click');
        console.log($("#number-choice").val());
        const arr = [];
        for (let i=0; i<$("#number-choice").val(); i++) {
            if (i%15===0) {
                arr.push($(
                    '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'
                ));
            } 
            else if (i%5===0) {
                arr.push($(
                    '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'
                ));
             }
            else if (i%3===0) {
                arr.push($(
                    '<div class="fizz-buzz-item fizz"><span>fizz</span></div>'
                ));
             }
            else {
                arr.push($(
                `<div class="fizz-buzz-item"><span>${i}</span></div>`
                ));
            }
    }
    $(".js-results").append(arr);
    });
});
