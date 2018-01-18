let company_cards = document.getElementsByClassName('company-card')

// card properties
const default_button_css = "border: 1px solid lightgrey;\
						    margin-top: 10px;\
						    background: white;"
const default_button_text_css = "border-bottom: none;"

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
		event.target.outerHTML = "<input style = 'margin-top: 10px; height: 38px; text-align: center;' type = 'text' placeholder = '" + default_value + "'>"
		parent.getElementsByTagName('input')[0].addEventListener('keypress', function(event) {
			input_keypress(event)
		})
	})
}

function input_keypress(event) {
	event.preventDefault()
	console.log(event.keyCode)
	switch(event.keyCode) {
		case 110:
			event.target.value = "N/A"
			break;
		case 115:
			event.target.value = "SENT"
			break;
		case 105:
			event.target.value = "INTERVIEWING"
			break;
		case 111:
			event.target.value = "OFFER"
			break;
		case 100:
			event.target.value = "DECLINED"
			break;
		case 13:
			const parent = event.target.parentNode

			let init = event.target.placeholder
			if (init != event.target.value && init != '') {
				init = event.target.value
				set(parent.getElementsByTagName('h3')[0].innerHTML, init.toLowerCase())
				const properties = application_status(parent.getElementsByTagName('h3')[0].innerHTML)
				event.target.outerHTML = "<div class = 'default_button' style = '" + default_button_css + properties.css + "'>\
					   					<a style = '" + default_button_text_css + "'>" + init + "</a>\
					   			  </div>"
			}
			else {
				event.target.outerHTML = "<div class = 'default_button' style = '" + default_button_css + "'>\
					   					<a style = '" + default_button_text_css + "'>" + init + "</a>\
					   			  </div>"
			}

			console.log(parent)
			parent.getElementsByClassName('default_button')[0].addEventListener('click', function(event) {
				const default_value = application_status(event.target.getElementsByTagName('a')[0].innerHTML).text
				const parent = event.target.parentNode
				event.target.outerHTML = "<input style = 'margin-top: 10px; height: 38px; text-align: center;' type = 'text' placeholder = '" + default_value + "'>"
				parent.getElementsByTagName('input')[0].addEventListener('keypress', function(event) {
					input_keypress(event)
				})
			})
			break;
	}
}

function set(key, value) {
	localStorage[key] = value
}

function get(key) {
	return localStorage[key]
}

function application_status(key) {
	switch(get(key)) {
		case undefined: 
			return {css  : 'color: red;',
					text : 'N/A'}
		case 'sent':
			return {css  : 'color: blue;',
					text : 'SENT'}
		case 'interviewing':
			return {css  : 'color: orange;',
					text : 'INTERVIEWING'}
		case 'offer':
			return {css  : 'color: green;',
					text : 'OFFER'}
		case 'declined':
			return {css  : 'color: red;',
					text : 'DECLINED'}
		default:
			return {css  : 'color: white;',
					text : 'N/A'}
	}
}