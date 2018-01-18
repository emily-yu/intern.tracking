let company_cards = document.getElementsByClassName('company-card')

// inject ui
for (let card of company_cards) {
	const properties = application_status(card.getElementsByTagName('h3')[0].innerHTML)
	card.parentNode.outerHTML += "<div class = 'default_button' style = '" + default_button_css + properties.css + "'>\
					   					<a style = '" + default_button_text_css + "'>" + properties.text + "</a>\
					   			  </div>"
}

// event listeners because chrome extensions don't allow inline js
for (let button of document.getElementsByClassName('default_button')) {
	button.addEventListener('click', function(event) {
		const default_value = application_status(event.target.getElementsByTagName('a')[0].innerHTML).text
		const parent = event.target.parentNode
		event.target.outerHTML = "<input style = '" + default_input_css + "' type = 'text' placeholder = '" + default_value + "'>"
		parent.getElementsByTagName('input')[0].addEventListener('keypress', function(event) {
			input_keypress(event)
		})
	})
}