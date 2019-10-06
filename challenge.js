var i =-1;
var j = 0;
var interval = setInterval( increment, 1000);
function increment(){
    i++;
    document.querySelector('h1#counter').textContent = i;
    j = 0;
}
increment();

document.getElementById("minus").addEventListener("click", function(){
  i--;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("plus").addEventListener("click", function(){
  i++;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("heart").addEventListener("click", function(){
  j++;
  var li = document.createElement("li");
  var node = document.createTextNode(i + " has been liked " + j + " time(s).")
  var likes = document.querySelector('.likes')
  var lastLike = document.querySelector('.likes').lastChild
  li.appendChild(node);
  if(j>1){
   lastLike.replaceWith(li)
  } else {
    likes.appendChild(li);
  }
});

document.getElementById("pause").addEventListener("click", function(){
  if(document.querySelector('#pause').innerText == "pause") {
    clearInterval(interval)
    document.querySelector('#pause').innerText = "resume"
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  } else {
    interval = setInterval( increment, 1000);
    document.querySelector('#pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  }
});

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  var comment = document.querySelector('input#comment-input').value
  var commentsList = document.querySelector('.comments')
  var p = document.createElement("p");
  var node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});
