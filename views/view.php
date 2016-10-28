<?php

namespace adapt\forms\select2{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view extends \adapt\forms\view_field_select{
        
        public function __construct($form_data, $data_type, $user_data){
            parent::__construct($form_data, $data_type, $user_data);
            $this->add_class('form-select2');
        }
        
    }

}

?>