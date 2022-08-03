<footer class="footer">
  <div class="footer--top hero-img">
    <nav class="footer__nav footer__nav--buttons" aria-label="Actionable links">
      <ul class="">
        <?php foreach (array(
          [ "href" => "#","title" => "Apply", "linkClass" => "button button--umkc-dark-blue"],
          [ "href" => "#", "title" => "Visit", "linkClass" => "button button--umkc-dark-blue"],
          [ "href" => "#", "title" => "Get Info", "linkClass" => "button button--umkc-dark-blue"]
        ) as $link) : ?>
          <li><a href="<?link['href'];?>" class="<?= $link['linkClass']; ?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
  </div>
  <div class="footer--mid bg-umkc-dark-blue">
    <p>I am footer-mid</p>
  </div>
  <div class="bg-umkc-blue footer--bottom">
    <div class="branding">
      <a href="/">
        <svg class="logo" aria-label="University of Missouri. Kansas City." role="img"><use xlink:href="#umkc"></use></svg>
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
  <div class="footer--curator">
    <nav aria-label="Footer Links">
      <ul class="">
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
    <p class="footer__curator">UMKC is an equal opportunity/access/affirmative action/pro-disability and veteran employer and does not discriminate on the basis of sex in our education programs or activities, pursuant to Title IX and 34 CFR Part 106. For more information, visit our <a href="nondiscrimination.html">UMKC Statement of Nondiscrimination</a>.</p>
  </div>
</footer>
