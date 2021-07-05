<?php

namespace App\Customs;

trait Themes {

    private function themes() {

        $themes_path = base_path()."/resources/views/conduct/themes";

        $themes_files = scandir($themes_path);

        $themes = [];
        foreach ($themes_files as $theme_file) {
            if ( ($theme_file==".") || ($theme_file=="..") ) continue;
            $exp = explode(".",$theme_file);
            $themes[] = ["name"=>ucwords($exp[0]),"file"=>$exp[0]];
        }
        
        return $themes;

    }

}