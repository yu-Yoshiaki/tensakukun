# pocket-online

- Next.js
- TypeScript
- ESLint
- Prettier
- Jest
- Tailwind CSS
- LIFF

# supabase の型抽出（ URL は""で囲う ）

npx openapi-typescript "SUPABASE_URL/rest/v1/?apikey=SUPABASE_ANON_KEY" --output src/type/supabase.ts

npx openapi-typescript "https://vpxyovqhreblordyqpdo.supabase.co/rest/v1/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweHlvdnFocmVibG9yZHlxcGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg4MTIzODYsImV4cCI6MTk3NDM4ODM4Nn0.oNKLmHJelFDzFB2-eoZDiPcf3TlOFWwrydlz6wov3rw" --output src/type/supabase.ts

# Supabase フロント（anon キー）とサーバー（シークレットキー）の使い分け

Supabase の Row Level Security（以下 RLS） は、フロント（anon キー）からのアクセスを制限するもの。
RLS を利用し、他社の情報への CRUD を無効に。

一方、流入経路 URL は、各社の「顧客」がアクションした際にデータベースの更新を行う仕様である。
各社のログイン状況、認証情報に関係なく CRUD をする必要がある。
そのため、流入経路に関してはポリシーに関与しないサーバー側で CRUD を使用している。
