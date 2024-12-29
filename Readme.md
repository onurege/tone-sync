# Tone Sync - Website İçerik & Marka Tınısı Analizi

## 🎯 Proje Özeti
Tone Sync, web sitelerinin içerik kalitesini, marka tutarlılığını ve ton uyumunu yapay zeka ile analiz eden bir SaaS platformudur.

## 🛠️ Teknoloji Stack

### Frontend
- [x] React.js
- [x] TypeScript
- [x] Material-UI
- [x] Redux Toolkit (Durum yönetimi)
- [x] Axios (API istekleri)
- [x] React Query (Veri yönetimi)
- [ ] Chart.js (Veri görselleştirme)

### Backend
- [ ] Node.js
- [ ] Express.js
- [ ] MongoDB (Veritabanı)
- [ ] OpenAI API (ChatGPT entegrasyonu)
- [ ] JWT (Kimlik doğrulama)
- [ ] Redis (Önbellekleme)
- [ ] Bull (İş kuyruğu yönetimi)

## 📍 Geliştirme Yol Haritası

### Faz 1: Temel Altyapı (2-3 Hafta)
- [x] Frontend projesinin kurulumu (Create React App)
- [x] Temel UI bileşenlerinin oluşturulması
- [x] Routing yapısının kurulması
- [x] Redux store kurulumu
- [x] Kullanıcı kimlik doğrulama sistemi (UI)
- [ ] Backend projesinin kurulumu (Express.js)
- [ ] Veritabanı şemasının tasarlanması
- [ ] OpenAI API entegrasyonu
- [ ] Temel API endpoint'lerinin oluşturulması

### Faz 2: Temel Özellikler (3-4 Hafta)
- [ ] URL analiz sistemi
- [ ] Web scraping altyapısı
- [ ] Metin analiz modülü
- [ ] Basit raporlama sistemi
- [x] Kullanıcı dashboard'u
- [ ] Temel analiz sonuçları görselleştirmesi

### Faz 3: İleri Özellikler (4-5 Hafta)
- [ ] Site haritası (sitemap.xml) desteği
- [ ] Toplu sayfa analizi
- [ ] Gelişmiş raporlama sistemi
- [ ] PDF rapor oluşturma
- [ ] Marka tınısı karşılaştırma modülü
- [ ] SEO önerileri modülü

### Faz 4: Premium Özellikler (3-4 Hafta)
- [ ] Rakip analizi sistemi
- [ ] Otomatik periyodik analiz
- [ ] İçerik yeniden yazma önerileri
- [ ] API entegrasyonu
- [ ] Özelleştirilebilir raporlar
- [ ] Gelişmiş dashboard özellikleri

## 🚀 Kurulum

### Gereksinimler
- Node.js (v16+)
- MongoDB
- Redis
- npm veya yarn

### Frontend Kurulum
```bash
# Projeyi klonlayın
git clone [repo-url]

# Frontend dizinine gidin
cd frontend

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

### Backend Kurulum
```bash
# Backend dizinine gidin
cd backend

# Bağımlılıkları yükleyin
npm install

# .env dosyasını oluşturun
cp .env.example .env

# Geliştirme sunucusunu başlatın
npm run dev
```

## 📦 Proje Yapısı

```
tone-sync/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   └── public/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
└── docs/
```

## 🔑 Ortam Değişkenleri

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
```

### Backend (.env)
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/tone-sync
OPENAI_API_KEY=your-api-key
JWT_SECRET=your-jwt-secret
REDIS_URL=redis://localhost:6379
```

## 📝 API Dokümantasyonu
API dokümantasyonu için [API.md](./docs/API.md) dosyasına bakınız.

## 🤝 Katkıda Bulunma
1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit'leyin (`git commit -m 'feat: add amazing feature'`)
4. Branch'e push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.


