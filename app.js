const ACTION_TRANSLATIONS_ZHTW = {
  "Attack": "攻打",
  "Siege": "圍攻",
  "Change Card": "棄牌",
  "Pass": "跳過",
  "Fox Change Card": "狐狸棄牌",
  "Hunter Rule": "獵人規則",
  "Bacteria Rule": "細菌規則",
  "Join Siege": "加入圍攻",
  "Stay Out": "不加入",
  "Attack Win": "攻打勝利",
  "Attack Loss": "攻打失敗",
  "Attack Tie": "攻打平手",
  "Siege Attackers Win": "圍攻方勝利",
  "Siege Defender Wins": "防守方勝利",
  "No Allies Join": "沒有人加入圍攻",
  "Take Trophy": "取得戰利品",
  "Draw Replacement": "補抽卡片",
  "Deck Ends": "牌庫耗盡",
  "Final Scoring": "最終計分",
  "Claim Trophy": "宣告戰利品",
  "Tiger": "老虎",
  "Panda": "熊貓",
  "Lion": "獅子",
  "Leopard": "豹",
  "Wolf": "狼",
  "Fox": "狐狸",
  "Snake": "蛇",
  "Meerkat": "狐獴",
  "Rabbit": "兔子",
  "Mosquito": "蚊子",
  "Flea": "跳蚤",
  "Monkey": "猴子",
  "Bear": "熊",
  "Hunter": "獵人",
  "Bacteria": "細菌",
};

const VOCAB_TRANSLATIONS_ZHTW = {
  ally: "盟友",
  allies: "盟友",
  alliance: "聯盟",
  adapt: "適應",
  attack: "攻擊",
  attacker: "攻擊者",
  antenna: "觸角",
  bacteria: "細菌",
  battle: "戰鬥",
  badge: "徽章",
  body: "身體",
  besiege: "圍攻",
  boot: "靴子",
  braid: "編繩",
  ceremonial: "儀式性的",
  challenge: "挑戰",
  choose: "選擇",
  clipping: "剪下物",
  clay: "黏土",
  consequence: "後果",
  contour: "輪廓",
  compare: "比較",
  claw: "爪子",
  claws: "爪子",
  deception: "欺瞞",
  decisive: "決定性的",
  deck: "牌庫",
  defender: "防守方",
  dominance: "優勢",
  discard: "棄牌",
  draw: "抽牌",
  coat: "外套",
  ends: "結束",
  evidence: "證據",
  ear: "耳朵",
  ears: "耳朵",
  eye: "眼睛",
  eyes: "眼睛",
  face: "臉",
  fang: "獠牙",
  fangs: "獠牙",
  fur: "毛皮",
  force: "迫使",
  hat: "帽子",
  glove: "手套",
  hair: "毛髮",
  handprint: "手印",
  hand: "手",
  horn: "角",
  horns: "角",
  hunter: "獵人",
  inevitable: "不可避免的",
  imprint: "印痕",
  intimidation: "威嚇",
  isolation: "孤立",
  join: "加入",
  ink: "墨水",
  match: "對決",
  medium: "媒材",
  mane: "鬃毛",
  mold: "模具",
  molding: "翻模",
  momentum: "氣勢",
  nose: "鼻子",
  outcome: "結果",
  participate: "參與",
  paper: "紙",
  pass: "跳過",
  pattern: "圖案",
  paw: "掌",
  posture: "姿勢",
  mouthpart: "口器",
  leg: "腿",
  penalty: "懲罰",
  print: "印記",
  preserve: "保存",
  prey: "獵物",
  prevail: "獲勝",
  replacement: "替換",
  replica: "複製品",
  resin: "樹脂",
  resilience: "韌性",
  reveal: "展示",
  relief: "浮雕",
  score: "分數",
  scale: "鱗片",
  scales: "鱗片",
  sketch: "素描",
  siege: "圍攻",
  silhouette: "剪影",
  skip: "跳過",
  shell: "外殼",
  specimen: "標本",
  strand: "一縷",
  stripe: "條紋",
  striped: "有條紋的",
  stripes: "條紋",
  strategy: "策略",
  strength: "戰力",
  survive: "生存",
  tactical: "戰術性的",
  tail: "尾巴",
  teeth: "牙齒",
  tooth: "牙齒",
  territorial: "領地的",
  tie: "平手",
  trophy: "戰利品",
  vulnerability: "弱點",
  winner: "勝利者",
  wax: "蠟",
  whisker: "鬍鬚",
  whiskers: "鬍鬚",
  wing: "翅膀",
  wings: "翅膀",
  restraint: "克制",
  collective: "集體的",
  collapse: "崩潰",
  miscalculate: "誤判",
};

const VOCAB_FORM_VARIANTS = {
  ally: ["allies"],
  allies: ["ally"],
  alliance: ["allies"],
  adapt: ["adapts"],
  attack: ["attacks", "attacked", "attacking", "attacker"],
  attacker: ["attackers"],
  besiege: ["siege", "besieged"],
  choose: ["chooses", "choosing", "chosen"],
  claw: ["claws"],
  claws: ["claw"],
  compare: ["compares", "comparing"],
  clipping: ["clip"],
  decisive: ["decision"],
  discard: ["discards", "discarded", "discarding"],
  dominance: ["dominant"],
  draw: ["draws", "drawing"],
  inevitable: ["inevitably"],
  imprint: ["imprints"],
  join: ["joins", "joined", "joining"],
  mold: ["molding"],
  preserve: ["preserves", "preserved"],
  prevail: ["prevails", "prevailed"],
  participate: ["participates", "participating"],
  replica: ["replicate", "replicated"],
  resilience: ["resilient"],
  reveal: ["reveals", "revealed", "revealing"],
  score: ["scores", "scoring"],
  scale: ["scales"],
  scales: ["scale"],
  stripe: ["striped", "stripes"],
  striped: ["stripe", "stripes"],
  stripes: ["stripe", "striped"],
  strategy: ["strategic"],
  siege: ["besiege", "besieged"],
  survive: ["survives", "survived"],
  tie: ["tied"],
  trophy: ["trophies"],
  wing: ["wings"],
  wings: ["wing"],
  winner: ["wins", "won"],
};

const ACTION_GROUPS = [
  {
    title: "Attack",
    subline: "Choose one player and compare card strength.",
    vocabulary: ["attack", "choose", "compare", "strength", "winner", "trophy", "decisive", "dominance", "vulnerability", "tactical"],
    lines: [
      "Target locked. One decisive bite will expose your vulnerability.",
      "I smell weakness. Time to establish dominance.",
      "Come on, bite me. Let's compare real strength under pressure.",
      "No more hiding. This tactical match is mine to win.",
    ],
  },
  {
    title: "Siege",
    subline: "Invite allies to combine strength against one player.",
    vocabulary: ["siege", "ally", "join", "participate", "strength", "trophy", "alliance", "momentum", "territorial", "intimidation"],
    lines: [
      "Pack call! This alliance turns pressure into momentum.",
      "I start the siege. Allies, sharpen the intimidation.",
      "The hunt is louder with friends. Who joins this territorial attack?",
      "Circle the target. Combined strength changes everything.",
    ],
  },
  {
    title: "Change Card",
    subline: "Discard your current card face down and draw a replacement.",
    vocabulary: ["discard", "draw", "replacement", "score", "penalty", "adapt", "resilience", "consequence"],
    lines: [
      "New skin, new claws. I adapt, discard, and draw.",
      "This form has reached its limit. Give me a replacement.",
      "I vanish into the brush and return with resilience.",
      "I accept the consequence. Survival costs something.",
    ],
  },
  {
    title: "Pass",
    subline: "Skip your action and end your turn.",
    vocabulary: ["pass", "skip", "choose", "survive", "strategy", "restraint", "preserve"],
    lines: [
      "I pass. Strategic restraint is still a weapon.",
      "Not my bite, not my risk. I preserve my position.",
      "I choose patience. Survival rewards discipline.",
      "I fade into the grass. Let the next hunter move.",
    ],
  },
];

const SPECIAL_GROUPS = [
  {
    title: "Fox Change Card",
    subline: "The fox may reveal itself before changing cards.",
    vocabulary: ["reveal", "discard", "draw", "choose", "evidence", "deception"],
    lines: [
      "Fox revealed. Deception becomes evidence.",
      "I read the shadows. Now I discard and draw.",
      "The fox smiles first, then changes the entire strategy.",
    ],
  },
  {
    title: "Hunter Rule",
    subline: "The hunter is stronger when defending against a siege.",
    vocabulary: ["hunter", "siege", "attacker", "strength", "winner", "prevail", "miscalculate"],
    lines: [
      "You brought a pack to a hunter fight? Bold miscalculation.",
      "More attackers, more trophies for the hunter to preserve.",
      "The hunter waits alone, and the siege fails to prevail.",
    ],
  },
  {
    title: "Bacteria Rule",
    subline: "Bacteria always wins battles but cannot attack or join attacks.",
    vocabulary: ["bacteria", "battle", "attack", "siege", "winner", "inevitable", "consequence"],
    lines: [
      "You bit the bacteria. The consequence is inevitable.",
      "Tiny monster, endless battle pressure.",
      "I do not chase prey. Prey makes the fatal strategic error.",
    ],
  },
];

const SIEGE_REACTION_GROUPS = [
  {
    title: "Join Siege",
    subline: "A player agrees to join the group attack.",
    vocabulary: ["join", "siege", "ally", "strength", "participate", "alliance", "momentum"],
    lines: [
      "I join the siege. Let the alliance roar.",
      "My strength joins the cause. We shift the momentum now.",
      "Count me in. This attack needs sharper teeth and better strategy.",
    ],
  },
  {
    title: "Stay Out",
    subline: "A player chooses not to join the siege.",
    vocabulary: ["siege", "join", "choose", "survive", "restraint", "consequence"],
    lines: [
      "Not my hunt. I choose restraint.",
      "I choose survival. That siege brings its own consequence.",
      "No bite from me. I will watch from the shadows.",
    ],
  },
];

const OUTCOME_GROUPS = [
  {
    title: "Attack Win",
    subline: "The attacker has higher strength.",
    vocabulary: ["attacker", "strength", "winner", "trophy", "draw", "decisive", "dominance", "prevail"],
    lines: [
      "Predator prevails. Your card becomes evidence of dominance.",
      "My strength breaks the balance. Trophy secured.",
      "The attack lands with decisive force. Draw again and regroup.",
    ],
  },
  {
    title: "Attack Loss",
    subline: "The defender has higher strength.",
    vocabulary: ["attack", "strength", "winner", "trophy", "replacement", "resilience", "consequence"],
    lines: [
      "The prey had fangs. My attack meets its consequence.",
      "I lunged too far. Take your trophy.",
      "Your strength answered mine. I draw a replacement and recover resilience.",
    ],
  },
  {
    title: "Attack Tie",
    subline: "A tie goes to the attacking player.",
    vocabulary: ["tie", "attacker", "winner", "trophy", "momentum", "decisive"],
    lines: [
      "A tie? Momentum belongs to the attacker.",
      "Same strength, sharper nerve. The decisive move takes it.",
      "Equal claws, but I struck first. Trophy claimed.",
    ],
  },
  {
    title: "Siege Attackers Win",
    subline: "The combined attackers beat the defender.",
    vocabulary: ["siege", "allies", "strength", "winner", "trophy", "alliance", "collective", "prevail"],
    lines: [
      "The siege hits like thunder. The alliance prevails.",
      "Allies rise together, but the smallest hunter claims the trophy.",
      "Collective strength wins. The pack owns this battle.",
    ],
  },
  {
    title: "Siege Defender Wins",
    subline: "The defender beats the combined attackers.",
    vocabulary: ["siege", "defender", "attacker", "trophy", "replacement", "resilience", "collapse"],
    lines: [
      "The defender's resilience breaks the whole siege.",
      "The pack collapses. Every attacker pays.",
      "That siege becomes my trophy collection.",
    ],
  },
  {
    title: "No Allies Join",
    subline: "A siege with no allies becomes a normal attack.",
    vocabulary: ["siege", "allies", "join", "force", "attack", "isolation", "momentum"],
    lines: [
      "No allies answered. Isolation changes the hunt.",
      "The pack is silent. This siege loses momentum.",
      "No one joins the roar. Now the bite happens alone.",
    ],
  },
  {
    title: "Take Trophy",
    subline: "The winner places the losing card face up for points.",
    vocabulary: ["winner", "trophy", "score", "reveal"],
    lines: [
      "Trophy claimed. Let everyone see the scar.",
      "Another score for the food chain.",
      "Raise the trophy. The jungle remembers.",
    ],
  },
  {
    title: "Draw Replacement",
    subline: "A player who lost their hidden card draws a new one.",
    vocabulary: ["draw", "replacement", "discard", "survive"],
    lines: [
      "Wounded, not dead. Draw a replacement.",
      "The old skin is gone. Take a new secret.",
      "Survive the bite. Draw from the deck.",
    ],
  },
  {
    title: "Deck Ends",
    subline: "The game ends when the last card is drawn.",
    vocabulary: ["draw", "deck", "ends", "score", "winner"],
    lines: [
      "The deck is empty. The jungle goes quiet.",
      "Last card drawn. No more hiding, only score.",
      "The hunt ends now. Count the damage.",
    ],
  },
  {
    title: "Final Scoring",
    subline: "Trophies score their values; discarded cards lose points.",
    vocabulary: ["score", "trophy", "discard", "penalty", "winner"],
    lines: [
      "Trophies roar. Penalties bite back.",
      "Count every trophy. The highest score rules the jungle.",
      "Discarded shadows cost points. Only the strongest score survives.",
    ],
  },
];

const GAME_VERSIONS = [
  {
    id: "english-anniversary",
    label: "English Anniversary",
    subline: "Tiger, Panda, Lion, Leopard, Wolf, Fox, Snake, Meerkat, Rabbit, Mosquito, Flea, Monkey, Hunter.",
    trophyCards: ["Tiger", "Panda", "Lion", "Leopard", "Wolf", "Fox", "Snake", "Meerkat", "Rabbit", "Mosquito", "Flea", "Monkey", "Hunter"],
  },
  {
    id: "classic-chinese",
    label: "Classic Chinese",
    subline: "Rabbit, Snake, Fox, Wolf, Leopard, Lion, Bear, Tiger, Hunter.",
    trophyCards: ["Rabbit", "Snake", "Fox", "Wolf", "Leopard", "Lion", "Bear", "Tiger", "Hunter"],
  },
];

const CARD_VALUES = {
  "classic-chinese": {
    Rabbit: 1,
    Snake: 2,
    Fox: 3,
    Wolf: 4,
    Leopard: 5,
    Lion: 6,
    Bear: 7,
    Tiger: 8,
    Hunter: 9,
  },
  "english-anniversary": {
    Flea: -1,
    Mosquito: 1,
    Rabbit: 2,
    Snake: 3,
    Fox: 4,
    Wolf: 5,
    Meerkat: 6,
    Leopard: 7,
    Lion: 8,
    Panda: 9,
    Tiger: 10,
    Monkey: 0,
    Hunter: 9,
  },
};

const TROPHY_MEDIA = ["clipping", "wax imprint", "clay molding", "resin replica", "line sketch", "paper silhouette"];

const TROPHY_CARD_LIBRARY = [
  {
    title: "Tiger",
    traits: "fur and paw",
    vocabulary: ["trophy", "imprint", "contour", "preserve", "dominance", "specimen"],
    lines: [
      "I claim the tiger's fur through a wax imprint.",
      "A resin replica of the paw proves dominance.",
      "The stripe pattern survives as a line sketch in my collection.",
    ],
  },
  {
    title: "Panda",
    traits: "fur pattern",
    vocabulary: ["trophy", "replica", "silhouette", "preserve", "specimen"],
    lines: [
      "I claim the panda's black-and-white fur pattern as a resin replica.",
      "The panda silhouette is preserved on paper.",
      "A line sketch of calm eyes and unmistakable fur becomes my trophy.",
    ],
  },
  {
    title: "Lion",
    traits: "mane and paw",
    vocabulary: ["trophy", "ceremonial", "imprint", "preserve", "dominance"],
    lines: [
      "I claim the lion's mane as a ceremonial line sketch.",
      "The paw takes shape as a wax imprint.",
      "A clay molding of the mane silhouette records the change of dominance.",
    ],
  },
  {
    title: "Leopard",
    traits: "fur and claw",
    vocabulary: ["trophy", "contour", "imprint", "preserve", "decisive"],
    lines: [
      "I claim the leopard's spotted fur through a wax imprint.",
      "A resin replica of that claw records the decisive moment.",
      "The spots stay sharp as a line sketch.",
    ],
  },
  {
    title: "Wolf",
    traits: "fur and tooth",
    vocabulary: ["trophy", "mold", "replica", "preserve", "alliance"],
    lines: [
      "I claim the wolf's fur as a paper silhouette.",
      "Use clay molding for the tooth, not the tooth itself.",
      "A resin replica preserves the wolf's profile after the alliance breaks.",
    ],
  },
  {
    title: "Fox",
    traits: "tail and ear",
    vocabulary: ["trophy", "silhouette", "deception", "preserve", "imprint"],
    lines: [
      "I claim the fox tail as a paper silhouette.",
      "Sketch the ear silhouette. Deception finally has a shape.",
      "A wax imprint of that clever face belongs in my trophy row.",
    ],
  },
  {
    title: "Snake",
    traits: "scales and fang",
    vocabulary: ["trophy", "imprint", "specimen", "preserve", "vulnerability"],
    lines: [
      "I claim the snake's scale pattern as a wax imprint.",
      "The fang becomes a clay molding. No bite required.",
      "A line sketch of the head silhouette exposes the snake's vulnerability.",
    ],
  },
  {
    title: "Meerkat",
    traits: "fur and posture",
    vocabulary: ["trophy", "silhouette", "replica", "preserve", "resilience"],
    lines: [
      "I claim the meerkat's alert posture as a paper silhouette.",
      "A resin replica preserves that watchful stance.",
      "The fur pattern becomes a line sketch full of resilience.",
    ],
  },
  {
    title: "Rabbit",
    traits: "ear and fur",
    vocabulary: ["trophy", "silhouette", "imprint", "preserve", "vulnerability"],
    lines: [
      "I claim the rabbit's ear silhouette as a wax imprint.",
      "The soft fur pattern becomes a gentle line sketch.",
      "A resin replica preserves the long ear.",
    ],
  },
  {
    title: "Mosquito",
    traits: "wing and legs",
    vocabulary: ["trophy", "sketch", "silhouette", "specimen", "imprint"],
    lines: [
      "I claim the mosquito's wing as a line sketch.",
      "The needle-like silhouette is preserved on paper.",
      "Small target, sharp memory. The leg imprint becomes my trophy.",
    ],
  },
  {
    title: "Flea",
    traits: "legs and shell",
    vocabulary: ["trophy", "silhouette", "imprint", "specimen", "preserve"],
    lines: [
      "I claim the flea's jumping silhouette as a paper trophy.",
      "A clay molding of the tiny leg is enough evidence.",
      "The shell pattern survives as a wax imprint.",
    ],
  },
  {
    title: "Monkey",
    traits: "tail and hand",
    vocabulary: ["trophy", "contour", "imprint", "replica", "strategy"],
    lines: [
      "I claim the monkey's tail as a resin replica.",
      "A handprint wax imprint records the failed strategy.",
      "A line sketch of that clever grin joins my trophy row.",
    ],
  },
  {
    title: "Bear",
    traits: "claw and paw",
    vocabulary: ["trophy", "imprint", "dominance", "preserve", "specimen"],
    lines: [
      "I claim the bear's claw as a resin replica.",
      "The heavy paw imprint settles into wax.",
      "A line sketch of the broad fur outline marks a shift in dominance.",
    ],
  },
  {
    title: "Hunter",
    traits: "hat, boot, and glove",
    vocabulary: ["trophy", "imprint", "silhouette", "replica", "evidence"],
    lines: [
      "I claim the hunter's boot print as a wax imprint.",
      "A resin replica of the hat brim proves the trapper got trapped.",
      "The glove outline joins my trophy row as a paper silhouette.",
    ],
  },
];

const TROPHY_WORKSHOP = {
  Tiger: [
    { part: "fur", media: ["clipping", "wax imprint"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "whisker", media: ["clipping", "line sketch"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "tail", media: ["paper silhouette", "line sketch"] },
  ],
  Panda: [
    { part: "fur", media: ["clipping", "line sketch"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "eye", media: ["line sketch", "paper silhouette"] },
    { part: "nose", media: ["wax imprint", "clay molding"] },
  ],
  Lion: [
    { part: "mane", media: ["clipping", "line sketch"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "tail", media: ["paper silhouette", "line sketch"] },
    { part: "tooth", media: ["clay molding", "resin replica"] },
  ],
  Leopard: [
    { part: "fur", media: ["clipping", "wax imprint"] },
    { part: "claw", media: ["clipping", "resin replica"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "tail", media: ["paper silhouette", "line sketch"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
  ],
  Wolf: [
    { part: "fur", media: ["clipping", "paper silhouette"] },
    { part: "tooth", media: ["clay molding", "resin replica"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "tail", media: ["paper silhouette", "line sketch"] },
  ],
  Fox: [
    { part: "tail", media: ["clipping", "paper silhouette"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "face", media: ["wax imprint", "line sketch"] },
    { part: "whisker", media: ["clipping", "line sketch"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
  ],
  Snake: [
    { part: "scales", media: ["wax imprint", "line sketch"] },
    { part: "fang", media: ["clay molding", "resin replica"] },
    { part: "tail", media: ["paper silhouette", "line sketch"] },
    { part: "head", media: ["paper silhouette", "line sketch"] },
    { part: "eye", media: ["line sketch", "resin replica"] },
  ],
  Meerkat: [
    { part: "fur", media: ["clipping", "line sketch"] },
    { part: "posture", media: ["paper silhouette", "resin replica"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "tail", media: ["paper silhouette", "line sketch"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
  ],
  Rabbit: [
    { part: "ear", media: ["paper silhouette", "wax imprint"] },
    { part: "fur", media: ["clipping", "line sketch"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "tail", media: ["clipping", "paper silhouette"] },
    { part: "whisker", media: ["clipping", "line sketch"] },
  ],
  Mosquito: [
    { part: "wing", media: ["line sketch", "resin replica"] },
    { part: "mouthpart", media: ["paper silhouette", "line sketch"] },
    { part: "leg", media: ["wax imprint", "line sketch"] },
    { part: "body", media: ["paper silhouette", "resin replica"] },
    { part: "antenna", media: ["line sketch", "paper silhouette"] },
  ],
  Flea: [
    { part: "leg", media: ["clay molding", "line sketch"] },
    { part: "body", media: ["paper silhouette", "resin replica"] },
    { part: "antenna", media: ["line sketch", "paper silhouette"] },
    { part: "shell", media: ["wax imprint", "line sketch"] },
    { part: "posture", media: ["paper silhouette", "line sketch"] },
  ],
  Monkey: [
    { part: "tail", media: ["paper silhouette", "resin replica"] },
    { part: "hand", media: ["wax imprint", "clay molding"] },
    { part: "fur", media: ["clipping", "line sketch"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "face", media: ["wax imprint", "line sketch"] },
  ],
  Bear: [
    { part: "claw", media: ["clipping", "resin replica"] },
    { part: "fur", media: ["clipping", "line sketch"] },
    { part: "paw", media: ["wax imprint", "clay molding"] },
    { part: "ear", media: ["paper silhouette", "line sketch"] },
    { part: "nose", media: ["wax imprint", "clay molding"] },
  ],
  Hunter: [
    { part: "hat", media: ["resin replica", "paper silhouette"] },
    { part: "boot", media: ["wax imprint", "clay molding"] },
    { part: "glove", media: ["line sketch", "paper silhouette"] },
    { part: "coat", media: ["paper silhouette", "line sketch"] },
    { part: "badge", media: ["clay molding", "resin replica"] },
  ],
};

const MIN_SHARED_PLAYERS = 3;
const MAX_SHARED_PLAYERS = 10;
const MAX_SIEGE_ALLIES = 2;
const MISSION_LENGTH_OPTIONS = [2, 3, 4, 5];
const DEFAULT_MISSION_LENGTH = 3;
const SAVED_GAME_KEY = "bite-shared-game-progress";
const VOICE_LAYER_STORAGE_KEY = "bite-voice-line-layers-v1";
const VOICE_LINE_LAYERS = [
  {
    id: "turn-actions",
    label: "Turn Actions",
    description: "Attack, Siege, Change Card, and Pass declarations.",
  },
  {
    id: "target-siege-setup",
    label: "Target / Siege Setup",
    description: "Lines that frame target pressure and siege setup.",
  },
  {
    id: "siege-reactions",
    label: "Siege Reactions",
    description: "Join Siege, Stay Out, and no-allies moments.",
  },
  {
    id: "match-outcomes",
    label: "Match Outcomes",
    description: "Attack and siege win, loss, and tie results.",
  },
  {
    id: "trophy-claims",
    label: "Trophy Claims",
    description: "Defeated-card and body-part trophy claim lines.",
  },
  {
    id: "replacement-recovery",
    label: "Replacement / Recovery",
    description: "Card replacement, changing cards, and recovery beats.",
  },
  {
    id: "special-card-rules",
    label: "Special Card Rules",
    description: "Fox, Hunter, and Bacteria rule reminder lines.",
  },
  {
    id: "game-end-scoring",
    label: "Game End / Scoring",
    description: "Deck end, final scoring, and winner lines.",
  },
];
const VOICE_LINE_LAYER_IDS = VOICE_LINE_LAYERS.map((layer) => layer.id);
const DEFAULT_VISIBLE_VOICE_LAYER_IDS = new Set([
  "turn-actions",
  "target-siege-setup",
  "siege-reactions",
  "trophy-claims",
]);
const savedGameProgress = loadSavedGameProgress();

const state = {
  route: "home",
  gameVersion: savedGameProgress?.gameVersion || localStorage.getItem("bite-game-version") || "",
  workshopAnimal: "",
  workshopSort: "body",
  trophyMissionLength: Number(localStorage.getItem("bite-trophy-mission-length")) || DEFAULT_MISSION_LENGTH,
  testMode: localStorage.getItem("bite-test-mode") === "true",
  showChineseNames: localStorage.getItem("bite-show-chinese-names") !== "false",
  showVocabTranslations: localStorage.getItem("bite-show-vocab-translations") !== "false",
  visibleVoiceLayers: loadVisibleVoiceLayers(),
  linePools: loadLinePools(),
  shared: savedGameProgress?.shared || createSharedState(),
};

const app = document.querySelector("#app");
const backButton = document.querySelector(".back-button");
const settingsButton = document.querySelector(".settings-button");
const settingsModal = document.querySelector("#settings-modal");
const testModeInput = document.querySelector("#test-mode");
const modal = document.querySelector("#line-modal");
const modalTitle = document.querySelector("#modal-title");
const modalKicker = document.querySelector("#modal-kicker");
const modalContent = document.querySelector("#modal-content");
const showChineseInput = document.querySelector("#show-chinese");
const showVocabTranslationInput = document.querySelector("#show-vocab-translation");
const versionSettings = document.querySelector("#version-settings");
const missionLengthSettings = document.querySelector("#mission-length-settings");
const voiceLayerOptions = document.querySelector("#voice-layer-options");
const sharedSetupModal = document.querySelector("#shared-setup-modal");
const sharedSetupContent = document.querySelector("#shared-setup-content");

init();

function init() {
  testModeInput.checked = state.testMode;
  showChineseInput.checked = state.showChineseNames;
  showVocabTranslationInput.checked = state.showVocabTranslations;
  renderVersionSettings();
  renderMissionLengthSettings();
  renderVoiceLayerSettings();
  bindShellEvents();
  render();
}

function bindShellEvents() {
  backButton.addEventListener("click", () => {
    if (state.route === "workshop" && state.workshopAnimal) {
      state.workshopAnimal = "";
    } else {
      state.route = ["actions", "outcomes"].includes(state.route) ? "own-device" : "home";
    }
    render();
  });

  settingsButton.addEventListener("click", () => settingsModal.showModal());
  document.querySelector(".close-settings").addEventListener("click", () => settingsModal.close());
  document.querySelector(".close-modal").addEventListener("click", () => modal.close());
  document.querySelector(".close-shared-setup").addEventListener("click", () => sharedSetupModal.close());

  testModeInput.addEventListener("change", () => {
    state.testMode = testModeInput.checked;
    localStorage.setItem("bite-test-mode", String(state.testMode));
    if (modal.open) redrawOpenModal();
  });

  showChineseInput.addEventListener("change", () => {
    state.showChineseNames = showChineseInput.checked;
    localStorage.setItem("bite-show-chinese-names", String(state.showChineseNames));
    render();
    if (modal.open) redrawOpenModal();
  });

  showVocabTranslationInput.addEventListener("change", () => {
    state.showVocabTranslations = showVocabTranslationInput.checked;
    localStorage.setItem("bite-show-vocab-translations", String(state.showVocabTranslations));
    if (modal.open) redrawOpenModal();
  });

  voiceLayerOptions.addEventListener("change", (event) => {
    const input = event.target.closest("[data-voice-layer]");
    if (!input) return;
    state.visibleVoiceLayers[input.dataset.voiceLayer] = input.checked;
    saveVisibleVoiceLayers();
    if (modal.open) redrawOpenModal();
  });

  settingsModal.addEventListener("click", (event) => {
    const button = event.target.closest("[data-voice-layer-select]");
    if (!button) return;
    setAllVoiceLayersVisible(button.dataset.voiceLayerSelect === "all");
    if (modal.open) redrawOpenModal();
  });

  [modal, settingsModal, sharedSetupModal].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}

function render() {
  saveGameProgress();
  backButton.classList.toggle("hidden", state.route === "home" || state.route === "version-select");

  if (!state.gameVersion) {
    state.route = "version-select";
    renderVersionPicker();
    return;
  }

  if (state.route === "home") {
    app.innerHTML = `
      <section class="home-grid" aria-label="Choose device mode">
        ${hasSavedGameProgress() ? `
          <button class="big-choice" type="button" data-resume-game>
            <strong>Resume Game</strong>
            <span>Continue the saved shared game.</span>
          </button>
        ` : ""}
        <button class="big-choice" type="button" data-open-shared-setup>
          <strong>Start Game</strong>
          <span>Pass one device around for outcome lines.</span>
        </button>
        <button class="big-choice" type="button" data-route="workshop">
          <strong>Trophy Workshop</strong>
          <span>Study safe trophy media and body-part vocabulary.</span>
        </button>
      </section>
    `;
    bindRouteButtons();
    app.querySelector("[data-resume-game]")?.addEventListener("click", resumeSavedGame);
    app.querySelector("[data-open-shared-setup]").addEventListener("click", openSharedSetupModal);
    return;
  }

  if (state.route === "own-device") renderOwnDeviceHome();
  if (state.route === "actions") renderActions();
  if (state.route === "outcomes") renderOutcomes();
  if (state.route === "shared-device") renderSharedDevice();
  if (state.route === "workshop") renderTrophyWorkshop();
}

function renderVersionPicker() {
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Game Version</p>
      <h2>Choose your deck</h2>
      <p>This controls which defeated cards appear when players claim trophies.</p>
    </section>
    <section class="home-grid" aria-label="Choose game version">
      ${GAME_VERSIONS.map((version) => `
        <button class="big-choice" type="button" data-version="${escapeHtml(version.id)}">
          <strong>${escapeHtml(version.label)}</strong>
          <span>${escapeHtml(version.subline)}</span>
        </button>
      `).join("")}
    </section>
  `;

  app.querySelectorAll("[data-version]").forEach((button) => {
    button.addEventListener("click", () => setGameVersion(button.dataset.version));
  });
}

function renderVersionSettings() {
  if (!versionSettings) return;
  versionSettings.innerHTML = GAME_VERSIONS.map((version) => `
    <button
      class="option-button"
      type="button"
      role="radio"
      aria-checked="${String(state.gameVersion === version.id)}"
      data-settings-version="${escapeHtml(version.id)}"
    >
      ${escapeHtml(version.label)}
      <small>${escapeHtml(version.subline)}</small>
    </button>
  `).join("");

  versionSettings.querySelectorAll("[data-settings-version]").forEach((button) => {
    button.addEventListener("click", () => setGameVersion(button.dataset.settingsVersion, { keepRoute: true }));
  });
}

function renderMissionLengthSettings() {
  if (!missionLengthSettings) return;
  missionLengthSettings.innerHTML = MISSION_LENGTH_OPTIONS.map((length) => `
    <button
      class="option-button"
      type="button"
      role="radio"
      aria-checked="${String(state.trophyMissionLength === length)}"
      data-mission-length="${length}"
    >
      ${length} missions
      <small>Per player at shared-game start.</small>
    </button>
  `).join("");

  missionLengthSettings.querySelectorAll("[data-mission-length]").forEach((button) => {
    button.addEventListener("click", () => {
      state.trophyMissionLength = Number(button.dataset.missionLength);
      localStorage.setItem("bite-trophy-mission-length", String(state.trophyMissionLength));
      renderMissionLengthSettings();
    });
  });
}

function renderVoiceLayerSettings() {
  if (!voiceLayerOptions) return;
  voiceLayerOptions.innerHTML = VOICE_LINE_LAYERS.map((layer) => `
    <label class="layer-toggle">
      <span>
        <strong>${escapeHtml(layer.label)}</strong>
        <small>${escapeHtml(layer.description)}</small>
      </span>
      <input type="checkbox" role="switch" data-voice-layer="${escapeHtml(layer.id)}" ${isVoiceLayerVisible(layer.id) ? "checked" : ""}>
    </label>
  `).join("");
}

function setAllVoiceLayersVisible(visible) {
  VOICE_LINE_LAYER_IDS.forEach((id) => {
    state.visibleVoiceLayers[id] = visible;
  });
  voiceLayerOptions.querySelectorAll("[data-voice-layer]").forEach((input) => {
    input.checked = visible;
  });
  saveVisibleVoiceLayers();
}

function setGameVersion(versionId, options = {}) {
  const version = GAME_VERSIONS.find((candidate) => candidate.id === versionId);
  if (!version) return;
  state.gameVersion = version.id;
  state.workshopAnimal = "";
  localStorage.setItem("bite-game-version", version.id);
  renderVersionSettings();
  if (!options.keepRoute || state.route === "version-select") state.route = "home";
  render();
}

function renderTrophyWorkshop() {
  const animals = getWorkshopAnimalsForCurrentVersion();
  if (!state.workshopAnimal) {
    app.innerHTML = `
      <section class="shared-status">
        <p class="eyebrow">Trophy Workshop</p>
        <h2>${escapeHtml(currentVersionLabel())}</h2>
        <p>Select a defeated card to study safe trophy body parts and replica media.</p>
      </section>
      <section class="menu-grid" aria-label="Workshop animals">
        <details class="menu-card" open>
          <summary>Animals</summary>
          <div class="chip-grid">
            ${animals.map((animal, index) => actionButton(displayTitle(animal.title), `workshop-animal-${index}`, `${animal.parts.length} claimable traits`)).join("")}
          </div>
        </details>
      </section>
    `;

    animals.forEach((animal, index) => {
      app.querySelector(`[data-open="workshop-animal-${index}"]`).addEventListener("click", () => {
        state.workshopAnimal = animal.title;
        render();
      });
    });
    return;
  }

  const animal = animals.find((candidate) => candidate.title === state.workshopAnimal) || animals[0];
  if (!animal) {
    state.workshopAnimal = "";
    render();
    return;
  }

  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Trophy Workshop</p>
      <h2>${escapeHtml(displayTitle(animal.title))}</h2>
      <p>Sort the safe trophy vocabulary by body part or by replica medium.</p>
    </section>
    <section class="reaction-panel" aria-label="Workshop sort controls">
      ${sortButton("Body Parts", "body", "Each body part with all possible media.")}
      ${sortButton("Medium", "medium", "Each medium with matching body parts.")}
    </section>
    <section class="menu-grid" aria-label="Workshop vocabulary">
      <details class="menu-card" open>
        <summary>${state.workshopSort === "body" ? "Body parts" : "Media"}</summary>
        <div class="workshop-list">
          ${state.workshopSort === "body" ? renderWorkshopByBody(animal) : renderWorkshopByMedium(animal)}
        </div>
      </details>
    </section>
  `;

  app.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      state.workshopSort = button.dataset.sort;
      render();
    });
  });
}

function renderWorkshopByBody(animal) {
  return animal.parts.map((item) => `
    <div class="workshop-row">
      <strong>${escapeHtml(item.part)}</strong>
      <div class="vocab-list">
        ${item.media.map((medium) => `<span class="vocab-chip">${escapeHtml(medium)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderWorkshopByMedium(animal) {
  return mediumIndexForAnimal(animal).map((item) => `
    <div class="workshop-row">
      <strong>${escapeHtml(item.medium)}</strong>
      <div class="vocab-list">
        ${item.parts.map((part) => `<span class="vocab-chip">${escapeHtml(part)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function mediumIndexForAnimal(animal) {
  const byMedium = new Map();
  animal.parts.forEach((item) => {
    item.media.forEach((medium) => {
      if (!byMedium.has(medium)) byMedium.set(medium, []);
      byMedium.get(medium).push(item.part);
    });
  });
  return Array.from(byMedium, ([medium, parts]) => ({ medium, parts })).sort((a, b) => a.medium.localeCompare(b.medium));
}

function sortButton(label, sort, subline) {
  return `
    <button class="action-chip" type="button" data-sort="${escapeHtml(sort)}" aria-pressed="${String(state.workshopSort === sort)}">
      ${escapeHtml(label)}
      <small>${escapeHtml(subline)}</small>
    </button>
  `;
}

function bindRouteButtons() {
  app.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      state.route = button.dataset.route;
      render();
    });
  });
}

function loadSavedGameProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVED_GAME_KEY) || "null");
    if (!saved?.shared?.players?.length) return null;
    return {
      gameVersion: saved.gameVersion || "",
      shared: normalizeSharedState(saved.shared),
    };
  } catch {
    localStorage.removeItem(SAVED_GAME_KEY);
    return null;
  }
}

function normalizeSharedState(shared) {
  return {
    ...createSharedState(),
    ...shared,
    players: Array.isArray(shared.players) ? shared.players.map(normalizeSharedPlayer) : [],
    siegeResponders: Array.isArray(shared.siegeResponders) ? shared.siegeResponders.map(normalizeSharedPlayer) : [],
    siegeAllies: Array.isArray(shared.siegeAllies) ? shared.siegeAllies.map(normalizeSharedPlayer) : [],
    pendingTrophyClaimQueue: Array.isArray(shared.pendingTrophyClaimQueue) ? shared.pendingTrophyClaimQueue : [],
  };
}

function normalizeSharedPlayer(player, index = 0) {
  return {
    id: player.id || `player-${index + 1}`,
    name: player.name || `Player ${index + 1}`,
    score: Number(player.score) || 0,
    trophies: Array.isArray(player.trophies) ? player.trophies : [],
    privateMissions: Array.isArray(player.privateMissions) ? player.privateMissions : [],
  };
}

function saveGameProgress() {
  if (!state.shared.players.length) return;
  localStorage.setItem(SAVED_GAME_KEY, JSON.stringify({
    gameVersion: state.gameVersion,
    shared: state.shared,
  }));
}

function hasSavedGameProgress() {
  return Boolean(loadSavedGameProgress());
}

function resumeSavedGame() {
  const saved = loadSavedGameProgress();
  if (!saved) return;
  state.gameVersion = saved.gameVersion || state.gameVersion;
  localStorage.setItem("bite-game-version", state.gameVersion);
  state.shared = saved.shared;
  state.route = "shared-device";
  renderVersionSettings();
  render();
}

function renderOwnDeviceHome() {
  app.innerHTML = `
    <section class="home-grid" aria-label="Choose practice type">
      <button class="big-choice" type="button" data-route="actions">
        <strong>Actions</strong>
        <span>Say what you are doing on your turn.</span>
      </button>
      <button class="big-choice" type="button" data-route="outcomes">
        <strong>Match Outcomes</strong>
        <span>Say what happened after cards are compared.</span>
      </button>
    </section>
  `;
  bindRouteButtons();
}

function renderActions() {
  app.innerHTML = `
    <section class="menu-grid" aria-label="Action voice lines">
      <details class="menu-card" open>
        <summary>Turn actions</summary>
        <div class="chip-grid">
          ${ACTION_GROUPS.map((group, index) => actionButton(displayTitle(group.title), `action-${index}`, group.subline)).join("")}
        </div>
      </details>
      <details class="menu-card">
        <summary>Special cards</summary>
        <div class="chip-grid">
          ${SPECIAL_GROUPS.map((group, index) => actionButton(displayTitle(group.title), `special-${index}`, group.subline)).join("")}
        </div>
      </details>
    </section>
  `;

  ACTION_GROUPS.forEach((group, index) => {
    app.querySelector(`[data-open="action-${index}"]`).addEventListener("click", () => openLineModal(displayTitle(group.title), "Turn Action", [group]));
  });
  SPECIAL_GROUPS.forEach((group, index) => {
    app.querySelector(`[data-open="special-${index}"]`).addEventListener("click", () => openLineModal(displayTitle(group.title), "Special Card", [group]));
  });
}

function renderOutcomes() {
  app.innerHTML = `
    <section class="menu-grid" aria-label="Match outcome voice lines">
      <details class="menu-card" open>
        <summary>Attack outcomes</summary>
        <div class="chip-grid">
          ${OUTCOME_GROUPS.slice(0, 3).map((group, index) => actionButton(displayTitle(group.title), `outcome-${index}`, group.subline)).join("")}
        </div>
      </details>
      <details class="menu-card" open>
        <summary>Siege outcomes</summary>
        <div class="chip-grid">
          ${OUTCOME_GROUPS.slice(3, 6).map((group, index) => actionButton(displayTitle(group.title), `outcome-${index + 3}`, group.subline)).join("")}
        </div>
      </details>
      <details class="menu-card">
        <summary>Game flow and scoring</summary>
        <div class="chip-grid">
          ${OUTCOME_GROUPS.slice(6).map((group, index) => actionButton(displayTitle(group.title), `outcome-${index + 6}`, group.subline)).join("")}
        </div>
      </details>
    </section>
  `;

  OUTCOME_GROUPS.forEach((group, index) => {
    app.querySelector(`[data-open="outcome-${index}"]`).addEventListener("click", () => {
      openLineModal(displayTitle(group.title), "Match Outcome", [group]);
    });
  });
}

function renderSharedDevice() {
  const shared = state.shared;
  const currentPlayer = shared.players[shared.currentPlayerIndex];
  if (!currentPlayer) {
    state.route = "home";
    render();
    return;
  }

  if (shared.phase === "choose-action") renderSharedActionPicker(currentPlayer);
  if (shared.phase === "choose-target") renderSharedTargetPicker(currentPlayer);
  if (shared.phase === "siege-join") renderSharedSiegeJoin(currentPlayer);
  if (shared.phase === "siege-lowest-select") renderSharedSiegeLowestPicker(currentPlayer);
  if (shared.phase === "attack-outcome") renderSharedOutcomePicker(currentPlayer, "Attack outcome", ["Attack Win", "Attack Loss", "Attack Tie"]);
  if (shared.phase === "siege-outcome") renderSharedOutcomePicker(currentPlayer, "Siege outcome", ["Siege Attackers Win", "Siege Defender Wins"]);
  if (shared.phase === "claim-trophy") renderSharedTrophyPicker(currentPlayer);
}

function renderSharedActionPicker(currentPlayer) {
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Shared Device</p>
      <h2>${escapeHtml(currentPlayer.name)}'s turn</h2>
      <p>Choose one action and say the matching line.</p>
    </section>
    <section class="menu-grid" aria-label="Shared device action">
      <details class="menu-card" open>
        <summary>Choose action</summary>
        <div class="chip-grid">
          ${ACTION_GROUPS.map((group, index) => actionButton(displayTitle(group.title), `shared-action-${index}`, group.subline)).join("")}
        </div>
      </details>
      <section class="reaction-panel" aria-label="Turn controls">
        ${actionButton("Show Scoreboard", "show-scoreboard", "View current trophy scores.")}
        ${actionButton("Private Missions", "show-missions", `${currentPlayer.name}'s trophy missions.`)}
        ${actionButton("End Game", "end-shared-game", "Show final scores and accomplished private missions.")}
        ${actionButton("Restart Shared Game", "restart-shared", "Set up the player list again.")}
      </section>
    </section>
  `;

  ACTION_GROUPS.forEach((group, index) => {
    app.querySelector(`[data-open="shared-action-${index}"]`).addEventListener("click", () => {
      handleSharedAction(group, currentPlayer);
    });
  });
  app.querySelector(`[data-open="show-scoreboard"]`).addEventListener("click", showScoreboardModal);
  app.querySelector(`[data-open="show-missions"]`).addEventListener("click", () => showPrivateMissionsModal(currentPlayer));
  app.querySelector(`[data-open="end-shared-game"]`).addEventListener("click", showFinalScoreboardModal);
  app.querySelector(`[data-open="restart-shared"]`).addEventListener("click", openSharedSetupModal);
}

function renderSharedTargetPicker(currentPlayer) {
  const action = state.shared.pendingAction;
  const targets = state.shared.players.filter((player) => player.id !== currentPlayer.id);
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">${escapeHtml(action ? displayTitle(action.title) : "Target")}</p>
      <h2>${escapeHtml(currentPlayer.name)} chooses a target</h2>
      <p>The selected target will appear in the voice line and determine defender scoring.</p>
    </section>
    <section class="menu-grid" aria-label="Target selection">
      <details class="menu-card" open>
        <summary>Target player</summary>
        <div class="chip-grid">
          ${targets.map((player) => actionButton(player.name, `target-${player.id}`, `${player.score || 0} points`)).join("")}
        </div>
      </details>
      <section class="reaction-panel" aria-label="Target controls">
        ${actionButton("Back to Action", "back-to-action", "Choose a different action.")}
      </section>
    </section>
  `;

  targets.forEach((player) => {
    app.querySelector(`[data-open="target-${player.id}"]`).addEventListener("click", () => {
      chooseSharedTarget(player);
    });
  });
  app.querySelector(`[data-open="back-to-action"]`).addEventListener("click", () => {
    resetSharedActionContext();
    state.shared.phase = "choose-action";
    render();
  });
}

function renderSharedSiegeJoin(currentPlayer) {
  const shared = state.shared;
  const responder = shared.siegeResponders[shared.siegeResponderIndex];
  if (!responder || shared.siegeAllies.length >= MAX_SIEGE_ALLIES) {
    completeSharedSiegeJoin();
    return;
  }

  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Siege Reaction</p>
      <h2>${escapeHtml(responder.name)} decides</h2>
      <p>${escapeHtml(currentPlayer.name)} called a siege on ${escapeHtml(shared.targetName || "the target")}. ${shared.siegeAllies.length}/${MAX_SIEGE_ALLIES} allies joined.</p>
    </section>
    <section class="menu-grid" aria-label="Siege joining">
      <details class="menu-card" open>
        <summary>${escapeHtml(responder.name)}'s response</summary>
        <div class="chip-grid">
          ${SIEGE_REACTION_GROUPS.map((group, index) => actionButton(displayTitle(group.title), `siege-reaction-${index}`, group.subline)).join("")}
        </div>
      </details>
      <section class="reaction-panel" aria-label="Siege flow">
        ${actionButton("Skip Remaining", "skip-remaining", "Resolve with the current allies.")}
        ${actionButton("Back to Action", "back-to-action", "Choose a different action.")}
      </section>
    </section>
  `;

  SIEGE_REACTION_GROUPS.forEach((group, index) => {
    app.querySelector(`[data-open="siege-reaction-${index}"]`).addEventListener("click", () => {
      handleSiegeJoinChoice(group, responder);
    });
  });
  app.querySelector(`[data-open="skip-remaining"]`).addEventListener("click", completeSharedSiegeJoin);
  app.querySelector(`[data-open="back-to-action"]`).addEventListener("click", () => {
    resetSharedActionContext();
    state.shared.phase = "choose-action";
    render();
  });
}

function handleSiegeJoinChoice(group, responder) {
  const shared = state.shared;
  const joined = group.title === "Join Siege";
  openSharedLineModal(displayTitle(group.title), responder.name, [group], "Continue", () => {
    if (joined && !shared.siegeAllies.some((player) => player.id === responder.id)) {
      shared.siegeAllies.push(responder);
    }
    shared.siegeResponderIndex += 1;
    if (shared.siegeAllies.length >= MAX_SIEGE_ALLIES || shared.siegeResponderIndex >= shared.siegeResponders.length) {
      completeSharedSiegeJoin();
      return;
    }
    render();
  });
}

function completeSharedSiegeJoin() {
  if (state.shared.siegeAllies.length === 0) {
    const group = getOutcomeGroup("No Allies Join");
    openSharedLineModal(displayTitle(group.title), "Siege fizzles", [group], "Resolve attack", () => {
      state.shared.phase = "attack-outcome";
      render();
    }, { targetName: state.shared.targetName });
    return;
  }

  state.shared.phase = "siege-outcome";
  render();
}

function renderSharedOutcomePicker(currentPlayer, heading, outcomeTitles) {
  const groups = outcomeTitles.map(getOutcomeGroup).filter(Boolean);
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">${escapeHtml(heading)}</p>
      <h2>${escapeHtml(currentPlayer.name)} resolves the match</h2>
      <p>${escapeHtml(state.shared.targetName ? `Target: ${state.shared.targetName}` : "Choose only the outcome that happened.")}</p>
    </section>
    <section class="menu-grid" aria-label="${escapeHtml(heading)}">
      <details class="menu-card" open>
        <summary>Possible outcomes</summary>
        <div class="chip-grid">
          ${groups.map((group, index) => actionButton(displayTitle(group.title), `shared-outcome-${index}`, group.subline)).join("")}
        </div>
      </details>
      <section class="reaction-panel" aria-label="Turn controls">
        ${actionButton("Back to Action", "back-to-action", "Choose a different action.")}
      </section>
    </section>
  `;

  groups.forEach((group, index) => {
    app.querySelector(`[data-open="shared-outcome-${index}"]`).addEventListener("click", () => {
      handleSharedOutcome(group, currentPlayer);
    });
  });
  app.querySelector(`[data-open="back-to-action"]`).addEventListener("click", () => {
    resetSharedActionContext();
    state.shared.phase = "choose-action";
    render();
  });
}

function handleSharedOutcome(group, currentPlayer) {
  openSharedLineModal(displayTitle(group.title), currentPlayer.name, [group], "Claim trophy", () => {
    state.shared.pendingOutcomeTitle = group.title;
    if (group.title === "Siege Attackers Win") {
      state.shared.phase = "siege-lowest-select";
      render();
      return;
    }
    if (group.title === "Siege Defender Wins") {
      const defender = state.shared.players.find((player) => player.id === state.shared.targetId) || currentPlayer;
      setTrophyClaimContext(defender, siegeParticipants(currentPlayer));
      state.shared.phase = "claim-trophy";
      render();
      return;
    }
    const claimingPlayer = state.shared.players.find((player) => player.id === trophyClaimingPlayerId(group, currentPlayer)) || currentPlayer;
    setTrophyClaimContext(claimingPlayer, trophyClaimTargetsForOutcome(group, currentPlayer));
    state.shared.phase = "claim-trophy";
    render();
  }, { targetName: state.shared.targetName });
}

function renderSharedSiegeLowestPicker(currentPlayer) {
  const participants = siegeParticipants(currentPlayer);
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Siege Trophy</p>
      <h2>Who has the lowest face value?</h2>
      <p>Choose the siege participant with the lowest revealed card. That player claims the defender's trophy.</p>
    </section>
    <section class="menu-grid" aria-label="Lowest siege card holder">
      <details class="menu-card" open>
        <summary>Lowest card holder</summary>
        <div class="chip-grid">
          ${participants.map((player) => actionButton(player.name, `lowest-card-${player.id}`, "Claims the defender's trophy.")).join("")}
        </div>
      </details>
      <section class="reaction-panel" aria-label="Siege trophy controls">
        ${actionButton("Back to Action", "back-to-action", "Cancel this resolution.")}
      </section>
    </section>
  `;

  participants.forEach((player) => {
    app.querySelector(`[data-open="lowest-card-${player.id}"]`).addEventListener("click", () => {
      setTrophyClaimContext(player, targetPlayerQueue());
      state.shared.phase = "claim-trophy";
      render();
    });
  });
  app.querySelector(`[data-open="back-to-action"]`).addEventListener("click", () => {
    resetSharedActionContext();
    state.shared.phase = "choose-action";
    render();
  });
}

function renderSharedTrophyPicker(currentPlayer) {
  const claimingPlayer = selectedScoringPlayer() || currentPlayer;
  const claimingPlayerName = claimingPlayer.name;
  const claimTarget = currentTrophyClaimTarget();
  const claimProgress = trophyClaimProgressLabel();
  const trophyCards = getTrophyCardsForCurrentVersion().sort((a, b) => cardValue(b.title) - cardValue(a.title));
  const selectedCard = state.shared.pendingTrophyCard;
  const selectedEntry = selectedCard ? getWorkshopEntry(selectedCard.title) : null;
  const selectedParts = selectedEntry?.parts || [];
  const trophyInstruction = trophyClaimInstruction(selectedCard);
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Claim Trophy</p>
      <h2>${escapeHtml(claimingPlayerName)} ${selectedCard ? `claims from ${escapeHtml(displayTitle(selectedCard.title))}` : "chooses a trophy card"}</h2>
      <p>${escapeHtml(currentVersionLabel())}: ${escapeHtml(trophyInstruction)}</p>
      ${claimTarget ? `<p>${escapeHtml(claimProgress)}Defeated player: ${escapeHtml(claimTarget.name)}</p>` : ""}
    </section>
    <section class="menu-grid" aria-label="Trophy card picker">
      ${selectedCard ? `
        <details class="menu-card" open>
          <summary>Collected body part</summary>
          <div class="chip-grid">
            ${selectedParts.map((part, index) => actionButton(displayTitle(part.part), `trophy-part-${index}`, `${part.media.join(" / ")} / ${cardValue(selectedCard.title)} points`)).join("")}
          </div>
        </details>
      ` : `
        <details class="menu-card" open>
          <summary>Defeated card</summary>
          <div class="chip-grid">
            ${trophyCards.map((card, index) => actionButton(displayTitle(card.title), `trophy-card-${index}`, `${card.traits} / ${cardValue(card.title)} points`)).join("")}
          </div>
        </details>
      `}
      <section class="reaction-panel" aria-label="Trophy controls">
        ${selectedCard ? actionButton("Back to Cards", "back-to-trophy-cards", "Choose a different defeated card.") : ""}
        ${actionButton("Show Scoreboard", "show-scoreboard", "View current trophy scores.")}
        ${actionButton("Private Missions", "show-missions", `${claimingPlayerName}'s trophy missions.`)}
        ${actionButton("Skip Trophy", "skip-trophy", "Move to the next player.")}
      </section>
    </section>
  `;

  if (selectedCard) {
    selectedParts.forEach((part, index) => {
      app.querySelector(`[data-open="trophy-part-${index}"]`).addEventListener("click", () => {
        const scoringPlayer = selectedScoringPlayer() || currentPlayer;
        recordTrophy(scoringPlayer.id, selectedCard, part);
        saveGameProgress();
        const trophyGroup = createTrophyClaimGroup(selectedCard, part);
        openSharedLineModal(displayTitle("Claim Trophy"), scoringPlayer.name, [trophyGroup], nextTrophyClaimLabel(), advanceTrophyClaimOrTurn);
      });
    });
    app.querySelector(`[data-open="back-to-trophy-cards"]`).addEventListener("click", () => {
      state.shared.pendingTrophyCard = null;
      render();
    });
  } else {
    trophyCards.forEach((card, index) => {
      app.querySelector(`[data-open="trophy-card-${index}"]`).addEventListener("click", () => {
        state.shared.pendingTrophyCard = card;
        render();
      });
    });
  }
  app.querySelector(`[data-open="show-scoreboard"]`).addEventListener("click", showScoreboardModal);
  app.querySelector(`[data-open="show-missions"]`).addEventListener("click", () => showPrivateMissionsModal(claimingPlayer));
  app.querySelector(`[data-open="skip-trophy"]`).addEventListener("click", advanceTrophyClaimOrTurn);
}

function trophyClaimInstruction(selectedCard) {
  if (selectedCard) return "choose the collected body part to shape the claim line.";
  if (state.shared.pendingOutcomeTitle === "Siege Attackers Win") return "the lowest face-value siege player claims the defender's defeated card.";
  if (state.shared.pendingOutcomeTitle === "Siege Defender Wins") return "the defender claims every defeated siege member's card.";
  return "select the defeated opponent card first.";
}

function setTrophyClaimContext(player, claimQueue = []) {
  state.shared.claimingPlayerId = player.id;
  state.shared.claimingPlayerName = player.name;
  state.shared.pendingTrophyClaimQueue = claimQueue.length ? claimQueue.map((target) => ({ id: target.id, name: target.name })) : [];
  state.shared.pendingTrophyClaimIndex = 0;
  state.shared.pendingTrophyCard = null;
}

function currentTrophyClaimTarget() {
  return state.shared.pendingTrophyClaimQueue[state.shared.pendingTrophyClaimIndex] || null;
}

function trophyClaimProgressLabel() {
  const queue = state.shared.pendingTrophyClaimQueue;
  if (queue.length <= 1) return "";
  return `Trophy ${state.shared.pendingTrophyClaimIndex + 1} of ${queue.length}. `;
}

function nextTrophyClaimLabel() {
  return hasMoreTrophyClaims() ? "Next trophy" : "Next player";
}

function hasMoreTrophyClaims() {
  return state.shared.pendingTrophyClaimIndex < state.shared.pendingTrophyClaimQueue.length - 1;
}

function advanceTrophyClaimOrTurn() {
  if (hasMoreTrophyClaims()) {
    state.shared.pendingTrophyClaimIndex += 1;
    state.shared.pendingTrophyCard = null;
    state.shared.phase = "claim-trophy";
    render();
    return;
  }
  startNextSharedTurn();
}

function trophyClaimTargetsForOutcome(group, currentPlayer) {
  if (group.title === "Attack Win" || group.title === "Attack Tie") return targetPlayerQueue();
  if (group.title === "Attack Loss") return [{ id: currentPlayer.id, name: currentPlayer.name }];
  return [];
}

function targetPlayerQueue() {
  const target = state.shared.players.find((player) => player.id === state.shared.targetId);
  return target ? [{ id: target.id, name: target.name }] : [];
}

function createTrophyClaimGroup(card, part) {
  const medium = part?.media?.[0] || "line sketch";
  const partName = part?.part || "trophy";
  const value = cardValue(card.title);
  return {
    title: `${card.title} ${displayTitle(partName)}`,
    subline: `${card.traits} / ${medium} / ${value} points`,
    vocabulary: uniqueTerms([
      ...(card.vocabulary || []),
      ...splitVocabularyPhrase(partName),
      ...splitVocabularyPhrase(medium),
    ]),
    lines: [
      `I claim the ${card.title} ${partName} through ${medium}. This trophy is mine.`,
      `The ${card.title} ${partName} becomes my ${medium}; mark ${value} points on the board.`,
      `Preserve the ${partName}. The ${card.title} trophy is secured with exacting craft.`,
    ],
  };
}

function getTrophyCardsForCurrentVersion() {
  const version = GAME_VERSIONS.find((candidate) => candidate.id === state.gameVersion) || GAME_VERSIONS[0];
  const allowedTitles = new Set(version.trophyCards);
  return TROPHY_CARD_LIBRARY.filter((card) => allowedTitles.has(card.title));
}

function getWorkshopAnimalsForCurrentVersion() {
  return getTrophyCardsForCurrentVersion()
    .map((card) => getWorkshopEntry(card.title))
    .filter(Boolean);
}

function getWorkshopEntry(title) {
  const card = TROPHY_CARD_LIBRARY.find((candidate) => candidate.title === title);
  const parts = TROPHY_WORKSHOP[title];
  if (!card || !parts) return null;
  return { title, parts, traits: card.traits };
}

function workshopVocabulary(entry) {
  if (!entry) return [];
  return uniqueTerms(entry.parts.flatMap((item) => [...splitVocabularyPhrase(item.part), ...item.media.flatMap(splitVocabularyPhrase)]));
}

function splitVocabularyPhrase(value) {
  return String(value)
    .split(/\s+/)
    .map((term) => term.replace(/[^A-Za-z-]/g, ""))
    .filter((term) => term.length > 2);
}

function uniqueTerms(terms) {
  const seen = new Set();
  return terms.filter((term) => {
    const key = normalizeVocabKey(term);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function currentVersionLabel() {
  return (GAME_VERSIONS.find((candidate) => candidate.id === state.gameVersion) || GAME_VERSIONS[0]).label;
}

function trophyClaimingPlayerId(group, currentPlayer) {
  if (group.title === "Attack Win" || group.title === "Attack Tie") return currentPlayer.id;
  if (group.title === "Siege Attackers Win") return currentPlayer.id;
  if (group.title === "Attack Loss" || group.title === "Siege Defender Wins") return state.shared.targetId || currentPlayer.id;
  return currentPlayer.id;
}

function trophyClaimingPlayerLabel(group, currentPlayer) {
  const player = state.shared.players.find((candidate) => candidate.id === trophyClaimingPlayerId(group, currentPlayer));
  return player?.name || currentPlayer.name;
}

function selectedScoringPlayer() {
  return state.shared.players.find((player) => player.id === state.shared.claimingPlayerId) || null;
}

function cardValue(title) {
  return CARD_VALUES[state.gameVersion]?.[title] ?? 0;
}

function recordTrophy(playerId, card, part) {
  const player = state.shared.players.find((candidate) => candidate.id === playerId);
  if (!player) return;
  const value = cardValue(card.title);
  const medium = part?.media?.[0] || "";
  player.score = (player.score || 0) + value;
  player.trophies = [...(player.trophies || []), { title: card.title, value, part: part?.part || "", medium }];
}

function showScoreboardModal() {
  modal.dataset.currentTitle = "Scoreboard";
  modal.dataset.currentKicker = currentVersionLabel();
  modal.dataset.currentGroups = "[]";
  modalTitle.textContent = "Scoreboard";
  modalKicker.textContent = currentVersionLabel();
  const rows = [...state.shared.players]
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .map((player) => `
      <div class="workshop-row">
        <strong>${escapeHtml(player.name)} - ${player.score || 0}</strong>
        <div class="vocab-list">
          ${(player.trophies || []).length
            ? player.trophies.map((trophy) => {
                const trophyLabel = [displayTitle(trophy.title), trophy.part ? displayTitle(trophy.part) : ""].filter(Boolean).join(" ");
                return `<span class="vocab-chip">${escapeHtml(trophyLabel)}: ${trophy.value}</span>`;
              }).join("")
            : `<span class="vocab-chip">No trophies yet</span>`}
        </div>
      </div>
    `).join("");
  modalContent.innerHTML = `<div class="workshop-list">${rows}</div>`;
  modal.showModal();
}

function showPrivateMissionsModal(player) {
  modal.dataset.currentTitle = "Private Missions";
  modal.dataset.currentKicker = player.name;
  modal.dataset.currentGroups = "[]";
  modalTitle.textContent = "Private Missions";
  modalKicker.textContent = player.name;
  const missions = player.privateMissions || [];
  modalContent.innerHTML = `
    <div class="workshop-list">
      <div class="confirm-card">
        <small>Private view</small>
        <strong>Other players, turn away from the screen.</strong>
        <p>${escapeHtml(player.name)} can reveal the mission list when ready.</p>
      </div>
      <div class="modal-actions">
        <button class="primary-button" type="button" data-show-private-missions>Show missions</button>
      </div>
    </div>
  `;
  modalContent.querySelector("[data-show-private-missions]").addEventListener("click", () => {
    modalContent.innerHTML = `
      <div class="workshop-list">
        ${missions.length
          ? missions.map((mission) => renderMissionRow(mission, player)).join("")
          : `<div class="workshop-row"><strong>No missions assigned</strong></div>`}
      </div>
    `;
  });
  modal.showModal();
}

function showFinalScoreboardModal() {
  const summaries = state.shared.players.map(playerScoreSummary).sort((a, b) => b.totalScore - a.totalScore);
  const highestScore = summaries[0]?.totalScore ?? 0;
  const winners = summaries.filter((summary) => summary.totalScore === highestScore);
  modal.dataset.currentTitle = "Final Scoreboard";
  modal.dataset.currentKicker = currentVersionLabel();
  modal.dataset.currentGroups = "[]";
  modalTitle.textContent = "Final Scoreboard";
  modalKicker.textContent = winners.length === 1 ? `${winners[0].player.name} wins` : "Tie game";
  modalContent.innerHTML = `
    <div class="workshop-list">
      <div class="confirm-card">
        <small>Winner</small>
        <strong>${escapeHtml(winners.map((winner) => winner.player.name).join(" / ") || "No players")}</strong>
        <p>${highestScore} total points</p>
      </div>
      ${summaries.map((summary, index) => `
        <div class="workshop-row">
          <strong>${index + 1}. ${escapeHtml(summary.player.name)} - ${summary.totalScore}</strong>
          <div class="vocab-list">
            <span class="vocab-chip">Trophies: ${summary.trophyScore}</span>
            <span class="vocab-chip">Missions: ${summary.missionScore}</span>
          </div>
          <div class="workshop-list">
            ${summary.completedMissions.length
              ? summary.completedMissions.map((mission) => renderMissionRow(mission, summary.player, true)).join("")
              : `<div class="workshop-row"><strong>No private missions accomplished</strong></div>`}
          </div>
        </div>
      `).join("")}
    </div>
  `;
  modal.showModal();
}

function renderMissionRow(mission, player, accomplishedOnly = false) {
  const progress = missionProgress(player, mission);
  const completed = progress >= mission.required;
  if (accomplishedOnly && !completed) return "";
  return `
    <div class="workshop-row ${completed ? "mission-complete" : ""}">
      <strong>${escapeHtml(missionTitle(mission))}</strong>
      <div class="vocab-list">
        <span class="vocab-chip">${Math.min(progress, mission.required)}/${mission.required}</span>
        <span class="vocab-chip">${mission.reward} mission points</span>
        <span class="vocab-chip">${completed ? "Accomplished" : "In progress"}</span>
      </div>
    </div>
  `;
}

function playerScoreSummary(player) {
  const completedMissions = (player.privateMissions || []).filter((mission) => missionProgress(player, mission) >= mission.required);
  const missionScore = completedMissions.reduce((total, mission) => total + mission.reward, 0);
  const trophyScore = player.score || 0;
  return { player, trophyScore, completedMissions, missionScore, totalScore: trophyScore + missionScore };
}

function missionProgress(player, mission) {
  return (player.trophies || []).filter((trophy) => trophy.title === mission.card && trophy.part === mission.part).length;
}

function missionTitle(mission) {
  return `Collect ${mission.required} ${mission.card} ${pluralizePart(mission.part, mission.required)}`;
}

function pluralizePart(part, count) {
  if (count === 1) return part;
  if (part.endsWith("s")) return part;
  if (part.endsWith("y")) return `${part.slice(0, -1)}ies`;
  return `${part}s`;
}

function assignPrivateMissions(players) {
  const pool = trophyMissionPool();
  if (!pool.length) return players;
  let deck = shuffleMissions(pool);
  return players.map((player) => {
    const privateMissions = [];
    while (privateMissions.length < state.trophyMissionLength) {
      if (!deck.length) deck = shuffleMissions(pool);
      const mission = deck.pop();
      if (!privateMissions.some((existing) => existing.card === mission.card && existing.part === mission.part)) {
        privateMissions.push({ ...mission });
      }
    }
    return { ...player, privateMissions };
  });
}

function shuffleMissions(missions) {
  const shuffled = missions.map((mission) => ({ ...mission }));
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function trophyMissionPool() {
  return getWorkshopAnimalsForCurrentVersion()
    .flatMap((entry) => entry.parts.map((part) => createMission(entry.title, part.part)))
    .sort((a, b) => a.cardValue - b.cardValue || a.card.localeCompare(b.card) || a.part.localeCompare(b.part));
}

function createMission(card, part) {
  const value = cardValue(card);
  const missionValue = Math.max(0, value);
  return {
    card,
    part,
    cardValue: value,
    required: missionValue <= 2 ? 3 : missionValue <= 5 ? 2 : 1,
    reward: Math.max(2, 8 - missionValue),
  };
}

function handleSharedAction(group, currentPlayer) {
  if (group.title === "Attack" || group.title === "Siege") {
    state.shared.pendingAction = group;
    state.shared.phase = "choose-target";
    render();
    return;
  }

  openSharedLineModal(displayTitle(group.title), currentPlayer.name, [group], "Next player", startNextSharedTurn);
}

function chooseSharedTarget(target) {
  const currentPlayer = state.shared.players[state.shared.currentPlayerIndex];
  const action = state.shared.pendingAction;
  if (!currentPlayer || !action) return;
  state.shared.targetId = target.id;
  state.shared.targetName = target.name;
  const nextPhase = action.title === "Siege" ? "siege-join" : "attack-outcome";
  openSharedLineModal(displayTitle(action.title), currentPlayer.name, [action], "Continue", () => {
    if (action.title === "Siege") startSharedSiegeJoin(currentPlayer, target);
    state.shared.phase = nextPhase;
    render();
  }, { targetName: target.name });
}

function startSharedSiegeJoin(currentPlayer, target) {
  state.shared.siegeResponders = state.shared.players.filter((player) => player.id !== currentPlayer.id && player.id !== target.id);
  state.shared.siegeResponderIndex = 0;
  state.shared.siegeAllies = [];
}

function siegeParticipants(currentPlayer) {
  return [currentPlayer, ...state.shared.siegeAllies].filter(Boolean);
}

function resetSharedSiege() {
  state.shared.siegeResponders = [];
  state.shared.siegeResponderIndex = 0;
  state.shared.siegeAllies = [];
}

function resetSharedActionContext() {
  state.shared.pendingAction = null;
  state.shared.pendingTrophyCard = null;
  state.shared.pendingOutcomeTitle = "";
  state.shared.targetId = "";
  state.shared.targetName = "";
  state.shared.claimingPlayerId = "";
  state.shared.claimingPlayerName = "";
  state.shared.pendingTrophyClaimQueue = [];
  state.shared.pendingTrophyClaimIndex = 0;
  resetSharedSiege();
}

function getOutcomeGroup(title) {
  return OUTCOME_GROUPS.find((group) => group.title === title);
}

function createSharedState() {
  return {
    players: [],
    currentPlayerIndex: 0,
    playerCount: 3,
    phase: "choose-action",
    pendingAction: null,
    pendingTrophyCard: null,
    pendingOutcomeTitle: "",
    targetId: "",
    targetName: "",
    siegeResponders: [],
    siegeResponderIndex: 0,
    siegeAllies: [],
    claimingPlayerId: "",
    claimingPlayerName: "",
    pendingTrophyClaimQueue: [],
    pendingTrophyClaimIndex: 0,
  };
}

function openSharedSetupModal() {
  if (!state.shared.players.length) {
    state.shared.players = Array.from({ length: state.shared.playerCount }, (_, index) => ({
      id: `player-${index + 1}`,
      name: `Player ${index + 1}`,
      score: 0,
      trophies: [],
      privateMissions: [],
    }));
  }
  renderSharedSetupModal();
  sharedSetupModal.showModal();
}

function renderSharedSetupModal() {
  const shared = state.shared;
  sharedSetupContent.innerHTML = `
    <div class="player-count-row">
      <span>Number of players</span>
      <span class="stepper">
        <button class="icon-button" type="button" data-step="-1" aria-label="Remove player">-</button>
        <strong>${shared.playerCount}</strong>
        <button class="icon-button" type="button" data-step="1" aria-label="Add player">+</button>
      </span>
    </div>
    <div class="player-fields">
      ${shared.players.slice(0, shared.playerCount).map((player, index) => `
        <label class="player-field">
          Player ${index + 1}
          <input type="text" value="${escapeHtml(player.name)}" data-player-index="${index}">
        </label>
      `).join("")}
    </div>
    <div class="modal-actions sticky-actions">
      <button class="secondary-button" type="button" data-close-setup>Cancel</button>
      <button class="primary-button" type="button" data-start-shared>Start shared device</button>
    </div>
  `;

  sharedSetupContent.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      shared.playerCount = clamp(shared.playerCount + Number(button.dataset.step), MIN_SHARED_PLAYERS, MAX_SHARED_PLAYERS);
      while (shared.players.length < shared.playerCount) {
        const next = shared.players.length + 1;
        shared.players.push({ id: `player-${next}`, name: `Player ${next}`, score: 0, trophies: [], privateMissions: [] });
      }
      renderSharedSetupModal();
    });
  });

  sharedSetupContent.querySelectorAll("[data-player-index]").forEach((input) => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.playerIndex);
      shared.players[index].name = input.value.trim() || `Player ${index + 1}`;
    });
  });

  sharedSetupContent.querySelector("[data-close-setup]").addEventListener("click", () => sharedSetupModal.close());
  sharedSetupContent.querySelector("[data-start-shared]").addEventListener("click", () => {
    shared.players = assignPrivateMissions(shared.players.slice(0, shared.playerCount).map((player, index) => ({
      id: player.id || `player-${index + 1}`,
      name: player.name || `Player ${index + 1}`,
      score: 0,
      trophies: [],
      privateMissions: [],
    })));
    shared.currentPlayerIndex = 0;
    shared.phase = "choose-action";
    resetSharedActionContext();
    state.route = "shared-device";
    sharedSetupModal.close();
    render();
  });
}

function openSharedLineModal(title, playerName, groups, nextLabel, nextHandler, context = {}) {
  const visibleGroups = getVisibleLineGroups(groups);
  modal.dataset.currentTitle = title;
  modal.dataset.currentKicker = playerName;
  modal.dataset.currentGroups = JSON.stringify(groups);
  modal.dataset.currentContext = JSON.stringify(context);
  modal.dataset.currentNextLabel = nextLabel;
  modal._sharedNextHandler = nextHandler;
  modalTitle.textContent = title;
  modalKicker.textContent = playerName;
  modalContent.innerHTML = `
    ${renderVisibleLineGroups(visibleGroups, context)}
    <div class="modal-actions sticky-actions">
      <button class="primary-button" type="button" data-shared-next>${escapeHtml(nextLabel)}</button>
    </div>
  `;
  modalContent.querySelector("[data-shared-next]").addEventListener("click", () => {
    modal.close();
    nextHandler();
  });
  modal.showModal();
}

function startNextSharedTurn() {
  if (!state.shared.players.length) return;
  state.shared.currentPlayerIndex = (state.shared.currentPlayerIndex + 1) % state.shared.players.length;
  state.shared.phase = "choose-action";
  resetSharedActionContext();
  render();
}

function openLineModal(title, kicker, groups) {
  const visibleGroups = getVisibleLineGroups(groups);
  modal.dataset.currentTitle = title;
  modal.dataset.currentKicker = kicker;
  modal.dataset.currentGroups = JSON.stringify(groups);
  modal.dataset.currentContext = "{}";
  modal.dataset.currentNextLabel = "";
  modal._sharedNextHandler = null;
  modalTitle.textContent = title;
  modalKicker.textContent = kicker;
  modalContent.innerHTML = renderVisibleLineGroups(visibleGroups);
  modal.showModal();
}

function redrawOpenModal() {
  const groups = JSON.parse(modal.dataset.currentGroups || "[]");
  const context = JSON.parse(modal.dataset.currentContext || "{}");
  const hasSharedNext = modalContent.querySelector("[data-shared-next]");
  const nextLabel = modal.dataset.currentNextLabel || "Continue";
  const visibleGroups = getVisibleLineGroups(groups);
  modalTitle.textContent = modal.dataset.currentTitle || "";
  modalKicker.textContent = modal.dataset.currentKicker || "";
  modalContent.innerHTML = renderVisibleLineGroups(visibleGroups, context);
  if (hasSharedNext) {
    modalContent.insertAdjacentHTML("beforeend", `
      <div class="modal-actions sticky-actions">
        <button class="primary-button" type="button" data-shared-next>${escapeHtml(nextLabel)}</button>
      </div>
    `);
    modalContent.querySelector("[data-shared-next]").addEventListener("click", () => {
      modal.close();
      modal._sharedNextHandler?.();
    });
  }
}

function renderVisibleLineGroups(groups, context = {}) {
  if (!groups.length) {
    return `
      <div class="empty-state">
        Voice lines are hidden for this interaction layer.
      </div>
    `;
  }
  return groups.map((group) => renderLineGroup(group, groups.length === 1, context)).join("");
}

function getVisibleLineGroups(groups) {
  return groups.filter((group) => group && isVoiceLayerVisible(getVoiceLayerForGroup(group)));
}

function isVoiceLayerVisible(layerId) {
  return state.visibleVoiceLayers[layerId] !== false;
}

function getVoiceLayerForGroup(group) {
  if (group?.layerId) return group.layerId;
  const title = group?.title || "";

  if (["Attack", "Siege"].includes(title)) return "target-siege-setup";
  if (["Change Card", "Pass"].includes(title)) return "turn-actions";
  if (["Draw Replacement"].includes(title)) return "replacement-recovery";
  if (["Fox Change Card", "Hunter Rule", "Bacteria Rule"].includes(title)) return "special-card-rules";
  if (["Join Siege", "Stay Out", "No Allies Join"].includes(title)) return "siege-reactions";
  if (["Attack Win", "Attack Loss", "Attack Tie", "Siege Attackers Win", "Siege Defender Wins"].includes(title)) return "match-outcomes";
  if (["Take Trophy"].includes(title) || title.includes("Trophy") || TROPHY_CARD_LIBRARY.some((card) => title.startsWith(`${card.title} `))) return "trophy-claims";
  if (["Deck Ends", "Final Scoring"].includes(title)) return "game-end-scoring";

  return "turn-actions";
}

function loadVisibleVoiceLayers() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(VOICE_LAYER_STORAGE_KEY) || "{}");
  } catch {
    saved = {};
  }
  return Object.fromEntries(VOICE_LINE_LAYER_IDS.map((id) => [
    id,
    typeof saved[id] === "boolean" ? saved[id] : DEFAULT_VISIBLE_VOICE_LAYER_IDS.has(id),
  ]));
}

function saveVisibleVoiceLayers() {
  localStorage.setItem(VOICE_LAYER_STORAGE_KEY, JSON.stringify(state.visibleVoiceLayers));
}

function renderLineGroup(group, open, context = {}) {
  const visibleLines = (state.testMode ? [drawLineFromPool(group)] : group.lines).map((line) => contextualizeLine(line, group, context));
  const relevantVocabulary = getRelevantVocabulary(visibleLines, group.vocabulary);
  const lines = visibleLines.map((line) => `<p class="voice-line">${highlightVocabulary(line, relevantVocabulary)}</p>`).join("");
  const vocab = state.testMode
    ? ""
    : relevantVocabulary.map((word) => `<span class="vocab-chip">${escapeHtml(displayVocab(word, word, visibleLines.join(" ")))}</span>`).join("");

  return `
    <details class="line-group" ${open ? "open" : ""}>
      <summary>${escapeHtml(displayTitle(group.title))}</summary>
      <div class="line-list">${lines}</div>
      ${vocab ? `<div class="vocab-list" aria-label="Useful vocabulary">${vocab}</div>` : ""}
    </details>
  `;
}

function contextualizeLine(line, group, context = {}) {
  if (!context.targetName) return line;
  const target = context.targetName;
  const templates = {
    Attack: `${line} ${target}, you are marked.`,
    Siege: `${line} ${target} stands in the circle.`,
    "No Allies Join": `${line} ${target}, this becomes personal.`,
    "Attack Win": `${line} ${target}, your card falls.`,
    "Attack Loss": `${line} ${target}, your defense bites back.`,
    "Attack Tie": `${line} ${target}, the tie still breaks my way.`,
    "Siege Attackers Win": `${line} ${target}, the pack overwhelms you.`,
    "Siege Defender Wins": `${line} ${target}, you break the whole pack.`,
  };
  return templates[group.title] || line;
}

function drawLineFromPool(group) {
  if (group.lines.length <= 1) return group.lines[0] || "";

  const key = `${group.title}::${group.lines.join("||")}`;
  if (!state.linePools[key] || state.linePools[key].length === 0) {
    state.linePools[key] = group.lines.map((_, index) => index);
  }

  const poolPosition = Math.floor(Math.random() * state.linePools[key].length);
  const [lineIndex] = state.linePools[key].splice(poolPosition, 1);
  saveLinePools();
  return group.lines[lineIndex];
}

function loadLinePools() {
  try {
    return JSON.parse(localStorage.getItem("bite-line-pools") || "{}");
  } catch {
    return {};
  }
}

function saveLinePools() {
  localStorage.setItem("bite-line-pools", JSON.stringify(state.linePools));
}

function getRelevantVocabulary(lines, vocabulary) {
  return vocabulary.filter((word) => {
    return lines.some((line) => vocabularyPatterns(word).some((patternText) => termPattern(patternText).test(line)));
  });
}

function vocabularyPatterns(word) {
  const normalized = normalizeVocabKey(word);
  return [word, ...(VOCAB_FORM_VARIANTS[normalized] || [])];
}

function highlightVocabulary(line, vocabulary) {
  if (!vocabulary.length) return escapeHtml(line);

  const matches = [];
  vocabulary.forEach((word) => {
    vocabularyPatterns(word).forEach((patternText) => {
      const pattern = termPattern(patternText);
      for (const match of line.matchAll(pattern)) {
        const text = match[1];
        const start = match.index + match[0].indexOf(text);
        matches.push({ start, end: start + text.length, word, text });
      }
    });
  });

  const selectedMatches = selectNonOverlappingMatches(matches);
  if (!selectedMatches.length) return escapeHtml(line);

  let html = "";
  let cursor = 0;
  selectedMatches.forEach((match) => {
    html += escapeHtml(line.slice(cursor, match.start));
    html += `<span class="vocab">${escapeHtml(displayVocab(match.text, match.word, line))}</span>`;
    cursor = match.end;
  });
  html += escapeHtml(line.slice(cursor));
  return html;
}

function selectNonOverlappingMatches(matches) {
  return matches
    .sort((a, b) => (b.end - b.start) - (a.end - a.start) || a.start - b.start)
    .reduce((selected, match) => {
      if (!selected.some((item) => match.start < item.end && match.end > item.start)) selected.push(match);
      return selected;
    }, [])
    .sort((a, b) => a.start - b.start);
}

function displayVocab(word, sourceWord = word) {
  const visibleWord = state.testMode
    ? word.replace(/[A-Za-z][A-Za-z'’]*/g, (token) => token[0] + "_".repeat(Math.max(1, token.length - 1)))
    : word;
  const translation = VOCAB_TRANSLATIONS_ZHTW[normalizeVocabKey(sourceWord)];
  return state.showVocabTranslations && translation ? `${visibleWord} (${translation})` : visibleWord;
}

function displayTitle(title) {
  const translation = ACTION_TRANSLATIONS_ZHTW[title];
  return state.showChineseNames && translation ? `${title} (${translation})` : title;
}

function actionButton(label, key, subline = "") {
  return `
    <button class="action-chip" type="button" data-open="${escapeHtml(key)}">
      ${escapeHtml(label)}
      ${subline ? `<small>${escapeHtml(subline)}</small>` : ""}
    </button>
  `;
}

function termPattern(term) {
  const escaped = escapeRegExp(term).replace(/\\ /g, "\\s+");
  return new RegExp(`(?:^|[^A-Za-z])(${escaped})(?=$|[^A-Za-z])`, "gi");
}

function normalizeVocabKey(word) {
  return word.toLowerCase().replace(/'/g, "’");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
