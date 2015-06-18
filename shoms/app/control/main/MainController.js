/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SHOMS.control.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',
    /* 
    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
    */
    
    onClickButton: function (button) {
        if(button.id === 'TM01_subPremix'){
           if (!Ext.getCmp('p_content').getComponent('id_C01_Panel_view')) {
            var mst = C01_premix_view();
            Ext.getCmp('p_content').add(mst);
           }
           else{
            Ext.getCmp('p_content').remove('id_C01_Panel_view');
            var mst = C01_premix_view();
            Ext.getCmp('p_content').add(mst);
           }
           Ext.getCmp('p_content').setActiveTab('id_C01_Panel_view');
        }
    }
    
});
