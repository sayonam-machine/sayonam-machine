/*
	Dynamic Tab
*/


jQuery(function ($) {
   "use strict";
   
   $(window).on('load', function () {
      createTabs(tabData);
   });


   const tabData = [
            { id: 'Goldsmith_Machine', name: 'Goldsmith Machine', content: 'This is the Home tab content.' },
            { id: 'Jewellery_Making_Machine', name: 'Jewellery Making Machine', content: 'This is the Services tab content.' },
            { id: 'Hydraulic_Press_Brake_Machine', name: 'Hydraulic Press Brake Machine', content: 'This is the Contact tab content.' },
			{ id: 'Press_Brake', name: 'Press Brake', content: 'This is the Contact tab content.' },
			{ id: 'Goldsmith_Sheet_Rolling_Machine', name: 'Goldsmith Sheet Rolling Machine', content: 'This is the Contact tab content.' },
			{ id: 'Rolling_Mill', name: 'Rolling Mill', content: 'This is the Contact tab content.' },
			{ id: 'Roll_Press_Machine', name: 'Roll Press Machine', content: 'This is the Contact tab content.' },
			{ id: 'Rolling_Mill', name: 'Contact', content: 'This is the Contact tab content.' }
			{ id: 'Rolling_Mill', name: 'Contact', content: 'This is the Contact tab content.' }
			{ id: 'Rolling_Mill', name: 'Contact', content: 'This is the Contact tab content.' }
			{ id: 'Rolling_Mill', name: 'Contact', content: 'This is the Contact tab content.' }
			
        ];
		
	 function createTabs(data) {
		const tabsContainer = document.getElementById('ProductTab');
		const contentContainer = document.getElementById('ProductTab_content');

		// Create tab buttons and content dynamically
		data.forEach((tab, index) => {
			// Create tab button
			const tabButton = document.createElement('button');
			tabButton.className = 'tablinks';
			tabButton.innerText = tab.name;
			tabButton.onclick = function() { openTab(event, tab.id) };
			tabsContainer.appendChild(tabButton);
			
			
			// Create tab content
			const tabContent = document.createElement('div');
			tabContent.id = tab.id;
			tabContent.className = 'tabcontent';
			tabContent.innerHTML = `<h3>${tab.name}</h3><p>${tab.content}</p>`;
			contentContainer.appendChild(tabContent);
		});

		// Set the first tab as active by default
		openTab(data[0].id);
	}

	  
	function openTab(evt, cityName) {
	  var i, tabcontent, tablinks;
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("tablinks");
	  for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }
	  document.getElementById(cityName).style.display = "block";
	  evt.currentTarget.className += " active";
	  
	}

});
