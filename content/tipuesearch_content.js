var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://mdecd2024.github.io/2a-midag7/ \n 網誌:  https://mdecd2024.github.io/2a-midag7/blog \n 簡報:\xa0 https://mdecd2024.github.io/2a-midag7/reveal \n 倉儲:\xa0 mdecd2024/2a-midag7: 2a-midag7 created by GitHub Classroom \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'W3文章翻譯', 'text': '41123144  P.12-22 \n', 'tags': '', 'url': 'W3文章翻譯.html'}, {'title': '各組員倉儲與靜態', 'text': '40923137 - (\xa0 倉儲 \xa0 / \xa0 網頁 \xa0) \n 41123141 - (\xa0 倉儲 \xa0 / \xa0 網頁 \xa0) \n 41123142 - (\xa0 倉儲\xa0 /  網頁  ) \n 41123143 - ( \xa0 倉儲\xa0 / \xa0 網頁   ) \n 41123144 - ( \xa0 倉儲\xa0 / \xa0 網頁 \xa0 ) \n 41123148 - (\xa0 倉儲\xa0 /\xa0 網頁 \xa0) \n 41123153 - (\xa0 倉儲\xa0 /\xa0 網頁 \xa0) \n 41123154 - (\xa0 倉儲\xa0 /  網頁  ) \n \n', 'tags': '', 'url': '各組員倉儲與靜態.html'}, {'title': 'W4分組任務', 'text': '\n 影片填上字幕 \n 上傳逐字稿.txt \n 心得摘要 \n \n', 'tags': '', 'url': 'W4分組任務.html'}, {'title': '41123141', 'text': '自評分數:68 \n \n 1. 說明甲班第一組組長如何建立 midagi Team 13:24 \n \n \n \n \xa0說明甲班第一組組長如何建立 midagi Team之逐字稿 \n \n 心得摘要: 利用 github Classroom 建立組別倉儲 ,如何利用 Codespaces 改版自己的倉儲 . \n *\xa0\xa0 用 Codespaces 開啟動態 \n \xa01.\xa0 chmod u+x init_replit \n \xa02.\xa0 ./init_replit \n \xa03. python3 main.py \n *\xa0 \xa0 用 Codespaces 開啟靜態 \n \xa01. python3 -m http.server \n *\xa0 \xa0如何改版 \n 1. git status \n 2. git add . \n 3. git commit -m "新增的的內容" \n 4. git push \n \n \xa0\xa0\xa0 \n \n 2. 如何利用近端可攜系統維護分組網站  14:18 \n \n \n <<<<<<< HEAD \n \n 心得摘要: \n 利用代理主機的方式 ,  先用 Puttygen  建立一把  key  然後把  key  存 ( .ppk ) 裡來 ,  利用 Putty 把 key 導進去 ,  進去  regedit  裡的   HKEY_CURRENT_USER\\Software\\SimonTatham\\PuTTY\\Sessions\\github.com  匯出成  reg 檔 ,  如何用近端改版 \n \n Cd tmp \n Git clone – recurse-submodule  git@github.com:mdecd2024/2a-midag1.git \n Cd 2a-midag1 \n Cms( 會有一個獨立編輯的 9443 在  https) \n \n 如果要推 \n \n Git add . \n Git commit -m “自己要推的東西” \n Git push \n \n 讓這台短腦有權限推 \n \n Ipconfig( ipv4 網址-因為每個人都有自己的 ipv4 ) \n 跑到 tmp -組別-下的py \n 抓出來(把自己的 ipv4 環境導入) \n 在  Cms  一次 ,  每個人都可以更新 \n \n', 'tags': '', 'url': '41123141.html'}, {'title': '41123142', 'text': '設定Replit Github應用授權的說明影片2:44 \n 影片: https://reccloud.com/tw/u/jw7bxyz \n 逐字稿: https://drive.google.com/file/d/1qbrSS6qTYldt--RfGP42r9AeL8a5inCM/view?usp=drive_link \n \n 說明如何利用Replit對cd2024改版20:16 \n 影片: https://reccloud.com/tw/u/e0mr8wr \n 逐字稿: https://drive.google.com/file/d/1YtrscSwhE7WdaAHfkzsl-YsJJnuY-QUP/view?usp=drive_link \n \n 使用Github維護個人網站10:21 \n 影片: https://reccloud.com/tw/u/55k9sf3 \n 逐字稿: https://drive.google.com/file/d/1m9mJ_p5qS8vH4o-E8LtSfas7qGiFCeHJ/view?usp=drive_link \n \n 心得: 個人的cd2024倉儲以Github帳號登入Gitpod之後，就可以直接維護 \n', 'tags': '', 'url': '41123142.html'}, {'title': '41123143', 'text': '1.如何設定個人倉儲中的 Pelican 網誌 12:51 \n \n 逐字稿1 \n 2.說明如何設定 Github 雙重認證\xa0 6:28 \n \n 逐字稿2 \n 3.如何將 41123130 的個人倉儲設為2a-miding?分組倉儲的子模組 12:11 逐字稿3 \n \n \n \n', 'tags': '', 'url': '41123143.html'}, {'title': '41123144', 'text': '將組員的個人倉儲納入分組倉儲的子模組  7:11 \n 如何將組員的個人倉儲納入分組倉儲成為子模組.txt \n 如何在 replit 自設 ssh 維護分組倉儲  27:46 \n 如何在 Replit 維護分組倉儲.txt \n 心得:如果同組人員同時使用 Replit 與 codespaces 維護網站,可能會造成雙方版本不一 \n', 'tags': '', 'url': '41123144.html'}, {'title': '41123148', 'text': 'w2 利用 codespaces 維護分組網站 \n \n 利用 codespaces 維護分組網站逐字稿 \n \n w3 如何利用 Gidpod 維護分組網站 \n \n 如何利用 Gidpod 維護分組網站逐字稿 \n', 'tags': '', 'url': '41123148.html'}, {'title': '41123153', 'text': '自評分數：60 \n 利用分組協同建立 LaTeX 報告 25:01 \n \n 利用分組協同建立 LaTeX 報告_逐字稿 \n 簡介 Odoo PLM 用法 6:45 \n \n odoo plm簡介_逐字稿 \n 心得：感謝老師仔細介紹給我們非常適合協同的網站，至於怎麼使用還有點陌生，以後會多多觀看老師影片努力學習 \n', 'tags': '', 'url': '41123153.html'}, {'title': 'OnShape', 'text': '', 'tags': '', 'url': 'OnShape.html'}, {'title': 'Replit', 'text': '\n https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};