gdjs.ShopCode = {};
gdjs.ShopCode.GDNewSpriteObjects1= [];
gdjs.ShopCode.GDNewSpriteObjects2= [];
gdjs.ShopCode.GDMagentaGelCounterObjects1= [];
gdjs.ShopCode.GDMagentaGelCounterObjects2= [];
gdjs.ShopCode.GDPlayObjects1= [];
gdjs.ShopCode.GDPlayObjects2= [];
gdjs.ShopCode.GDgelnadepriceObjects1= [];
gdjs.ShopCode.GDgelnadepriceObjects2= [];
gdjs.ShopCode.GDNewText2Objects1= [];
gdjs.ShopCode.GDNewText2Objects2= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};
gdjs.ShopCode.condition3IsTrue_0 = {val:false};
gdjs.ShopCode.condition4IsTrue_0 = {val:false};
gdjs.ShopCode.condition5IsTrue_0 = {val:false};
gdjs.ShopCode.conditionTrue_1 = {val:false};
gdjs.ShopCode.condition0IsTrue_1 = {val:false};
gdjs.ShopCode.condition1IsTrue_1 = {val:false};
gdjs.ShopCode.condition2IsTrue_1 = {val:false};
gdjs.ShopCode.condition3IsTrue_1 = {val:false};
gdjs.ShopCode.condition4IsTrue_1 = {val:false};
gdjs.ShopCode.condition5IsTrue_1 = {val:false};


gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.ShopCode.GDNewSpriteObjects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("MagentaGelCounter"), gdjs.ShopCode.GDMagentaGelCounterObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDMagentaGelCounterObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMagentaGelCounterObjects1[i].setString("MG: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.ShopCode.GDPlayObjects1);

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.ShopCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDPlayObjects1[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)) ) {
        gdjs.ShopCode.condition0IsTrue_1.val = true;
        gdjs.ShopCode.GDPlayObjects1[k] = gdjs.ShopCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDPlayObjects1.length = k;}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.ShopCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.ShopCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.ShopCode.GDNewText2Objects1[i].setString("S: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ShopCode.GDNewSpriteObjects1);

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.condition0IsTrue_1.val = false;
gdjs.ShopCode.condition1IsTrue_1.val = false;
gdjs.ShopCode.condition2IsTrue_1.val = false;
gdjs.ShopCode.condition3IsTrue_1.val = false;
gdjs.ShopCode.condition4IsTrue_1.val = false;
{
gdjs.ShopCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ShopCode.condition0IsTrue_1.val ) {
{
gdjs.ShopCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition1IsTrue_1.val ) {
{
gdjs.ShopCode.condition2IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 10;
}if ( gdjs.ShopCode.condition2IsTrue_1.val ) {
{
gdjs.ShopCode.condition3IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}if ( gdjs.ShopCode.condition3IsTrue_1.val ) {
{
gdjs.ShopCode.condition4IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 5;
}}
}
}
}
gdjs.ShopCode.conditionTrue_1.val = true && gdjs.ShopCode.condition0IsTrue_1.val && gdjs.ShopCode.condition1IsTrue_1.val && gdjs.ShopCode.condition2IsTrue_1.val && gdjs.ShopCode.condition3IsTrue_1.val && gdjs.ShopCode.condition4IsTrue_1.val;
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gelnadeprice"), gdjs.ShopCode.GDgelnadepriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDgelnadepriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDgelnadepriceObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(10);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(5);
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDNewSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewSpriteObjects2.length = 0;
gdjs.ShopCode.GDMagentaGelCounterObjects1.length = 0;
gdjs.ShopCode.GDMagentaGelCounterObjects2.length = 0;
gdjs.ShopCode.GDPlayObjects1.length = 0;
gdjs.ShopCode.GDPlayObjects2.length = 0;
gdjs.ShopCode.GDgelnadepriceObjects1.length = 0;
gdjs.ShopCode.GDgelnadepriceObjects2.length = 0;
gdjs.ShopCode.GDNewText2Objects1.length = 0;
gdjs.ShopCode.GDNewText2Objects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);
return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
