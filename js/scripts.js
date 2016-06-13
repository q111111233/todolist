// BACK END //
function Todo(item){
  this.item = item;
}




// FRONT END //
$(function(){
  $("form#todo").submit(function(event){
    event.preventDefault();
    var toDoItem = $("#todo-item").val();

    var newTodo = new Todo(toDoItem);

    $("ul#todo-list").append("<li><span class='list'>" + newTodo.item + "</span></li>");

    $(".list").click(function(){
      $(this).remove();
    })
  })
})
