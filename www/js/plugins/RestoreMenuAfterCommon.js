//===============================
// RestoreMenuAfterCommon.js
//===============================

/*:
 * @plugindesc Back to the same menu scene after common events caused by items.
 * @author terunon (AliasAche)
 *
 * @help
 * ���j���[��ŃR�����C�x���g���ĂԃA�C�e�����g�p���ă��j���[������ꂽ�Ƃ��A
 * ���̉�ʂɖ߂�������񋟂��܂��B
 * �Ē�`���s���Ă���̂ŏ�̕��ɔz�u���Ă��������B
 *
 * �ΏۃR�����C�x���g�̖����ɃX�N���v�g�Fthis.sceneRestore()�Ɠ���邱�ƂŎg�p�ł��܂��B
 *
 * �N���W�b�g�Ƃ��āA�uterunon�i�G�C���A�X�G�C�N�j�v�̑f�ނ��g�p�����|��
 * ReadMe�܂��̓u���E�U���̎��F�ł���ꏊ�ɋL�ڂ��Ă���������΁A
 * �c����c����킸�A������c�N�[��MV��i�Ŏg�p�E���ς��������܂��B
 *
 * �� 2018.10.30 ver 1.1�F�s�v�ȏ������폜�B
 *
 * Copyright (c) 2016 terunon (AliasAche)
 * You can use and modify it for every your commercial/non-commercial RPG Maker MV game
 * if you credit "terunon (AliasAche)"
 */

//Global variables
var aliasAcheCommon = false;
var aliasAcheSelectRestore = false;

(function () {
  Scene_Item.prototype.popScene = function () {
    if (aliasAcheCommon) {
      aliasAcheCommon = false;
      aliasAcheSelectRestore = false;
      SceneManager.goto(Scene_Menu);
    } else {
      SceneManager.pop();
    }
  };

  Game_Interpreter.prototype.sceneRestore = function () {
    if (!$gameParty.inBattle()) {
      aliasAcheCommon = true;
      aliasAcheSelectRestore = true;
      SceneManager.push(Scene_Item);
    }
  };
})();
