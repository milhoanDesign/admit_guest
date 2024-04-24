

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', '; 
    } 
}

admitted.textContent = admitted.textContent.slice(0, -2); 
refused.textContent = refused.textContent.slice(0, -2);


const guests = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const invite = document.querySelector('.invite');
const deny = document.querySelector('.deny');

for (let j = 0; j < guests.length; j++) {
    if (guests[j] === 'Anne' || guests[j] === 'Terri') {
        deny.textContent += guests[j] + ', ';
    } else {
        invite.textContent += guests[j] + ', ';
    }
}

invite.textContent = invite.textContent(0, -2);
deny.textContent = deny.textContent(0, -2);