//=============================================================================
// Chicken.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00 戦いから逃げるな。
 * @author まっつＵＰ
 *
 * @param shield
 * @desc 0以外であればアクターコマンドの防御を非表示にします。
 * @default 0
 *
 * @help
 *
 * RPGで笑顔を・・・
 *
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 *
 * アクターコマンドに逃げるを追加します。
 * （ほぼパーティコマンドの逃げると同様の効果です。）
 *
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 *
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 *
 */

(function () {
  var parameters = PluginManager.parameters("Chicken");
  var Cshield = Number(parameters["shield"] || 0);

  var _Scene_Battle_createActorCommandWindow =
    Scene_Battle.prototype.createActorCommandWindow;
  Scene_Battle.prototype.createActorCommandWindow = function () {
    _Scene_Battle_createActorCommandWindow.call(this);
    this._actorCommandWindow.setHandler(
      "escape",
      this.commandEscape.bind(this)
    );
  };

  var _Window_ActorCommand_addGuardCommand =
    Window_ActorCommand.prototype.addGuardCommand;
  Window_ActorCommand.prototype.addGuardCommand = function () {
    if (Cshield != 0) return;
    _Window_ActorCommand_addGuardCommand.call(this);
  };

  var _Window_ActorCommand_makeCommandList =
    Window_ActorCommand.prototype.makeCommandList;
  Window_ActorCommand.prototype.makeCommandList = function () {
    _Window_ActorCommand_makeCommandList.call(this);
    if (this._actor)
      this.addCommand(TextManager.escape, "escape", BattleManager.canEscape());
  };
})();
