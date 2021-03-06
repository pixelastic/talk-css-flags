# talk-css-flags

CSS, Compagnonnage et Vexillolie

## Histoire

Je suis allé à Tours il y a quelques mois
J'ai visité le musée du Compagnonnage
J'ai vu des chefs-d'œuvres
C'est d'ailleurs de là que viens le mot chef d'œuvre
La plus belle œuvre que puisse faire un compagnon de sa vie
Il y passe des années entières
Il utilise toutes les techniques maitrisées à la perfection
Pour quelque chose qui n'est finalement même pas utile
C'est juste un tour de force de ce qu'il est possible de faire

J'y ai vu beaucoup de parallelles avec le développement logiciel
Surtout le software craftmanship
Ou on voit le code comme un art, comme un craft
On veut le faire du mieux possible
On apprends de nos maitres, on enseigne à nos disciples

Je fais du CSS depuis plusieurs années
Je suis assez à l'aise dedans
J'aime le coté puzzle à résoudre pour réussir à reproduire une maquette
Jouer avec le markup, essayer de le garder le plus simple possible et fluide

Je me suis donc lancé le défi de reproduire l'ensemble des drapeaux des pays du
monde en CSS
Mais la tache me paraissait encore trop à ma portée
Trop dans ma zone de confort
Du coup je me suis mis la règle de n'utiliser qu'un seul div par drapeau
Je ne savais pas si j'allais y arriver avant de commencer
Mais j'ai appris beaucoup de choses en chemin

## Drapeaux

### Tricolore

J'ai commencé par les plus simples
- France
- Italie
- Belgique
- Cote d'Ivoire
- Guinea
- Ireland
- Mali
- Peru
- Chad
- Roumanie

Fun: Montrer les drapeaux qui sont les mêmes, comme quoi c'est facile à faire.

CSS: Border-left, border-right, et une couleur au milieu

### Tricolore horizontal

- Austria
- Armenia
- Bolivia
- Bulgaria
- Estonia
- Gabon
- Germany
- Hungary
- Latvia
- Lithuania
- Luxembourg
- Netherlands
- Russian federation
- Sierra Leone
- Yemen

Séparer ceux avec exactement trois bandes identiques, et ceux avec de tailles
différentes

Colombia... Une bande est plus large que les autres

CSS: border-top, border-bottom et une couleur au milieu

### 2 Bandes

Monaco
Ukraine
Poland

### Plus de bandes

Botswana
Costa Rica
Gambia
Mauritius
Thailand

borders ne marche pas
Je découvre les background-gradient
et je peux faire des gradients "pleins"
Je peux faire autant de lignes que je veux

### Horizontal et vertical

Je peux mixer les bandes horizontales et verticales
Les premieres dans l'ordre viennent au premier plan
Puis sur des layers de plus en plus profonds
En jouant correctement, je peux faire des formes plus complexes

Benin
Madagascar
United Arab Emirates

### Croix

En mettant un background et en tracant des lignes, je peux aussi faire des croix

Sweden
Switzerland
Aland Islands
England
Finland
Faroe Islands
Norway
Iceland

J'ai appris que cela s'appelle la Croix Nordique

### Ronds

Pour faire des ronds on a deux techniques
Soit un radial background. Pratique et simple.

Ruses: Soit un pseudo-element en position absolute avec border-radius 50%.

Japan
Bangladesh
Laos
Palau

### Symbols

Pour des symboles un peu complexes, je me suis permit de "tricher" et d'utiliser
une webfont.
J'ai utilisé icomoon pour crafter une fond sur mesure
L'avantage étant en SVG c'est que je peux choisir la taille et la couleur

Vietnam
Albania
Kyrgyzstan
Hong Kong
Saudi Arabia
SOmalia

Burkina Faso
Cameroon
Chile
Ghana
Guinée Bissau
Honduras
North Korea

Albanie
Barbados
Canada
Egypt
Ethiopia
Georgia
Hong Kong
Iraq
Israel
Jordanie
Kyrgyzstan
Lebanon
Lesotho
Guernsey
Mongolia
Morocco
Myanmar
Senegal



### Croissants

Un croissant de lune n'est rien d'autre qu'une eclipse partielle
Il suffit de mettre deux ronds l'un devant l'autre
je sais faire des ronds, je sais donc faire des croissants.

Azerbaijan
Libya
Malaysia
Maldives
Mauritania
Pakistan
Singapore
Tunisia
Turkey
Western Sahara

### Triangles

Au début j'ai utilisé la technique classique des borders top-bottom et du width
0 pour faire un triangle à droite
Mais ça devenait compliqué quand je devais placer aussi un symbole dedans,
à cause du width 0
J'ai donc trouvé la solution du clip-path qui me permet de dessiner un rectangle
et de couper dedans pour n'en afficher qu'une partie

Bahamas
Cuba
Czech Republic
Djibouti
Jordanie
Philippines
Puerto Rico
Sao Tome & Principe
South Sudan
Sudan


Ou plus compliqué, si je découpe plusieurs fois

Bahrain
Qatar

### Stripes

Plein de gradients, dans le bon ordre

USA
Liberia
Malaysia

### Diagonales

Avec un poil de trigo, on peut faire des gradients en diagonal, ps que
horizontal ou vertical. Ça permet de faire des coupes plus complexes

Eritrea
French Guiana
Marshall Islands
Namibia
Saint Kitts And nevis
Scottland
Seychelles
Solomon Islands
Tanzania
Trinidad et Tobago


Idem que pour les autres, en les superposant correctement on peut faire des
formes complexes

Guyana
Saint Lucia
Timor

### Box size sur un gradient

Par défaut un gradient va d'un bout à l'autre du div parent. Il est possible de
le conscrire à un plus petit rectangle, ce qui permet d'avoir plus de controle
sur les formes.
Rarement utilisé, mais quand j'en ai eu besoin, je ne pouvais pas faire sans.

Greece


### Plusieurs symbols

Pour ça on utilise la même technique que pour un seul symbole, mais on le place
en haut à gauche, transparent
Et on utilise les text-shadow pour placer les différentes étoiles.

Micronesia

### Cercles d'étoiles

Même technique que pour plusieurs symbols mais on mets un symbole transparent au
centre et on text-shadow tout autour

Cape Verde
China
Venezuala
Cook Island


### Plein de tecniques

Comoros





### Speciaux

Algéria
Greenland
United Kingdom
Burundi
Jamaica: fond noir, overlay avec jaune et vert, et coupage dans le jaune en clip
Kuwait: border simplement
New Zealand
South Africa






### Mega trick












### Ratios & Couleurs

Je me suis rendu compte que tous les drapeaux n'ont pas le même ration
longueur/largeur
La majorité sont en 2:3 mais certains ont des ratios complétément différents

Besoin aussi de trouver la bonne teinte de couleur. Certains son définis en
Pantone, d'autres en RGB, d'autres pas du tout.

Vexilla Mundi
CRWFlags
pantone2hex

### Trigonométrie

Pas très compliqué
Pas eu besoin de plus que Pythagore et SOHCAHTOA
Fonctions cos/sin/tan pas dispos dans SCSS
Mais dispos dans Ruby
Possibilité d'étendre SCSS pour lui faire loader du Ruby
Drawback: pas de libcss qui est plus fast



# Conclusion

Je suis parti en me disant que je savais faire du CSS
Mais je voulais voir jusqu'où je pouvais le pousser
J'ai appris beaucoup de choses sur les drapeaux
Sur la Vexilollogie, sur son vocabulaire, sur l'histoire des pays

J'ai découvert de nouvelles techniques CSS
background-gradient, clip, svg

J'ai essayé de pousser CSS dans des recoins dans lesquels je ne l'avais jamais
poussé
C'est comme ça que toutes les grandes découvertes sont faites
En srtant de ce qu'on sait, en sortant de sa zone de confort
J'aurais pas révolutionner le CSS, mais j'aurais appris moi même quelque chose
Je ne peux que vous inciter à essayer de dépasser ce que vous savez pour tenter
d'en faire encore plus et explorer là où personne n'est allé
Comme les chef-d'œuvre dont je parlais au début, tout ceci n'as pas d'utilité
Cela ne doit pas être utilisé en production, c'est juste un moyen pour moi de
découvrir jusqu'où je peux aller en CSS


CSS, Compagnonnage et Vexillologie

CSS Flags (https://pixelastic.github.io/css-flags/) est un projet un peu fou de
recréer l'ensemble des drapeaux du monde en CSS. Et comme si ce n'était pas une
tâche assez longue, on va le faire en se limitant à un seul `div` par drapeau.

Tim Carry nous présentera dans ce talk les techniques pour utiliser un unique
`div` au maximum de ces capacités. Nous verrons aussi pourquoi des projets de ce
genre sont importants.



