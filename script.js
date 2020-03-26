var counter = 0

function next()
{
  counter++;
  if(counter == 1)
  {
    document.getElementById("q1").innerHTML="<p>11</p>";
    document.getElementById("q2").innerHTML="<p>22</p>";
    document.getElementById("q3").innerHTML="<p>33</p>";
  }
  if(counter == 2)
  {
    document.getElementById("q1").innerHTML="<p>111</p>";
    document.getElementById("q2").innerHTML="<p>222</p>";
    document.getElementById("q3").innerHTML="<p>333</p>";
  }
  if(counter>2) counter = 2;
  if(counter<0) counter = 0;
}

function previous()
{
  counter--;
  if(counter == 0)
  {
    document.getElementById("q1").innerHTML="<p>1</p>";
    document.getElementById("q2").innerHTML="<p>2</p>";
    document.getElementById("q3").innerHTML="<p>3</p>";
  }
  if(counter == 1)
  {
    document.getElementById("q1").innerHTML="<p>11</p>";
    document.getElementById("q2").innerHTML="<p>22</p>";
    document.getElementById("q3").innerHTML="<p>33</p>";
  }
  if(counter == 2)
  {
    document.getElementById("q1").innerHTML="<p>111</p>";
    document.getElementById("q2").innerHTML="<p>222</p>";
    document.getElementById("q3").innerHTML="<p>333</p>";
  }
  if(counter>2) counter = 2;
  if(counter<0) counter = 0;
}
