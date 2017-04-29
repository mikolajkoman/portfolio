// KLASA KANBAN CARD
function Card(id, name, btn_group) {
	var self = this;

	this.id = id;
	this.name = name || 'Nie podano nazwy';
	this.element = createCard();
	this.barcolor = ['red', 'blue', 'green', 'aqua', 'yellow', 'pink', 'purple', 'orange', 'black', 'white' ];
	this.barcolor_nr = 1;

	function createCard() {
		var $card = $('<li>').addClass('card');
		var $btn_group = $('<button>').addClass('btn-group').text(' ').css({'background-color': 'red'});
		var $cardDescription = $('<p>').addClass('card-description').text(self.name);
		var $cardDelete = $('<button>').addClass('btn-delete').text('x');

		$cardDelete.click(function() {
			self.removeCard();
		});

		$($btn_group).click(function() {
			$(this).css({'background-color':  self.barcolor[self.barcolor_nr++]});

			if (self.barcolor_nr > self.barcolor.length){
				self.barcolor_nr = 0;
			}

		});

		$card
			.append($cardDelete)
			.append($btn_group)
			.append($cardDescription);

		return $card;
	}
}

Card.prototype = {
	removeCard: function() {
	    var self = this;
	    $.ajax({
	      url: baseUrl + '/card/' + self.id,
	      method: 'DELETE',
	      success: function(){
	        self.element.remove();
	      }
	    });
	}
}