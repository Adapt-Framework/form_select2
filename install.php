<?php

/*
 * Prevent direct access
 */
defined('ADAPT_STARTED') or die;

/* Lets register the field type in forms */
$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_select2';
$field_type->name = 'select2';
$field_type->view = '\\extensions\\form_select2\\view_field_select2';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_select2';
$field_type->name = 'Multiple select boxes';
$field_type->view = '\\extensions\\form_select2\\view_field_multiple_select_boxes';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_select2';
$field_type->name = 'Tagging support';
$field_type->view = '\\extensions\\form_select2\\view_field_tagging_support';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_select2';
$field_type->name = 'Automatic tokenization';
$field_type->view = '\\extensions\\form_select2\\view_field_automatic_tokenization';
$field_type->save();

?>