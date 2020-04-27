window.onload = function() {

    new Rolldate({
        el: '#entregaTarea',
        format: 'YYYY-MM-DD',
        beginYear: 2000,
        endYear: 2100
    })



    new Rolldate({
        el: '#entregaTarea',
        format: 'YYYY-MM-DD',
        beginYear: 2000,
        endYear: 2100,
        init: function() {

        },
        moveEnd: function(scroll) {
            console.log(scroll)
        },
        confirm: function(date) {
            console.log(date)
        },
        cancel: function() {
        }
    })
}