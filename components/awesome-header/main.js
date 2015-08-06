Polymer({
    is: "awesome-header",

    //Properties used in <template>
    properties: {
        boawses: {
            type: Array
        },
        title: {
            type: String,
            value: "Awesome title!"
        },
        paragraph: {
            type: String,
            value: "Introductie paragraaf over het leven."
        }
    },

    /**
     * Executed when component is loaded
     */
    ready: function ()
    {
        this.boawses = [
            {first: 'Mister', last: '1000'},
            {first: '#basis', last: 'is lekker'}
        ];
    },

    /**
     * Retrieve the index number (to prevent getting 0)
     *
     * @param index
     * @returns {*}
     */
    getIndexForBoaws: function (index)
    {
        return index + 1;
    },

    /**
     * Append
     *
     * @param e
     */
    addBoawsSubmitHandler: function (e)
    {
        e.preventDefault();

        var firstName = e.currentTarget.children[0];
        var lastName = e.currentTarget.children[1];
        this.push('boawses', {first: firstName.value, last: lastName.value});

        firstName.value = '';
        lastName.value = '';
    }
});
