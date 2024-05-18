function getInfo(callBack) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then((res) => res.json())
        .then((data) => {
            callBack(data);
        });
}

getInfo(function (data) {
    console.log(data);

    data.results.forEach(element => {
        const divCard = document.createRange().createContextualFragment(
            /*HTML*/
            `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${element.image}" alt="Rick" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">${element.name}</h3>
                <p class="text-gray-700">ID: ${element.id}</p>
                <p class="text-gray-700">Especie: ${element.species}</p>
                <p class="text-gray-700">Género: ${element.gender}</p>
                <p class="text-gray-700">Estado: ${element.status}</p>
                <p class="text-gray-700">Origen: ${element.origin.name}</p>
                <p class="text-gray-700">Location: ${element.location.name}</p>
            </div>
        </div>
    
        `);
        const root = document.getElementById('root')
        root.appendChild(divCard);
        
    });

});
