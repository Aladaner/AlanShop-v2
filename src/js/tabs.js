function setupTabs (){
  document.querySelectorAll('.tab__btn').forEach(button=>{
    button.addEventListener('click',()=>{
      
      
      const navigations = button.parentElement;
      const tabs = navigations.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabActivate = tabs.querySelector(`.tab__item[data-tab="${tabNumber}"]`)
      
      navigations.querySelectorAll('.tab__btn').forEach(button=>{
        button.classList.remove('tab__btn-active')
      })
       tabs.querySelectorAll('.tab__item').forEach(tab=>{
        tab.classList.remove('tab__item-active')
      })
      button.classList.add('tab__btn-active')
      tabActivate.classList.add('tab__item-active')
    })
  })
}

document.addEventListener('DOMContentLoaded',()=>{
  setupTabs();
})