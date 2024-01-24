//　=============================================================================
// ONA_SideMenu.js
//　=============================================================================

/*:
 * @plugindesc v1.0 BegieAde2 サイドメニューを表示する
 * @author 御納筋零日
 *
 * @param Common Events Head Number
 * @desc メニュー内のボタンに割り当てられるコモンイベントの先頭番号
 * @default 148
 *
 * @param Open Scene ID Variable Number
 * @desc 表示中のシーンIDを格納した変数番号
 * @default 41
 *
 * @param Menu Disabled Switch Number
 * @desc サイドメニュー操作を一時無効するスイッチ番号
 * @default 100
 * 
 * @param On Close Common Event Number
 * @desc サイドメニューを閉じたときに実行するコモンイベント番号（0=なにもしない）
 * @default 0
 *
 * @help
 *
 * ===========================================================================
 * 表示方法
 * ===========================================================================
 * メニュー開く => [プラグインコマンド] SideMenu
 * 表示中のメニューを一時非表示 => [プラグインコマンド] SideMenuHide
 * 表示中のメニューを再表示 => [プラグインコマンド] SideMenuShow
 * 
 * 設定例：
 * ◆変数の操作：#0041 SideMenu シーン名 = "セクハラ_1-A"
 * ◆プラグインコマンド：SideMenu
 *
 * ・プラグインコマンドを実行する直前に、表示するのシーン名を「表示中のシーンIDを格納した変数番号」で設定した変数に代入してください。
 * 　変数に入れる際は「スクリプト」を選択し、「"セクハラ_1-A"」という風にダブルクォーテーションで囲います。
 * 
 * ・サイドメニューのボタンを選んでコモンイベントが発動すると、サイドメニューが操作無効状態になります。
 * 　必ずコモンイベントの最後にサイドメニュー操作無効のスイッチをfalseにしてください
 * 
 * ・サイドメニュー表示中は通常メニュー開閉不可になります。
 *
 * ===========================================================================
 * どんなときにスクリプトの改修が必要か
 * ===========================================================================
 * ・シーン（セクハラ_1-Aなど）を追加・削除する場合、スクリプトの$dataSideMenuMetaを編集する必要があります。
 * ・コモンイベント（SideMenu＞状態＞平常など）を追加・削除する場合、スクリプトのcommonEventListを編集する必要があります。
 * 
 * ===========================================================================
 * 画像ファイル
 * ===========================================================================
 * 画像ファイルは以下フォルダに保存してください。
 * 画像ファイル名と上記のパラメータの名前は連動しています。
 *
 * /img/menus/scenemenus/
 *   category_【カテゴリ名】.png (例: category_状態.png)
 *   content_【ボタン名】.png (例: content_平常.png)
 */

let Onakin = {};
Onakin.parameters = PluginManager.parameters("ONA_SideMenu");
Onakin.commonEventHeadNumber = Number(Onakin.parameters["Common Events Head Number"] || 148);
Onakin.openSceneVariableNumber = Number(Onakin.parameters["Open Scene ID Variable Number"] || 41);
Onakin.menuDisabledSwitchNumber = Number(Onakin.parameters["Menu Disabled Switch Number"] || 100);
Onakin.onCloseCommonEventNumber = Number(Onakin.parameters["On Close Common Event Number"] || 0);
Onakin.contentButtons = [];
Onakin.categoryButtons = [];
Onakin.eventName = ""; // 表示のシーン
Onakin.menuVisible = false; // サイドメニュー表示

let _contentButtons = [];
let _categoryButtons = [];
let _menuVisible = false;

const commonEventList = [
  "SideMenu＞状態＞平常",
  "SideMenu＞状態＞淫欲(小)",
  "SideMenu＞状態＞淫欲(大)",
  "SideMenu＞服装＞通常",
  "SideMenu＞服装＞胸はだけ",
  "SideMenu＞服装＞服装A",
  "SideMenu＞服装＞服装B",
  "SideMenu＞服装＞服装C",
  "SideMenu＞服装＞下着",
  "SideMenu＞服装＞全裸",
  "SideMenu＞服破れ＞無し",
  "SideMenu＞服破れ＞損壊",
  "SideMenu＞服破れ＞半壊",
  "SideMenu＞服破れ＞全壊",
  "SideMenu＞精液＞無し",
  "SideMenu＞精液＞少量",
  "SideMenu＞精液＞多量",
  "SideMenu＞アニメ変更＞強度(弱)",
  "SideMenu＞アニメ変更＞強度(強)",
  "SideMenu＞アニメ変更＞絶頂",
  "SideMenu＞オプション＞剣",
  "SideMenu＞オプション＞人間↔亜人",
  "SideMenu＞オプション＞半透明／消去",
  "SideMenu＞オプション＞目隠し",
  "SideMenu＞オプション＞ボールギャグ",
  "SideMenu＞オプション＞おしゃぶり",
  "SideMenu＞イベント回想＞A：初回",
  "SideMenu＞イベント回想＞B：２回目～",
  "SideMenu＞イベント回想＞C：淫乱",
  "SideMenu＞イベント回想＞D：淫堕",
  "SideMenu＞オプション＞帽子",
]

// シーン別のボタン一覧json
const $dataSideMenuMeta = [
  {
      "sceneType": "セクハラ_1-A",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_1-B",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_2-A",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_2-B",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_2-C",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_3-A",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_3-B",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_4-A",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_4-B",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_6-A",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セクハラ_6-B",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","剣"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "拘束_1",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_1ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_1ｰB",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_1ｰC",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "拘束_2",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_2ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_2ｰB",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_2ｰC",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "拘束_3",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_3ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_3ｰB",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_3ｰC",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "拘束_4",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_4ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_4ｰB",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_4ｰC",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "拘束_5",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_5ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_5ｰB",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_5ｰC",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "拘束_6",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": [],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_6ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_6ｰB",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "セックス_6ｰC",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": ["無し","損壊","半壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "敗北_1ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～","C：淫乱"]
  },
  {
      "sceneType": "敗北_1ｰB",
      "itemsJyotai": [],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人","半透明／消去"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "敗北_2ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～","C：淫乱"]
  },
  {
      "sceneType": "敗北_2ｰB",
      "itemsJyotai": [],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "敗北_3ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～","C：淫乱"]
  },
  {
      "sceneType": "敗北_3ｰB",
      "itemsJyotai": [],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "敗北_4ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～","C：淫乱"]
  },
  {
      "sceneType": "敗北_4ｰB",
      "itemsJyotai": [],
      "itemsFukuso": ["服装A","服装B","服装C","下着","全裸"],
      "itemsFukuYabure": ["無し","半壊","全壊"],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "敗北_5ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～","C：淫乱"]
  },
  {
      "sceneType": "敗北_5ｰB",
      "itemsJyotai": [],
      "itemsFukuso": ["通常","胸はだけ","下着","全裸"],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "敗北_6ｰA",
      "itemsJyotai": ["平常","淫欲(小)","淫欲(大)"],
      "itemsFukuso": ["通常","胸はだけ","全裸"],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～","C：淫乱"]
  },
  {
      "sceneType": "敗北_6ｰB",
      "itemsJyotai": [],
      "itemsFukuso": ["通常","全裸"],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["人間↔亜人"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "アメリア_H1",
      "itemsJyotai": [],
      "itemsFukuso": ["通常","全裸"],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["帽子"],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "アメリア_H2",
      "itemsJyotai": ["平常","淫欲(小)"],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["帽子"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～"]
  },
  {
      "sceneType": "アメリア_H3",
      "itemsJyotai": ["平常","淫欲(小)"],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["帽子"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～"]
  },
  {
      "sceneType": "アメリア_H4",
      "itemsJyotai": ["平常","淫欲(小)"],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": ["帽子"],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["A：初回","B：２回目～"]
  },
  {
      "sceneType": "アメリア_H5",
      "itemsJyotai": [],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": [],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["C：淫乱"]
  },
  {
      "sceneType": "アメリア_H6",
      "itemsJyotai": [],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": ["無し","少量","多量"],
      "itemsOption": [],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": ["D：淫堕"]
  },
  {
      "sceneType": "リリック_H",
      "itemsJyotai": [],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": [],
      "itemsOption": [],
      "itemsAnimeHenko": ["強度(弱)","強度(強)","絶頂"],
      "itemsEventKaiso": []
  },
  {
      "sceneType": "リクエスト",
      "itemsJyotai": [],
      "itemsFukuso": [],
      "itemsFukuYabure": [],
      "itemsSeieki": [],
      "itemsOption": [],
      "itemsAnimeHenko": [],
      "itemsEventKaiso": []
  },
];

//　=============================================================================
// Game_Interpreter
//　=============================================================================
const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
  _Game_Interpreter_pluginCommand.call(this, command, args);
  switch (command) {
    case "SideMenu":
      // 変数◯に入っている「セクハラ・セックス・敗北 & 分岐ID」で表示分岐
      if (!$gameVariables.value(Onakin.openSceneVariableNumber)) {
        console.error('変数[' + Onakin.openSceneVariableNumber + ']に表示対象のシーンIDが格納されていません');
        break
      }
      $gameScreen.showSideWindow();
      break;
    case "SideMenuHide":
      // サイドメニューを非表示
      Onakin.menuVisible = false;
      break;
    case "SideMenuShow":
      // サイドメニューを再表示
      Onakin.menuVisible = true;
      break;
  }
};

ImageManager.loadSceneMenus = function (filename) {
  return this.loadBitmap("img/scenemenus/", filename);
};

//　=============================================================================
// Game_Screen
//　=============================================================================
const _Game_Screen_onBattleStart = Game_Screen.prototype.onBattleStart;
Game_Screen.prototype.onBattleStart = function () {
  _Game_Screen_onBattleStart.call(this);
  this.eraseSideWindow();
};

Game_Screen.prototype.showSideWindow = async function () {
  // 一旦クリア
  await this.eraseSideWindow();
  Onakin.menuVisible = true;
};

// サイドメニューシーン削除
Game_Screen.prototype.eraseSideWindow = function () {
  Onakin.menuVisible = false;
  this.resetButtons();
};

Game_Screen.prototype.resetButtons = function () {
  Onakin.contentButtons = [];
  Onakin.categoryButtons = [];
};

//　=============================================================================
// Spriteset_Base
//　=============================================================================

const _Spriteset_Base_createUpperLayer =
  Spriteset_Base.prototype.createUpperLayer;
Spriteset_Base.prototype.createUpperLayer = function () {
  _Spriteset_Base_createUpperLayer.call(this);
  this.createSideWindow();
};

Spriteset_Base.prototype.createSideWindow = function () {
  this._sideWindowContainer = new Sprite();
  this._sideWindowContainer.setFrame(0, 0, 0, 0);
  this._sideWindow = new Window_Side(0, 0, 202, 720);
  this._sideWindowContainer.addChild(this._sideWindow);
  this.addChild(this._sideWindowContainer);
};

const _Spriteset_Base_update = Spriteset_Base.prototype.update;
Spriteset_Base.prototype.update = async function () {
  _Spriteset_Base_update.call(this);
  if (Onakin.menuVisible !== _menuVisible) await this._sideWindow.refresh();
};

//　=============================================================================
// Window_Side
//　=============================================================================
function Window_Side() {
  this.initialize.apply(this, arguments);
}

Window_Side.prototype = Object.create(Window_Base.prototype);
Window_Side.prototype.constructor = Window_Side;

Window_Side.prototype.initialize = function () {
  Window_Base.prototype.initialize.call(this, 0, 0, 0, 0);
};

Window_Side.prototype.createMenu = async function () {
  // jsonからmenu成形
  const buttons = $dataSideMenuMeta.filter((scene) => scene.sceneType === $gameVariables.value(Onakin.openSceneVariableNumber));
  buttons.map((button) => {
    Object.entries(button).reduce((result, [key, value]) => {
      if (value.length > 0) {
        switch (key) {
          case "itemsJyotai":
            Onakin.categoryButtons.push("状態");
            break;
          case "itemsFukuso":
            Onakin.categoryButtons.push("服装");
            break;
          case "itemsFukuYabure":
            Onakin.categoryButtons.push("服破れ");
            break;
          case "itemsSeieki":
            Onakin.categoryButtons.push("精液");
            break;
          case "itemsOption":
            Onakin.categoryButtons.push("オプション");
            break;
          case "itemsAnimeHenko":
            Onakin.categoryButtons.push("アニメ変更");
            break;
          case "itemsEventKaiso":
            Onakin.categoryButtons.push("イベント回想");
            break;
        }
        Onakin.contentButtons.push(value);
      }
    })
  }, []);
  Onakin.categoryButtons.push('終了')

  // 背景画像
  this._backgroundSprite = new Sprite(ImageManager.loadSceneMenus("menu_background"));
  this.addChild(this._backgroundSprite);
  this._backgroundSprite.visible = false;
  if (!Onakin.categoryButtons || !Onakin.contentButtons) return

  this._categoryButtons = [];
  this._contentButtons = [];
  // カテゴリ描画
  let x = 7;
  let y = 100;
  await Onakin.categoryButtons.map((it, i) => {
    const button = new Sprite_Button();
    if (it === "終了") {
      const width = 260;
      const height = 42;
      button.bitmap = ImageManager.loadSceneMenus(it);
      button.setColdFrame(0, 0, width / 2, height);
      button.setHotFrame(width / 2, 0, width / 2, height);
      button.x = x + 31;
      button.y = y + 530;
      button.setClickHandler(this.close.bind(this));
    } else {
      const width = 320;
      const height = 42;
      button.bitmap = ImageManager.loadSceneMenus("category_" + it);
      button.setColdFrame(0, 0, width / 2, height);
      button.setHotFrame(width / 2, 0, width / 2, height);
      button.x = x;
      button.y = y + 50 * i;
      button.setClickHandler(this.onClickCategoryButton.bind(this, i));
    }
    this._categoryButtons.push(button);
    this.addChild(button);
  });

  // コンテンツ描画
  x = 22;
  y = 150;
  this._contentButtons = [];
  await Onakin.contentButtons.map((buttons, i) => {
    const _buttons = [];
    buttons.map((item, j) => {
      const button = new Sprite_Button();
      const width = 290;
      const height = 42;
      button.bitmap = ImageManager.loadSceneMenus("content_" + item);
      button.setColdFrame(0, 0, width / 2, height);
      button.setHotFrame(width / 2, 0, width / 2, height);
      button.x = x;
      button.y = y + 50 * j;
      button.visible = false;
      button.setClickHandler(this.onClickContentButton.bind(this, i, j));
      _buttons.push(button);
      this.addChild(button);
    });
    this._contentButtons.push(_buttons);
  });
  // コンテンツの戻る
  const width = 260;
  const height = 42;
  this._prevButton = new Sprite_Button();
  this._prevButton.bitmap = ImageManager.loadSceneMenus("戻る");
  this._prevButton.setColdFrame(0, 0, width / 2, height);
  this._prevButton.setHotFrame(width / 2, 0, width / 2, height);
  this._prevButton.x = 38;
  this._prevButton.y = 630;
  this._prevButton.visible = false;
  this._prevButton.setClickHandler(this.onPrevButton.bind(this));
  await this.addChild(this._prevButton);

  // カーソル枠
  this._frameSelect = [];
  this._frameSelect[0] = 0;
  this._frameSelectEventName = '';
  this._frame = new Sprite();
  this._frame.bitmap = ImageManager.loadSceneMenus("cursor_frame");
  this._frame.x = 37;
  this._frame.y = 100;
  this._frame.visible = false;
  await this.addChild(this._frame);
};

Window_Side.prototype.refresh = async function () {
  if (!Onakin.categoryButtons || !Onakin.contentButtons) return
  if (!Onakin.menuVisible && _menuVisible) {
    // 非表示
    _menuVisible = false;
    // メニュー禁止解除
    $gameSystem.enableMenu();
    this.contents.clear();
    if (this._categoryButtons) {
      for (let i = 0; i < this._categoryButtons.length; i++) {
        this._categoryButtons[i].visible = false;
      }
    }
    if (this._contentButtons && this._frameSelect && this._frameSelect.length === 2) {
      this._categoryButtons[this._frameSelect[0]].visible = false;
      for (let j = 0; j < this._contentButtons[this._frameSelect[0]].length; j++) {
        this._contentButtons[this._frameSelect[0]][j].visible = false;
      }
    }
    this._prevButton.visible = false;
    this._backgroundSprite.visible = false;
    this._frame.visible = false;
  } else if (Onakin.menuVisible && !_menuVisible) {
    // `表示`
    _menuVisible = Onakin.menuVisible;
    // メニュー禁止
    $gameSystem.disableMenu();
    // カテゴリボタン表示
    if (Onakin.contentButtons.length > 0) {
      if (this._categoryButtons && this._frameSelect && this._frameSelect.length === 1) {
        for (let i = 0; i < this._categoryButtons.length; i++) {
          this._categoryButtons[i].visible = true;
        }
      }
      if (this._contentButtons && this._frameSelect && this._frameSelect.length === 2) {
        this._categoryButtons[this._frameSelect[0]].visible = true;
        for (let j = 0; j < this._contentButtons[this._frameSelect[0]].length; j++) {
          this._contentButtons[this._frameSelect[0]][j].visible = true;
        }
      }
    } else {
      await this.createMenu();
    }
    if (this._frameSelect && this._frameSelect.length === 2) {
      this._prevButton.visible = true;
    }
    this._frame.visible = true;
    this._backgroundSprite.visible = true;
  }
};

Window_Side.prototype.update = function () {
  Window_Base.prototype.update.call(this);

  if (!Onakin.menuVisible || !_menuVisible || $gameSwitches.value(Onakin.menuDisabledSwitchNumber)) return;

  if (Input.isTriggered("down")) {
    // 下キーが押された
    this.contents.clear();
    SoundManager.playCursor();
    if (this._frameSelect.length === 1) {
      // カテゴリ選択中(-1は終了の分)
      if (this._frameSelect[0] + 1 < Onakin.categoryButtons.length - 1) {
        // 最後以外
        this._frameSelect[0]++;
        this._frame.y = 100 + 50 * this._frameSelect[0];
      } else if (
        this._frameSelect[0] + 1 ===
        Onakin.categoryButtons.length - 1
      ) {
        // 最後
        this._frameSelect[0]++;
        this._frame.y = 630;
      }
    } else if (this._frameSelect.length === 2) {
      // コンテンツ選択中
      if (
        this._frameSelect[1] + 1 <
        Onakin.contentButtons[this._frameSelect[0]].length
      ) {
        // 最後以外
        this._frameSelect[1]++;
        this._frame.y = 150 + 50 * this._frameSelect[1];
      } else if (
        this._frameSelect[1] + 1 ===
        Onakin.contentButtons[this._frameSelect[0]].length
      ) {
        // 最後
        this._frameSelect[1]++;
        this._frame.y = 630;
      }
    }
  }
  if (Input.isTriggered("up")) {
    // 上キーが押された
    this.contents.clear();
    SoundManager.playCursor();
    if (this._frameSelect.length === 1) {
      // カテゴリ選択中
      if (this._frameSelect[0] > 0) {
        this._frameSelect[0]--;
        this._frame.y = 100 + 50 * this._frameSelect[0];
      }
    } else if (this._frameSelect.length === 2) {
      // コンテンツ選択中
      if (this._frameSelect[1] > 0) {
        this._frameSelect[1]--;
        this._frame.y = 150 + 50 * this._frameSelect[1];
      }
    }
  }
  if (Input.isTriggered("cancel")) {
    this.contents.clear();
    SoundManager.playCursor();
    if (this._frameSelect.length === 2) this.onPrevButton();
  }
  if (Input.isTriggered("ok")) {
    this.contents.clear();
    SoundManager.playCursor();
    if (this._frameSelect.length === 1) {
      if (this._frameSelect[0] === Onakin.categoryButtons.length - 1) {
        this.close();
      } else {
        this.onCategoryButton();
      }
    } else if (this._frameSelect.length === 2) {
      if (
        this._frameSelect[1] ===
        Onakin.contentButtons[this._frameSelect[0]].length
      ) {
        this.onPrevButton();
      } else {
        this.onContentButton();
      }
    }
  }
};

// 戻るボタン押された
Window_Side.prototype.onPrevButton = function () {
  // カテゴリ選択リセット
  SoundManager.playCancel();
  // フレーム位置戻す
  this._frameSelect.pop();
  // this._frameSelect[0] = 0;
  this._frame.y = 100 + 50 * this._frameSelect[0];

  // コンテンツ非表示
  for (let i = 0; i < this._contentButtons.length; i++) {
    for (let j = 0; j < this._contentButtons[i].length; j++) {
      this._contentButtons[i][j].visible = false;
    }
  }
  this._prevButton.visible = false;

  const x = 7;
  const y = 100;
  // カテゴリボタン表示
  Onakin.categoryButtons.map((it, index) => {
    if (it === "終了") {
      this._categoryButtons[index].visible = true;
    } else {
      this._categoryButtons[index].x = x;
      this._categoryButtons[index].y = y + 50 * index;
      this._categoryButtons[index].visible = true;
    }
  });
};

Window_Side.prototype.onClickCategoryButton = function (i) {
  if ($gameSwitches.value(Onakin.menuDisabledSwitchNumber)) return;
  if (this._frameSelect.length === 2) {
    // カテゴリ選択リセット
    this.onPrevButton();
  } else {
    this._frameSelect = [i];
    this.onCategoryButton();
  }
};

Window_Side.prototype.onClickContentButton = function (i, j) {
  if ($gameSwitches.value(Onakin.menuDisabledSwitchNumber)) return;
  // 選択したメニューのイベント名
  this._frameSelect = [i, j];
  this.onContentButton();
};

// カテゴリボタン押された
Window_Side.prototype.onCategoryButton = function () {
  if (this._frameSelect.length === 2) {
    // カテゴリ選択リセット
    this.onPrevButton();
  } else {
    SoundManager.playOk();
    // フレーム位置
    this._frameSelect.push(0);
    this._frame.y = 150 + 50 * this._frameSelect[1];

    // カテゴリボタン非表示
    for (let i = 0; i < this._categoryButtons.length; i++) {
      if (i === this._frameSelect[0]) {
        this._categoryButtons[i].y = 100;
      } else {
        this._categoryButtons[i].visible = false;
      }
    }
    // コンテンツ表示
    for (
      let i = 0;
      i < this._contentButtons[this._frameSelect[0]].length;
      i++
    ) {
      this._contentButtons[this._frameSelect[0]][i].visible = true;
    }
    this._prevButton.visible = true;
  }
};

// コンテンツ押された
Window_Side.prototype.onContentButton = async function () {
  SoundManager.playOk();
  // const contentCount = 0;
  // for (let i = 0; i < this._frameSelect[0]; i++) {
  //   for (let j = 0; j < this._contentButtons[i].length; j++) {
  //     contentCount++;
  //   }
  // }Onakin.categoryButtons[i], Onakin.contentButtons[i][j]
  this._frameSelectEventName = `SideMenu＞${Onakin.categoryButtons[this._frameSelect[0]]}＞${Onakin.contentButtons[this._frameSelect[0]][this._frameSelect[1]]}`;
  if (!this._frameSelectEventName) {
    console.error('_frameSelectEventNameがnull');
    return;
  }
  const eventIndex = commonEventList.indexOf(this._frameSelectEventName);
  // HメニューポーズON
  $gameSwitches.setValue(Onakin.menuDisabledSwitchNumber, true);
  if (eventIndex < 0) {
    console.error(this._frameSelectEventName + 'がイベント一覧に見つかりません');
    return
  }
  await $gameTemp.reserveCommonEvent(Onakin.commonEventHeadNumber + eventIndex);
};

// 閉じるが押された
Window_Side.prototype.close = function () {
  if ($gameSwitches.value(Onakin.menuDisabledSwitchNumber)) return;
  SoundManager.playCancel();
  if (this._categoryButtons) {
    for (let i = 0; i < this._categoryButtons.length; i++) {
      this._categoryButtons[i].visible = false;
    }
  }
  if (this._contentButtons && this._frameSelect && this._frameSelect.length === 2) {
    this._categoryButtons[this._frameSelect[0]].visible = false;
    for (let j = 0; j < this._contentButtons[this._frameSelect[0]].length; j++) {
      this._contentButtons[this._frameSelect[0]][j].visible = false;
    }
  }
  this._categoryButtons = [];
  this._contentButtons = [];
  this._prevButton.visible = false;
  this._backgroundSprite.visible = false;
  this._frame.visible = false;
  Onakin.contentButtons = [];
  Onakin.categoryButtons = [];
  Onakin.menuVisible = false;
  // ボタン初期化
  $gameScreen.eraseSideWindow();
  this.contents.clear();
  // _menuVisible = false;
  if (Onakin.onCloseCommonEventNumber !== 0) $gameTemp.reserveCommonEvent(Onakin.onCloseCommonEventNumber);
};

//　=============================================================================
// Scene_Map
//　=============================================================================

const _Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function () {
  if (!SceneManager.isNextScene(Scene_Battle)) {
    $gameScreen.eraseSideWindow();
  }
  _Scene_Map_terminate.call(this);
};

const _Scene_Map_launchBattle = Scene_Map.prototype.launchBattle;
Scene_Map.prototype.launchBattle = function () {
  _Scene_Map_launchBattle.call(this);
  $gameScreen.eraseSideWindow();
};
