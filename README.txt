api to query for the english definitions of an array of phrases in Traditional Chinese, using CC-CEDICT definitions

average time for a response is about 1 sec for cold starts

usage: https://zh-en-dict-lgatheikg-alexander-cheung.vercel.app/api/translate?words=JSON_ARRAY_OF_PHRASES

response: JSON array of definitions, null for words with no definition

example: 
https://zh-en-dict-lgatheikg-alexander-cheung.vercel.app/api/translate?words=["孤獨","西瓜","休息", "gibberish"]

response: ["lonely/solitary","watermelon/CL:顆|颗,粒,個|个","rest/to rest", null]