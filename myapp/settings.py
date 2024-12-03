import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get Google Maps API key from environment variable
GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')

# Add to context processors
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                # ... other context processors ...
                'myapp.context_processors.google_maps_api_key',
            ],
        },
    },
] 