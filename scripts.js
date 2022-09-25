$BG-color: #eceff1; //light grey
$Black: #000; //black
$Light-grey: #90a4ae;
$Gradient-left: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
$Gradient-right: linear-gradient(to bottom, #a8edea 0%, #fed6e3 100%);
$calendar-bg-color: #5e35b1;

.title {
  text-align: center;
}

#footer a:link {
  color: Black;
}
#footer a:visited {
  color: $calendar-bg-color;
}
#footer a:hover {
  color: $calendar-bg-color;
}

body {
  background: $BG-color;
}

.box {
  position: relative;
  margin: auto;
  display: block;
  /*optional background or border*/
  //border: solid 4px red;

  margin-top: 2%;
  margin-bottom: 5%;
  width: 600px;
  height: 370px;
  background: none;
}

.calendar-back {
  position: absolute;
  top: 1.5%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: $calendar-bg-color;
}

.calender-left {
  position: absolute;
  top: 8%;
  left: 6%;
  width: 43.5%;
  height: 85%;
  background: $Gradient-left;
}
.calender-right {
  position: absolute;
  top: 8%;
  right: 6%;
  width: 43.5%;
  height: 85%;
  background: $Gradient-right;
}

.top-line {
  position: absolute;
  top: 15%;
  right: 6%;
  width: 88.5%;
  height: 0.3%;
  background: $calendar-bg-color;
}
.bottom-line {
  position: absolute;
  bottom: 10%;
  right: 6%;
  width: 88.5%;
  height: 0.3%;
  background: $calendar-bg-color;
}

.date p {
  position: absolute;
  margin: auto;
  left: 32%;
  top: 4%;
  font-family: "Dancing Script";
  font-size: 1.3em;
}

#currentDate {
  position: absolute;
  margin: auto;
  left: 22%;
  top: 29%;
  font-family: "Dancing Script";
  font-size: 7em;
}

.days {
  position: absolute;
  top: 25%;
  left: 28%;
}

.row-1 {
  position: absolute;
  top: 36%;
  left: 53%;
  color: $Light-grey;
}
.row-2 {
  position: absolute;
  top: 46%;
  left: 30%;
}

.grey {
  color: $Light-grey;
}

#today {
  color: $calendar-bg-color;
  border: solid 2px $calendar-bg-color;
  border-radius: 50%;
  width: 23%;
  height: 98%;
  z-index: 1;
  padding-right: 2px;
}

.row-3 {
  position: absolute;
  top: 56%;
  left: 30%;
}
.row-4 {
  position: absolute;
  top: 66%;
  left: 30%;
}
.row-5 {
  position: absolute;
  top: 76%;
  left: 30%;
}
