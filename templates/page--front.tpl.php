<?php
  /**
   * @file
   * Main page template.
   */
?>

<?php
  include "inc/top.inc.php";
   print $messages;
  // dpm($page);
?>

<?php
if ($language->language == 'pl'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/pl/page--front--pl.inc.php';

elseif ($language->language == 'en'):

  include drupal_get_path('theme',$GLOBALS['theme']) . '/templates/lang-templates/en/page--front--en.inc.php';

endif;
?>



<?php
  include 'inc/footer.inc.php';
?>
