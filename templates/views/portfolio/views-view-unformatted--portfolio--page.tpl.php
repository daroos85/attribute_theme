<?php

//  dpm($view);

  /**
   * @file
   * Default simple view template to display a list of rows.
   *
   * @ingroup views_templates
   */
?>


<?php

  $elements_count = sizeof($view->result);

  for ($i = 0; $i < $elements_count; $i++) {
//    dpm($view->result[$i]);

    $item_number = $i + 1;

//    echo $item_number;


    $title = $view->result[$i]->node_title;

    $category = '';
    $j = 0;

    foreach ($view->result[$i]->field_field_kategoria as $cat) {
      if ($j == 0) {
        $category .= $cat['rendered']['#markup'];
      } else {
        $category .= ', ' . $cat['rendered']['#markup'];
      }

      $j++;
    }


    $description = $view->result[$i]->field_field_opis[0]['rendered']['#markup'];


    $image = file_create_url($view->result[$i]->field_field_zdjecie_glowne[0]['rendered']['#item']['uri']);


    global $language;



    $path_alias = drupal_get_path_alias('node/' . $view->result[$i]->nid);


    if ($item_number % 8 == 0) {
      // co ósmy
      every_eigth($title, $category, $description, $image, $path_alias);
    } else if ($item_number % 4 == 0) {
      // co czwarty
      every_fourth($title, $category, $description, $image, $path_alias);
    } else if ($item_number % 2 == 0) {
      // co drugi
      every_second($title, $category, $description, $image, $path_alias);
    } else {
      // nieparzyste
      every_odd($title, $category, $description, $image, $path_alias);
    }

  }


  function every_eigth($title, $category, $description, $image, $path_alias) {

    global $language;

    echo "
      <div class='portfolio-item every-eight'>
      <div class='col-xs-12 col-md-7 col-md-push-5 col-xmd-7 image-outer'>
        <div class='image'><img src='{$image}' alt=''></div>
      </div>
      <div class='col-xs-10 col-xs-offset-1 col-md-4 col-md-pull-7 col-xmd-4 col-xmd-pull-7'>
        <div class='category'>{$category}</div>
        <div class='title'><a href='/{$language->language}/{$path_alias}'>{$title}</a></div>
        <div class='description'>{$description}</div>
        <div class='path'><a href='/{$language->language}/{$path_alias}'>" . t('See the project') . "</a></div>
      </div>
      </div>
    ";
  }

  function every_fourth($title, $category, $description, $image, $path_alias) {

    global $language;

    echo "
      <div class='portfolio-item every-fourth'>
      <div class='col-xs-12 col-md-7 col-md-push-5 col-xmd-7 image-outer'>
        <div class='image'><img src='{$image}' alt=''></div>
      </div>
      <div class='col-xs-10 col-xs-offset-1 col-md-4 col-md-pull-7 col-xmd-4 col-xmd-pull-7'>
        <div class='category'>{$category}</div>
        <div class='title'><a href='/{$language->language}/{$path_alias}'>{$title}</a></div>
        <div class='description'>{$description}</div>
        <div class='path'><a href='/{$language->language}/{$path_alias}'>" . t('See the project') . "</a></div>
      </div>
      </div>
    ";
  }

  function every_second($title, $category, $description, $image, $path_alias) {

    global $language;

    echo "
      <div class='portfolio-item every-second'>
        <div class='col-xs-12 col-md-7 col-md-push-5 col-xmd-7 image-outer'>
          <div class='image'><img src='{$image}' alt=''></div>
        </div>
        <div class='col-xs-10 col-xs-offset-1 col-md-4 col-md-pull-7 col-xmd-4 col-xmd-pull-7'>
          <div class='category'>{$category}</div>
          <div class='title'><a href='/{$language->language}/{$path_alias}'>{$title}</a></div>
          <div class='description'>{$description}</div>
          <div class='path'><a href='/{$language->language}/{$path_alias}'>" . t('See the project') . "</a></div>
        </div>
      </div>
    ";
  }

  function every_odd($title, $category, $description, $image, $path_alias) {

    global $language;
    
    echo "
      <div class='portfolio-item every-odd'>
        <div class='col-xs-12 col-md-7 col-lg-7 image-outer'>
          <div class='image'><img src='{$image}' alt=''></div>
        </div>
        <div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-0 col-lg-4 text'>
          <div class='category'>{$category}</div>
          <div class='title'><a href='/{$language->language}/{$path_alias}'>{$title}</a></div>
          <div class='description'>{$description}</div>
          <div class='path'><a href='/{$language->language}/{$path_alias}'>" . t('See the project') . "</a></div>
        </div>
      </div>
    ";
  }
