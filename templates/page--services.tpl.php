<?php
include "inc/top.inc.php";


if ($language->language == 'pl'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/pl/page--services--pl.inc.php';

elseif ($language->language == 'en'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/en/page--services--en.inc.php';

endif;

include 'inc/footer.inc.php';
?>
