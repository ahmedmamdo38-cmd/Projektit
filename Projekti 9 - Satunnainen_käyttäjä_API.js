function arvo(){
    kayttaja = document.getElementById("kayttaja");

    try{
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const user = data.results[0];
         
            kayttaja.innerHTML = `
                <strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>Location:</strong> ${user.location.city}, ${user.location.country}<br>
                <strong>Phone:</strong> ${user.phone}<br>
                <img src="${user.picture.medium}" alt="User picture">
            `;
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            kayttaja.textContent = 'Error loading user data';
        });
    } catch(error) {
        console.error('Error:', error);
        kayttaja.textContent = 'Error loading user data';
    }
}