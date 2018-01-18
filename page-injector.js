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

function set(key, value) {
	localStorage[key] = value
}

function get(key) {
	return localStorage[key]
}

// set('key1', 'value5')

function application_status(key) {
	switch(get(key)) {
		case undefined: 
			console.log("UNDEFINED")
			return {css  : 'color: red;',
					text : 'N/A'}
		case 'sent':
			console.log("SENT")
			return {css  : 'color: blue;',
					text : 'N/A'}
		case 'interviewing':
			console.log("INTERVIEWING")
			return {css  : 'color: orange;',
					text : 'N/A'}
		case 'offer':
			console.log("RECIEVED OFFER")
			return {css  : 'color: green;',
					text : 'N/A'}
		case 'declined':
			console.log("DECLINED")
			return {css  : 'color: red;',
					text : 'N/A'}
		default:
			console.log("EXISTS")
			return {css  : 'color: white;',
					text : 'N/A'}
	}
}