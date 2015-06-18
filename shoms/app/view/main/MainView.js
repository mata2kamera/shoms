/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SHOMS.view.main.MainView', {
    extend: 'Ext.container.Container',
    requires: [
        'SHOMS.control.main.MainController',
        'SHOMS.model.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
         {
                xtype: 'component',            
                region: 'north',
                cls: 'appBanner',
                padding: 5,
                height: 70,
                html:'<table border="0" width="450"><TR><td width="50"><img src="resources/image_app/cpp.png" alt="PT. Central Proteina Prima" style="width:60px;height:60px;"></td>\n\
                      <td width="400">PT. Central Proteina Prima<br><font size="2">Divisi ATRD</font> \n\
                      <br><font size="1">Wisma GKBI Lt. 19 Jl. Sudirman-Jakarta</font></td></TR></table>               '
        }, 
         {
            xtype: 'panel',
            id : 'view_main',
            bind: {
                title: 'Main Menu'
            },
            region: 'west',
            width: 150,
            split: true,
            activeTab : 0,
            collapsible: true,
            items: [
               //---------------- user profile -----------------
                {
                    xtype: 'splitbutton',
                    text: 'Nama Users Login',
                    id : 'TM01_mnUser',
                    width    : 150,
                    height   : 30,
                    menu: [{id : 'TM01_subProfile',    
                            text: 'Profile',
                            handler: 'onClickButton',
                            tooltip:'User Profile'
                          },
                       {id : 'TM01_subLogOut',    
                        text: 'Exit',
                        handler: 'onClickButton',
                        tooltip:'Keluar Aplikasi'
                       }
                    ]
                 },
                {
                html:'<hr>'
                },
           //------- Commercial-----------
                {
                    xtype: 'splitbutton',
                    text: 'Commercial',
                    id : 'TM01_mnCommercial',
                    width    : 140,
                    height   : 30,
                    menu: [
                        {id : 'TM01_subPremix',    
                         text: 'Premix',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Premix'
                        },
                        {id : 'TM01_subFeed',    
                         text: 'Feed',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Feed'
                        },
                        {id : 'TM01_subPondGuard',    
                         text: 'Pond Guard',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Pond Guard'
                        },
                        {id : 'TM01_subHatchery',    
                         text: 'Hatchery',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Hatchery'
                        },
                        {id : 'TM01_subPondSite',    
                         text: 'Pond Site',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Pond Site'
                        }
                   ]
                } ,
           //------- Research-----------     
                {
                    xtype: 'splitbutton',
                    text: 'Research',
                    id : 'TM01_mnResearch',
                    width    : 140,
                    height   : 30,
                    menu: [
                        {id : 'TM01_subForDev',    
                         text: 'Formula Development',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Research Formula Dev.'
                        },
                        {id : 'TM01_subBioAss',    
                         text: 'Bio Assay',
                         handler: 'onClickButton',
                         tooltip:'Input Data Monitoring Research Bio Assay'
                        }
                    ]
                 },
            //------- Resources-----------       
                 {
                    xtype: 'splitbutton',
                    text: 'Resources',
                    id : 'TM01_mnResources',
                    width    : 140,
                    height   : 30,
                    menu: [
                        {id : 'TM01_subFAQ',    
                         text: 'FAQ',
                         handler: 'onClickButton',
                         tooltip:'Requently Ask & Question'
                        },
                        {id : 'TM01_subKB',    
                         text: 'Knowledge Base',
                         handler: 'onClickButton',
                         tooltip:'View and Create Knowledge Base'
                        }
                   ]
                 },  
            //------- Master Data -----------      
                 {
                    xtype: 'splitbutton',
                    text: 'Master Data',
                    id : 'TM01_mnMD',
                    width    : 140,
                    height   : 30,
                    menu: [
                        {id : 'TM01_subMDC',    
                         text: 'Master Company',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Company'
                        },
                        {id : 'TM01_subMDP',    
                         text: 'Master Pond',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Pond'
                        },
                        {id : 'TM01_subMDH',    
                         text: 'Master Hatchery',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Hatchery'
                        },
                        {id : 'TM01_subMDT',    
                         text: 'Master Tank',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Tank'
                        },
                        {id : 'TM01_subMDPX',    
                         text: 'Master Premix',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Premix'
                        },
                        {id : 'TM01_subMDFE',    
                         text: 'Master Feed',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Feed'
                        },
                        {id : 'TM01_subMDPG',    
                         text: 'Master Pond Guard',
                         handler: 'onClickButton',
                         tooltip:'Maintenance Master Data Pond Guard'
                        }
                    ]
                 },  
            //------- Utility -----------     
                 {
                    xtype: 'splitbutton',
                    text: 'Utility',
                    id : 'TM01_mnUtil',
                    width    : 140,
                    height   : 30,
                    menu: [
                        {id : 'TM01_subPurge',    
                         text: 'Purge Data',
                         handler: 'onClickButton',
                         tooltip:'Delete Permanen Data'
                        }
                    ]    
                 }       
            ]
           },
         {
           region: 'center',
           xtype: 'tabpanel',
           id : 'p_content',
           autoScroll:true,
           activeTab : 0,
           // cls: 'panel',
           layout: {
                 type: 'card'
           },
           items:[{
                 title: 'Home',
                 html: '<h2>Diisi dengan inbox dokumen sesuai spek</h2><br> Contoh:klik menu Commercial > Premix'
                   }
           ]
        } 
     ]
    
});
