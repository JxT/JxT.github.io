

/* On page load */

function onLoad() {
	loadSharedElements(function() {
		loadLanguages(); /* Languages after all data loaded */
	})

	var s = skrollr.init();
	loseHeaderLangFocus();
}

function loadSharedElements(callback) {
	loadElement('mainNav', 'elements/mainNav.html', function(){
		loadElement('mainFooter', 'elements/footer.html', function(){
			callback();
		});
	});
}

function loadElement(elementId, URL, callback) {
	var element = document.getElementById(elementId);

	if (element != null) {
		getHTML(URL, data => {
			element.innerHTML = data;
			callback();
		});
	}

	else { callback(); }
}


/* Import HTML */

function getHTML(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onload = function() { 
    callback(this.responseText) 
  };

  xhr.open('GET', url, true);
  xhr.send();
}


/* Lose focus of language selection on homepage */
function loseHeaderLangFocus() {
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	var headerLangswitch = document.getElementById('headerLangswitch');

	headerLangswitch.onclick = async function() {
		await sleep(300);
		document.activeElement.blur();
	}
}


/* Multi-language JS */

var x = null; //Initialise x

function loadLanguages() {
	x = document.body.getElementsByTagName('*');
	var currentLanguage = getCookie("lang"); //en, cn, fr, jp, null

	if (currentLanguage == null || currentLanguage == "") {
		document.cookie = "lang=en";
		switchLanguage('en'); 
	}

	else {
		switchLanguage(currentLanguage);
	}	
}

function getCookie(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function switchLanguage(newLanguage) {
	var languages = ["en", "cn-s", "cn-t", "fr", "jp"];
	languages.splice(languages.indexOf(newLanguage), 1);

	for (var i = 0; i < x.length; i++) {
		if (x[i].id == newLanguage) {
			x[i].style.display = 'inline-block';
		}

		if (x[i].id == "langtog-" + newLanguage) {
			x[i].setAttribute('class', 'selected');
		}

		for (var j = 0; j < languages.length; j++) {
			if (x[i].id == languages[j]) {
				x[i].style.display = 'none';
			}

			if (x[i].id == "langtog-" + languages[j]) {
				x[i].setAttribute('class', '');
			}
		}
	}
	document.cookie = "lang=" + newLanguage + "; path=/" ;
}

