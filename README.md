# Chinese-English Dictionary API

api to query for the english definitions of an array of phrases in Traditional Chinese, using CC-CEDICT definitions

average time for a response is about 1 sec for cold starts, 40 ms for warm starts

## Sample Usage: 

`https://zh-en-dict.vercel.app/api/translate?words=[null,"西瓜","再來"]&pinyin=true`

## Sample Response: 
`[null,"[xi1 gua1] watermelon/CL:顆|颗,粒,個|个","[zai4 lai2]"]`

if pinyin is set to true the api will try to return pinyin even if a definition isn't found

<br>

the characters from HSK 1-6 can also be requested:

## Sample Usage: 

`https://zh-en-dict.vercel.app/api/HSK?lists=[1, 2]&combine=false`

## Sample Response: 
`{"HSK_1":{"爱":true,"八":true,"爸爸":true, ...}, "HSK_2": {...}`

if combine is set to true, only one object will be returned, with all words in that object