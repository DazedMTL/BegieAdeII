//=============================================================================
// Yanfly Engine Plugins - Instant Cast
// YEP_InstantCast.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_InstantCast = true;

var Yanfly = Yanfly || {};
Yanfly.Instant = Yanfly.Instant || {};
Yanfly.Instant.version = 1.12;

//=============================================================================
/*:ja
 * @plugindesc v1.12 ターンを消費しないスキル/アイテムを作れます。
 * @author Yanfly Engine Plugins
 *
 * @param Instant Icon
 * @text ターン無消費アイコン
 * @type number
 * @min 0
 * @desc アイコン上書きでターン無消費スキルをマークします。アイコンを使用しない場合は0
 * @default 0
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * 導入
 * ===========================================================================
 *
 * アクションがターン無消費特性を持つ場合、
 * そのアクションはターンの開始を待つ必要なしにその場で即座に使用されます。
 * それを使用した後、アクターは別のアクションを実行できます。
 * ターン無消費アクションはターンを消費しないので、
 * これはあなたのゲームに全く新しい次元の戦闘深度を加えることができます。
 * アクターが複数のアクションを実行できる場合、
 * ターン無消費はそれが最初に選択されたアクションであり、
 * 後続のアクションではない場合のみ発生します。
 *
 * 敵がターン無消費のスキルを使用する場合、
 * 敵のターンが上がると、ターン無消費のスキルを実行し、
 * その後すぐに別のスキルを実行します。
 *
 * このプラグインをスキル制限を有効にする
 * 別のプラグインと一緒に使用することを強くお勧めします。
 *
 * ===========================================================================
 * メモタグ
 * ===========================================================================
 *
 * 以下は、ターン無消費特性をアクションに適用するためのメモタグです。
 *
 * スキル、アイテムのメモタグ
 *   <Instant>
 *   <Instant Cast>
 *   両方のメモタグは同じように機能します。
 *   アクターの最初のアクションとしてこのアクションが選択された時、
 *   即座に実行されます。
 *   敵によって使用されると、
 *   敵のターンを消費することなくフォローアップ行動を起こさせるでしょう。
 *
 * アクター、職業、敵、武器、防具、ステートのメモタグ
 *   <Instant Skill: x>
 *   <Instant Skill: x, x, x>
 *   <Instant Skill: x to y>
 *   スキルxは、アクター、職業、敵、武器・防具が装備されている時、
 *   ステートが適用される時、
 *   いつでもターン無消費特性を持つようになります。
 *   'x to y'を使用すると、
 *   xからyまでの全てのスキルに適用されます。
 *
 *   <Instant Item: x>
 *   <Instant Item: x, x, x>
 *   <Instant Item: x to y>
 *   アイテムxは、アクター、職業、敵、武器・防具が装備されている時、
 *   ステートが適用される時、
 *   いつでもターン無消費特性を持つようになります。
 *   'x to y'を使用すると、
 *   xからyまでの全ての項目に適用されます。
 *
 *   <Cancel Instant Skill: x>
 *   <Cancel Instant Skill: x, x, x>
 *   <Cancel Instant Skill: x to y>
 *   スキルxを即座に実行できなくなります。
 *   アクター、職業、敵、装備品、ステートがこのメモタグを持っている場合、
 *   ターン無消費キャスティングに影響を与える可能性がある他の全ての特性よりも
 *   優先されます。
 *   'x to y'を使用する場合、xからyまでの全てのスキルに適用されます。
 *
 *   <Cancel Instant Item: x>
 *   <Cancel Instant Item: x, x, x>
 *   <Cancel Instant item: x to y>
 *   アイテムxを即座に実行できなくなります。
 *   アクター、職業、敵、装備品、ステートがこのメモタグを持っている場合、
 *   ターン無消費キャスティングに影響を与える可能性がある他の全ての特性よりも
 *   優先されます。
 *   'x to y'を使用する場合、xからyまでの全ての項目に適用されます。
 *
 * ===========================================================================
 * ルナティックモード - 条件付きインスタント
 * ===========================================================================
 *
 * ターン無消費であるかどうかに関わらず動的にアクションを取りたい場合、
 * 次のメモタグを使用できます。
 *
 * スキルとアイテムのメモタグ
 *   <Instant Eval>
 *    code
 *    code
 *   </Instant Eval>
 *   コードは何でも構いません。
 *   ただし、定義したいのは、変数'instant'をtrue/falseにすることです。
 *   'instant = true'はアクションがターン無消費されることを意味し、
 *   'instant = false'はアクションが実行されないことを意味します。
 *   変数'instant'が結論に達しない場合、
 *   他の修飾子を介してターン無消費要素を決定するために通常どおり再開します。
 *   このメモタグと一緒にif/else文を使用することをお勧めします。
 *
 *   *注:これは<Cancel Instant>のメモタグよりも優先されます。
 *   この規則の唯一の例外ですが、そのような方法で行われた場合、
 *   それが独自の<Cancel Instant>として機能できるからです。
 *
 * 例:
 *   <Instant Eval>
 *   if (user.atk >= 300) instant = true;
 *   </Instant Eval>
 *
 * 上記の例では、
 * ユーザーのATK値が300以上の場合、
 * このメモタグを持つアクションは
 * ターン無消費特性を持つと見なされます。
 *
 * ===========================================================================
 * インスタントキャストの優先度設定
 * ===========================================================================
 *
 * スキルやアイテムがターン無消費特性を持つかを決定する要素は多くありますが、
 * 優先順位は次のとおりです。
 *
 * 1.ターン無消費評価のメモタグ
 * スキル/アイテムの<Instant Eval>のメモタグに 'instant = true' か
 * 'instant = false' が指定されている場合、
 * その設定が他の全てのものより優先されます。
 *
 * 2.ターン無消費キャンセルのメモタグ
 * アクター、職業、敵、武器、防具、ステートのターン無消費を
 * キャンセルする要素がある場合、
 * これは Instant Eval のメモタグで指定されているもの以外は全て優先されます。
 *
 * 3.ターン無消費スキル/アイテム付与のメモタグ
 * ターン無消費の特性をスキルやアイテムに付与する
 * アクター、職業、敵、武器、防具、ステートのメモタグは、
 * このリストの上に示されたものを除く全てのものに優先します。
 *
 * 4.固有のターン無消費特性のメモタグ
 * 上記のいずれも使用・適用されていない場合、
 * スキル・アイテムがターン無消費特性を持つかどうかは、
 * そのメモ欄に <Instant Cast> があるかどうかによって決まります。
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.12:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.11:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.10:
 * - Compatibility update for future plugins.
 *
 * Version 1.09:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.08:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.07b:
 * - Optimized to fit Tick-Based Battle Systems better.
 * - Fixed a bug where if the user uses an instant action self-berserks itself,
 * the user will still be able to input an action.
 * - Added failsafes for those using independent items and then adding this
 * plugin later. Effects are not applied retroactively.
 *
 * Version 1.06c:
 * - Fixed a bug if instant casting a skill that would make an opponent battler
 * to force an action to end incorrectly. Thanks to DoubleX for the fix.
 * - Added a more consistent window refresh upon using instant actions.
 * - Instant icons are now shown outside of battle.
 *
 * Version 1.05:
 * - Added a fail safe to keep an action that once it's being used, it will
 * maintain its current status of being an instant or non-instant until the
 * action is finished to prevent inconsistencies if a skill were to change
 * mid-action from instant to non-instant or vice versa.
 *
 * Version 1.04:
 * - Fixed a bug that would cause the game to lock up if using an Instant
 * action after a common event that would jump labels.
 *
 * Version 1.03:
 * - Fixed a bug with Forced Actions locking out the battle.
 *
 * Version 1.02:
 * - Fixed a bug that caused common events after a forced action to interrupt.
 *
 * Version 1.01:
 * - Compatibility update with ChangeWeaponOnBattle.js.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_InstantCast');
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Icon.Instant = Number(Yanfly.Parameters['Instant Icon']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Instant.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Instant.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_InstantCast) {
  	DataManager.processInstantNotetags1($dataSkills);
    DataManager.processInstantNotetags1($dataItems);
    DataManager.processInstantNotetags2($dataActors);
    DataManager.processInstantNotetags2($dataClasses);
    DataManager.processInstantNotetags2($dataEnemies);
    DataManager.processInstantNotetags2($dataWeapons);
    DataManager.processInstantNotetags2($dataArmors);
    DataManager.processInstantNotetags2($dataStates);
    Yanfly._loaded_YEP_InstantCast = true;
  }
	return true;
};

DataManager.processInstantNotetags1 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.instantCast = false;
    obj.instantEval = '';
    var evalMode = 'none';

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:INSTANT|instant cast)>/i)) {
				obj.instantCast = true;
			} else if (line.match(/<(?:INSTANT EVAL)>/i)) {
        evalMode = 'instant';
      } else if (line.match(/<\/(?:INSTANT EVAL)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'instant') {
        obj.instantEval = obj.instantEval + line + '\n';
      }
		}
	}
};

DataManager.processInstantNotetags2 = function(group) {
  var note1 = /<(?:INSTANT SKILL):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<(?:INSTANT SKILL):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  var note3 = /<(?:INSTANT ITEM):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note4 = /<(?:INSTANT ITEM):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  var note5 = /<(?:CANCEL INSTANT SKILL):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note6 = /<(?:CANCEL INSTANT SKILL):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  var note7 = /<(?:CANCEL INSTANT ITEM):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note8 = /<(?:CANCEL INSTANT ITEM):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.instantSkill = [];
    obj.instantItem = [];
    obj.cancelInstantSkill = [];
    obj.cancelInstantItem = [];

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.instantSkill = obj.instantSkill.concat(array);
			} else if (line.match(note2)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.instantSkill = obj.instantSkill.concat(range);
			} else if (line.match(note3)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.instantItem = obj.instantItem.concat(array);
			} else if (line.match(note4)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.instantItem = obj.instantItem.concat(range);
			} else if (line.match(note5)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.cancelInstantSkill = obj.cancelInstantSkill.concat(array);
			} else if (line.match(note6)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.cancelInstantSkill = obj.cancelInstantSkill.concat(range);
			} else if (line.match(note7)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.cancelInstantItem = obj.cancelInstantItem.concat(array);
			} else if (line.match(note8)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.cancelInstantItem = obj.cancelInstantItem.concat(range);
			}
		}
	}
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.Instant.BattleManager_isInputting = BattleManager.isInputting;
BattleManager.isInputting = function() {
    if (this._instantCasting) return false;
    return Yanfly.Instant.BattleManager_isInputting.call(this);
};

BattleManager.performInstantCast = function() {
    if (Imported.YEP_BattleEngineCore) {
      this.stopAllSelection();
      this.resetSelection();
    }
    this._subject = BattleManager.actor();
    this._instantCasting = true;
    if (Imported.YEP_BattleEngineCore && BattleManager.isDTB()) {
      this._ignoreTurnOrderFirstIndex = true;
    }
    this.startAction();
};

Yanfly.Instant.BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    this._startedInstantCasting = true;
    Yanfly.Instant.BattleManager_startAction.call(this);
};

Yanfly.Instant.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
    if (this._instantCasting) {
      this.endActorInstantCast();
    } else {
      this.endEnemyInstantCastAction();
      Yanfly.Instant.BattleManager_endAction.call(this);
    }
    this._startedInstantCasting = false;
};

BattleManager.endActorInstantCast = function() {
    if (Imported.YEP_BattleEngineCore && BattleManager.isDTB()) {
      this._ignoreTurnOrderFirstIndex = false;
    }
    var user = this._subject;
    if (Imported.YEP_BattleEngineCore) {
      if (this._processingForcedAction) this._phase = this._preForcePhase;
      this._processingForcedAction = false;
    }
    if (this.updateEventMain()) return;
    Yanfly.Instant.BattleManager_endAction.call(this);
    this._subject = user;
    this._instantCasting = undefined;
    user.makeActions();
    if (this.checkBattleEnd()) return;
    this._phase = 'input';
    if (user.canMove() && user.canInput()) {
      user.endInstantCast();
    } else {
      user.makeActions();
      this.selectNextCommand();
    }
    this.refreshStatus();
    if (Imported.YEP_BattleEngineCore && BattleManager.isDTB()) {
      this._subject = undefined;
    }
};

BattleManager.endEnemyInstantCastAction = function() {
    var battler = this._subject;
    if (!battler) return;
    if (battler.isActor()) return;
    var action = this._action;
    if (!action) return;
    var item = action.item();
    if (!item) return;
    if (battler.isInstantCast(item)) this.addInstantCastAction(battler);
};

BattleManager.addInstantCastAction = function(battler) {
    if (Imported.YEP_X_BattleSysATB && this.isATB()) return;
    if (Imported.YEP_X_BattleSysCTB && this.isCTB()) return;
    var action = new Game_Action(battler);
    battler._actions.push(action);
    battler.makeActions();
    this.makeActionOrders();
};

if (Imported.YEP_BattleEngineCore) {

Yanfly.Instant.BattleManager_savePreForceActionSettings =
    BattleManager.savePreForceActionSettings;
BattleManager.savePreForceActionSettings = function() {
    Yanfly.Instant.BattleManager_savePreForceActionSettings.call(this);
    this._instantCasting = false;
};

Yanfly.Instant.BattleManager_setPreForceActionSettings =
BattleManager.setPreForceActionSettings;
BattleManager.setPreForceActionSettings = function() {
    var settings =
      Yanfly.Instant.BattleManager_setPreForceActionSettings.call(this);
    settings['instantCasting'] = this._instantCasting;
    return settings;
};

Yanfly.Instant.BattleManager_resetPreForceActionSettings =
BattleManager.resetPreForceActionSettings;
BattleManager.resetPreForceActionSettings = function(settings) {
    Yanfly.Instant.BattleManager_resetPreForceActionSettings.call(this,
      settings);
    this._instantCasting = settings['instantCasting'];
};

} // Imported.YEP_BattleEngineCore

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.isInstantCast = function(item) {
    if (!item) return false;
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (this.checkInstantCast(state, item)) return true;
    }
    return item.instantCast;
};

Game_Battler.prototype.performInstantEval = function(item) {
    var instant = undefined;
    var skill = item;
    var a = this;
    var user = this;
    var subject = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = item.instantEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CUSTOM INSTANT CAST ERROR');
    }
    return instant;
};

Game_Battler.prototype.isCancelInstantCast = function(item) {
    if (!item) return false;
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (this.checkCancelInstantCast(state, item)) return true;
    }
    return false;
};

Game_Battler.prototype.checkInstantCast = function(obj, item) {
    var id = item.id;
    if (!obj) return false;
    if (DataManager.isSkill(item)) {
      if (!obj.instantSkill) return false;
      if (obj.instantSkill.contains(id)) return true;
    } else if (DataManager.isItem(item)) {
      if (!obj.instantItem) return false;
      if (obj.instantItem.contains(id)) return true;
    }
    return false;
};

Game_Battler.prototype.checkCancelInstantCast = function(obj, item) {
    var id = item.id;
    if (!obj) return false;
    if (DataManager.isSkill(item)) {
      if (!obj.cancelInstantSkill) return false;
      if (obj.cancelInstantSkill.contains(id)) return true;
    } else if (DataManager.isItem(item)) {
      if (!obj.cancelInstantItem) return false;
      if (obj.cancelInstantItem.contains(id)) return true;
    }
    return false;
};

Yanfly.Instant.Game_Battler_onRestrict = Game_Battler.prototype.onRestrict;
Game_Battler.prototype.onRestrict = function() {
    var instant = false;
    if ($gameParty.inBattle()) {
      if (BattleManager._subject === this && BattleManager._instantCasting) {
        instant = true;
        var currentAction = this.currentAction();
      }
    }
    Yanfly.Instant.Game_Battler_onRestrict.call(this);
    if (instant) {
      this.setAction(0, currentAction);
    }
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.endInstantCast = function() {
    if (Imported.YEP_BattleEngineCore) {
      this.spriteStepForward();
      $gameParty.requestMotionRefresh();
      this.requestMotion('walk');
    } else {
      this.setActionState('inputting');
    }
};

Game_Actor.prototype.isInstantCast = function(item) {
    if (!item) return false;
    if ($gameParty.inBattle() && BattleManager._startedInstantCasting) {
      return BattleManager._instantCasting;
    }
    if (item.instantEval.length > 0) {
      var outcome = this.performInstantEval(item);
      if (outcome === true || outcome === false) return outcome;
    }
    if (this.isCancelInstantCast(item)) return false;
    if (this.checkInstantCast(this.actor(), item)) return true;
    if (this.checkInstantCast(this.currentClass(), item)) return true;
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (this.checkInstantCast(equip, item)) return true;
    }
    return Game_Battler.prototype.isInstantCast.call(this, item);
};

Game_Actor.prototype.isCancelInstantCast = function(item) {
    if (!item) return false;
    if (this.checkCancelInstantCast(this.actor(), item)) return true;
    if (this.checkCancelInstantCast(this.currentClass(), item)) return true;
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (this.checkCancelInstantCast(equip, item)) return true;
    }
    return Game_Battler.prototype.isCancelInstantCast.call(this, item);
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.isInstantCast = function(item) {
    if (!item) return false;
    if (item.instantEval.length > 0) {
      var outcome = this.performInstantEval(item);
      if (outcome === true || outcome === false) return outcome;
    }
    if (this.isCancelInstantCast(item)) return false;
    if (this.checkInstantCast(this.enemy(), item)) return true;
    return Game_Battler.prototype.isInstantCast.call(this, item);
};

Game_Enemy.prototype.isCancelInstantCast = function(item) {
    if (!item) return false;
    if (this.checkCancelInstantCast(this.enemy(), item)) return true;
    return Game_Battler.prototype.isCancelInstantCast.call(this, item);
};

//=============================================================================
// Scene_Battle
//=============================================================================

Yanfly.Instant.Scene_Battle_selectNextCommand =
    Scene_Battle.prototype.selectNextCommand;
Scene_Battle.prototype.selectNextCommand = function() {
    if (this.isInstantCast()) {
      this.instantCastStart();
      BattleManager.performInstantCast();
    } else {
      Yanfly.Instant.Scene_Battle_selectNextCommand.call(this);
    }
};

Scene_Battle.prototype.instantCastStart = function() {
    this._enemyWindow.hide();
    this._actorWindow.hide();
    this._skillWindow.hide();
    this._itemWindow.hide();
};

Scene_Battle.prototype.isInstantCast = function() {
    var actor = BattleManager.actor();
    if (!actor) return false;
    var action = BattleManager.inputtingAction();
    if (!action) return false;
    if (action !== actor.action(0)) return false;
    var item = action.item();
    return actor.isInstantCast(item);
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.Instant.Window_Base_drawItemName =
    Window_Base.prototype.drawItemName;
Window_Base.prototype.drawItemName = function(item, wx, wy, ww) {
    Yanfly.Instant.Window_Base_drawItemName.call(this, item, wx, wy, ww)
    ww = ww || 312;
    this.drawInstantIcon(item, wx, wy, ww);
};

Window_Base.prototype.drawInstantIcon = function(item, wx, wy, ww) {
    var icon = Yanfly.Icon.Instant;
    if (icon <= 0) return;
    if (!item) return;
    if (!DataManager.isItem(item) && !DataManager.isSkill(item)) return;
    var actor = this._actor;
    if (!actor) return;
    if (!actor.isInstantCast(item)) return;
    this.drawIcon(icon, wx + 2, wy + 2);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
