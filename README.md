# entretiens_familles
Cette application permet de se préparer aux entretiens d'organisation de funérailles.

L'application utilise electron et les processus de communication entre icpMain et ipcRenderer

## Installation depuis github

```terminal
git clone https://github.com/albanmartel/entretiens_familles.git
```
## Installer modules manquants

```terminal
node install
```
## Installer les modules de développement

```terminal
npm install --save-dev
```

## Démarrer application

Pour démarrer le programme
dans un terminal :
```terminal
$ npm start
```

```terminal
$ ./run.sh
```

## Lancer les Tests unitaires (Mocha et Spectron)

Pour faire les tests unitaire
dans un terminal :
```terminal
$ npm test
```

## Packager l'application pour votre architecture

Pour win 64

```terminal
npm run package-win64
```
Pour linux 64

```terminal
npm run package-linux64
```
