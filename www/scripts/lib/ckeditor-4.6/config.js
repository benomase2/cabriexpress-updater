/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// CKEDITOR.editorConfig = function( config ) {
// 	// Define changes to default configuration here. For example:
// 	// config.language = 'fr';
// 	// config.uiColor = '#AADC6E';
// };

CKEDITOR.editorConfig = function( config ) {
    config.allowedContent = true,

    config.extraAllowedContent = 'nombreinclus[onclick]'

    config.extraPlugins = 'nombreinclus',
        config.toolbarGroups = [];
    //     { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    //     { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    //     { name: 'editing', groups: [ 'find', 'selection', 'editing' ] },
    //     { name: 'forms', groups: [ 'forms' ] },
    //     '/',
    //     { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    //     { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    //     { name: 'links', groups: [ 'links' ] },
    //     { name: 'insert', groups: [ 'insert' ] },
    //     '/',
    //     { name: 'styles', groups: [ 'styles' ] },
    //     { name: 'colors', groups: [ 'colors' ] },
    //     { name: 'tools', groups: [ 'tools' ] },
    //     { name: 'others', groups: [ 'others' ] },
    //     { name: 'about', groups: [ 'about' ] }
    // ];
    config.enterMode = CKEDITOR.ENTER_BR;

    config.title = false;
    config.disableNativeSpellChecker = false;
    config.browserContextMenuOnCtrl = true;
    config.removePlugins = 'scayt,contextmenu,tabletools,liststyle,toolbar';
    config.removeButtons = 'CopyFormatting,Source,Save,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,SelectAll,Replace,Find,PasteFromWord,PasteText,Print,Preview,NewPage,Bold,Italic,Underline,Strike,Subscript,Superscript,RemoveFormat,NumberedList,BulletedList,Indent,Outdent,Blockquote,CreateDiv,JustifyBlock,JustifyRight,JustifyCenter,JustifyLeft,BidiLtr,BidiRtl,Language,Anchor,Unlink,Link,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Format,Font,FontSize,TextColor,BGColor,ShowBlocks,Maximize,About';
};