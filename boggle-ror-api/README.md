# README

This is the API project that basically hosts two endpoint.
1. POST /api/board: to generate a new board
2. GET /api/words: to check if the word is valid or not.

This project is responsible for generating a set of characters required for a board (i.e. 16 characters), and let the client make a request for chekcing the word is valid, is from dice and a valid word. A valid word is checked using a GET request to Oxford API.

*Limitations
Tried using MiniCache, for storing list of valid word in a Memory based cache, but not working.

*Tests
I have implemented tests for boggle controller and words controller. Since, Boggle Controller has a simple action of returning a list of characters for creating a board, I have written only one test whether the action responds with tiles object.
And, in case of WordsController, I have written 5 tests:

* Project Configurations:

* Ruby version
ruby 2.6.5p114 (2019-10-01 revision 67812) [x64-mingw32]
* System dependencies

* Configuration

* Database creation
no database used.
* Database initialization
should not require database initialization
* How to run the test suite
  rake spec
* Services (job queues, cache servers, search engines, etc.)
tried using Mem Cache from MiniCache (not working)
* Deployment instructions




* Scopes
