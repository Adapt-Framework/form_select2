(function ($) {

    $(document).ready(
            function () {
                /*
                 * We need to attach events and config to the datetime pickers, the problem
                 * being is that they may not be on the page when the page loads, so...
                 * to get around this we can monitor events from a higher point
                 * and check for focus events occuring and trigger the configuration
                 * and attach the events if we haven't already done so.
                 */

                var elem = document.getElementsByTagName("body")[0];
                elem.addEventListener('build', function () {

                    /**
                     * Check for max length on multiple select boxes
                     * Max length refers to max tags
                     */
                    $(".field-multiple-select-boxes").find("select").each(function() {
                        if($(this).attr('data-max-length') !== undefined) {
                            $(this).select2({
                                maximumSelectionLength: $(this).attr('data-max-length')
                            });
                        } else {
                            $(this).select2();
                        }
                    });


                    $('.field-single-select-boxes').find("select").select2();

                    $('.field-tagging-support').find("select").select2({
                            tags: true
                        });

                }, false);

                function testFoo() {

                    /*
                     * Add the pickers
                     */
                    $('.view.field-datetime-picker select').each(
                            function () {
                                $this.datetimepicker({
                                    format: pattern
                                });

                            }
                    );

                    $('.view.field-time-picker input').each(
                            function () {
                                var $this = $(this);
                                var pattern = '';

                                if ($this.attr('data-formatter') == 'locales_time') {
                                    pattern = $('meta.setting[name="locales.default_time_pattern"]').attr('content');
                                } else if ($this.attr('data-datetime-format') != '') {
                                    pattern = $this.attr('data-datetime-format');
                                }

                                if (pattern != '') {
                                    pattern = convert_date_format_to_moment_format(pattern);
                                }

                                $this.select2();

                            }
                    );

                    $('.view.field-date-picker input').each(
                            function () {
                                var $this = $(this);
                                var pattern = '';

                                if ($this.attr('data-formatter') == 'locales_date') {
                                    pattern = $('meta.setting[name="locales.default_date_pattern"]').attr('content');
                                } else if ($this.attr('data-datetime-format') != '') {
                                    pattern = $this.attr('data-datetime-format');
                                }

                                if (pattern != '') {
                                    pattern = convert_date_format_to_moment_format(pattern);
                                }

                                $this.datetimepicker({
                                    format: pattern,
                                    locale: 'en-gb'
                                });

                            }
                    );

                }
            }
    );

})(jQuery);
