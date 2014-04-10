$(document).ready(function() {

	// $('.js_loginform').validate({
	// 	rules:{
	// 		name:{
	// 			required: true,
	// 		},
	// 		phone:{
	// 			required: true,
	// 		},
	// 	},
	// });

	// $('.js_loginform1').validate({
	// 	rules:{
	// 		name:{
	// 			required: true,
	// 		},
	// 		phone:{
	// 			required: true,
	// 		},
	// 	},
	// });

	$('.js_loginform').each(function() {

    $(this).validate({
	 
			rules:{

				name:{
						required: true,
				},
				
			  phone:{
			      required: true,
			  },

			},

    });

	});

});

$('.fancybox').fancybox({
	helpers: {
		overlay: {
			locked: false
		}
	}
});


function js_numbers(input) { 
  var value = input.value; 
  var rep = /[-\.;":'a-zA-Zа-яА-Я]/; 
  if (rep.test(value)) { 
      value = value.replace(rep, ''); 
      input.value = value; 
  } 
}

function js_name(input) { 
    var value = input.value; 
    var rep = /[a-zA-Zа]/; 
    if (rep.test(value)) { 
        value = value.replace(rep, ''); 
        input.value = value; 
    } 
	}
