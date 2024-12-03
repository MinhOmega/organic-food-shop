# Organic Food Shop

An e-commerce platform for organic food products built with Django.

## Screenshots

![Screenshot (4)](https://user-images.githubusercontent.com/67895533/214219897-00c479ee-f0f6-41b9-b57d-76dbcd95c635.png)
![Screenshot (5)](https://user-images.githubusercontent.com/67895533/214219915-1e658e2c-a4ac-4224-9b81-9d661546ddab.png)
![Screenshot (6)](https://user-images.githubusercontent.com/67895533/214219920-e8e33a3f-a22e-4d7b-a723-191bd75e2f53.png)

## Prerequisites

- Python 3.9+
- pip (Python package manager)
- Docker (optional)

## Installation

### Method 1: Traditional Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/organic-food-shop.git
cd organic-food-shop
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env file with your configuration
```

5. Run database migrations:
```bash
python manage.py migrate
```

6. Create a superuser (admin):
```bash
python manage.py createsuperuser
```

7. Run the development server:
```bash
python manage.py runserver
```

The application will be available at http://127.0.0.1:8000/

### Method 2: Docker Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/organic-food-shop.git
cd organic-food-shop
```

2. Build and run with Docker Compose:
```bash
docker-compose up --build
```

The application will be available at http://127.0.0.1:8000/

## Features

- User authentication and authorization
- Product catalog with categories
- Shopping cart functionality
- Secure checkout process
- Admin dashboard for product management
- Responsive design for mobile and desktop
- Product search and filtering
- Order tracking

## Tech Stack

- Backend: Django
- Frontend: HTML, CSS, JavaScript
- Database: SQLite (default) / PostgreSQL (optional)
- CSS Framework: Bootstrap
- Icons: IcoFont
- Payment Integration: Ready for integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

MinhOmega - [@MinhOmega](https://github.com/MinhOmega)
Project Link: [https://github.com/MinhOmega/organic-food-shop](https://github.com/MinhOmega/organic-food-shop)
