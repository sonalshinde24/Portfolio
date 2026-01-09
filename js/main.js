function filterProjects(type){
  const cards=document.querySelectorAll('.project');
  cards.forEach(card=>{
    card.style.display =
      type==='all'||card.classList.contains(type)
      ? 'block':'none';
  });
}
