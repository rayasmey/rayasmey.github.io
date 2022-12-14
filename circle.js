$(()=>{
    let timer;
    const colors=["red","blue","pink","teal","magenta","gold","green","skyblue","purple","cyan"];
    $('#start').click(start);
    
    function drawCircle(index){
 
        const size = $('#width').val();


        const color = colors[Math.round(Math.random(0,1) * 10)];

        let mtop = 'auto';
        let left = 'auto';

        let height = window.innerHeight;
        let width = window.innerWidth;

        if(height > 820){
            height = height - (height - 830);
            width = width - (width - 1730);
        } else {
            height = height - (height - 830) - height/6;
            width = width - (width - 1730) - width/4;
        }

        if(index % 4 === 0){
            left = width/2 - (6 * index) + 30 + 'px';
        }
        else if (index % 4 === 1){
            left = width/2 + (6 * index) - 30 + 'px';
        }
        else if (index % 4 === 2){
            mtop = height/2 - (6 * index) + 20 + 'px'; 
        }
        else{
            mtop = height/2 + (6 * index) - 20 + 'px';
        }

        const newElement = $('<div>', {"id" : "circle", "class": "circle", "css": {
                                                                            'min-height': size + 'px',
                                                                            'min-width': size + 'px',
                                                                            'background-color' : color,
                                                                            'top': mtop,
                                                                            'left': left,
                                        }})
                                        .on("click", clickHandler)
                                        .on('mousemove', mousemoveHandler)
                                        .on('mouseout', mouseoutHandler);

        return newElement;

    }

    function start(){

        const total = parseInt($('#numCirc').val());
        let elements = [];
        for(let i = 0; i<total; i++){
            elements.push(drawCircle(i));
        }

        $('#main').append(elements);

        const rate = $('#grwRate').val();

        timer = setInterval(() => {
            const growth = parseInt($('#grwAmt').val());
            const size = parseInt($('div').find('.circle').css('height'));

            $('div').find('.circle')
                    .css({
                        'min-height': size + growth + 'px',
                        'min-width': size + growth + 'px',
                    });
        }, rate);
    }


    function clickHandler(){
        $(this).remove();
    }

    function mousemoveHandler(e){
        $(this).css('opacity', 0);
    }

    function mouseoutHandler(){
        $(this).css('opacity',1);
     }

});