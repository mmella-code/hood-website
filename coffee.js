const searchInput = document.getElementById('searchInput');
const coffeetypes = document.querySelectorAll('.coffee-type');

searchInput.addEventListener('keyup', function () { const searchText = this.value.toLowerCase();
coffeetypes.forEach(card => { const coffeeName = card.querySelector('h3').textContent.toLowerCase();
const coffeeDesc = card.querySelector('p').textContent.toLowerCase();
if (coffeeName.includes (searchText) || cofeeDesc.includes(searchText)
    { 
  card.classicList.remove('hidden'); 
} else {
  card.classList.add('hidden'); }
                            });
                                                  });
                                                   

                            
                            
                              
