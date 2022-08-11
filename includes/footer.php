<footer class="footer">
  <div class="hero-img footer__top">
    <nav class="footer__nav footer__nav--buttons" aria-label="Actionable links">
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "Apply", "linkClass" => "button button--umkc-dark-blue"],
          [ "href" => "#", "title" => "Visit", "linkClass" => "button button--umkc-dark-blue"],
          [ "href" => "#", "title" => "Get Info", "linkClass" => "button button--umkc-dark-blue"]
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>" class="<?= $link['linkClass']; ?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
  </div>
  <div class="bg-umkc-dark-blue footer__mid">
    <div class="footer__title">
      <h2>University of Missouri-Kansas City</h2>
    </div>
    <nav class="footer__nav footer__nav--social" aria-label="Social Media Links">
      <ul class="nav--inline social">
        <?php foreach (array(
          [ "href" => "#", "title" => "<svg class=\"social__icon\"> <use xlink:href=\"#facebook\"></use> </svg>"],
          [ "href" => "#", "title" => "<svg class=\"social__icon\"> <use xlink:href=\"#twitter\"></use> </svg>"],
          [ "href" => "#", "title" => "<svg class=\"social__icon\"> <use xlink:href=\"#instagram\"></use> </svg>"],
          [ "href" => "#", "title" => "<svg class=\"social__icon\"> <use xlink:href=\"#youtube\"></use> </svg>"],
          [ "href" => "#", "title" => "<svg class=\"social__icon\"> <use xlink:href=\"#linkedin\"></use> </svg>"]
        ) as $link) : ?>
          <li><a class="social__link" href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>

    <div class="footer__info">
      <p class="footer__tel footer__nav--bold"><a href="tel:555-555-5555">555-555-5555</a></p>
      <p class="footer__address">
        Anytown Campus<br />
        5555 Anyway Drive<br />
        Kansas City, MO 64110
      </p>
    </div>
    <div class="footer__info">
      <p class="footer__address">
        Anytown Campus<br />
        5555 Anyway Drive<br />
        Kansas City, MO 64110
      </p>
    </div>
    <nav class="footer__nav footer__nav--separator" aria-labelledby="#localizedLinks">
      <h2 class="footer__nav--title" id="localizedLinks">University Services</h2>
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "University Leadership"],
          [ "href" => "#", "title" => "Schools and Departments"],
          [ "href" => "#", "title" => "Disability Services"],
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
    <nav class="footer__nav footer__nav--bold" aria-label="Actionable links">
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "Athletics"],
          [ "href" => "#", "title" => "UMKC News"],
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
  </div>
  <div class="bg-umkc-blue footer__bottom">
    <div class="logo">
      <a href="/" class="logo--link">
        <svg class="logo--image" aria-label="University of Missouri. Kansas City." role="img"><use xlink:href="#umkc"></use></svg>
      </a>
    </div>
    <nav class="footer__nav footer__nav--separator" aria-label="Actionable links">
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "Location and Maps"],
          [ "href" => "#", "title" => "Campus Calendar"],
          [ "href" => "#", "title" => "A-Z Index"],
          [ "href" => "#", "title" => "Jobs"],
          [ "href" => "#", "title" => "Directory"]
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>

    <nav class="footer__nav footer__nav--separator" aria-label="Actionable links">
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "Diversity and Inclusion"],
          [ "href" => "#", "title" => "Libraries"],
          [ "href" => "#", "title" => "Help Central"],
          [ "href" => "#", "title" => "Consumer Information"],
          [ "href" => "#", "title" => "Accreditation"]
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>

    <nav class="footer__nav footer__nav--bold" aria-label="Actionable links">
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "Webmail"],
          [ "href" => "#", "title" => "Pathway"],
          [ "href" => "#", "title" => "Canvas"],
          [ "href" => "#", "title" => "UMKC Connect"],
          [ "href" => "#", "title" => "Give"]
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
  </div>
  <div class="bg-umkc-blue footer__curator">
    <nav aria-label="Footer Links">
      <ul class="nav">
        <?php foreach (array(
          [ "href" => "#","title" => "&copy; " . date('Y') . " Curators of the University of Missouri"],
          [ "href" => "#", "title" => "Disability Resources"],
          [ "href" => "#", "title" => "DMCA Policy"],
          [ "href" => "#", "title" => "Issues with this website"]
        ) as $link) : ?>
          <li><a href="<?= $link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
    <p>UMKC is an equal opportunity/access/affirmative action/pro-disability and veteran employer and does not discriminate on the basis of sex in our education programs or activities, pursuant to Title IX and 34 CFR Part 106. For more information, visit our <a href="nondiscrimination.html">UMKC Statement of Nondiscrimination</a>.</p>
  </div>
</footer>
