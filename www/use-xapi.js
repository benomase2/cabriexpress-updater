if (xapi_actor_account_name
    && resource_link_id
    && xapi_activity_id
    && xapi_context_contextActivities_parent_id
    && xapi_context_extensions_sessionid
    && xapi_actor_account_homePage) {

    window.onbeforeunload = function () {
        if(!xAPI['mathscope'].passedFailedWasSent)
            xAPI['mathscope'].passedFailed();
        xAPI['mathscope'].terminated();
    };

    postal.subscribe({
        channel: "xapi",
        topic: "application.loaded",
        callback: function (data, envelope) {
            // `data` is the data published by the publisher.
            // `envelope` is a wrapper around the data & contains
            // metadata about the message like the channel, topic,
            // timestamp and any other data which might have been
            // added by the sender.
            xAPI['mathscope'].initialized(false);
        }
    });

    postal.subscribe({
        channel: "statement",
        topic: "score",
        callback: function (data, envelope) {
            // `data` is the data published by the publisher.
            // `envelope` is a wrapper around the data & contains
            // metadata about the message like the channel, topic,
            // timestamp and any other data which might have been
            // added by the sender.
            xAPI['mathscope'].passedFailed();
        }
    });

}