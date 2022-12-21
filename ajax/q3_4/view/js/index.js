$(() => {

    function submitHandler(event){
        event.preventDefault();
        const data = {
            name: $('#name').val(),
            price: $('#price').val()
        }

        $.post('/addToCart', {data})
            .done((result) =>{
                if(result){
                    $('#cart').html(`view-cart(${result})`); 
                    let value = parseInt($('#quantity').val()) - 1;
                    $('#quantity').val(value);
                    $('#msg').text('Product added successfully!');
                } else {
                    $('#msg').text('Product out of stuck!');
                }
            })
            .fail(()=> {
                $('#msg').text('Failed!');
            });  
    }

    $('#add').on('submit', submitHandler);
});
