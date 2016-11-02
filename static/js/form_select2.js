(function ($) {

    $(document).ready(
            function () {
                console.log('Pre woop woop');
                /*
                 * We need to attach events and config to the datetime pickers, the problem
                 * being is that they may not be on the page when the page loads, so...
                 * to get around this we can monitor events from a higher point
                 * and check for focus events occuring and trigger the configuration
                 * and attach the events if we haven't already done so.
                 */

                var elem = document.getElementsByTagName("body")[0];
                elem.addEventListener('build', function () {
                    console.log("woop woop");

                    $(".field-multiple-select-boxes").find("select").select2();

                    $('.field-single-select-boxes').find("select").select2();

                    $('.field-tagging-support').find("select").select2({
                            tags: true
                        });

//                    if ($field.hasClass('field-select2')) {
//
//                    } else if ($field.hasClass('field-single-select-boxes')) {
//                        $input.select2();
////                    } else if ($('body').find('.field-single-select-boxes')) {
////                        // select tag needs to have multiple attribute;
//////                                    $input.attr("multiple","multiple");
////                        console.log("multiple select box");
////                       
//                    } else if ($field.hasClass('field-placeholders')) {
//                        // select tag needs to have multiple attribute;
//                        $input.select2({
//                            placeholder: "Select a state",
//                            allowClear: true
//                        });
//                    } else if ($field.hasClass('field-array-data')) {
//                        // example data var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
//                        $input.select2({
//                            data: data
//
//                        });
//                    } else if ($field.hasClass('field-placeholders')) {
//                        // select tag needs to have multiple attribute;
//                        $input.select2({
//                            placeholder: "Select a state",
//                            allowClear: true
//                        });
//                    } else if ($field.hasClass('field-tagging-support')) {
//
//                        $input.select2({
//                            tags: true
//                        });
//                    }

                }, false);


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