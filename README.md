# Emoji-explorer🫡
Emoji explorer- это веб-приложение для просмотра и поиска эмодзи с использованием Angular и Django. 
## Технический стек
### Frontend:
Angular 15+ (standalone components)
Bootstrap 5 для стилизации
RxJS для работы с асинхронными операциями
### Backend:
Django REST Framework
Django CORS Headers
### Почему этот стек?
Angular выбран за: полнофункциональность, TypeScript поддержку.
Django обеспечивает: быструю разработку API, встроенную аутентификацию, надежную ORM.
## Установка и запуск Backend
```
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows
pip install -r requirements.txt
pip install requests
python manage.py migrate
python manage.py runserver
```
## Frontend
```
cd frontend
npm install
ng serve
```
## Процесс разработки
Ключевые этапы: проектирование API на Django, создание базовых компонентов Angular, интеграция фронтенда и бэкенда, тестирование и отладка.
## Компромиссы
Выбрана простая реализация фильтрации на клиенте, в будущем можно перенести на сервер
Дизайн: использован Bootstrap для быстрой разработки
## Уникальные подходы:
Использование standalone компонентов Angular, кастомные пайпы для форматирования эмодзи, оптимизированные запросы к API
## Известные проблемы
Отображение эмодзи: некоторые эмодзи могут некорректно отображаться в старых браузерах
Производительность: при большом количестве эмодзи могут быть задержки
CORS:в разработке требуется правильная настройка
