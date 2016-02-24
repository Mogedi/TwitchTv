var users = ["ESL_SC2", "riotgames", "manock","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","magic","thomasballinger","noobs2ninjas","beohoff", "boris_chantel" , "brunofin", "completelyMadeUp", "comster404"];
All();   
    
function All() {
    $('.table').empty();
    
    var arr = [];
    
    for (var i = 0; i < users.length; i++) {
        apiCall(users[i]);
    }
    
    //apiCall(users[users.length - 1]);
    
    function apiCall(pass)  {
        var apiSite = 'https://api.twitch.tv/kraken/streams/' + pass + '?callback=?';
        //console.log(apiSite);
        
        $.ajax({
            'url' : apiSite,
            jsonp: "callback",
            dataType: 'jsonp',
            success: function(data) {
                if (data.message == "Channel '" + pass + "' is unavailable") {
                    //console.log(pass + " Account Closed");
                    $('<tr>', {
                        'class': 'item',
                        //'style': "background-color:pink",
                        'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                        html: '<td><img src=http://images.clipartpanda.com/question-di7X6zei9.png></img></td><td><p>' + pass + '</p></td><td> Account is Closed </td>'
                        }).appendTo('.table');
                    
                } else if (data.message == "Channel '" + pass + "' does not exist") {
                    //console.log(pass + " Not a Channel");
                    $('<tr>', {
                        'class': 'item',
                        'style': "background-color:lightcoral",
                        html: '<td><img src=http://images.clipartpanda.com/question-di7X6zei9.png></img></td><td><p>' + pass + '</p></td><td> Not a Channel </td>'
                        }).appendTo('.table');
                    
                } else if (data.stream == null) {
                    //console.log(pass + " Offline");
                    $.ajax({
                        'url' : 'https://api.twitch.tv/kraken/channels/' + pass,
                        jsonp: "callback",
                        dataType: 'jsonp',
                        success: function(info) {
                            //console.log(info.logo);
                            if (info.logo == null) {
                                $('<tr>', {
                                    'class': 'item danger',
                                    //'style': "background-color:grey",
                                    'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                                    html: '<td><img src=http://images.clipartpanda.com/question-di7X6zei9.png></img></td><td><p>' + pass + '</p></td><td> Offline </td>'
                                    }).appendTo('.table');
                            } else if (info.logo !== null) {
                                $('<tr>', {
                                    'class': 'item danger',
                                    //'style': "background-color:grey",
                                    'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                                    html: '<td><img src=' + info.logo +'></td><td><p>' + pass + '</p></td><td> Offline </td>'
                                    }).appendTo('.table');
                            }
                        }
                    });
                    
                } else if (data.stream !== null) {
                    //console.log(data.stream);
                    //console.log(Object.keys(data));
                    //console.log(Object.keys(data._links));
                    //console.log(Object.keys(data.stream));
                    //console.log(Object.keys(data.stream._links));
                    //console.log(Object.keys(data.stream.preview));
                    //console.log(Object.keys(data.stream.channel));
                    //console.log(Object.keys(data.stream.channel._links));
                    
                    $('<tr>', {
                        'class': 'item',
                        'style': "background-color:lightgreen",
                        'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                        html: '<td><img src=' + data.stream.channel.logo +'></td><td><p>' + pass + '</p></td><td><p>' + data.stream.channel.game + ', ' +  data.stream.viewers +' watchers' +'</p></td>'
                        }).appendTo('.table');
                    
                   
                   
                }
            }
        });
        
        //console.log('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=?');
        //console.log(arr);
    }
}

function Online() {
    $('.table').empty();
    
    var arr = [];
    
    for (var i = 0; i < users.length; i++) {
        apiCall(users[i]);
    }
    
    //apiCall(users[users.length - 1]);
    
    function apiCall(pass)  {
        var apiSite = 'https://api.twitch.tv/kraken/streams/' + pass + '?callback=?';
        //console.log(apiSite);
        
        $.ajax({
            'url' : apiSite,
            jsonp: "callback",
            dataType: 'jsonp',
            success: function(data) {
                if (data.stream !== null) {
                    //console.log(data.stream);
                    //console.log(Object.keys(data));
                    //console.log(Object.keys(data._links));
                    //console.log(Object.keys(data.stream));
                    //console.log(Object.keys(data.stream._links));
                    //console.log(Object.keys(data.stream.preview));
                    //console.log(Object.keys(data.stream.channel));
                    //console.log(Object.keys(data.stream.channel._links));
                    
                    $('<tr>', {
                        'class': 'item',
                        'style': "background-color:lightgreen",
                        'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                        html: '<td><img src=' + data.stream.channel.logo +'></td><td><p>' + pass + '</p></td><td><p>' + data.stream.channel.game + ', ' +  data.stream.viewers +' watchers' +'</p></td>'
                        }).appendTo('.table');
                    
                   
                   
                }
            }
        });
        
        //console.log('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=?');
        //console.log(arr);
    }
}



function Offline() {
    $('.table').empty();
    
    var arr = [];
    
    for (var i = 0; i < users.length; i++) {
        apiCall(users[i]);
    }
    
    //apiCall(users[users.length - 1]);
    
    function apiCall(pass)  {
        var apiSite = 'https://api.twitch.tv/kraken/streams/' + pass + '?callback=?';
        //console.log(apiSite);
        
        $.ajax({
            'url' : apiSite,
            jsonp: "callback",
            dataType: 'jsonp',
            success: function(data) {
                if (data.message == "Channel '" + pass + "' is unavailable") {
                    //console.log(pass + " Account Closed");
                    
                    
                } else if (data.message == "Channel '" + pass + "' does not exist") {
                    //console.log(pass + " Not a Channel");
                    
                    
                } else if (data.stream == null) {
                    //console.log(pass + " Offline");
                    $.ajax({
                        'url' : 'https://api.twitch.tv/kraken/channels/' + pass,
                        jsonp: "callback",
                        dataType: 'jsonp',
                        success: function(info) {
                            //console.log(info.logo);
                            if (info.logo == null) {
                                $('<tr>', {
                                    'class': 'item danger',
                                    //'style': "background-color:grey",
                                    'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                                    html: '<td><img src=http://images.clipartpanda.com/question-di7X6zei9.png></img></td><td><p>' + pass + '</p></td><td> Offline </td>'
                                    }).appendTo('.table');
                            } else if (info.logo !== null) {
                                $('<tr>', {
                                    'class': 'item danger',
                                    //'style': "background-color:grey",
                                    'onclick': "window.open('http://www.twitch.tv/"+ pass +"', '_blank');",
                                    html: '<td><img src=' + info.logo +'></td><td><p>' + pass + '</p></td><td> Offline </td>'
                                    }).appendTo('.table');
                            }
                        }
                    });
                    
                }
            }
        });
        
        //console.log('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=?');
        //console.log(arr);
    }
}
    
      
