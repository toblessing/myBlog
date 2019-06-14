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
  //设定宽度与高度
  var width = 960,
    height = 800;

    //定义节点数据
  var nodes = [
    {
      index:0,
      name: " ",
      group: 1
    },
    {
      index:1,
      name: "软件开发",
      group: 2
    },
    {
      index:2,
      name: "后端",
      group: 2
    },
    {
      index:3,
      name: "java",
      group: 1
    },
    {
      index:4,
      name: "J2EE",
      group: 1
    },
    {
      index:5,
      name: "Struts2",
      group: 1
    },
    {
      index:6,
      name: "Spring MVC",
      group: 1
    },
    {
      index:7,
      name: "Spring Boot",
      group: 1
    },
    {
      index:8,
      name: "Mybatis",
      group: 1
    },
    {
      index:9,
      name: "Hibernate",
      group: 1
    },
    {
      index:10,
      name: "Spring Cloud",
      group: 1
    },
    {
      index:11,
      name: "Android",
      group: 1
    },
    {
      index:12,
      name: "xUtil",
      group: 1
    },
    {
      index:13,
      name: "Gson",
      group: 1
    },
    {
      index:14,
      name: "Mysql",
      group: 1
    },
    {
      index:15,
      name: "前端",
      group: 1
    },
    {
      index:16,
      name: "HTML5",
      group: 1
    },
    {
      index:17,
      name: "JavaScript",
      group: 1
    },
    {
      index:18,
      name: "vue.js",
      group: 1
    },
    {
      index:19,
      name: "Vue CLI",
      group: 1
    },
    {
      index:20,
      name: "Vue Router",
      group: 1
    },
    {
      index:21,
      name: "iView组件",
      group: 1
    },
    {
      index:22,
      name: "Element 组件",
      group: 1
    },
    {
      index:23,
      name: "JQuery",
      group: 1
    },
    {
      index:24,
      name: "Axios",
      group: 1
    },
    {
      index:25,
      name: "D3",
      group: 1
    },
    {
      index:26,
      name: "Webpack",
      group: 1
    },
    {
      index:27,
      name: "JSON",
      group: 1
    },
    {
      index:28,
      name: "CSS",
      group: 1
    },
    {
      index:29,
      name: "软件设计",
      group: 1
    },
    {
      index:30,
      name: "软件工程",
      group: 1
    },
    {
      index:31,
      name: "UML",
      group: 1
    }
  ];
  var links = [
    {
      source: 0,
      target: 1,
      value: 400
    },{
      source: 0,
      target: 29,
      value: 400
    },
    {
      source: 1,
      target: 2,
      value: 40
    },
    {
      source: 2,
      target: 3,
      value: 40
    },
    {
      source: 3,
      target: 4,
      value: 40
    },
    {
      source: 4,
      target: 5,
      value: 40
    },
    {
      source: 4,
      target: 6,
      value: 40
    },
    {
      source: 4,
      target: 7,
      value: 40
    },
    {
      source: 4,
      target: 8,
      value: 40
    },
    {
      source: 4,
      target: 9,
      value: 40
    },
    {
      source: 4,
      target: 10,
      value: 40
    },
    {
      source: 3,
      target: 11,
      value: 40
    },
    {
      source: 11,
      target: 12,
      value: 40
    },
    {
      source: 11,
      target: 13,
      value: 40
    },
    {
      source: 2,
      target: 14,
      value: 40
    },
    {
      source: 1,
      target: 15,
      value: 40
    },
    {
      source: 15,
      target: 16,
      value: 40
    },
    {
      source: 15,
      target: 17,
      value: 40
    },
    {
      source: 17,
      target: 18,
      value: 40
    },
    {
      source: 18,
      target: 19,
      value: 40
    },
    {
      source: 18,
      target: 20,
      value: 40
    },
    {
      source: 18,
      target: 21,
      value: 40
    },
    {
      source: 18,
      target: 22,
      value: 40
    },
    {
      source: 17,
      target: 23,
      value: 40
    },
    {
      source: 17,
      target: 24,
      value: 40
    },
    {
      source: 17,
      target: 25,
      value: 40
    },
    {
      source: 17,
      target: 26,
      value: 40
    },
    {
      source: 17,
      target: 27,
      value: 40
    },
    {
      source: 15,
      target: 28,
      value: 40
    },
    {
      source: 29,
      target: 30,
      value: 40
    },
    {
      source: 29,
      target: 31,
      value: 40
    }
  ];
  var svg = d3
    .select("#forceLayout")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

//定义布局参数
  var force = d3.layout
    .force()
    .gravity(0.1)
    .distance(100)
    .charge(-500)
    .size([width, height]);

//加载节点数据
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