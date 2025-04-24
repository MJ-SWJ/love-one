// 灯谜和答案的数组
const riddles = [
    { question: "黄梅时节家家雨，打一节日", answer: "端午节" },
    { question: "两个胖子拍皮球，打一地名", answer: "合肥" },
    { question: "圆中藏四点，打一字", answer: "园" },
    { question: "一口咬掉牛尾巴，打一字", answer: "告" },
    { question: "三个三点水加一口，打一字", answer: "蒸" },
    { question: "天上开花，不落地上，打一自然现象", answer: "云彩" },
    { question: "早不说晚不说，打一字", answer: "许" },
    { question: "一人一张口，口下长只手，打一字", answer: "拿" },
    { question: "一边是红，一边是绿，一边喜风，一边喜雨，打一字", answer: "秋" },
    { question: "七人爬竹竿，打一成语", answer: "七上八下" },
    { question: "举头望明月，低头思故人，打一节日", answer: "中秋节" },
    { question: "日出东方红似火，打一城市名", answer: "朝阳" },
    { question: "此物生来权力大，敢把皇帝拉下马，打一日用品", answer: "秤" },
    { question: "树上小铃铛，风吹叮当响，春天花儿开，秋天结满粮，打一植物", answer: "小麦" },
    { question: "桥下有人游，桥上马来走，打一字", answer: "骄" },
    { question: "十个小孩爬竹竿，打一成语", answer: "十全十美" },
    { question: "四个晚上，打一字", answer: "罗" },
    { question: "半部春秋，打一字", answer: "秦" },
    { question: "山上还有山，打一字", answer: "崇" },
    { question: "守门员，打一字", answer: "闪" },
    { question: "一只黑狗，从不叫唤，打一字", answer: "默" },
    { question: "九号，打一字", answer: "旭" },
    { question: "太阳西边下，月亮东边挂，打一字", answer: "明" },
    { question: "一夜又一夜，打一字", answer: "多" },
    { question: "十字尾巴弯弯，算算数目少三，打一字", answer: "七" },
    { question: "一家十一口，打一字", answer: "吉" },
    { question: "一个人搬两个土，打一字", answer: "佳" },
    { question: "水上人家，打一字", answer: "沪" },
    { question: "说它小，下边大；说它大，上边小，打一字", answer: "尖" },
    { question: "一点一横长，一撇到南洋，南洋有个人，只有一寸长，打一字", answer: "府" },
    { question: "画时圆，写时方，冬时短，夏时长，打一字", answer: "日" },
    { question: "共三斤，打一字", answer: "兵" },
    { question: "口中一尺布，打一字", answer: "咄" },
    { question: "宝岛姑娘，打一字", answer: "始" },
    { question: "千里之外，打一字", answer: "重" },
    { question: "高台不见，打一字", answer: "党" },
    { question: "田中有人，打一字", answer: "电" },
    { question: "大漠孤烟直，长河落日圆，打一成语", answer: "一箭双雕" },
    { question: "白天躲黑夜，黑夜躲日光，打一自然现象", answer: "影子" },
    { question: "两兄弟，同条心，打一字", answer: "患" },
    { question: "上下难分，打一字", answer: "卡" },
    { question: "天衣无缝，打一成语", answer: "无懈可击" },
    { question: "三人行必有我师，打一字", answer: "徒" },
    { question: "四季只有夏秋冬，打一字", answer: "青" },
    { question: "天上开花，打一自然现象", answer: "流星" },
    { question: "一个字，千张嘴，有话只能往下传，打一字", answer: "舌" },
    { question: "日出东方红似火，打一花卉", answer: "太阳花" },
    { question: "冬天麦盖三层被，打一农业活动", answer: "冬灌" },
    { question: "轻飘烟雾随风舞，打一自然现象", answer: "风" },
    { question: "两个面窗同连，一阵风雨流泪，打一物品", answer: "眼镜" },
];

let currentRiddleIndex = 0;

// 新增函数：获取随机灯谜索引
function getRandomRiddleIndex() {
    return Math.floor(Math.random() * riddles.length);
}

// 修改显示灯谜的函数
function displayRiddle() {
    const riddleElement = document.getElementById('riddle');
    // 使用随机索引获取灯谜内容
    currentRiddleIndex = getRandomRiddleIndex();
    riddleElement.textContent = riddles[currentRiddleIndex].question;
}

// 新增积分变量
let score = 0;

// 显示当前得分
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `得分: ${score}`;
}

// 新增全局变量，用于记录点击次数
let clickCount = 0;

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

    // 增加点击次数计数
    clickCount++;

    // 当点击次数大于5次时，显示提示信息
    if (clickCount > 5) {
        resultElement.textContent = "你手抽抽了?搁着想卡BUG呢";
        resultElement.style.color = "orange"; // 使用橙色提示
        return; // 结束函数执行，不进行后续逻辑
    }

    // 检查用户输入是否为空
    if (!userAnswer) {
        resultElement.textContent = "你答了吗你就点！";
        resultElement.style.color = "red";
        return; // 结束函数执行，不进行后续逻辑
    }

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "恭喜你，答对了！";
        resultElement.style.color = "green";
        // 答对一题加一分
        score += 1;
        updateScore();
    } else {
        resultElement.textContent = `很遗憾，答错了。正确答案是：${correctAnswer}`;
        resultElement.style.color = "red";
    }

    answerInput.value = "";
}

// 初始化游戏
function initGame() {
    displayRiddle();
    updateScore(); // 初始化得分显示
}

// 新增全局变量，用于记录连续跳过的次数
let skipCount = 0;

// 修改显示下一个灯谜的函数
function nextRiddle() {
    const resultElement = document.getElementById('result');
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

    // 根据答题结果更新提示信息
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "就这难度？";
        skipCount = 0; // 答对后重置跳过计数
    } else if (!userAnswer) {
        skipCount++; // 记录连续跳过次数
        if (skipCount === 2) {
            resultElement.textContent = "？？？";
        } else if (skipCount === 3) {
            resultElement.textContent = "哥们你不考虑一下重开吗";
        } else if (skipCount > 3) {
            resultElement.textContent = ".......";
        } else {
            resultElement.textContent = "不是哥们直接跳过啊？";
        }
    } else {
        resultElement.textContent = "不管了，下一个";
        skipCount = 0; // 回答错误后重置跳过计数
    }

    // 切换到下一个灯谜（使用随机索引）
    displayRiddle();
    document.getElementById('answer').value = ""; // 清空输入框
}

function startGame() {
    // 切换到游戏界面
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    initGame();
}

function createRiddle() {
    alert("创作灯谜！");
}

// 切换界面函数
function switchScreen(screen) {
    const homeScreen = document.getElementById('home-screen');
    const gameScreen = document.getElementById('game-screen');
    const teamScreen = document.getElementById('team-screen');
    const easterEggScreen = document.getElementById('easter-egg-screen'); // 新增小彩蛋界面元素
    const resultElement = document.getElementById('result');

    if (screen === 'game') {
        homeScreen.classList.remove('active');
        gameScreen.classList.add('active');
        initGame();
    } else if (screen === 'home') {
        gameScreen.classList.remove('active');
        teamScreen.classList.remove('active');
        easterEggScreen.classList.remove('active'); // 移除小彩蛋界面
        homeScreen.classList.add('active');
        resultElement.textContent = "";
    } else if (screen === 'team') {
        homeScreen.classList.remove('active');
        gameScreen.classList.remove('active');
        teamScreen.classList.add('active');
    } else if (screen === 'easter-egg') {
        homeScreen.classList.remove('active');
        gameScreen.classList.remove('active');
        teamScreen.classList.remove('active');
        easterEggScreen.classList.add('active');
    }
}

// 更新 createRiddle 函数以切换到团队界面
function createRiddle() {
    switchScreen('team');
}

// 定义每日一言数组
const quotes = [
    "生活不是等待风暴过去，而是学会在雨中起舞。",
    "成功的秘诀在于坚持不懈奋斗。",
    "每一天都是一个新的开始。",
    "未来是属于那些相信自己梦想的人。",
    "努力不一定成功，但不努力一定不会成功。",
    "失败乃成功之母，勇于尝试才能成功。",
    "不要害怕阴影，它证明了附近有光。",
    "今天的努力，是为了明天的从容。",
    "与其临渊羡鱼，不如退而结网。",
    "心怀梦想，才能走得更远。",
    "最困难的时候，就是离成功不远之日。",
    "行动是治愈恐惧的良药。",
    "只有经历过地狱般的磨砺，才能练就天堂般的力量。",
    "千里之行，始于足下。",
    "坚持到底，勇往直前。",
    "机会总是垂青于那些有准备的人。",
    "越努力，越幸运。",
    "平凡的脚步，也能走完伟大的行程。",
    "滴水穿石，非一日之功；绳锯木断，持之以恒。",
    "人生没有彩排，每一天都是现场直播。",
    "与其抱怨黑暗，不如点亮蜡烛。",
    "成功来自努力，努力造就成功。",
    "不怕路长，只怕志短。",
    "心若向阳，无畏悲伤。",
    "命运掌握在自己手中。",
    "只要功夫深，铁杵磨成针。",
    "逆境中成长，风雨后见彩虹。",
    "细节决定成败，态度决定高度。",
    "人生如逆水行舟，不进则退。",
    "不忘初心，方得始终。",
    "想要无可取代，就要与众不同。",
    "所有的光鲜亮丽，背后都有不为人知的艰辛。",
    "脚踏实地，仰望星空。",
    "今天的汗水，是明天的果实。",
    "用微笑面对生活，生活也会对你微笑。",
    "每一次挫折，都是成长的机会。",
    "做自己的太阳，无需借别人的光。",
    "努力到无能为力，拼搏到感动自己。",
    "你若盛开，清风自来。",
    "坚持梦想，永不放弃。",
    "时间会证明一切，努力从不白费。",
    "星光不问赶路人，时光不负有心人。",
    "心怀希望，未来可期。",
    "越努力，越接近幸福。",
    "只有不断奔跑，才能留在原地。",
    "把简单的事情做到极致，就是成功。",
    "你的未来，藏在现在的努力里。",
    "种一棵树最好的时间是十年前，其次是现在。",
    "永远相信美好的事情即将发生。",
    "保持热爱，奔赴下一场山海。",
    "人生没有白走的路，每一步都算数。",
    "心怀感恩，所遇皆美好。",
    "努力成为自己喜欢的样子，不后悔，不将就。"
];


// 随机切换每日一言
function changeQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// 页面加载时初始化每日一言
window.onload = function() {
    document.getElementById('home-screen').classList.add('active');
    changeQuote(); // 初始化每日一言
    // 每5秒自动切换每日一言
    setInterval(changeQuote, 5000);
};

// 新增变量用于记录按键序列
let keySequence = '';

// 新增变量用于记录音量键状态
let isVolumeDownPressed = false;
let isVolumeUpPressed = false;

// 修改 handleEasterEgg 函数以支持音量键组合触发
function handleEasterEgg(event) {
    const key = event.key.toLowerCase();
    keySequence += key;

    // 检查是否匹配 "wan"
    if (keySequence.endsWith('wan')) {
        switchScreen('easter-egg');
    }

    // 限制按键序列长度，避免无限增长
    if (keySequence.length > 3) {
        keySequence = keySequence.slice(-3);
    }

    // 检测音量键组合
    if (key === 'arrowdown') {
        isVolumeDownPressed = true;
    } else if (key === 'arrowup') {
        isVolumeUpPressed = true;
    }

    // 当音量加键和音量减键同时被按下时触发彩蛋
    if (isVolumeDownPressed && isVolumeUpPressed) {
        switchScreen('easter-egg');
        isVolumeDownPressed = false;
        isVolumeUpPressed = false;
    }
}

// 添加键盘事件监听器
document.addEventListener('keydown', handleEasterEgg);

// 新增键盘事件监听器，用于释放音量键状态
document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'arrowdown') {
        isVolumeDownPressed = false;
    } else if (key === 'arrowup') {
        isVolumeUpPressed = false;
    }
});
