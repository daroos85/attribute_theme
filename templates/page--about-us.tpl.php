<?php
  include "inc/top.inc.php";

  //  dpm($page);
?>


<?php
if ($language->language == 'pl'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/pl/page--about-us--pl.inc.php';

elseif ($language->language == 'en'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/en/page--about-us--en.inc.php';

endif;
?>


  


<?php
  include 'inc/footer.inc.php';
?>
