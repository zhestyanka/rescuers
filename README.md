# СпасСлужба - Официальный сайт

Профессиональная спасательная служба. Веб-сайт построен на Next.js 14 с использованием TypeScript и Tailwind CSS.

## Возможности

- 🌊 Информация о спасательных операциях на воде
- 📚 Учебный центр и курсы обучения
- 📰 Новости и события
- 👥 Информация о команде
- 📞 Контактная информация
- 📱 Адаптивный дизайн

## Технологический стек

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React

## Установка и запуск

### Локальная разработка

```bash
# Клонирование репозитория
git clone https://github.com/YOUR_USERNAME/rescuers.git
cd rescuers

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000)

### Развертывание на VPS

1. **Подключение к серверу:**
```bash
ssh root@46.173.27.238
```

2. **Установка зависимостей на сервере:**
```bash
# Обновление системы
apt update && apt upgrade -y

# Установка Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Установка PM2
npm install -g pm2

# Установка Git (если не установлен)
apt install git -y
```

3. **Клонирование и настройка проекта:**
```bash
# Переход в директорию для веб-проектов
cd /var/www

# Клонирование репозитория
git clone https://github.com/YOUR_USERNAME/rescuers.git
cd rescuers

# Установка зависимостей
npm install

# Сборка проекта
npm run build
```

4. **Настройка PM2:**
```bash
# Создание конфигурации PM2
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'rescuers',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/rescuers',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    }
  ]
};
EOF

# Запуск приложения
pm2 start ecosystem.config.js

# Сохранение конфигурации PM2
pm2 save
pm2 startup
```

5. **Настройка файрвола:**
```bash
# Разрешение трафика на порт 3002
ufw allow 3002
ufw enable
```

6. **Проверка работы:**
```bash
# Проверка статуса PM2
pm2 status

# Проверка логов
pm2 logs rescuers

# Проверка доступности
curl http://localhost:3002
```

Сайт будет доступен по адресу: `http://46.173.27.238:3002`

## Команды разработки

```bash
# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Запуск production сервера
npm start

# Линтинг кода
npm run lint
```

## Структура проекта

```
rescuers/
├── app/                    # App Router страницы
│   ├── about/             # Страница "О нас"
│   ├── services/          # Страница "Направления"
│   ├── news/              # Страница "Новости"
│   ├── training/          # Страница "Учебный центр"
│   ├── contacts/          # Страница "Контакты"
│   ├── layout.tsx         # Основной layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── ui/                # UI компоненты (shadcn/ui)
│   ├── header.tsx         # Компонент шапки
│   └── footer.tsx         # Компонент подвала
├── lib/                   # Утилиты и конфигурации
├── public/                # Статические файлы
│   └── images/            # Изображения
└── styles/                # Стили
```

## Обновление проекта на VPS

```bash
# Переход в директорию проекта
cd /var/www/rescuers

# Получение обновлений
git pull origin main

# Установка новых зависимостей (если нужно)
npm install

# Пересборка проекта
npm run build

# Перезапуск PM2
pm2 restart rescuers
```

## Поддержка

При возникновении проблем:

1. Проверьте логи PM2: `pm2 logs rescuers`
2. Проверьте статус процесса: `pm2 status`
3. Перезапустите приложение: `pm2 restart rescuers`

## Лицензия

© 2024 СпасСлужба. Все права защищены. 