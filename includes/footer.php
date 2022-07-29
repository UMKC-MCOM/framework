<footer class="footer">
  <div class="footer--top hero-img">
    <umkc-navigation
      kClass="footer__nav footer__nav--buttons"
      links='[
        {"href":"#", "title": "Apply", "linkClass" : "button button--umkc-dark-blue" },
        {"href":"#", "title": "Visit", "linkClass" : "button button--umkc-dark-blue" },
        {"href":"#", "title": "Get Info", "linkClass": "button button--umkc-dark-blue" }
      ]'
    ></umkc-navigation>
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
    <umkc-navigation
      kClass="footer__nav footer__nav--separator"
      label="Campus Resources"
      links='[
        { "href" : "#", "title" : "Location and Maps" },
        { "href" : "#", "title" : "Campus Calendar" },
        { "href" : "#", "title" : "A-Z Index" },
        { "href" : "#", "title" : "Jobs" },
        { "href" : "#", "title" : "Directory" }
      ]''>
    </umkc-navigation>

    <umkc-navigation
      kClass="footer__nav footer__nav--separator"
      label="Important Offices"
      links='[
        { "href" : "#", "title" : "Diversity and Inclusion" },
        { "href" : "#", "title" : "Libraries" },
        { "href" : "#", "title" : "Help Central" },
        { "href" : "#", "title" : "Consumer Information" },
        { "href" : "#", "title" : "Accreditation" }
      ]''>
    </umkc-navigation>

    <umkc-navigation
      kClass="footer__nav footer__nav--bold"
      label="Quick Links"
      links='[
        { "href" : "#", "title" : "Webmail" },
        { "href" : "#", "title" : "Pathway" },
        { "href" : "#", "title" : "Canvas" },
        { "href" : "#", "title" : "UMKC Connect" },
        { "href" : "https://securelb.imodules.com/s/1236/16/index-sub-blank.aspx?sid=1236&amp;gid=1&amp;pgid=2819&amp;cid=5282&amp;appealcode=GOONLINE", "title" : "Give" }
      ]''>
    </umkc-navigation>
  </div>
  <div class="footer--curator">
    <umkc-navigation
      label="Footer Links"
      links='[
        { "href" : "#", "title" : "&copy; <?= date('Y'); ?> Curators of the University of Missouri" },
        { "href" : "#", "title" : "Disability Resources" },
        { "href" : "#", "title" : "DMCA Policy" },
        { "href" : "#", "title" : "Issues with this website" }
      ]'></umkc-navigation>

      <p class="footer__curator">UMKC is an equal opportunity/access/affirmative action/pro-disability and veteran employer and does not discriminate on the basis of sex in our education programs or activities, pursuant to Title IX and 34 CFR Part 106. For more information, visit our <a href="nondiscrimination.html">UMKC Statement of Nondiscrimination</a>.</p>
  </div>
</footer>
