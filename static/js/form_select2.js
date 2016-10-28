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


                $('body').on(
                        'focus',
                        '.view.field-select2 select,' +
                        '.view.field-single-select-boxes select,' +
                        '.view.field-multiple-select-boxes select,' +
                        '.view.field-placeholders select,' +
                        '.view.field-array-data select,' +
                        '.view.field-tagging-support select,' +
                        '.view.field-automatic-tokenization select',
                        function (e) {
                            var $input = $(this);
                            if ($input.attr('data-configured') != 'yes') {
                                var $field = $input.parents('.view.field');
                                var formatter = $input.attr('data-formatter');

                                $input.attr('data-configured', 'yes');

                                if ($field.hasClass('field-select2')) {
                                    $input.select2();
                                } else if ($field.hasClass('field-single-select-boxes')) {
                                    $input.select2();
                                } else if ($field.hasClass('field-multiple-select-boxes')) {
                                    // select tag needs to have multiple attribute;
                                    $input.select2();
                                } else if ($field.hasClass('field-placeholders')) {
                                    // select tag needs to have multiple attribute;
                                    $input.select2({
                                        placeholder: "Select a state",
                                        allowClear: true
                                    });
                                } else if ($field.hasClass('field-array-data')) {
                                    // example data var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
                                    $input.select2({
                                        data: data

                                    });
                                } else if ($field.hasClass('field-placeholders')) {
                                    // select tag needs to have multiple attribute;
                                    $input.select2({
                                        placeholder: "Select a state",
                                        allowClear: true
                                    });
                                } else if ($field.hasClass('field-tagging-support')) {
                                    console.log('doingsomething');
                                    $input.select2({
                                        tags: true
                                    });
                                } else {
                                    $input.datetimepicker({
                                        format: convert_date_format_to_moment_format(formatter),
                                        locale: 'en-gb'
                                    });
                                }
                            }
                        }
                );


                function configure_datetime_picker(picker) {

                }



                //window.testFoo = testFoo;
                function testFoo() {
                    console.log('we have been called');

                    /*
                     * What format should our dates and times be?
                     */


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