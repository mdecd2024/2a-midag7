var tipuesearch = {"pages":[{"title":"2024 Spring 課程 w7","text":"2024 Spring 協同產品設計實習課程教導, w1-w6內容統整 w1-w6內容統整 老師所講的內容統整.","tags":"w7","url":"./41123141_w7.html"},{"title":"2024 Spring 課程 w6","text":"2024 Spring 協同產品設計實習課程教導, 分組網誌的統整、 Github Actions 帶有子模組的 main.yml 設定. Github Actions 帶有子模組的 main.yml 設定 我們所寫的內容丟到個人倉儲, 加上我們有把自己的子模組倒入分組倉儲, 加入取子模組內容的 main.yml 設定把我們所寫的內容整合起來. 其中加入取子模組內容的設定為: 範例:2b-midbg4 cd_report.tex 中的範例報告第一章, 取自其組員分組網站中的 latex 目錄, 且圖片檔案也是沿用分組倉儲中的設定, 取自組員 images 目錄. 網誌的統整 如何把每個人的網誌整合到分組倉儲內, 整合前先把每個人子模組所連到的倉儲更新到現在狀態, 再利用 pelicanconf py 整合各組員的網誌.","tags":"w6","url":"./41123141_w6.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統6 ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"w6","url":"./41123142_w6.html"},{"title":"2024 Spring 課程 w5","text":"2024 Spring 協同產品設計實習課程教導, 教學內容為先前影片整理、分組網誌的統整. 影片整理 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 * 需再加上自評 如何統整組員子模組中的協同設計網誌 每人每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. 實際的設定操作 pelicanconf_py.txt, 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. 過程中, 各組員必須將個別的網誌 .md 檔案名稱前加上字串(不然資料會亂), 例如: \"學號_\" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. 利用 NX1872 協同繪製零組件 老師所提供 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. (電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12)","tags":"w5","url":"./41123141_w5.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統5 ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midagx_report.pdf 的製作. 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"w5","url":"./41123142_w5.html"},{"title":"2024 Spring 課程 w4","text":"2024 Spring 協同產品設計實習課程教導, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 與本週分組作業. 分組任務 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. * 方法一 - Replit * 方法二 - Codespaces * 方法三 - Gitpod * 方法四 - localhost 以上為第四周內容","tags":"w4","url":"./41123141_w4.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統4 協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. w4 2a 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. 各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料.","tags":"w4","url":"./41123142_w4.html"},{"title":"W4課程內容","text":"將教學影片上字幕並打逐字稿 組員分工合作把這學期老師錄製過的影片上字幕，並整理出逐字稿 負責影片: 1. 如何設定個人倉儲中的 Pelican 網誌 12:51 2.說明如何設定 Github 雙重認證 6:28 3.如何將 41123130 的個人倉儲設為2a-miding?分組倉儲的子模組 12:11","tags":"w4","url":"./41123143_w4.html"},{"title":"2024 Spring 課程 w3","text":"2024 Spring 協同產品設計實習課程教導, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 子模組 如何利用 Github Codespaces 建立, cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站. 先 git submodule add 自己的倉儲空格學號, git add . , git commit -m \"add 學號 submodule\" , 最後在 git push . 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midbgx_report.pdf 的製作. 以上為第三周內容","tags":"w3","url":"./41123141_w3.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統3 2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. cd2024 期中分組倉儲與網站 上列連結使用 [Brython] 程式語法, 可直接在網頁中列出特定連結內容, 所採用的程式碼如下:","tags":"w3","url":"./41123142_w3.html"},{"title":"W3課程內容","text":"第三週做分組倉儲子模組和翻譯資料 1.將個人倉儲設為分組倉儲的子模組 2.組員們分工合作翻譯 此資料 ，做成中英文並列(LaTeX)，並放在個人倉儲網站，最後整合出pdf檔案放在分組倉儲","tags":"w3","url":"./41123143_w3.html"},{"title":"2024 Spring 課程 w2","text":"2024 Spring 協同產品設計實習課程教導, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 利用 Codespaces 維護倉儲與網站 利用 init_replit 指令安裝所需 Python 模組 啟動動態 指令 1.chmod u+x init_replit 2. ./init_replit 3. Python3 main.py 靜態 指令 Python3 -m http.server Push 指令 1.git add . 2. git commit -m \" add+你要推的內容 \" 3. git push 以上為第二周內容","tags":"w2","url":"./41123141_w2.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統2 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1, 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1. 說明甲班第一組組長如何建立 midag1 Team, 並利用 Codespaces 維護 2a-midag1 分組倉儲 說明如何利用 Replit 管理從 Classroom 取得的分組倉儲 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 在近端執行動態網站 說明如何利用近端可攜系統維護分組網站","tags":"w2","url":"./41123142_w2.html"},{"title":"W2課程內容","text":"第二週完成分組並創建組別倉儲，和維護倉儲和網站 加入組別( midag7 )並使自己擁有改版的權限 使用 近端可攜系統 與 外部IPv4 開啟動態網站","tags":"w2","url":"./41123143_w2.html"},{"title":"2024 Spring 課程 w1","text":"2024 Spring 協同產品設計實習課程教導, 如何建立倉儲和利用 import 至 Replit進行改版、設定網誌與Odoo PLM 在機械設計流程中的應用. 建立個人課程倉儲 登入到自己的github, 連結到[https://github.com/mdecycu/cmsimde_site] (Teams也有貼) , 再利用 Template (連結點進去右上角) 作為倉儲, 打上 cd2024 為名稱, 進去後到設定裡的 pages 把 main 分支設為網頁根目錄靜態就跑出來了. 如何將倉儲 import 至 Replit 由 Replit 帳號下的設定, 底下有個 Connected Services(連線服務) 點選 Connect 後 (有連結過會出現 Disconnect ) , 讓 Github 授權給 Replit 可在 Replit 中進行改版, 改版後就有權限推回自己的網站. import 完如何進行改版 import 完會有 Webview 跑出來這就是自己的動態網站 (由這可增加或修改內容) , 點進去後打 admin 就可增加 (也就是改版) 你所要的內容, 當你打完你要的內容後右上角有個 Convert 點一下轉為靜態 (這要點, 不然你從動態推到靜態會沒有東西) , 到 Replit 的 Git 中輸入新增的內容後 Push , 等待一下就可以在靜態看到剛剛增加的內容. 建立網誌 我們所使用的網誌系統 (Pelican) , markdown 目錄是一個原始檔 (撰寫網誌範本) , 新增完的內容轉換後會位於在 blog 下的目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關設定檔有: pelicanconf.py (更改網誌名稱) 與 publishconf.py (增加靜態連結) 等, 在設定網誌同時要依據自己的 github 帳號對上述三個.py 去做設定動作. Odoo PLM 功能 畢竟這個程式這學期才用, 當然帳號是以學號加上 nfu.edu.tw 去建立的, 期中和期末個做一樣模擬出來, 要新增一個產品網頁 (已建立) , 依模擬產品去分配給組員做 (會收到 emlig 的訊息) 回傳至 odoo PLM 裡 以上為第一周內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123141_w1.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統1 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. ## 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123142_w1.html"},{"title":"2a-midag7 w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2a-midag7_2024-Spring-w1-blog-tutorial.html"},{"title":"W1課程內容","text":"開學第一週建立個人倉儲和用Replit進行改版 1.加入課程的Teams 課程代碼:p0961sy 2.建立個人倉儲 3.下載可攜檔案 4.將倉儲 import 至 Replit並進改版 5.更改網誌","tags":"w1","url":"./41123143_w1.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123143_w0.html"}]};