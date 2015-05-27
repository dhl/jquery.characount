(function($) {
    "use strict";

    function countCharactersLeft() {
        var counting = setTimeout(function() {
            if (counting) clearTimeout(counting);

            var $input = $(this);
            var charCountLabelTarget = $input.data('characount-label-target');
            var limit = parseInt( $input.attr('maxlength') );
            var charCount = $input.val().length;

            $(charCountLabelTarget).text(limit-charCount);
        }.bind(this), 25);
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
