const data = 'strainId=%3CREQUIRED%3E';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://strainraygorodskijv1.p.rapidapi.com/getFlavorsByStrainId');
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-RapidAPI-Key', '9863c19adfmshada0f61ce34e3f7p143586jsne9b9f6eca3dc');
xhr.setRequestHeader('X-RapidAPI-Host', 'StrainraygorodskijV1.p.rapidapi.com');

xhr.send(data);