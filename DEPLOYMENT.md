# Dream Cars Studio — Инструкция по деплою на Vercel

## Обзор

Проект представляет собой React SPA (Vite) в монорепозитории pnpm.  
Для хостинга нужна только **фронтенд часть** (`artifacts/dream-cars`).  
Бэкенд (`artifacts/api-server`) содержит только заглушку `/api/healthz` и для работы сайта **не требуется**.

---

## Шаг 1: Подготовка репозитория на GitHub

1. Создай репозиторий на GitHub (например, `dream-cars-studio`)
2. В папке проекта выполни:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dream-cars-studio.git
   git push -u origin main
   ```

---

## Шаг 2: Регистрация и импорт проекта на Vercel

1. Открой [vercel.com](https://vercel.com) → Sign Up (используй GitHub-аккаунт)
2. Нажми **"Add New Project"**
3. Выбери свой репозиторий `dream-cars-studio`
4. Нажми **Import**

---

## Шаг 3: Настройка параметров сборки в Vercel

В разделе **"Configure Project"** введи:

| Поле | Значение |
|------|----------|
| **Framework Preset** | `Other` |
| **Root Directory** | *(оставь пустым — корень репозитория)* |
| **Build Command** | `cd artifacts/dream-cars && pnpm run build` |
| **Output Directory** | `artifacts/dream-cars/dist/public` |
| **Install Command** | `npm install -g pnpm@10.18.0 && pnpm install --no-frozen-lockfile` |

> **Альтернатива**: Если хочешь более простую конфигурацию:
> - **Root Directory**: `artifacts/dream-cars`
> - **Build Command**: `pnpm run build`
> - **Output Directory**: `dist/public`
> - **Install Command**: `pnpm install`
> 
> В этом случае УДАЛИ зависимость `@workspace/api-client-react` из `artifacts/dream-cars/package.json` перед деплоем (она уже удалена ✅)

---

## Шаг 4: Переменные окружения

Для базовой версии (статический сайт) переменные окружения **не требуются**.

Если в будущем добавишь интеграции, добавь в Vercel → Settings → Environment Variables:

```
BASE_PATH=/
```

---

## Шаг 5: Деплой

Нажми **"Deploy"** и дождись завершения (обычно 1–2 минуты).

После деплоя Vercel выдаст URL типа `https://dream-cars-studio-xxx.vercel.app`.

---

## Шаг 6: Настройка кастомного домена

1. В Dashboard проекта → **Settings → Domains**
2. Нажми **"Add Domain"** → введи свой домен (например, `dreamcars.studio`)
3. Добавь DNS-записи у своего регистратора домена:
   - **A-запись**: `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Подожди 5–30 минут для распространения DNS

---

## Шаг 7: Обновление SEO-конфигурации

После подключения домена обнови следующие файлы:

### `artifacts/dream-cars/index.html`
Замени все упоминания `https://dreamcars.studio` на свой реальный домен.

### `artifacts/dream-cars/public/sitemap.xml`
Замени все `https://dreamcars.studio/` на свой реальный домен.

### `artifacts/dream-cars/public/robots.txt`
```
Sitemap: https://ВАШ_ДОМЕН/sitemap.xml
```

### `artifacts/dream-cars/src/hooks/use-page-meta.ts`
```ts
const SITE_URL = "https://ВАШ_ДОМЕН";
```

---

## Шаг 8: Что проверить после деплоя

- [ ] Сайт открывается по URL
- [ ] Навигация между страницами (`/services`, `/pricing`, `/portfolio`, `/about`, `/contact`) работает
- [ ] Изображения загружаются корректно
- [ ] Бургер-меню работает на мобильных
- [ ] Анимации плавные
- [ ] Форма на странице Контакты отправляется (mockup)
- [ ] Модальное окно записи открывается
- [ ] robots.txt доступен: `https://ВАШ_ДОМЕН/robots.txt`
- [ ] sitemap.xml доступен: `https://ВАШ_ДОМЕН/sitemap.xml`

---

## Автоматические деплои

После первой настройки каждый `git push` в ветку `main` будет автоматически деплоиться на Vercel.

Для тестирования изменений:
```bash
git add .
git commit -m "Update: ..."
git push origin main
```

---

## Известные особенности проекта

### Монорепозиторий pnpm
Проект использует pnpm workspaces. `artifacts/dream-cars` зависит от `lib/api-client-react`.  
Эта зависимость **удалена** из `package.json` — деплой должен работать без неё.

### BASE_PATH
По умолчанию `BASE_PATH=/`. Если сайт деплоится в поддиректорию (например, `/app`), укажи это в переменных окружения Vercel.

### SPA-роутинг
`vercel.json` настроен на перенаправление всех маршрутов на `index.html`.  
Это обеспечивает корректную работу `wouter` (клиентский роутер).

### Кэширование
Статичные ресурсы (`/assets/*`) кэшируются на 1 год (immutable).  
Изображения (`/images/*`) кэшируются на 7 дней.

---

## Решение частых проблем

### ❌ Build failed: ERR_PNPM_OUTDATED_LOCKFILE
Причина: Windows-специфичные пакеты (`@rollup/rollup-win32-x64-msvc` и др.) попали в `package.json` как `optionalDependencies` при запуске `pnpm install` на Windows, но в `pnpm-lock.yaml` они были записаны в `devDependencies`. Это несоответствие ломает `--frozen-lockfile` на Linux.

**Уже исправлено** — `optionalDependencies` удалены из root `package.json`, lockfile очищен, `vercel.json` использует `--no-frozen-lockfile`.

### ❌ 404 на прямых ссылках типа `/services`
`vercel.json` уже содержит `rewrites`. Убедись, что файл `vercel.json` находится в **корне репозитория**.

### ❌ Изображения не загружаются
Все изображения хранятся в `artifacts/dream-cars/public/`.  
Они копируются в `dist/public/` при сборке автоматически.

### ❌ Fonts не подключаются (CSP)
В `vercel.json` заголовки не ограничивают font-src. Если возникнут проблемы с CSP, добавь:
```json
{ "key": "Content-Security-Policy", "value": "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com" }
```

---

## Структура итоговой сборки

```
dist/public/
├── index.html              # Входная точка SPA
├── assets/                 # Хэшированные JS/CSS бандлы
│   ├── vendor-[hash].js    # React, React-DOM, Wouter
│   ├── motion-[hash].js    # Framer Motion
│   ├── icons-[hash].js     # Lucide React
│   └── index-[hash].css    # Tailwind CSS
├── images/                 # Статичные изображения
│   └── faq.png
│   └── fon.jpg
├── car-*.jpg               # Фотографии автомобилей
├── robots.txt
└── sitemap.xml
```

---

*Документация актуальна на 10 апреля 2026 года.*
