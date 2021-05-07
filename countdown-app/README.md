# countdown-app

A simple project which has a few interesting user stories. Should be a countdown timer with some extra features. I'm going to document its user stories here.

### User stories
---

Our project hash will be `CDA`, which is an acronym after its name.

|Story id|Name|Description|Status|Points|
|--------|----|-----------|------|------|
|CDA-001 |UI Elements I|User can see an event input box containing an event name field, an date field, an optional time, and a ‘Start’ button.|To do|1|
|CDA-002 |UI Elements II|User can define the event by entering its name, the date it is scheduled to take place, and an optional time of the event. If the time is omitted it is assumed to be at Midnight on the event date in the local time zone.|To do|1|
|CDA-003 |UX Elements I|User can see a warning message if the event name is blank.|To do|1|
|CDA-004 |UX Elements II|User can see a warning message if the event date or time are incorrectly entered.|To do|1|
|CDA-005 |UX Elements III|User can see a warning message if the time until the event data and time that has been entered would overflow the precision of the countdown timer.|To do|1|
|CDA-006 |UX Elements IV|User can click on the ‘Start’ button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place.|To do|1|
|CDA-007 |UX Elements V|User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display.|To do|2|
|CDA-008 |UX Elements VI|User can see an alert when the event is reached|To do|1|
|CDA-009 |UX Elements VI|User can specify more than one event.|To do|1|
|CDA-010 |UI Elements III|User can see a countdown timers for each event that has been defined.|To do|1|
|CDA-011 |Data storage I|User can save the event so that it persists across sessions|To do|1|
|CDA-012 |Tests I|Unit tests implementation|To do|2|