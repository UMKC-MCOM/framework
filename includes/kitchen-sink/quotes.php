<?php $count = !empty($count) ? $count : 3; ?>
<div class="content-row bg-umkc-gray <?= $count === 1 ? 'quote quote--single' : 'glide'; ?>">
<?php if ( $count >= 2 ) : ?>
  <div class="glide__track" data-glide-el="track">
    <div class="<?= $count !== 1 ? 'quote glide__slides' : ''; ?>">
<?php endif; ?>
    <?php for ( $i = 0; $i < $count; $i++ ) : ?>
      <div class="quote__item <?= $count > 1 ? 'glide__slide' : ''; ?>">
        <span class="quote__icon">&#8220;</span>
        <blockquote class="quote__blockquote">Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak. Bacon ipsum dolor amet meatball jowl kielbasa pork belly buffalo. Cow pastrami burgdoggen spare ribs strip steak.</blockquote>

        <img src="https://picsum.photos/seed/picsum/150/150" class="img--round" />

        <h3 class="quote__title">Full Name</h3>
        <p>Title or major</p>
      </div>
    <?php endfor; ?>
<?php if ( $count >= 2 ) : ?>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <?php for ( $i = 0; $i < $count; $i++) : ?>
        Things <?php echo $i; ?>
      <button class="glide__bullet" data-glide-dir="=<?= $i; ?>"></button>
      <?php endfor; ?>
    </div>
  </div>
  <?php $footer_scripts = <<<EOF
   <script src="/node_modules/@glidejs/glide/dist/glide.min.js"></script>
   <script>
     var glide = new Glide(".glide", {
       autoplay: false,
       dragThreshold: false,
       hoverpuase: true,
       perView: 3,
       swipeThreshold: false,
       type: "carousel",
       breakpoints: {
         900: {
           autoplay: 5000,
           dragThreshold: 120,
           perView: 1,
           remind: true,
           swipeThreshold: 80
         }
       }
     });
     glide.mount();
   </script>
   EOF; ?>
<?php endif; ?>
</div>
