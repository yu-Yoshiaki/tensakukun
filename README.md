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

curl -v -X POST https://api.line.me/v2/bot/richmenu/validate -H 'Authorization: Bearer iFa6n8zBXjhgNJ8Ie9sbcwt2gRVQwlTo8U1G1vfGSYMF6HZyV2CuctJtr0MlSmoXNnYxUNEbJPyt3iUKTtFJbi8WmEUKnhqfzAyH8dCv4fqLQWRJyMF/xWopa3CP3hQnPvbm0uiON+6VTdhKhlAPHgdB04t89/1O/w1cDnyilFU=' -H 'Content-Type: application/json' -d
