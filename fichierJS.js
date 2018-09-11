$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $("#s2 .carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $("#s2 .carousel-item")
              .eq(i)
              .appendTo("#s2 .carousel-inner");
          } else {
            $("#s2 .carousel-item")
              .eq(0)
              .appendTo($(this).find("#s2 .carousel-inner"));
          }
        }
      }
    });
  });
  