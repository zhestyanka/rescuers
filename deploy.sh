#!/bin/bash

# Скрипт развертывания проекта "Спасатели" на VPS
# Использование: bash deploy.sh

set -e

echo "🚀 Начинаем развертывание проекта СпасСлужба..."

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Функции для цветного вывода
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Проверка прав root
if [ "$EUID" -ne 0 ]; then
    print_error "Пожалуйста, запустите скрипт с правами root (sudo)"
    exit 1
fi

# Обновление системы
echo "📦 Обновление системы..."
apt update && apt upgrade -y
print_success "Система обновлена"

# Установка Node.js 18
echo "🟢 Установка Node.js 18..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
    print_success "Node.js установлен"
else
    print_warning "Node.js уже установлен"
fi

# Установка PM2
echo "⚙️ Установка PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    print_success "PM2 установлен"
else
    print_warning "PM2 уже установлен"
fi

# Установка Git
echo "📚 Проверка Git..."
if ! command -v git &> /dev/null; then
    apt install git -y
    print_success "Git установлен"
else
    print_warning "Git уже установлен"
fi

# Создание директории для проектов
echo "📁 Создание директории проектов..."
mkdir -p /var/www
cd /var/www

# Клонирование проекта (если еще не склонирован)
if [ ! -d "rescuers" ]; then
    echo "📥 Клонирование репозитория..."
    echo "Введите URL репозитория (например: https://github.com/username/rescuers.git):"
    read REPO_URL
    git clone $REPO_URL rescuers
    print_success "Репозиторий склонирован"
else
    echo "📥 Обновление существующего репозитория..."
    cd rescuers
    git pull origin main
    cd ..
    print_success "Репозиторий обновлен"
fi

# Переход в директорию проекта
cd rescuers

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm install
print_success "Зависимости установлены"

# Сборка проекта
echo "🔨 Сборка проекта..."
npm run build
print_success "Проект собран"

# Создание конфигурации PM2
echo "⚙️ Создание конфигурации PM2..."
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
      error_file: '/var/log/pm2/rescuers-error.log',
      out_file: '/var/log/pm2/rescuers-out.log',
      log_file: '/var/log/pm2/rescuers.log',
    }
  ]
};
EOF
print_success "Конфигурация PM2 создана"

# Создание директории для логов
mkdir -p /var/log/pm2

# Остановка существующего процесса (если есть)
pm2 stop rescuers 2>/dev/null || true
pm2 delete rescuers 2>/dev/null || true

# Запуск приложения
echo "🚀 Запуск приложения..."
pm2 start ecosystem.config.js
pm2 save
print_success "Приложение запущено"

# Настройка автозапуска PM2
echo "🔄 Настройка автозапуска PM2..."
pm2 startup systemd -u root --hp /root
print_success "Автозапуск настроен"

# Настройка файрвола
echo "🛡️ Настройка файрвола..."
if command -v ufw &> /dev/null; then
    ufw allow 3002
    ufw allow ssh
    ufw --force enable
    print_success "Файрвол настроен"
else
    print_warning "UFW не установлен, пропускаем настройку файрвола"
fi

# Проверка статуса
echo "📊 Проверка статуса приложения..."
sleep 5
pm2 status

# Тест доступности
echo "🧪 Тестирование доступности..."
if curl -f http://localhost:3002 > /dev/null 2>&1; then
    print_success "Приложение доступно на http://localhost:3002"
else
    print_error "Приложение недоступно. Проверьте логи: pm2 logs rescuers"
fi

# Получение внешнего IP
EXTERNAL_IP=$(curl -s ifconfig.me 2>/dev/null || echo "неизвестен")

echo ""
echo "🎉 Развертывание завершено!"
echo ""
echo "📋 Информация о развертывании:"
echo "   • Приложение: СпасСлужба"
echo "   • Порт: 3002"
echo "   • Локальный URL: http://localhost:3002"
echo "   • Внешний URL: http://$EXTERNAL_IP:3002"
echo "   • Директория: /var/www/rescuers"
echo ""
echo "🔧 Полезные команды:"
echo "   • Статус: pm2 status"
echo "   • Логи: pm2 logs rescuers"
echo "   • Перезапуск: pm2 restart rescuers"
echo "   • Остановка: pm2 stop rescuers"
echo ""
echo "📚 Для обновления проекта:"
echo "   cd /var/www/rescuers && git pull && npm install && npm run build && pm2 restart rescuers"
echo ""

print_success "Развертывание успешно завершено!" 