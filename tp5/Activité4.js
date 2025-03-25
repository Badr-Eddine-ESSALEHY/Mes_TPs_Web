// Création de l'objet Personne
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  
  // Ajout de la méthode Décrire à l'objet Personne
  Personne.prototype.decrire = function() {
    return this.nom + ", " + this.age + " ans";
  };
  
  // Création d'une instance de l'objet Personne
  let ali = new Personne("Ali", 19);
  
  // Appel de la méthode Décrire et affichage du résultat
  console.log(ali.decrire()); // Affiche "Ali, 19 ans"