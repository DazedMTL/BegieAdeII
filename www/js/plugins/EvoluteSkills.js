//=============================================================================
// EvoluteSkills.js
//=============================================================================

/*:ja
 * @plugindesc ver1.01 下位スキルの非表示
 * @author まっつＵＰ
 *
 * @help
 *
 * RPGで笑顔を・・・
 *
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 *
 * スキルのノートタグ（メモの中に記入）
 * xはスキルID
 * <EShide:x>
 * <EShide:x,x,x>
 * <EShideTO:x,x> このタグでは必ずxを二つ使用してください。
 *
 * 例<EShide:12,159>
 * このスキルはそのアクターがID12またはID159のスキルの
 * いずれかを覚えている場合に非表示にされる。
 *
 * 例<EShideTO:12,159>
 * このスキルはそのアクターがID12からID159までの連続するIDのスキルの
 * いずれかを覚えている場合に非表示にされる。
 *
 * ver1.01 ノートタグ<EShideTO:x,x>を使用時、自身のスキルIDは判定されなくなりました。
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
  //var parameters = PluginManager.parameters('EvoluteSkills');

  var _Window_SkillList_includes = Window_SkillList.prototype.includes;
  Window_SkillList.prototype.includes = function (item) {
    var ESskill = $dataSkills[item.id].note;
    if (ESskill && this._actor) {
      var noteAB = /<(?:EShide):[ ]*(\d+(?:\s*,\s*\d+)*)>/i; //絶対参照
      var noteTO = /<(?:EShideTO):(\d+),(\d+)>/i; //範囲指定
      var notedata = ESskill.split(/[\r\n]+/);
      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(noteAB)) {
          var array1 = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
        } else if (line.match(noteTO)) {
          var array1 = [];
          var range1 = Number(RegExp.$1);
          var range2 = Number(RegExp.$2) - Number(RegExp.$1) + 1;
          var idtip;
          for (var i = 0; i < range2; i++) {
            //配列作るンゴ
            idtip = range1 + i;
            if (idtip != item.id) array1[i] = idtip;
          }
        }
        if (array1) {
          var able = array1.every(function (id) {
            return !this._actor.hasSkill(id);
          }, this);
          if (!able) return false;
        }
      }
    }
    return _Window_SkillList_includes.call(this, item); //上述でfalseを返さない場合は元の処理で判定
  };
})();
