<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
	
    // Use the same in all environments
    '*' => array(
        'omitScriptNameInUrls' => true,
        'usePathInfo' => false,﻿
    ),

    // Dev site config
    '.dev' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'siteUrl'        => 'http://premierlawncarema.dev/',
            'fileSystemPath' => '/Applications/MAMP/htdocs/premierlawncarema.com/images/',
        ),
    ),

    // Staging site config
    'premierlawncarema-staging.studiochakra.com' => array(
        'devMode' => true,
        'cooldownDuration' => 0,

        'environmentVariables' => array(
            'siteUrl'        => 'http://premierlawncarema-staging.studiochakra.com/',
            'fileSystemPath' => '/home/ryanbeli/studiochakra-staging/premierlawncarema/images/',
        ),
    ),

    // LIVE site config
    'premierlawncarema.com' => array(
        'cooldownDuration' => 0,

        'environmentVariables' => array(
            'siteUrl'        => 'http://premierlawncarema.com/',
            'fileSystemPath' => '/home/ryanbeli/public_html/premierlawncarema/images/',
        ),
    ),

);