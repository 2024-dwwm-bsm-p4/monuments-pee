let localisation;
let edifice;
let descriptifMonument;
const image = document.querySelector(".image");
console.log(image);
const images = document.querySelectorAll(".image");
console.log(images);
const pin = document.querySelector(".pin");
console.log(pin);
// Variable pour leaflet





function fonction(monument){

    if(monument==='tourEiffel') {
        edifice="Tour Eiffel";
        localisation="Paris,<strong>France</strong>";
        descriptifMonument="La tour Eiffel est une tour de fer puddlé de 330 m3 de hauteur (avec antennes) située à Paris, à l'extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement. Son adresse officielle est 5, avenue Anatole-France.";
        
    

    }else if(monument === 'NotreDame') {
        edifice="Notre Dame";
        localisation="Paris,<strong>France</strong>";
        descriptifMonument="La cathédrale Notre-Dame de Paris, communément appelée Notre-Dame, est l'un des monuments les plus emblématiques de Paris et de la France. Elle est située sur l'île de la Cité et est un lieu de culte catholique, siège de l'archidiocèse de Paris, dédié à la Vierge Marie.";

    }else if(monument === 'ArcDeTriomphe'){
        edifice="Arc de Triomphe";
        localisation="Paris,<strong>France</strong>";
        descriptifMonument="Un arc de triomphe, et plus généralement un arc monumental, est une structure libre monumentale enjambant une voie et utilisant la forme architecturale de l'arc avec un ou plusieurs passages voûtés. Ce type d'ouvrage est un des éléments les plus caractéristiques de l'architecture romaine, utilisé pour commémorer les généraux victorieux ou les évènements importants comme le décès d'un membre de la famille impériale ou royale, l'accession au trône d'un nouvel empereur ou encore les fondations de nouvelles colonies, la construction d'une route ou d'un pont.";


    }else if(monument==='MontSaintMichel'){
        edifice="Mont Saint-Michel";
        localisation="Paris,<strong>France</strong>";
        descriptifMonument="Le mont Saint-Michel est un îlot rocheux granitique d’environ 960 mètres de circonférence situé à l’est de l’embouchure du fleuve du Couesnon, dans le département de la Manche en Normandie. Son nom se réfère à l'archange saint Michel qui aurait exigé la construction d'un sanctuaire, selon un récit légendaire.";

    }else if(monument==='Versailles'){
        edifice="Versailles";
        localisation="Paris,<strong>France</strong>";
        descriptifMonument="Le château de Versailles est un château et un monument historique français situé à Versailles, dans les Yvelines. Il fut la résidence principale des rois de France Louis XIV, Louis XV et Louis XVI.";
    }
    //actions de la fonction

    document.querySelector("#localisation").innerHTML=localisation;
    document.querySelector("#edifice").textContent=edifice;
    document.querySelector("#descriptifMonument").textContent=descriptifMonument;
    document.querySelector(".texte").style.display="block";
   
    
    }


    images.forEach(image => {
        // image représente chaque image dans images
        image.addEventListener("click", () => {
            // Applique la classe 'filtered' à toutes les photos
            images.forEach(image => image.classList.add("filtre"));
            // Retire la classe 'filtered' de la photo cliquée
            image.classList.remove("filtre");
            document.querySelector(".carte").style.display="block";
            document.querySelector(".pin").style.display="block";
            
            
        });
    });
    











