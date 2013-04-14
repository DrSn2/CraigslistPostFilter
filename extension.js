$(document).ready(function () {

    chrome.storage.sync.get('craigslistFilterKeywords', function(object) {
    
    keywords = object.craigslistFilterKeywords;
    if (keywords) 
    {
        
        $("p.row").each(        

            function () {

                var headline = $(this).text().toLowerCase();
                var regex = new RegExp("(" + keywords.replace(/\,\s?/g, '|') + ")",'g');
                
                matched = headline.match(regex);
                
                if( matched !== null ) {
                    $(this).addClass('hidden');  
                }

            });
        }

    });

});