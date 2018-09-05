# README for BETTER, STRONGER, FLEXIER!

An app that to jot down your favorite workout routines.  When you're doing your workout, don't force your brain to remember what you did three weeks ago during that amazing, burning workout.  Write it down here and then simply bring that workout up to follow along again.  Your brain can focus on breathing and getting that positive self-talk going!

better, stronger, flexier uses bundler for Ruby gem dependencies.

INSTALLATION:
Fork, and then Clone this repo to your local computer

In terminal
--Change directory into app folder.  "cd app"  
--Type "bundle install"
--Change directory into client folder.  "cd ../client"
--Type "npm install"
--Change directory back into main folder.  "cd ../"
--Migrate the database with "rake db:Migrate"
--Seed the database (to see example data) with "rake db:seed"

To start the program on your local computer, run "rake start" from your terminal, in the main folder.

To stop the server, type "^C" in your terminal.

Once you see how the program works, you can delete the example data with "rake db:drop" in Terminal.
If you choose to do this, please just create a new database by writing "rake db:migrate", and then start the app up again, and you can start entering your own workouts on a fresh slate!

Contributors' Guide:
Please contact me at jeffreywithers@gmail.com if you have pull requests you would like to contribute. In addition, this project is a welcoming space for collaboration, but you are Expected to Respect Others and Be Kind. Contributors must adhere to the Contributor Covenant.

License:
This project has been licensed under the MIT open source license.
(also see LICENSE file)

Copyright (c) 2018 Jeffrey Withers
