/**
 * Description of C01_premix_view.js
 * Monitoring Premix 
 * @author wahyu.setiyanto
 */




function C01_premix_view(){
    var C01_premix_view = Ext.create('Ext.Panel', {
        id: 'id_C01_Panel_view',
        title: 'Monitoring Premix',
        closable: true,
        autoScroll:true,
        bodyStyle: 'background:#F3F3F3; padding:5px;',
        overflow: 'auto',
        renderto:'p_content',
        layout: {
            type: 'hbox',
            align: 'stretch',
            padding: 5
        },
        
       
        
        items: [
           {
                xtype: 'form',
                id: 'id_C01_form_vf',
                 autoScroll:true,
                //width: 355,
                width: 770,
                border: 1,
                bodyPadding: '20 20 20 20',
                waitMsgTarget: true,
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side',
                    width: 250
                },
                items: [
                       {
                           xtype: 'datefield',
                           id:'id_C01_SampleDate_vf', 
                           fieldLabel: 'Sample Date',
                           //name: 'dob',
                           allowBlank: false,
                           maxValue: new Date(),
                           margin:  '5 0 0 0',
                           labelWidth: 110,
                           width: 260
                     },
                     {
                           xtype: 'textfield', 
                           fieldLabel: 'Sample ID',
                           name: 'jenis', 
                           id:'id_C01_SampleID_vf', 
                           style: 'text-align: left; margin-right:2px; margin-top:3px;',
                           maxLength : 20,
                           allowBlank: false,
                           labelAlign:'left',
                           margin:  '5 0 0 0',
                           labelWidth: 110,
                           width: 260
                    }
                    
                ],
                 buttons: [
                     {
                        text: 'Submit',
                        id: 'id_C01_Submit_vb'
                     }
                 ]
                
                
            }
            
            
        ]
    }
);
   //--------------------- tess------------------------
    /*
    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [ C01_premix_view ]
    });
  
   C01_premix_view.on('resize', function(panel, w, h) {
    alert('Panel resized to ' + w + 'x' + h);
                     if (w<500){
                            panel.hide();
                    }
                    else{
                            panel.setVisible('true');
         }
    });
   
    resize: function(panel, w, h) {
                    var viewport = panel.up(viewport);
                    var detailpanel = panel.down('#detailpanel');
                    var gridpanel = panel.down('#gridPanel');
                    gridpanel.setHeight(h-70);
                    detailpanel.setHeight(h-70);
                    if (w<500){
                            panel.hide();
                    }
                    else{
                            panel.setVisible('true');
                    }
            }
   */
   
   
   
   //------------------------- end tes ----------------
   
   
    return C01_premix_view;
}
