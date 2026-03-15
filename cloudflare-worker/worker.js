/**
 * Cloudflare Worker for Tarot Reading AI Generation
 * 事業/財務時強制注入商業邏輯 JSON：business_reality / warning / action
 * Environment: OPENAI_API_KEY
 */

const TAROT_BUSINESS_LOGIC = {
  cardKeyMap: {
    '愚人':'0_The_Fool','the fool':'0_The_Fool','愚者':'0_The_Fool',
    '魔術師':'1_The_Magician','the magician':'1_The_Magician',
    '女祭司':'2_The_High_Priestess','the high priestess':'2_The_High_Priestess',
    '皇后':'3_The_Empress','女皇':'3_The_Empress','the empress':'3_The_Empress',
    '皇帝':'4_The_Emperor','the emperor':'4_The_Emperor',
    '教皇':'5_The_Hierophant','the hierophant':'5_The_Hierophant',
    '戀人':'6_The_Lovers','the lovers':'6_The_Lovers',
    '戰車':'7_The_Chariot','the chariot':'7_The_Chariot',
    '力量':'8_Strength','strength':'8_Strength',
    '隱士':'9_The_Hermit','隱者':'9_The_Hermit','the hermit':'9_The_Hermit',
    '命運之輪':'10_Wheel_of_Fortune','wheel of fortune':'10_Wheel_of_Fortune',
    '正義':'11_Justice','justice':'11_Justice',
    '倒吊人':'12_The_Hanged_Man','the hanged man':'12_The_Hanged_Man',
    '死神':'13_Death','death':'13_Death',
    '節制':'14_Temperance','temperance':'14_Temperance',
    '惡魔':'15_The_Devil','the devil':'15_The_Devil',
    '塔':'16_The_Tower','高塔':'16_The_Tower','the tower':'16_The_Tower',
    '星星':'17_The_Star','the star':'17_The_Star',
    '月亮':'18_The_Moon','the moon':'18_The_Moon',
    '太陽':'19_The_Sun','the sun':'19_The_Sun',
    '審判':'20_Judgement','judgement':'20_Judgement',
    '世界':'21_The_World','the world':'21_The_World',
    '權杖一':'wands_Ace','權杖王牌':'wands_Ace','ace of wands':'wands_Ace',
    '權杖二':'wands_Two','two of wands':'wands_Two','權杖三':'wands_Three','權杖四':'wands_Four','權杖五':'wands_Five','權杖六':'wands_Six','權杖七':'wands_Seven','權杖八':'wands_Eight','權杖九':'wands_Nine','權杖十':'wands_Ten',
    '權杖侍從':'wands_Page','權杖侍者':'wands_Page','權杖騎士':'wands_Knight','權杖女王':'wands_Queen','權杖王后':'wands_Queen','權杖國王':'wands_King',
    '星幣一':'pentacles_Ace','錢幣一':'pentacles_Ace','星幣王牌':'pentacles_Ace',
    '星幣二':'pentacles_Two','錢幣二':'pentacles_Two','星幣三':'pentacles_Three','星幣四':'pentacles_Four','星幣五':'pentacles_Five','星幣六':'pentacles_Six','星幣七':'pentacles_Seven','星幣八':'pentacles_Eight','星幣九':'pentacles_Nine','星幣十':'pentacles_Ten',
    '星幣侍從':'pentacles_Page','錢幣侍從':'pentacles_Page','星幣騎士':'pentacles_Knight','星幣女王':'pentacles_Queen','星幣王后':'pentacles_Queen','星幣國王':'pentacles_King','錢幣國王':'pentacles_King',
    '聖杯一':'cups_Ace','聖杯二':'cups_Two','聖杯三':'cups_Three','聖杯四':'cups_Four','聖杯五':'cups_Five','聖杯六':'cups_Six','聖杯七':'cups_Seven','聖杯八':'cups_Eight','聖杯九':'cups_Nine','聖杯十':'cups_Ten',
    '聖杯侍從':'cups_Page','聖杯侍者':'cups_Page','聖杯騎士':'cups_Knight','聖杯女王':'cups_Queen','聖杯王后':'cups_Queen','聖杯國王':'cups_King',
    '寶劍一':'swords_Ace','寶劍王牌':'swords_Ace','ace of swords':'swords_Ace',
    '寶劍二':'swords_Two','two of swords':'swords_Two','寶劍三':'swords_Three','寶劍四':'swords_Four','寶劍五':'swords_Five','寶劍六':'swords_Six','寶劍七':'swords_Seven','寶劍八':'swords_Eight','寶劍九':'swords_Nine','寶劍十':'swords_Ten',
    '寶劍侍從':'swords_Page','寶劍侍者':'swords_Page','寶劍騎士':'swords_Knight','寶劍女王':'swords_Queen','寶劍王后':'swords_Queen','寶劍國王':'swords_King'
  },
  cards: {
    "0_The_Fool":{ "business_reality": "新賽道冒險、零經驗創業、高風險擴張", "warning": "缺乏止損規劃，純屬情緒化衝動", "action": "立即建立預算表，別只看願景" },
    "1_The_Magician":{ "business_reality": "技術優勢、資源整合期、產品啟動", "warning": "只有開頭熱情，缺乏後續交付能力", "action": "找一個能落地的執行夥伴，別只出嘴" },
    "2_The_High_Priestess":{ "business_reality": "市場靜默觀察、非對稱資訊、直覺判斷", "warning": "過度猶豫導致錯失窗口期", "action": "在暗處收集數據，不要急於表態" },
    "3_The_Empress":{ "business_reality": "產出高峰、自然增長、品牌孕育", "warning": "開支過度浪費，財務紀律鬆散", "action": "享受增長，但必須重新優化成本結構" },
    "4_The_Emperor":{ "business_reality": "建制化、穩定營收、剛性管理", "warning": "官僚主義嚴重，體制僵化導致創新死亡", "action": "簡政放權，檢查管理層是否與市場脫節" },
    "5_The_Hierophant":{ "business_reality": "傳統行業、標準流程、行業協會", "warning": "被教條束縛，不敢挑戰既有規則", "action": "尋求專業顧問，而不是道聽途說" },
    "6_The_Lovers":{ "business_reality": "合夥關係、二選一決策、品牌聯名", "warning": "價值觀不一致的合作會引發毀滅", "action": "在簽約前，確認雙方的利益分配機制" },
    "7_The_Chariot":{ "business_reality": "快速推進、市場突圍、執行力巔峰", "warning": "多線作戰導致精力渙散，隨時可能翻車", "action": "專注於一個核心KPI，切斷所有支線干擾" },
    "8_Strength":{ "business_reality": "柔性管理、長期主義、危機處理", "warning": "低估了對手的野性與殘酷", "action": "用耐心磨掉障礙，不要試圖硬碰硬" },
    "9_The_Hermit":{ "business_reality": "內部研發、技術閉關、低調轉型", "warning": "與市場完全脫節，產品淪為自嗨", "action": "結束內省，帶著你的成果去測試市場反應" },
    "10_Wheel_of_Fortune":{ "business_reality": "市場波動、週期性轉折、外部紅利", "warning": "誤把運氣當實力，缺乏應對下行期的方案", "action": "在高峰期回籠資金，應對即將到來的衰退" },
    "11_Justice":{ "business_reality": "合同談判、法規合規、資產評估", "warning": "法律細節中的魔鬼會讓你損失慘重", "action": "請律師重新過一遍合同條款" },
    "12_The_Hanged_Man":{ "business_reality": "資金凍結、停滯期、以退為進", "warning": "無效的等待只是在慢性自殺", "action": "換個視角看資產，或許這是一個退出機會" },
    "13_Death":{ "business_reality": "項目終止、裁員、業務模式清算", "warning": "執著於殭屍項目只會加速破產", "action": "徹底斬斷虧損源，廢墟之上才有新生" },
    "14_Temperance":{ "business_reality": "跨界融合、供應鏈管理、資源調配", "warning": "各方利益平衡不當，導致進度緩慢", "action": "優化工作流，確保每一份資源都在其位" },
    "15_The_Devil":{ "business_reality": "誘惑性融資、債務陷阱、權錢交易", "warning": "高回報背後是失去主導權的『賣身契』", "action": "拒絕高利貸與灰色地帶，重奪自由" },
    "16_The_Tower":{ "business_reality": "黑天鵝事件、突然倒閉、組織崩潰", "warning": "原本的根基就不穩，崩潰是必然的", "action": "放棄修補，直接建立全新的備用系統" },
    "17_The_Star":{ "business_reality": "願景融資、品牌修復、長線佈局", "warning": "遠水救不了近火，注意現金流乾涸", "action": "在追逐目標的同時，先確保今天的開支" },
    "18_The_Moon":{ "business_reality": "市場迷霧、潛在競爭者、財務造假", "warning": "你看到的繁榮可能是鏡花水月", "action": "進行深度的財務審計，不要相信表面數據" },
    "19_The_Sun":{ "business_reality": "高光時刻、大宗訂單、擴張成功", "warning": "過度膨脹會讓你忽視潛伏的風險", "action": "保持透明度，趁著名聲大噪時鞏固地盤" },
    "20_Judgement":{ "business_reality": "重新招標、終期審核、重大轉機", "warning": "如果你不從錯誤中學習，將面臨終極淘汰", "action": "迎接裁決，好的壞的都要一肩扛起" },
    "21_The_World":{ "business_reality": "市場飽和、全球化成功、完美收官", "warning": "舒適區是創新的墳墓", "action": "考慮退出機制，或啟動第二增長曲線" }
  },
  wands: {
    Ace: { business_reality: "新項目立項、原始衝動、創業火花", warning: "僅有熱情而無配套資源，容易後勁不足", action: "趁熱打鐵，在48小時內跨出第一步" },
    Two: { business_reality: "市場規劃、跨境貿易、選擇轉折點", warning: "空有藍圖而不願踏出舒適區", action: "確定一個具體目標，停止無止境的盤算" },
    Three: { business_reality: "擴張成功、看到回報、外貿出口", warning: "過早慶祝可能忽視隱藏的供應鏈風險", action: "放眼長遠，現在是擴大規模的最佳時機" },
    Four: { business_reality: "階段性慶功、辦公室喬遷、團隊穩定", warning: "過於安逸會喪失狼性", action: "鞏固現有成果，建立標準化流程" },
    Five: { business_reality: "惡性競爭、內部內耗、利益衝突", warning: "無意義的爭論正在消耗核心產能", action: "停止內鬥，將精力轉向外部競爭" },
    Six: { business_reality: "獲得認可、KPI達標、公關成功", warning: "捧殺比棒殺更危險，別被讚美沖昏頭", action: "利用現在的名聲去爭取更大的訂單" },
    Seven: { business_reality: "獨自應戰、守住市佔率、面臨挑戰", warning: "防禦姿態太重，會讓你疲於奔命", action: "堅定立場，拒絕不合理的降價要求" },
    Eight: { business_reality: "訊息爆發、物流加速、快遞反饋", warning: "速度太快導致細節出錯，溝通產生偏差", action: "迅速執行，但重要文件必須二次確認" },
    Nine: { business_reality: "最後衝刺、職涯瓶頸、高度警覺", warning: "過度防備導致身心俱疲，隨時可能崩潰", action: "再堅持一下，但必須學會適度放權" },
    Ten: { business_reality: "過度承擔、職責過載、效率低下的勤奮", warning: "你正在被繁雜的庶務壓死", action: "砍掉不賺錢的雜活，只做核心業務" },
    Page: { business_reality: "職場新人、新訊息傳遞、初步嘗試", warning: "缺乏經驗的魯莽會導致不必要的成本", action: "保持好奇，多向前輩請教實操細節" },
    Knight: { business_reality: "出差、急先鋒、盲目擴張", warning: "只有速度沒有方向，純屬浪費差旅費", action: "鎖定目標再衝刺，別做無頭蒼蠅" },
    Queen: { business_reality: "魅力領導、直覺行銷、事業女強人", warning: "情緒化管理會讓下屬無所適從", action: "展現你的熱情，用個人影響力驅動團隊" },
    King: { business_reality: "產業領袖、決斷力強、宏觀調控", warning: "獨斷專行會導致智囊團集體失聲", action: "像國王一樣思考，像戰士一樣行動" }
  },
  pentacles: {
    Ace: { business_reality: "第一筆撥款、實體資產入手、財務新開端", warning: "這只是種子，不是果實，別急著花掉", action: "把這筆錢投入到最能產生複利的地方" },
    Two: { business_reality: "資金周轉、多線操作、財務平衡術", warning: "像拋接球一樣危險，隨時有斷鍊風險", action: "優化現金流，剔除不必要的支出項" },
    Three: { business_reality: "團隊協作、專業分工、技術外包", warning: "溝通成本過高會稀釋利潤", action: "建立標準化SOP，確保每個環節都專業" },
    Four: { business_reality: "死守現金、吝嗇、保守理財", warning: "過度守財會讓你錯失投資紅利", action: "適度流動資金，死錢是沒有價值的" },
    Five: { business_reality: "財務危機、失業、現金流斷裂", warning: "窮忙且找不到出口，陷入貧窮循環", action: "放下自尊尋求外界資助，止住出血點" },
    Six: { business_reality: "獲得融資、利益分配、慈善公關", warning: "不平等的施捨會埋下未來的怨恨", action: "明確分紅機制，確保回報與付出對等" },
    Seven: { business_reality: "複盤、等待分紅、收成前的沉思", warning: "對目前的投產比感到失望，想中途放棄", action: "耐心等待，現在是看清哪塊業務最賺錢的時機" },
    Eight: { business_reality: "工匠精神、技術磨練、高頻產出", warning: "只顧埋頭拉車，忘了抬頭看路", action: "精進你的核心技能，這就是你的護城河" },
    Nine: { business_reality: "財務自由、獨立顧問、高品質生活", warning: "與世隔絕的成功會讓你喪失市場敏銳度", action: "享受孤獨的成功，但別忘了維持人脈網絡" },
    Ten: { business_reality: "家族企業、大宗地產、遺產與併購", warning: "利益分配不均引發內部權鬥", action: "建立家族/公司信託，實現長效治理" },
    Page: { business_reality: "財務學徒、小額投資、實習機會", warning: "對金錢過於計較會顯得格局太小", action: "學習財務知識，先從小項目練手" },
    Knight: { business_reality: "穩健的執行者、固定資產、低風險投資", warning: "速度太慢，在快節奏市場會被淘汰", action: "按部就班執行，穩定就是你最大的優勢" },
    Queen: { business_reality: "財務總監、資源統籌、生活品質與事業平衡", warning: "過於追求舒適感會導致競爭力下降", action: "打理好你的後備資源，確保後勤無憂" },
    King: { business_reality: "企業巨頭、資本大佬、成功的企業家", warning: "唯利是圖會讓你失去長期合夥人的信任", action: "用資本的力量去槓桿更大的世界" }
  },
  swords: {
    Ace: { business_reality: "突破僵局、一語道破、決策開局", warning: "衝動表態會讓後續沒有迴旋餘地", action: "今天說出一句你一直沒說出口的立場" },
    Two: { business_reality: "兩難、僵持、資訊不對稱", warning: "不表態也是一種表態，對方會按最壞解讀", action: "選一邊站，並用一句話說明理由" },
    Three: { business_reality: "衝突爆發、三方角力、言語傷害", warning: "翻舊帳只會讓傷口越扯越大", action: "今天只談一件事，不擴散到其他" },
    Four: { business_reality: "冷戰、暫停、需要獨處", warning: "沉默太久會被當成默認或放棄", action: "設定一個破冰時間點，到點發一句話" },
    Five: { business_reality: "爭贏了理、輸了關係、口舌之爭", warning: "證明自己對不會讓對方更愛你", action: "今天先傾聽不反駁，只問一句：你希望我怎麼做" },
    Six: { business_reality: "離開是非地、溝通橋樑、過渡期", warning: "逃避溝通只會讓誤會生根", action: "主動約一次一對一，只談現狀不翻舊帳" },
    Seven: { business_reality: "隱瞞、策略性說謊、資訊戰", warning: "謊言被拆穿時會一次清算", action: "選一件你沒說清楚的事，用一句話補齊" },
    Eight: { business_reality: "被限制、無力感、卡關", warning: "越想控制局面越容易失控", action: "放掉一個你堅持的「應該」，看會怎樣" },
    Nine: { business_reality: "焦慮、失眠、反芻負面", warning: "腦補的劇情比現實更耗人", action: "把最壞情況寫下來，再寫一個最小應對步驟" },
    Ten: { business_reality: "攤牌、結束、清算", warning: "拖到崩盤才開口，沒有贏家", action: "在關係徹底破裂前，先說一句你真正要的" },
    Page: { business_reality: "新訊息、試探、口頭交鋒", warning: "說太多會露底，說太少會冷場", action: "今天只傳一條有資訊量的訊息" },
    Knight: { business_reality: "快人快語、衝動決策、說走就走", warning: "話說太絕會沒有台階下", action: "做決定前先等 24 小時再開口" },
    Queen: { business_reality: "理性主導、界限清晰、不情緒化", warning: "過度理性會被覺得冷血", action: "今天先說一句感受，再談事實" },
    King: { business_reality: "權威、定調、一錘定音", warning: "專斷會讓身邊人閉嘴或離開", action: "主動問對方：你覺得該怎麼做" }
  },
  cups: {
    Ace: { business_reality: "新戀情萌芽、心動、一段關係的開始", warning: "一時上頭就全盤托出，容易被吃定", action: "先約見面聊三次再決定要不要認真" },
    Two: { business_reality: "曖昧、合作、兩人正在試探平衡", warning: "誰都不先開口，最後就涼了", action: "本週內主動約一次一對一，把話說開" },
    Three: { business_reality: "慶祝、小團體、友情與愛情的邊界", warning: "你以為是戀愛，對方只當你是圈內人", action: "直接問一句：我們現在是什麼關係" },
    Four: { business_reality: "抽離、冷淡、其中一方在迴避", warning: "不溝通只會讓猜疑越滾越大", action: "別再等對方讀心，發一條具體的訊息問清楚" },
    Five: { business_reality: "失落、分手後、只看到失去的", warning: "沉溺在「本來可以」會讓你錯過下一個", action: "刪掉一個會讓你反覆點開的聯絡或動態" },
    Six: { business_reality: "懷舊、前任、或有人想復合", warning: "回去多半是重播舊問題，不是新開始", action: "寫下三件當初分開的原因，再決定要不要理" },
    Seven: { business_reality: "選擇太多、不切實際的幻想、逃避承諾", warning: "不選也是一種選，結果就是誰都留不住", action: "先選一個認真經營一個月，再評估" },
    Eight: { business_reality: "離開、斷捨離、從一段關係中抽身", warning: "拖著不走的付出只是在自我感動", action: "設定一個底線日期，到了就真的走" },
    Nine: { business_reality: "願望成真、被寵、情感豐足", warning: "太安於現狀會忽略對方的真實需求", action: "問對方一句：你最近最希望我為你做什麼" },
    Ten: { business_reality: "家庭、長久承諾、成家或見家長", warning: "用「圓滿」綁架彼此，反而容易崩", action: "先談清楚對未來的想像是否一致" },
    Page: { business_reality: "試探、情書、曖昧訊息", warning: "只敢在網上撩，見面就縮，沒戲", action: "把一句想說的話當面說出來" },
    Knight: { business_reality: "浪漫攻勢、追求、有人主動靠近", warning: "浪漫可以演，要看對方有沒有實際行動", action: "看對方做過什麼，不要只聽說了什麼" },
    Queen: { business_reality: "體貼、包容、情感上的主導", warning: "你一直在給，對方習慣了就不會珍惜", action: "這週少主動一次，看對方會不會靠近" },
    King: { business_reality: "成熟、掌控、關係裡的話事人", warning: "控制欲太強會把對方推遠", action: "把一件你習慣決定的事交給對方決定" }
  },
  loveMajor: {
    "0_The_Fool": { business_reality: "不顧後果的投入、新戀情或新階段", warning: "一頭熱容易忽略紅旗", action: "先問自己：三個月後我還能接受這個人嗎" },
    "1_The_Magician": { business_reality: "魅力全開、在關係裡有主導權", warning: "只表演不真誠，遲早穿幫", action: "用一件小事展現真實的自己，別只做人設" },
    "2_The_High_Priestess": { business_reality: "直覺強、在觀察對方或隱藏感受", warning: "不説出口的期待對方永遠猜不到", action: "選一件你從沒說過的期待，說出來" },
    "3_The_Empress": { business_reality: "被愛包圍、懷孕或孕育關係", warning: "過度付出會養出巨嬰", action: "留一點時間只給自己，不要全部給關係" },
    "4_The_Emperor": { business_reality: "主導、穩定、或對方很強勢", warning: "只講道理不講感受，關係會冷掉", action: "今天只傾聽不給建議，問對方感受" },
    "5_The_Hierophant": { business_reality: "傳統價值、長輩意見、承諾與名分", warning: "為別人眼中的「應該」而在一起會很累", action: "問自己：沒有外人眼光，我還想選這個人嗎" },
    "6_The_Lovers": { business_reality: "選擇、二選一、或價值觀對齊", warning: "選了就不要一直回頭看另一個", action: "選定後，主動切斷另一條線的曖昧" },
    "7_The_Chariot": { business_reality: "衝動推進、想快點定下來", warning: "關係不是衝線就結束，後半程更難", action: "放慢一步，先解決一個現有摩擦再談下一步" },
    "8_Strength": { business_reality: "用柔克剛、耐心維繫、或一方在忍", warning: "忍太久會一次爆", action: "在不指責的前提下，說出一件你一直在忍的事" },
    "9_The_Hermit": { business_reality: "冷戰、需要空間、或其中一方在躲", warning: "躲不會解決問題，只會拉長痛苦", action: "設定一個時間，到點就主動破冰一句" },
    "10_Wheel_of_Fortune": { business_reality: "緣分轉折、重逢、關係轉變", warning: "把一切歸給命運就不會為自己負責", action: "列出你能控制的三件事，這週做一件" },
    "11_Justice": { business_reality: "攤牌、算帳、或談條件", warning: "只談公平不談感情，會像在簽約", action: "先說一句感謝，再談你覺得不公平的事" },
    "12_The_Hanged_Man": { business_reality: "卡住、犧牲感、等對方改變", warning: "等來的多半是失望", action: "停止等，先做一件不依賴對方的改變" },
    "13_Death": { business_reality: "關係結束、徹底翻篇、或重生", warning: "不捨得斷乾淨會一直輪迴", action: "刪掉或封存一樣會讓你反覆想起的物件" },
    "14_Temperance": { business_reality: "磨合、各退一步、慢慢調和", warning: "一味退讓會失去自己", action: "選一件你一直退讓的事，提出一個折中方案" },
    "15_The_Devil": { business_reality: "執念、依賴、或明知有毒離不開", warning: "你離不開的是習慣，不是愛", action: "寫下「沒有這個人我會失去什麼」，看有幾條是真的" },
    "16_The_Tower": { business_reality: "突然崩裂、秘密曝光、信任崩塌", warning: "崩了再糊回去裂痕還在", action: "先接受現狀，再決定是修還是走" },
    "17_The_Star": { business_reality: "還有希望、療癒中、或暗戀有光", warning: "希望不能當飯吃，要有行動", action: "把一個模糊的期待寫成一個可執行的步驟" },
    "18_The_Moon": { business_reality: "不安、猜疑、或有人在隱瞞", warning: "腦補比真相更傷人", action: "把最壞的猜測問出口，用事實取代幻想" },
    "19_The_Sun": { business_reality: "明朗、公開、關係被祝福", warning: "太曬會刺眼，留一點空間給彼此", action: "一起做一件簡單快樂的事，不談沉重話題" },
    "20_Judgement": { business_reality: "復盤、原諒或放下、重新評估", warning: "不從過去學到教訓就會重蹈覆轍", action: "寫下一條「下次我會怎麼做不同」" },
    "21_The_World": { business_reality: "階段圓滿、訂婚結婚、或關係成熟", warning: "圓滿是新的起點，不是終點", action: "和對方談一個接下來一年的共同目標" }
  }
};

function getBusinessKey(cardName) {
  if (!cardName || typeof cardName !== 'string') return null;
  let n = cardName.trim().replace(/\s*\([^)]*\)\s*$/, '').trim();
  const map = TAROT_BUSINESS_LOGIC.cardKeyMap;
  let k = map[n] || map[n.toLowerCase()];
  if (k) return k;
  const numMap = { '一':'Ace','二':'Two','三':'Three','四':'Four','五':'Five','六':'Six','七':'Seven','八':'Eight','九':'Nine','十':'Ten' };
  if (n.includes('權杖')) {
    for (const [cn, en] of Object.entries(numMap)) { if (n.includes(cn)) return 'wands_' + en; }
    if (n.includes('侍從') || n.includes('侍者')) return 'wands_Page'; if (n.includes('騎士')) return 'wands_Knight'; if (n.includes('女王') || n.includes('王后')) return 'wands_Queen'; if (n.includes('國王')) return 'wands_King';
  }
  if (n.includes('星幣') || n.includes('錢幣')) {
    for (const [cn, en] of Object.entries(numMap)) { if (n.includes(cn)) return 'pentacles_' + en; }
    if (n.includes('侍從') || n.includes('侍者')) return 'pentacles_Page'; if (n.includes('騎士')) return 'pentacles_Knight'; if (n.includes('女王') || n.includes('王后')) return 'pentacles_Queen'; if (n.includes('國王')) return 'pentacles_King';
  }
  if (n.includes('聖杯')) {
    for (const [cn, en] of Object.entries(numMap)) { if (n.includes(cn)) return 'cups_' + en; }
    if (n.includes('侍從') || n.includes('侍者')) return 'cups_Page'; if (n.includes('騎士')) return 'cups_Knight'; if (n.includes('女王') || n.includes('王后')) return 'cups_Queen'; if (n.includes('國王')) return 'cups_King';
  }
  if (n.includes('寶劍') || n.includes('宝剑')) {
    for (const [cn, en] of Object.entries(numMap)) { if (n.includes(cn)) return 'swords_' + en; }
    if (n.includes('侍從') || n.includes('侍者')) return 'swords_Page'; if (n.includes('騎士')) return 'swords_Knight'; if (n.includes('女王') || n.includes('王后')) return 'swords_Queen'; if (n.includes('國王')) return 'swords_King';
  }
  return null;
}

function getBusinessData(key) {
  if (!key) return null;
  if (key.startsWith('wands_')) { const part = key.slice(6); return TAROT_BUSINESS_LOGIC.wands[part] || null; }
  if (key.startsWith('pentacles_')) { const part = key.slice(10); return TAROT_BUSINESS_LOGIC.pentacles[part] || null; }
  if (key.startsWith('swords_')) { const part = key.slice(7); return TAROT_BUSINESS_LOGIC.swords[part] || null; }
  return TAROT_BUSINESS_LOGIC.cards[key] || null;
}

function getLoveData(key) {
  if (!key) return null;
  if (key.startsWith('cups_')) { const part = key.slice(5); return TAROT_BUSINESS_LOGIC.cups[part] || null; }
  return TAROT_BUSINESS_LOGIC.loveMajor[key] || null;
}

const SYSTEM_PROMPT = `## 核心原则
割裂玄學，回歸現實。你是一位精通塔罗心理学与行为分析的专家，把 78 张牌意转化为「有体感、有逻辑、有时间线」的现实生活建议。语气：冷静、职业，像资深分析师在看数据报告。

## 全域映射規則（78 张牌解析必须遵守）
- **大阿卡納（Major Arcana）**：對應「重大現實決策或環境變遷」。
- **權杖（Wands）**：對應「行動力、專案進度、執行」。
- **寶劍（Swords）**：對應「溝通、邏輯、衝突、決策」。
- **聖杯（Cups）**：對應「內心、情緒、直覺」。
- **星幣（Pentacles）**：對應「錢、物質、身體、硬資產」。
解讀時必須根據抽到的牌屬於哪一類，把重點放在對應的現實維度上；三張牌都要在敘事中出現並說明其在因果鏈中的角色，正逆位須一併解釋。

## 基地台輸出結構（每次解讀必須包含以下三段，對應三個 H3）
1. **【現狀直擊】** → 對應 paragraph1：用 2～3 句話直接指出使用者最尷尬的現實困境（結合牌面，不抽象）。
2. **【脫困指南】** → 對應 paragraph2：給出 2 個「今天就可以做」的具體動作，以動詞開頭（例如：發一條訊息、列一張清單、約一次見面）。
3. **【量化預測】** → 對應 paragraph3：必須給出一個具體的「時間數字 + 單位」（如 2 週、3 個月、半年），並可簡述在這段時間內須發生什麼才算達標。時間須依牌面元素推導：權杖(火)=幾天/週，寶劍(風)=幾週/月，聖杯(水)=幾個月，星幣(土)=半年以上。

## 禁言名單（嚴禁出現）
以下詞彙與概念一律不得出現在解讀中：靈魂、能量、宇宙、指引、命運、契機、真理。並禁止句式：「真相隱藏在…」「你需要打開心扉…」。

## 其餘禁令與鐵律
- 禁用詞還包括：覺醒、防備、付出、宿命、真誠。
- 杜絕模稜兩可的時間（如「三個月左右」），必須給出具體數字與單位。
- 建議必須對應牌意或下方注入的 action，禁止「學會愛」「放下舊模式」等萬用句。

## 事業/財務：商業診斷數據（強制）
當下方注入【商業診斷核心數據】時：將每張牌的 business_reality、warning 編織進【現狀直擊】；【脫困指南】引用至少一張牌的 action；【量化預測】見牌即見錢（現金流、時間點）。

## 感情：感情診斷數據（強制）
當下方注入【感情診斷核心數據】時：將每張牌的 reality、warning 編織進【現狀直擊】；【脫困指南】寫具體可執行動作；【量化預測】依四元素給出時間與標誌性事件。禁止空洞的「溝通」「珍惜」。

## 敘事與格式
- 牌名用 <span class="highlight-card">牌名</span>，時間用 <span class="highlight-time">时间</span>。

## 輸出結構（純 JSON，每次必含三段）
{ "title": "從X到Y（8～12字）", "paragraph1": "【現狀直擊】的 2～3 句內容（不要重複寫標題）", "paragraph2": "【脫困指南】的 2 個具體動作（不要重複寫標題）", "paragraph3": "【量化預測】的具體時間數字+單位與簡述（不要重複寫標題）" }
`;

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const { cards, topic, question } = await request.json();
      if (!cards || cards.length !== 3) {
        return new Response(JSON.stringify({ error: '需要3张牌' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const cardNames = cards.map(c =>
        `${c.name}（${c.isReversed ? '逆位' : '正位'}）`
      ).join('、');

      const isCareerOrFinance = topic === 'finance' || topic === 'career';
      const isLove = topic === 'love';
      let businessBlock = '';
      if (isCareerOrFinance) {
        const parts = cards.map((c, i) => {
          const key = getBusinessKey(c.name);
          const data = key ? getBusinessData(key) : null;
          if (!data) return `牌${i + 1}（${c.name}）：無對應數據，請依牌意與因果敘事描述，且須見牌即見錢。`;
          return `牌${i + 1}（${c.name}）\n  business_reality: ${data.business_reality}\n  warning: ${data.warning}\n  action: ${data.action}`;
        });
        businessBlock = `\n【商業診斷核心數據 - 必須嚴格使用並編織進敘事】\n${parts.join('\n\n')}\n\n結尾必須引用上述至少一張牌的 action 寫成具體行動建議。見牌即見錢。\n`;
      }
      if (isLove) {
        const parts = cards.map((c, i) => {
          const key = getBusinessKey(c.name);
          const data = key ? getLoveData(key) : null;
          if (!data) return `牌${i + 1}（${c.name}）：無對應數據，請依牌意與因果敘事描述，具體到溝通/信任/承諾/相處。`;
          return `牌${i + 1}（${c.name}）\n  reality: ${data.business_reality}\n  warning: ${data.warning}\n  action: ${data.action}`;
        });
        businessBlock = `\n【感情診斷核心數據 - 必須嚴格使用並編織進敘事】\n${parts.join('\n\n')}\n\n結尾必須引用上述至少一張牌的 action 寫成具體、可執行的關係建議。禁止空洞的溝通/珍惜。\n`;
      }

      const isFinance = topic === 'finance';
      const userPrompt = `
用戶問題：${question}
諮詢領域：${topic === 'finance' ? '财务/金钱' : topic === 'love' ? '感情/关系' : topic === 'career' ? '事业/职场' : '综合'}
抽到的牌：${cardNames}
${businessBlock}
要求（違反即不合格）：
1. 必須按「基地台輸出結構」輸出三段：paragraph1=【現狀直擊】2～3 句、paragraph2=【脫困指南】2 個今天可做的具體動作（動詞開頭）、paragraph3=【量化預測】一個具體時間數字+單位（如 2 週、3 個月）。
2. 三張牌都要在敘事中出現，正逆位須解釋；建議對應牌意或下方 action。
3. 禁言名單：嚴禁出現 靈魂、能量、宇宙、指引、命運、契機、真理。
4. ${isFinance ? '【財務】現狀直擊須見錢（現金流/收支），量化預測須給出時間點。' : isLove ? '【感情】脫困指南須具體動作，量化預測依四元素給時間與標誌性事件。' : '脫困指南須對應牌面，量化預測須具體數字+單位。'}
请严格按照 JSON 格式输出，不要有任何其他内容。
`.trim();

      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.8,
          max_tokens: 1000,
          response_format: { type: 'json_object' }
        })
      });

      if (!openaiResponse.ok) {
        const errorText = await openaiResponse.text();
        console.error('OpenAI API Error:', errorText);
        return new Response(JSON.stringify({ error: 'AI API 调用失败', details: errorText }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const openaiData = await openaiResponse.json();
      const aiContent = openaiData.choices[0].message.content;
      let aiResponse;
      try {
        aiResponse = JSON.parse(aiContent);
      } catch (e) {
        console.error('Failed to parse AI response:', aiContent);
        return new Response(JSON.stringify({ error: 'AI 响应格式错误', raw: aiContent }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (!aiResponse.title || !aiResponse.paragraph1 || !aiResponse.paragraph2) {
        return new Response(JSON.stringify({ error: 'AI 响应缺少必要字段（需含 title, paragraph1, paragraph2）', response: aiResponse }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      // 若 AI 未回傳 paragraph3，補上預設量化預測，避免 500 導致前端走 fallback
      if (!aiResponse.paragraph3 || !aiResponse.paragraph3.trim()) {
        aiResponse.paragraph3 = '依牌面元素推估，關鍵轉折約在兩週到兩個月內。請在此期間完成一項具體動作（例如一次對話、一筆決策），再評估進展。';
      }

      return new Response(JSON.stringify(aiResponse), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: '服务器错误', message: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};
