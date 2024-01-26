//===========================================================================
// MOG_BattleHud.js   -   (Template 11)
// Translate to Japanese : fungamemake.com
//===========================================================================

/*:
 * @plugindesc (v5.04f *) 戦闘のレイアウトをカスタマイズできます。
 * @author Moghunter
 *
 * @param -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> HUD全般 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -90
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 480
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Space X
 * @text X軸間隔
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Space Y
 * @text Y軸間隔
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Slide X
 * @text X軸スライド量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Hud Slide Y
 * @text Y軸スライド量
 * @type number
 * @min -9007
 * @max 9007
 * @default 250
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Vertical Mode
 * @text 並べ方
 * @default false
 * @type boolean
 * @on 縦モード
 * @off 水平モード
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Max Battle Members
 * @text 戦闘の最大参加人数
 * @type number
 * @min 1
 * @max 9007
 * @default 4
 * @parent -> MAIN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> レイアウト2(上レイヤー) <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout2 Visible
 * @text レイアウト2の表示
 * @desc 顔、ゲージの上レイヤーに表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout2 X-Axis
 * @text HUDのX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout2 Y-Axis
 * @text HUDのY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> ターン画像 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Visible
 * @text 表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -10
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -10
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Rotation Speed
 * @text 回転速度
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Turn Zoom Animation
 * @text 拡大アニメーション有効
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> TURN <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 顔画像 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Visible
 * @text 表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face X-Axis
 * @text X軸位置
 * @default 52
 * @type number
 * @min -9007
 * @max 9007
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 52
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Shake Animation
 * @text 振動アニメーションの有効化
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Zoom Animation
 * @text 拡大アニメーションの有効化
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Frame Animation
 * @text フレーム有効化
 * @desc 顔画像フレーム有効化。画像が5分割されます。左から 待機時 / HP回復時 / 行動時 / 被ダメージ時・瀕死時 / 戦闘不能時
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Face Priority
 * @text 優先順位
 * @type select
 * @option 低い(ゲージの下)
 * @value 0
 * @option 高い(ゲージの上)
 * @value 1
 * @default 0
 * @parent -> FACE <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> アクター名 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Visible
 * @text 表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -45
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 65
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Align
 * @text 文字配置
 * @desc 0:左 / 1:中央 / 2:右
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 * @default 1
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Font Size
 * @text フォントサイズ
 * @type number
 * @max 9007
 * @default 20
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Bold Size
 * @text 文字太さ
 * @type number
 * @max 9007
 * @default 4
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Name Font Italic
 * @text フォントをイタリック化
 * @default false
 * @type boolean
 * @on イタリック
 * @off 通常
 * @parent -> NAME <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> HP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Visible
 * @text メーター表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter X-Axis
 * @text メーターX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 87
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Y-Axis
 * @text メーターY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 7
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Angle
 * @text メーター角度
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Meter Flow Anime
 * @text メーターのフローアニメ有効化
 * @desc 画像はHPメータの幅の3倍である必要があります。
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number Visible
 * @text 値の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number Align type
 * @text 値の文字配置
 * @type select
 * @option 右
 * @value 0
 * @option 中央
 * @value 1
 * @option 左
 * @value 2
 * @option 対角線
 * @value 3
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number X-Axis
 * @text HP値のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 170
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param HP Number Y-Axis
 * @text HP値のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -11
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxHP Number Visible
 * @text 最大HP値の表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxHP Number X-Axis
 * @text 最大HP値のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxHP Number Y-Axis
 * @text 最大HP値のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> HP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> MP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Visible
 * @text メーターの表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter X-Axis
 * @text メーターのX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 104
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Y-Axis
 * @text メーターのY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 33
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Angle
 * @text メーターの角度設定
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Meter Flow Anime
 * @text メーターのフローアニメ有効化
 * @desc 画像はゲージの幅の3倍である必要があります。
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number Visible
 * @text 値の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number Align type
 * @text 値の文字配置
 * @type select
 * @option 右
 * @value 0
 * @option 中央
 * @value 1
 * @option 左
 * @value 2
 * @option 対角線
 * @value 3
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number X-Axis
 * @text 値のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 187
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MP Number Y-Axis
 * @text 値のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 26
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxMP Number Visible
 * @text 最大値の表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxMP Number X-Axis
 * @text 最大値のX軸位置
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxMP Number Y-Axis
 * @text 最大値のY軸位置
 * @default 0
 * @parent -> MP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> TP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Visible
 * @text メーターの表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter X-Axis
 * @text メーターのX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 104
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Y-Axis
 * @text メーターのY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 59
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Angle
 * @text メーターの角度設定
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Meter Flow Anime
 * @text メーターのフローアニメ有効化
 @ desc 画像はゲージの幅の3倍である必要があります。
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number Visible
 * @text 値の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number Align type
 * @text 値の文字配置
 * @type select
 * @option 右
 * @value 0
 * @option 中央
 * @value 1
 * @option 左
 * @value 2
 * @option 対角線
 * @value 3
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number X-Axis
 * @text 値のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 187
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param TP Number Y-Axis
 * @text 値のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 43
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxTP Number Visible
 * @text 最大値の表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxTP Number X-Axis
 * @text 最大値のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxTP Number Y-Axis
 * @text 最大値のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> TP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> アメリアのCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Meter Visible
 * @text メーター表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Meter X-Axis
 * @text Gauge X-Axis
 * @text メーターのX軸位置
 * @default 143
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Meter Y-Axis
 * @text Gauge Y-Axis
 * @text メーターのY軸位置
 * @default 145
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Meter Angle
 * @text メーターの角度
 * @default 0
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Number Visible
 * @text 値の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Number Align
 * @text 値の文字揃え
 * @desc 0:左 / 1:中央 / 2:右
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Number X-Axis
 * @text 値のX軸位置
 * @default 270
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Number Y-Axis
 * @text 値のY軸位置
 * @default 130
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Meter Flow Anime
 * @text メーターのグラデーションアニメ有効化
 * @desc 画像はメーターの幅の3倍でなければなりません。
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Meter Flow Speed
 * @text グラデーションのアニメ速度
 * @desc 画像はメーターの幅の3倍でなければなりません。
 * @default 4
 * @type number
 * @min 1
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxACP Number Visible
 * @text 最大値の表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxACP Number X-Axis
 * @text 最大値のX軸位置
 * @default 185
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxACP Number Y-Axis
 * @text 最大値のY軸位置
 * @default 116
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Visible
 * @text アイコンの表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Half Mode
 * @text アイコンハーフモード有効化
 * @desc アイコンは2ポイントに相当
 * @default false
 * @type boolean
 * @on 有効 (ゼルダ形式)
 * @off 無効
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Max Colors
 * @text アイコンの段階色数
 * @desc 画像は色数で分割されます。
 * @default 2
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Max Rows
 * @text 1行のアイコン数
 * @default 10
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Max Columns
 * @text アイコンの表示行数
 * @default 2
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon X-Axis
 * @text アイコンのX軸位置
 * @default 143
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Y-Axis
 * @text アイコンのY軸位置
 * @default 50
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Space X
 * @text アイコン間の水平方向間隔
 * @default 0
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Space Y
 * @text アイコン間の縦方向間隔
 * @default 0
 * @type number
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ACP Icon Zoom Anime
 * @text アイコンが最後の時でのズームアニメ有効化
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> ACP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> リリックのCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Meter Visible
 * @text メーター表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Meter X-Axis
 * @text Gauge X-Axis
 * @text メーターのX軸位置
 * @default 143
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Meter Y-Axis
 * @text Gauge Y-Axis
 * @text メーターのY軸位置
 * @default 145
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Meter Angle
 * @text メーターの角度
 * @default 0
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Meter Flow Anime
 * @text メーターのグラデーションアニメ有効化
 * @desc 画像はメーターの幅の3倍でなければなりません。
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Meter Flow Speed
 * @text グラデーションのアニメ速度
 * @desc 画像はメーターの幅の3倍でなければなりません。
 * @default 4
 * @type number
 * @min 1
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Number Visible
 * @text 値の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Number Align
 * @text 値の文字揃え
 * @desc 0:左 / 1:中央 / 2:右
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Number X-Axis
 * @text 値のX軸位置
 * @default 270
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Number Y-Axis
 * @text 値のY軸位置
 * @default 130
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxLCP Number Visible
 * @text 最大値の表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxLCP Number X-Axis
 * @text 最大値のX軸位置
 * @default 185
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param MaxLCP Number Y-Axis
 * @text 最大値のY軸位置
 * @default 116
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Visible
 * @text アイコンの表示
 * @default false
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Half Mode
 * @text アイコンハーフモード有効化
 * @desc アイコンは2ポイントに相当
 * @default false
 * @type boolean
 * @on 有効 (ゼルダ形式)
 * @off 無効
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Max Colors
 * @text アイコンの段階色数
 * @desc 画像は色数で分割されます。
 * @default 2
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Max Rows
 * @text 1行のアイコン数
 * @default 10
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Max Columns
 * @text アイコンの表示行数
 * @default 2
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon X-Axis
 * @text アイコンのX軸位置
 * @default 143
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Y-Axis
 * @text アイコンのY軸位置
 * @default 50
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Space X
 * @text アイコン間の水平方向間隔
 * @default 0
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Space Y
 * @text アイコン間の縦方向間隔
 * @default 0
 * @type number
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param LCP Icon Zoom Anime
 * @text アイコンが最後の時でのズームアニメ有効化
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> LCP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> INYOKU <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 淫欲度 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Inyoku Visible
 * @text 表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> INYOKU <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Inyoku Align
 * @text 淫欲度の文字揃え
 * @desc 0:左 / 1:中央 / 2:右
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 * @parent -> INYOKU <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Inyoku X-Axis
 * @text 淫欲度のX軸位置
 * @default 65
 * @type number
 * @parent -> INYOKU <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Inyoku Y-Axis
 * @text 淫欲度のY軸位置
 * @default 153
 * @type number
 * @parent -> INYOKU <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> LEVEL <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> LEVEL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Level Number Visible
 * @text レベル値の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> LEVEL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Level Number Align
 * @text レベルの文字揃え
 * @desc 0:左 / 1:中央 / 2:右
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 * @parent -> LEVEL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Level Number X-Axis
 * @text レベルのX軸位置
 * @default 65
 * @type number
 * @parent -> LEVEL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Level Number Y-Axis
 * @text レベルのY軸位置
 * @default 153
 * @type number
 * @parent -> LEVEL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Visible
 * @text メーターの表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter X-Axis
 * @text メーターのX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 69
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Y-Axis
 * @text メーターのY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 117
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Angle
 * @text メーターの角度
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param ATB Meter Flow Anime
 * @text メーターのフローアニメ有効化
 * @desc 画像はゲージの幅の3倍である必要があります。
 * @default true
 * @type boolean
 * @on 有効
 * @off 無効
 * @parent -> ATB <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> ステートアイコン <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Visible
 * @text 表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 102
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 76
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Mode
 * @text 表示モード
 * @desc 0:タイミングモード / 1:ラインモード
 * @type select
 * @option タイミングモード (1つのステートアイコンを交代で表示)
 * @value 0
 * @option ラインモード (ステートアイコンを並べて表示)
 * @value 1
 * @default 0
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Max
 * @text 並ぶ最大数
 * @type number
 * @min 1
 * @max 9007
 * @default 4
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param States Align
 * @text 配置開始位置
 * @desc 0:左 / 1:右 / 2:上 / 3:下
 * @type select
 * @option 左
 * @value 0
 * @option 右
 * @value 1
 * @option 上
 * @value 2
 * @option 下
 * @value 3
 * @default 0
 * @parent -> STATES <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> コマンドウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Auto Adjust
 * @text 自動位置調整の有効化
 * @desc 0:自動調整 / 1:固定
 * @type select
 * @option 自動調整
 * @value 0
 * @option 固定
 * @value 1
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -15
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 192
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 180
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Command Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default 64
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Command
 * @text レイアウト画像を表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Command X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -25
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Command Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -35
 * @parent -> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> パーティウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 325
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 170
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 192
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 110
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Party Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default -100
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Party
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Party X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -325
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Party Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -42
 * @parent -> W PARTY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> ヘルプウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 816
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 108
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Help Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default -50
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Help
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Help X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Help Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W HELP <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> スキルウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 444
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 816
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 180
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill maxCols
 * @text 最大列数
 * @type number
 * @min 1
 * @max 9007
 * @default 2
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Skill Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default 50
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Skill
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Skill X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Skill Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -67
 * @parent -> W SKILL <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> アイテムウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 * @default
 *
 * @param W Item X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 444
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 816
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 180
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item maxCols
 * @text 最大列数
 * @type number
 * @min 1
 * @max 9007
 * @default 2
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Item Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default 50
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Item
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Item X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Item Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -67
 * @parent -> W ITEM <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> アクターウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 444
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 816
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 180
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor maxCols
 * @text 最大列数
 * @type number
 * @min 1
 * @max 9007
 * @default 1
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Actor Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default 50
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Actor
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Actor X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Actor Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -67
 * @parent -> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 敵ウィンドウ <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy X-Axis
 * @text X軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Y-Axis
 * @text Y軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 444
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Width
 * @text 幅
 * @type number
 * @min -9007
 * @max 9007
 * @default 816
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Height
 * @text 高さ
 * @type number
 * @min -9007
 * @max 9007
 * @default 180
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy maxCols
 * @text 最大列数
 * @type number
 * @min 1
 * @max 9007
 * @default 2
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Slide X
 * @text スライドアニメX量
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param W Enemy Slide Y
 * @text スライドアニメY量
 * @type number
 * @min -9007
 * @max 9007
 * @default 50
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Layout Enemy
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Enemy X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L Enemy Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default -67
 * @parent -> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> スクリーン全体 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Layout
 * @text レイアウト画像の表示
 * @default true
 * @type boolean
 * @on 表示
 * @off 非表示
 * @parent -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen X-Axis
 * @text レイアウト画像のX軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Y-Axis
 * @text レイアウト画像のY軸位置
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 * @parent -> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 位置調整 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 1
 * @text アクター1HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 2
 * @text アクター2HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 3
 * @text アクター3HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 4
 * @text アクター4HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 5
 * @text アクター5HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 6
 * @text アクター6HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 7
 * @text アクター7HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Custom Position 8
 * @text アクター8HUD
 * @desc 例: 200,200
 * @default
 * @parent -> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG_BattleHud (v5.04f) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * このプラグインは戦闘のレイアウトをカスタマイズします。
 *
 * ===========================================================================
 * - 必要なファイル
 * ===========================================================================
 * 以下のファイルが必要になります。 (img/battlehud/)
 *
 * ->  HP_Meter.png
 * ->  HP_Number.png
 * ->  MP_Meter.png
 * ->  MP_Number.png
 * ->  TP_Meter.png
 * ->  TP_Number.png
 * ->  ATB_Meter.png
 * ->  Layout.png
 * ->  Layout2.png
 * ->  Layout_Actor.png
 * ->  Layout_Command.png
 * ->  Layout_Enemy.png
 * ->  Layout_Help.png
 * ->  Layout_Item.png
 * ->  Layout_Party.png
 * ->  Layout_Screen.png
 * ->  Layout_Skill.png
 * ->  Turn.png
 *
 * ===========================================================================
 * アクターの顔画像には、以下のように名前を付けます。
 *
 * Face_ + ACTOR_ID.png
 *
 * Face_1.png
 * Face_2.png
 * Face_3.png
 * ...
 *
 * ===========================================================================
 * - メモタグ
 * ===========================================================================
 * 顔の呼吸エフェクトを有効にするには、下のメモタグを使います。
 *
 * Face Breath Effect
 *
 * ===========================================================================
 * - プラグインコマンド
 * ===========================================================================
 * HUDを隠すには、以下のコマンドを使います。
 *
 *     bhud_disable
 *
 * HUDを表示するには、以下のコマンドを使います。
 *
 *     bhud_enable
 *
 * ===========================================================================
 * - スクリプトコマンド
 * ===========================================================================
 * HUDを隠すには、以下のコマンドを使います。
 *
 *     $gameSystem._bhud_visible = false
 *
 * HUDを表示するには、以下のコマンドを使います。
 *
 *     $gameSystem._bhud_visible = true
 *
 * ===========================================================================
 * - 更新履歴
 * ===========================================================================
 * - (version 5.04f)
 * (BUG FIX) - フロントビュー戦闘で全体アニメーション位置を正しく表示
 * (BUG FIX) - 前回の戦闘でキャラクターが殺された場合、
 *             戦闘開始時に正しい顔を表示しない現象を修正。
 *
 */

//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================

var Imported = Imported || {};
Imported.MOG_BattleHud = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters("MOG_BattleHud");

// HUD POSITION
Moghunter.bhud_pos_x = Number(Moghunter.parameters["Hud X-Axis"] || -90);
Moghunter.bhud_pos_y = Number(Moghunter.parameters["Hud Y-Axis"] || 480);
Moghunter.bhud_space_x = Number(Moghunter.parameters["Hud Space X"] || 0);
Moghunter.bhud_space_y = Number(Moghunter.parameters["Hud Space Y"] || 0);
Moghunter.bhud_pos_mode = String(
  Moghunter.parameters["Vertical Mode"] || false
);
Moghunter.bhud_max_battle_members = Number(
  Moghunter.parameters["Max Battle Members"] || 4
);
Moghunter.bhud_slideX = Number(Moghunter.parameters["Hud Slide X"] || 0);
Moghunter.bhud_slideY = Number(Moghunter.parameters["Hud Slide Y"] || 0);

// Layout Overlay
Moghunter.bhud_layoverlay_visible = String(
  Moghunter.parameters["Layout2 Visible"] || "true"
);
Moghunter.bhud_layoverlay_x = Number(
  Moghunter.parameters["Layout2 X-Axis"] || 0
);
Moghunter.bhud_layoverlay_y = Number(
  Moghunter.parameters["Layout2 Y-Axis"] || 0
);

// Screen Layout
Moghunter.bhud_screen_layout = String(
  Moghunter.parameters["Screen Layout"] || "true"
);
Moghunter.bhud_screen_layout_x = Number(
  Moghunter.parameters["Screen X-Axis"] || 0
);
Moghunter.bhud_screen_layout_y = Number(
  Moghunter.parameters["Screen Y-Axis"] || 0
);

// TURN POSITION
Moghunter.bhud_turn_visible = String(
  Moghunter.parameters["Turn Visible"] || true
);
Moghunter.bhud_turn_pos_x = Number(Moghunter.parameters["Turn X-Axis"] || -10);
Moghunter.bhud_turn_pos_y = Number(Moghunter.parameters["Turn Y-Axis"] || -10);
Moghunter.bhud_turn_rotation = Number(
  Moghunter.parameters["Turn Rotation Speed"] || 0.01
);
Moghunter.bhud_turn_zoom = String(
  Moghunter.parameters["Turn Zoom Animation"] || "true"
);

// FACE POSITION
Moghunter.bhud_face_visible = String(
  Moghunter.parameters["Face Visible"] || true
);
Moghunter.bhud_face_shake = String(
  Moghunter.parameters["Face Shake Animation"] || true
);
Moghunter.bhud_face_zoom = String(
  Moghunter.parameters["Face Zoom Animation"] || true
);
Moghunter.bhud_face_animated = String(
  Moghunter.parameters["Face Frame Animation"] || false
);
Moghunter.bhud_face_pos_x = Number(Moghunter.parameters["Face X-Axis"] || 52);
Moghunter.bhud_face_pos_y = Number(Moghunter.parameters["Face Y-Axis"] || 52);
Moghunter.bhud_face_priority = Number(
  Moghunter.parameters["Face Priority"] || 0
);

// NAME POSITION
Moghunter.bhud_name_visible = String(
  Moghunter.parameters["Name Visible"] || true
);
Moghunter.bhud_name_font_size = Number(
  Moghunter.parameters["Name Font Size"] || 20
);
Moghunter.bhud_name_font_bold_size = Number(
  Moghunter.parameters["Name Bold Size"] || 4
);
Moghunter.bhud_name_font_italic = String(
  Moghunter.parameters["Name Font Italic"] || false
);
Moghunter.bhud_name_align = Number(Moghunter.parameters["Name Align"] || 1);
Moghunter.bhud_name_pos_x = Number(Moghunter.parameters["Name X-Axis"] || -25);
Moghunter.bhud_name_pos_y = Number(Moghunter.parameters["Name Y-Axis"] || 65);

// HP METER POSITION
Moghunter.bhud_hp_meter_visible = String(
  Moghunter.parameters["HP Meter Visible"] || true
);
Moghunter.bhud_hp_meter_pos_x = Number(
  Moghunter.parameters["HP Meter X-Axis"] || 87
);
Moghunter.bhud_hp_meter_pos_y = Number(
  Moghunter.parameters["HP Meter Y-Axis"] || 7
);
Moghunter.bhud_hp_meter_rotation = Number(
  Moghunter.parameters["HP Meter Angle"] || 0
);
Moghunter.bhud_hp_meter_flow = String(
  Moghunter.parameters["HP Meter Flow Anime"] || true
);

// HP NUMBER POSITION
Moghunter.bhud_hp_number_visible = String(
  Moghunter.parameters["HP Number Visible"] || true
);
Moghunter.bhud_hp_number_pos_x = Number(
  Moghunter.parameters["HP Number X-Axis"] || 170
);
Moghunter.bhud_hp_number_pos_y = Number(
  Moghunter.parameters["HP Number Y-Axis"] || -11
);
Moghunter.bhud_maxhp_number_visible = String(
  Moghunter.parameters["MaxHP Number Visible"] || false
);
Moghunter.bhud_maxhp_number_pos_x = Number(
  Moghunter.parameters["MaxHP Number X-Axis"] || 245
);
Moghunter.bhud_maxhp_number_pos_y = Number(
  Moghunter.parameters["MaxHP Number Y-Axis"] || 20
);
Moghunter.bhud_hp_align_type = Number(
  Moghunter.parameters["HP Number Align type"] || 0
);

// MP METER POSITION
Moghunter.bhud_mp_meter_visible = String(
  Moghunter.parameters["MP Meter Visible"] || true
);
Moghunter.bhud_mp_meter_pos_x = Number(
  Moghunter.parameters["MP Meter X-Axis"] || 104
);
Moghunter.bhud_mp_meter_pos_y = Number(
  Moghunter.parameters["MP Meter Y-Axis"] || 33
);
Moghunter.bhud_mp_meter_rotation = Number(
  Moghunter.parameters["MP Meter Angle"] || 0
);
Moghunter.bhud_mp_meter_flow = String(
  Moghunter.parameters["MP Meter Flow Anime"] || true
);

// MP NUMBER POSITION
Moghunter.bhud_mp_number_visible = String(
  Moghunter.parameters["MP Number Visible"] || true
);
Moghunter.bhud_mp_number_pos_x = Number(
  Moghunter.parameters["MP Number X-Axis"] || 187
);
Moghunter.bhud_mp_number_pos_y = Number(
  Moghunter.parameters["MP Number Y-Axis"] || 16
);
Moghunter.bhud_maxmp_number_visible = String(
  Moghunter.parameters["MaxMP Number Visible"] || false
);
Moghunter.bhud_maxmp_number_pos_x = Number(
  Moghunter.parameters["MaxMP Number X-Axis"] || 196
);
Moghunter.bhud_maxmp_number_pos_y = Number(
  Moghunter.parameters["MaxMP Number Y-Axis"] || 78
);
Moghunter.bhud_mp_align_type = Number(
  Moghunter.parameters["MP Number Align type"] || 0
);
Moghunter.bhud_mp_diagonal_number = Number(
  Moghunter.parameters["MP Number Diagonal"] || true
);

// TP METER POSITION
Moghunter.bhud_tp_meter_visible = String(
  Moghunter.parameters["TP Meter Visible"] || true
);
Moghunter.bhud_tp_meter_pos_x = Number(
  Moghunter.parameters["TP Meter X-Axis"] || 104
);
Moghunter.bhud_tp_meter_pos_y = Number(
  Moghunter.parameters["TP Meter Y-Axis"] || 59
);
Moghunter.bhud_tp_meter_rotation = Number(
  Moghunter.parameters["TP Meter Angle"] || 0
);
Moghunter.bhud_tp_meter_flow = String(
  Moghunter.parameters["TP Meter Flow Anime"] || true
);

// TP NUMBER POSITION
Moghunter.bhud_tp_number_visible = String(
  Moghunter.parameters["TP Number Visible"] || true
);
Moghunter.bhud_tp_number_pos_x = Number(
  Moghunter.parameters["TP Number X-Axis"] || 187
);
Moghunter.bhud_tp_number_pos_y = Number(
  Moghunter.parameters["TP Number Y-Axis"] || 43
);
Moghunter.bhud_maxtp_number_visible = String(
  Moghunter.parameters["MaxTP Number Visible"] || false
);
Moghunter.bhud_maxtp_number_pos_x = Number(
  Moghunter.parameters["MaxTP Number X-Axis"] || 185
);
Moghunter.bhud_maxtp_number_pos_y = Number(
  Moghunter.parameters["MaxTP Number Y-Axis"] || 116
);
Moghunter.bhud_tp_align_type = Number(
  Moghunter.parameters["TP Number Align type"] || 0
);
Moghunter.bhud_tp_diagonal_number = Number(
  Moghunter.parameters["TP Number Diagonal"] || false
);

// ACP METER POSITION
Moghunter.bhud_acp_meter_visible = String(
  Moghunter.parameters["ACP Meter Visible"] || true
);
Moghunter.bhud_acp_meter_pos_x = Number(
  Moghunter.parameters["ACP Meter X-Axis"] || 143
);
Moghunter.bhud_acp_meter_pos_y = Number(
  Moghunter.parameters["ACP Meter Y-Axis"] || 85
);
Moghunter.bhud_acp_meter_rotation = Number(
  Moghunter.parameters["ACP Meter Angle"] || 0
);
Moghunter.bhud_acp_meter_flow = String(
  Moghunter.parameters["ACP Meter Flow Anime"] || false
);
Moghunter.bhud_acp_flowSpd = Number(
  Moghunter.parameters["ACP Meter Flow Speed"] || 2
);

// ACP NUMBER POSITION
Moghunter.bhud_acp_number_visible = String(
  Moghunter.parameters["ACP Number Visible"] || true
);
Moghunter.bhud_acp_number_align = Number(
  Moghunter.parameters["ACP Number Align"] || 0
);
Moghunter.bhud_acp_number_pos_x = Number(
  Moghunter.parameters["ACP Number X-Axis"] || 270
);
Moghunter.bhud_acp_number_pos_y = Number(
  Moghunter.parameters["ACP Number Y-Axis"] || 70
);
Moghunter.bhud_maxacp_number_visible = String(
  Moghunter.parameters["MaxACP Number Visible"] || false
);
Moghunter.bhud_maxacp_number_pos_x = Number(
  Moghunter.parameters["MaxACP Number X-Axis"] || 125
);
Moghunter.bhud_maxacp_number_pos_y = Number(
  Moghunter.parameters["MaxACP Number Y-Axis"] || 13
);

// ACP ICON POSITION
Moghunter.bhud_acp_icon_visible = String(
  Moghunter.parameters["ACP Icon Visible"] || "false"
);
Moghunter.bhud_acp_icon_halfMode = String(
  Moghunter.parameters["ACP Icon Half Mode"] || "false"
);
Moghunter.bhud_acp_icon_colorMax = Number(
  Moghunter.parameters["ACP Icon Max Colors"] || 2
);
Moghunter.bhud_acp_icon_rows = Number(
  Moghunter.parameters["ACP Icon Max Rows"] || 10
);
Moghunter.bhud_acp_icon_cols = Number(
  Moghunter.parameters["ACP Icon Max Columns"] || 2
);
Moghunter.bhud_acp_icon_pos_x = Number(
  Moghunter.parameters["ACP Icon X-Axis"] || 143
);
Moghunter.bhud_acp_icon_pos_y = Number(
  Moghunter.parameters["ACP Icon Y-Axis"] || 85
);
Moghunter.bhud_acp_icon_space_x = Number(
  Moghunter.parameters["ACP Icon Space X"] || 0
);
Moghunter.bhud_acp_icon_space_y = Number(
  Moghunter.parameters["ACP Icon Space Y"] || 0
);
Moghunter.bhud_acp_icon_zoomAnime = String(
  Moghunter.parameters["ACP Icon Zoom Anime"] || "true"
);

// LCP METER POSITION
Moghunter.bhud_lcp_meter_visible = String(
  Moghunter.parameters["LCP Meter Visible"] || true
);
Moghunter.bhud_lcp_meter_pos_x = Number(
  Moghunter.parameters["LCP Meter X-Axis"] || 143
);
Moghunter.bhud_lcp_meter_pos_y = Number(
  Moghunter.parameters["LCP Meter Y-Axis"] || 85
);
Moghunter.bhud_lcp_meter_rotation = Number(
  Moghunter.parameters["LCP Meter Angle"] || 0
);
Moghunter.bhud_lcp_meter_flow = String(
  Moghunter.parameters["LCP Meter Flow Anime"] || false
);
Moghunter.bhud_lcp_flowSpd = Number(
  Moghunter.parameters["LCP Meter Flow Speed"] || 2
);

// LCP NUMBER POSITION
Moghunter.bhud_lcp_number_visible = String(
  Moghunter.parameters["LCP Number Visible"] || true
);
Moghunter.bhud_lcp_number_align = Number(
  Moghunter.parameters["LCP Number Align"] || 0
);
Moghunter.bhud_lcp_number_pos_x = Number(
  Moghunter.parameters["LCP Number X-Axis"] || 270
);
Moghunter.bhud_lcp_number_pos_y = Number(
  Moghunter.parameters["LCP Number Y-Axis"] || 70
);
Moghunter.bhud_maxlcp_number_visible = String(
  Moghunter.parameters["MaxLCP Number Visible"] || false
);
Moghunter.bhud_maxlcp_number_pos_x = Number(
  Moghunter.parameters["MaxLCP Number X-Axis"] || 125
);
Moghunter.bhud_maxlcp_number_pos_y = Number(
  Moghunter.parameters["MaxLCP Number Y-Axis"] || 13
);

// LCP ICON POSITION
Moghunter.bhud_lcp_icon_visible = String(
  Moghunter.parameters["LCP Icon Visible"] || "false"
);
Moghunter.bhud_lcp_icon_halfMode = String(
  Moghunter.parameters["LCP Icon Half Mode"] || "false"
);
Moghunter.bhud_lcp_icon_colorMax = Number(
  Moghunter.parameters["LCP Icon Max Colors"] || 2
);
Moghunter.bhud_lcp_icon_rows = Number(
  Moghunter.parameters["LCP Icon Max Rows"] || 10
);
Moghunter.bhud_lcp_icon_cols = Number(
  Moghunter.parameters["LCP Icon Max Columns"] || 2
);
Moghunter.bhud_lcp_icon_pos_x = Number(
  Moghunter.parameters["LCP Icon X-Axis"] || 143
);
Moghunter.bhud_lcp_icon_pos_y = Number(
  Moghunter.parameters["LCP Icon Y-Axis"] || 85
);
Moghunter.bhud_lcp_icon_space_x = Number(
  Moghunter.parameters["LCP Icon Space X"] || 0
);
Moghunter.bhud_lcp_icon_space_y = Number(
  Moghunter.parameters["LCP Icon Space Y"] || 0
);
Moghunter.bhud_lcp_icon_zoomAnime = String(
  Moghunter.parameters["LCP Icon Zoom Anime"] || "true"
);

// INYOKU POSITION
Moghunter.bhud_inyoku_visible = String(
  Moghunter.parameters["Inyoku Visible"] || true
);
Moghunter.bhud_inyoku_align = Number(Moghunter.parameters["Inyoku Align"] || 1);
Moghunter.bhud_inyoku_pos_x = Number(
  Moghunter.parameters["Inyoku X-Axis"] || 65
);
Moghunter.bhud_inyoku_pos_y = Number(
  Moghunter.parameters["Inyoku Y-Axis"] || 153
);

// Level NUMBER POSITION
Moghunter.bhud_level_number_visible = String(
  Moghunter.parameters["Level Number Visible"] || true
);
Moghunter.bhud_level_number_align = Number(
  Moghunter.parameters["Level Number Align"] || 0
);
Moghunter.bhud_level_number_pos_x = Number(
  Moghunter.parameters["Level Number X-Axis"] || 163
);
Moghunter.bhud_level_number_pos_y = Number(
  Moghunter.parameters["Level Number Y-Axis"] || 71
);

// AT METER POSITION
Moghunter.bhud_at_meter_visible = String(
  Moghunter.parameters["ATB Meter Visible"] || true
);
Moghunter.bhud_at_meter_pos_x = Number(
  Moghunter.parameters["ATB Meter X-Axis"] || 69
);
Moghunter.bhud_at_meter_pos_y = Number(
  Moghunter.parameters["ATB Meter Y-Axis"] || 117
);
Moghunter.bhud_at_meter_rotation = Number(
  Moghunter.parameters["ATB Meter Angle"] || 0
);
Moghunter.bhud_at_meter_flow = String(
  Moghunter.parameters["ATB Meter Flow Anime"] || true
);

// STATES POSITION
Moghunter.bhud_states_visible = String(
  Moghunter.parameters["States Visible"] || true
);
Moghunter.bhud_states_pos_x = Number(
  Moghunter.parameters["States X-Axis"] || 102
);
Moghunter.bhud_states_pos_y = Number(
  Moghunter.parameters["States Y-Axis"] || 76
);
Moghunter.bhud_statesType = Number(Moghunter.parameters["States Mode"] || 0);
Moghunter.bhud_statesMax = Number(Moghunter.parameters["States Max"] || 4);
Moghunter.bhud_statesAlign = Number(Moghunter.parameters["States Align"] || 0);

// COMMAND WINDOWS
Moghunter.bhud_auto_pos = Number(
  Moghunter.parameters["Command Auto Adjust"] || 0
);
Moghunter.bhud_com_x = Number(Moghunter.parameters["W Command X-Axis"] || 0);
Moghunter.bhud_com_y = Number(Moghunter.parameters["W Command Y-Axis"] || -15);
Moghunter.bhud_com_layout = String(
  Moghunter.parameters["Layout Command"] || true
);
Moghunter.bhud_com_lay_x = Number(
  Moghunter.parameters["L Command X-Axis"] || -25
);
Moghunter.bhud_com_lay_y = Number(
  Moghunter.parameters["L Command Y-Axis"] || -35
);
Moghunter.bhud_com_width = Number(
  Moghunter.parameters["W Command Width"] || 192
);
Moghunter.bhud_com_height = Number(
  Moghunter.parameters["W Command Height"] || 180
);
Moghunter.bhud_com_slideX = Number(
  Moghunter.parameters["W Command Slide X"] || 0
);
Moghunter.bhud_com_slideY = Number(
  Moghunter.parameters["W Command Slide Y"] || 64
);

// PARTY WINDOWS
Moghunter.bhud_party_x = Number(Moghunter.parameters["W Party X-Axis"] || 325);
Moghunter.bhud_party_y = Number(Moghunter.parameters["W Party Y-Axis"] || 170);
Moghunter.bhud_party_layout = String(
  Moghunter.parameters["Layout Party"] || true
);
Moghunter.bhud_party_lay_x = Number(
  Moghunter.parameters["L Party X-Axis"] || -325
);
Moghunter.bhud_party_lay_y = Number(
  Moghunter.parameters["L Party Y-Axis"] || -42
);
Moghunter.bhud_party_width = Number(
  Moghunter.parameters["W Party Width"] || 192
);
Moghunter.bhud_party_height = Number(
  Moghunter.parameters["W Party Height"] || 110
);
Moghunter.bhud_party_slide_x = Number(
  Moghunter.parameters["W Party Slide X"] || 0
);
Moghunter.bhud_party_slide_y = Number(
  Moghunter.parameters["W Party Slide Y"] || -150
);

// HELP WINDOW
Moghunter.bhud_help_x = Number(Moghunter.parameters["W Help X-Axis"] || 0);
Moghunter.bhud_help_y = Number(Moghunter.parameters["W Help Y-Axis"] || 0);
Moghunter.bhud_help_layout = String(
  Moghunter.parameters["Layout Help"] || true
);
Moghunter.bhud_help_lay_x = Number(Moghunter.parameters["L Help X-Axis"] || 0);
Moghunter.bhud_help_lay_y = Number(Moghunter.parameters["L Help Y-Axis"] || 0);
Moghunter.bhud_help_width = Number(Moghunter.parameters["W Help Width"] || 816);
Moghunter.bhud_help_height = Number(
  Moghunter.parameters["W Help Height"] || 108
);
Moghunter.bhud_help_slide_x = Number(
  Moghunter.parameters["W Help Slide X"] || 0
);
Moghunter.bhud_help_slide_y = Number(
  Moghunter.parameters["W Help Slide Y"] || -150
);

// SKILL WINDOW
Moghunter.bhud_skill_x = Number(Moghunter.parameters["W Skill X-Axis"] || 0);
Moghunter.bhud_skill_y = Number(Moghunter.parameters["W Skill Y-Axis"] || 444);
Moghunter.bhud_skill_layout = String(
  Moghunter.parameters["Layout Skill"] || true
);
Moghunter.bhud_skill_lay_x = Number(
  Moghunter.parameters["L Skill X-Axis"] || 0
);
Moghunter.bhud_skill_lay_y = Number(
  Moghunter.parameters["L Skill Y-Axis"] || -67
);
Moghunter.bhud_skill_width = Number(
  Moghunter.parameters["W Skill Width"] || 816
);
Moghunter.bhud_skill_height = Number(
  Moghunter.parameters["W Skill Height"] || 180
);
Moghunter.bhud_skill_maxcols = Number(
  Moghunter.parameters["W Skill maxCols"] || 2
);
Moghunter.bhud_skill_slide_x = Number(
  Moghunter.parameters["W Skill Slide X"] || 0
);
Moghunter.bhud_skill_slide_y = Number(
  Moghunter.parameters["W Skill Slide Y"] || 100
);

// ITEM WINDOW
Moghunter.bhud_item_x = Number(Moghunter.parameters["W Item X-Axis"] || 0);
Moghunter.bhud_item_y = Number(Moghunter.parameters["W Item Y-Axis"] || 444);
Moghunter.bhud_item_layout = String(
  Moghunter.parameters["Layout Item"] || true
);
Moghunter.bhud_item_lay_x = Number(Moghunter.parameters["L Item X-Axis"] || 0);
Moghunter.bhud_item_lay_y = Number(
  Moghunter.parameters["L Item Y-Axis"] || -67
);
Moghunter.bhud_item_width = Number(Moghunter.parameters["W Item Width"] || 816);
Moghunter.bhud_item_height = Number(
  Moghunter.parameters["W Item Height"] || 180
);
Moghunter.bhud_item_maxcols = Number(
  Moghunter.parameters["W Item maxCols"] || 2
);
Moghunter.bhud_item_slide_x = Number(
  Moghunter.parameters["W Item Slide X"] || 0
);
Moghunter.bhud_item_slide_y = Number(
  Moghunter.parameters["W Item Slide Y"] || 150
);

// ACTOR WINDOWS
Moghunter.bhud_actor_x = Number(Moghunter.parameters["W Actor X-Axis"] || 0);
Moghunter.bhud_actor_y = Number(Moghunter.parameters["W Actor Y-Axis"] || 444);
Moghunter.bhud_actor_layout = String(
  Moghunter.parameters["Layout Actor"] || true
);
Moghunter.bhud_actor_lay_x = Number(
  Moghunter.parameters["L Actor X-Axis"] || 0
);
Moghunter.bhud_actor_lay_y = Number(
  Moghunter.parameters["L Actor Y-Axis"] || -67
);
Moghunter.bhud_actor_width = Number(
  Moghunter.parameters["W Actor Width"] || 816
);
Moghunter.bhud_actor_height = Number(
  Moghunter.parameters["W Actor Height"] || 180
);
Moghunter.bhud_actor_maxcols = Number(
  Moghunter.parameters["W Actor maxCols"] || 1
);
Moghunter.bhud_actor_slide_x = Number(
  Moghunter.parameters["W Actor Slide X"] || 0
);
Moghunter.bhud_actor_slide_y = Number(
  Moghunter.parameters["W Actor Slide Y"] || 150
);

// ENEMY WINDOWS
Moghunter.bhud_enemy_x = Number(Moghunter.parameters["W Enemy X-Axis"] || 0);
Moghunter.bhud_enemy_y = Number(Moghunter.parameters["W Enemy Y-Axis"] || 444);
Moghunter.bhud_enemy_layout = String(
  Moghunter.parameters["Layout Enemy"] || true
);
Moghunter.bhud_enemy_lay_x = Number(
  Moghunter.parameters["L Enemy X-Axis"] || 0
);
Moghunter.bhud_enemy_lay_y = Number(
  Moghunter.parameters["L Enemy Y-Axis"] || -67
);
Moghunter.bhud_enemy_width = Number(
  Moghunter.parameters["W Enemy Width"] || 816
);
Moghunter.bhud_enemy_height = Number(
  Moghunter.parameters["W Enemy Height"] || 180
);
Moghunter.bhud_enemy_maxcols = Number(
  Moghunter.parameters["W Enemy maxCols"] || 2
);
Moghunter.bhud_enemy_slide_x = Number(
  Moghunter.parameters["W Enemy Slide X"] || 0
);
Moghunter.bhud_enemy_slide_y = Number(
  Moghunter.parameters["W Enemy Slide Y"] || 150
);

// Custom Position
Moghunter.bhud_custom_pos = [];
for (var i = 0; i < 8; i++) {
  Moghunter.bhud_custom_pos[i] =
    Moghunter.parameters["Custom Position " + String(i + 1)] || null;
}

//===========================================================================
// ** Sprite Animation
//===========================================================================

//==============================
// * Update Position
//==============================
var _mog_bhud_sprAnim_updatePosition =
  Sprite_Animation.prototype.updatePosition;
Sprite_Animation.prototype.updatePosition = function () {
  _mog_bhud_sprAnim_updatePosition.call(this);
  if (this._battler) {
    if (this._animation.position === 3 && this.x === 0 && this.y === 0) {
      this.x = Graphics.boxWidth / 2;
      this.y = Graphics.boxHeight / 2;
    }
  }
};

//===========================================================================
// ** ImageManager
//===========================================================================

//==============================
// * BHud
//==============================
ImageManager.loadBHud = function (filename) {
  return this.loadBitmap("img/battlehud/", filename, 0, true);
};

//===========================================================================
// ** ImageManager
//===========================================================================

//==============================
// * BHud
//==============================
ImageManager.loadBHud = function (filename) {
  return this.loadBitmap("img/battlehud/", filename, 0, true);
};

//===========================================================================
// ** Game_Interpreter
//===========================================================================

//==============================
// * PluginCommand
//==============================
var _alias_mog_bhud_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
  _alias_mog_bhud_pluginCommand.call(this, command, args);
  if (command === "bhud_disable") {
    $gameSystem._bhud_visible = false;
  }
  if (command === "bhud_enable") {
    $gameSystem._bhud_visible = true;
  }
  return true;
};

//===========================================================================
// ** Game_Temp
//===========================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function () {
  _alias_mog_bhud_temp_initialize.call(this);
  this._bhud_position = [];
  this._bhud_position_active = null;
  this._bhudFaceAnime = false;
  this._battleEnd = false;
  this._bhud_dp = false;
  this._refreshBhud = false;
  this._forceCreateBattleHud = false;
  this._forceRemoveBattleHud = false;
};

//===========================================================================
// ** Game_System
//===========================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  _alias_mog_bhud_sys_initialize.call(this);
  this._bhud_position = [];
  for (var i = 0; i < 8; i++) {
    this._bhud_position[i] = this.set_hudcp(Moghunter.bhud_custom_pos[i]);
  }
  this._bhud_auto_com = false;
  this._bhud_pos_mode = 0;
  this._bhud_visible = true;
  this._bhudFaceBattler =
    String(Moghunter.bhud_face_visible) == "true" && !$dataSystem.optSideView
      ? true
      : false;
  if (String(Moghunter.bhud_pos_mode) == "true") {
    this._bhud_pos_mode = 1;
  }
  if (Number(Moghunter.bhud_auto_pos) == 0) {
    this._bhud_auto_com = true;
  }
};

//==============================
// * set Hudcp
//==============================
Game_System.prototype.set_hudcp = function (value) {
  if (!value) {
    return null;
  }
  var s = value.split(",");
  if (!s[0] || !s[1]) {
    return null;
  }
  return [Number(s[0]), Number(s[1])];
};

//===========================================================================
// ** Game Interpreter
//===========================================================================

//==============================
// * Command129
//==============================
var _alias_mog_bhud_command129 = Game_Interpreter.prototype.command129;
Game_Interpreter.prototype.command129 = function () {
  _alias_mog_bhud_command129.call(this);
  $gameTemp._refresh_Bhud = true;
  return true;
};

//===========================================================================
// ** Game Party
//===========================================================================

//==============================
// * max Battle Members
//==============================
Game_Party.prototype.maxBattleMembers = function () {
  if (Imported.MOG_ChronoEngine) {
    Math.min(Math.max(Number(Moghunter.ras_maxBattleMembers), 1), 4);
  }
  return Math.max(Number(Moghunter.bhud_max_battle_members), 1);
};

//===========================================================================
// ** BattleManager
//===========================================================================

//==============================
// * processVictory
//==============================
var _alias_mog_bhud_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function () {
  $gameTemp._battleEnd = true;
  _alias_mog_bhud_processVictory.call(this);
};

//==============================
// * processAbort
//==============================
var _alias_mog_bhud_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function () {
  $gameTemp._battleEnd = true;
  _alias_mog_bhud_processAbort.call(this);
};

//==============================
// * processDefeat
//==============================
var _alias_mog_bhud_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function () {
  $gameTemp._battleEnd = true;
  _alias_mog_bhud_processDefeat.call(this);
};

//===========================================================================
// ** Game BattlerBase
//===========================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_gbat_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function () {
  _alias_mog_bhud_gbat_initMembers.call(this);
  this.need_refresh_bhud_states = false;
  this._bhud_face_data = [0, 0, 0, 0];
  this._face_pos = [0, 0];
};

//==============================
// * addNewState
//==============================
var _alias_mog_bhud_addNewState = Game_BattlerBase.prototype.addNewState;
Game_BattlerBase.prototype.addNewState = function (stateId) {
  _alias_mog_bhud_addNewState.call(this, stateId);
  this.need_refresh_bhud_states = true;
};

//==============================
// * eraseState
//==============================
var _alias_mog_bhud_eraseState = Game_BattlerBase.prototype.eraseState;
Game_BattlerBase.prototype.eraseState = function (stateId) {
  _alias_mog_bhud_eraseState.call(this, stateId);
  this.need_refresh_bhud_states = true;
};

//===========================================================================
// ** Game Battler
//===========================================================================

//==============================
// ** iniMembers
//==============================
var _mog_bhud_gbattler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function () {
  _mog_bhud_gbattler_initMembers.call(this);
  this._bhud = {};
  this._bhud.faceBreath = false;
};

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function () {
  if (this.isEnemy()) {
    return this.enemy().note.split(/[\r\n]+/);
  }
  if (this.isActor()) {
    return this.actor().note.split(/[\r\n]+/);
  }
};

//==============================
// ** get Bmotion Idle
//==============================
Game_Battler.prototype.checkBhudNoteTags = function () {
  this.notetags().forEach(function (note) {
    var note_data = note.split(": ");
    if (note_data[0].toLowerCase() == "face breath effect") {
      this._bhud.faceBreath = true;
    }
  }, this);
};

//==============================
// *
//==============================
var _mog_bhud_gactor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function () {
  _mog_bhud_gactor_initMembers.call(this);
};

//===========================================================================
// ** Game Action
//===========================================================================

//==============================
// * Apply
//==============================
var _alias_mog_bhud_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function (target) {
  var oldhp = target.hp;
  _alias_mog_bhud_apply.call(this, target);
  if (target.isActor()) {
    if (oldhp > target.hp) {
      target._bhud_face_data = [60, 0, 3, 60];
    } else if (oldhp < target.hp) {
      target._bhud_face_data = [0, 70, 1, 70];
    }
  }
};

//==============================
// * Prepare
//==============================
var _alias_mog_bmhud_action_prepare = Game_Action.prototype.prepare;
Game_Action.prototype.prepare = function () {
  _alias_mog_bmhud_action_prepare.call(this);
  if (this.subject().isActor() && String(Moghunter.bhud_face_zoom) === "true") {
    this.subject()._bhud_face_data = [0, 70, 2, 70];
  }
};

//===========================================================================
// ** Game Actor
//===========================================================================

//==============================
// * Gain HP
//==============================
var _alias_mog_bhud_gainHp = Game_Actor.prototype.gainHp;
Game_Actor.prototype.gainHp = function (value) {
  _alias_mog_bhud_gainHp.call(this, value);
  this._bhud_face_data[3] += 1;
};

//==============================
// * Recover All
//==============================
var _alias_mog_bhud_recoverAll = Game_Actor.prototype.recoverAll;
Game_Actor.prototype.recoverAll = function () {
  _alias_mog_bhud_recoverAll.call(this);
  this._bhud_face_data[3] += 1;
};

//===========================================================================
// ** Window_BattleStatus
//===========================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_initialize = Window_BattleStatus.prototype.initialize;
Window_BattleStatus.prototype.initialize = function () {
  _alias_mog_bhud_initialize.call(this);
  this.visible = false;
};

//===========================================================================
// ** Window_BattleSkill
//===========================================================================

//==============================
// * windowWidth
//==============================
Window_BattleSkill.prototype.windowWidth = function () {
  return Moghunter.bhud_skill_width;
};

//==============================
// * maxCols
//==============================
Window_BattleSkill.prototype.maxCols = function () {
  return Moghunter.bhud_skill_maxcols;
};

//===========================================================================
// ** Window_BattleItem
//===========================================================================

//==============================
// * windowWidth
//==============================
Window_BattleItem.prototype.windowWidth = function () {
  return Moghunter.bhud_item_width;
};

//==============================
// * maxCols
//==============================
Window_BattleItem.prototype.maxCols = function () {
  return Moghunter.bhud_item_maxcols;
};

//===========================================================================
// ** Window_BattleActor
//===========================================================================

//==============================
// * Initialize
//==============================
Window_BattleActor.prototype.windowWidth = function () {
  return Moghunter.bhud_actor_width;
};

//==============================
// * maxCols
//==============================
Window_BattleActor.prototype.maxCols = function () {
  return Moghunter.bhud_actor_maxcols;
};

//===========================================================================
// ** Window_BattleEnemy
//===========================================================================

//==============================
// * windowWidth
//==============================
Window_BattleEnemy.prototype.windowWidth = function () {
  return Moghunter.bhud_enemy_width;
};

//==============================
// * maxCols
//==============================
Window_BattleEnemy.prototype.maxCols = function () {
  return Moghunter.bhud_enemy_maxcols;
};

//===========================================================================
// ** Window Actor Command
//===========================================================================

//==============================
// * initialize
//==============================
var _alias_mog_bhud_wActCom_initialize =
  Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function () {
  _alias_mog_bhud_wActCom_initialize.call(this);
  this._com_mode = Number($gameSystem._bhud_pos_mode);
  this._force_hide_duration = 0;
  this.org = [Moghunter.bhud_com_x, Moghunter.bhud_com_y];
  this.org2 = [
    this.org[0] + Moghunter.bhud_com_slideX,
    this.org[1] + Moghunter.bhud_com_slideY,
  ];
  this.slide =
    Moghunter.bhud_com_slideX === 0 && Moghunter.bhud_com_slideY === 0
      ? false
      : true;
  this._actorVis != this._actor;
  this.xp = -1;
  this.yp = -1;
};

//==============================
// * Activate
//==============================
var _alias_mog_bhud_wActCom_activate = Window_ActorCommand.prototype.activate;
Window_ActorCommand.prototype.activate = function () {
  _alias_mog_bhud_wActCom_activate.call(this);
  if (String(Moghunter.bhud_com_layout) === "true") {
    this._force_hide_duration = 1;
  }
};

//==============================
// * Sprite Move To
//==============================
Window_ActorCommand.prototype.sprite_move_to = function (value, real_value) {
  if (value === real_value) {
    return value;
  }
  var dnspeed = 1 + Math.abs(value - real_value) / 12;
  if (value > real_value) {
    value -= dnspeed;
    if (value < real_value) {
      value = real_value;
    }
  } else if (value < real_value) {
    value += dnspeed;
    if (value > real_value) {
      value = real_value;
    }
  }
  return Math.floor(value);
};

//==============================
// ** slideWindow
//==============================
Window_ActorCommand.prototype.slideWindow = function (win, vmode) {
  var vm = vmode ? win.active : win.visible;
  if (vm) {
    var np = [win.org[0], win.org[1]];
    win.contentsOpacity += 15;
  } else {
    var np = [win.org2[0], win.org2[1]];
    win.contentsOpacity = 0;
  }
  win.x = this.sprite_move_to(win.x, np[0]);
  win.y = this.sprite_move_to(win.y, np[1]);
};

//==============================
// ** update Position
//==============================
Window_ActorCommand.prototype.updatePosition = function () {
  if (Imported.MOG_BattleCommands) {
    this.updateBattleCommands();
  } else {
    if (!this.slide) {
      this.updatePosN();
    } else {
      this.updatePosS();
    }
  }
};

//==============================
// ** update Battle Commands
//==============================
Window_ActorCommand.prototype.updateBattleCommands = function () {
  if ($gameTemp._bhud_position_active) {
    this.visible = this.active;
    if ($gameSystem._bhud_auto_com) {
      this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
      if (this._com_mode === 0) {
        this.y =
          $gameTemp._bhud_position_active[1] +
          Moghunter.bhud_com_y -
          this.height;
      } else {
        this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y;
      }
    } else {
      this.x = Moghunter.bhud_com_x;
      this.y = Moghunter.bhud_com_y;
    }
  }
};

//==============================
// ** update Position S
//==============================
Window_ActorCommand.prototype.updatePosS = function () {
  if ($gameTemp._bhud_position_active) {
    this.visible = this.active;
    if ($gameSystem._bhud_auto_com) {
      if (
        this.xp != $gameTemp._bhud_position_active[0] ||
        this.yp != $gameTemp._bhud_position_active[1]
      ) {
        this.xp = $gameTemp._bhud_position_active[0];
        this.yp = $gameTemp._bhud_position_active[1];
        this.org[0] = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
        if (this._com_mode === 0) {
          this.org[1] =
            $gameTemp._bhud_position_active[1] +
            Moghunter.bhud_com_y -
            this.height;
        } else {
          this.org[1] =
            $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y;
        }
        this.org2 = [
          this.org[0] + Moghunter.bhud_com_slideX,
          this.org[1] + Moghunter.bhud_com_slideY,
        ];
        if (this._actorVis != this._actor) {
          this.x = this.org2[0];
          this.y = this.org2[1];
          this._actorVis = this._actor;
        }
      }
      this.slideWindow(this, false);
    } else {
      this.slideWindow(this, false);
    }
  }
};

//==============================
// ** update Position N
//==============================
Window_ActorCommand.prototype.updatePosN = function () {
  if ($gameTemp._bhud_position_active) {
    this.visible = this.active;
    if ($gameSystem._bhud_auto_com) {
      this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
      if (this._com_mode === 0) {
        this.y =
          $gameTemp._bhud_position_active[1] +
          Moghunter.bhud_com_y -
          this.height;
      } else {
        this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y;
      }
    } else {
      this.x = Moghunter.bhud_com_x;
      this.y = Moghunter.bhud_com_y;
    }
  }
};

//==============================
// * Update
//==============================
var _alias_mog_bhud_wcom_update = Window_ActorCommand.prototype.update;
Window_ActorCommand.prototype.update = function () {
  _alias_mog_bhud_wcom_update.call(this);
  this.updatePosition();
  if (this._force_hide_duration > 0) {
    this._force_hide_duration -= 1;
    this.visible = false;
  }
};

//===========================================================================
// ** Sprite Actor
//===========================================================================

//==============================
// * Initialize
//==============================
var _alias_bhud_sprt_actor_initialize = Sprite_Actor.prototype.initialize;
Sprite_Actor.prototype.initialize = function (battler) {
  _alias_bhud_sprt_actor_initialize.call(this, battler);
  this._sprite_face = false;
  if (String(Moghunter.bhud_face_visible) == "true") {
    this._sprite_face = true;
  }
};

//==============================
// * Damage Offset X
//==============================
Sprite_Actor.prototype.damageOffsetX = function () {
  if (!$gameSystem.isSideView() && this._sprite_face) {
    return 0;
  }
  return -32;
};

//==============================
// * update Position
//==============================
var _alias_mog_bhud_sprt_actor_updatePosition =
  Sprite_Battler.prototype.updatePosition;
Sprite_Battler.prototype.updatePosition = function () {
  if (!$gameSystem.isSideView() && this._sprite_face) {
    if (this._battler && $gameTemp._bhud_position[this._battler.index()]) {
      this.x =
        $gameTemp._bhud_position[this._battler.index()][0] +
        Moghunter.bhud_face_pos_x;
      this.y =
        $gameTemp._bhud_position[this._battler.index()][1] +
        Moghunter.bhud_face_pos_y;
      return;
    }
  }
  _alias_mog_bhud_sprt_actor_updatePosition.call(this);
};

//==============================
// * Setup Animation
//==============================
var _alias_mog_bhud_sprt_actor_setupAnimation =
  Sprite_Battler.prototype.setupAnimation;
Sprite_Actor.prototype.setupAnimation = function () {
  if (!$gameSystem.isSideView() && this._sprite_face) {
    while (this._battler.isAnimationRequested()) {
      var data = this._battler.shiftAnimation();
      var animation = $dataAnimations[data.animationId];
      var mirror = data.mirror;
      var delay = animation.position === 3 ? 0 : data.delay;
      this.startAnimation(animation, mirror, delay);
      for (var i = 0; i < this._animationSprites.length; i++) {
        var sprite = this._animationSprites[i];
        sprite.visible = true;
      }
    }
    return;
  }
  _alias_mog_bhud_sprt_actor_setupAnimation.call(this);
};

//==============================
// * Setup Damage Popup
//==============================
var _alias_mog_bhud_sprt_actor_setupDamagePopup =
  Sprite_Battler.prototype.setupDamagePopup;
Sprite_Actor.prototype.setupDamagePopup = function () {
  if (!$gameSystem.isSideView() && this._sprite_face) {
    if (this._battler.isDamagePopupRequested()) {
      var sprite = new Sprite_Damage();
      sprite.x = this.x + this.damageOffsetX();
      sprite.y = this.y + this.damageOffsetY();
      sprite.setup(this._battler);
      this._damages.push(sprite);
      this.parent.addChild(sprite);
      this._battler.clearDamagePopup();
      this._battler.clearResult();
    }
    return;
  }
  _alias_mog_bhud_sprt_actor_setupDamagePopup.call(this);
};

//==============================
// ** update Main
//==============================
var _mog_bhud_sprActor_updateMain = Sprite_Actor.prototype.updateMain;
Sprite_Actor.prototype.updateMain = function () {
  _mog_bhud_sprActor_updateMain.call(this);
  if (this.isAnimationPlaying()) {
    $gameTemp._bhudFaceAnime = 3;
  }
};

//===========================================================================
// ** Spriteset Battle
//===========================================================================

//==============================
// ** update Actors
//==============================
var _mog_bhud_sprbat_updateActors = Spriteset_Battle.prototype.updateActors;
Spriteset_Battle.prototype.updateActors = function () {
  if (!$gameSystem.isSideView()) {
    return;
  }
  _mog_bhud_sprbat_updateActors.call(this);
};

//==============================
// * Is Busy
//==============================
Spriteset_Battle.prototype.isBusy = function () {
  if ($gameSystem._bhudFaceBattler) {
    return (
      this.isAnimationPlaying() ||
      this.isAnyoneMoving() ||
      $gameTemp._bhudFaceAnime > 0
    );
  }
  if (Imported.YEP_BattleEngineCore) {
    return false;
  }
  return this.isAnimationPlaying() || this.isAnyoneMoving();
};

//===========================================================================
// ** Scene Base
//===========================================================================

//==============================
// ** create Hud Field ** fixed by nekoma otobuki
//==============================
Scene_Base.prototype.createHudField = function () {
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var x = (Graphics.width - width) / 2;
  var y = (Graphics.height - height) / 2;
  this._hudField = new Sprite();
  this._hudField.setFrame(x, y, width, height);
  this._hudField.z = 10;
  this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function () {
  this._hudField.children.sort(function (a, b) {
    return a.mz - b.mz;
  });
};

//==============================
// ** create Battle Hud
//==============================
Scene_Base.prototype.createBattleHud = function () {
  if (String(Moghunter.bhud_screen_layout) === "true") {
    this.createBattleHudScreenLayout();
  }
  $gameTemp.refresh_Bhud = false;
  $gameTemp._battleEnd = false;
  this._com_mode = Number($gameSystem._bhud_pos_mode);
  this._battle_hud = [];
  for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
    this._battle_hud[i] = new Battle_Hud(i);
    this._battle_hud[i].mz = 110;
    this._hudField.addChild(this._battle_hud[i]);
  }
};

//==============================
// ** remove Battle Hud
//==============================
Scene_Base.prototype.removeBattleHud = function () {
  if (!this._battle_hud) {
    return;
  }
  if (this._screen_layout) {
    this._hudField.removeChild(this._screen_layout);
  }
  for (var i = 0; i < this._battle_hud.length; i++) {
    this._hudField.removeChild(this._battle_hud[i]);
  }
  this._battle_hud = null;
};

//==============================
// * Create Battle Hud Screen
//==============================
Scene_Base.prototype.createBattleHudScreenLayout = function () {
  this._screen_layout = new Sprite(ImageManager.loadBHud("Layout_Screen"));
  this._screen_layout.opacity = 0;
  this._screen_layout.x = Moghunter.bhud_screen_layout_x;
  this._screen_layout.y = Moghunter.bhud_screen_layout_y;
  this._screen_layout.mz = 100;
  this._hudField.addChild(this._screen_layout);
};

//==============================
// * Update Battle Hud visible
//==============================
Scene_Base.prototype.updateBattleHudVisible = function () {
  if (this.isBattleHudVisible()) {
    this._screen_layout.opacity += 10;
  } else {
    this._screen_layout.opacity -= 10;
  }
};

//==============================
// * Is Battle Hud Visible
//==============================
Scene_Base.prototype.isBattleHudVisible = function () {
  if ($gameMessage.isBusy()) {
    return false;
  }
  if ($gameTemp._battleEnd) {
    return false;
  }
  if (!$gameSystem._bhud_visible) {
    return false;
  }
  return true;
};

//==============================
// ** Refresh Battle Hud
//==============================
Scene_Base.prototype.refreshBattleHud = function () {
  if (!this._battle_hud) {
    return;
  }
  $gameTemp._refresh_Bhud = false;
  for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
    this._battle_hud[i].refresh_bhud();
  }
};

//==============================
// ** force Create Battle Hud
//==============================
Scene_Base.prototype.forceCreateBattleHud = function () {
  $gameTemp._forceCreateBattleHud = false;
  this.forceRemoveBattleHud();
  this.createBattleHud();
  this.sortMz();
};

//==============================
// ** force Remove Battle Hud
//==============================
Scene_Base.prototype.forceRemoveBattleHud = function () {
  $gameTemp._forceRemoveBattleHud = false;
  this.removeBattleHud();
};

//==============================
// ** Update Battle Hud
//==============================
Scene_Base.prototype.updateBatteHud = function () {
  if (this._screen_layout) {
    this.updateBattleHudVisible();
  }
  if ($gameTemp._refresh_Bhud) {
    this.refreshBattleHud();
  }
};

//==============================
// ** createActorsF
//==============================
Scene_Base.prototype.createActorsF = function () {
  if (this._actorSprites) {
    for (var i = 0; i < this._actorSprites.length; i++) {
      this._hudField.removeChild(this._actorSprites[i]);
    }
  }
  this._actorSprites = [];
  for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
    this._actorSprites[i] = new Sprite_Actor();
    this._actorSprites[i].mz = 110;
    this._hudField.addChild(this._actorSprites[i]);
  }
};

//==============================
// ** Update
//==============================
var _mog_bhud_Smap_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
  _mog_bhud_Smap_update.call(this);
  if ($gameTemp._forceCreateBattleHud) {
    this.forceCreateBattleHud();
  }
  if ($gameTemp._forceRemoveBattleHud) {
    this.forceRemoveBattleHud();
  }
  if (this._battle_hud) {
    this.updateBatteHud();
  }
};

//===========================================================================
// ** Scene Battle
//===========================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_bhud_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function () {
  _mog_bhud_sbattle_createSpriteset.call(this);
  if (!this._hudField) {
    this.createHudField();
  }
  this.createBattleHudSB();
};

//==============================
// ** create Battle Hud SB
//==============================
Scene_Battle.prototype.createBattleHudSB = function () {
  this.createBattleHud();
  if (!$gameSystem.isSideView()) {
    this.createActorsF();
  }
};

//==============================
// ** update Actors
//==============================
Scene_Battle.prototype.updateActors = function () {
  var members = $gameParty.battleMembers();
  for (var i = 0; i < this._actorSprites.length; i++) {
    this._actorSprites[i].setBattler(members[i]);
  }
};

//==============================
// ** create Spriteset
//==============================
var _mog_bhud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function () {
  _mog_bhud_sMap_createSpriteset.call(this);
  if (!this._hudField) {
    this.createHudField();
  }
};

//==============================
// ** createWindowLayer
//==============================
var _alias_mog_bhud_createWindowLayer =
  Scene_Battle.prototype.createWindowLayer;
Scene_Battle.prototype.createWindowLayer = function () {
  this.create_layout_window();
  _alias_mog_bhud_createWindowLayer.call(this);
};

//==============================
// ** createAllWindows
//==============================
var _alias_mog_bhud_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function () {
  _alias_mog_bhud_createAllWindows.call(this);
  // ACTOR COMMAND ---------------------------------------------------------------------
  this._actorCommandWindow.x = Moghunter.bhud_com_x;
  this._actorCommandWindow.y = Moghunter.bhud_com_y;
  this._actorCommandWindow.vis = this._actorCommandWindow.visible;
  this._actorCommandWindow.width = Moghunter.bhud_com_width;
  this._actorCommandWindow.height = Moghunter.bhud_com_height;
  if (String(Moghunter.bhud_com_layout) === "true") {
    this._actorCommandWindow.opacity = 0;
  }
  // PARTY COMMAND ---------------------------------------------------------------------
  this._partyCommandWindow.x = Moghunter.bhud_party_x;
  this._partyCommandWindow.y = Moghunter.bhud_party_y;
  this._partyCommandWindow.org = [
    Moghunter.bhud_party_x,
    Moghunter.bhud_party_y,
  ];
  this._partyCommandWindow.org2 = [
    this._partyCommandWindow.org[0] + Moghunter.bhud_party_slide_x,
    this._partyCommandWindow.org[1] + Moghunter.bhud_party_slide_y,
  ];
  this._partyCommandWindow.slide =
    Moghunter.bhud_party_slide_x === 0 && Moghunter.bhud_party_slide_y === 0
      ? false
      : true;
  this._partyCommandWindow.vis = this._partyCommandWindow.visible;
  this._partyCommandWindow.width = Moghunter.bhud_party_width;
  this._partyCommandWindow.height = Moghunter.bhud_party_height;
  if (String(Moghunter.bhud_party_layout) === "true") {
    this._partyCommandWindow.opacity = 0;
  }
  // HELP WINDOW ---------------------------------------------------------------------
  this._helpWindow.x = Moghunter.bhud_help_x;
  this._helpWindow.y = Moghunter.bhud_help_y;
  this._helpWindow.org = [this._helpWindow.x, this._helpWindow.y];
  this._helpWindow.org2 = [
    this._helpWindow.org[0] + Moghunter.bhud_help_slide_x,
    this._helpWindow.org[1] + Moghunter.bhud_help_slide_y,
  ];
  this._helpWindow.slide =
    Moghunter.bhud_help_slide_x === 0 && Moghunter.bhud_help_slide_y === 0
      ? false
      : true;
  this._helpWindow.vis = this._helpWindow.visible;
  this._helpWindow.width = Moghunter.bhud_help_width;
  this._helpWindow.height = Moghunter.bhud_help_height;
  if (String(Moghunter.bhud_help_layout) === "true") {
    this._helpWindow.opacity = 0;
  }
  // SKILL WINDOW ---------------------------------------------------------------------
  this._skillWindow.x = Moghunter.bhud_skill_x;
  this._skillWindow.y = Moghunter.bhud_skill_y;
  this._skillWindow.org = [Moghunter.bhud_skill_x, Moghunter.bhud_skill_y];
  this._skillWindow.org2 = [
    this._skillWindow.org[0] + Moghunter.bhud_skill_slide_x,
    this._skillWindow.org[1] + Moghunter.bhud_skill_slide_y,
  ];
  this._skillWindow.slide =
    Moghunter.bhud_skill_slide_x === 0 && Moghunter.bhud_skill_slide_y === 0
      ? false
      : true;
  this._skillWindow.vis = this._skillWindow.visible;
  this._skillWindow.width = Moghunter.bhud_skill_width;
  this._skillWindow.height = Moghunter.bhud_skill_height;
  if (String(Moghunter.bhud_skill_layout) === "true") {
    this._skillWindow.opacity = 0;
  }
  // ITEM COMMAND ---------------------------------------------------------------------
  this._itemWindow.x = Moghunter.bhud_item_x;
  this._itemWindow.y = Moghunter.bhud_item_y;
  this._itemWindow.org = [this._itemWindow.x, this._itemWindow.y];
  this._itemWindow.org2 = [
    this._itemWindow.org[0] + Moghunter.bhud_item_slide_x,
    this._itemWindow.org[1] + Moghunter.bhud_item_slide_y,
  ];
  this._itemWindow.slide =
    Moghunter.bhud_item_slide_x === 0 && Moghunter.bhud_item_slide_y === 0
      ? false
      : true;
  this._itemWindow.vis = this._itemWindow.visible;
  this._itemWindow.width = Moghunter.bhud_item_width;
  this._itemWindow.height = Moghunter.bhud_item_height;
  if (String(Moghunter.bhud_item_layout) === "true") {
    this._itemWindow.opacity = 0;
  }
  // ACTOR WINDOW ---------------------------------------------------------------------
  this._actorWindow.x = Moghunter.bhud_actor_x;
  this._actorWindow.y = Moghunter.bhud_actor_y;
  this._actorWindow.org = [this._actorWindow.x, this._actorWindow.y];
  this._actorWindow.org2 = [
    this._actorWindow.org[0] + Moghunter.bhud_actor_slide_x,
    this._actorWindow.org[1] + Moghunter.bhud_actor_slide_y,
  ];
  this._actorWindow.slide =
    Moghunter.bhud_actor_slide_x === 0 && Moghunter.bhud_actor_slide_y === 0
      ? false
      : true;
  this._actorWindow.vis = this._actorWindow.visible;
  this._actorWindow.width = Moghunter.bhud_actor_width;
  this._actorWindow.height = Moghunter.bhud_actor_height;
  if (String(Moghunter.bhud_actor_layout) === "true") {
    this._actorWindow.opacity = 0;
  }
  // ENEMY WINDOW ---------------------------------------------------------------------
  this._enemyWindow.x = Moghunter.bhud_enemy_x;
  this._enemyWindow.y = Moghunter.bhud_enemy_y;
  this._enemyWindow.org = [Moghunter.bhud_enemy_x, Moghunter.bhud_enemy_y];
  this._enemyWindow.org2 = [
    this._enemyWindow.org[0] + Moghunter.bhud_enemy_slide_x,
    this._enemyWindow.org[1] + Moghunter.bhud_enemy_slide_y,
  ];
  this._enemyWindow.slide =
    Moghunter.bhud_enemy_slide_x === 0 && Moghunter.bhud_enemy_slide_y === 0
      ? false
      : true;
  this._enemyWindow.vis = this._enemyWindow.visible;
  this._enemyWindow.width = Moghunter.bhud_enemy_width;
  this._enemyWindow.height = Moghunter.bhud_enemy_height;
  if (String(Moghunter.bhud_enemy_layout) === "true") {
    this._enemyWindow.opacity = 0;
  }
};

//==============================
// ** create Layout Window
//==============================
Scene_Battle.prototype.create_layout_window = function () {
  this._layoutField = new Sprite();
  this.addChild(this._layoutField);
  if (String(Moghunter.bhud_com_layout) === "true") {
    this._com_layout = new Sprite(ImageManager.loadBHud("Layout_Command"));
    this._com_layout.x = Moghunter.bhud_com_lay_x;
    this._com_layout.y = Moghunter.bhud_com_lay_y;
    this._com_layout.visible = false;
    this._layoutField.addChild(this._com_layout);
  }
  if (String(Moghunter.bhud_party_layout) === "true") {
    this._party_layout = new Sprite(ImageManager.loadBHud("Layout_Party"));
    this._party_layout.x = Moghunter.bhud_party_lay_x;
    this._party_layout.y = Moghunter.bhud_party_lay_y;
    this._party_layout.visible = false;
    this._layoutField.addChild(this._party_layout);
  }
  if (String(Moghunter.bhud_help_layout) === "true") {
    this._help_layout = new Sprite(ImageManager.loadBHud("Layout_Help"));
    this._help_layout.x = Moghunter.bhud_help_lay_x;
    this._help_layout.y = Moghunter.bhud_help_lay_y;
    this._help_layout.visible = false;
    this._layoutField.addChild(this._help_layout);
  }
  if (String(Moghunter.bhud_skill_layout) === "true") {
    this._skill_layout = new Sprite(ImageManager.loadBHud("Layout_Skill"));
    this._skill_layout.x = Moghunter.bhud_skill_lay_x;
    this._skill_layout.y = Moghunter.bhud_skill_lay_y;
    this._skill_layout.visible = false;
    this._layoutField.addChild(this._skill_layout);
  }
  if (String(Moghunter.bhud_item_layout) === "true") {
    this._item_layout = new Sprite(ImageManager.loadBHud("Layout_Item"));
    this._item_layout.x = Moghunter.bhud_item_lay_x;
    this._item_layout.y = Moghunter.bhud_item_lay_y;
    this._item_layout.visible = false;
    this._layoutField.addChild(this._item_layout);
  }
  if (String(Moghunter.bhud_actor_layout) === "true") {
    this._actor_layout = new Sprite(ImageManager.loadBHud("Layout_Actor"));
    this._actor_layout.x = Moghunter.bhud_actor_lay_x;
    this._actor_layout.y = Moghunter.bhud_actor_lay_y;
    this._actor_layout.visible = false;
    this._layoutField.addChild(this._actor_layout);
  }
  if (String(Moghunter.bhud_enemy_layout) === "true") {
    this._enemy_layout = new Sprite(ImageManager.loadBHud("Layout_Enemy"));
    this._enemy_layout.x = Moghunter.bhud_enemy_lay_x;
    this._enemy_layout.y = Moghunter.bhud_enemy_lay_y;
    this._enemy_layout.visible = false;
    this._layoutField.addChild(this._enemy_layout);
  }
};

//==============================
// ** update
//==============================
var _alias_mog_bhud_scnbattle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function () {
  if ($gameTemp._bhudFaceAnime > 0) {
    $gameTemp._bhudFaceAnime--;
  }
  _alias_mog_bhud_scnbattle_update.call(this);
  this.updateBattleHud();
};

//==============================
// ** update Battle Hud
//==============================
Scene_Battle.prototype.updateBattleHud = function () {
  if ($gameTemp._forceCreateBattleHud) {
    this.forceCreateBattleHud();
  }
  if ($gameTemp._forceRemoveBattleHud) {
    this.forceRemoveBattleHud();
  }
  if (this._screen_layout) {
    this.updateBattleHudVisible();
  }
  this.updateWindowSlideEffect();
  this.updateLayoutWindow();
  if (this._actorSprites) {
    this.updateActors();
  }
};

//==============================
// ** slideWindow
//==============================
Scene_Battle.prototype.slideWindow = function (win, vmode) {
  var vm = vmode ? win.active : win.visible;
  if (vm) {
    var np = [win.org[0], win.org[1]];
    win.contentsOpacity += 15;
  } else {
    var np = [win.org2[0], win.org2[1]];
    win.contentsOpacity = 0;
  }
  win.x = this.sprite_move_to(win.x, np[0]);
  win.y = this.sprite_move_to(win.y, np[1]);
};

//==============================
// ** updateWindowSlideEffect
//==============================
Scene_Battle.prototype.updateWindowSlideEffect = function () {
  if (this._partyCommandWindow.slide) {
    this.slideWindow(this._partyCommandWindow, true);
  }
  if (this._helpWindow.slide) {
    this.slideWindow(this._helpWindow, false);
  }
  if (this._skillWindow.slide) {
    this.slideWindow(this._skillWindow, false);
  }
  if (this._itemWindow.slide) {
    this.slideWindow(this._itemWindow, false);
  }
  if (this._actorWindow.slide) {
    this.slideWindow(this._actorWindow, false);
  }
  if (this._enemyWindow.slide) {
    this.slideWindow(this._enemyWindow, false);
  }
};

//==============================
// ** updateLayoutWindows
//==============================
Scene_Battle.prototype.updateLayoutWindow = function () {
  if (this._com_layout) {
    this._com_layout.x = Moghunter.bhud_com_lay_x + this._actorCommandWindow.x;
    this._com_layout.y = Moghunter.bhud_com_lay_y + this._actorCommandWindow.y;
    this._com_layout.visible = this._actorCommandWindow.isOpenAndActive();
    this._com_layout.opacity = this._actorCommandWindow.contentsOpacity;
    if (!this._actorCommandWindow.visible) {
      this._com_layout.visible = false;
    }
  }
  if (this._party_layout) {
    this._party_layout.x =
      Moghunter.bhud_party_lay_x + this._partyCommandWindow.x;
    this._party_layout.y =
      Moghunter.bhud_party_lay_y + this._partyCommandWindow.y;
    this._party_layout.visible = this._partyCommandWindow.isOpenAndActive();
    this._party_layout.opacity = this._partyCommandWindow.contentsOpacity;
    if (!this._partyCommandWindow.visible) {
      this._party_layout.visible = false;
    }
  }
  if (this._help_layout) {
    this._help_layout.x = Moghunter.bhud_help_lay_x + this._helpWindow.x;
    this._help_layout.y = Moghunter.bhud_help_lay_y + this._helpWindow.y;
    this._help_layout.visible = this._helpWindow.visible;
    this._help_layout.opacity = this._helpWindow.contentsOpacity;
  }
  if (this._skill_layout) {
    this._skill_layout.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    this._skill_layout.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
    this._skill_layout.visible = this._skillWindow.isOpenAndActive();

    this._skill_layout.opacity = this._skillWindow.contentsOpacity;
    if (!this._skillWindow.visible) {
      this._skill_layout.visible = false;
    }
  }
  if (this._item_layout) {
    this._item_layout.x = Moghunter.bhud_item_lay_x + this._itemWindow.x;
    this._item_layout.y = Moghunter.bhud_item_lay_y + this._itemWindow.y;
    this._item_layout.visible = this._itemWindow.isOpenAndActive();
    this._item_layout.opacity = this._itemWindow.contentsOpacity;
    if (!this._itemWindow.visible) {
      this._item_layout.visible = false;
    }
  }
  if (this._actor_layout) {
    this._actor_layout.x = Moghunter.bhud_actor_lay_x + this._actorWindow.x;
    this._actor_layout.y = Moghunter.bhud_actor_lay_y + this._actorWindow.y;
    this._actor_layout.visible = this._actorWindow.isOpenAndActive();
    this._actor_layout.opacity = this._actorWindow.contentsOpacity;
    if (!this._actorWindow.visible) {
      this._actor_layout.visible = false;
    }
  }
  if (this._enemy_layout) {
    this._enemy_layout.x = Moghunter.bhud_enemy_lay_x + this._enemyWindow.x;
    this._enemy_layout.y = Moghunter.bhud_enemy_lay_y + this._enemyWindow.y;
    this._enemy_layout.visible = this._enemyWindow.isOpenAndActive();
    this._enemy_layout.opacity = this._enemyWindow.contentsOpacity;
    if (!this._enemyWindow.visible) {
      this._enemy_layout.visible = false;
    }
  }
};

//==============================
// * Sprite Move To
//==============================
Scene_Battle.prototype.sprite_move_to = function (value, real_value) {
  if (value === real_value) {
    return value;
  }
  var dnspeed = 1 + Math.abs(value - real_value) / 12;
  if (value > real_value) {
    value -= dnspeed;
    if (value < real_value) {
      value = real_value;
    }
  } else if (value < real_value) {
    value += dnspeed;
    if (value > real_value) {
      value = real_value;
    }
  }
  return Math.floor(value);
};

//===========================================================================
// * Battle_Hud
//===========================================================================
function Battle_Hud() {
  this.initialize.apply(this, arguments);
}

Battle_Hud.prototype = Object.create(Sprite.prototype);
Battle_Hud.prototype.constructor = Battle_Hud;

//==============================
// * Initialize
//==============================
Battle_Hud.prototype.initialize = function (hud_id) {
  Sprite.prototype.initialize.call(this);
  this._data_initial_ref = [0, true];
  this._hud_id = hud_id;
  this._slideA = [0, Moghunter.bhud_slideX, Moghunter.bhud_slideY];
  if (this._slideA[1] != 0 || this._slideA[2] != 0) {
    this._slideA[0] = this._hud_id * 10;
  }
  this.x = this._slideA[1];
  this.y = this._slideA[2];
  this._hud_size = [0, 0];
  this.base_parameter_clear();
  this.load_img();
  this.opacity = 0;
  $gameTemp._bhud_position_active = null;
  $gameTemp._battleEnd = false;
  this._bhud_flowData = [0, 0, 0, 0, 0];
};

//==============================
// * Load Img
//==============================
Battle_Hud.prototype.load_img = function () {
  this._layout_img = ImageManager.loadBHud("Layout");
  if (String(Moghunter.bhud_layoverlay_visible) == "true") {
    this._layout2_img = ImageManager.loadBHud("Layout2");
  }
  this._turn_img = ImageManager.loadBHud("Turn");
  this._state_img = ImageManager.loadSystem("IconSet");
  if (String(Moghunter.bhud_inyoku_visible) == "true") {
    this._inyoku_img = ImageManager.loadAHud("INYOKU_Number");
  }
  if (String(Moghunter.bhud_level_number_visible) == "true") {
    this._level_number_img = ImageManager.loadAHud("LV_Number");
  }
  if (String(Moghunter.bhud_hp_meter_visible) == "true") {
    this._hp_meter_img = ImageManager.loadBHud("HP_Meter");
  }
  if (String(Moghunter.bhud_mp_meter_visible) == "true") {
    this._mp_meter_img = ImageManager.loadBHud("MP_Meter");
  }
  if (String(Moghunter.bhud_tp_meter_visible) == "true") {
    this._tp_meter_img = ImageManager.loadBHud("TP_Meter");
  }
  if (String(Moghunter.bhud_acp_meter_visible) == "true") {
    this._acp_meter_img = ImageManager.loadAHud("ACP_Meter");
  }
  if (String(Moghunter.bhud_lcp_meter_visible) == "true") {
    this._lcp_meter_img = ImageManager.loadAHud("LCP_Meter");
  }
  if (String(Moghunter.bhud_acp_icon_visible) == "true") {
    this._acp_icon_img = ImageManager.loadAHud("ACP_Icon");
  }
  if (String(Moghunter.bhud_lcp_icon_visible) == "true") {
    this._lcp_icon_img = ImageManager.loadAHud("LCP_Icon");
  }
  if (String(Moghunter.bhud_at_meter_visible) == "true") {
    this._at_meter_img = ImageManager.loadBHud("ATB_Meter");
  }
  if (String(Moghunter.bhud_hp_number_visible) == "true") {
    this._hp_number_img = ImageManager.loadBHud("HP_Number");
  }
  if (String(Moghunter.bhud_mp_number_visible) == "true") {
    this._mp_number_img = ImageManager.loadBHud("MP_Number");
  }
  if (String(Moghunter.bhud_tp_number_visible) == "true") {
    this._tp_number_img = ImageManager.loadBHud("TP_Number");
  }
  if (String(Moghunter.bhud_acp_number_visible) == "true") {
    this._acp_number_img = ImageManager.loadAHud("ACP_Number");
  }
  if (String(Moghunter.bhud_lcp_number_visible) == "true") {
    this._lcp_number_img = ImageManager.loadAHud("LCP_Number");
  }
  if (String(Moghunter.bhud_maxhp_number_visible) == "true") {
    this._maxhp_number_img = ImageManager.loadBHud("HP_Number2");
  }
  if (String(Moghunter.bhud_maxmp_number_visible) == "true") {
    this._maxmp_number_img = ImageManager.loadBHud("MP_Number2");
  }
  if (String(Moghunter.bhud_maxtp_number_visible) == "true") {
    this._maxtp_number_img = ImageManager.loadBHud("TP_Number2");
  }
};

//==============================
// * Base Parameter Clear
//==============================
Battle_Hud.prototype.base_parameter_clear = function () {
  this._inyoku_old = [-1, -1];
  this._hp_old = [-1, -1];
  this._maxhp_old = [-1, -1];
  this._hp_old_ani = [-1, -1];
  this._hp_flow = [false, 0, 0, 0];
  this._mp_old = [-1, -1];
  this._maxmp_old = [-1, -1];
  this._mp_old_ani = [-1, -1];
  this._mp_flow = [false, 0, 0, 0];
  this._tp_old = [-1, -1];
  this._maxtp_old = [-1, -1];
  this._tp_old_ani = -1;
  this._tp_flow = [false, 0, 0, 0];
  this._at_flow = [false, 0, 0, 0];
  this._acp_flow = [false, 0, 0, 0];
  this._lcp_flow = [false, 0, 0, 0];
  this._acp_old = [-1, -1];
  this._maxacp_old = [-1, -1];
  this._acp_old_ani = [-1, -1];
  this._lcp_old = [-1, -1];
  this._maxlcp_old = [-1, -1];
  this._lcp_old_ani = [-1, -1];
  this._acp_icon_old = [-1, -1];
  this._lcp_icon_old = [-1, -1];
  this._hp_number_old = -1;
  this._mp_number_old = -1;
  this._tp_number_old = -1;
  this._acp_number_old = -1;
  this._lcp_number_old = -1;
  this._number_align = [];
  this._number_align[0] = Moghunter.bhud_hp_align_type;
  this._number_align[1] = Moghunter.bhud_mp_align_type;
  this._number_align[2] = Moghunter.bhud_tp_align_type;
  this._diagonal_number = [];
  this._diagonal_number[0] = Moghunter.bhud_hp_diagonal_number;
  this._diagonal_number[1] = Moghunter.bhud_mp_diagonal_number;
  this._diagonal_number[2] = Moghunter.bhud_tp_diagonal_number;
  this._hp_img_data = [0, 0, 0];
  this._mp_img_data = [0, 0, 0];
  this._tp_img_data = [0, 0, 0];
  this._acp_img_data = [0, 0, 0];
  this._lcp_img_data = [0, 0, 0];
  this._states_old = [];
  this._states_data = [0, 0, 0];
  this._active = false;
  this._hud_size = [0, 0];
};

//==============================
// * Need Refresh Bhud
//==============================
Battle_Hud.prototype.need_refreh_bhud = function () {
  if (this._data_initial_ref[1]) {
    return true;
  }
  if (this._variables != $gameVariables) {
    return true;
  }
  if (this._battler != $gameParty.battleMembers()[this._hud_id]) {
    return true;
  }
  return false;
};

//==============================
// * Refresh Bhud
//==============================
Battle_Hud.prototype.refresh_bhud = function () {
  this._data_initial_ref[1] = false;
  this._variables = $gameVariables;
  this._battler = $gameParty.battleMembers()[this._hud_id];
  if (this._battler) {
    this._battler.checkBhudNoteTags();
  }
  this.opacity = 0;
  this._hud_size = [0, 0];
  this.base_parameter_clear();
  this.create_base_sprites();
};

//==============================
// * Refresh Position
//==============================
Battle_Hud.prototype.refresh_position = function () {
  this.set_hud_position();
  this.create_sprites();
  this._layout.x = this._pos_x;
  this._layout.y = this._pos_y;
  if (this._face) {
    this._face.x = this._pos_x + Moghunter.bhud_face_pos_x;
    this._face.y = this._pos_y + Moghunter.bhud_face_pos_y + this._face.ph;
  }
  if (this._turn) {
    this._turn.x =
      this._pos_x + this._turn.width / 2 + Moghunter.bhud_turn_pos_x;
    this._turn.y =
      this._pos_y + this._turn.height / 2 + Moghunter.bhud_turn_pos_y;
  }
  if (this._layout2) {
    this._layout2.x = this._pos_x + Moghunter.bhud_layoverlay_x;
    this._layout2.y = this._pos_y + Moghunter.bhud_layoverlay_y;
  }
  if (this._face) {
    this._battler._face_pos = [this._face.x, this._face.y];
  }
};

//==============================
// * Set Hud Position
//==============================
Battle_Hud.prototype.set_hud_position = function () {
  this._hud_size = [this._layout.bitmap.width, this._layout.bitmap.height];
  this._members_max = $gameParty.battleMembers().length;
  var ps = [
    Number(Moghunter.bhud_space_x) * this._hud_id,
    Number(Moghunter.bhud_space_y) * this._hud_id,
  ];
  if ($gameSystem._bhud_position[this._hud_id]) {
    this._pos_x = $gameSystem._bhud_position[this._hud_id][0];
    this._pos_y = $gameSystem._bhud_position[this._hud_id][1];
  } else {
    if (Number($gameSystem._bhud_pos_mode) === 0) {
      var spc = (Graphics.boxWidth - 14) / this._members_max;
      var px = spc / 2 + spc * this._hud_id;
      this._pos_x = Moghunter.bhud_pos_x + px + ps[0];
      this._pos_y = Moghunter.bhud_pos_y + ps[1];
    } else {
      var py = (this._hud_size[1] + 5) * this._hud_id;
      this._pos_x = Moghunter.bhud_pos_x + ps[0];
      this._pos_y = Moghunter.bhud_pos_y + py + ps[1];
    }
  }
  $gameTemp._bhud_position[this._hud_id] = [this._pos_x, this._pos_y];
};

//==============================
// * Update
//==============================
Battle_Hud.prototype.update = function () {
  Sprite.prototype.update.call(this);
  if (this._data_initial_ref[0] < 2) {
    this._data_initial_ref[0] += 1;
    return;
  }
  if (this.need_refreh_bhud()) {
    this.refresh_bhud();
  }
  if (!this._battler) {
    return;
  }
  if (!this._layout.bitmap.isReady()) {
    return;
  }
  if (this._hud_size[0] === 0) {
    this.refresh_position();
    return;
  }
  this.update_sprites();
  this.updateSlide();
};

//==============================
// * Update Slide
//==============================
Battle_Hud.prototype.updateSlide = function () {
  if (!this.is_hud_visible()) {
    return;
  }
  if (this._slideA[0] > 0) {
    this.visible = false;
    this.opacity = 0;
    this._slideA[0]--;
    return;
  }
  this.visible = true;
  this.x = this.update_dif(this.x, 0, 20);
  this.y = this.update_dif(this.y, 0, 20);
};

//==============================
// * Create Base Sprites
//==============================
Battle_Hud.prototype.create_base_sprites = function () {
  this.create_turn();
  if (Number(Moghunter.bhud_face_priority) === 0) {
    this.create_face();
    this.create_layout();
  } else {
    this.create_layout();
    this.create_face();
  }
};

//==============================
// * Create Sprites
//==============================
Battle_Hud.prototype.create_sprites = function () {
  this.create_hp_meter();
  this.create_mp_meter();
  this.create_tp_meter();
  this.create_at_meter();
  this.create_acp_meter();
  this.create_lcp_meter();
  if (String(Moghunter.bhud_layoverlay_visible) == "true") {
    this.create_layoutOverlay();
  }
  this.create_hp_number();
  this.create_maxhp_number();
  this.create_mp_number();
  this.create_maxmp_number();
  this.create_tp_number();
  this.create_maxtp_number();
  this._stateType = Number(Moghunter.bhud_statesType);
  if (this._stateType === 0) {
    this.create_states();
  } else {
    this.create_states2();
  }
  this.create_name();
  // 淫欲度表示
  this.create_inyoku();
  this.create_level_number();
  // アメリアCP表示
  this.create_acp_icon();
  this.create_acp_number();
  this.create_maxacp_number();
  // リリックCP表示
  this.create_lcp_icon();
  this.create_lcp_number();
  this.create_maxlcp_number();
};

//==============================
// * Update Sprites
//==============================
Battle_Hud.prototype.update_sprites = function () {
  this.update_active();
  this.update_visible();
  this.update_turn();
  this.update_face();
  this.update_hp();
  this.update_mp();
  this.update_tp();
  this.update_inyoku();
  this.update_acp();
  this.update_lcp();
  this.update_at();
  this.update_level_number();
  if (this._state_icon) {
    if (this._stateType === 0) {
      this.update_states();
    } else {
      this.update_states2();
    }
  }
};

//==============================
// * 淫欲度表示
//==============================
Battle_Hud.prototype.create_inyoku = function () {
  if (String(Moghunter.bhud_inyoku_visible) != "true") {
    return;
  }
  if (this._inyoku) {
    for (var i = 0; i < this._inyoku.length; i++) {
      this.removeChild(this._inyoku[i]);
    }
  }
  if (this._variables.value(1) === -1) {
    return;
  }
  this._inyoku = [];
  this._inyoku.align = Number(Moghunter.bhud_inyoku_align);
  this._inyoku_img_data = [
    this._inyoku_img.width,
    this._inyoku_img.height,
    this._inyoku_img.width / 10,
    this._inyoku_img.height / 2,
    this._pos_x + Moghunter.bhud_inyoku_pos_x,
    this._pos_y + Moghunter.bhud_inyoku_pos_y,
  ];
  for (var i = 0; i < 3; i++) {
    this._inyoku[i] = new Sprite(this._inyoku_img);
    this._inyoku[i].visible = false;
    this._inyoku[i].x = this._inyoku_img_data[4];
    this._inyoku[i].y = this._inyoku_img_data[5];
    this.addChild(this._inyoku[i]);
  }
  this._inyoku_old = this._variables.value(1);
  this.refresh_number2(
    this._inyoku,
    this._inyoku_old,
    this._inyoku_img_data,
    this._inyoku_img_data[4],
    1
  );
};

//==============================
// * Create Level Number
//==============================
Battle_Hud.prototype.create_level_number = function () {
  if (String(Moghunter.bhud_level_number_visible) != "true") {
    return;
  }
  if (this._level_number) {
    for (var i = 0; i < this._level_number.length; i++) {
      this.removeChild(this._level_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._level_number = [];
  this._level_number.align = Number(Moghunter.bhud_level_number_align);
  this._level_img_data = [
    this._level_number_img.width,
    this._level_number_img.height,
    this._level_number_img.width / 10,
    this._level_number_img.height / 2,
    this._pos_x + Moghunter.bhud_level_number_pos_x,
    this._pos_y + Moghunter.bhud_level_number_pos_y,
  ];
  for (var i = 0; i < 3; i++) {
    this._level_number[i] = new Sprite(this._level_number_img);
    this._level_number[i].visible = false;
    this._level_number[i].x = this._level_img_data[4];
    this._level_number[i].y = this._level_img_data[5];
    this.addChild(this._level_number[i]);
  }
  this._level_number_old = this._battler.level;
  this.refresh_number2(
    this._level_number,
    this._level_number_old,
    this._level_img_data,
    this._level_img_data[4],
    1
  );
};

//==============================
// * Update Level
//==============================
Battle_Hud.prototype.update_level_number = function () {
  if (this._level_number) {
    var dif_number = this.update_dif(
      this._level_number_old,
      this._battler.level,
      30
    );
    if (this._level_number_old != dif_number) {
      this._level_number_old = dif_number;
      if (this._hp_old_ani) {
        this._hp_old_ani[0] = 0;
      }
      if (this._mp_old_ani) {
        this._mp_old_ani[0] = 0;
      }
      if (this._tp_old_ani) {
        this._tp_old_ani[0] = 0;
      }
      this.refresh_number2(
        this._level_number,
        this._level_number_old,
        this._level_img_data,
        this._level_img_data[4],
        1
      );
    }
  }
};

//==============================
// * Update Active
//==============================
Battle_Hud.prototype.update_active = function () {
  this._active = false;
  if (this.isChronoBattle()) {
    if (this._battler == $gameTemp._chronoCom.user[1]) {
      this._active = true;
      $gameTemp._bhud_position_active = $gameTemp._bhud_position[this._hud_id];
    }
  } else {
    if (this._battler == BattleManager.actor()) {
      this._active = true;
      $gameTemp._bhud_position_active = $gameTemp._bhud_position[this._hud_id];
    }
  }
};

//==============================
// * is Chrono Battle
//==============================
Battle_Hud.prototype.isChronoBattle = function () {
  if (!Imported.MOG_ChronoEngine) {
    return false;
  }
  if (!$gameSystem.isChronoMode()) {
    return false;
  }
  if (!$gameTemp._chronoCom.user) {
    return false;
  }
  return true;
};

//==============================
// * Update visible
//==============================
Battle_Hud.prototype.update_visible = function (sprite) {
  if (this.is_hud_visible()) {
    this.opacity += 10;
  } else {
    this.opacity -= 10;
  }
};

//==============================
// * Is Hud Visible
//==============================
Battle_Hud.prototype.is_hud_visible = function (sprite) {
  // if ($gameMessage.isBusy()) { return false };
  // if ($gameTemp._battleEnd) { return false };
  if (!$gameSystem._bhud_visible) {
    return false;
  }
  if (Imported.MOG_ChronoEngine) {
    if (
      $gameSystem._chronoMode.phase > 3 &&
      $gameSystem._chronoMode.phaseEndPhaseDuration === 0
    ) {
      return false;
    }
  }
  return true;
};

//==============================
// * Update Dif
//==============================
Battle_Hud.prototype.update_dif = function (value, real_value, speed) {
  if (value == real_value) {
    return value;
  }
  var dnspeed = 1 + Math.abs(value - real_value) / speed;
  if (value > real_value) {
    value -= dnspeed;
    if (value < real_value) {
      value = real_value;
    }
  } else if (value < real_value) {
    value += dnspeed;
    if (value > real_value) {
      value = real_value;
    }
  }
  return Math.floor(value);
};

//==============================
// * Refresh Meter
//==============================
Battle_Hud.prototype.refresh_meter = function (sprite, value, value_max, type) {
  var ch = sprite.bitmap.height / 2;
  var meter_rate = (sprite.bitmap.width * value) / value_max;
  sprite.setFrame(0, type * ch, meter_rate, ch);
};

//==============================
// * Refresh Flow
//==============================
Battle_Hud.prototype.refresh_meter_flow = function (
  sprite,
  value,
  value_max,
  type,
  flow
) {
  var cw = sprite.bitmap.width / 3;
  var ch = sprite.bitmap.height / 2;
  var meter_rate = (cw * value) / value_max;
  sprite.setFrame(flow, type * ch, meter_rate, ch);
};

//==============================
// * Refresh Number
//==============================
Battle_Hud.prototype.refresh_number = function (
  sprites,
  value,
  img_data,
  x,
  y,
  type
) {
  numbers = Math.abs(value).toString().split("");
  var nx = 0;
  var ny = 0;
  var dir = 1;
  for (var i = 0; i < sprites.length; i++) {
    sprites[i].visible = false;
    if (i > numbers.length) {
      return;
    }
    var n = Number(numbers[i]);
    sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
    sprites[i].visible = true;
    if (this._number_align[type] === 0) {
      var nx = -(img_data[2] * i) + img_data[2] * numbers.length;
    } else if (this._number_align[type] === 1) {
      var nx = -(img_data[2] * i) + (img_data[2] / 2) * numbers.length;
    } else if (this._number_align[type] === 2) {
      var nx = -(img_data[2] * i);
    } else if (this._number_align[type] === 3) {
      var nx = -(img_data[2] * i);
      var ny = img_data[3] * i;
    } else {
      var nx = -(img_data[2] * i) + img_data[2] * numbers.length;
      var ny = (img_data[3] / 2) * dir;
    }
    sprites[i].x = x - nx;
    sprites[i].y = y - ny;
    dir = dir === 0 ? 1 : 0;
  }
};

//==============================
// * Refresh Number
//==============================
Battle_Hud.prototype.refresh_number2 = function (
  sprites,
  value,
  img_data,
  x,
  center
) {
  numbers = Math.abs(value).toString().split("");
  for (var i = 0; i < sprites.length; i++) {
    sprites[i].visible = false;
    if (i > numbers.length) {
      return;
    }
    var n = Number(numbers[i]);
    sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
    sprites[i].visible = true;
    var nx = -(img_data[2] * i) + img_data[2] * numbers.length;
    if (sprites.align === 1) {
      var xi = (img_data[2] * numbers.length) / 2;
      sprites[i].x = x + xi - nx;
    } else if (sprites.align === 2) {
      var xi = img_data[2] * numbers.length;
      sprites[i].x = x + xi - nx;
    } else {
      sprites[i].x = x - nx;
    }
  }
};

//==============================
// * Need Refresh Parameter
//==============================
Battle_Hud.prototype.need_refresh_parameter = function (parameter) {
  switch (parameter) {
    case 0:
      if (this._hp_old[0] != this._battler.hp) {
        return true;
      }
      if (this._hp_old[1] != this._battler.mhp) {
        return true;
      }
      break;
    case 1:
      if (this._mp_old[0] != this._battler.mp) {
        return true;
      }
      if (this._mp_old[1] != this._battler.mmp) {
        return true;
      }
      break;
    case 2:
      if (this._tp_old[0] != this._battler.tp) {
        return true;
      }
      if (this._tp_old[1] != this._battler.maxTp()) {
        return true;
      }
      break;
    case 3:
      if (this._acp_old[0] != this._variables.value(2)) {
        return true;
      }
      if (this._acp_old[1] != 100) {
        return true;
      }
      break;
    case 4:
      if (this._lcp_old[0] != this._variables.value(3)) {
        return true;
      }
      if (this._lcp_old[1] != 100) {
        return true;
      }
      break;
  }
  return false;
};

//==============================
// * Create Layout
//==============================
Battle_Hud.prototype.create_layout = function () {
  this.removeChild(this._layout);
  if (!this._battler) {
    return;
  }
  this._layout = new Sprite(this._layout_img);
  this.addChild(this._layout);
};

//==============================
// * Create Layout Overlay
//==============================
Battle_Hud.prototype.create_layoutOverlay = function () {
  this.removeChild(this._layout2);
  if (!this._battler) {
    return;
  }
  this._layout2 = new Sprite(this._layout2_img);
  this.addChild(this._layout2);
};

//==============================
// * Create Turn
//==============================
Battle_Hud.prototype.create_turn = function () {
  if (String(Moghunter.bhud_turn_visible) != "true") {
    return;
  }
  this.removeChild(this._turn);
  if (!this._battler) {
    return;
  }
  this._turn = new Sprite(this._turn_img);
  this._turn.anchor.x = 0.5;
  this._turn.anchor.y = 0.5;
  this._turn.rt = Number(Moghunter.bhud_turn_rotation);
  this._turn.zt = String(Moghunter.bhud_turn_zoom) === "true" ? true : false;
  this._turn.vis = this._turn.visible;
  this._turn_blink = [0, 0];
  this.addChild(this._turn);
};

//==============================
// * Update Turn
//==============================
Battle_Hud.prototype.update_turn = function () {
  if (!this._turn) {
    return;
  }
  if (!this._active) {
    this._turn.visible = false;
    return;
  }
  if (this._turn.rt != 0) {
    this._turn.rotation += this._turn.rt;
  }
  if (this._turn.zt) {
    this.updateTurnZoom();
  }
  this._turn.visible = true;
  this._turn_blink[0] += 1;
  if (this._turn_blink[0] < 60) {
    this._turn_blink[1] += 2;
  } else if (this._turn_blink[0] < 120) {
    this._turn_blink[1] -= 2;
  } else {
    this._turn_blink = [0, 0];
  }
  this._turn.opacity = 135 + this._turn_blink[1];
};

//==============================
// * Update Turn Zoom
//==============================
Battle_Hud.prototype.updateTurnZoom = function () {
  if (this._turn.vis != this._turn.visible) {
    this._turn.vis = this._turn.visible;
    this._turn.scale.x = 1.5;
    this._turn.scale.y = this._turn.scale.x;
  }
  if (this._turn.scale.x > 0) {
    this._turn.scale.x -= 0.04;
    if (this._turn.scale.x <= 1.0) {
      this._turn.scale.x = 1.0;
    }
  }
  this._turn.scale.y = this._turn.scale.x;
};

//==============================
// * Create Face
//==============================
Battle_Hud.prototype.create_face = function () {
  if (String(Moghunter.bhud_face_visible) != "true") {
    return;
  }
  this.removeChild(this._face);
  if (!this._battler) {
    return;
  }
  this._face = new Sprite(
    ImageManager.loadBHud("Face_" + this._battler._actorId)
  );
  this._face.anchor.x = 0.5;
  this._face.anchor.y = 0.5;
  this._face_data = [0, 0, false, false, false, -1];
  this._face.ph = 0;
  this._face.animation = [-1, 0, 0, 0, 0, 0, 0, 0, 0];
  this._face.breathEffect = this._battler._bhud.faceBreath;
  this._face.scaleY = 0;
  if (String(Moghunter.bhud_face_shake) === "true") {
    this._face_data[2] = true;
  }
  if (String(Moghunter.bhud_face_animated) === "true") {
    this._face_data[4] = true;
  }
  this._battler._bhud_face_data = [0, 0, 0, 1];
  this.addChild(this._face);
};

//==============================
// * Update Face
//==============================
Battle_Hud.prototype.update_face = function () {
  if (!this._face) {
    return;
  }
  if (!this._face.bitmap.isReady()) {
    return;
  }
  if (
    this._face_data[4] &&
    this._face_data[5] != this._battler._bhud_face_data[2]
  ) {
    this.refresh_face();
  }
  this.update_face_animation();
  this.update_face_shake();
  this.update_face_zoom();
  if (this._face.breathEffect) {
    this.updateFaceEffects();
  }
};

//==============================
// * update Face Effects
//==============================
Battle_Hud.prototype.updateFaceEffects = function () {
  if (this._face_data[5] == 0 || this._face_data[5] == 3) {
    this._face.anchor.y = 1;
    this._face.y =
      this._pos_y + Moghunter.bhud_face_pos_y + this._face.height / 2;
    this.updateBreathEffect();
  } else {
    this._face.anchor.y = 0.5;
    this._face.y = this._pos_y + Moghunter.bhud_face_pos_y;
  }
};

//==============================
// * set Breath Effect
//==============================
Battle_Hud.prototype.setBreathEffect = function () {
  this._face.animation[0] = 0;
  var rds = Math.randomInt(100);
  var rds2 = rds * 0.0000001;
  this._face.animation[2] = 0.000005;
  this._face.animation[3] = 0.0002;
  var int = this._face.animation[3];
  var int2 = (Math.randomInt(int) * 0.0001).toFixed(4);
  this._face.animation[1] = int2;
  this._face.animation[8] = Math.randomInt(80);
};

//==============================
// * update Breath Effect
//==============================
Battle_Hud.prototype.updateBreathEffect = function () {
  this._face.scale.y = 1.0 + this._face.scaleY;
  if (this._face.animation[0] == -1) {
    if (this._face.bitmap.isReady()) {
      this.setBreathEffect();
    }
    return;
  }
  if (this._face.animation[8] > 0) {
    this._face.animation[8]--;
    return;
  }
  if (this._face.animation[0] == 0) {
    this._face.animation[1] -= this._face.animation[2];
    this._face.scaleY += this._face.animation[1];
    if (this._face.animation[1] <= -this._face.animation[3]) {
      this._face.animation[1] = -this._face.animation[3];
      this._face.animation[0] = 1;
    }
  } else {
    this._face.animation[1] += this._face.animation[2];
    this._face.scaleY += this._face.animation[1];
    if (this._face.animation[1] >= this._face.animation[3]) {
      this._face.animation[1] = this._face.animation[3];
      this._face.animation[0] = 0;
    }
  }
};

//==============================
// * Refresh Face
//==============================
Battle_Hud.prototype.refresh_face = function () {
  this._face_data[5] = this._battler._bhud_face_data[2];
  var cw = this._face.bitmap.width / 5;
  var ch = this._face.bitmap.height;
  this._face.setFrame(cw * this._face_data[5], 0, cw, ch);
};

//==============================
// * Update Face Animation
//==============================
Battle_Hud.prototype.update_face_animation = function () {
  if (this._battler._bhud_face_data[3] > 0) {
    this._battler._bhud_face_data[3] -= 1;
    if (this._battler._bhud_face_data[3] === 0) {
      if (this._battler.isDead()) {
        this._battler._bhud_face_data[2] = 4;
      } else if (this._battler.hp <= (30 * this._battler.mhp) / 100) {
        this._battler._bhud_face_data[2] = 3;
      } else {
        this._battler._bhud_face_data[2] = 0;
      }
    }
  }
};

//==============================
// * Update Face Zoom
//==============================
Battle_Hud.prototype.update_face_zoom = function () {
  if (this._battler._bhud_face_data[1] > 0) {
    this._battler._bhud_face_data[1] -= 1;
    if (this._battler._bhud_face_data[1] == 0) {
      this._face.scale.x = 1.0;
    } else if (this._battler._bhud_face_data[1] < 35) {
      this._face.scale.x -= 0.005;
      if (this._face.scale.x < 1.0) {
        this._face.scale.x = 1.0;
      }
    } else if (this._battler._bhud_face_data[1] < 70) {
      this._face.scale.x += 0.005;
      if (this._face.scale.x > 1.25) {
        this._face.scale.x = 1.25;
      }
    }
    this._face.scale.y = this._face.scale.x;
  }
};

//==============================
// * Update Face Shake
//==============================
Battle_Hud.prototype.update_face_shake = function () {
  this._face.x = this._pos_x + Moghunter.bhud_face_pos_x;
  if (this._face_data[2] && this._battler._bhud_face_data[0] > 0) {
    this._battler._bhud_face_data[0] -= 1;
    this._face.x =
      this._pos_x + Moghunter.bhud_face_pos_x + (Math.random() * 12 - 6);
  }
};

//==============================
// * Create Name
//==============================
Battle_Hud.prototype.create_name = function () {
  if (String(Moghunter.bhud_name_visible) != "true") {
    return;
  }
  this.removeChild(this._name);
  if (!this._battler) {
    return;
  }
  this._name = new Sprite(new Bitmap(200, 48));
  this._name.x = this._pos_x + Moghunter.bhud_name_pos_x;
  this._name.y = this._pos_y + Moghunter.bhud_name_pos_y;
  this._name.bitmap.fontSize = Number(Moghunter.bhud_name_font_size);
  if (String(Moghunter.bhud_name_font_italic) === "true") {
    this._name.bitmap.fontItalic = true;
  }

  this._name.bitmap.outlineWidth = Number(Moghunter.bhud_name_font_bold_size);
  this.addChild(this._name);
  this.refresh_name();
};

//==============================
// * Refresh Name
//==============================
Battle_Hud.prototype.refresh_name = function () {
  this._name.bitmap.clear();
  var align = "left";
  if (Moghunter.bhud_name_align === 1) {
    var align = "center";
  } else if (Moghunter.bhud_name_align === 2) {
    var align = "right";
  }
  this._name.bitmap.drawText(
    this._battler._name,
    0,
    0,
    this._name.bitmap.width,
    this._name.bitmap.height,
    align
  );
};

//==============================
// * Create HP Meter
//==============================
Battle_Hud.prototype.create_hp_meter = function () {
  if (String(Moghunter.bhud_hp_meter_visible) != "true") {
    return;
  }
  this.removeChild(this._hp_meter_blue);
  this.removeChild(this._hp_meter_red);
  if (!this._battler) {
    return;
  }
  this._hp_meter_red = new Sprite(this._hp_meter_img);
  this._hp_meter_red.x = this._pos_x + Moghunter.bhud_hp_meter_pos_x;
  this._hp_meter_red.y = this._pos_y + Moghunter.bhud_hp_meter_pos_y;
  this._hp_meter_red.rotation =
    (Moghunter.bhud_hp_meter_rotation * Math.PI) / 180;
  this.addChild(this._hp_meter_red);
  this._hp_meter_blue = new Sprite(this._hp_meter_img);
  this._hp_meter_blue.x = this._hp_meter_red.x;
  this._hp_meter_blue.y = this._hp_meter_red.y;
  this._hp_meter_blue.rotation = this._hp_meter_red.rotation;
  this.addChild(this._hp_meter_blue);
  if (String(Moghunter.bhud_hp_meter_flow) === "true") {
    this._hp_flow[0] = true;
    this._hp_flow[2] = this._hp_meter_img.width / 3;
    this._hp_flow[3] = this._hp_flow[2] * 2;
    this._hp_flow[1] = Math.floor(Math.random() * this._hp_flow[2]);
  }
};

//==============================
// * Create HP Number
//==============================
Battle_Hud.prototype.create_hp_number = function () {
  if (String(Moghunter.bhud_hp_number_visible) != "true") {
    return;
  }
  if (this._hp_number) {
    for (var i = 0; i < this._hp_number.length; i++) {
      this.removeChild(this._hp_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._hp_number = [];
  this._hp_img_data = [
    this._hp_number_img.width,
    this._hp_number_img.height,
    this._hp_number_img.width / 10,
    this._hp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_hp_number_pos_x,
    this._pos_y + Moghunter.bhud_hp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._hp_number[i] = new Sprite(this._hp_number_img);
    this._hp_number[i].visible = false;
    this._hp_number[i].x = this._hp_img_data[4];
    this._hp_number[i].y = this._hp_img_data[5];
    this.addChild(this._hp_number[i]);
  }
  this._hp_number_old = this._battler.hp;
  this.refresh_number(
    this._hp_number,
    this._hp_number_old,
    this._hp_img_data,
    this._hp_img_data[4],
    this._hp_img_data[5],
    0
  );
};

//==============================
// * Create maxHP Number
//==============================
Battle_Hud.prototype.create_maxhp_number = function () {
  if (String(Moghunter.bhud_maxhp_number_visible) != "true") {
    return;
  }
  if (this._maxhp_number) {
    for (var i = 0; i < this._maxhp_number.length; i++) {
      this.removeChild(this._maxhp_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._maxhp_number = [];
  this._maxhp_img_data = [
    this._maxhp_number_img.width,
    this._maxhp_number_img.height,
    this._maxhp_number_img.width / 10,
    this._maxhp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_maxhp_number_pos_x,
    this._pos_y + Moghunter.bhud_maxhp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._maxhp_number[i] = new Sprite(this._maxhp_number_img);
    this._maxhp_number[i].visible = false;
    this._maxhp_number[i].x = this._maxhp_img_data[4];
    this._maxhp_number[i].y = this._maxhp_img_data[5];
    this.addChild(this._maxhp_number[i]);
  }
  this._maxhp_number_old = this._battler.mhp;
  this.refresh_number(
    this._maxhp_number,
    this._maxhp_number_old,
    this._maxhp_img_data,
    this._maxhp_img_data[4],
    this._maxhp_img_data[5],
    0
  );
};

//==============================
// * Update HP
//==============================
Battle_Hud.prototype.update_hp = function () {
  if (this._hp_meter_blue) {
    if (this._hp_flow[0]) {
      this.refresh_meter_flow(
        this._hp_meter_blue,
        this._battler.hp,
        this._battler.mhp,
        0,
        this._hp_flow[1]
      );
      var dif_meter = this.update_dif(
        this._hp_old_ani[0],
        this._battler.hp,
        160
      );
      if (this._hp_old_ani[0] != dif_meter) {
        this._hp_old_ani[0] = dif_meter;
        this.refresh_meter_flow(
          this._hp_meter_red,
          this._hp_old_ani[0],
          this._battler.mhp,
          1,
          this._hp_flow[1]
        );
      }
      this._hp_flow[1] += 1.5;
      if (this._hp_flow[1] > this._hp_flow[3]) {
        this._hp_flow[1] = 0;
      }
    } else {
      if (this.need_refresh_parameter(0)) {
        this.refresh_meter(
          this._hp_meter_blue,
          this._battler.hp,
          this._battler.mhp,
          0
        );
        this._hp_old = [this._battler.hp, this._battler.mhp];
      }
      var dif_meter = this.update_dif(
        this._hp_old_ani[0],
        this._battler.hp,
        160
      );
      if (this._hp_old_ani[0] != dif_meter) {
        this._hp_old_ani[0] = dif_meter;
        this.refresh_meter(
          this._hp_meter_red,
          this._hp_old_ani[0],
          this._battler.mhp,
          1
        );
      }
    }
  }
  if (this._hp_number) {
    var dif_number = this.update_dif(this._hp_number_old, this._battler.hp, 30);
    if (this._hp_number_old != dif_number) {
      this._hp_number_old = dif_number;
      this.refresh_number(
        this._hp_number,
        this._hp_number_old,
        this._hp_img_data,
        this._hp_img_data[4],
        this._hp_img_data[5],
        0
      );
    }
  }
  if (this._maxhp_number) {
    if (this._maxhp_number_old != this._battler.mhp) {
      this._maxhp_number_old = this._battler.mhp;
      this.refresh_number(
        this._maxhp_number,
        this._maxhp_number_old,
        this._maxhp_img_data,
        this._maxhp_img_data[4],
        this._maxhp_img_data[5],
        0
      );
    }
  }
};

//==============================
// * Create MP Meter
//==============================
Battle_Hud.prototype.create_mp_meter = function () {
  if (String(Moghunter.bhud_mp_meter_visible) != "true") {
    return;
  }
  this.removeChild(this._mp_meter_blue);
  this.removeChild(this._mp_meter_red);
  if (!this._battler) {
    return;
  }
  this._mp_meter_red = new Sprite(this._mp_meter_img);
  this._mp_meter_red.x = this._pos_x + Moghunter.bhud_mp_meter_pos_x;
  this._mp_meter_red.y = this._pos_y + Moghunter.bhud_mp_meter_pos_y;
  this._mp_meter_red.rotation =
    (Moghunter.bhud_mp_meter_rotation * Math.PI) / 180;
  this.addChild(this._mp_meter_red);
  this._mp_meter_blue = new Sprite(this._mp_meter_img);
  this._mp_meter_blue.x = this._mp_meter_red.x;
  this._mp_meter_blue.y = this._mp_meter_red.y;
  this._mp_meter_blue.rotation = this._mp_meter_red.rotation;
  this.addChild(this._mp_meter_blue);
  if (String(Moghunter.bhud_mp_meter_flow) === "true") {
    this._mp_flow[0] = true;
    this._mp_flow[2] = this._mp_meter_img.width / 3;
    this._mp_flow[3] = this._mp_flow[2] * 2;
    this._mp_flow[1] = Math.floor(Math.random() * this._mp_flow[2]);
  }
};

//==============================
// * Create MP Number
//==============================
Battle_Hud.prototype.create_mp_number = function () {
  if (String(Moghunter.bhud_mp_number_visible) != "true") {
    return;
  }
  if (this._mp_number) {
    for (var i = 0; i < this._mp_number.length; i++) {
      this.removeChild(this._mp_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._mp_number = [];
  this._mp_img_data = [
    this._mp_number_img.width,
    this._mp_number_img.height,
    this._mp_number_img.width / 10,
    this._mp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_mp_number_pos_x,
    this._pos_y + Moghunter.bhud_mp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._mp_number[i] = new Sprite(this._mp_number_img);
    this._mp_number[i].visible = false;
    this._mp_number[i].x = this._mp_img_data[4];
    this._mp_number[i].y = this._mp_img_data[5];
    this.addChild(this._mp_number[i]);
  }
  this._mp_number_old = this._battler.mp;
  this.refresh_number(
    this._mp_number,
    this._mp_number_old,
    this._mp_img_data,
    this._mp_img_data[4],
    this._mp_img_data[5],
    1
  );
};

//==============================
// * Create MaxMP Number
//==============================
Battle_Hud.prototype.create_maxmp_number = function () {
  if (String(Moghunter.bhud_maxmp_number_visible) != "true") {
    return;
  }
  if (this._maxmp_number) {
    for (var i = 0; i < this._maxmp_number.length; i++) {
      this.removeChild(this._maxmp_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._maxmp_number = [];
  this._maxmp_img_data = [
    this._maxmp_number_img.width,
    this._maxmp_number_img.height,
    this._maxmp_number_img.width / 10,
    this._maxmp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_maxmp_number_pos_x,
    this._pos_y + Moghunter.bhud_maxmp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._maxmp_number[i] = new Sprite(this._maxmp_number_img);
    this._maxmp_number[i].visible = false;
    this._maxmp_number[i].x = this._maxmp_img_data[4];
    this._maxmp_number[i].y = this._maxmp_img_data[5];
    this.addChild(this._maxmp_number[i]);
  }
  this._maxmp_number_old = this._battler.mmp;
  this.refresh_number(
    this._maxmp_number,
    this._maxmp_number_old,
    this._maxmp_img_data,
    this._maxmp_img_data[4],
    this._maxmp_img_data[5],
    1
  );
};

//==============================
// * Update MP
//==============================
Battle_Hud.prototype.update_mp = function () {
  if (this._mp_meter_blue) {
    if (this._mp_flow[0]) {
      this.refresh_meter_flow(
        this._mp_meter_blue,
        this._battler.mp,
        this._battler.mmp,
        0,
        this._mp_flow[1]
      );
      var dif_meter = this.update_dif(
        this._mp_old_ani[0],
        this._battler.mp,
        160
      );
      if (this._mp_old_ani[0] != dif_meter) {
        this._mp_old_ani[0] = dif_meter;
        this.refresh_meter_flow(
          this._mp_meter_red,
          this._mp_old_ani[0],
          this._battler.mmp,
          1,
          this._mp_flow[1]
        );
      }
      this._mp_flow[1] += 1.5;
      if (this._mp_flow[1] > this._mp_flow[3]) {
        this._mp_flow[1] = 0;
      }
    } else {
      if (this.need_refresh_parameter(1)) {
        this.refresh_meter(
          this._mp_meter_blue,
          this._battler.mp,
          this._battler.mmp,
          0
        );
        this._mp_old = [this._battler.mp, this._battler.mmp];
      }
      var dif_meter = this.update_dif(
        this._mp_old_ani[0],
        this._battler.mp,
        160
      );
      if (this._mp_old_ani[0] != dif_meter) {
        this._mp_old_ani[0] = dif_meter;
        this.refresh_meter(
          this._mp_meter_red,
          this._mp_old_ani[0],
          this._battler.mmp,
          1
        );
      }
    }
  }
  if (this._mp_number) {
    var dif_number = this.update_dif(this._mp_number_old, this._battler.mp, 30);
    if (this._mp_number_old != dif_number) {
      this._mp_number_old = dif_number;
      this.refresh_number(
        this._mp_number,
        this._mp_number_old,
        this._mp_img_data,
        this._mp_img_data[4],
        this._mp_img_data[5],
        1
      );
    }
  }
  if (this._maxmp_number) {
    if (this._maxmp_number_old != this._battler.mmp) {
      this._maxmp_number_old = this._battler.mmp;
      this.refresh_number(
        this._maxmp_number,
        this._maxmp_number_old,
        this._maxmp_img_data,
        this._maxmp_img_data[4],
        this._maxmp_img_data[5],
        1
      );
    }
  }
};

//==============================
// * Create TP Meter
//==============================
Battle_Hud.prototype.create_tp_meter = function () {
  if (String(Moghunter.bhud_tp_meter_visible) != "true") {
    return;
  }
  this.removeChild(this._tp_meter_blue);
  this.removeChild(this._tp_meter_red);
  if (!this._battler) {
    return;
  }
  this._tp_meter_red = new Sprite(this._tp_meter_img);
  this._tp_meter_red.x = this._pos_x + Moghunter.bhud_tp_meter_pos_x;
  this._tp_meter_red.y = this._pos_y + Moghunter.bhud_tp_meter_pos_y;
  this._tp_meter_red.rotation =
    (Moghunter.bhud_tp_meter_rotation * Math.PI) / 180;
  this.addChild(this._tp_meter_red);
  this._tp_meter_blue = new Sprite(this._tp_meter_img);
  this._tp_meter_blue.x = this._tp_meter_red.x;
  this._tp_meter_blue.y = this._tp_meter_red.y;
  this._tp_meter_blue.rotation = this._tp_meter_red.rotation;
  this.addChild(this._tp_meter_blue);
  if (String(Moghunter.bhud_tp_meter_flow) === "true") {
    this._tp_flow[0] = true;
    this._tp_flow[2] = this._tp_meter_img.width / 3;
    this._tp_flow[3] = this._tp_flow[2] * 2;
    this._tp_flow[1] = Math.floor(Math.random() * this._tp_flow[2]);
  }
};

//==============================
// * Create TP Number
//==============================
Battle_Hud.prototype.create_tp_number = function () {
  if (String(Moghunter.bhud_tp_number_visible) != "true") {
    return;
  }
  if (this._tp_number) {
    for (var i = 0; i < this._tp_number.length; i++) {
      this.removeChild(this._tp_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._tp_number = [];
  this._tp_img_data = [
    this._tp_number_img.width,
    this._tp_number_img.height,
    this._tp_number_img.width / 10,
    this._tp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_tp_number_pos_x,
    this._pos_y + Moghunter.bhud_tp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._tp_number[i] = new Sprite(this._tp_number_img);
    this._tp_number[i].visible = false;
    this._tp_number[i].x = this._tp_img_data[4];

    this._tp_number[i].y = this._tp_img_data[5];
    this.addChild(this._tp_number[i]);
  }
  this._tp_number_old = this._battler.tp;
  this.refresh_number(
    this._tp_number,
    this._tp_number_old,
    this._tp_img_data,
    this._tp_img_data[4],
    this._tp_img_data[5],
    2
  );
};

//==============================
// * Create MaxTP Number
//==============================
Battle_Hud.prototype.create_maxtp_number = function () {
  if (String(Moghunter.bhud_maxtp_number_visible) != "true") {
    return;
  }
  if (this._maxtp_number) {
    for (var i = 0; i < this._maxtp_number.length; i++) {
      this.removeChild(this._maxtp_number[i]);
    }
  }
  if (!this._battler) {
    return;
  }
  this._maxtp_number = [];
  this._maxtp_img_data = [
    this._maxtp_number_img.width,
    this._maxtp_number_img.height,
    this._maxtp_number_img.width / 10,
    this._maxtp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_maxtp_number_pos_x,
    this._pos_y + Moghunter.bhud_maxtp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._maxtp_number[i] = new Sprite(this._maxtp_number_img);
    this._maxtp_number[i].visible = false;
    this._maxtp_number[i].x = this._maxtp_img_data[4];
    this._maxtp_number[i].y = this._maxtp_img_data[5];
    this.addChild(this._maxtp_number[i]);
  }
  this._maxtp_number_old = this._battler.maxTp();
  this.refresh_number(
    this._maxtp_number,
    this._maxtp_number_old,
    this._maxtp_img_data,
    this._maxtp_img_data[4],
    this._maxtp_img_data[5],
    2
  );
};

//==============================
// * Update TP
//==============================
Battle_Hud.prototype.update_tp = function () {
  if (this._tp_meter_blue) {
    if (this._tp_flow[0]) {
      this.refresh_meter_flow(
        this._tp_meter_blue,
        this._battler.tp,
        this._battler.maxTp(),
        0,
        this._tp_flow[1]
      );
      var dif_meter = this.update_dif(
        this._tp_old_ani[0],
        this._battler.tp,
        160
      );
      if (this._tp_old_ani[0] != dif_meter) {
        this._tp_old_ani[0] = dif_meter;
        this.refresh_meter_flow(
          this._tp_meter_red,
          this._tp_old_ani[0],
          this._battler.maxTp(),
          1,
          this._tp_flow[1]
        );
      }
      this._tp_flow[1] += 1.5;
      if (this._tp_flow[1] > this._tp_flow[3]) {
        this._tp_flow[1] = 0;
      }
    } else {
      if (this.need_refresh_parameter(2)) {
        this.refresh_meter(
          this._tp_meter_blue,
          this._battler.tp,
          this._battler.maxTp(),
          0
        );
        this._tp_old = [this._battler.tp, this._battler.maxTp()];
      }
      var dif_meter = this.update_dif(
        this._tp_old_ani[0],
        this._battler.tp,
        160
      );
      if (this._tp_old_ani[0] != dif_meter) {
        this._tp_old_ani[0] = dif_meter;
        this.refresh_meter(
          this._tp_meter_red,
          this._tp_old_ani[0],
          this._battler.maxTp(),
          1
        );
      }
    }
  }
  if (this._tp_number) {
    var dif_number = this.update_dif(this._tp_number_old, this._battler.tp, 30);
    if (this._tp_number_old != dif_number) {
      this._tp_number_old = dif_number;
      this.refresh_number(
        this._tp_number,
        this._tp_number_old,
        this._tp_img_data,
        this._tp_img_data[4],
        this._tp_img_data[5],
        2
      );
    }
  }
};

//==============================
// * Create AT Meter
//==============================
Battle_Hud.prototype.create_at_meter = function () {
  if (String(Moghunter.bhud_at_meter_visible) != "true") {
    return;
  }
  this.removeChild(this._at_meter);
  if (!this._battler) {
    return;
  }
  this._at_meter = new Sprite(this._at_meter_img);
  this._at_meter.x = this._pos_x + Moghunter.bhud_at_meter_pos_x;
  this._at_meter.y = this._pos_y + Moghunter.bhud_at_meter_pos_y;
  this._at_meter.rotation = (Moghunter.bhud_at_meter_rotation * Math.PI) / 180;
  this.addChild(this._at_meter);
  if (String(Moghunter.bhud_at_meter_flow) === "true") {
    this._at_flow[0] = true;
    this._at_flow[2] = this._at_meter_img.width / 3;
    this._at_flow[3] = this._at_flow[2] * 2;
    this._at_flow[1] = Math.floor(Math.random() * this._at_flow[2]);
  }
  this.check_compatibility_atb();
};

//==============================
// * Check Compatibility ATB
//==============================
Battle_Hud.prototype.check_compatibility_atb = function () {
  if (Imported.Ellye_ATB) {
    var parameters = $plugins.filter(function (p) {
      return p.description.contains("<Ellye ATB>");
    })[0].parameters;
    this._ellye_max_atb = Number(parameters["Full ATB Gauge"] || 50000);
  }
};

//==============================
// * Update AT
//==============================
Battle_Hud.prototype.update_at = function () {
  if (this._at_meter) {
    if (!this.at === -1) {
      this._at_meter.visible = false;
      return;
    } else {
      this._at_meter.visible = true;
    }
    if (this._at_flow[0]) {
      if (this.is_casting()) {
        if (this.is_max_cast()) {
          this.refresh_at_meter_flow(
            this._at_meter,
            this.cast_at(),
            this.cast_max_at(),
            3,
            this._at_flow[1]
          );
        } else {
          this.refresh_at_meter_flow(
            this._at_meter,
            this.cast_at(),
            this.cast_max_at(),
            2,
            this._at_flow[1]
          );
        }
      } else if (this.is_max_at()) {
        this.refresh_at_meter_flow(
          this._at_meter,
          this.at(),
          this.max_at(),
          1,
          this._at_flow[1]
        );
      } else {
        this.refresh_at_meter_flow(
          this._at_meter,
          this.at(),
          this.max_at(),
          0,
          this._at_flow[1]
        );
      }

      this._at_flow[1] += 1.5;
      if (this._at_flow[1] > this._at_flow[3]) {
        this._at_flow[1] = 0;
      }
    } else {
      if (this.is_casting()) {
        if (this.is_max_cast()) {
          this.refresh_at_meter(
            this._at_meter,
            this.cast_at(),
            this.cast_max_at(),
            3
          );
        } else {
          this.refresh_at_meter(
            this._at_meter,
            this.cast_at(),
            this.cast_max_at(),
            2
          );
        }
      } else if (this.is_max_at()) {
        this.refresh_at_meter(this._at_meter, this.at(), this.max_at(), 1);
      } else {
        this.refresh_at_meter(this._at_meter, this.at(), this.max_at(), 0);
      }
    }
  }
};

//==============================
// * Create ACP Meter
//==============================
Battle_Hud.prototype.create_acp_meter = function () {
  if (String(Moghunter.bhud_acp_meter_visible) != "true") {
    return;
  }
  this.removeChild(this._acp_meter_blue);
  this.removeChild(this._acp_meter_red);
  if (this._variables.value(2) === -1) {
    return;
  }
  this._acp_meter_red = new Sprite(this._acp_meter_img);
  this._acp_meter_red.x = this._pos_x + Moghunter.bhud_acp_meter_pos_x;
  this._acp_meter_red.y = this._pos_y + Moghunter.bhud_acp_meter_pos_y;
  this._acp_meter_red.rotation =
    (Moghunter.bhud_acp_meter_rotation * Math.PI) / 180;
  this._acp_meter_red.setFrame(0, 0, 0, 0);
  this.addChild(this._acp_meter_red);
  this._acp_meter_blue = new Sprite(this._acp_meter_img);
  this._acp_meter_blue.x = this._acp_meter_red.x;
  this._acp_meter_blue.y = this._acp_meter_red.y;
  this._acp_meter_blue.rotation =
    (this._acp_meter_red.rotation * Math.PI) / 180;
  this._acp_meter_blue.setFrame(0, 0, 0, 0);
  this.addChild(this._acp_meter_blue);
  this._acp_old_ani[0] = this._variables.value(2);
  if (String(Moghunter.bhud_acp_meter_flow) === "true") {
    this._acp_flow[0] = true;
    this._acp_flow[2] = this._acp_meter_img.width / 3;
    this._acp_flow[3] = this._acp_flow[2] * 2;
    this._acp_flow[1] = Math.floor(Math.random() * this._acp_flow[2]);
  }
};

//==============================
// * Create ACP Number
//==============================
Battle_Hud.prototype.create_acp_number = function () {
  if (String(Moghunter.bhud_acp_number_visible) != "true") {
    return;
  }
  if (this._acp_number) {
    for (var i = 0; i < this._acp_number.length; i++) {
      this.removeChild(this._acp_number[i]);
    }
  }
  if (this._variables.value(2) === -1) {
    return;
  }
  this._acp_number = [];
  this._acp_number.align = Number(Moghunter.bhud_acp_number_align);
  this._acp_img_data = [
    this._acp_number_img.width,
    this._acp_number_img.height,
    this._acp_number_img.width / 10,
    this._acp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_acp_number_pos_x,
    this._pos_y + Moghunter.bhud_acp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._acp_number[i] = new Sprite(this._acp_number_img);
    this._acp_number[i].visible = false;
    this._acp_number[i].x = this._acp_img_data[4];
    this._acp_number[i].y = this._acp_img_data[5];
    this.addChild(this._acp_number[i]);
  }
  this._acp_number_old = this._variables.value(2);
  this.refresh_number2(
    this._acp_number,
    this._acp_number_old,
    this._acp_img_data,
    this._acp_img_data[4],
    0
  );
};

//==============================
// * Create maxACP Number
//==============================
Battle_Hud.prototype.create_maxacp_number = function () {
  if (String(Moghunter.bhud_maxacp_number_visible) != "true") {
    return;
  }
  if (this._maxacp_number) {
    for (var i = 0; i < this._maxacp_number.length; i++) {
      this.removeChild(this._maxacp_number[i]);
    }
  }
  if (this._variables.value(2) === -1) {
    return;
  }
  this._maxacp_number = [];
  this._maxacp_number.align = Number(Moghunter.bhud_acp_number_align);
  this._maxacp_img_data = [
    this._maxacp_number_img.width,
    this._maxacp_number_img.height,
    this._maxacp_number_img.width / 10,
    this._maxacp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_maxacp_number_pos_x,
    this._pos_y + Moghunter.bhud_maxacp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._maxacp_number[i] = new Sprite(this._maxacp_number_img);
    this._maxacp_number[i].visible = false;
    this._maxacp_number[i].x = this._maxacp_img_data[4];
    this._maxacp_number[i].y = this._maxacp_img_data[5];
    this.addChild(this._maxacp_number[i]);
  }
  this._maxacp_number_old = 100;
  this.refresh_number2(
    this._maxacp_number,
    this._maxacp_number_old,
    this._maxacp_img_data,
    this._maxacp_img_data[4],
    0
  );
};

//==============================
// * Create ACP icon
//==============================
Battle_Hud.prototype.create_acp_icon = function () {
  if (String(Moghunter.bhud_acp_icon_visible) != "true") {
    return;
  }
  if (this._acp_icons) {
    for (var i = 0; i < this._acp_icons.length; i++) {
      this.removeChild(this._acp_icons[i]);
    }
    for (var i = 0; i < this._acp_iconsB.length; i++) {
      this.removeChild(this._acp_iconsB[i]);
    }
  }
  if (this._variables.value(2) === -1) {
    return;
  }
  var n_icons = Moghunter.bhud_acp_icon_rows * Moghunter.bhud_acp_icon_cols;
  this._acp_icons = [];
  this._acp_icons.iconMode =
    String(Moghunter.bhud_acp_icon_halfMode) == "true" ? true : false;
  this._acp_iconsB = [];

  this._acp_iconsB.iconMode = this._acp_icons.iconMode;
  this._acp_IconZoomAnime =
    String(Moghunter.bhud_acp_icon_zoomAnime) == "true" ? true : false;
  var colors = Math.max(Moghunter.bhud_acp_icon_colorMax, 2);
  var cw = this._acp_icon_img.width / colors;
  var ch = this._acp_icon_img.height / 2;
  for (var i = 0; i < n_icons; i++) {
    this._acp_iconsB[i] = new Sprite(this._acp_icon_img);
    this._acp_iconsB[i].colorMax = colors;
    this._acp_iconsB[i].anchor.x = 0.5;
    this._acp_iconsB[i].anchor.y = 0.5;
    this._acp_iconsB[i].rows = Moghunter.bhud_acp_icon_rows;
    this._acp_iconsB[i].cols = Moghunter.bhud_acp_icon_cols;
    this._acp_iconsB[i].org = [
      this._pos_x + Moghunter.bhud_acp_icon_pos_x - cw,
      this._pos_y + Moghunter.bhud_acp_icon_pos_y - ch,
    ];
    this._acp_iconsB[i].spc = [
      Moghunter.bhud_acp_icon_space_x,
      Moghunter.bhud_acp_icon_space_y,
    ];
    this._acp_iconsB[i].zoomA = this._acp_IconZoomAnime;
    this._acp_iconsB[i].zoomData = [0, 0, 0, 1.0];
    this._acp_iconsB[i].visible = false;
    this._acp_iconsB[i].enabled = false;
    this.addChild(this._acp_iconsB[i]);
  }
  for (var i = 0; i < n_icons; i++) {
    this._acp_icons[i] = new Sprite(this._acp_icon_img);
    // this._acp_icons[i].colorMax = Math.max(Moghunter.bhud_acp_icon_colorMax, 2);
    this._acp_icons[i].anchor.x = 0.5;
    this._acp_icons[i].anchor.y = 0.5;
    this._acp_icons[i].rows = Moghunter.bhud_acp_icon_rows;
    this._acp_icons[i].cols = Moghunter.bhud_acp_icon_cols;
    this._acp_icons[i].org = [
      this._pos_x + Moghunter.bhud_acp_icon_pos_x - cw,
      this._pos_y + Moghunter.bhud_acp_icon_pos_y - ch,
    ];
    this._acp_icons[i].spc = [
      Moghunter.bhud_acp_icon_space_x,
      Moghunter.bhud_acp_icon_space_y,
    ];
    this._acp_icons[i].zoomA = this._acp_IconZoomAnime;
    this._acp_icons[i].zoomData = [0, 0, 0, 1.0];
    this._acp_icons[i].visible = false;
    this._acp_icons[i].enabled = false;
    this.addChild(this._acp_icons[i]);
  }
};

//==============================
// * Update ACP
//==============================
Battle_Hud.prototype.update_acp = function () {
  if (this._variables.value(2) === -1) {
    if (this._acp_meter_blue) {
      this.removeChild(this._acp_meter_blue);
      this.removeChild(this._acp_meter_red);
    }
    if (this._acp_number) {
      for (var i = 0; i < this._acp_number.length; i++) {
        this.removeChild(this._acp_number[i]);
      }
    }
    if (this._maxacp_number) {
      for (var i = 0; i < this._maxacp_number.length; i++) {
        this.removeChild(this._maxacp_number[i]);
      }
    }
    if (this._acp_icons) {
      for (var i = 0; i < this._acp_icons.length; i++) {
        this.removeChild(this._acp_icons[i]);
      }
      for (var i = 0; i < this._acp_iconsB.length; i++) {
        this.removeChild(this._acp_iconsB[i]);
      }
    }
  }
  if (this._acp_meter_blue) {
    if (this._acp_flow[0]) {
      if (this._acp_old[1] != 100) {
        this._acp_old = [this._variables.value(2), 100];
        this.refresh_meter_flow(
          this._acp_meter_red,
          this._variables.value(2),
          100,
          1,
          $gameSystem._bhud_flowData[0]
        );
      }
      this.refresh_meter_flow(
        this._acp_meter_blue,
        this._variables.value(2),
        100,
        0,
        $gameSystem._bhud_flowData[0]
      );
      var dif_meter = this.update_dif(
        this._acp_old_ani[0],
        this._variables.value(2),
        160
      );
      if (this._acp_old_ani[0] != dif_meter) {
        this._acp_old_ani[0] = dif_meter;
        this.refresh_meter_flow(
          this._acp_meter_red,
          this._acp_old_ani[0],
          100,
          1,
          $gameSystem._bhud_flowData[0]
        );
      }
      $gameSystem._bhud_flowData[0] += this._acp_flow_speed;
      if ($gameSystem._bhud_flowData[0] > this._acp_flow[3]) {
        $gameSystem._bhud_flowData[0] = 0;
      }
    } else {
      if (this.need_refresh_parameter(3)) {
        this.refresh_meter(
          this._acp_meter_blue,
          this._variables.value(2),
          100,
          0
        );
        this._acp_old = [this._variables.value(2), 100];
      }
      var dif_meter = this.update_dif(
        this._acp_old_ani[0],
        this._variables.value(2),
        160
      );
      if (this._acp_old_ani[0] != dif_meter) {
        this._acp_old_ani[0] = dif_meter;
        this.refresh_meter(this._acp_meter_red, this._acp_old_ani[0], 100, 1);
      }
    }
  }
  if (this._acp_number) {
    var dif_number = this.update_dif(
      this._acp_number_old,
      this._variables.value(2),
      30
    );
    if (this._acp_number_old != dif_number) {
      this._acp_number_old = dif_number;
      this.refresh_number2(
        this._acp_number,
        this._acp_number_old,
        this._acp_img_data,
        this._acp_img_data[4],
        0
      );
    }
  }
  if (this._maxacp_number) {
    if (this._maxacp_number_old != 100) {
      this._maxacp_number_old = 100;
      this.refresh_number2(
        this._maxacp_number,
        this._maxacp_number_old,
        this._maxacp_img_data,
        this._maxacp_img_data[4],
        0
      );
    }
  }
  if (this._acp_icons) {
    if (
      this._acp_icon_old[0] != this._variables.value(2) ||
      this._acp_icon_old[1] != 100
    ) {
      this._acp_icon_old[0] = this._variables.value(2);
      this._acp_icon_old[1] = 100;
      this.refreshIconNormalMode(
        this._acp_iconsB,
        this._acp_icon_img,
        this._variables.value(2),
        100,
        0
      );
      this.refreshIconNormalMode(
        this._acp_icons,
        this._acp_icon_img,
        this._variables.value(2),
        100,
        1
      );
    }
    if (this._acp_IconZoomAnime) {
      this.updateIconZoomAnime(this._acp_icons);
    }
  }
};

//==============================
// * Create LCP Meter
//==============================
Battle_Hud.prototype.create_lcp_meter = function () {
  if (String(Moghunter.bhud_lcp_meter_visible) != "true") {
    return;
  }
  this.removeChild(this._lcp_meter_blue);
  this.removeChild(this._lcp_meter_red);
  if (this._variables.value(3) === -1) {
    return;
  }
  this._lcp_meter_red = new Sprite(this._lcp_meter_img);
  this._lcp_meter_red.x = this._pos_x + Moghunter.bhud_lcp_meter_pos_x;
  this._lcp_meter_red.y = this._pos_y + Moghunter.bhud_lcp_meter_pos_y;
  this._lcp_meter_red.rotation =
    (Moghunter.bhud_lcp_meter_rotation * Math.PI) / 180;
  this._lcp_meter_red.setFrame(0, 0, 0, 0);
  this.addChild(this._lcp_meter_red);
  this._lcp_meter_blue = new Sprite(this._lcp_meter_img);
  this._lcp_meter_blue.x = this._lcp_meter_red.x;
  this._lcp_meter_blue.y = this._lcp_meter_red.y;
  this._lcp_meter_blue.rotation =
    (this._lcp_meter_red.rotation * Math.PI) / 180;
  this._lcp_meter_blue.setFrame(0, 0, 0, 0);
  this.addChild(this._lcp_meter_blue);
  this._lcp_old_ani[0] = this._variables.value(3);
  if (String(Moghunter.bhud_lcp_meter_flow) === "true") {
    this._lcp_flow[0] = true;
    this._lcp_flow[2] = this._lcp_meter_img.width / 3;
    this._lcp_flow[3] = this._lcp_flow[2] * 2;
    this._lcp_flow[1] = Math.floor(Math.random() * this._lcp_flow[2]);
  }
};

//==============================
// * Create LCP Number
//==============================
Battle_Hud.prototype.create_lcp_number = function () {
  if (String(Moghunter.bhud_lcp_number_visible) != "true") {
    return;
  }
  if (this._lcp_number) {
    for (var i = 0; i < this._lcp_number.length; i++) {
      this.removeChild(this._lcp_number[i]);
    }
  }
  if (this._variables.value(3) === -1) {
    return;
  }
  this._lcp_number = [];
  this._lcp_number.align = Number(Moghunter.bhud_lcp_number_align);
  this._lcp_img_data = [
    this._lcp_number_img.width,
    this._lcp_number_img.height,
    this._lcp_number_img.width / 10,
    this._lcp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_lcp_number_pos_x,
    this._pos_y + Moghunter.bhud_lcp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._lcp_number[i] = new Sprite(this._lcp_number_img);
    this._lcp_number[i].visible = false;
    this._lcp_number[i].x = this._lcp_img_data[4];
    this._lcp_number[i].y = this._lcp_img_data[5];
    this.addChild(this._lcp_number[i]);
  }
  this._lcp_number_old = this._variables.value(3);
  this.refresh_number2(
    this._lcp_number,
    this._lcp_number_old,
    this._lcp_img_data,
    this._lcp_img_data[4],
    0
  );
};

//==============================
// * Create maxLCP Number
//==============================
Battle_Hud.prototype.create_maxlcp_number = function () {
  if (String(Moghunter.bhud_maxlcp_number_visible) != "true") {
    return;
  }
  if (this._maxlcp_number) {
    for (var i = 0; i < this._maxlcp_number.length; i++) {
      this.removeChild(this._maxlcp_number[i]);
    }
  }
  if (this._variables.value(3) === -1) {
    return;
  }
  this._maxlcp_number = [];
  this._maxlcp_number.align = Number(Moghunter.bhud_lcp_number_align);
  this._maxlcp_img_data = [
    this._maxlcp_number_img.width,
    this._maxlcp_number_img.height,
    this._maxlcp_number_img.width / 10,
    this._maxlcp_number_img.height / 2,
    this._pos_x + Moghunter.bhud_maxlcp_number_pos_x,
    this._pos_y + Moghunter.bhud_maxlcp_number_pos_y,
  ];
  for (var i = 0; i < 5; i++) {
    this._maxlcp_number[i] = new Sprite(this._maxlcp_number_img);
    this._maxlcp_number[i].visible = false;
    this._maxlcp_number[i].x = this._maxlcp_img_data[4];
    this._maxlcp_number[i].y = this._maxlcp_img_data[5];
    this.addChild(this._maxlcp_number[i]);
  }
  this._maxlcp_number_old = 100;
  this.refresh_number2(
    this._maxlcp_number,
    this._maxlcp_number_old,
    this._maxlcp_img_data,
    this._maxlcp_img_data[4],
    0
  );
};

//==============================
// * Create LCP icon
//==============================
Battle_Hud.prototype.create_lcp_icon = function () {
  if (String(Moghunter.bhud_lcp_icon_visible) != "true") {
    return;
  }
  if (this._lcp_icons) {
    for (var i = 0; i < this._lcp_icons.length; i++) {
      this.removeChild(this._lcp_icons[i]);
    }
    for (var i = 0; i < this._lcp_iconsB.length; i++) {
      this.removeChild(this._lcp_iconsB[i]);
    }
  }
  if (this._variables.value(3) === -1) {
    return;
  }
  var n_icons = Moghunter.bhud_lcp_icon_rows * Moghunter.bhud_lcp_icon_cols;
  this._lcp_icons = [];
  this._lcp_icons.iconMode =
    String(Moghunter.bhud_lcp_icon_halfMode) == "true" ? true : false;
  this._lcp_iconsB = [];

  this._lcp_iconsB.iconMode = this._lcp_icons.iconMode;
  this._lcp_IconZoomAnime =
    String(Moghunter.bhud_lcp_icon_zoomAnime) == "true" ? true : false;
  var colors = Math.max(Moghunter.bhud_lcp_icon_colorMax, 2);
  var cw = this._lcp_icon_img.width / colors;
  var ch = this._lcp_icon_img.height / 2;
  for (var i = 0; i < n_icons; i++) {
    this._lcp_iconsB[i] = new Sprite(this._lcp_icon_img);
    this._lcp_iconsB[i].colorMax = colors;
    this._lcp_iconsB[i].anchor.x = 0.5;
    this._lcp_iconsB[i].anchor.y = 0.5;
    this._lcp_iconsB[i].rows = Moghunter.bhud_lcp_icon_rows;
    this._lcp_iconsB[i].cols = Moghunter.bhud_lcp_icon_cols;
    this._lcp_iconsB[i].org = [
      this._pos_x + Moghunter.bhud_lcp_icon_pos_x - cw,
      this._pos_y + Moghunter.bhud_lcp_icon_pos_y - ch,
    ];
    this._lcp_iconsB[i].spc = [
      Moghunter.bhud_lcp_icon_space_x,
      Moghunter.bhud_lcp_icon_space_y,
    ];
    this._lcp_iconsB[i].zoomA = this._lcp_IconZoomAnime;
    this._lcp_iconsB[i].zoomData = [0, 0, 0, 1.0];
    this._lcp_iconsB[i].visible = false;
    this._lcp_iconsB[i].enabled = false;
    this.addChild(this._lcp_iconsB[i]);
  }
  for (var i = 0; i < n_icons; i++) {
    this._lcp_icons[i] = new Sprite(this._lcp_icon_img);
    // this._lcp_icons[i].colorMax = Math.max(Moghunter.bhud_lcp_icon_colorMax, 2);
    this._lcp_icons[i].anchor.x = 0.5;
    this._lcp_icons[i].anchor.y = 0.5;
    this._lcp_icons[i].rows = Moghunter.bhud_lcp_icon_rows;
    this._lcp_icons[i].cols = Moghunter.bhud_lcp_icon_cols;
    this._lcp_icons[i].org = [
      this._pos_x + Moghunter.bhud_lcp_icon_pos_x - cw,
      this._pos_y + Moghunter.bhud_lcp_icon_pos_y - ch,
    ];
    this._lcp_icons[i].spc = [
      Moghunter.bhud_lcp_icon_space_x,
      Moghunter.bhud_lcp_icon_space_y,
    ];
    this._lcp_icons[i].zoomA = this._lcp_IconZoomAnime;
    this._lcp_icons[i].zoomData = [0, 0, 0, 1.0];
    this._lcp_icons[i].visible = false;
    this._lcp_icons[i].enabled = false;
    this.addChild(this._lcp_icons[i]);
  }
};

//==============================
// * Update LCP
//==============================
Battle_Hud.prototype.update_lcp = function () {
  // 変数2が-1になったら表示消す
  // if (this._variables.value(3) === -1) {
  // 	if (this._lcp_meter_blue) {
  // 		this.removeChild(this._lcp_meter_blue);
  // 		this.removeChild(this._lcp_meter_red);
  // 	};
  // 	if (this._lcp_number) {
  // 		for (var i = 0; i < this._lcp_number.length; i++) { this.removeChild(this._lcp_number[i]); };
  // 	};
  // 	if (this._maxlcp_number) {
  // 		for (var i = 0; i < this._maxlcp_number.length; i++) { this.removeChild(this._maxlcp_number[i]); };
  // 	};
  // 	if (this._lcp_icons) {
  // 		for (var i = 0; i < this._lcp_icons.length; i++) { this.removeChild(this._lcp_icons[i]); };
  // 		for (var i = 0; i < this._lcp_iconsB.length; i++) { this.removeChild(this._lcp_iconsB[i]); };
  // 	};
  // };
  if (this._lcp_meter_blue) {
    if (this._lcp_flow[0]) {
      if (this._lcp_old[1] != 100) {
        this._lcp_old = [this._variables.value(3), 100];
        this.refresh_meter_flow(
          this._lcp_meter_red,
          this._variables.value(3),
          100,
          1,
          $gameSystem._bhud_flowData[0]
        );
      }
      this.refresh_meter_flow(
        this._lcp_meter_blue,
        this._variables.value(3),
        100,
        0,
        $gameSystem._bhud_flowData[0]
      );
      var dif_meter = this.update_dif(
        this._lcp_old_ani[0],
        this._variables.value(3),
        160
      );
      if (this._lcp_old_ani[0] != dif_meter) {
        this._lcp_old_ani[0] = dif_meter;
        this.refresh_meter_flow(
          this._lcp_meter_red,
          this._lcp_old_ani[0],
          100,
          1,
          $gameSystem._bhud_flowData[0]
        );
      }
      $gameSystem._bhud_flowData[0] += this._lcp_flow_speed;
      if ($gameSystem._bhud_flowData[0] > this._lcp_flow[3]) {
        $gameSystem._bhud_flowData[0] = 0;
      }
    } else {
      if (this.need_refresh_parameter(4)) {
        this.refresh_meter(
          this._lcp_meter_blue,
          this._variables.value(3),
          100,
          0
        );
        this._lcp_old = [this._variables.value(3), 100];
      }
      var dif_meter = this.update_dif(
        this._lcp_old_ani[0],
        this._variables.value(3),
        160
      );
      if (this._lcp_old_ani[0] != dif_meter) {
        this._lcp_old_ani[0] = dif_meter;
        this.refresh_meter(this._lcp_meter_red, this._lcp_old_ani[0], 100, 1);
      }
    }
  }
  if (this._lcp_number) {
    var dif_number = this.update_dif(
      this._lcp_number_old,
      this._variables.value(3),
      30
    );
    if (this._lcp_number_old != dif_number) {
      this._lcp_number_old = dif_number;
      this.refresh_number2(
        this._lcp_number,
        this._lcp_number_old,
        this._lcp_img_data,
        this._lcp_img_data[4],
        0
      );
    }
  }
  if (this._maxlcp_number) {
    if (this._maxlcp_number_old != 100) {
      this._maxlcp_number_old = 100;
      this.refresh_number2(
        this._maxlcp_number,
        this._maxlcp_number_old,
        this._maxlcp_img_data,
        this._maxlcp_img_data[4],
        0
      );
    }
  }
  if (this._lcp_icons) {
    if (
      this._lcp_icon_old[0] != this._variables.value(3) ||
      this._lcp_icon_old[1] != 100
    ) {
      this._lcp_icon_old[0] = this._variables.value(3);
      this._lcp_icon_old[1] = 100;
      this.refreshIconNormalMode(
        this._lcp_iconsB,
        this._lcp_icon_img,
        this._variables.value(3),
        100,
        0
      );
      this.refreshIconNormalMode(
        this._lcp_icons,
        this._lcp_icon_img,
        this._variables.value(3),
        100,
        1
      );
    }
    if (this._lcp_IconZoomAnime) {
      this.updateIconZoomAnime(this._lcp_icons);
    }
  }
};

//==============================
// * refresh Icon Normal Mode
//==============================
Battle_Hud.prototype.refreshIconNormalMode = function (
  sprites,
  image,
  par,
  par_max,
  mode
) {
  for (var i = 0; i < sprites.length; i++) {
    var icon = sprites[i];
    var cw = image.width / icon.colorMax;
    var ch = image.height;
    var iconMax = icon.rows;
    var colorIndex = Math.floor(par / iconMax);
    var colorMax = icon.colorMax;
    var avaliableValue = Math.floor(colorIndex * iconMax);
    var realvalue = par - avaliableValue;
    var isMaxValue = par === avaliableValue ? true : false;
    var colorIndex2 = Math.floor(par_max / iconMax);
    var avaliableValue2 = Math.floor(colorIndex2 * iconMax);
    var realvalue2 = par_max - avaliableValue2;
    var maxvalue = iconMax * (colorMax - 1);
    var hp =
      cw *
      this.setColorIndex(
        i,
        mode,
        par,
        par_max,
        realvalue,
        isMaxValue,
        colorIndex,
        colorMax,
        maxvalue
      );
    icon.visible = this.isIconVisible(
      i,
      mode,
      par,
      par_max,
      realvalue,
      isMaxValue,
      colorIndex,
      colorIndex2,
      realvalue2,
      icon,
      maxvalue
    );
    icon.enable = this.isIconEnabled(
      i,
      mode,
      par,
      par_max,
      realvalue,
      iconMax,
      colorIndex,
      colorMax,
      maxvalue
    );
    icon.scale.x = 1.0;
    icon.zoomData = [0, 0, 0, icon.scale.x];
    this.setFrameIcon(icon, image, i, hp, cw, ch);
  }
};

//==============================
// * Update Inyoku
//==============================
Battle_Hud.prototype.update_inyoku = function () {
  if (this._inyoku) {
    if (this._variables.value(1) === -1) {
      for (var i = 0; i < this._inyoku.length; i++) {
        this.removeChild(this._inyoku[i]);
      }
      return;
    }
    var dif_number = this.update_dif(
      this._inyoku_old,
      this._variables.value(1),
      30
    );
    if (this._inyoku_old != dif_number) {
      this._inyoku_old = dif_number;
      if (this._hp_old_ani) {
        this._hp_old_ani[0] = 0;
      }
      if (this._mp_old_ani) {
        this._mp_old_ani[0] = 0;
      }
      if (this._tp_old_ani) {
        this._tp_old_ani[0] = 0;
      }
      this.refresh_number2(
        this._inyoku,
        this._inyoku_old,
        this._inyoku_img_data,
        this._inyoku_img_data[4],
        1
      );
    }
  }
};

//==============================
// * set Color Index
//==============================
Battle_Hud.prototype.setColorIndex = function (
  i,
  mode,
  par,
  par_max,
  realvalue,
  isMaxValue,
  colorIndex,
  colorMax,
  maxvalue
) {
  if (par === 0) {
    return 0;
  }
  if (colorIndex >= colorMax || par > maxvalue) {
    return colorMax - 1;
  }
  if (mode === 0) {
    return colorIndex;
  }
  if (mode === 1) {
    if (realvalue === 0) {
      return colorIndex;
    }
    return colorIndex + 1;
  }
  return 0;
};

//==============================
// * is Icon Visible
//==============================
Battle_Hud.prototype.isIconVisible = function (
  i,
  mode,
  par,
  par_max,
  realvalue,
  isMaxValue,
  colorIndex,
  colorIndex2,
  realvalue2,
  icon,
  maxvalue
) {
  icon.opacity = 255;
  icon.blendMode = 0;
  if (mode === 0) {
    if (i >= par_max) {
      return false;
    }
    return true;
  }
  if (par === 0) {
    return false;
  }
  if (par > maxvalue) {
    icon.opacity = 155;
    icon.blendMode = 1;
    return true;
  }
  if (isMaxValue) {
    return true;
  }
  if (colorIndex > 0 && colorIndex2 >= colorIndex) {
    icon.opacity = i >= realvalue ? 0 : 255;
    icon.blendMode = i >= realvalue ? 1 : 0;
    if (colorIndex2 > colorIndex) {
      return true;
    }
    if (i >= realvalue2) {
      return false;
    }
  } else {
    if (i >= realvalue) {
      return false;
    }
  }
  return true;
};

//==============================
// * is Icon Enabled
//==============================
Battle_Hud.prototype.isIconEnabled = function (
  i,
  mode,
  par,
  par_max,
  realvalue,
  iconMax,
  colorIndex,
  colorMax,
  maxvalue
) {
  if (mode === 0) {
    return false;
  }
  if (par === 0) {
    return false;
  }
  if (colorIndex >= colorMax || par > maxvalue) {
    return true;
  }
  if (realvalue != 0 && i === realvalue - 1) {
    return true;
  }
  if (realvalue === 0 && i === iconMax - 1) {
    return true;
  }
  return false;
};

//==============================
// * setFrameIcon
//==============================
Battle_Hud.prototype.setFrameIcon = function (icon, image, i, hp, cw, ch) {
  var sX = cw + 2 + icon.spc[0];
  var sY = ch + 2 + icon.spc[1];
  var lX = sX * icon.rows;
  var lines = Math.floor(i / icon.rows);
  icon.scale.y = icon.scale.x;
  icon.setFrame(hp, 0, cw, ch);
  icon.x = icon.org[0] + sX * i - lX * lines;
  icon.y = icon.org[1] + sY * lines;
};

//==============================
// * Refresh AT Meter
//==============================
Battle_Hud.prototype.refresh_at_meter = function (
  sprite,
  value,
  value_max,
  type
) {
  var ch = sprite.bitmap.height / 4;
  var meter_rate = (sprite.bitmap.width * value) / value_max;
  sprite.setFrame(0, type * ch, meter_rate, ch);
};

//==============================
// * Refresh AT Meter Flow
//==============================
Battle_Hud.prototype.refresh_at_meter_flow = function (
  sprite,
  value,
  value_max,
  type,
  flow
) {
  var cw = sprite.bitmap.width / 3;
  var ch = sprite.bitmap.height / 4;
  var meter_rate = (cw * value) / value_max;
  sprite.setFrame(flow, type * ch, meter_rate, ch);
};

//==============================
// * At
//==============================
Battle_Hud.prototype.at = function () {
  if (Imported.MOG_ATB) {
    return this._battler._atb;
  }
  if (Imported.Ellye_ATB) {
    return this._battler.atb;
  }
  if (Imported.YEP_X_BattleSysATB) {
    return Math.abs(this._battler._atbSpeed);
  }
  if (Imported["VE - Active Time Battle"]) {
    return this._battler.maxAtb - this._battler.atb;
  }
  if (this._battler._ras && $gameSystem.isChronoMode()) {
    return this._battler._chrono.atb;
  }
  return -1;
};

//==============================
// * Max At
//==============================
Battle_Hud.prototype.max_at = function () {
  if (Imported.MOG_ATB) {
    return this._battler._max_atb;
  }
  if (Imported.Ellye_ATB) {
    return this._ellye_max_atb;
  }
  if (Imported.YEP_X_BattleSysATB) {
    return Math.abs(BattleManager._atbTarget);
  }
  if (Imported["VE - Active Time Battle"]) {
    return this._battler.maxAtb;
  }
  if (this._battler._ras && $gameSystem.isChronoMode()) {
    return this._battler._chrono.maxAtb;
  }
  return 1;
};

//==============================
// * Cast AT
//==============================
Battle_Hud.prototype.cast_at = function () {
  if (Imported.MOG_ATB) {
    return this._battler._cast_atb[1];
  }
  if (Imported.Ellye_ATB) {
    return this._battler.current_cast_atb;
  }
  if (Imported.YEP_X_BattleSysATB) {
    return Math.abs(this._battler._atbCharge);
  }
  if (Imported["VE - Active Time Battle"]) {
    return this._battler.maxAtb - this._battler.atb;
  }
  if (this._battler._ras && $gameSystem.isChronoMode()) {
    return this._battler._ras.cast.duration;
  }
  return 0;
};

//==============================
// * Cast Max AT
//==============================
Battle_Hud.prototype.cast_max_at = function () {
  if (Imported.MOG_ATB) {
    return this._battler._cast_atb[2];
  }
  if (Imported.Ellye_ATB) {
    return this._battler.target_cast_atb;
  }
  if (Imported.YEP_X_BattleSysATB) {
    return Math.abs(BattleManager._atbCharge);
  }
  if (Imported["VE - Active Time Battle"]) {
    return this._battler.maxAtb;
  }
  if (this._battler._ras && $gameSystem.isChronoMode()) {
    return this._battler._ras.cast.maxDuration;
  }
  return 1;
};

//==============================
// * Is Casting
//==============================
Battle_Hud.prototype.is_casting = function () {
  if (Imported.MOG_ATB) {
    if (this._battler._cast_atb[0]) {
      return true;
    }
  }
  if (Imported.Ellye_ATB) {
    if (this._battler.casting_action) {
      return true;
    }
  }
  if (Imported.YEP_X_BattleSysATB) {
    if (this._battler._atbCharging) {
      return true;
    }
  }
  if (Imported["VE - Active Time Battle"]) {
    return this._battler.isAtbCast();
  }
  if (this._battler._chrono && $gameSystem.isChronoMode()) {
    return this._battler.isCastingC();
  }
  return false;
};

//==============================
// * Is Max Atb
//==============================
Battle_Hud.prototype.is_max_at = function () {
  return this.at() >= this.max_at();
};

//==============================
// * Is Max Cast
//==============================
Battle_Hud.prototype.is_max_cast = function () {
  return this.cast_at() >= this.cast_max_at();
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.create_states = function () {
  if (String(Moghunter.bhud_states_visible) != "true") {
    return;
  }
  this.removeChild(this._state_icon);
  if (!this._battler) {
    return;
  }
  this._states_data = [0, 0, 0];
  this._state_icon = new Sprite(this._state_img);
  this._state_icon.x = this._pos_x + Moghunter.bhud_states_pos_x;
  this._state_icon.y = this._pos_y + Moghunter.bhud_states_pos_y;
  this._state_icon.visible = false;
  this.addChild(this._state_icon);
  this.refresh_states();
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.refresh_states = function () {
  this._states_data[0] = 0;
  this._states_data[2] = 0;
  this._state_icon.visible = false;
  if (this._battler.allIcons().length == 0) {
    this._states_data[1] = 0;
    return;
  }
  if (this._battler.allIcons()[this._states_data[1]]) {
    this._states_data[0] = this._battler.allIcons()[this._states_data[1]];
    this._state_icon.visible = true;
    var sx = (this._states_data[0] % 16) * 32;
    var sy = Math.floor(this._states_data[0] / 16) * 32;
    this._state_icon.setFrame(sx, sy, 32, 32);
    this._battler.need_refresh_bhud_states = false;
  }
  this._states_data[1] += 1;
  if (this._states_data[1] >= this._battler.allIcons().length) {
    this._states_data[1] = 0;
  }
};

//==============================
// * Update States
//==============================
Battle_Hud.prototype.update_states = function () {
  this._states_data[2] += 1;
  if (this.need_refresh_states()) {
    this.refresh_states();
  }
};

//==============================
// * Need Refresh States
//==============================
Battle_Hud.prototype.need_refresh_states = function () {
  if (this._battler.need_refresh_bhud_states) {
    return true;
  }
  if (this._states_data[2] > 60) {
    return true;
  }
  return false;
};

//==============================
// * Create States 2
//==============================
Battle_Hud.prototype.create_states2 = function () {
  if (String(Moghunter.bhud_states_visible) != "true") {
    return;
  }
  this.removeChild(this._state_icon);
  if (!this._battler) {
    return;
  }
  this._states_data = [0, 0, 0];
  this._stateIcons = [];
  this._state_icon = new Sprite();
  this._state_icon.x = this._pos_x + Moghunter.bhud_states_pos_x;
  this._state_icon.y = this._pos_y + Moghunter.bhud_states_pos_y;
  this._state_icon.visible = false;
  this.addChild(this._state_icon);
  this.refresh_states2();
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.refresh_states2 = function () {
  this._state_icon.visible = false;
  this._battler.need_refresh_bhud_states = false;
  for (i = 0; i < this._stateIcons.length; i++) {
    this._state_icon.removeChild(this._stateIcons[i]);
  }
  if (this._battler.allIcons().length == 0) {
    return;
  }
  this._state_icon.visible = true;
  this._stateIcons = [];
  var w = Window_Base._iconWidth;
  var icons = this._battler.allIcons().slice(0, w);
  var m = Math.min(
    Math.max(this._battler.allIcons().length, 0),
    Moghunter.bhud_statesMax
  );
  var align = Moghunter.bhud_statesAlign;
  for (i = 0; i < m; i++) {
    this._stateIcons[i] = new Sprite(this._state_img);
    var sx = (icons[i] % 16) * w;
    var sy = Math.floor(icons[i] / 16) * w;
    this._stateIcons[i].setFrame(sx, sy, w, w);
    if (align === 1) {
      this._stateIcons[i].x = -((w + 4) * i);
    } else if (align === 2) {
      this._stateIcons[i].y = (w + 4) * i;
    } else if (align === 3) {
      this._stateIcons[i].y = -((w + 4) * i);
    } else {
      this._stateIcons[i].x = (w + 4) * i;
    }
    this._state_icon.addChild(this._stateIcons[i]);
  }
};

//==============================
// * Update States 2
//==============================
Battle_Hud.prototype.update_states2 = function () {
  if (this.need_refresh_states2()) {
    this.refresh_states2();
  }
};

//==============================
// * Need Refresh States 2
//==============================
Battle_Hud.prototype.need_refresh_states2 = function () {
  if (this._battler.need_refresh_bhud_states) {
    return true;
  }
  return false;
};
