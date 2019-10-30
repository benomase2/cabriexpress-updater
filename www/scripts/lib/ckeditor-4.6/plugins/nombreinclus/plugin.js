CKEDITOR.plugins.add( 'nombreinclus', {
    // Nombre inclus widget code.
    requires: 'widget',

    init: function(editor) {
        // Plugin logic goes here...
        editor.widgets.add( 'nombreinclus', {
            // Widget code.
            draggable: false,
            inline: true,

            template:
                '<span class="nombreinclus">' +
                'Content.nombreinclus' +
                '</span>',

            upcast: function( element ) {
                return element.name == 'span' && element.hasClass('nombreinclus');
            }
        });

        editor.on( 'paste', function( evt ) {
            var formula = evt.data.dataTransfer.getData( 'formula' );
            if ( !formula ) {
                //return;
            }
            var inclus = evt.data.dataTransfer.getData('inclus');


            evt.data.dataValue = " "+ inclus +" ";

            // need to call reference update in cdk by using the function in this text object
            // whether it's a note or something else
            // create the reference from the calculator and get an id
            var id = evt.data.dataTransfer.getData('refid');
            //Cabrilog.log("refid in ck paste: "+id, "jml");

            // store the id in the widget(span element)... SOMEHOW
            // get the div for the note
            var d = document.getElementById("canvasholder1");
            setTimeout(function() {
                document.activeElement.blur();
            }, 25);
        } );

    }
});
