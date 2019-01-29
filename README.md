# myTripPlanBuilder

To begin, first make sure node and npm are installed and updated.

From the main directory you can run `npm install && npm run client-install`

Once the installation has finished you can run `npm run dev` to start both the client and server.

The server will be running on port 5000 and the client on port 3000.

On the client you are able to add trips and delete trips, as well as delete days belonging to trips. There are a few features that still need to be implemented on the front-end, but these missing features all work on the back-end.

For the back-end the following routes are available:

- Create trip: `/trip-plan/new`
- Retrieve trip: `/trip-plans/:tripId`
- Update trip: `/trip-plans/:tripId/edit`
- Delete trip: `/trip-plans/:tripId`
- List all trips: `/trip-plans`

- Create day: `/trip-plans/:tripId/days`
- Update day: `/trip-plans/:tripId/days/:dayId`

The back-end was created using Node and Express while the front-end is made using React. The database is PostgreSQL hosted on ElephantSQL.
