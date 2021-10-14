const {v4: uuidv4} = require('uuid');

//I would like to get luxon set up to parse the date and time into a more user friendly format, but I couldn't during this assignment.
const connections = [
    {
        id: '1',
        title: 'Esports LAN Party 2021 - Student Union',
        category: 'Offline',
        details: 'We are hosting our first Union Lan Event since COVID is going down on October 3rd!! There will be raffles, prizes, tournaments, and lots of fun to be had! The event will run from 10am to 10pm on the third floor of the union! It is BYOC so try and find a way to haul your behemoth of a rig to the Student Union that morning We will have a variety of games to play but please reach out with what games <b>YOU</b> want to see/play so we can be sure to feature the community favorites!',
        date: '2021-10-03',
        start: '10:00',
        end: '22:00',
        host: 'Niner Esports',
        location: 'Popp Martin Student Union room 340',
        image: 'https://i.imgur.com/0JKBCGp.jpg'
    },
    {
        id: '2',
        title: 'League of Legends Ranked',
        category: 'Online',
        details: 'Looking for somebody to duo queue League of Legends with. I am a master level Support main looking for an ADC player. Add me and send me a message online!',
        date: '2021-10-13',
        start: '00:00',
        end: '23:59',
        host: 'LeagueAccountName',
        location: 'Summoners Rift',
        image: 'https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg'
    },
    {
        id: '3',
        title: 'Mario Kart 8',
        category: 'Online',
        details: 'My friend are hosting a small Mario Party 8 race night and we can fit two more people. Add me on Switch at SW-1234-5678-9012 and join the lobby to play!',
        date: '2021-10-15',
        start: '20:00',
        end: '23:59',
        host: 'Trey - SW-2109-8765-4321',
        location: 'Nintendo Switch Online',
        image: 'https://i.ytimg.com/vi/N908KVResrQ/maxresdefault.jpg'
    },
    {
        id: '4',
        title: 'Smash Ultimate Team Tryouts',
        category: 'Offline',
        details: 'Come try out for the collegiate Smash Bros team here at Charlotte! We will be holding a small bracket with the top placing players receiving invitiations to join the team. We compete in the CSL Smash League and will be traveling and playing against some of the best teams in the country!',
        date: '2021-10-17',
        start: '17:00',
        end: '19:00',
        host: 'Smash Team Coordinator',
        location: 'Norms Loft',
        image: 'https://assets1.ignimgs.com/2018/06/13/super-smash-btros-ultimate---button-0001-1528851298611.jpg?width=300&dpr=2'
    },
    {
        id: '5',
        title: 'Minecraft Server',
        category: 'Online',
        details: 'I have a Minecraft Server that is for any Charlotte students to join. The ip is http:127.0.0.8 and the name is "Charlotte". Feel free to join to chill and build some stuff with fellow students!',
        date: '2021-10-13',
        start: '0:00',
        end: '23:59',
        host: 'UNCC Minecraft',
        location: 'http:127.0.0.8',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png'
    },
    {
        id: '6',
        title: 'FIFA in the library',
        category: 'Offline',
        details: 'We play FIFA in the library between classes, come through',
        date: '2021-10-15',
        start: '13:15',
        end: '16:40',
        host: 'Thomas',
        location: 'Atkins Library',
        image: 'https://d2j8c2rj2f9b78.cloudfront.net/uploads/poster-images/library.JPG'
    },
]

//Returns connections
exports.find = function() { 
    return connections;
}

//Checks for the connection by the id
exports.findById = function(id){
    return connections.find(connection=>connection.id === id);
}

//Provides an array to allow for dynamic sorting of categories
exports.getCategory = function(){
    //Create an empty array in order to store all of our categories
    let categories = [];

    //Iterate through our connections model 
    for (i=0; i < connections.length; i++) {
        //Check to see if our category is already within the categories array
        //I was previously trying to use categories.indexOf and couldn't get it to work
        //But a TA advised using includes, which works
        if (categories.includes(connections[i].category) === false) {
            //If false, push the new category into our array
            categories.push(connections[i].category);
        }
    }
    return categories;
}

//Saves a connection with unique id to our object
exports.save = function(connection){
    connection.id = uuidv4();
    connections.push(connection);
}

//Updates a connection by the id
exports.updateById = function(id, newConnection){
    let connection = connections.find(connection=>connection.id === id)
    if(connection) {
        connection.title = newConnection.title;
        connection.category = newConnection.category;
        connection.details = newConnection.details;
        connection.date = newConnection.date;
        connection.start = newConnection.start;
        connection.end = newConnection.end;
        connection.host = newConnection.host;
        connection.location = newConnection.location;
        connection.image = newConnection.image;

        return true;
    } else {
        return false;
    }
    
}

//Deletes a connection by the id
exports.deleteById = function(id) {
    let index = connections.findIndex(connection=>connection.id === id);

    if(index !== -1) {
        connections.splice(index, 1);
        return true;
    } else {
        return false;
    }
}