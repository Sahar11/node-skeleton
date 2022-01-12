
$(document).ready(function() {

$(".sendMessage").click(function () {
  $.post("/sendMessage");
});
});
