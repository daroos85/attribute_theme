<div class="projectDescInPortfolio">

<!--  <div class="square-desc">-->
<!--  </div>-->

<!--  <div class="project-desc">-->

<?php
  // dpm($node);

  $kategorie_string = '';

  for ($i = 0; $i < sizeof($node->field_kategoria['und']); $i++) {

    $taxonomy = taxonomy_term_load($node->field_kategoria['und'][$i]['tid']);

    // dpm($taxonomy);

    if ($i == sizeof($node->field_kategoria['und']) - 1) {
      $kategorie_string .= $taxonomy->name;
    } else {
      $kategorie_string .= $taxonomy->name . ', ';
    }


  }

?>

    <div class="categories">
      <?php echo $kategorie_string; ?>
    </div>

    <div class="title">
      <?php echo $node->title; ?>
    </div>

    <div class="desc">
      <?php echo $node->field_opis['und'][0]['safe_value']; ?>
    </div>

    <div class="tech">
      <?php echo $node->field_wykorzystane_technologie['und'][0]['safe_value']; ?>
    </div>
<!--  </div>-->

</div>
