# Déchiffrement de fichiers chiffrés avec AES-128-CBC enedis

Ce script déchiffre un fichier chiffré avec AES-128-CBC en utilisant une clé de 32 caractères hexadécimaux et une clé de 32 caractères hexadécimaux.

## Utilisation

1. npm install
2. Copiez le zip d'entré dans le même dossier que le script.
3. Exécutez le script en exécutant `NAMEFILE=input.zip PASSWORD=pass KEY=key node index.js` en ajoutant le nom du fichier d'entrée.
4. Le fichier déchiffré sera créé dans le même dossier.

## Notes

- Le script déchiffre le fichier en utilisant une clé de 32 caractères hexadécimaux et une clé de 32 caractères hexadécimaux.
- Si le fichier déchiffré existe déjà, il sera supprimé avant le déchiffrement.
- Si une erreur se produit pendant le déchiffrement, le fichier partiellement déchiffré sera supprimé.

## Exemple de fichier déchiffré

Le fichier déchiffré est un fichier ZIP contenant des fichiers texte.

```bash
$ node index.js
Déchiffrement terminé avec succès.
```
