$(document).ready(function(){
    //////////////////////////////////////////////////
    // Specify Sources
    //////////////////////////////////////////////////
    var eventSources = new Array();
    eventSources.push({
        title: "gcal_event--academics",
        url: "http://www.google.com/calendar/feeds/0rn5mgclnhc7htmh0ht0cc5pgk%40group.calendar.google.com/public/basic",
        className: 'gcal_event gcal_event--academics'
    });
    eventSources.push({
        title: "gcal_event--entertainment",
        url: "http://www.google.com/calendar/feeds/m6h2d5afcjfnmaj8qr7o96q89c%40group.calendar.google.com/public/basic",
        className: 'gcal_event gcal_event--entertainment'
    });
    eventSources.push({
        title: "gcal_event--athletics",
        url: "http://www.google.com/calendar/feeds/d6jbgjhudph2mpef1cguhn4g9g%40group.calendar.google.com/public/basic",
        className: "gcal_event gcal_event--athletics"
    });
    eventSources.push({
        title: "gcal_event--studentactivities",
        url: "http://www.google.com/calendar/feeds/l9qpkh5gb7dhjqv8nm0mn098fk%40group.calendar.google.com/public/basic",
        className: "gcal_event gcal_event--studentactivities"
    });
    eventSources.push({
        title: "gcal_event--residencelife",
        url: "http://www.google.com/calendar/feeds/gqv0n6j15pppdh0t8adgc1n1ts%40group.calendar.google.com/public/basic",
        className: "gcal_event gcal_event--residencelife"
    });
    eventSources.push({
        title: "gcal_event--campusrec",
        url: 'http://www.google.com/calendar/feeds/h4j413d3q0uftb2crk0t92jjlc%40group.calendar.google.com/public/basic',
        className: 'gcal_event gcal_event--campusrec'
    });



    //////////////////////////////////////////////////
    // Init Calendar
    //////////////////////////////////////////////////
    var eventCalendar = $('#google-event-calendar');
    eventCalendar.fullCalendar({
        header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
        },
        eventSources: eventSources,
        eventClick: function(event, jsEvent, view) {
            // opens events in a popup window
            // window.open(event.url, 'gcalevent', 'width=700,height=600');
            // return false;
            if (event.url) {
                window.open(event.url + "&ctz=America/Los_Angeles");
                return false;
            }
        }
        // NEEDED?
        // loading: function(bool) {
        //     $('#loading').toggle(bool);
        // }
    });



    //////////////////////////////////////////////////
    // Event Toggles
    //////////////////////////////////////////////////
    function ObjectFindByKey(array, key, value){
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }

    var toggles = $('.gcal_toggle');

    toggles.on('click', function(e){
        var $this = $(this);
        var target = $this.data('target');
        var targetSource = ObjectFindByKey(eventSources, 'title', target);

        if(targetSource === null)
            return;

        if($this.hasClass('gcal_toggle--disabled')){
            eventCalendar.fullCalendar('addEventSource', targetSource);
        }else{
            eventCalendar.fullCalendar('removeEventSource', targetSource);
        }
        $this.toggleClass('gcal_toggle--disabled');
    });



    //// OLD METHOD. WASN'T PERSISTING ACROSS VIEW CHANGES
    // toggles.on('click', function(e){
    //     var $this = $(this);
    //     var target = $this.data('target');
    //     $this.toggleClass('gcal_toggle--disabled');
    //     $('.' + target).toggle();
    // });
});
