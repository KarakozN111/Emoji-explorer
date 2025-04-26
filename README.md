# Emoji-explorer
Emoji explorer- это веб-приложение для просмотра и поиска эмодзи с использованием Angular и Django. 
## Технический стек
### Frontend:
Angular 15+ (standalone components)
Bootstrap 5 для стилизации
RxJS для работы с асинхронными операциями
### Backend:
Django REST Framework
Django CORS Headers
## Почему этот стек?
Angular выбран за: Полнофункциональность, TypeScript поддержку.
Django обеспечивает:Быструю разработку API, Встроенную аутентификацию,Надежную ORM
## Установка и запуск Frontend
```
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
## Backend
```
cd frontend
npm install
ng serve
```
## Процесс разработки
Ключевые этапы:
Проектирование API на Django
Создание базовых компонентов Angular
Интеграция фронтенда и бэкенда
Тестирование и отладка
Уникальные подходы:
Использование standalone компонентов Angular
Кастомные пайпы для форматирования эмодзи
Оптимизированные запросы к API
## Компромиссы
Выбрана простая реализация фильтрации на клиенте
В будущем можно перенести на сервер
Дизайн:
Использован Bootstrap для быстрой разработки
## Известные проблемы
Отображение эмодзи:
Некоторые эмодзи могут некорректно отображаться в старых браузерах
Производительность:
При большом количестве эмодзи могут быть задержки
CORS:
В разработке требуется правильная настройка
