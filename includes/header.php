<header>
  <div class="bg-umkc-blue stripes header">
    <h1 class="site-title"><a class="text-white" href="/">University of Missouri - Kansas City</a></h1>
    <nav class="header__nav" aria-label="header__nav">
      <ul class="">
        <?php foreach (array(
          [ "href" => "https://www.umkc.edu/admissions/apply/index.html","title" => "Apply"],
          [ "href" => "https://www.umkc.edu/admissions/get-info.html", "title" => "Get Info"],
          [ "href" => "https://securelb.imodules.com/s/1236/16/index-sub-blank.aspx?sid=1236&amp;gid=1&amp;pgid=2819&amp;cid=5282&amp;appealcode=GOONLINE", "title" => "Give"],
          [ "href" => "", "title" => "|"],
          [ "href" => "current-students/index.html", "title" => "Current Students"],
          [ "href" => "faculty/index.html", "title" => "Faculty"],
          [ "href" => "staff/index.html", "title" => "Staff"],
          [ "href" => "families/index.html", "title" => "Families"]
        ) as $link) : ?>
          <li><a href="<?link['href'];?>"><?= $link['title']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </nav>
  </div>
  <div class="bg-umkc-blue header header--secondary">
    <div class="branding">
      <a href="/">
        <svg class="logo" aria-label="University of Missouri. Kansas City." role="img"><use xlink:href="#umkc"></use></svg>
      </a>
    </div>
  </div>
</header>
