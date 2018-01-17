let company_cards = document.getElementsByClassName('company-card')

// card properties
const accept_button_css = " color: red;\
						    border: 1px solid lightgrey;\
						    margin-top: 10px;\
						    background: white;"
const accept_button_text_css = "border-bottom: none;"

// inject ui
for (card of company_cards) {
	card.outerHTML += "<div style = '" + accept_button_css + "'>\
					   		<a style = '" + accept_button_text_css + "'>N/A</a>\
					   </div>"
}