$.ajax({
        url: 'https://opensheet.vercel.app/1RcEIy0fgogVxQFH-sJEh6FSQ_ojgDmHlz5Rv4FXrNUM/1',
        dataType: 'json',
        success: function(data) {
            console.log(data);
                $.each(data, function(key, drink) {
                console.log(drink.Title)
                 $('#coffees').append(`<div class="col-md-3 text-center">
                    <img src="${drink.PicURL}" alt="" class="img-fluid rounded-circle">
                     <h3>${drink.Title}</h3>
                    <p>€ ${drink.Price}</p>
                     <p>${drink.Description}</p>
                 </div>`);
            })
        }
});