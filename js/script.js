function printList(){

    for (let i = 0; i < 10; i++){

        getMail();
    }
}

function getMail(){

    $.ajax({

        url: 'https://flynn.boolean.careers/exercises/api/random/mail',

        method: 'GET',
        
        success: function(data){

            // console.log(data);

            const target = $("#target");            
            target.append(`<li>${data.response}</li>`);
        },

        error: function(){

        }
    })
}

function init(){

    printList();
};

document.addEventListener('DOMContentLoaded', init)