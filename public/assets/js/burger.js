$(function(){
  $("#addBurgerbtn").on("click",function(){
    const newBurger = $("#createburger").val().trim();
    const body = {
      burger_name: newBurger,
      devoured:0
    }
    if(newBurger === ""){
      alert("Please enter a valid name for a burger");
      return;
    }
    $.ajax({
      url:"/api/burgers",
      method:"POST",
      data:body
    }).then(function(results){
      location.reload();
    })
  });
  
  $(".devoured").on("click",function(event){
    let id = $(event.target).data("id");
    // console.log(id);
    const devouredStatus = {
      devoured:1
    };
    $.ajax({
      url:"/api/burgers/" + id,
      method:"PUT",
      data:devouredStatus
    }).then(function(){
      console.log("burger devoured")
      location.reload();
    });
  });

  $(".deleteBurger").on("click",function(event){
    let id = $(event.target).data("id");
    $.ajax({
      url:"/api/burgers/" + id,
      method:"DELETE"
    }).then(location.reload())
  });

 
});