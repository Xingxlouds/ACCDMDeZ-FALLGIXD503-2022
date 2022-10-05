let list = document.querySelectorAll('.list');
		let Image = document.querySelectorAll('.Image');

		for(let i = 0; i < list.length; i++){
		    list[i].addEventListener('click', function(){
		        for(let j = 0; j< list.length; j++){
		            list[j].classList.remove('active');
		        }

		        this.classList.add('active');
		        

		        let dataFilter = this.getAttribute('data-filter');

		        for(let k = 0; k < Image.length; k++){
		            Image[k].classList.remove('active');
		            Image[k].classList.add('hide');

		            if(Image[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
		                Image[k].classList.remove('hide');
		                Image[k].classList.add('active');
		            }
		        }
		    });
		}

        var image = document.querySelector('#image');

        image.addEventListener('click', function() {
            image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png';
        });