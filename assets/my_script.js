// Projects gallery js
/* script source: https://codepen.io/webcane/pen/lHGJf?editors=0010 */

$(document).ready(function() {
        
   /* activate the carousel */
   $("#modal-carousel").carousel({interval:false});

   /* change modal title when slide changes */
   $("#modal-carousel").on("slid.bs.carousel", function () {
        $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));
   });

   /* change modal decription when slide changes */
   $("#modal-carousel").on("slid.bs.carousel", function () {
        $(".modal-desc")
        .html($(this)
        .find(".active img")
        .attr("desc"));
   });

   /* when clicking a thumbnail */
   $(".row .overlay .text").click(function(){
    var content = $(".carousel-inner");
    var title = $(".modal-title");
    var desc = $(".modal-desc");

    content.empty();  
    title.empty();
    desc.empty();
  
  	var id = this.id;  
    var repo = $("#img-repo .item");
    var repoCopy = repo.filter("#" + id).clone();
    var active = repoCopy.first();
    console.log(id + "\n" + "\n" + repo + "\n" + repoCopy + "\n" + active);


    active.addClass("active");
    title.html(active.find("img").attr("title"));
    desc.html(active.find("img").attr("description"));
  	content.append(repoCopy);

    // show the modal
  	$("#modal-gallery").modal("show");
  });

});
