const fs = require('fs');
const crypto = require('crypto');

const namefile = process.env.NAMEFILE;
const password = process.env.PASSWORD;
const keyENE = process.env.KEY;



// Remplacez ces variables par les valeurs appropriées
const keyHex = keyENE; // Clé de 32 caractères hexadécimaux
const ivHex = password; // IV de 32 caractères hexadécimaux
const outputFilePath = 'uncrypted.zip';

// Convertir les valeurs hexadécimales en buffers
const key = Buffer.from(keyHex, 'hex');
const iv = Buffer.from(ivHex, 'hex');

// Créer un déchiffreur AES-128-CBC
const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);

// Lire le fichier chiffré en flux
const inputFile = fs.createReadStream(namefile);
const outputFile = fs.createWriteStream(outputFilePath);

// Lire le flux de données, déchiffrer et écrire dans le fichier de sortie
inputFile.pipe(decipher).pipe(outputFile);

// Gérer les erreurs
inputFile.on('error', (err) => {
    console.error('Erreur de lecture du fichier chiffré:', err);
});

decipher.on('error', (err) => {
    console.error('Erreur de déchiffrement:', err);
});

outputFile.on('error', (err) => {
    console.error('Erreur d\'écriture du fichier déchiffré:', err);
});

outputFile.on('finish', () => {
    console.log('Déchiffrement terminé avec succès.');
});
