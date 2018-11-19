exports.seed = function(knex, Promise) {
  return knex('user_favourites').del()
    .then( function () {
      return knex('user_contributions').del();
    })
    .then( function () {
      return knex('places').del();
    })
    .then( function () {
      return knex('maps').del();
    })
    .then( function () {
      return knex('users').del();
    })
    .then(function () {
      return knex('users').insert({id: 1, email: 'alice@gmail.com', password: '123456', name: 'alice'});
    })
    .then(function () {
      return knex('users').insert({id: 2, email: 'bob@hotmail.com', password: 'password', name: 'bob'});
    })
    .then(function () {
      return knex('users').insert({id: 3, email: 'charlie@lighthouselabs.ca', password: 'RubberDuck', name: 'charlie'});
    })
    .then(function () {
      return knex('maps').insert({id: 1, url: '1jh2', name: 'Attractions', description: 'All the interesting stuff happens here'});
    })
    .then(function () {
      return knex('maps').insert({id: 2, url: 'fdsja3', name: 'Food and Drink', description: 'These tacos are delicious!'});
    })
    .then(function () {
      return knex('maps').insert({id: 3, url: '8t9nv23', name: 'Services', description: 'Hospital? Social Services? Bus station?'});
    })
    .then(function () {
      return knex('maps').insert({id: 4, url: 'th423', name: 'Shopping', description: 'Shop till you drop!'})
    })
    .then(function () {
      return Promise.all([
        knex('user_favourites').insert({user_id: 1, map_id: 2}),
        knex('user_favourites').insert({user_id: 2, map_id: 3}),
        knex('user_favourites').insert({user_id: 3, map_id: 1})
      ]);
    })
    .then(function () {
      return Promise.all([
        knex('user_contributions').insert({user_id: 1, map_id: 1}),
        knex('user_contributions').insert({user_id: 2, map_id: 2}),
        knex('user_contributions').insert({user_id: 3, map_id: 3})
      ]);
    })
    .then(function () {
      return knex('places').insert({id: 1, name: 'CN Tower', image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/2b/93/b7/cn-tower.jpg', description: 'Tallest point in Toronto', place_lat: 43.6426, place_long: 79.3871, category: 'attractions', place_url: 'https://www.cntower.ca/intro.html', map_id: 1});
    })
    .then(function () {
      return knex('places').insert({id: 2, name: 'Rogers Center', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Toronto_-_ON_-_Rogers_Centre_%28Nacht%29.jpg/338px-Toronto_-_ON_-_Rogers_Centre_%28Nacht%29.jpg', description: 'Roof does not open on rainy days', place_lat: 43.6414, place_long: 79.3894, category: 'attractions', place_url: 'https://www.mlb.com/bluejays/ballpark', map_id: 1});
    })
    .then(function () {
      return knex('places').insert({id: 3, name: 'Ripleys Aquarium', image_url: 'https://sparkleshinylove.com/wp-content/uploads/2013/11/image-1024x768.jpg', description: 'Try not to get seasick', place_lat: 43.6424, place_long: 79.3860, category: 'attractions', place_url: 'https://www.ripleyaquariums.com/canada', map_id: 1});
    })
    .then(function () {
      return knex('places').insert({id: 4, name: 'Union Station', image_url: 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2018/03/09/union-station.jpg', description: 'Under construction', place_lat: 43.6453, place_long: 79.3806, category: 'service', place_url: 'https://torontounion.ca', map_id: 3});
    })
    .then(function () {
      return knex('places').insert({id: 5, name: 'Fat Bastard Burrito', image_url: 'http://365etobicoke.com/wp-content/uploads/2011/10/fatbastardsburrito.jpg', description: 'Tasty mexican', place_lat: 43.6444, place_long: 79.4012, category: 'food', place_url: 'https://www.fatbastardburrito.ca', map_id: 2});
    })
    .then(function () {
      return knex('places').insert({id: 6, name: 'Forno Cultura', image_url: 'https://otg.imgix.net/assets/grid/toronto/king-west/forno-cultura/Forno-Cultura-2.jpg?auto=format%2Ccompress&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=80&w=1200&s=1386a012860c4c7b58d1cc383565092e', description: 'Italian bakery and cafe', place_lat: 43.6441, place_long: 79.4007, category: 'food', place_url: 'https://www.fornocultura.com', map_id: 2});
    })
    .then(function () {
      return knex('places').insert({id: 7, name: 'St. Andrew Station', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/St_Andrew_TTC_entrance_at_SSW.JPG/280px-St_Andrew_TTC_entrance_at_SSW.JPG', description: 'Subway Station', place_lat: 43.6476, place_long: 79.3848, category: 'service', place_url: 'http://www.ttc.ca', map_id: 3});
    })
    .then(function () {
      return knex('places').insert({id: 8, name: 'Harbourfront Centre', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Harbourfront-Centre.jpg/330px-Harbourfront-Centre.jpg', description: 'Events by the lakeshore', place_lat: 43.6389, place_long: 79.3818, category: 'attractions', place_url: 'http://www.harbourfrontcentre.com', map_id: 1});
    })
    .then(function () {
      return knex('places').insert({id: 9, name: 'Thompson Diner', image_url: 'https://media.blogto.com/uploads/2017/03/24/20170324-2048-ThompsonDiner11.jpg?h=2500&cmd=resize&quality=70&w=1400', description: 'Snazzy diner', place_lat: 43.6429, place_long: 79.4019, category: 'food', place_url: 'https://www.thompsonhotels.com/hotels/canada/toronto/thompson-toronto/restaurants/thompson-diner', map_id: 2});
    })
    .then(function () {
      return knex('places').insert({id: 10, name: 'Service Ontario', image_url: 'http://www.iheartradio.ca/image/policy:1.2021295:1476308707/Service-Ontario-Outage.jpg?f=default&$p$f=f000ab6&w=800&$w=23745c3', description: 'It will take weeks for them to mail out to you', place_lat: 43.6501, place_long: 79.3768, category: 'service', place_url: 'https://www.ontario.ca/page/serviceontario', map_id: 3});
    })
    .then(function () {
      return knex('places').insert({id: 11, name: 'Eaton Centre', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/TorontoEatonCentre2.JPG/375px-TorontoEatonCentre2.JPG', description: 'Watch out for the crowds', place_lat: 43.6544, place_long: 79.3806, category: 'shopping', place_url: 'https://www.cfshops.com/toronto-eaton-centre.html?cid=lis_tec_en_hp_gb', map_id: 4});
    })
    .then(function () {
      return knex('places').insert({id: 12, name: 'First Canadian Place', image_url: 'https://media.myfirstcanadianplace.ca/first-canadian-place/building/FCP-Sunday-6705.jpg', description: 'Office with a mall underneath!', place_lat: 43.6490, place_long: 79.3818, category: 'shopping', place_url: 'https://myfirstcanadianplace.ca', map_id: 4});
    })
    .then(function () {
      return knex('places').insert({id: 13, name: 'St. Lawrence Market', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/St._Lawrence_Market_%28Unsplash%29.jpg/330px-St._Lawrence_Market_%28Unsplash%29.jpg', description: 'Filled most of the time', place_lat: 43.6486, place_long: 79.3715, category: 'shopping', place_url: 'http://www.stlawrencemarket.com', map_id: 4});
    })
    .then(function () {
      return knex('places').insert({id: 14, name: '', image_url: '', description: '', place_lat: , place_long: , category: '', place_url: '', map_id: });
    })
};


.then(function () {
      return knex('places').insert({id: , name: '', image_url: '', description: '', place_lat: , place_long: , category: '', place_url: '', map_id: });
    })
