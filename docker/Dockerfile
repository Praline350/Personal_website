# Utilisez une image de base Python
FROM python:3.11-slim

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers du projet
COPY . /app

# Installez les dépendances
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Changez le répertoire de travail vers "project"
WORKDIR /app/project

# Collectez les fichiers statiques
RUN python manage.py collectstatic --noinput

# Commande par défaut pour lancer l'application
CMD ["gunicorn", "--bind", "0.0.0.0:$PORT", "project.wsgi:application"]