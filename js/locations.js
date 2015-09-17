			var d = new Date();
			var time = d.getHours();
			var overlay = document.getElementById('overlay');

			//DayTime Theme and Locations
			if (time < 18 && time > 5)
			 {
				var maptile = "examples.map-20v6611k";
			    var map_title = "DAY VENUES&nbsp;&nbsp;&nbsp;<img src='images/expand.png'>"
				overlay.innerHTML = map_title;
				// GeoJSON input features
			    // The image and url properties of the features will be used in
			    // the tooltips
			    var features = [{
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.118152, 42.368475]},
			        "properties": {
			          'marker-color': '#BA0600',           
			          title: 'Weeks Bridge',
			          author: 'Lillian Zuo',
			          author_image: 'lillianzuo',
			          description: 'Located on the Charles, linking the river houses and Harvard Business School',
			          address: '953 Memorial Drive',
			          titlealert: 'Weeks Bridge',
			          descriptionalert: '<p><span class="firstcharacter">J</span>ohn W. Weeks Footbridge is a pedestrian-only bridge crossing the Charles River that appears in many postcards of Harvard. It’s an ideal spot to spend a warm sunny day, especially during the annual Head of the Charles regatta. And if you’re feeling a bit more spontaneous, jumping off Weeks Bridge into the Charles is the unohonorary fourth act every Harvard student should complete upon graduation.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.118227, 42.37141]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Rock Climbing in Lowell',
			          author: 'Lillian Zuo',
			          author_image: 'lillianzuo',
			          description: 'Lowell House A-entryway',
			          address: 'Holyoke Place, Cambridge',
			          titlealert: 'Rock Climbing in Lowell',
			          descriptionalert: '<p><span class="firstcharacter">T</span>he climbing wall in Lowell’s A entryway isn’t the house’s best-known feature; however, this hidden treasure attracts a large number of students during the school year. You can often find members of the mountaineering club practicing their moves in this room in Lowell basement. For beginners, intermediates, and experts, it’s a wonderful way to meet new people, get in shape, and push your limits!</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.116559, 42.373702]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Widener Library',
			          author: 'Shang Wang',
			          author_image: 'shangwang',
			          description: 'Located in Harvard Yard across from Memorial Church',
			          address: 'Harvard Yard',
			          titlealert: 'Widener Library',
			          descriptionalert: '<p><span class="firstcharacter">W</span>idener Library is one of the most recognizable landmarks of Harvard Yard, as its stone columns and expansive steps overlook the green lawns of Tercentenary Theatre opposite of Memorial Church. Built in 1915 in memory of Harry Elkins Widener, who perished on the Titanic, the library is home to 57 miles of bookshelves and 3 million volumes, and is the largest university library in the world.</p><br/><p>None of this is more evident than in the stacks of Widener. Endless rows of books covering an unimaginable spectrum of subjects line the multitude of below-ground chambers, sitting in an undisturbed silence until they are called into service. Yes, it’s a bit eerie and the desperation of students cramming for finals may linger in the air, but the Widener stacks are one of the less explored treasures of Harvard and deserve a quick stop by if time permits.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-72.18996, 42.532402]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Harvard Forest',
			          author: 'Shang Wang',
			          author_image: 'shangwang',
			          description: 'Outside of Boston if you have the time!',
			          address: '324 North Main Street Petersham',
			          titlealert: 'Harvard Forest',
			          descriptionalert: '<p><span class="firstcharacter">E</span>stablished in 1907 and covering 3,500 acres, the Harvard Forest serves as a laboratory and classroom for various courses on campus, but it also doubles as a speedy getaway for those who are a bit sick of the crowded streets of Harvard Square. Filled with scenic trails, the Harvard Forest provides a perfect destination should you prefer something more tranquil.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.118861, 42.374097]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Out of Town News',
			          author: 'James Ho',
			          author_image: 'jamesho',
			          description: 'On Mass Ave next to the Harvard Square T Station',
			          address: '1351 Massachusetts Avenue',
			          titlealert: 'Out of Town News',
			          descriptionalert: '<p><span class="firstcharacter">O</span>ut of Town News, founded in 1955, is an iconic newsstand located in the center of Harvard Square, Cambridge, Massachusetts. The newsstand stocks leading newspapers from around the nation and world, attracting my academics to its location.</p><br/><p>The newsstand was about to close in 2008 due to the decline in print readership and newspaper sales, but a new owner took over in January 2009, keeping the newsstand alive. It is a must see attraction for tourists in the Cambridge area.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.115942, 42.376366]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Science Center Observatory',
			          author: 'James Ho',
			          author_image: 'jamesho',
			          description: 'Next to Annenberg across the overpass near Oxford Street',
			          address: '1 Oxford Street',
			          titlealert: 'Science Center Observatory',
			          descriptionalert: '<p><span class="firstcharacter">T</span>he Science Center Observatory, also known as the Loomis-Michael Observatory, is located on the roof of the Science Center. It is the home of the Clay Telescope, accessible by taking the elevator to the 8th floor and following the signs up two more flights of stairs.</p><br/><p>The observatory is most often used by the Student Astronomer at Harvard-Radcliffe (STAHR), a student-run organization that aims to provide Harvard students and affiliates a change to learn more about astronomy and enjoy the night sky. They run open houses and provide telescope training classes for the Harvard community.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.118343, 42.371243]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Ring the Lowell Bells',
			          author: 'Shang Wang',
			          author_image: 'shangwang',
			          description: 'Across from Holyoke Street in the direction of the river',
			          address: '10 Holyoke Place Cambridge',
			          titlealert: 'Ring the Lowell Bells',
			          descriptionalert: '<p><span class="firstcharacter">T</span>here are 17 bells in Lowell House that were originally hung in the Danilovsky Monastery in Moscow in the 19th century. Weighing 25 tons in total, the bells are rung by an undergraduate student group known as the “Klappermeisters” every Sunday from 1:00-1:15 and on other special occasions.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.117667, 42.376441]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Winnie the Pooh House',
			          author: 'Rosa Huang',
			          author_image: 'rosahuang',
			          description: 'Near the side of the Science Center and Littauer building',
			          address: 'Science Center Plaza',
			          titlealert: 'Winnie the Pooh House',
			          descriptionalert: '<p><span class="firstcharacter">I</span>f you want a cute flashback to childhood, go visit the Winnie the Pooh House. The house used to be on a complete tree, but when renovations forced the tree to be cut, the house has now been set up on the stump of what was the original tree. The cute Pooh House includes a picket roof and a wooden door and is marked by the yellow and red “Pooh” sign.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.116874, 42.376494]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Food Trucks',
			          author: 'Rosa Huang',
			          author_image: 'rosahuang',
			          description: 'Science Center Plaza',
			          address: 'Science Center Plaza',
			          titlealert: 'Food Trucks',
			          descriptionalert: '<p><span class="firstcharacter">T</span>he Science Center Plaza is a popular parking spot for many food trucks, although one can also find them parked at Harvard Business School’s campus as well. The food trucks actually rotate on a set schedule, which can be found here: <a target ="_blank" href="http://www.commonspaces.harvard.edu/food_trucks/plaza_food_truck_schedule.shtml"> Food Truck Schedule</a>.</p><br/><p> The trucks include Grilled Cheese Nation, Lobsta Love, The Taco Truck, and the Whole Foods truck. You can find food for a wide range of appetites and meals, with comfort food like grilled cheese and tacos and what you wouldn’t expect to get from a truck, good lobster. The expansive array of trucks available at the plaza ensure that you will not have to repeat a meal for quite some time.</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.116383, 42.372106]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'The Harvard Crimson',
			          author: 'Jesse Shulman',
			          author_image: 'jesseshulman',
			          description: 'Check us out at 14 Plympton Street!',
			          titlealert: 'The Harvard Crimson',
			          descriptionalert: '<p><span class="firstcharacter">T</span>he Harvard Crimson, the nations oldest continuously published daily college newspaper, was founded in 1873 and incorporated in 1967. The newspaper traces its history to the first issue of "The Magenta," published on Jan. 24, 1873, and changed its name to "The Crimson" to reflect the new color of the college on May 21, 1875. The Crimson has a rich tradition of journalistic integrity and counts among its ranks of editorship some of Americas greatest journalists. The faces of Pulitzer Prize-winning Crimson editors line the walls of The Crimson.<br/><br/>The Crimson is proud of its legacy of alumni active in journalism, business, public service, and politics. Past editors include Franklin D. Roosevelt, Class of 1904, John F. Kennedy 40, David Halberstam 55, Michael Crichton 64, Don Graham 65, Linda Greenhouse 68, Steve Ballmer 77, Jim Cramer 77, Mark Whitaker 79, Susan Chira 80, Jeff Zucker 86. One hundred and forty years after its founding, having grown from a fortnightly newspaper to a daily, The Harvard Crimson continues to flourish with a strong body of undergraduate staff volunteers.</p>',
			          url:'#' }
			    }];
			 }
			// NightTime Theme and Locations 
			else
			 {
			 var maptile = "examples.map-y7l23tes";
			 var map_title = "NIGHT VENUES&nbsp;&nbsp;&nbsp;<img src='images/expand.png'>"
			 overlay.innerHTML = map_title;
				// GeoJSON input features
			    // The image and url properties of the features will be used in
			    // the tooltips
			    var features = [{
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.120209, 42.371996]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'Pinocchios Pizza',
			          author: 'Ari Albanese',
			          author_image: 'arialbanese',
			          description: 'Alley way behind Winthrop Square',
			          address: '74 Winthrop St',
			          titlealert: 'Pinocchios Pizza',
			          descriptionalert: '<p><span class="firstcharacter">T</span>Pinocchio&#39;s Pizza, colloquially referred to as "Noch&#39;s", will change your life. Conveniently located in between the River houses and the Yard, students have been flocking to this late-night eatery for generations. Whether you are in need of a study break or post-game snack, Noch&#39;s warm delicious pizza and service with a smile is a (literal) beacon in the night for all members of the Harvard community. If you make the voyage, you&#39;ll get much more than a slice or two of Sicilian thick crust pizza, you&#39;ll be entering a cozy and pizza-scented heaven.</p><br><p>Hours:<br/>Sunday: 1 p.m. - 12 a.m.<br/>Monday-Thursday: 11 a.m. - 1 a.m.<br/>Friday-Saturday: 11 a.m. - 2:30 a.m.<br>Phone Number: 617-876-4897</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.116383, 42.372106]},
			        "properties": { 
			          'marker-color': '#BA0600', 
			          //'marker-symbol': 'star',          
			          title: 'The Harvard Crimson',
			          author: 'Jesse Shulman',
			          author_image: 'jesseshulman',
			          description: 'Check us out at 14 Plympton Street!',
			          titlealert: 'The Harvard Crimson',
			          descriptionalert: '<p><span class="firstcharacter">T</span>he Harvard Crimson, the nations oldest continuously published daily college newspaper, was founded in 1873 and incorporated in 1967. The newspaper traces its history to the first issue of "The Magenta," published on Jan. 24, 1873, and changed its name to "The Crimson" to reflect the new color of the college on May 21, 1875. The Crimson has a rich tradition of journalistic integrity and counts among its ranks of editorship some of Americas greatest journalists. The faces of Pulitzer Prize-winning Crimson editors line the walls of The Crimson.<br/><br/>The Crimson is proud of its legacy of alumni active in journalism, business, public service, and politics. Past editors include Franklin D. Roosevelt, Class of 1904, John F. Kennedy 40, David Halberstam 55, Michael Crichton 64, Don Graham 65, Linda Greenhouse 68, Steve Ballmer 77, Jim Cramer 77, Mark Whitaker 79, Susan Chira 80, Jeff Zucker 86. One hundred and forty years after its founding, having grown from a fortnightly newspaper to a daily, The Harvard Crimson continues to flourish with a strong body of undergraduate staff volunteers.</p>',
			          description_location: '<p> 14th Plympton Street, Down from the Harvard Bookstore</p>',
			          url:'#' }
			    }, {
			        "geometry": { "type": "Point", "distance":'', "coordinates": [-71.115939, 42.372376]},
			        "properties": { 
			          'marker-color': '#BA0600',           
			          title: 'The Kong',
			          author: 'Anne Power',
			          author_image: 'annepower',
			          description: 'Down Mass Ave walking away from the T Station',
			          address: '1238 Massachusetts Ave',
			          titlealert: 'The Kong',
			          descriptionalert: '<p><span class="firstcharacter">T</span>he Hong Kong (known simply as “The Kong”) is a perennial Cambridge favorite, dating all the way back to 1954. This eatery is not only easily accessible from the Yard, it also serves a variety of cheap and delightfully greasy Chinese food classics as well as well as a few unexpected dishes (curly fries anyone?). If you’re jonesing for something to eat at 2 a.m., this is the place for you.</p><br><p>Hours:<br/>Sunday-Wednesday: 11:30 a.m. - 2:00 a.m.<br/>Thursday: 11:30 a.m. - 2 a.m.<br/>Friday-Saturday: 11:30 a.m. - 3:00 a.m.<br>Phone Number: 617-864-5311</p>',
			          url:'#' }
			    }];
			 }