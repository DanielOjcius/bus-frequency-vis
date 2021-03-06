'use strict';

var svg = require( '../../elements/svg' ).add();
var addLabel = require( '../../lib/add-label' );

function renderVisOne( stops ) {
  addLabel( svg, {
    p: 'Each row is a day of the week, each dot is a bus stopping at Benton Rd'
  });

  stops.allDays().forEach(function renderDay( tripsForDay, dayIndex ) {
    svg.append( 'g' ).selectAll( 'circle' )
      .data( tripsForDay )
      .enter()
      .append( 'circle' )
        .attr({
          cx: function( trip, tripIndex ) {
            return tripIndex * 8 + 3; // 4 px apart, 4 px wide
          },
          cy: function() {
            return 10 * dayIndex + 3;
          },
          r: function() {
            return 3;
          },
          fill: 'black'
        });
  });

  return svg;
}

module.exports = {
  render: renderVisOne
};
