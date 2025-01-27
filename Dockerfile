FROM python:3.11-slim

# Répértoire de travail
WORKDIR /app

# Variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=0

# Copie du projet
COPY . /app

# Dépendances
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Changer le répertoire de travail vers le projet Django
WORKDIR /app/project

# migration db
RUN python manage.py migrate

# Collectez les fichiers statiques
RUN python manage.py collectstatic --noinput

# Commande de lancement
CMD ["gunicorn", "project.wsgi:application", "--bind", "0.0.0.0:8000"]