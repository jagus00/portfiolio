function showMoreDesign()
{
  let hiddenDesign = document.querySelector("#hiddenDesign");
  hiddenDesign.style.display = "flex";
  hiddenDesign.style.animation = "fadeInUp 1s both";
  document.querySelector("#moreDesign").style.animation = "fadeOutDown 1s both"
}
