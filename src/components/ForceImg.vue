<style>
.link {
  stroke: #ccc;
}

.node text {
  pointer-events: none;
  font: 10px sans-serif;
}
</style>
<template>
  <div id="forceLayout"></div>
</template>

<script>
function d3Exe() {
  var width = 960,
    height = 500;
  var nodes = [
    {
      index:0,
      name: "a",
      group: 1
    },
    {
      index:0,
      name: "a",
      group: 1
    },
  ];
  var links = [
    {
      source: 0,
      target: 1,
      value: 4
    }
  ];
  var svg = d3
    .select("#forceLayout")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var force = d3.layout
    .force()
    .gravity(0.2)
    .distance(100)
    .charge(-100)
    .size([width, height]);

  force
    .nodes(nodes)
    .links(links)
    .start();

  var link = svg
    .selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link");

  var node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(force.drag);

  node
    .append("text")
    .text("•")
    .attr("x", -6)
    .attr("y", 9)
    .attr("style", "font:30px sans-serif");
  node
    .append("text")
    .attr("dx", 8)
    .attr("dy", ".35em")
    .attr("style", "font:16px sans-serif")
    .text(function(d) {
      return d.name;
    });

  force.on("tick", function() {
    link
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });

    node.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  });
}

export default {
  mounted() {
    d3Exe();
  },
  methods: {
    d3Exe: function() {
      d3Exe();
    }
  }
};
</script>