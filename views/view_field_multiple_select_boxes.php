<?php

namespace adapt\forms\select2{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view_field_multiple_select_boxes extends view{
        
        public function __construct($form_data, $data_type, $user_data){
            parent::__construct($form_data, $data_type, $user_data);
            $this->find('select')->attr('multiple', 'multiple');
            
            $values = $user_data[$form_data['name']];
            
            foreach($values as $value){
                $this->find('option[value="' . $value . '"]')->attr('selected', 'selected');
            }

            $this->find('option')->first()->detach();
        }
        
    }

}
?>