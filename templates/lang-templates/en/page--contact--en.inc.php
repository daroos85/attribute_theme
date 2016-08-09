<section id="content">


  <div class="container-fluid">
    <div class="row">
      <div class="header">
        <div class="services-claimBig">
          GET IN TOUCH WITH US
        </div>
<!--        <div class="services-claimSmall">-->
<!--          przygotujemy dla Ciebie korzystną ofertę-->
<!--        </div>-->

        <!--          <div class="skip-to-content">-->
        <!--            <a><img src="/sites/all/themes/attribute_v1/images/services/skip-to-content.png" alt="skip to content"></a>-->
        <!--          </div>-->
      </div>
    </div>
  </div>


  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 contactPage-contactAddress">
        <div class="contact-contactTextLine"></div>
        <div class="contact-email"><a href="mailto:hello@attribute.pl">hello@attribute.pl</a></div>
        <div class="contact-address">
          <p>Białobrzeska 15</p>
          <p>02-370 Warszawa</p>
          <p>NIP: 529-175-04-40</p>
          <p class="contact-address-tel"><a href="tel:+48602109828">+48 602 109 828</a></p>
        </div>
      </div>

      <div class="col-xs-5 col-xs-offset-1">
        <div class="contactForm-line"></div>
        <?php print render($page['contact_form']); ?>
      </div>
    </div>
  </div>








  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <?php print $messages; ?>



        <!--          --><?php //dpm($page); ?>
      </div>
    </div>
  </div>
</section>