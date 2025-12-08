# ✅ Stage 1: Build React App
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# ✅ Stage 2: Run with Nginx
FROM nginx:alpine

# Xóa config mặc định
RUN rm -rf /usr/share/nginx/html/*

# Copy file build sang nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]