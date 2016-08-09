<?php
  include "inc/top.inc.php";

//    dpm($page);
?>

<section id="content">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <?php print render($title_prefix); ?>
        <!--        --><?php //if (!empty($title)): ?>
        <!--          <h1 class="page-header">--><?php //print $title; ?><!--</h1>-->
        <!--        --><?php //endif; ?>
        <?php print render($title_suffix); ?>
        <?php print $messages; ?>

        <?php
          //    dpm($page);
        ?>

        <?php if (!empty($tabs)): ?>
          <?php print render($tabs); ?>
        <?php endif; ?>
        <!--        --><?php //if (!empty($page['help'])): ?>
        <!--          --><?php //print render($page['help']); ?>
        <!--        --><?php //endif; ?>
        <?php if (!empty($action_links)): ?>
          <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>
        <?php print render($page['content']); ?>

        <?php dpm($page); ?>
      </div>
    </div>
  </div>
</section>


<?php
  include 'inc/footer.inc.php';
?>