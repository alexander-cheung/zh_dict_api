# Chinese-English Dictionary API

api to query for the english definitions of an array of phrases in Traditional Chinese, using CC-CEDICT definitions

average time for a response is about 1 sec for cold starts, 40 ms for warm starts

## Sample Usage: 

`https://zh-en-dict-lgatheikg-alexander-cheung.vercel.app/api/translate?words=["孤獨","西瓜","休息", "gibberish"]`

## Sample Response: 
`["lonely/solitary","watermelon/CL:顆|颗,粒,個|个","rest/to rest", null]`
