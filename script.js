// ============================================================
// 機種別スペックデータ（設定1〜6） ※確率は完全無変更
// ============================================================
const jugglerSpecs = {
    "マイジャグラーV": {
        synth:     [163.8, 159.1, 148.6, 135.4, 126.8, 114.6],
        big:       [273.1, 270.8, 266.4, 254.0, 240.1, 229.1],
        reg:       [409.6, 385.5, 336.1, 290.0, 268.6, 229.1],
        budou:     [5.90, 5.85, 5.80, 5.78, 5.76, 5.66],
        cherry:    [35.85, 35.85, 34.66, 33.58, 33.55, 33.03],
        singleBig: [409.60, 407.60, 399.61, 378.82, 354.25, 337.81],
        cherryBig: [1424.70, 1394.38, 1365.33, 1285.02, 1213.63, 1129.93],
        singleReg: [655.36, 601.25, 492.75, 407.06, 391.10, 327.68],
        cherryReg: [1092.27, 1074.36, 1057.03, 1008.25, 862.32, 762.05]
    },
    "アイムジャグラーEX": {
        synth:     [168.5, 161.0, 148.6, 142.2, 128.5, 127.5],
        big:       [273.1, 269.7, 269.7, 259.0, 259.0, 255.0],
        reg:       [439.8, 399.6, 331.0, 315.1, 255.0, 255.0],
        budou:     [6.02, 6.02, 6.02, 6.02, 6.02, 5.78],
        cherry:    [33.49, 33.44, 33.27, 33.15, 32.90, 32.90],
        singleBig: [387.79, 381.02, 381.02, 370.26, 370.26, 362.08],
        cherryBig: [923.04, 923.04, 923.04, 862.32, 862.32, 862.32],
        singleReg: [636.27, 599.88, 471.48, 445.82, 362.08, 362.08],
        cherryReg: [1424.70, 1337.47, 1110.78, 1074.36, 862.32, 862.32]
    },
    "ファンキージャグラー2": {
        synth:     [165.9, 158.3, 150.7, 140.6, 133.2, 119.6],
        big:       [266.4, 259.0, 256.0, 249.2, 240.1, 219.1],
        reg:       [439.8, 407.1, 366.1, 322.8, 299.3, 262.1],
        budou:     [5.94, 5.92, 5.88, 5.83, 5.76, 5.67],
        cherry:    [36.0, 36.0, 36.0, 36.0, 36.0, 36.0],
        singleBig: [402.06, 397.19, 397.19, 385.51, 378.82, 339.56],
        cherryBig: [1456.36, 1365.33, 1337.47, 1337.47, 1260.31, 1191.56],
        singleReg: [636.27, 574.88, 512.00, 448.88, 409.60, 356.17],
        cherryReg: [1424.70, 1394.38, 1285.02, 1149.75, 1110.78, 992.97]
    },
    "ゴーゴージャグラー3": {
        synth:     [149.6, 145.3, 139.7, 130.5, 123.7, 117.4],
        big:       [259.0, 258.0, 257.0, 254.0, 247.3, 234.9],
        reg:       [354.2, 332.7, 306.2, 268.6, 247.3, 234.9],
        budou:     [6.25, 6.20, 6.15, 6.07, 6.00, 5.92],
        cherry:    [33.4, 33.3, 33.2, 33.1, 32.9, 32.8],
        singleBig: [346.75, 344.93, 343.12, 343.12, 332.67, 316.60],
        cherryBig: [1024.00, 1024.00, 1024.00, 978.15, 963.77, 910.22],
        singleReg: [471.48, 448.88, 417.43, 362.08, 330.99, 316.60],
        cherryReg: [1424.70, 1285.02, 1149.75, 1040.25, 978.15, 910.22]
    },
    "ハッピージャグラーV III": {
        synth:     [161.8, 154.9, 146.9, 137.7, 127.5, 120.0],
        big:       [273.1, 270.8, 263.2, 254.0, 239.2, 226.0],
        reg:       [397.2, 362.1, 332.7, 300.6, 273.1, 256.0],
        budou:     [6.04, 6.01, 5.98, 5.84, 5.81, 5.79],
        cherry:    [56.55, 56.55, 56.55, 56.55, 56.55, 56.55],
        singleBig: [358.12, 354.25, 348.60, 341.33, 319.69, 297.89],
        cherryBig: [1149.75, 1149.75, 1074.36, 992.97, 949.80, 936.23],
        singleReg: [682.67, 612.49, 574.88, 496.49, 455.11, 439.84],
        cherryReg: [949.80, 885.62, 789.59, 762.05, 682.67, 612.49]
    },
    "ミスタージャグラー": {
        synth:     [156.4, 152.4, 145.6, 134.3, 124.4, 118.7],
        big:       [268.6, 267.5, 260.1, 249.2, 240.9, 237.4],
        reg:       [374.5, 354.2, 331.0, 291.3, 257.0, 237.4],
        budou:     [6.29, 6.22, 6.15, 6.09, 6.02, 5.96],
        cherry:    [37.0, 37.0, 37.0, 37.0, 37.0, 37.0],
        singleBig: [348.60, 348.60, 337.81, 324.44, 315.08, 310.60],
        cherryBig: [1724.63, 1680.41, 1638.40, 1524.09, 1424.70, 1394.38],
        singleReg: [512.00, 478.37, 439.84, 378.82, 327.68, 297.89],
        cherryReg: [1638.40, 1598.44, 1560.38, 1456.36, 1365.33, 1337.47]
    },
    "ウルトラミラクルジャグラー": {
        synth:     [164.3, 158.3, 147.9, 138.6, 130.8, 121.6],
        big:       [267.5, 261.1, 256.0, 242.7, 233.2, 216.3],
        reg:       [425.6, 402.1, 350.5, 322.8, 297.9, 277.7],
        budou:     [5.93, 5.93, 5.93, 5.93, 5.87, 5.81],
        cherry:    [35.5, 35.5, 34.9, 34.8, 34.1, 33.4],
        singleBig: [334.37, 332.67, 329.33, 310.60, 304.82, 281.27],
        cherryBig: [1337.47, 1213.63, 1149.75, 1110.78, 992.97, 936.23],
        singleReg: [595.78, 546.13, 489.07, 436.91, 414.78, 378.82],
        cherryReg: [1489.45, 1524.09, 1236.53, 1236.53, 1057.03, 1040.25]
    },
    "ジャグラーガールズSS": {
        synth:     [159.1, 152.8, 142.8, 132.4, 128.3, 119.2],
        big:       [273.1, 270.8, 260.1, 250.1, 243.6, 226.0],
        reg:       [381.0, 350.5, 316.6, 281.3, 270.8, 252.1],
        budou:     [5.98, 5.98, 5.98, 5.98, 5.88, 5.83],
        cherry:    [33.6, 33.5, 33.3, 33.2, 33.1, 32.9],
        singleBig: [387.79, 381.02, 370.26, 350.46, 337.81, 312.08],
        cherryBig: [923.04, 936.23, 873.81, 873.81, 873.81, 819.20],
        singleReg: [520.13, 481.88, 436.91, 397.19, 383.25, 358.12],
        cherryReg: [1424.70, 1285.02, 1149.75, 963.77, 923.04, 851.12]
    }
};

const machineColumns = {
    "マイジャグラーV": "💡 <strong>【マイジャグラーVの推測要素】</strong><br>・<strong>最重要: 単独REG確率</strong><br>設定1と6で大きな差があり、高設定ほど安定してREGが先行しやすいのが特徴です。",
    "アイムジャグラーEX": "💡 <strong>【アイムジャグラーEXの推測要素】</strong><br>・<strong>最重要: ぶどう確率 ＆ REG確率</strong><br>ベースが高いため、数千G単位でのぶどうの落ち方が信頼できる判断材料になります。",
    "ファンキージャグラー2": "💡 <strong>【ファンキージャグラー2の推測要素】</strong><br>・<strong>最重要: BIG確率 ＆ ボーナス合算</strong><br>荒波スペック。細かい小役以上にBIGの引け軽さが出玉と推測に直結します。",
    "ゴーゴージャグラー3": "💡 <strong>【ゴーゴージャグラー3の推測要素】</strong><br>・<strong>最重要: REG確率</strong><br>低ベース・高確率機。何よりもREG確率の軽さが命綱です。",
    "ハッピージャグラーV III": "💡 <strong>【ハッピージャグラーV IIIの推測要素】</strong><br>・<strong>最重要: ぶどう確率 ＆ チェリー重複バランス</strong><br>ぶどう確率の重要度が高く、早い段階から高設定を見抜きやすい特徴を持っています。",
    "ミスタージャグラー": "💡 <strong>【ミスタージャグラーの推測要素】</strong><br>・<strong>最重要: ぶどう確率 ＆ ピエロ重複の看破</strong><br>設定差のあるピエロ重複や小役の正確なカウントがモノを言います。",
    "ウルトラミラクルジャグラー": "💡 <strong>【ウルトラミラクルジャグラーの推測要素】</strong><br>・<strong>最重要: ぶどう確率 ＆ REG確率</strong><br>高機械割機。王道のぶどうとREGのダブルチェックを行いましょう。",
    "ジャグラーガールズSS": "💡 <strong>【ジャグラーガールズSSの推測要素】</strong><br>・<strong>最重要: REG確率 ＆ ぶどう確率</strong><br>コンスタントに引けるREGとぶどうのベースの高さが特徴です。"
};

let appData = {};
let activeMachine = null;
let activeTableId = null;
let currentPage = 1;
let currentBonusType = 'BIG';
let currentTrigger = '単独';

try {
    if (window.location.hash && window.location.hash.length > 1) {
        const hashData = window.location.hash.substring(1);
        const raw = decodeURIComponent(atob(hashData));
        appData = JSON.parse(raw);
    } else if (localStorage.getItem('juggler_ultimate_shop_data')) {
        appData = JSON.parse(localStorage.getItem('juggler_ultimate_shop_data'));
    }
} catch (e) {
    appData = {};
}

Object.keys(jugglerSpecs).forEach(m => {
    if (!appData[m] || !Array.isArray(appData[m])) {
        appData[m] = [];
    }
});

function saveAppData() {
    try {
        const raw = JSON.stringify(appData);
        const encoded = btoa(encodeURIComponent(raw));
        localStorage.setItem('juggler_ultimate_shop_data', raw);
        localStorage.setItem('juggler_ui_state', JSON.stringify({
            activeMachine,
            activeTableId,
            currentPage
        }));
        history.replaceState(null, '', '#' + encoded);
    } catch (e) {}
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

function initApp() {
    window.addEventListener('paste', handleGlobalPaste);

    let savedState = {};
    try {
        savedState = JSON.parse(localStorage.getItem('juggler_ui_state') || '{}');
    } catch (e) {}

    if (savedState.activeMachine && appData[savedState.activeMachine]) {
        activeMachine = savedState.activeMachine;
        document.getElementById('activeMachineTitle').innerText = activeMachine;

        if (savedState.activeTableId) {
            const tables = appData[activeMachine] || [];
            const t = tables.find(item => item.id === savedState.activeTableId);
            if (t) {
                openTable(savedState.activeTableId, false);
                if (savedState.currentPage) {
                    switchPage(savedState.currentPage, false);
                }
                return;
            }
        }

        renderTableList();
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('pageTableList').classList.add('active');
    } else {
        renderMachineSelect();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function renderMachineSelect() {
    activeMachine = null;
    activeTableId = null;
    currentPage = 0;
    saveAppData();

    const container = document.getElementById('machineListContainer');
    if (!container) return;

    let html = '';
    Object.keys(jugglerSpecs).forEach(m => {
        const tables = appData[m] || [];
        html += `
            <li class="machine-item" onclick="openMachine('${m}')">
                <div class="item-info">
                    <h3>${m}</h3>
                    <p>登録実戦数: ${tables.length}件</p>
                </div>
                <span class="badge">${tables.length}件</span>
            </li>
        `;
    });
    container.innerHTML = html;
}

function openMachine(machineName) {
    activeMachine = machineName;
    activeTableId = null;
    document.getElementById('activeMachineTitle').innerText = machineName;
    renderTableList();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('pageTableList').classList.add('active');
    saveAppData();
}

function goMachineSelect() {
    activeMachine = null;
    activeTableId = null;
    currentPage = 0;
    saveAppData();
    renderMachineSelect();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('pageMachineSelect').classList.add('active');
    document.getElementById('bottomNavTabs').style.display = 'none';
}

function goTableList() {
    activeTableId = null;
    currentPage = 0;
    saveAppData();

    if (!activeMachine) {
        goMachineSelect();
        return;
    }

    renderTableList();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('pageTableList').classList.add('active');
    document.getElementById('bottomNavTabs').style.display = 'none';
}

function calculateTableDiffCoins(t) {
    const rateSelection = t.rate || '46';
    let per1000 = 46;
    if (rateSelection === '20') per1000 = 50;
    else if (rateSelection === '46') per1000 = 46;
    else if (rateSelection === 'custom') per1000 = t.customRate || 46;

    const investmentYen = t.investment || 0;
    const recoveryVal = t.recovery || 0;
    const recoveryMode = t.recoveryMode || 'coins';
    const exchangeRate = getExchangeRate(t.gap);
    const coinValue = 20;

    const investCoins = investmentYen > 0 ? Math.round((investmentYen / 1000) * per1000) : 0;
    
    let recoveryCoins = 0;
    if (recoveryMode === 'yen') {
        recoveryCoins = recoveryVal > 0 ? Math.round(recoveryVal / (coinValue * exchangeRate)) : 0;
    } else {
        recoveryCoins = recoveryVal;
    }

    return recoveryCoins - investCoins;
}

function renderTableList() {
    const container = document.getElementById('tableListContainer');
    const sortType = document.getElementById('sortTypeSelect').value;
    let tables = [...(appData[activeMachine] || [])];

    tables.sort((a, b) => {
        if (sortType === 'dateDesc') {
            return (b.date || '').localeCompare(a.date || '');
        } else if (sortType === 'dateAsc') {
            return (a.date || '').localeCompare(b.date || '');
        } else if (sortType === 'diffDesc') {
            return calculateTableDiffCoins(b) - calculateTableDiffCoins(a);
        } else if (sortType === 'diffAsc') {
            return calculateTableDiffCoins(a) - calculateTableDiffCoins(b);
        }
        return 0;
    });

    let html = '';
    if (tables.length === 0) {
        html = '<li style="text-align:center; color:var(--muted-color); padding:15px;">登録されている台はありません</li>';
    } else {
        tables.forEach(t => {
            const totalBig = (t.history ? t.history.filter(h => h.type === 'BIG').length : 0) + (t.prevBig || 0);
            const totalReg = (t.history ? t.history.filter(h => h.type === 'REG').length : 0) + (t.prevReg || 0);
            const totalBonus = totalBig + totalReg;
            const gappei = (totalBonus > 0 && t.games > 0) ? `1/${(t.games / totalBonus).toFixed(1)}` : '1/0.0';
            const diffCoins = calculateTableDiffCoins(t);
            const diffClass = diffCoins >= 0 ? 'plus' : 'minus';
            const diffStr = diffCoins >= 0 ? `+${diffCoins}` : `${diffCoins}`;

            html += `
                <li class="table-item" onclick="openTable(${t.id}, true)">
                    <div class="item-info">
                        <h3>📅 ${t.date || '----.--.--'} ｜ 📍 ${t.shop} ｜ ${t.number}</h3>
                        <p>G: ${t.games} ｜ B:${totalBig} ｜ R:${totalReg} ｜ 合算: ${gappei} ｜ 差枚: <span class="${diffClass}">${diffStr}枚</span></p>
                    </div>
                    <div class="table-actions" onclick="event.stopPropagation()">
                        <button class="btn-small-action" onclick="editTable(${t.id})">編集</button>
                        <button class="btn-tiny-del" onclick="confirmDeleteTable(${t.id})">✕ 削除</button>
                    </div>
                </li>
            `;
        });
    }
    container.innerHTML = html;
}

// 新規実践開始モーダル制御
function openStartModal() {
    document.getElementById('modalDateInput').value = getTodayStr();
    document.getElementById('modalShopInput').value = '〇〇店';
    document.getElementById('modalNumberInput').value = '';
    document.getElementById('modalMemoInput').value = '';
    document.getElementById('startModal').classList.add('active');
}

function closeStartModal() {
    document.getElementById('startModal').classList.remove('active');
}

function startNewSessionFromModal() {
    const dateInput = document.getElementById('modalDateInput').value || getTodayStr();
    const shopInput = document.getElementById('modalShopInput').value.trim() || '〇〇店';
    const numberInput = document.getElementById('modalNumberInput').value.trim() || '1番台';
    const memoInput = document.getElementById('modalMemoInput').value.trim();

    if (!appData[activeMachine]) appData[activeMachine] = [];
    const newTable = {
        id: Date.now(),
        date: dateInput,
        shop: shopInput,
        number: numberInput,
        memo: memoInput,
        games: 0,
        startGames: 0,
        prevBig: 0,
        prevReg: 0,
        budou: 0,
        cherry: 0,
        history: [],
        rate: '46',
        customRate: 46,
        gap: '5.6',
        investment: 0,
        recovery: 0,
        recoveryMode: 'coins',
        imageData: ''
    };

    appData[activeMachine].unshift(newTable);
    saveAppData();
    closeStartModal();
    openTable(newTable.id, true);
}

// 店舗情報＆日付編集モーダル制御
function openEditSessionModal() {
    const t = getActiveTable();
    if (!t) return;
    document.getElementById('editDateInput').value = t.date || getTodayStr();
    document.getElementById('editShopInput').value = t.shop || '';
    document.getElementById('editNumberInput').value = t.number || '';
    document.getElementById('editMemoInput').value = t.memo || '';
    document.getElementById('editSessionModal').classList.add('active');
}

function closeEditSessionModal() {
    document.getElementById('editSessionModal').classList.remove('active');
}

function saveEditSessionModal() {
    const t = getActiveTable();
    if (!t) return;
    t.date = document.getElementById('editDateInput').value || t.date;
    t.shop = document.getElementById('editShopInput').value.trim() || t.shop;
    t.number = document.getElementById('editNumberInput').value.trim() || t.number;
    t.memo = document.getElementById('editMemoInput').value.trim();
    saveAppData();
    closeEditSessionModal();
    document.getElementById('activeTableName').innerText = `${t.shop} / ${t.number}`;
    document.getElementById('inputDate').value = t.date;
}

function editTable(id) {
    openTable(id, true);
    openEditSessionModal();
}

function confirmDeleteTable(id) {
    if (confirm('本当にこの実戦データを削除しますか？')) {
        appData[activeMachine] = appData[activeMachine].filter(t => t.id !== id);
        saveAppData();
        renderTableList();
    }
}

function getActiveTable() {
    const tables = appData[activeMachine] || [];
    return tables.find(t => t.id === activeTableId);
}

function openTable(id, doSave = true) {
    activeTableId = id;
    currentPage = 1;
    if (doSave) saveAppData();

    const t = getActiveTable();
    if (!t) return;

    document.getElementById('activeTableName').innerText = `${t.shop} / ${t.number}`;
    document.getElementById('totalGamesInput').value = t.games;
    document.getElementById('startGamesInput').value = t.startGames || 0;
    document.getElementById('prevBigInput').value = t.prevBig || 0;
    document.getElementById('prevRegInput').value = t.prevReg || 0;
    switchPage1Sub(1);
    switchPage3Sub(1);

    document.getElementById('inputDate').value = t.date || getTodayStr();
    const rateVal = t.rate || '46';
    document.getElementById('rateType').value = rateVal;
    document.getElementById('inputCustomRate').value = t.customRate || 46;
    document.getElementById('customRateBox').style.display = (rateVal.toString() === 'custom') ? 'flex' : 'none';

    document.getElementById('gapType').value = t.gap || '5.6';
    document.getElementById('inputInvestment').value = t.investment || 0;
    document.getElementById('recoveryMode').value = t.recoveryMode || 'coins';
    document.getElementById('inputRecovery').value = t.recovery || 0;
    document.getElementById('inputMemo').value = t.memo || '';

    updateRecoveryModeUI();
    updateImagePreview(t.imageData);

    updateDisplay();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    document.getElementById('bottomNavTabs').style.display = 'flex';
    document.querySelectorAll('.tab-btn').forEach((b, idx) => b.classList.toggle('active', idx === 0));
}

function switchPage(pageNum, doSave = true) {
    currentPage = pageNum;
    if (doSave) saveAppData();

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('page' + pageNum).classList.add('active');
    document.querySelectorAll('.tab-btn')[pageNum - 1].classList.add('active');

    if (pageNum === 2) {
        document.getElementById('bonusGameInput').value = '';
        document.getElementById('customTriggerInput').value = '';
        document.getElementById('sakiPekaCheck').checked = false;
        updatePage2History();
    }
    if (pageNum === 3) { updateApproximationTable(); }
    if (pageNum === 4) { 
        updateRecoveryModeUI();
        updateDetailedSummary(); 
        updatePage4History();
    }
}

function updateGamesFromInput() {
    const t = getActiveTable();
    if (!t) return;
    const val = parseInt(document.getElementById('totalGamesInput').value);
    t.games = isNaN(val) ? 0 : val;
    updateDisplay(); saveAppData();
}

function updateStartGamesFromInput() {
    const t = getActiveTable();
    if (!t) return;
    const val = parseInt(document.getElementById('startGamesInput').value);
    t.startGames = isNaN(val) || val < 0 ? 0 : val;
    updateDisplay(); saveAppData();
}

function updatePrevCountsFromInput() {
    const t = getActiveTable();
    if (!t) return;
    const bigVal = parseInt(document.getElementById('prevBigInput').value);
    const regVal = parseInt(document.getElementById('prevRegInput').value);
    t.prevBig = isNaN(bigVal) || bigVal < 0 ? 0 : bigVal;
    t.prevReg = isNaN(regVal) || regVal < 0 ? 0 : regVal;
    updateDisplay(); saveAppData();
}

// 自分が打っている区間の回転数（総回転数 − 開始時のG数）
function computeOwnGames(t) {
    if (!t) return 0;
    const g = t.games || 0;
    const s = t.startGames || 0;
    return Math.max(0, g - s);
}

// Page1のサブタブ切り替え（①全体情報 / ②自分の区間カウンター）
function switchPage1Sub(n) {
    document.getElementById('page1SubA').classList.toggle('active', n === 1);
    document.getElementById('page1SubB').classList.toggle('active', n === 2);
    document.getElementById('page1SubBtnA').classList.toggle('active', n === 1);
    document.getElementById('page1SubBtnB').classList.toggle('active', n === 2);
    if (n === 2) updateDisplay();
}

// Page3のサブタブ切り替え（①台全体 / ②自分の区間）
function switchPage3Sub(n) {
    document.getElementById('page3SubA').classList.toggle('active', n === 1);
    document.getElementById('page3SubB').classList.toggle('active', n === 2);
    document.getElementById('page3SubBtnA').classList.toggle('active', n === 1);
    document.getElementById('page3SubBtnB').classList.toggle('active', n === 2);
    updateApproximationTable();
}

function changeCount(type, val) {
    const t = getActiveTable();
    if (!t) return;
    if (type === 'budou') t.budou = Math.max(0, t.budou + val);
    else if (type === 'cherry') t.cherry = Math.max(0, t.cherry + val);
    updateDisplay(); saveAppData();
}

function selectBonusType(type) {
    currentBonusType = type;
    document.getElementById('typeBig').className = 'select-btn ' + (type === 'BIG' ? 'sel-big' : '');
    document.getElementById('typeReg').className = 'select-btn ' + (type === 'REG' ? 'sel-reg' : '');
}

function selectTrigger(trigger) {
    currentTrigger = trigger;
    ['trigSingle', 'trigCherry', 'trigRare', 'trigUnknown'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.className = 'select-btn';
    });
    if (trigger === '単独') document.getElementById('trigSingle').className = 'select-btn sel-active';
    if (trigger === 'チェリー重複') document.getElementById('trigCherry').className = 'select-btn sel-active';
    if (trigger === 'レアチェリー / 一枚役') document.getElementById('trigRare').className = 'select-btn sel-active';
    if (trigger === '不明') document.getElementById('trigUnknown').className = 'select-btn sel-active';
}

function registerBonus() {
    const t = getActiveTable();
    if (!t) return;

    const gameVal = parseInt(document.getElementById('bonusGameInput').value);
    const customVal = document.getElementById('customTriggerInput').value.trim();
    const isSaki = document.getElementById('sakiPekaCheck').checked;

    let finalTrigger = `${currentTrigger} / ${isSaki ? '先ペカ' : '後ペカ'}`;
    if (customVal) finalTrigger += ` [${customVal}]`;

    if (!t.history) t.history = [];
    t.history.unshift({ id: Date.now(), games: isNaN(gameVal) ? 0 : gameVal, type: currentBonusType, trigger: finalTrigger });
    saveAppData(); 
    updateDisplay(); 
    updatePage2History();
    switchPage(1);
}

// 2ページ目の個別ボーナス編集モーダル制御
function openEditBonusModal(id) {
    const t = getActiveTable();
    if (!t) return;
    const item = t.history.find(h => h.id === id);
    if (!item) return;

    document.getElementById('editBonusId').value = item.id;
    document.getElementById('editBonusGamesInput').value = item.games;
    document.getElementById('editBonusTypeSelect').value = item.type;

    // 契機とペカ状態の分離抽出
    let trigBase = '単独';
    let customPart = item.trigger;
    ['単独', 'チェリー重複', 'レアチェリー / 一枚役', '不明'].forEach(trig => {
        if (item.trigger.startsWith(trig)) {
            trigBase = trig;
            customPart = item.trigger.substring(trig.length).trim();
        }
    });
    document.getElementById('editBonusTriggerSelect').value = trigBase;
    document.getElementById('editBonusCustomInput').value = customPart.replace(/^\/\s*/, '');
    document.getElementById('editBonusModal').classList.add('active');
}

function closeEditBonusModal() {
    document.getElementById('editBonusModal').classList.remove('active');
}

function saveEditBonusModal() {
    const t = getActiveTable();
    if (!t) return;
    const id = parseInt(document.getElementById('editBonusId').value);
    const item = t.history.find(h => h.id === id);
    if (item) {
        item.games = Math.max(0, parseInt(document.getElementById('editBonusGamesInput').value) || 0);
        item.type = document.getElementById('editBonusTypeSelect').value;
        const selTrig = document.getElementById('editBonusTriggerSelect').value;
        const customText = document.getElementById('editBonusCustomInput').value.trim();
        item.trigger = customText ? `${selTrig} / ${customText}` : selTrig;

        saveAppData();
        updateDisplay();
        updatePage2History();
    }
    closeEditBonusModal();
}

function deleteHistory(id) {
    const t = getActiveTable();
    if (!t) return;
    if (confirm('このボーナス履歴を削除しますか？')) {
        t.history = t.history.filter(item => item.id !== id);
        saveAppData();
        updateDisplay();
        updatePage2History();
        updatePage4History();
        updateDetailedSummary();
    }
}

// 2ページ目のボーナス履歴一覧（「編集」ボタン付き）
function updatePage2History() {
    const t = getActiveTable();
    if (!t) return;
    const listEl = document.getElementById('page2HistoryList');
    if (!t.history || t.history.length === 0) {
        listEl.innerHTML = '<li style="text-align: center; color: var(--muted-color); padding: 20px;">履歴なし</li>';
        return;
    }

    let html = '';
    t.history.forEach(item => {
        const badgeClass = item.type === 'BIG' ? 'badge-big' : 'badge-reg';
        html += `
            <li class="history-item">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; flex:1;">
                    <span style="color:var(--muted-color); width:45px; font-weight:bold;">${item.games}G</span>
                    <span class="${badgeClass}">${item.type}</span>
                    <span style="color:#d1d5db; font-size:0.75rem;">(${item.trigger})</span>
                </div>
                <div style="display:flex; gap:4px;">
                    <button class="btn-small-action" onclick="openEditBonusModal(${item.id})">編集</button>
                    <button class="btn-tiny-del" onclick="deleteHistory(${item.id})">✕ 削除</button>
                </div>
            </li>
        `;
    });
    listEl.innerHTML = html;
}

// 4ページ目のボーナス履歴一覧（編集ボタンなし・閲覧用）
function updatePage4History() {
    const t = getActiveTable();
    if (!t) return;
    const historyList = document.getElementById('page4HistoryList');
    if (!t.history || t.history.length === 0) {
        historyList.innerHTML = '<li style="text-align: center; color: var(--muted-color); padding: 20px;">履歴なし</li>';
    } else {
        let html = '';
        t.history.forEach(item => {
            const badgeClass = item.type === 'BIG' ? 'badge-big' : 'badge-reg';
            html += `
                <li class="history-item">
                    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                        <span style="color:var(--muted-color); width:45px;">${item.games}G</span>
                        <span class="${badgeClass}">${item.type}</span>
                        <span style="color:#d1d5db;">(${item.trigger})</span>
                    </div>
                </li>
            `;
        });
        historyList.innerHTML = html;
    }
}

function updateRecoveryModeUI() {
    const mode = document.getElementById('recoveryMode').value;
    const titleEl = document.getElementById('recoveryLabelTitle');
    const btnDec = document.getElementById('btnDecRecovery');
    const btnInc = document.getElementById('btnIncRecovery');
    if (mode === 'yen') {
        titleEl.innerText = '回収金額 (円)';
        if (btnDec) btnDec.innerText = '-1000';
        if (btnInc) btnInc.innerText = '＋1000';
    } else {
        titleEl.innerText = '回収枚数';
        if (btnDec) btnDec.innerText = '-50';
        if (btnInc) btnInc.innerText = '＋50';
    }
}

function addRecoveryStep(sign) {
    const mode = document.getElementById('recoveryMode').value;
    const step = (mode === 'yen') ? 1000 : 50;
    const input = document.getElementById('inputRecovery');
    let current = parseInt(input.value) || 0;
    current += sign * step;
    if (current < 0) current = 0;
    input.value = current;
    updateConfigs();
}

function updateConfigs() {
    const t = getActiveTable();
    if (!t) return;

    t.date = document.getElementById('inputDate').value || getTodayStr();

    const rateVal = document.getElementById('rateType').value;
    t.rate = rateVal;
    t.customRate = parseFloat(document.getElementById('inputCustomRate').value) || 46;
    document.getElementById('customRateBox').style.display = (rateVal === 'custom') ? 'flex' : 'none';

    t.gap = document.getElementById('gapType').value;
    t.investment = parseFloat(document.getElementById('inputInvestment').value) || 0;
    t.recoveryMode = document.getElementById('recoveryMode').value;
    t.recovery = parseFloat(document.getElementById('inputRecovery').value) || 0;
    t.memo = document.getElementById('inputMemo').value;

    updateRecoveryModeUI();
    saveAppData();
    updateDetailedSummary();
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        const t = getActiveTable();
        if (!t) return;
        t.imageData = e.target.result;
        saveAppData();
        updateImagePreview(t.imageData);
    };
    reader.readAsDataURL(file);
}

function handleGlobalPaste(event) {
    if (currentPage !== 4) return;
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            const reader = new FileReader();
            reader.onload = function (e) {
                const t = getActiveTable();
                if (!t) return;
                t.imageData = e.target.result;
                saveAppData();
                updateImagePreview(t.imageData);
                alert('スクショ画像を貼り付けて保存しました！');
            };
            reader.readAsDataURL(blob);
            break;
        }
    }
}

function updateImagePreview(dataUrl) {
    const area = document.getElementById('imageArea');
    if (!dataUrl) {
        area.innerHTML = `
            <div class="image-upload-box" id="uploadBox">
                <span>📷 タップして画像を選択 / スクショを貼り付け(Ctrl+V)</span>
                <input type="file" id="imageFileInput" accept="image/*" onchange="handleImageUpload(event)">
            </div>
        `;
    } else {
        area.innerHTML = `
            <div class="image-preview-container">
                <img src="${dataUrl}" alt="実戦データ画像">
                <button class="btn-img-del" onclick="deleteImage()">画像を削除</button>
            </div>
        `;
    }
}

function deleteImage() {
    const t = getActiveTable();
    if (!t) return;
    t.imageData = '';
    saveAppData();
    updateImagePreview('');
}

function updateDisplay() {
    const t = getActiveTable();
    if (!t) return;
    const g = t.games;

    // ① 全体情報（サブタブA）: 総回転数ベースのBIG/REG/合算（前任者までの累計を含む）
    const ownHistoryBig = t.history ? t.history.filter(h => h.type === 'BIG').length : 0;
    const ownHistoryReg = t.history ? t.history.filter(h => h.type === 'REG').length : 0;
    const totalBig = ownHistoryBig + (t.prevBig || 0);
    const totalReg = ownHistoryReg + (t.prevReg || 0);
    const totalBonus = totalBig + totalReg;
    const calcGappei = (totalBonus > 0 && g > 0) ? `1/${(g / totalBonus).toFixed(1)}` : '1/0.0';

    document.getElementById('mainSummaryBox').innerHTML =
        `<span>BIG: ${totalBig}回</span><span>REG: ${totalReg}回</span><span>合算: ${calcGappei}</span>`;

    // ② 自分の区間（サブタブB）: 総回転数 − 開始時G数 を使ってぶどう・チェリー確率を算出
    const ownGames = computeOwnGames(t);
    const budouVal = (t.budou > 0 && ownGames > 0) ? ownGames / t.budou : 0;
    const cherryVal = (t.cherry > 0 && ownGames > 0) ? ownGames / t.cherry : 0;

    document.getElementById('budouCount').innerText = t.budou;
    document.getElementById('budouProb').innerText = `(1/${budouVal > 0 ? budouVal.toFixed(2) : '0.00'})`;

    document.getElementById('cherryCount').innerText = t.cherry;
    document.getElementById('cherryProb').innerText = `(1/${cherryVal > 0 ? cherryVal.toFixed(2) : '0.00'})`;

    const ownInfoEl = document.getElementById('ownSegmentInfo');
    if (ownInfoEl) {
        ownInfoEl.innerText = `自分の区間: ${ownGames} G（総 ${g}G − 開始 ${t.startGames || 0}G）`;
    }

    // ② 自分の区間（サブタブB）: 自分が追加したボーナスのみを対象にしたBIG/REG/合算
    const ownSegHistory = (t.history || []).filter(h => (h.games || 0) >= (t.startGames || 0));
    const ownBig = ownSegHistory.filter(h => h.type === 'BIG').length;
    const ownReg = ownSegHistory.filter(h => h.type === 'REG').length;
    const ownBonus = ownBig + ownReg;
    const ownGappei = (ownBonus > 0 && ownGames > 0) ? `1/${(ownGames / ownBonus).toFixed(1)}` : '1/0.0';

    const ownSummaryEl = document.getElementById('ownSummaryBox');
    if (ownSummaryEl) {
        ownSummaryEl.innerHTML =
            `<span>BIG: ${ownBig}回</span><span>REG: ${ownReg}回</span><span>合算: ${ownGappei}</span>`;
    }
}

// 設定推測画面（3ページ目）の設定値カラーリング適用関数
function getSettingColorClass(settingNum) {
    if (settingNum === 4) return 'color: #fbbf24; font-weight: bold;'; // 黄色
    if (settingNum === 5) return 'color: #f57c00; font-weight: bold;'; // オレンジ
    if (settingNum === 6) return 'color: #f87171; font-weight: bold;'; // 赤
    return ''; // 1〜3は通常色
}

// 共通: ゲーム数と履歴配列から近似設定の行データを計算
function computeApproxRows(g, historyArr, budouCount, cherryCount, spec, extraBig, extraReg, mode) {
    mode = mode || 'basic'; // 'summary'(合算/BIG/REGのみ) | 'full'(全項目) | 'basic'(従来の内訳、BIG/REG単体は含まない)

    const totalBig = (historyArr ? historyArr.filter(h => h.type === 'BIG').length : 0) + (extraBig || 0);
    const totalReg = (historyArr ? historyArr.filter(h => h.type === 'REG').length : 0) + (extraReg || 0);
    const totalBonus = totalBig + totalReg;

    const gappei = totalBonus > 0 ? g / totalBonus : 0;
    const bigProbVal = totalBig > 0 ? g / totalBig : 0;
    const regProbVal = totalReg > 0 ? g / totalReg : 0;

    const getBestSettingNum = (val, specArray, isZero) => {
        if (isZero || val === 0) return 0;
        let bestSetting = 1;
        let minDiff = Math.abs(val - specArray[0]);
        for (let i = 1; i < 6; i++) {
            const diff = Math.abs(val - specArray[i]);
            if (diff < minDiff) {
                minDiff = diff;
                bestSetting = i + 1;
            }
        }
        return bestSetting;
    };

    const gappeiRow = ['ボーナス合算', gappei > 0 ? `1/${gappei.toFixed(1)}` : '-', getBestSettingNum(gappei, spec.synth, gappei === 0)];
    const bigRow = ['BIG確率', bigProbVal > 0 ? `1/${bigProbVal.toFixed(1)}` : '-', getBestSettingNum(bigProbVal, spec.big, bigProbVal === 0)];
    const regRow = ['REG確率', regProbVal > 0 ? `1/${regProbVal.toFixed(1)}` : '-', getBestSettingNum(regProbVal, spec.reg, regProbVal === 0)];

    if (mode === 'summary') {
        return [gappeiRow, bigRow, regRow];
    }

    const budouVal = budouCount > 0 ? g / budouCount : 0;
    const cherryVal = cherryCount > 0 ? g / cherryCount : 0;

    // 細分化判定からは「レアチェリー / 一枚役」「不明」を除外し、明示的な単独・チェリー重複のみ対象とする
    const singleBigCount = historyArr ? historyArr.filter(h => h.type === 'BIG' && h.trigger.startsWith('単独')).length : 0;
    const singleBigVal = singleBigCount > 0 ? g / singleBigCount : 0;

    const singleRegCount = historyArr ? historyArr.filter(h => h.type === 'REG' && h.trigger.startsWith('単独')).length : 0;
    const singleRegVal = singleRegCount > 0 ? g / singleRegCount : 0;

    const cherryBigCount = historyArr ? historyArr.filter(h => h.type === 'BIG' && h.trigger.startsWith('チェリー重複')).length : 0;
    const cherryBigVal = cherryBigCount > 0 ? g / cherryBigCount : 0;

    const cherryRegCount = historyArr ? historyArr.filter(h => h.type === 'REG' && h.trigger.startsWith('チェリー重複')).length : 0;
    const cherryRegVal = cherryRegCount > 0 ? g / cherryRegCount : 0;

    const budouRow = ['ぶどう確率', budouVal > 0 ? `1/${budouVal.toFixed(2)}` : '-', getBestSettingNum(budouVal, spec.budou, budouVal === 0)];
    const cherryRow = ['チェリー確率', cherryVal > 0 ? `1/${cherryVal.toFixed(1)}` : '-', getBestSettingNum(cherryVal, spec.cherry, cherryVal === 0)];
    const singleBigRow = ['単独BIG', singleBigVal > 0 ? `1/${singleBigVal.toFixed(1)}` : '未検出', getBestSettingNum(singleBigVal, spec.singleBig, singleBigVal === 0)];
    const singleRegRow = ['単独REG', singleRegVal > 0 ? `1/${singleRegVal.toFixed(1)}` : '未検出', getBestSettingNum(singleRegVal, spec.singleReg, singleRegVal === 0)];
    const cherryBigRow = ['チェリー重複BIG', cherryBigVal > 0 ? `1/${cherryBigVal.toFixed(1)}` : '未検出', getBestSettingNum(cherryBigVal, spec.cherryBig, cherryBigVal === 0)];
    const cherryRegRow = ['チェリー重複REG', cherryRegVal > 0 ? `1/${cherryRegVal.toFixed(1)}` : '未検出', getBestSettingNum(cherryRegVal, spec.cherryReg, cherryRegVal === 0)];

    if (mode === 'full') {
        return [gappeiRow, bigRow, regRow, budouRow, cherryRow, singleBigRow, singleRegRow, cherryBigRow, cherryRegRow];
    }

    // 'basic': 従来通り（合算＋内訳、BIG/REG単体行は含まない）
    return [gappeiRow, budouRow, cherryRow, singleBigRow, singleRegRow, cherryBigRow, cherryRegRow];
}

// 共通: 近似設定テーブルの描画
function renderApproxTable(tableEl, g, rowsData, emptyMessage) {
    if (g <= 0) {
        tableEl.innerHTML = `<tr><th>項目</th><th>現在値</th><th>近似設定</th></tr><tr><td colspan="3" style="text-align:center; color:var(--muted-color); padding:15px;">${emptyMessage}</td></tr>`;
        return;
    }
    let html = `<tr><th>項目</th><th>現在値</th><th>近似設定</th></tr>`;
    rowsData.forEach(r => {
        const setNum = r[2];
        const settingText = setNum > 0 ? `設定${setNum} 近似` : '-';
        const colorStyle = setNum > 0 ? getSettingColorClass(setNum) : '';
        html += `<tr><td>${r[0]}</td><td>${r[1]}</td><td style="${colorStyle}">${settingText}</td></tr>`;
    });
    tableEl.innerHTML = html;
}

// Page3 全体: 台全体タブ・自分の区間タブ・共通のリファレンス/コラムを更新
function updateApproximationTable() {
    const t = getActiveTable();
    if (!t) return;
    const spec = jugglerSpecs[activeMachine];

    // 共通: リファレンス表とコラム
    const refTable = document.getElementById('refTable');
    document.getElementById('refTitle').innerText = `【 ${activeMachine} 全設定スペックリファレンス 】`;

    const columnEl = document.getElementById('columnContent');
    columnEl.innerHTML = machineColumns[activeMachine] || '推測のポイントはありません。';

    let refHtml = `<tr><th>項目</th>`;
    for (let s = 1; s <= 6; s++) {
        refHtml += `<th style="${getSettingColorClass(s)}">設定${s}</th>`;
    }
    refHtml += `</tr>`;

    const refRows = [
        ['ボーナス合算', spec.synth],
        ['BIG確率', spec.big],
        ['REG確率', spec.reg],
        ['ぶどう確率', spec.budou],
        ['チェリー確率', spec.cherry],
        ['単独BIG', spec.singleBig],
        ['単独REG', spec.singleReg],
        ['チェリー重複BIG', spec.cherryBig],
        ['チェリー重複REG', spec.cherryReg]
    ];

    refRows.forEach(row => {
        refHtml += `<tr><td>${row[0]}</td>`;
        for (let s = 0; s < 6; s++) {
            refHtml += `<td style="${getSettingColorClass(s+1)}">1/${row[1][s]}</td>`;
        }
        refHtml += `</tr>`;
    });
    refTable.innerHTML = refHtml;

    // ① 台全体タブ: 総回転数・全履歴を使って算出（従来通り）
    const gWhole = t.games || 0;
    const rowsWhole = computeApproxRows(gWhole, t.history, t.budou, t.cherry, spec, t.prevBig || 0, t.prevReg || 0, 'summary');
    renderApproxTable(document.getElementById('approxTable'), gWhole, rowsWhole, '総回転数を入力してください');

    // ② 自分の区間タブ: 開始時G数以降のみを対象に算出
    const ownGames = computeOwnGames(t);
    const ownHistory = (t.history || []).filter(h => (h.games || 0) >= (t.startGames || 0));
    const rowsOwn = computeApproxRows(ownGames, ownHistory, t.budou, t.cherry, spec, 0, 0, 'full');
    renderApproxTable(document.getElementById('approxTableOwn'), ownGames, rowsOwn, '自分の区間の回転数がありません');

    const ownInfoPage3 = document.getElementById('ownSegmentInfoPage3');
    if (ownInfoPage3) {
        ownInfoPage3.innerText = `自分の区間: ${ownGames} G（総 ${gWhole}G − 開始 ${t.startGames || 0}G）`;
    }
}

function updateDetailedSummary() {
    const t = getActiveTable();
    if (!t) return;

    const g = t.games;
    const totalBig = t.history ? t.history.filter(h => h.type === 'BIG').length : 0;
    const totalReg = t.history ? t.history.filter(h => h.type === 'REG').length : 0;
    const totalBonus = totalBig + totalReg;

    // トータル合算は全ボーナスを反映
    const gappei = (totalBonus > 0 && g > 0) ? `1/${(g / totalBonus).toFixed(1)}` : '1/0.0';

    const rateSelection = t.rate || '46';
    let coinValue = 20; // 20スロのメダル価値 (1枚20円)
    let per1000 = 46;
    if (rateSelection === '20') {
        per1000 = 50;
    } else if (rateSelection === '46') {
        per1000 = 46;
    } else if (rateSelection === 'custom') {
        per1000 = t.customRate || 46;
    }

    const investmentYen = t.investment || 0;
    const recoveryVal = t.recovery || 0; // 入力された値
    const recoveryMode = t.recoveryMode || 'coins';
    const exchangeRate = getExchangeRate(t.gap);

    // 投資金額に応じた持参枚数（自動連動）
    let investCoins = 0;
    if (investmentYen > 0) {
        investCoins = Math.round((investmentYen / 1000) * per1000);
    }
    document.getElementById('investCoinsLabel').innerText = `(${investCoins}枚)`;

    // 回収の枚数と金額の相互算出
    let recoveryCoins = 0;
    let recoveryYen = 0;

    if (recoveryMode === 'yen') {
        recoveryYen = recoveryVal;
        recoveryCoins = recoveryYen > 0 ? Math.round(recoveryYen / (coinValue * exchangeRate)) : 0;
        document.getElementById('recoverySubLabel').innerText = `(${recoveryCoins}枚相当)`;
    } else {
        recoveryCoins = recoveryVal;
        recoveryYen = Math.round(recoveryCoins * coinValue * exchangeRate);
        document.getElementById('recoverySubLabel').innerText = `(¥${recoveryYen.toLocaleString()})`;
    }

    // トータル収支: 回収金額(円) - 投資金額(円)
    const balanceYen = recoveryYen - investmentYen;

    // 推定差枚数 = 回収枚数 - 投資枚数
    const diffCoins = recoveryCoins - investCoins;

    let kikaigari = 0;
    if (g > 0) {
        const totalIn = g * 3;
        const totalOut = totalIn + diffCoins;
        kikaigari = ((totalOut / totalIn) * 100).toFixed(1);
    }

    const diffClass = diffCoins >= 0 ? 'plus' : 'minus';
    const balanceClass = balanceYen >= 0 ? 'plus' : 'minus';

    document.getElementById('sumGames').innerText = `${g} G`;
    document.getElementById('sumGappei').innerText = gappei;

    const diffEl = document.getElementById('sumDiffCoins');
    diffEl.className = `value ${diffClass}`;
    diffEl.innerText = `${diffCoins >= 0 ? '+' + diffCoins : diffCoins} 枚`;

    const balanceEl = document.getElementById('sumBalance');
    balanceEl.className = `value ${balanceClass}`;
    balanceEl.innerText = `${balanceYen >= 0 ? '+¥' + balanceYen.toLocaleString() : '-¥' + Math.abs(balanceYen).toLocaleString()}`;

    document.getElementById('sumKikaigari').innerText = `${kikaigari}%`;
}

function shareBackupData() {
    const raw = JSON.stringify(appData);
    const encoded = btoa(encodeURIComponent(raw));
    const shareText = `【ジャグラーデータバックアップ】\n以下のコードをアプリの「テキストからデータを復元」に貼り付けてください:\n\n${encoded}`;

    if (navigator.share) {
        navigator.share({
            title: 'ジャグラーデータバックアップ',
            text: shareText,
        }).catch(() => {});
    } else {
        exportBackupText();
    }
}

function exportBackupText() {
    const raw = JSON.stringify(appData);
    const encoded = btoa(encodeURIComponent(raw));

    const textarea = document.createElement('textarea');
    textarea.value = encoded;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('バックアップ用のテキストをコピーしました。メモやLINEに貼り付けて保存してください。');
    } catch (err) {
        prompt('以下のテキストをコピーして保存してください:', encoded);
    }
    document.body.removeChild(textarea);
}

function importBackupPrompt() {
    const encoded = prompt('保存したバックアップテキストをここに貼り付けてください:');
    if (!encoded) return;
    try {
        const raw = decodeURIComponent(atob(encoded.trim()));
        const parsed = JSON.parse(raw);
        appData = parsed;
        saveAppData();
        renderMachineSelect();
        alert('データを正常に復元しました！');
    } catch (e) {
        alert('データの形式が正しくありません。');
    }
}

function getExchangeRate(gap) {
    switch (gap) {
        case 'eq': return 1.0;
        case '5.2': return 0.9615;
        case '5.6': return 0.8928; // 5.6枚交換 (東京標準)
        case '6': return 0.8333;
        default: return 0.8928;
    }
}

function addInvestment(amount) {
    const input = document.getElementById('inputInvestment');
    let current = parseInt(input.value) || 0;
    current += amount;
    if (current < 0) current = 0;
    input.value = current;
    updateConfigs();
}
