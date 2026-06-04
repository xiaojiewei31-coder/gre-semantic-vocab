const BUILT_IN_PACKS = [
  pack("晦涩难懂", "negative", "文章、概念、表达让人读不进去", [
    "abstruse|深奥难懂的|理论、论证、解释很难啃",
    "arcane|神秘晦涩的|像只有圈内人才懂",
    "recondite|深奥的，鲜为人知的|学术味很重",
    "esoteric|小圈子才懂的|知识门槛高",
    "opaque|不透明的，难理解的|意思不清楚",
    "cryptic|隐晦的，费解的|话说得像谜语",
    "enigmatic|神秘难解的|人或现象不好读懂",
    "inscrutable|难以捉摸的|表情、动机看不透",
    "obscure|模糊的，晦涩的|信息不明朗",
    "convoluted|复杂绕弯的|逻辑像打结",
    "labyrinthine|迷宫般复杂的|结构复杂到绕路",
    "impenetrable|难以理解的|完全读不进去"
  ]),
  pack("矛盾冲突", "negative", "不协调、不一致、彼此打架", [
    "paradoxical|自相矛盾的|看似矛盾却可能有真意",
    "contradictory|相互矛盾的|两个说法对不上",
    "incongruous|不协调的|放在一起很违和",
    "discordant|不和谐的|声音、观点、气氛不一致",
    "anomalous|反常的|偏离正常模式",
    "antithetical|正相反的|价值或观点对立",
    "inconsistent|不一致的|前后标准不统一",
    "irreconcilable|不可调和的|冲突无法和解",
    "ambivalent|矛盾复杂的|又想要又抗拒",
    "equivocal|含糊其辞的|态度不明确",
    "incompatible|不相容的|放不到一个系统里",
    "at odds|不一致，冲突|观点或事实对不上"
  ]),
  pack("削弱减少", "negative", "力量、程度、可信度被削掉", [
    "attenuate|削弱，变薄|强度被稀释",
    "abate|减弱，消退|风暴、情绪、痛苦降下来",
    "mitigate|缓和，减轻|让坏影响变轻",
    "diminish|减少，削弱|数量或重要性下降",
    "undermine|暗中削弱|破坏基础或可信度",
    "erode|逐渐侵蚀|慢慢磨掉信任、权力",
    "sap|削弱，耗尽|消耗精力",
    "enervate|使衰弱|让人没力气",
    "dilute|稀释，削弱|浓度或效果降低",
    "curtail|缩减，限制|把活动或权利砍短",
    "truncate|截短|把尾巴切掉",
    "impair|损害，削弱|能力受损"
  ]),
  pack("阻碍抑制", "negative", "让事情过不去、做不成、慢下来", [
    "impede|阻碍|让进展变慢",
    "hinder|妨碍|挡住行动",
    "hamper|束缚，阻碍|像被绑住手脚",
    "thwart|阻挠，使受挫|计划被打断",
    "stymie|阻挠，使停滞|卡住无法推进",
    "obstruct|阻塞，阻碍|物理或制度上挡住",
    "inhibit|抑制|压住行为或反应",
    "preclude|排除，阻止|让某种可能性不存在",
    "forestall|预先阻止|提前挡住坏结果",
    "deter|威慑，阻止|让人不敢做",
    "encumber|拖累，妨碍|负担太重",
    "fetter|束缚|限制自由"
  ]),
  pack("批评贬斥", "negative", "责备、嘲讽、公开否定", [
    "censure|严厉批评|正式或道德上的责备",
    "reproach|责备|带失望情绪",
    "rebuke|斥责|直接批评",
    "admonish|告诫，责备|带提醒意味",
    "castigate|严厉斥责|语气很重",
    "excoriate|痛斥|公开猛烈批评",
    "denounce|谴责|公开反对",
    "disparage|贬低|说别人不值钱",
    "decry|强烈批评|公开反对某事",
    "deride|嘲笑|带轻蔑",
    "belittle|轻视，贬低|把重要性说小",
    "vilify|诋毁|把人说成坏人"
  ]),
  pack("欺骗虚假", "negative", "假、骗、似是而非", [
    "dissemble|掩饰，伪装|隐藏真实想法",
    "equivocate|含糊其辞|故意绕开真话",
    "prevaricate|支吾其词，说谎|不直接回答",
    "dupe|欺骗|把人骗上钩",
    "gull|欺骗|让人轻信",
    "feign|假装|装出某种状态",
    "counterfeit|伪造的|假货、假文件",
    "spurious|假的，站不住脚的|论点或证据不可靠",
    "specious|似是而非的|表面有理，实际不对",
    "mendacious|撒谎的|人或叙述不诚实",
    "duplicity|两面派，欺骗|表里不一",
    "ruse|诡计|为了骗而设的招"
  ]),
  pack("顽固固执", "negative", "不改、不听、不让步", [
    "obstinate|固执的|拒绝改变",
    "obdurate|顽固不化的|硬到劝不动",
    "intransigent|不妥协的|谈判里不让步",
    "recalcitrant|桀骜不驯的|不服管",
    "refractory|难以驾驭的|人或材料不听控制",
    "adamant|坚定不移的|态度很硬",
    "dogmatic|教条的|坚持观点不容讨论",
    "inflexible|不灵活的|规则或态度不能弯",
    "implacable|难以平息的|敌意不会消",
    "tenacious|坚韧的，固执的|抓住不放",
    "pertinacious|执拗的|坚持到烦人",
    "mulish|倔强的|像 stubborn 的口语感"
  ]),
  pack("过度极端", "negative", "太多、太猛、太出格", [
    "excessive|过度的|超过合理限度",
    "exorbitant|过高的|价格或要求离谱",
    "prodigious|巨大的，惊人的|数量或能力很大",
    "inordinate|过度的|不合比例",
    "immoderate|无节制的|缺少克制",
    "wanton|肆意的|毫无顾忌地造成伤害",
    "unbridled|不受控制的|欲望或情绪失控",
    "rampant|猖獗的|坏现象到处蔓延",
    "flagrant|明目张胆的|错误或违法很刺眼",
    "egregious|极其恶劣的|错得很离谱",
    "audacious|大胆冒失的|褒贬看语境",
    "vehement|强烈的|情绪或表达很猛"
  ]),
  pack("赞扬尊敬", "positive", "夸、敬重、公开认可", [
    "laud|赞扬|正式夸奖",
    "extol|高度赞美|把优点抬高",
    "eulogize|颂扬|常用于正式悼词或赞辞",
    "commend|称赞，推荐|认可某人行为",
    "acclaim|喝彩，称赞|公众认可",
    "venerate|尊敬|敬若重要传统或人物",
    "revere|敬畏，崇敬|尊重程度很高",
    "exalt|提升，赞扬|把地位抬高",
    "approbation|赞许|正式认可",
    "homage|敬意|表达尊重",
    "panegyric|颂词|热烈赞美的文章",
    "encomium|赞辞|正式的高度称赞"
  ]),
  pack("清晰直白", "positive", "表达清楚、逻辑顺、容易懂", [
    "lucid|清晰的|解释或头脑很清楚",
    "cogent|有说服力的|论证强而清楚",
    "coherent|连贯的|逻辑能接起来",
    "explicit|明确的|说得清清楚楚",
    "perspicuous|明晰易懂的|写作表达清楚",
    "articulate|表达清楚的|人说话有条理",
    "intelligible|可理解的|能听懂读懂",
    "transparent|透明的，清楚的|过程或意图明确",
    "unequivocal|毫不含糊的|态度或证据明确",
    "limpid|清澈的，清晰的|文字或水都可用",
    "concise|简洁的|没有废话",
    "pithy|简练有力的|短但有劲"
  ]),
  pack("节制克制", "positive", "谨慎、有分寸、不过头", [
    "temperate|节制的，温和的|不走极端",
    "restrained|克制的|情绪和表达收得住",
    "prudent|谨慎明智的|会考虑风险",
    "circumspect|谨慎周到的|行动前观察清楚",
    "judicious|明智的|判断有分寸",
    "measured|慎重的，有节制的|语气或行动稳定",
    "frugal|节俭的|少浪费",
    "austere|朴素克制的|生活或风格不奢华",
    "abstemious|有节制的|尤其饮食不放纵",
    "provident|有远见的|提前为未来准备",
    "discreet|谨慎的|知道什么该说",
    "wary|警惕的|小心可能的风险"
  ]),
  pack("友善慷慨", "positive", "温和、善意、愿意给", [
    "benevolent|仁慈的|带善意",
    "benign|温和无害的|人、影响或肿瘤都可用",
    "magnanimous|宽宏大量的|胜利后不计较",
    "altruistic|利他的|为别人考虑",
    "munificent|慷慨的|给得很多",
    "philanthropic|慈善的|关注公共福祉",
    "solicitous|关切的|很在意别人需要",
    "affable|和蔼可亲的|容易聊天",
    "genial|亲切愉快的|气氛暖",
    "cordial|热情友好的|礼貌亲切",
    "amiable|和善的|性格好相处",
    "conciliatory|安抚性的|为了缓和冲突"
  ]),
  pack("不稳定多变", "neutral", "变来变去、短暂、不可靠", [
    "capricious|反复无常的|情绪或决定说变就变",
    "fickle|易变的|喜好不稳定",
    "volatile|易变的，易爆的|市场、情绪都可用",
    "mercurial|多变的|人的情绪忽冷忽热",
    "erratic|不规律的|行为或表现飘忽",
    "sporadic|零星的|偶尔发生",
    "fitful|一阵阵的|不连续不稳定",
    "mutable|可变的|容易改变",
    "protean|变化多端的|形态灵活多变",
    "ephemeral|短暂的|存在时间很短",
    "transient|短暂的|很快过去",
    "evanescent|转瞬即逝的|美感或现象很快消失"
  ]),
  pack("冷漠疏离", "negative", "不热、不动、不关心", [
    "aloof|冷淡疏远的|保持距离",
    "detached|超然的|情感不卷入",
    "indifferent|漠不关心的|不在乎",
    "apathetic|冷漠的|没兴趣没反应",
    "impassive|面无表情的|情绪不外露",
    "phlegmatic|冷静迟缓的|不容易激动",
    "stoic|坚忍克制的|痛苦也不表现",
    "nonchalant|若无其事的|显得不在乎",
    "dispassionate|客观冷静的|判断不被情绪带走",
    "callous|麻木冷酷的|对痛苦无感",
    "insensible|无感觉的|感受不到或不在乎",
    "blase|厌倦冷淡的|见多了所以无动于衷"
  ]),
  pack("枯燥贫乏", "negative", "没新意、没味道、空", [
    "banal|平庸陈腐的|缺乏新意",
    "hackneyed|陈词滥调的|用到烂了",
    "trite|老套的|缺少新鲜感",
    "vapid|乏味空洞的|没有精神或内容",
    "insipid|平淡无味的|味道或表达很淡",
    "prosaic|平凡无诗意的|日常到无聊",
    "pedestrian|平庸的|没有亮点",
    "jejune|幼稚空洞的|内容贫乏",
    "platitudinous|满是陈词滥调的|都是套话",
    "stale|陈旧的|不新鲜",
    "sterile|贫瘠的，无成果的|缺少创造力",
    "arid|枯燥的|文字或土地都干"
  ]),
  pack("丰富充沛", "positive", "多、满、产出旺", [
    "copious|大量的|资料、笔记很多",
    "profuse|丰富的，大量的|流出或表达很多",
    "abundant|丰富的|数量充足",
    "ample|充足的|空间、时间、证据够用",
    "bountiful|慷慨丰富的|供给很多",
    "fecund|多产的|创造力或生殖力强",
    "prolific|高产的|作家、艺术家作品多",
    "luxuriant|茂盛的|植物或头发很旺",
    "replete|充满的|装满某物",
    "teeming|充满的|到处都是",
    "voluminous|大量的|文字或衣物很大很厚",
    "exhaustive|详尽的|覆盖得很全"
  ]),
  pack("隐藏掩盖", "negative", "藏起来、不让看见", [
    "conceal|隐藏|把事实或东西藏起",
    "occlude|遮蔽，堵住|挡住视线或通道",
    "mask|掩盖|用表象盖住真相",
    "cloak|掩饰|像披上斗篷",
    "camouflage|伪装|融入背景",
    "suppress|压制，隐瞒|不让出现或传播",
    "withhold|保留，不给|把信息扣住",
    "secrete|隐藏，分泌|把东西藏好",
    "furtive|偷偷摸摸的|怕被发现",
    "clandestine|秘密的|活动不公开",
    "surreptitious|偷偷的|暗中进行",
    "covert|秘密的|不让外界知道"
  ]),
  pack("揭示澄清", "positive", "讲明白、拿出证据、照亮", [
    "reveal|揭示|让真相出现",
    "elucidate|阐明|把难点讲清楚",
    "explicate|详细解释|逐步拆开",
    "illuminate|阐明，照亮|让问题亮起来",
    "disclose|披露|公开原本隐藏的信息",
    "manifest|显示，显现|特征变得可见",
    "evince|表明|显示某种品质",
    "demonstrate|证明，展示|用事实说明",
    "substantiate|证实|用证据支撑",
    "corroborate|佐证|额外证据支持",
    "verify|核实|确认是真的",
    "attest|证明，证实|作证或显示"
  ]),
  pack("怀疑否定", "negative", "不信、反驳、推翻", [
    "skeptical|怀疑的|不轻易相信",
    "dubious|可疑的|真实性不稳",
    "incredulous|不相信的|听到后怀疑",
    "refute|反驳|证明对方错",
    "repudiate|拒绝承认|正式否定",
    "gainsay|否认，反驳|说对方不对",
    "discredit|使不可信|破坏名声或证据",
    "debunk|揭穿|拆掉错误说法",
    "belie|掩饰，证明为假|表象和事实不一致",
    "nullify|使无效|法律或效果归零",
    "negate|否定，抵消|让某事不成立",
    "contradict|反驳，矛盾|说法互相打架"
  ]),
  pack("顺从讨好", "negative", "让步、安抚、过分迎合", [
    "acquiesce|默许，顺从|不情愿但接受",
    "comply|遵从|按规则或要求做",
    "defer|听从，顺从|让别人决定",
    "capitulate|投降，让步|抵抗后放弃",
    "appease|安抚|给对方东西让其消气",
    "placate|安抚|让愤怒的人平静",
    "mollify|缓和，安抚|让情绪软下来",
    "propitiate|讨好，安抚|为了避免冒犯",
    "ingratiate|讨好|刻意让别人喜欢自己",
    "obsequious|谄媚的|过分顺从",
    "servile|奴性的|卑躬屈膝",
    "sycophantic|拍马屁的|为了利益奉承"
  ]),
  pack("改善缓和", "positive", "把坏情况变轻、变好、变柔和", [
    "ameliorate|改善|让糟糕处境变好",
    "alleviate|减轻，缓解|让痛苦或压力轻一点",
    "assuage|缓和，安抚|减轻不舒服的感受",
    "relieve|缓解，减轻|让压力或痛苦少一点",
    "palliate|减轻，缓和|治标式减轻痛苦",
    "salve|缓解，安慰|像给伤口上药",
    "soothe|安慰，缓和|让情绪平静",
    "rectify|纠正，修正|把错误改正",
    "redress|纠正，补偿|修复不公",
    "remedy|补救，治疗|解决问题或病症",
    "rehabilitate|恢复名誉，康复|让人或事重新站起来",
    "restore|恢复|让状态回到原来",
    "revitalize|使恢复活力|重新注入能量"
  ]),
  pack("恶化加剧", "negative", "让坏事更坏、火上浇油", [
    "exacerbate|使恶化|让问题更严重",
    "aggravate|加重，激怒|让伤害或怒气升级",
    "compound|加剧，使复杂|把问题叠上问题",
    "inflame|激起，加剧|让情绪或冲突升温",
    "intensify|增强，加剧|程度变得更强",
    "magnify|放大|让影响或错误显得更大",
    "worsen|恶化|情况往坏处走",
    "deteriorate|恶化，退化|质量逐步下降",
    "degenerate|退化，堕落|从好变坏",
    "degrade|降低，贬损|质量、地位或尊严下降",
    "corrupt|腐蚀，败坏|使道德或系统变坏",
    "taint|污染，玷污|留下坏影响",
    "contaminate|污染|把不纯或有害物带进去"
  ]),
  pack("傲慢自大", "negative", "高高在上、看不起人、过度自信", [
    "arrogant|傲慢的|把自己看得太高",
    "haughty|高傲的|姿态很冷很高",
    "supercilious|目中无人的|带轻蔑地俯视别人",
    "imperious|专横傲慢的|像命令人一样说话",
    "overbearing|盛气凌人的|压迫感很强",
    "presumptuous|冒昧自大的|越界地自以为是",
    "pompous|自大的，浮夸的|说话端着架子",
    "pretentious|装腔作势的|假装有品位或学问",
    "ostentatious|炫耀的|故意展示给别人看",
    "vainglorious|虚荣自负的|沉迷自己的荣耀",
    "hubris|傲慢自大|常导致失败的自负",
    "egotistical|自我中心的|总围着自己转",
    "condescending|居高临下的|假装亲切但看低别人"
  ]),
  pack("谦逊真诚", "positive", "不装、不虚、坦率可信", [
    "humble|谦逊的|不把自己摆太高",
    "modest|谦虚的，适度的|不过分夸自己",
    "unassuming|不摆架子的|低调自然",
    "ingenuous|天真坦率的|不藏心机",
    "candid|坦率的|话说得诚实直接",
    "forthright|直率的|不绕弯",
    "sincere|真诚的|情感和表达一致",
    "genuine|真实的|不是装出来的",
    "earnest|认真的，诚恳的|态度很真",
    "guileless|不狡诈的|没有骗人的心思",
    "artless|质朴坦率的|自然到不修饰",
    "unsophisticated|质朴不世故的|没有复杂心机",
    "openhearted|坦诚真挚的|愿意真诚表达"
  ]),
  pack("吝啬贪婪", "negative", "舍不得给、想拿更多、占有欲强", [
    "avaricious|贪婪的|对财富欲望很重",
    "covetous|贪求的|想要别人的东西",
    "rapacious|贪婪掠夺的|像抢一样获取",
    "grasping|贪婪的|伸手要更多",
    "greedy|贪心的|想占有超过需要",
    "parsimonious|吝啬的|花钱过分小气",
    "miserly|吝啬的|像守财奴",
    "penurious|吝啬的，贫困的|小气或资源贫乏",
    "stingy|小气的|不愿意给",
    "niggardly|吝啬的|给得很少",
    "cupidity|贪财|对钱财的强烈欲望",
    "acquisitive|贪得的|喜欢不断占有",
    "materialistic|物质主义的|过度看重物质"
  ]),
  pack("果断勇敢", "positive", "敢做决定、敢承担风险", [
    "resolute|坚定果断的|决定后不轻易动摇",
    "decisive|果断的|能迅速做决定",
    "intrepid|无畏的|面对危险不退",
    "dauntless|无畏的|很难被吓退",
    "valiant|英勇的|勇敢且值得敬佩",
    "mettlesome|勇敢有精神的|有胆量和活力",
    "venturesome|敢冒险的|愿意尝试有风险的事",
    "bold|大胆的|敢说敢做",
    "daring|勇敢冒险的|愿意挑战风险",
    "plucky|有胆量的|弱势下仍敢冲",
    "undaunted|不畏惧的|受挫后仍不怕",
    "steadfast|坚定不移的|忠于目标不动摇",
    "stalwart|坚定可靠的|像支柱一样稳"
  ]),
  pack("怯懦犹豫", "negative", "不敢、不定、退缩", [
    "timid|胆怯的|不敢主动",
    "diffident|缺乏自信的|对自己不确定",
    "craven|懦弱的|胆小到可鄙",
    "pusillanimous|懦弱的|正式词，胆量很少",
    "cowardly|胆小的|遇到风险就退",
    "irresolute|优柔寡断的|拿不定主意",
    "indecisive|犹豫不决的|无法做决定",
    "vacillate|摇摆不定|在选择之间晃来晃去",
    "waver|动摇，犹豫|信心或决定不稳",
    "hesitant|迟疑的|想做又不敢",
    "reluctant|不情愿的|内心抗拒",
    "skittish|易受惊的|一点动静就退缩",
    "fainthearted|怯懦的|心里没胆"
  ]),
  pack("沉默简洁", "neutral", "少说、收住、信息密度高", [
    "laconic|简短的|话少但有效",
    "terse|简洁生硬的|短到有点冷",
    "succinct|简明的|压缩但清楚",
    "gnomic|格言式简短的|短而带智慧感",
    "taciturn|沉默寡言的|平时不爱说话",
    "reticent|寡言保留的|不轻易透露想法",
    "reserved|内敛的|情绪和话语收着",
    "uncommunicative|不爱交流的|不给信息",
    "curt|简短粗鲁的|短到显得不礼貌",
    "elliptical|省略含蓄的|话没说全",
    "compressed|压缩的|表达被压短",
    "compendious|简明扼要的|压缩但覆盖重点",
    "economical|简省的|用词节约"
  ]),
  pack("多话冗长", "negative", "话太多、绕太久、声音太满", [
    "verbose|冗长的|用词超过需要",
    "wordy|啰嗦的|字很多但不一定有用",
    "prolix|冗长拖沓的|说写都太长",
    "garrulous|喋喋不休的|尤其聊琐事",
    "loquacious|健谈多话的|很爱说话",
    "voluble|滔滔不绝的|话流得很快",
    "long-winded|啰嗦冗长的|讲不到重点",
    "rambling|散漫冗长的|说着说着跑偏",
    "circumlocutory|拐弯抹角的|不用直话表达",
    "diffuse|冗散的|表达不集中",
    "digressive|离题的|经常跑到旁枝",
    "logorrhea|话多症|像停不下来的话流",
    "grandiloquent|夸张浮华的|话大而空"
  ]),
  pack("勤奋细致", "positive", "认真、细节控、持续投入", [
    "assiduous|勤勉的|持续认真投入",
    "diligent|勤奋的|稳定努力",
    "meticulous|一丝不苟的|细节非常准",
    "scrupulous|严谨正直的|细节和道德都小心",
    "painstaking|极其仔细的|愿意花苦功",
    "fastidious|挑剔细致的|对细节要求高",
    "thorough|彻底的|检查覆盖得全",
    "exacting|要求严格的|标准很高",
    "industrious|勤劳的|愿意持续工作",
    "sedulous|勤勉坚持的|长期用功",
    "persevering|坚持不懈的|不轻易停",
    "conscientious|认真负责的|有责任心",
    "punctilious|拘谨讲究细节的|礼节或规则很精确"
  ]),
  pack("懒散拖延", "negative", "慢、散、拖、不上心", [
    "indolent|懒惰的|不愿费力",
    "slothful|懒散的|行动迟缓",
    "lethargic|无精打采的|精神能量低",
    "torpid|迟钝懒散的|像进入休眠",
    "listless|无精打采的|没有兴趣和力气",
    "lackadaisical|漫不经心的|态度松散",
    "dilatory|拖延的|故意或习惯性慢",
    "procrastinate|拖延|把事情往后推",
    "sluggish|迟缓懒散的|行动慢且没劲",
    "perfunctory|敷衍的|只做表面动作",
    "negligent|疏忽的|没有尽到照看",
    "remiss|失职疏忽的|该做的没做",
    "inert|惰性的，不动的|缺少行动力"
  ]),
  pack("古怪反常", "neutral", "偏离常规、奇特、不按套路", [
    "eccentric|古怪的|行为偏离常人",
    "idiosyncratic|特异的|个人独有的怪特点",
    "quirky|古灵精怪的|有奇怪小特征",
    "bizarre|怪异的|奇到让人惊讶",
    "outlandish|怪异夸张的|超出常规品味",
    "unorthodox|非正统的|不按传统方法",
    "atypical|非典型的|不符合常见类型",
    "aberrant|异常的|偏离标准轨道",
    "deviant|偏离常规的|不按正常轨道走",
    "peculiar|奇特的|让人觉得不寻常",
    "singular|独特异常的|非常少见",
    "whimsical|异想天开的|随兴而奇特",
    "freakish|怪异反常的|异常到有点突兀"
  ]),
  pack("敌意争斗", "negative", "对抗、攻击、火药味", [
    "belligerent|好战的|随时准备冲突",
    "bellicose|好战的|喜欢挑起争斗",
    "pugnacious|好斗的|动不动要争",
    "combative|好斗的|态度带攻击性",
    "truculent|凶狠好斗的|语气强硬粗暴",
    "hostile|敌意的|明显不友好",
    "antagonistic|对抗的|站在反方向",
    "contentious|好争论的|容易引发争执",
    "fractious|易怒难管的|一点就炸",
    "quarrelsome|爱争吵的|经常吵架",
    "rancorous|充满怨恨的|敌意积得很深",
    "acrimonious|尖刻激烈的|争论里有苦味",
    "virulent|恶毒的|攻击性强"
  ]),
  pack("支持增强", "positive", "支撑、加固、让理由更强", [
    "bolster|支持，增强|给论点或信心加支架",
    "buttress|支撑，加强|像墙垛一样撑住",
    "fortify|加固，增强|让防御或意志更强",
    "reinforce|强化|再加一层支持",
    "augment|增加，增强|数量或力量加大",
    "amplify|放大，增强|声音、影响或意思扩大",
    "strengthen|加强|让力量或论证更稳",
    "underpin|支撑，构成基础|做底层依据",
    "validate|确认有效|让观点或结果站得住",
    "authenticate|鉴定为真|确认来源或身份可靠",
    "vindicate|证明无辜，辩护成功|让立场被洗清",
    "uphold|支持，维护|维持原则或判决",
    "endorse|支持，认可|公开表示赞成"
  ]),
  pack("短暂消逝", "neutral", "来得快、走得快、留不住", [
    "fleeting|短暂的|一闪而过",
    "meteoric|流星般短暂耀眼的|升起很快也可能很快消失",
    "passing|短暂经过的|很快就过去",
    "provisional|临时的|先用着，之后可能改变",
    "transitory|暂时的|不是长期状态",
    "momentary|片刻的|只持续一小会儿",
    "temporary|临时的|不是永久",
    "fugitive|短暂易逝的|难以抓住",
    "impermanent|非永久的|不会一直存在",
    "short-lived|短命的|持续时间短",
    "vanishing|逐渐消失的|正在不见",
    "fugacious|易逝的|正式词，短暂",
    "perishable|易腐坏的|不能久存"
  ]),
  pack("散漫无序", "negative", "乱、散、没有结构", [
    "chaotic|混乱的|没有秩序",
    "haphazard|随意杂乱的|没有计划",
    "disorderly|无序的|排列或行为混乱",
    "disorganized|组织混乱的|结构不清",
    "slapdash|草率乱做的|很快但不细",
    "random|随机的|没有明显规律",
    "shambolic|混乱无序的|组织得很糟",
    "untidy|凌乱的|收拾和结构都不整齐",
    "jumbled|混杂的|东西搅在一起",
    "cluttered|杂乱堆满的|空间或表达太挤",
    "incoherent|不连贯的|逻辑接不上",
    "fragmentary|碎片化的|只有零散部分",
    "sprawling|蔓延杂乱的|范围大但松散"
  ]),
  pack("虚弱疲惫", "negative", "没力、病弱、被耗空", [
    "debilitated|虚弱的|身体或系统被削弱",
    "enfeebled|衰弱的|力量变小",
    "infirm|体弱的|常因年龄或疾病",
    "frail|脆弱虚弱的|身体容易受损",
    "feeble|虚弱无力的|力量不足",
    "languid|倦怠无力的|动作慢而没精神",
    "weary|疲惫的|累到厌倦",
    "fatigued|疲劳的|体力或精神耗尽",
    "exhausted|筋疲力尽的|完全没电",
    "spent|耗尽的|力气已经用完",
    "anemic|贫血的，乏力的|也指表达缺乏力量",
    "wan|苍白虚弱的|脸色没精神",
    "haggard|憔悴的|疲惫写在脸上"
  ]),
  pack("聪慧博学", "positive", "脑子清楚、知识深、判断好", [
    "erudite|博学的|读书多知识深",
    "learned|有学问的|受过深厚训练",
    "sagacious|睿智的|判断敏锐",
    "astute|精明敏锐的|能看出关键",
    "perspicacious|洞察力强的|看得很透",
    "discerning|有辨识力的|能分出好坏",
    "shrewd|精明的|现实判断准",
    "insightful|有洞见的|能看到深层意义",
    "cerebral|理智的，智性的|偏脑力和思想",
    "intellectual|智性的|重视思考和知识",
    "sapient|有智慧的|正式词，明智",
    "percipient|洞察敏锐的|能迅速看出关键",
    "pragmatic|务实明智的|按实际效果判断"
  ]),
  pack("愚蠢天真", "negative", "缺判断、太单纯、容易被骗", [
    "fatuous|愚蠢的|自以为有趣或聪明",
    "asinine|愚蠢荒唐的|蠢到让人烦",
    "inane|空洞愚蠢的|没内容也没意义",
    "obtuse|迟钝的|理解力慢",
    "vacuous|空洞无脑的|缺少思想",
    "gullible|易受骗的|别人说什么都信",
    "credulous|轻信的|相信得太快",
    "callow|幼稚未成熟的|经验不足",
    "imbecilic|愚笨的|判断很差",
    "sophomoric|自以为聪明但幼稚的|半瓶水晃荡",
    "simpleminded|头脑简单的|思考不复杂",
    "unsuspecting|毫无戒心的|容易被利用",
    "witless|愚笨的|缺少机智"
  ]),
  pack("普通常见", "neutral", "平常、常规、到处都有", [
    "ubiquitous|无处不在的|到处都能见到",
    "prevalent|普遍的|某现象很常见",
    "commonplace|平凡常见的|普通到不稀奇",
    "mundane|平凡日常的|没什么特别",
    "ordinary|普通的|不特殊",
    "quotidian|日常的|每天都会遇到",
    "workaday|日常普通的|像工作日一样平常",
    "conventional|传统常规的|按通行方式来",
    "routine|例行的|重复发生",
    "standard|标准的|符合一般规范",
    "typical|典型的|很代表常见情况",
    "generic|通用普通的|缺少独特性",
    "unremarkable|平平无奇的|没有特别之处"
  ])
];

const state = {
  activePack: "all",
  activeValence: "all",
  view: "browse",
  query: "",
  quizWord: null,
  customWords: loadCustomWords(),
  known: new Set(JSON.parse(localStorage.getItem("greSemanticKnown") || "[]")),
  review: new Set(JSON.parse(localStorage.getItem("greSemanticReview") || "[]"))
};

const els = {
  totalWords: document.querySelector("#totalWords"),
  knownWords: document.querySelector("#knownWords"),
  reviewWords: document.querySelector("#reviewWords"),
  searchInput: document.querySelector("#searchInput"),
  packNav: document.querySelector("#packNav"),
  wordGrid: document.querySelector("#wordGrid"),
  activeTitle: document.querySelector("#activeTitle"),
  activeMeta: document.querySelector("#activeMeta"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  quizWord: document.querySelector("#quizWord"),
  quizMeaning: document.querySelector("#quizMeaning"),
  quizOptions: document.querySelector("#quizOptions"),
  quizFeedback: document.querySelector("#quizFeedback"),
  quizPackTitle: document.querySelector("#quizPackTitle"),
  neighborWords: document.querySelector("#neighborWords"),
  quizSpeakBtn: document.querySelector("#quizSpeakBtn"),
  nextQuizBtn: document.querySelector("#nextQuizBtn"),
  importText: document.querySelector("#importText"),
  importBtn: document.querySelector("#importBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  importStatus: document.querySelector("#importStatus"),
  clearProgressBtn: document.querySelector("#clearProgressBtn")
};

function pack(name, valence, description, entries) {
  return entries.map((entry) => {
    const [word, meaning, note] = entry.split("|");
    return { word, meaning, pack: name, valence, note, description };
  });
}

function allWords() {
  return [...BUILT_IN_PACKS.flat(), ...state.customWords].map((item, index) => ({
    ...item,
    id: `${item.word}-${item.pack}-${index}`.toLowerCase()
  }));
}

function packSummaries(words = allWords()) {
  const map = new Map();
  words.forEach((item) => {
    if (!map.has(item.pack)) {
      map.set(item.pack, {
        name: item.pack,
        valence: item.valence,
        description: item.description || "自定义词包",
        count: 0
      });
    }
    map.get(item.pack).count += 1;
  });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
}

function filteredWords() {
  const query = state.query.trim().toLowerCase();
  return allWords().filter((item) => {
    const matchesPack = state.activePack === "all" || item.pack === state.activePack;
    const matchesValence = state.activeValence === "all" || item.valence === state.activeValence;
    const haystack = `${item.word} ${item.meaning} ${item.pack} ${item.note}`.toLowerCase();
    return matchesPack && matchesValence && (!query || haystack.includes(query));
  });
}

function renderStats() {
  els.totalWords.textContent = allWords().length;
  els.knownWords.textContent = state.known.size;
  els.reviewWords.textContent = state.review.size;
}

function renderPackNav() {
  const packs = packSummaries();
  const total = allWords().length;
  els.packNav.innerHTML = "";
  els.packNav.appendChild(packButton({ name: "all", label: "全部词包", count: total, valence: "neutral" }));
  packs.forEach((summary) => {
    els.packNav.appendChild(packButton({
      name: summary.name,
      label: summary.name,
      count: summary.count,
      valence: summary.valence
    }));
  });
}

function packButton({ name, label, count, valence }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `pack-button ${state.activePack === name ? "active" : ""}`;
  button.dataset.pack = name;
  button.innerHTML = `
    <i class="dot ${valence}"></i>
    <span class="pack-name">${label}</span>
    <span class="pack-count">${count}</span>
  `;
  button.addEventListener("click", () => {
    state.activePack = name;
    render();
  });
  return button;
}

function renderBrowse() {
  const words = filteredWords();
  const packInfo = state.activePack === "all"
    ? { name: "全部词包", count: words.length, description: "按语义倾向扫一遍 GRE 高频核心词" }
    : packSummaries().find((item) => item.name === state.activePack);

  els.activeTitle.textContent = packInfo?.name || "全部词包";
  els.activeMeta.textContent = `${words.length} 个词 · ${packInfo?.description || "自定义词包"}`;
  els.wordGrid.innerHTML = "";

  if (!words.length) {
    els.wordGrid.innerHTML = `<div class="empty-state">没有匹配的词。换一个搜索词，或者切回“全部”。</div>`;
    return;
  }

  words.forEach((item) => {
    const card = document.createElement("article");
    card.className = "word-card";
    card.dataset.valence = item.valence;
    card.innerHTML = `
      <div class="word-title">
        <h3>${escapeHtml(item.word)}</h3>
        <div class="word-actions">
          <button class="speak-button" type="button" title="朗读 ${escapeHtml(item.word)}">▶</button>
          <button class="mark-button ${state.known.has(item.id) ? "is-known" : ""}" type="button" title="标记眼熟">✓</button>
        </div>
      </div>
      <p class="meaning">${escapeHtml(item.meaning)}</p>
      <p class="note">${escapeHtml(item.note || "")}</p>
      <div class="tags">
        <span class="tag">${escapeHtml(item.pack)}</span>
        <span class="tag">${valenceLabel(item.valence)}</span>
      </div>
    `;
    card.querySelector(".speak-button").addEventListener("click", () => speakWord(item.word));
    card.querySelector(".mark-button").addEventListener("click", () => toggleKnown(item.id));
    els.wordGrid.appendChild(card);
  });
}

function renderQuiz() {
  const words = filteredWords();
  const source = words.length >= 4 ? words : allWords();
  if (!state.quizWord || !source.some((item) => item.id === state.quizWord.id)) {
    state.quizWord = source[Math.floor(Math.random() * source.length)];
  }

  const answer = state.quizWord;
  const wrongPacks = packSummaries(allWords())
    .filter((item) => item.name !== answer.pack)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((item) => item.name);
  const options = [...wrongPacks, answer.pack].sort(() => Math.random() - 0.5);

  els.quizWord.textContent = answer.word;
  els.quizSpeakBtn.title = `朗读 ${answer.word}`;
  els.quizMeaning.textContent = "选择后显示释义";
  els.quizMeaning.classList.add("is-concealed");
  els.quizPackTitle.textContent = "选择后显示组块";
  els.quizPackTitle.classList.add("is-concealed");
  els.quizFeedback.textContent = "";
  els.quizOptions.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => gradeQuiz(button, option, answer));
    els.quizOptions.appendChild(button);
  });

  const neighbors = allWords()
    .filter((item) => item.pack === answer.pack && item.word !== answer.word)
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);
  els.neighborWords.innerHTML = neighbors.map((item) => `<span>${escapeHtml(item.word)}</span>`).join("");
}

function gradeQuiz(button, option, answer) {
  [...els.quizOptions.children].forEach((child) => {
    child.disabled = true;
    if (child.textContent === answer.pack) child.classList.add("correct");
  });

  revealQuizAnswer(answer);

  if (option === answer.pack) {
    button.classList.add("correct");
    state.known.add(answer.id);
    els.quizFeedback.textContent = `对。${answer.word} 的气味在“${answer.pack}”这一包里。`;
  } else {
    button.classList.add("wrong");
    state.review.add(answer.id);
    els.quizFeedback.textContent = `差一点。它更接近“${answer.pack}”：${answer.note}`;
  }
  saveProgress();
  renderStats();
}

function revealQuizAnswer(answer) {
  els.quizMeaning.textContent = answer.meaning;
  els.quizMeaning.classList.remove("is-concealed");
  els.quizPackTitle.textContent = answer.pack;
  els.quizPackTitle.classList.remove("is-concealed");
}

function nextQuiz() {
  const words = filteredWords();
  const source = words.length >= 4 ? words : allWords();
  state.quizWord = source[Math.floor(Math.random() * source.length)];
  renderQuiz();
}

function toggleKnown(id) {
  if (state.known.has(id)) {
    state.known.delete(id);
  } else {
    state.known.add(id);
    state.review.delete(id);
  }
  saveProgress();
  render();
}

function saveProgress() {
  localStorage.setItem("greSemanticKnown", JSON.stringify([...state.known]));
  localStorage.setItem("greSemanticReview", JSON.stringify([...state.review]));
}

function loadCustomWords() {
  try {
    const words = JSON.parse(localStorage.getItem("greSemanticCustomWords") || "[]");
    const cleaned = words.filter((item) => {
      const sourceText = `${item.note || ""} ${item.meaning || ""}`;
      return !/GRE Frequent Set|fallback|公开 GRE 词目|待补精确定义/.test(sourceText);
    });
    if (cleaned.length !== words.length) saveCustomWords(cleaned);
    return cleaned;
  } catch {
    return [];
  }
}

function saveCustomWords(words) {
  localStorage.setItem("greSemanticCustomWords", JSON.stringify(words));
}

function parseImport(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    const parsed = JSON.parse(trimmed);
    return Array.isArray(parsed) ? parsed : parsed.words || [];
  }

  const lines = trimmed.split(/\r?\n/).filter(Boolean);
  const header = lines.shift().split(",").map((cell) => cell.trim().toLowerCase());
  return lines.map((line) => {
    const cells = splitCsvLine(line);
    const row = Object.fromEntries(header.map((key, index) => [key, cells[index]?.trim() || ""]));
    return row;
  });
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current);
  return cells;
}

function normalizeImportedWords(words) {
  return words
    .map((item) => ({
      word: String(item.word || "").trim(),
      meaning: String(item.meaning || item.cn || "").trim(),
      pack: String(item.pack || item.category || "未分类").trim(),
      valence: normalizeValence(item.valence || item.tone),
      note: String(item.note || item.example || "").trim(),
      description: String(item.description || "自定义导入词包").trim()
    }))
    .filter((item) => item.word && item.meaning);
}

function normalizeValence(value) {
  const normalized = String(value || "").toLowerCase();
  if (["positive", "pos", "褒义", "正向"].includes(normalized)) return "positive";
  if (["negative", "neg", "贬义", "负向"].includes(normalized)) return "negative";
  return "neutral";
}

function valenceLabel(value) {
  return {
    positive: "正向",
    negative: "负向",
    neutral: "中性"
  }[value] || "中性";
}

function speakWord(word) {
  const synth = window.speechSynthesis;
  if (!synth) {
    alert("这个浏览器暂时不支持朗读。");
    return;
  }

  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  const voices = synth.getVoices();
  const voice = voices.find((item) => item.lang?.toLowerCase().startsWith("en-us"))
    || voices.find((item) => item.lang?.toLowerCase().startsWith("en"));
  if (voice) utterance.voice = voice;
  markSpeaking(word);
  utterance.onend = clearSpeakingMarks;
  utterance.onerror = clearSpeakingMarks;
  synth.speak(utterance);
}

function markSpeaking(word) {
  document.querySelectorAll(".speak-button").forEach((button) => {
    button.classList.toggle("is-speaking", button.title.includes(word));
  });
}

function clearSpeakingMarks() {
  document.querySelectorAll(".speak-button").forEach((button) => {
    button.classList.remove("is-speaking");
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${view}View`);
  });
  if (view === "quiz") renderQuiz();
}

function render() {
  renderStats();
  renderPackNav();
  renderBrowse();
  if (state.view === "quiz") renderQuiz();
}

document.querySelectorAll(".toolbar-group [data-valence]").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeValence = button.dataset.valence;
    document.querySelectorAll(".toolbar-group [data-valence]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    render();
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.shuffleBtn.addEventListener("click", () => {
  const packs = packSummaries(filteredWords().length ? filteredWords() : allWords());
  if (!packs.length) return;
  state.activePack = packs[Math.floor(Math.random() * packs.length)].name;
  render();
});

els.nextQuizBtn.addEventListener("click", nextQuiz);
els.quizSpeakBtn.addEventListener("click", () => {
  if (state.quizWord) speakWord(state.quizWord.word);
});

els.importBtn.addEventListener("click", () => {
  try {
    const imported = normalizeImportedWords(parseImport(els.importText.value));
    if (!imported.length) {
      els.importStatus.textContent = "没有读到有效词条。至少需要 word 和 meaning。";
      return;
    }
    state.customWords = imported;
    saveCustomWords(imported);
    els.importStatus.textContent = `导入成功：${imported.length} 个词。`;
    render();
  } catch (error) {
    els.importStatus.textContent = `导入失败：${error.message}`;
  }
});

els.resetBtn.addEventListener("click", () => {
  state.customWords = [];
  saveCustomWords([]);
  els.importText.value = "";
  els.importStatus.textContent = "已恢复内置词库。";
  render();
});

els.clearProgressBtn.addEventListener("click", () => {
  state.known.clear();
  state.review.clear();
  saveProgress();
  render();
});

render();
