# Node.js tabanlı bir imaj kullanın
FROM node:14

# Uygulama dizinini oluşturun ve çalışma dizini olarak ayarlayın
WORKDIR /app

# Gerekli bağımlılıkları kopyalayın ve yükleyin
COPY package*.json ./
RUN npm install

# Uygulama kaynak kodunu kopyalayın
COPY . .

# Uygulamayı oluşturun
RUN npm run build

# Port 80'i dış dünyaya açın
EXPOSE 5173

# Uygulamayı başlatın
CMD ["npm", "run","dev"]
