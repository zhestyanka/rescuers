#!/bin/bash

# Скрипт обновления проекта "Спасатели" на VPS
# Использование: bash update.sh

set -e

echo "🔄 Обновление проекта СпасСлужба..."

# Цвета для вывода
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
    exit 1
}

# Проверка директории проекта
if [ ! -d "/var/www/rescuers" ]; then
    print_error "Директория проекта не найдена. Сначала выполните развертывание."
fi

cd /var/www/rescuers

# Получение обновлений из Git
echo "📥 Получение обновлений из Git..."
git pull origin main
print_success "Код обновлен"

# Установка новых зависимостей (если есть)
echo "📦 Проверка и установка зависимостей..."
npm install
print_success "Зависимости проверены"

# Сборка проекта
echo "🔨 Пересборка проекта..."
npm run build
print_success "Проект пересобран"

# Перезапуск PM2
echo "🚀 Перезапуск приложения..."
pm2 restart rescuers
print_success "Приложение перезапущено"

# Проверка статуса
echo "📊 Проверка статуса..."
sleep 3
pm2 status

# Тест доступности
echo "🧪 Тестирование доступности..."
if curl -f http://localhost:3002 > /dev/null 2>&1; then
    print_success "Приложение работает корректно"
else
    print_error "Ошибка: приложение недоступно. Проверьте логи: pm2 logs rescuers"
fi

print_success "Обновление завершено успешно!"
echo ""
echo "🔗 Приложение доступно по адресу: http://$(curl -s ifconfig.me):3002" 