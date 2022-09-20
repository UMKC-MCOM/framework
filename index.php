<!DOCTYPE html>
<html lang="en">
  <?php include_once("includes/head.php"); ?>
	<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" />
	<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css">

  <body>
		<!-- Load SVGs first? -->
		<?php include_once("includes/svg-sprites.php"); ?>
		<?php include_once("includes/a11y-skip.php"); ?>
		<?php include_once("includes/header.php"); ?>

		<div id="content" class="main-content">
			<div class="hero">
				<div class="hero__content">
					<h1 class="hero__title">Health Equity Institute</h1>
					<p>The UMKC Conservatory is internationally recognized as a center for artistic excellence and innovation. Learn from the best.</p>
					<p><a href="#" class="button button--white button--outline button--arrow">Virtual Visit Options</a></p>
				</div>
			</div>

			<nav class="breadcrumbs stripes--dark">
				<ul class="nav nav--inline breadcrumbs__list">
					<li class="breadcrumbs__item">
						<a class="breadcrumbs__link" href="#">Home</a>
					</li>
					<li class="breadcrumbs__item">
						<a class="breadcrumbs__link" href="#">Thing</a>
					</li>
				</ul>
			</nav>

			<?php
			$with_image = true;
			include('includes/kitchen-sink/benefits-list.php');

			$with_image = false;
			include('includes/kitchen-sink/benefits-list.php');

			$with_image = true;
			include('includes/kitchen-sink/stats.php');

			$with_image = false;
			include('includes/kitchen-sink/stats.php');

			$with_image = true;
			$bg_color = "umkc-blue";
			$link_cta = true;
			include('includes/kitchen-sink/cards.php');

			$with_image = false;
			$bg_color = false;
			$link_cta = false;
			$link = true;
			include('includes/kitchen-sink/cards.php');

			$with_image = false;
			$bg_color = false;
			$link_cta = false;
			$link = false;
			include('includes/kitchen-sink/cards.php');

			$count = 1;
			include('includes/kitchen-sink/quotes.php');

			$count = 3;
			$footer_scripts = "";
			include('includes/kitchen-sink/quotes.php');

			## Buttons!
			include_once("includes/kitchen-sink/buttons.php");
		?>
		</div>
		<?php include_once("includes/footer.php"); ?>

		<script src="/assets/js/main.js"></script>
		<?php if ( $footer_scripts )
			echo $footer_scripts; ?>
  </body>
</html>
