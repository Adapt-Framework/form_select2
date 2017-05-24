<?php

namespace adapt\forms\select2{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view_field_multiple_select_boxes extends view{
        
        public function __construct($form_data, $data_type, $user_data){
            parent::__construct($form_data, $data_type, $user_data);
            $this->find('select')->attr('multiple', 'multiple');

            $values = $user_data[$form_data['name']];
            if(!is_array($values) && is_json($values)){
                $values = json_decode($values);
            }
            if(is_array($values)){
                foreach($values as $value){
                    $options = $this->find('option')->elements;
                    foreach($options as $option){
                        foreach($option->_children as $children){
                            if($children == $value){
                                $option->attr('selected', 'selected');
                            }    
                        }
                    }
                    $this->find('option[value="' . $value . '"]')->attr('selected', 'selected');
                }
            }
        }
        
    }

}
?>