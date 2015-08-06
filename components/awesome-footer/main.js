Polymer({
    is: "awesome-footer",

    //Properties used in <template>
    properties: {
        name: {
            type: String
        },
        copyright: {
            type: String,
            value: "dpdk"
        }
    },

    /**
     * Useless click handler
     *
     * @param e
     */
    clickHandler: function (e)
    {
        alert('Yep, je kunt hier op klikken :-)');
    }
});
