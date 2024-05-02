# Serveur d'envoi d'e-mails avec Node.js

Ce serveur d'envoi d'e-mails est une application Node.js qui utilise Express pour créer un endpoint permettant d'envoyer des e-mails via SMTP. Les configurations SMTP sont récupérées à partir d'un fichier .env pour faciliter la gestion des paramètres sensibles.

## Configuration requise

Avant de pouvoir exécuter l'application, assurez-vous d'avoir Node.js et npm installés sur votre système.

## Installation

1. Clonez ce dépôt sur votre machine :

```
git clone https://github.com/votre-utilisateur/votre-projet.git
```

2. Accédez au répertoire de votre projet :

```
cd votre-projet
```

3. Installez les dépendances nécessaires :

```
pnpm install
```

4. Créez un fichier .env à la racine du projet et configurez les paramètres SMTP ainsi que le port du serveur. Voici un exemple de fichier .env :

```
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_SECURE=true_or_false
SMTP_USERNAME=your_smtp_username
SMTP_PASSWORD=your_smtp_password
PORT=your_server_port
```

Assurez-vous de remplacer `your_smtp_host`, `your_smtp_port`, `your_smtp_username`, `your_smtp_password`, `your_email_address`, et `your_server_port` par les valeurs appropriées.

## Utilisation

Une fois que vous avez installé les dépendances et configuré le fichier .env, vous pouvez démarrer le serveur en exécutant la commande suivante :

```
pnpm start
```

Le serveur démarrera sur le port spécifié dans le fichier .env et sera prêt à recevoir des requêtes pour l'envoi d'e-mails.

Pour envoyer un e-mail, vous pouvez faire une requête POST à l'URL `http://localhost:<PORT>/sendmail` avec les champs `to`, `from`, `subject` et `text` dans le corps de la requête.

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à créer une demande de tirage (pull request).

## Licence

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier LICENSE.

N'oublie pas de personnaliser les sections avec les informations spécifiques à ton projet, comme le nom du dépôt, les informations de configuration, etc.
