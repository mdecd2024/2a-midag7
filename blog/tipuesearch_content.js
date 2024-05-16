var tipuesearch = {"pages":[{"title":"2024 Spring 課程 第七週","text":"2024 Spring 協同產品設計實習課程. 課程統整 W1-W6 課程回顧 本週停課一次 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w7","url":"./41123144-w7.html"},{"title":"2024 Spring 課程 w10","text":"2024 Spring 協同產品設計實習課程教導, 建立各班學員的倉儲、網站與分組連結、鋼球平衡台 PID 控制與模擬、鋼球平衡台零組件繪圖. 任務一 根據老師所給的 2a.txt 裡的['學號', 'Github 帳號', '組別'], 以下是利用 Python 寫的初步資料數列. from browser import window, ajax def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 並列出-學員倉儲連結/學員網站連結/2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 下列程式碼是加上了生成 HTML 元素的程式碼，以及學員倉庫連結和網站連結的模板： from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) # 生成 HTML 元素 generate_html(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 生成 HTML 元素 def generate_html(data): brython_div = document[\"brython_div1\"] course_title = \"cd2024\" for student_id, github_username, group in data: # 如果GitHub用戶名為空，將其設置為\"000\" github_username = github_username if github_username else \"000\" # 創建網址和倉庫的鏈接 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 生成HTML元素並插入到div中 brython_div <= html.A(student_id, href=site_url) + \" | \" + \\ html.A(\"GitHub Repo\", href=repo_url) + \" | \" + \\ html.A(\"Group Repo\", href=group_repo_url) + html.BR() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 這段程式碼會從 CSV 檔案中讀取學員的基本資料（學號、GitHub 帳號、組別），然後使用 for 迴圈生成 HTML 元素，並將這些元素插入到網頁中。你可以根據需要修改 generate_html 函式中的 HTML 元素結構，以符合你的需求。 任務二 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 摘要內容 : 通過實施自動控制理論穩定動態系統時的局限性, 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 摘要內容 : 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 摘要內容 : 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 文章四：Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 摘要內容：開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 摘要內容 : 平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 摘要內容 : 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 任務三","tags":"w10","url":"./41123141_w10.html"},{"title":"w10課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統10 協同產品設計實習第十週實習操作, 透過 ChatGPT、Gemini 1.5 Pro 與 Claude 3 的協助下進行. W10 起 Replit 已經可以用來維護分組倉儲 建立各班學員的倉儲、網站與分組連結 這是 W10 實習的任務一: 已知: 2b 初步資料放入數列 可以將 2b.txt 即時資料取出, 並且將每一行隔開後, 逐一放入數列. 後續處理: 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 學員倉儲連結 template: https://github.com/學員帳號/cd2024 學員網站連結 template: https://學員帳號.github.io/cd2024 2b 分組倉儲連結 template: https://github.com/mdecd2024/2b-midbg組別 2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別","tags":"w10","url":"./41123142_w10.html"},{"title":"2024 Spring w10","text":"協同產品設計實習第十週實習操作, 透過 ChatGPT、Gemini 1.5 Pro 與 Claude 3 的協助下進行. W10任務 一. 透過 for 重複迴圈, 從資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 學員倉儲連結 template: https://github.com/學員帳號/cd2024 學員網站連結 template: https://學員帳號.github.io/cd2024 2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 二. 閱讀 文章 後請將摘要內容放入個人與分組網誌中.","tags":"w10","url":"./41123148-w10.html"},{"title":"cd2024 W9","text":"記錄第9週老師上課內容以及學生做了什麼 W9上課內容 1.期中考週，老師讓我們在 Excel 打上自評分數，並將其餘時間給學生自行完成作業 學生做了什麼 1.將 ODOO PLM 論文中英並列任務 的資料放到自己的網站上","tags":"w9","url":"./41123153_w9.html"},{"title":"w9課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統9 期中成績自評","tags":"w9","url":"./41123142_w9.html"},{"title":"2024 Spring w8","text":"2024 Spring 課程日誌w9 期中 分組影片報告 每位組員各一分鐘的影片報告放到各分組網誌, 說明已經完成的個人與團隊分配任務製作結果.","tags":"w9","url":"./41123148-w9.html"},{"title":"W9課程內容","text":"期中考週 把前半學期該做的事項弄好 這週製作 期中影片","tags":"w9","url":"./41123143_w9.html"},{"title":"2024 Spring 課程 w8","text":"2024 Spring 協同產品設計實習課程教導, 協同設計的架構上, 個人與分組的倉儲中. 協同上需要的內容 從協同設計的架構上, 個人與分組的倉儲中, 總共設計了以下幾種內容的協同模式: 1.分組網站內容的協同 2.分組報告內容的協同 3.分組產品設計的 PLM 協同 4.分組零組件設計的協同 5.分組模擬場景設計的協同 6.分組專案簡報設計的協同","tags":"w8","url":"./41123141_w8.html"},{"title":"cd2024 W8","text":"記錄第8週老師上課內容以及學生做了什麼 W8上課內容 1.產品協同架構說明 學生做了什麼 1.將 ODOO PLM 論文中英並列任務 翻譯完成","tags":"w8","url":"./41123153_w8.html"},{"title":"2024 Spring w8","text":"2024 Spring 課程日誌w8 個人與分組的倉儲中, 總共設計了以下幾種內容的協同模式: 分組網站內容的協同 - 其中包括章節式的網站內容與網誌內容, 可以透過 Python 程式方法整合各學員子模組中的 config/content.htm 以及 markdown/*.md 檔案至分組網站中 分組報告內容的協同 - 採用的是 Github Actions 與近端 MikTeX 中的 xelatex 將 .tex 轉為 pdf 的整合過程 分組產品設計的 PLM 協同 - 採用的是 Odoo PLM 模組, 讓各分組可以將網站內容、報告內容視為產品, 從協同架構的訂定作為起點, 完成資料展示作為終點, 逐一將過程的協調、派任與執行方法納入 PLM 系統管理 分組零組件設計的協同 - 分別採用 Solvespace 作為鋼球平衡台範例, 讓學員使用 Siemens NX 1872 進行協同零組件繪圖設計, 並將各零件的 .prt 檔案納入各學員的倉儲進行組立, 以便找出最佳的設計分工以及零組件轉檔流程 分組模擬場景設計的協同 - 當各分組順利完成鋼球平衡台的零組件轉檔後, 一旦進入 CoppeliaSim 場景後, 必須逐一配置感測器 (Sensors)、致動器 (Actuators) 以及 ZMQ RemoteAPI Python程式, 主要探討如何將此一場景模擬過程在 CoppeliaSim XML 檔案格式與 Siemens NXOpen Python 零件程式檔案間, 找到合用或最佳的協同產品設計模式. 分組專案簡報設計的協同 - 在上述各產品設計階段所累積的各種資料, 該如何有效整合到專案完成後必須進行的網際簡報中.","tags":"w8","url":"./241123148-w8.html"},{"title":"w8課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統8 協同產品設計實習課程使用網際內容管理系統, 採 Github Classroom 建立分組倉儲, 並由學員自行利用 cmsimde_site 作為 Github 倉儲的引擎目錄, 利用 Python 執行網頁編輯. 之後再轉檔為靜態網頁, 以便利用 Github Pages 所提供的 WWW 伺服器呈現協同產品設計過程的相關多媒體內容. 除了章節式的網站外, cmsimde_site 還額外利用 Pelican 管理使用者所建立的網誌, 以及利用 Reveal 管理使用者所建立的網際簡報. 在使用者每週的內容管理過程, 由於必須採用 Python 執行網頁編輯, cd2024 課程採用了四種不同的方法進行, 其中包括 Replit、Codespaces、Gitpod 以及 localhost. 由於前三者屬於雲端作業, 各有不同的使用規定與免費使用權限, 對於多人協同的產品設計團隊而言, 可以根據各自的喜好與環境選擇合用的網頁編輯工具, 且在多方了解下也可透過實際使用發展中的雲端 IDE 環境, 一窺未來可能的 AI 導引前景. 從協同設計的架構上, 個人與分組的倉儲中, 總共設計了以下幾種內容的協同模式: 1.分組網站內容的協同 - 其中包括章節式的網站內容與網誌內容, 可以透過 Python 程式方法整合各學員子模組中的 config/content.htm 以及 markdown/*.md 檔案至分組網站中 2.分組報告內容的協同 - 採用的是 Github Actions 與近端 MikTeX 中的 xelatex 將 .tex 轉為 pdf 的整合過程 3.分組產品設計的 PLM 協同 - 採用的是 Odoo PLM 模組, 讓各分組可以將網站內容、報告內容視為產品, 從協同架構的訂定作為起點, 完成資料展示作為終點, 逐一將過程的協調、派任與執行方法納入 PLM 系統管理 4.分組零組件設計的協同 - 分別採用 Solvespace 作為鋼球平衡台範例, 讓學員使用 Siemens NX 1872 進行協同零組件繪圖設計, 並將各零件的 .prt 檔案納入各學員的倉儲進行組立, 以便找出最佳的設計分工以及零組件轉檔流程 5.分組模擬場景設計的協同 - 當各分組順利完成鋼球平衡台的零組件轉檔後, 一旦進入 CoppeliaSim 場景後, 必須逐一配置感測器 (Sensors)、致動器 (Actuators) 以及 ZMQ RemoteAPI Python程式, 主要探討如何將此一場景模擬過程在 CoppeliaSim XML 檔案格式與 Siemens NXOpen Python 零件程式檔案間, 找到合用或最佳的協同產品設計模式. 6.分組專案簡報設計的協同 - 在上述各產品設計階段所累積的各種資料, 該如何有效整合到專案完成後必須進行的網際簡報中.","tags":"w8","url":"./41123142_w8.html"},{"title":"W8課程內容","text":"把先前的事項弄好 整合網誌、影片上字幕和逐字稿等等","tags":"w8","url":"./41123143_w8.html"},{"title":"2024 Spring 課程 w7","text":"2024 Spring 協同產品設計實習課程教導, w1-w6內容統整 w1-w6內容統整 老師所講的內容統整.","tags":"w7","url":"./41123141_w7.html"},{"title":"cd2024 W7","text":"記錄第7週老師上課內容以及學生做了什麼 W7上課內容 因清明節放假，暫停上課一次","tags":"w7","url":"./41123153_w7.html"},{"title":"W7課程內容","text":"連假，此天不上課 把先前要做的事情完成","tags":"w7","url":"./41123143_w7.html"},{"title":"2024 Spring w7","text":"2024 w7 清明連假 兒童節快樂","tags":"w7","url":"./41123148-w7.html"},{"title":"2024 Spring 課程 w6","text":"2024 Spring 協同產品設計實習課程教導, 分組網誌的統整、 Github Actions 帶有子模組的 main.yml 設定、更新分組倉儲中的分組倉儲. Github Actions 帶有子模組的 main.yml 設定 我們所寫的內容丟到個人倉儲, 加上我們有把自己的子模組倒入分組倉儲, 加入取子模組內容的 main.yml 設定把我們所寫的內容整合起來. 其中加入取子模組內容的設定為: 範例:2b-midbg4 cd_report.tex 中的範例報告第一章, 取自其組員分組網站中的 latex 目錄, 且圖片檔案也是沿用分組倉儲中的設定, 取自組員 images 目錄. 網誌的統整 如何把每個人的網誌整合到分組倉儲內, 整合前先把每個人子模組所連到的倉儲更新到現在狀態, 再利用 pelicanconf py 整合各組員的網誌. 更新分組倉儲中的分組倉儲 cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 先前我們有把每個人的倉儲利用子模組導入組別倉儲, 即使你自己的倉儲有更新內容, 也不會顯示目前更新次數, 如何讓子模組同步就利用 update 更新到最新版本. git submodule update --init cd 學號 git pull origin main cd .. git status git add . git commit -m \"update 學號 子模組\" git push 就完成更新目前的倉儲","tags":"w6","url":"./41123141_w6.html"},{"title":"cd2024 W6","text":"記錄第6週老師上課內容以及學生做了什麼 W6上課內容 1.老師錄了兩支新的教學影片:取下子模組, 以及更新學員倉儲內容、利用 pelicanconf py 整合各組員的網誌 2.老師給學生一些時間把未完成的分組任務繼續進行 學生做了什麼 1.上禮拜因為沒有推成功導致編輯的資料都不見，這禮拜重新再編輯一次並推成功，刷新網頁後有影片及逐字稿可以觀看","tags":"w6","url":"./41123153_w6.html"},{"title":"w6課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統6 ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"w6","url":"./41123142_w6.html"},{"title":"2024 Spring 課程 第六週","text":"2024 Spring 協同產品設計實習課程. 更新分組倉儲 利用 Codespace 更新分組倉儲內的子模組 統整分組網誌 利用 Codespace 把成員的子模組改版 , 再利用 pelicalconf.py 統整組員的網誌. 以上為第六週內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w6","url":"./41123144-w6.html"},{"title":"W6課程內容","text":"第六週做網誌的統整、 Github Actions 帶有子模組的 main.yml 設定 1.Github Actions 帶有子模組的 main.yml 設定 2.把每個人的網誌整合到分組倉儲內, 整合前先把每個人子模組所連到的倉儲更新到現在狀態, 再利用 pelicanconfpy整合各組員的網誌.","tags":"w6","url":"./41123143_w6.html"},{"title":"2024 Spring w6","text":"2024 Spring 課程日誌w6 在分組倉儲中取下子模組, 以及更新學員倉儲內容 教學影片 git submodule up","tags":"w6","url":"./41123148-w6.html"},{"title":"2024 Spring 課程 w5","text":"2024 Spring 協同產品設計實習課程教導, 教學內容為先前影片整理、分組網誌的統整. 影片整理 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 * 需再加上自評 如何統整組員子模組中的協同設計網誌 每人每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. 實際的設定操作 pelicanconf_py.txt, 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. 過程中, 各組員必須將個別的網誌 .md 檔案名稱前加上字串(不然資料會亂), 例如: \"學號_\" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. 利用 NX1872 協同繪製零組件 老師所提供 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. (電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12)","tags":"w5","url":"./41123141_w5.html"},{"title":"cd2024 W5","text":"記錄第5週老師上課內容以及學生做了什麼 W5上課內容 1.老師錄了一支新的教學影片:組員在 Replit 以 SSH 設定管理分組倉儲的權限 2.老師將之前的教學影片整理在 網誌 方便學生查看 3.老師給學生一些時間把未完成的分組任務繼續進行 學生做了什麼 1.將影片及逐字稿各上傳到 youtube 以及 OenDrive，開啟動態網站將youtube、逐字稿連結放到分組網站上並加上自評分數，轉靜態後推上即完成","tags":"w5","url":"./41123153_w5.html"},{"title":"w5課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統5 ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midagx_report.pdf 的製作. 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"w5","url":"./41123142_w5.html"},{"title":"2024 Spring 課程 第五週","text":"2024 Spring 協同產品設計實習課程. 利用 NX1872 協同繪製零組件 從電腦輔助設計室中電腦的 C 取得 NX 套件目錄檔案並存放於隨身碟中 , 透過網路授權及可使用. 統整分組網誌 利用 Codespace 把成員的子模組改版 , 再利用 pelicalconf.py 統整組員的網誌. 以上為第五週內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w5","url":"./41123144-w5.html"},{"title":"2024 Spring w5","text":"2024 Spring 課程日誌w5 分組任務-教學影片分組整理並自評 各組對發布的教學影片, 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 成果: 小組網站分頁","tags":"w5","url":"./41123148-w5.html"},{"title":"W5課程內容","text":"第三週做影片整理和分組網誌的統整 1.將這學期錄製的教學影片上字幕並整理出逐字稿 如何設定個人倉儲中的 Pelican 網誌 12:51 逐字稿1 Github 帳號的雙重認證 逐字稿2 如何將 41123130 的個人倉儲設為2a-miding?分組倉儲的子模組 12:11 逐字稿3 2.把每個人的網誌整合到分組倉儲內, 整合前先把每個人子模組所連到的倉儲更新到現在狀態, 再利用 pelicanconfpy整合各組員的網誌.","tags":"w5","url":"./41123143_w5.html"},{"title":"2024 Spring w4","text":"2024 Spring 課程日誌w4 文章英文的中文翻譯 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章英文的中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作 翻譯文章 利用 Codespaces 維護小組倉儲與網站 使用Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 使用https 小組網頁 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式.","tags":"w4","url":"./41123148-w4.html"},{"title":"2024 Spring 課程 w4","text":"2024 Spring 協同產品設計實習課程教導, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 與本週分組作業. 分組任務 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. * 方法一 - Replit * 方法二 - Codespaces * 方法三 - Gitpod * 方法四 - localhost 以上為第四周內容","tags":"w4","url":"./41123141_w4.html"},{"title":"cd2024 W4","text":"記錄第4週老師上課內容以及學生做了什麼 W4上課內容 1.老師統整了維護倉儲的各種方式，包括 replit、codespaces 等 2.發布分組任務：在老師的教學影片中加上字幕並發佈到分組網頁上 學生做了什麼 1.組長讓我們使用 RecCloud 這款免費生成字幕的網頁進行編輯 2.編輯字幕的同時也完成逐字稿編寫","tags":"w4","url":"./41123153_w4.html"},{"title":"w4課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統4 協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. w4 2a 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. 各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料.","tags":"w4","url":"./41123142_w4.html"},{"title":"2024 Spring 課程 第四週","text":"2024 Spring 協同產品設計實習課程. 教學影片整理 各組將第一週到第三週的教學影片各自進行整理並組內分工 , 將自己負責的影片打上字幕及逐字稿. 以上為第四週內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w4","url":"./41123144-w4.html"},{"title":"W4課程內容","text":"將教學影片上字幕並打逐字稿 組員分工合作把這學期老師錄製過的影片上字幕，並整理出逐字稿 負責影片: 1. 如何設定個人倉儲中的 Pelican 網誌 12:51 逐字稿1 2.[說明如何設定 Github 雙重認證 6:28] 逐字稿2 3. 如何將 41123130 的個人倉儲設為2a-miding?分組倉儲的子模組 12:11 逐字稿3","tags":"w4","url":"./41123143_w4-blog-tutorial.html"},{"title":"2024 Spring 課程 w3","text":"2024 Spring 協同產品設計實習課程教導, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 子模組 如何利用 Github Codespaces 建立, cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站. 先 git submodule add 自己的倉儲空格學號, git add . , git commit -m \"add 學號 submodule\" , 最後在 git push . 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midbgx_report.pdf 的製作. 以上為第三周內容","tags":"w3","url":"./41123141_w3.html"},{"title":"cd2024 W3","text":"記錄第3週老師上課內容以及學生做了什麼 W3上課內容 1.將組員的個人倉儲納為分組倉儲的子模組 2.公告期中報告 3.使用 Gitpod 維護倉儲與網站 學生做了什麼 1.在近端新增子模組：使用 putty 製作 ssh-keygen 以及登入檔，開啟 start_ipv4.bat 依照老師影片程式碼進行 clone 及新增子模組 2.與組長及其他組員討論並規劃期中報告各組員負責的部分","tags":"w3","url":"./41123153_w3.html"},{"title":"w3課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統3 2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. cd2024 期中分組倉儲與網站 上列連結使用 [Brython] 程式語法, 可直接在網頁中列出特定連結內容, 所採用的程式碼如下:","tags":"w3","url":"./41123142_w3.html"},{"title":"2024 Spring 課程 第三週","text":"2024 Spring 協同產品設計實習課程. 將組員的個人倉儲設為分組倉儲子模組 使用 Codespaces 將子模組以 submodule 的方式加入分組倉儲. LaTeX 轉 pdf 各組將英文文章分工翻譯 , 並在分組網站將每個人的翻譯內容整合. 以上為第三週內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w3","url":"./41123144-w3.html"},{"title":"2024 Spring w3","text":"2024 Spring 課程日誌w3 將個人倉儲納為分組倉儲的子模組 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作 replit 自設 .ssh 維護分組倉儲 利用 Codespaces 維護倉儲與網站 使用Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 小組網頁 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式.","tags":"w3","url":"./41123148-w3.html"},{"title":"W3課程內容","text":"第三週做分組倉儲子模組和翻譯資料 1.將個人倉儲設為分組倉儲的子模組 2.組員們分工合作翻譯 此資料 ，做成中英文並列(LaTeX)，並放在個人倉儲網站，最後整合出pdf檔案放在分組倉儲","tags":"w3","url":"./41123143_w3-blog-tutorial.html"},{"title":"2024 Spring 課程 w2","text":"2024 Spring 協同產品設計實習課程教導, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 利用 Codespaces 維護倉儲與網站 利用 init_replit 指令安裝所需 Python 模組 啟動動態 指令 1.chmod u+x init_replit 2. ./init_replit 3. Python3 main.py 靜態 指令 Python3 -m http.server Push 指令 1.git add . 2. git commit -m \" add+你要推的內容 \" 3. git push 以上為第二周內容","tags":"w2","url":"./41123141_w2.html"},{"title":"cd2024 W2","text":"記錄第2週老師上課內容以及學生做了什麼 W2上課內容 1.利用 Github Classroom 指定分組倉儲 2.利用 Codespaces 維護倉儲與網站 3.在近端執行動態網站 學生做了什麼 1.跟組長拿加入分組倉儲的權限將分組倉儲與自己的 github 連結 2.參考老師影片練習在 codespaces 維護網站(在倉儲網頁點擊綠色 code 右邊的小三角形找到 codespaces 點擊 create codespaces on main 進入 codespaces 網頁依照老師影片提到的程式碼進行操作) 3.使用 putty 製作 ssh-keygen 以及登入檔，開啟 start_ipv4.bat 依照老師影片程式碼進行維護","tags":"w2","url":"./41123153_w2.html"},{"title":"w2課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統2 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1, 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1. 說明甲班第一組組長如何建立 midag1 Team, 並利用 Codespaces 維護 2a-midag1 分組倉儲 說明如何利用 Replit 管理從 Classroom 取得的分組倉儲 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 在近端執行動態網站 說明如何利用近端可攜系統維護分組網站","tags":"w2","url":"./41123142_w2.html"},{"title":"2024 Spring 課程 第二週","text":"2024 Spring 協同產品設計實習課程. 課程分組並建立分組倉儲 使用 github classroom 建立分組倉儲 , 並利用 replit 建立分組網站. 使用 Codespaces 維護分組網站 輸入固定字串 , 即可開啟動態網站更新內容. 以上為第二週內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w2","url":"./41123144-w2.html"},{"title":"2024 Spring w2","text":"2024 Spring 課程日誌w2 利用 Github Classroom 指定分組倉儲 各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 利用 Codespaces 維護倉儲與網站 使用Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 小組網頁 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w2","url":"./41123148-w2.html"},{"title":"W2課程內容","text":"第二週完成分組並創建組別倉儲，和維護倉儲和網站 加入組別( midag7 )並使自己擁有改版的權限 使用 近端可攜系統 與 外部IPv4 開啟動態網站","tags":"w2","url":"./41123143_w2-blog-tutorial.html"},{"title":"2024 Spring 課程 w1","text":"2024 Spring 協同產品設計實習課程教導, 如何建立倉儲和利用 import 至 Replit進行改版、設定網誌與Odoo PLM 在機械設計流程中的應用. 建立個人課程倉儲 登入到自己的github, 連結到[https://github.com/mdecycu/cmsimde_site] (Teams也有貼) , 再利用 Template (連結點進去右上角) 作為倉儲, 打上 cd2024 為名稱, 進去後到設定裡的 pages 把 main 分支設為網頁根目錄靜態就跑出來了. 如何將倉儲 import 至 Replit 由 Replit 帳號下的設定, 底下有個 Connected Services(連線服務) 點選 Connect 後 (有連結過會出現 Disconnect ) , 讓 Github 授權給 Replit 可在 Replit 中進行改版, 改版後就有權限推回自己的網站. import 完如何進行改版 import 完會有 Webview 跑出來這就是自己的動態網站 (由這可增加或修改內容) , 點進去後打 admin 就可增加 (也就是改版) 你所要的內容, 當你打完你要的內容後右上角有個 Convert 點一下轉為靜態 (這要點, 不然你從動態推到靜態會沒有東西) , 到 Replit 的 Git 中輸入新增的內容後 Push , 等待一下就可以在靜態看到剛剛增加的內容. 建立網誌 我們所使用的網誌系統 (Pelican) , markdown 目錄是一個原始檔 (撰寫網誌範本) , 新增完的內容轉換後會位於在 blog 下的目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關設定檔有: pelicanconf.py (更改網誌名稱) 與 publishconf.py (增加靜態連結) 等, 在設定網誌同時要依據自己的 github 帳號對上述三個.py 去做設定動作. Odoo PLM 功能 畢竟這個程式這學期才用, 當然帳號是以學號加上 nfu.edu.tw 去建立的, 期中和期末個做一樣模擬出來, 要新增一個產品網頁 (已建立) , 依模擬產品去分配給組員做 (會收到 emlig 的訊息) 回傳至 odoo PLM 裡 以上為第一周內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123141_w1.html"},{"title":"cd2024 W1","text":"記錄第1週老師上課內容以及學生做了什麼 W1上課內容 1.建個人課程倉儲(cd2024) 2.將個人倉儲 import 至 Replit 3.如何 import 倉儲至 Replit 進行改版 4.設定網誌 5.簡介 Odoo PLM 功能 學生做了什麼 1.在 此網頁 點擊 use this template -> create a new repository 建立這學期使用的倉儲 2.在 replit 首頁左上角點擊 create repl -> import from github -> from URL 貼上倉儲連結網址並將 language 改成 python 後點擊下方的 import grom github 3.在 shell 輸入老師上課影片提到的幾個指令碼，點擊 run 之後到動態網頁編輯內容(新增倉儲連結、網誌連結等)再將網頁轉靜態，回到 replit 進行 push 的動作","tags":"w1","url":"./41123153_w1.html"},{"title":"w1課程網誌","text":"網際內容管理與協同產品設計實習課程網誌. 內容管理系統1 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. ## 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123142_w1.html"},{"title":"2024 Spring 課程 第一週","text":"2024 Spring 協同產品設計實習課程. 建立個人課程倉儲 登入 github , 使用 https://github.com/mdecycu/cmsimde_site , 建立課程 cd2024 的倉儲 , 並將 main 分支設為網頁根目錄. 將倉儲 import 至 Replit 從 replit 右上的頭像 , 找到 Connected Services 點選 Connect 後, 讓 Github 授權 Replit 並進行改版 , 改版完就有權限推回 Github. 設定 github 的雙重認證 手機先下載 Github Mobile , 並在 github 的 Two-factor authentication 進行設定. 建立網誌 將連結裡的 mde.tw 修改成自己的帳號名稱 , 即出現自己的網誌. Odoo PLM 建立一個產品網頁 , 依分配的工作完成後 回傳至 odoo PLM 裡. 以上為第一週內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123144-w1.html"},{"title":"2024 Spring 課程w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程日誌 內容管理系統~ 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123148-w1.html"},{"title":"W1課程內容","text":"開學第一週建立個人倉儲和用Replit進行改版 1.加入課程的Teams 課程代碼:p0961sy 2.建立個人倉儲 3.下載可攜檔案 4.將倉儲 import 至 Replit並進改版 5.更改網誌","tags":"w1","url":"./41123143_w1-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123143_w0-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123154_w0.html"}]};