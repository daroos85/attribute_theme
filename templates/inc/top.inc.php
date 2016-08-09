<?php
if ($language->language == 'pl'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/pl/top--pl.inc.php';

elseif ($language->language == 'en'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/en/top--en.inc.php';

endif;
?>
