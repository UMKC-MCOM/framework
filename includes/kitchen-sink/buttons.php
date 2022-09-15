<div class="content-row">
  <h2>Button Classes</h2>
  <p>Buttons are designed with a number of available variants that are listed below. Buttons are setup to be <code>inline-block</code> by default. If a button needs to take up the full width of a container and be centered; use the <code>button--block</code> class. Large buttons are also available
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <div class="" style="">
      <h3>Solid Colors:</h3>
      <?php
        $colors = ["white", "black", "umkc-blue", "umkc-dark-blue", "umkc-light-blue", "umkc-yellow"];
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="https://google.com" class="button button--<?= $color; ?>">.button.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>

    <div class="" style="">
      <h3>Outlines Colors:</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--outline button--<?= $color; ?>">.button.button--outline.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Solid Arrows:</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--<?= $color; ?> button--arrow">.button.button--arrow.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Outline Arrows:</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--outline button--<?= $color; ?> button--arrow">.button..button--outline.button--arrow.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Block Buttons:</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--outline button--<?= $color; ?> button--block">.button.button--block.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Large Buttons:</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button button--<?= $color; ?> button--lg">.button.button--lg.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Large Buttons (Outline):</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--outline button--<?= $color; ?> button--lg">.button.button--lg.button--outline.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Large Buttons (Arrow):</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--arrow button--<?= $color; ?> button--lg">.button.button--arrow.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
    <div class="" style="">
      <h3>Large Buttons (Outline Arrow):</h3>
      <?php
        foreach( $colors as $color ) :
      ?>
        <p <?= ( $color == "white" ? " style='background: black;'" : '') ?>><a href="#" class="button button--arrow button--outline button--<?= $color; ?> button--lg">.button.button--arrow.button--<?= $color; ?></a></p>
      <?php endforeach; ?>
    </div>
  </div>
</div>
