<?php

namespace adapt\forms\select2{
    
    /* Prevent Direct Access */
    defined('ADAPT_STARTED') or die;
    
    class bundle_form_select2 extends \adapt\bundle{
        
        public function __construct($data){
            parent::__construct('form_select2', $data);
        }
        
        public function boot(){
            if (parent::boot()){
                
                $this->dom->head->add(new html_script(array('type' => 'text/javascript', 'src' => "/adapt/form_select2/form_select2-{$this->version}/static/js/form_select2.js")));
                return true;
            }
            
            return false;
        }
        
    }
    
    
}

?>