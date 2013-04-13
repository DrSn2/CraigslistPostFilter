$(document).ready(function () {

    // $("span.pl").each(
    $("p.row").each(        

    function () {

        var headline = $(this).text().toLowerCase();
        
        // console.log($(this).text());

        matched = headline.match(/(ticket)/g);
        
        if( matched !== null ) {
            $(this).addClass('hidden');  
        }

    });
});