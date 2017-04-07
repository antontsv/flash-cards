
$(document).ready(function () {

    if (cards != undefined) {
        for (i in cards) {
            colorIndex = (i % 6) + 1
            var cardNumber = parseInt(i) + 1
            $("#cards-container").find(".row").append(`
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="flash-card" id="card-`+ cardNumber +`">
                        <div class="card-header gcolor-`+ colorIndex + `">
                        </div>
                        <div class="card-description">
                            <p class="card-title">`+ cards[i].name + `</p>
                            <p>`+ cards[i].description + `</p>
                        </div>
                    </div>
                </div>
            `)
        }
    }

    $(".flash-card").click(function(){
        var cardNumber = this.id.split("-")[1];
        $(this).prepend(
        `<div class="card-overlay">
            <div class="overlay-shadow">
                <div class="overlay-text">#`+cardNumber+`</div>
             </div>
        </div>
        `).unbind( "click" );
        
    })

});
           
