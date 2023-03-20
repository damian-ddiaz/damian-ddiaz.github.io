$("#carousel").on("mouseenter",function() {
    $(this).carousel('cycle');
  }).on("mouseleave", function() {
    $(this).carousel('pause');
  });