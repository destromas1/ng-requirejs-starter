'use strict';


require([
	'app/js/app'
], function (app) {

	var personService = function () {

    var getPersons = function () {
    return [
      {
        "firstName": "Mohammad",
        "lastName": "Hurley",
        "country": "Albania"
      },
      {
        "firstName": "Joshua",
        "lastName": "Wilkerson",
        "country": "India"
      },
      {
        "firstName": "Nolan",
        "lastName": "Hansen",
        "country": "Serbia"
      },
      {
        "firstName": "Chancellor",
        "lastName": "Garcia",
        "country": "Libya"
      },
      {
        "firstName": "Brennan",
        "lastName": "Alvarez",
        "country": "Mozambique"
      },
      {
        "firstName": "Maxwell",
        "lastName": "Pollard",
        "country": "Saint Barthélemy"
      },
      {
        "firstName": "Conan",
        "lastName": "Hammond",
        "country": "Western Sahara"
      },
      {
        "firstName": "Zane",
        "lastName": "Miles",
        "country": "Slovenia"
      },
      {
        "firstName": "Gil",
        "lastName": "Skinner",
        "country": "Kyrgyzstan"
      },
      {
        "firstName": "Erasmus",
        "lastName": "Kelley",
        "country": "Malta"
      },
      {
        "firstName": "Jakeem",
        "lastName": "Valencia",
        "country": "Poland"
      },
      {
        "firstName": "Zeph",
        "lastName": "Maddox",
        "country": "Liberia"
      },
      {
        "firstName": "Salvador",
        "lastName": "Ortiz",
        "country": "Madagascar"
      },
      {
        "firstName": "Ralph",
        "lastName": "Trujillo",
        "country": "Jersey"
      },
      {
        "firstName": "Damon",
        "lastName": "Ellis",
        "country": "Seychelles"
      },
      {
        "firstName": "Tarik",
        "lastName": "Kirby",
        "country": "Kenya"
      },
      {
        "firstName": "Emery",
        "lastName": "Carrillo",
        "country": "Iceland"
      },
      {
        "firstName": "Emery",
        "lastName": "Barnes",
        "country": "Croatia"
      },
      {
        "firstName": "Dominic",
        "lastName": "Vance",
        "country": "San Marino"
      },
      {
        "firstName": "Luke",
        "lastName": "Best",
        "country": "Holy See (Vatican City State)"
      },
      {
        "firstName": "Buckminster",
        "lastName": "Alford",
        "country": "Iran"
      },
      {
        "firstName": "Chase",
        "lastName": "Farley",
        "country": "Estonia"
      },
      {
        "firstName": "Chaim",
        "lastName": "Travis",
        "country": "Congo, the Democratic Republic of the"
      },
      {
        "firstName": "Devin",
        "lastName": "Burgess",
        "country": "Heard Island and Mcdonald Islands"
      },
      {
        "firstName": "Bert",
        "lastName": "Woodward",
        "country": "Jamaica"
      },
      {
        "firstName": "Lewis",
        "lastName": "Davenport",
        "country": "Poland"
      },
      {
        "firstName": "Erich",
        "lastName": "Valdez",
        "country": "Madagascar"
      },
      {
        "firstName": "Phillip",
        "lastName": "Hensley",
        "country": "Liberia"
      },
      {
        "firstName": "Kirk",
        "lastName": "Logan",
        "country": "Norfolk Island"
      },
      {
        "firstName": "Darius",
        "lastName": "Johnson",
        "country": "Cyprus"
      },
      {
        "firstName": "Oscar",
        "lastName": "Schmidt",
        "country": "Guadeloupe"
      },
      {
        "firstName": "Justin",
        "lastName": "Forbes",
        "country": "Mexico"
      },
      {
        "firstName": "Carlos",
        "lastName": "Smith",
        "country": "Bahamas"
      },
      {
        "firstName": "Stewart",
        "lastName": "Martinez",
        "country": "Kenya"
      },
      {
        "firstName": "Lucian",
        "lastName": "Rutledge",
        "country": "Iran"
      },
      {
        "firstName": "Samuel",
        "lastName": "Luna",
        "country": "Latvia"
      },
      {
        "firstName": "Cole",
        "lastName": "Burns",
        "country": "Bermuda"
      },
      {
        "firstName": "Louis",
        "lastName": "Trujillo",
        "country": "Martinique"
      },
      {
        "firstName": "Zachary",
        "lastName": "Downs",
        "country": "Saint Helena, Ascension and Tristan da Cunha"
      },
      {
        "firstName": "Emerson",
        "lastName": "Joyce",
        "country": "Holy See (Vatican City State)"
      },
      {
        "firstName": "Benedict",
        "lastName": "Wolfe",
        "country": "Yemen"
      },
      {
        "firstName": "Joseph",
        "lastName": "Cook",
        "country": "Philippines"
      },
      {
        "firstName": "Kadeem",
        "lastName": "Knowles",
        "country": "Namibia"
      },
      {
        "firstName": "Bruno",
        "lastName": "Donovan",
        "country": "Lebanon"
      },
      {
        "firstName": "Lyle",
        "lastName": "Hinton",
        "country": "Lithuania"
      },
      {
        "firstName": "Murphy",
        "lastName": "Sutton",
        "country": "Honduras"
      },
      {
        "firstName": "Addison",
        "lastName": "Palmer",
        "country": "Philippines"
      },
      {
        "firstName": "Randall",
        "lastName": "Guerra",
        "country": "Aruba"
      },
      {
        "firstName": "Devin",
        "lastName": "Curtis",
        "country": "Yemen"
      },
      {
        "firstName": "Cruz",
        "lastName": "Carson",
        "country": "Guernsey"
      },
      {
        "firstName": "Kane",
        "lastName": "Holloway",
        "country": "Saint Vincent and The Grenadines"
      },
      {
        "firstName": "Edan",
        "lastName": "Walters",
        "country": "Nauru"
      },
      {
        "firstName": "Edward",
        "lastName": "Burris",
        "country": "Turks and Caicos Islands"
      },
      {
        "firstName": "Sylvester",
        "lastName": "Cleveland",
        "country": "Guatemala"
      },
      {
        "firstName": "Fletcher",
        "lastName": "Randolph",
        "country": "Liberia"
      },
      {
        "firstName": "Uriel",
        "lastName": "Santiago",
        "country": "Romania"
      },
      {
        "firstName": "Victor",
        "lastName": "Ferguson",
        "country": "India"
      },
      {
        "firstName": "Vaughan",
        "lastName": "Gamble",
        "country": "Åland Islands"
      },
      {
        "firstName": "Carl",
        "lastName": "Sanford",
        "country": "Solomon Islands"
      },
      {
        "firstName": "Bruno",
        "lastName": "Howard",
        "country": "Barbados"
      },
      {
        "firstName": "Connor",
        "lastName": "Mueller",
        "country": "Ethiopia"
      },
      {
        "firstName": "Solomon",
        "lastName": "Delgado",
        "country": "Tanzania"
      },
      {
        "firstName": "Macon",
        "lastName": "Beasley",
        "country": "Albania"
      },
      {
        "firstName": "Evan",
        "lastName": "Ferguson",
        "country": "Singapore"
      },
      {
        "firstName": "Brendan",
        "lastName": "Levine",
        "country": "Grenada"
      },
      {
        "firstName": "Price",
        "lastName": "Mclaughlin",
        "country": "New Caledonia"
      },
      {
        "firstName": "Hashim",
        "lastName": "Mcintyre",
        "country": "Costa Rica"
      },
      {
        "firstName": "Wayne",
        "lastName": "Waller",
        "country": "Nigeria"
      },
      {
        "firstName": "Grady",
        "lastName": "Roberts",
        "country": "Sierra Leone"
      },
      {
        "firstName": "Lars",
        "lastName": "Combs",
        "country": "Gambia"
      },
      {
        "firstName": "Louis",
        "lastName": "Ray",
        "country": "Aruba"
      },
      {
        "firstName": "Marsden",
        "lastName": "Stevenson",
        "country": "Western Sahara"
      },
      {
        "firstName": "Chaney",
        "lastName": "Caldwell",
        "country": "Sudan"
      },
      {
        "firstName": "Donovan",
        "lastName": "Lowery",
        "country": "Christmas Island"
      },
      {
        "firstName": "Ian",
        "lastName": "Brewer",
        "country": "Angola"
      },
      {
        "firstName": "Cullen",
        "lastName": "Moss",
        "country": "Congo (Brazzaville)"
      },
      {
        "firstName": "Dennis",
        "lastName": "Shields",
        "country": "Azerbaijan"
      },
      {
        "firstName": "Kieran",
        "lastName": "Alvarado",
        "country": "Cayman Islands"
      },
      {
        "firstName": "Aladdin",
        "lastName": "Bradley",
        "country": "Ireland"
      },
      {
        "firstName": "Declan",
        "lastName": "Cardenas",
        "country": "Greece"
      },
      {
        "firstName": "Octavius",
        "lastName": "Pierce",
        "country": "Andorra"
      },
      {
        "firstName": "Ivor",
        "lastName": "Luna",
        "country": "Burundi"
      },
      {
        "firstName": "Cyrus",
        "lastName": "Downs",
        "country": "Australia"
      },
      {
        "firstName": "Anthony",
        "lastName": "Salas",
        "country": "Bolivia"
      },
      {
        "firstName": "Chase",
        "lastName": "Barlow",
        "country": "Russian Federation"
      },
      {
        "firstName": "Kaseem",
        "lastName": "Cole",
        "country": "Hungary"
      },
      {
        "firstName": "Dorian",
        "lastName": "Webster",
        "country": "Cocos (Keeling) Islands"
      },
      {
        "firstName": "Quamar",
        "lastName": "Sellers",
        "country": "Comoros"
      },
      {
        "firstName": "Judah",
        "lastName": "Ryan",
        "country": "Tajikistan"
      },
      {
        "firstName": "Jelani",
        "lastName": "Sparks",
        "country": "Cambodia"
      },
      {
        "firstName": "Zachary",
        "lastName": "Whitehead",
        "country": "Aruba"
      },
      {
        "firstName": "Hyatt",
        "lastName": "Houston",
        "country": "Martinique"
      },
      {
        "firstName": "Hiram",
        "lastName": "Fuentes",
        "country": "Gambia"
      },
      {
        "firstName": "Cullen",
        "lastName": "Hicks",
        "country": "Uzbekistan"
      },
      {
        "firstName": "Francis",
        "lastName": "Burks",
        "country": "Malawi"
      },
      {
        "firstName": "Ray",
        "lastName": "Ramsey",
        "country": "Central African Republic"
      },
      {
        "firstName": "Wayne",
        "lastName": "Lara",
        "country": "Guatemala"
      },
      {
        "firstName": "Raymond",
        "lastName": "Nunez",
        "country": "Congo, the Democratic Republic of the"
      },
      {
        "firstName": "Chandler",
        "lastName": "Delacruz",
        "country": "Djibouti"
      },
      {
        "firstName": "Cody",
        "lastName": "Knight",
        "country": "Pitcairn Islands"
      }
    ];
  };

  return {
    getPersons : getPersons
  };
		
	};

  app.register.factory('personService', personService);    

  });

