const nav = [
	{
		name: 'Strona główna',
		path: 'index.html'
	},
	{
		name: 'Kontakt',
		path: 'contact.html'
	}
];

const navEl = document.getElementsByClassName('navbar')[0];
let menu = '<nav>';
for (let i = 0; i < nav.length; i++) {
	const item = `<a href="${nav[i].path}">${nav[i].name}</a>`;
	menu += item;
}
menu += '</nav>';

navEl.innerHTML = menu;
