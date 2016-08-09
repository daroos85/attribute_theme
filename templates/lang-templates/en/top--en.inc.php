<section id="sticky-top">
  <div class="progress-bar">
    <div class="loaded"></div>
    <div class="remaining"></div>
  </div>



  <div class="container">

    <div class="row">
      <div class="menu-left">
        <div class="logo">
          <a href="/"><img src="/<?php echo drupal_get_path('theme',$GLOBALS['theme']); ?>/images/logo-attribute.png" alt="Logo attribute"></a>
        </div>

        <div class="hamburger">
          <div class="expandMenu">
            EXPAND<br>MENU
          </div>
          <img src="/<?php echo drupal_get_path('theme',$GLOBALS['theme']); ?>/images/nalesnik.png" class="expandMenu-pancake">
        </div>
      </div>


      <div class="menu-right">
        <div class="hide-mobile">
          <div class="text-right">
            <div class="contact-top-front inline-block">
              <div class="phone">
                <a href="tel:+48602109828">+48 602 109 828</a>
              </div>
              <div class="mail">
                <a href="mailto:hello@attribute.pl">hello@attribute.pl</a>
              </div>
              <div class="lang-switch">
                <?php
                  print render($page['lang_switch']);
                ?>
              </div>
              <li class="hide-menu">hide menu</li>
            </div>
          </div>
        </div>


        <?php
          $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
          // echo $uri;
        ?>

        <div class="menu-top">
          <ul class="main-menu">
            <div class="ultraNarrow-hide hide-mobile"><li <?php if ($uri == '/' || $uri == '/en') { echo 'class="active"';} ?>><a href="/en">Start</a></li></div>
            <li <?php if ($uri == '/portfolio') { echo 'class="active"';} ?>><a href="/en/portfolio">Portfolio</a></li>
            <div class="ultraUltraNarrow-hide"><li <?php if ($uri == '/services') { echo 'class="active"';} ?>><a href="/en/services">Services</a></li></div>
            <div class="ultraNarrow-hide"><li <?php if ($uri == '/about-us') { echo 'class="active"';} ?>><a href="/en/about-us">About us</a></li></div>
            <li <?php if ($uri == '/contact') { echo 'class="active"';} ?>><a href="/en/contact">Contact</a></li>
            <li class="lang-switch-2 show-mobile">
              <?php
                print render($page['lang_switch']);
              ?>
            </li>
            <li class="hide-menu">hide menu</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
