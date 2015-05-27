(function($) {
    "use strict";

    function countCharactersLeft() {
        var $input = $(this);
        var counting = setTimeout(function() {
            if (counting) clearTimeout(counting);
            var charCountLabelTarget = $input.data('characount-label-target');
            var limit = parseInt( $input.attr('maxlength') );
            var charCount = $input.val().length;

            $(charCountLabelTarget).text(limit-charCount);
        }, 25);
    }

    $.fn.characount = function characount() {
        
        $(this).on({
            paste: countCharactersLeft,
            blur: countCharactersLeft,
            keydown: countCharactersLeft
        });

        // execute the count immediately
        $(this).each(countCharactersLeft);
    };
})(jQuery);
