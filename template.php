<?php

function attribute_v1_preprocess_page(&$vars) {
  if (isset($vars['node']->type)) {
    $vars['theme_hook_suggestions'][] = 'page__node_type__' . $vars['node']->type;
  }

//  dpm($vars['theme_hook_suggestions']);
}