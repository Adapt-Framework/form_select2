<?php

namespace adapt\forms\select2{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view_field_select2 extends view{
        
        public function __construct($form_data, $data_type, $user_data){
            parent::__construct($form_data, $data_type, $user_data);
        }
        
    }

}

?>