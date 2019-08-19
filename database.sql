CREATE TABLE "gallery" (
  "id" serial primary key,
  "path" varchar(300),
  "description" varchar(500),
  "date" varchar(15),
  "likes" integer DEFAULT 0
);

INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/mpls.jpg', 'A riverside view of Minneapolis at dusk.', '04/2019', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/eclipse.jpg', 'Missed the eclipse, but still enjoyed the view.', '08/2017', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/forest.jpg', 'A hike through Forest Park, Portland, Oregon.', '02/2016', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/indie.jpg', 'Letting the pup run loose in the park, Savage, MN.', '06/2018', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/winter.jpg', 'A typical MN winter relapse in April.', '04/2019', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/tybee-people.jpg', 'On the streets of Tybee Island, Georgia.', '05/2018', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/river.jpg', 'A snapshot from the PNW.', '02/2016', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/zoo.jpg', 'A trip to the Minnesota Zoo.', '04/2018', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/palouse-falls.jpg', 'Palouse Falls, Washington.', '02/2016', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/minnetonka.jpg', 'Lake Minnetonka on the Fourth of July.', '07/2017', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/pnw-mtn.jpg', 'A snapshot of the Washington Cascades, PNW.', '02/2016', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/nightlife.jpg', 'Nighttime city-scape, Minneapolis.', '02/2015', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/flight.jpg', 'Desperately overdue for a vacation, flying out east.', '05/2018', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/canyon.jpg', 'Metlako Falls along Eagle Creek Trail in the Columbia River Gorge, Oregon.', '02/2016', 0);
INSERT INTO "gallery" ("path", "description", "date", "likes") 
VALUES ('images/downtown.jpg', 'Walking home from Prime through downtown.', '08/2019', 0);