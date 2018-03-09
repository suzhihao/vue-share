/**
 * Created by zhihao_su on 2017/11/27.
 */

import * as d3 from 'd3'
/* eslint-disable */

var chartSetting = {
  margin: 0,
  radiusR: 130
}

var elementId = ''
var dataSource = {}
var callbackEvent
// 路径计算器
var diagonal = d3.linkRadial()
  .angle(function(d) {
    return d.x / 180 * Math.PI
  })
  .radius(function(d) {
    return d.y
  })

// 半径计算器
var scaledCircle = d3.scaleLinear().domain([0, 2]).range([10, 4])

var width
var height
var tree
var scale = 1
var svg
var rootG
var scaleFactor = 0.1
var lastX
var lastY
var needSyncScale = false
var zoom
var drag
var rotateFactor = 10 // 度数
var rotate = 0 // 度数
var root

// 渲染整个页面
function render () {
  width = $(elementId).width()
  height = $(elementId).height()
  lastX = width / 2
  lastY = height / 2

  root = d3.hierarchy(dataSource, function (d) {
    return d.items
  })

  tree = d3.cluster()
    .size([360, d3.min([width, height]) / 2 - chartSetting.margin])
    .separation(function (a, b) {
      return (a.parent == b.parent ? 1 : 2) / a.depth
    })

  // 缩放和移动
  zoom = d3.zoom()
    .scaleExtent([0.5, 2])
    .on('zoom', function () {
      scale = d3.event.transform.k
      rootG.attr('transform', 'translate(' + lastX + ',' + lastY + ')scale(' + scale + ')')
      // update()
    })

  // 拖拽
  drag = d3.drag()
    .on('drag', function () {
      lastX = lastX + d3.event.dx
      lastY = lastY + d3.event.dy
      rootG.attr('transform', 'translate(' + lastX + ',' + lastY + ')scale(' + scale + ')')
    })

  d3.select(elementId).select('svg').remove()
  // 创建svg容器
  svg = d3.select(elementId).append('svg')
    .attr('id', 'network-container')
    .attr('width', width)
    .attr('height', height)

  // 创建和svg容器一样大的rect(用于捕获移动和缩放事件)
  var rect = svg.append('rect')
    .attr('id', 'network-gesture-handler')
    .attr('width', width)
    .attr('height', height)
    .attr('fill-opacity', 0)
    .attr('class', 'new-network-rect')
    .style('pointer-events', 'all')

  svg.call(zoom)
  rect.call(drag)

  // 创建树容器，并移动到画布中心点（初始态）
  rootG = svg
    .append('g')
    .attr('id', 'network-tree-container')
    .attr('transform', 'translate(' + lastX + ',' + lastY + ')')

  update()
}

// 局部更新 - 用于用户发生界面交互触发更新
function update () {
  // var duration = d3.event && d3.event.altKey ? 2000 : 500;

  // 计算nodes
  tree(root)
  var nodes = root.descendants()

  // patch for node position
  nodes.forEach(function (d) {
    d.y = chartSetting.radiusR * d.depth
    if (d.depth != 0) {
      d.x += rotate

      if (d.x >= 360) {
        d.x -= 360
      } else if (d.x < 0) {
        d.x += 360
      }
    }
  })

  // 获取所有nodes(其实在d3中并非真正的获取)，挂上data,用于计算enter, update, exit
  var node = rootG.selectAll('.new-network-node')
    .data(nodes)

  // ========================新增节点=======================
  // 创建svg节点
  var nodeEnter = node.enter().append('g')
    .attr('class', function (d) {
      var className = 'new-network-node'
      if (d.depth == 0 ||
        (d.depth == 1 && d.data.count > 0) ||
        (d.depth == 2 && d.data.id)) {
        className += ' new-network-click'
      }
      return className
    })
    .attr('transform', function (d) {
      if (d.parent) {
        return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')'
      } else {
        return ''
      }
    })

  // 这个是可以点击的圆圈
  var circle = nodeEnter.append('circle')
    .attr('r', function (d) {
      return scaledCircle(d.depth)
    })
    .attr('class', function (d) {
      if (d.depth == 1 && d.data.count > 0) {
        return 'new-network-node-twinkle'
      }
    })
    .style('stroke', function (d) {
      if (d.depth == 0 ||
        (d.depth == 1 && d.data.count > 0) ||
        (d.depth == 2 && d.data.id)) {
        return d.data.fill
      } else {
        return '#dcdcdc'
      }
    })
    .style('stroke-width', '2px')
    .style('fill', function (d) {
      if (d.has_problem) {
        return '#ffffff'
      } else if (d.depth == 0 ||
        (d.depth == 1 && d.data.count > 0) ||
        (d.depth == 2 && d.data.id)) {
        return d.data.fill
      } else {
        return '#dcdcdc'
      }
    })
    .on('click', function (d) {
      // 调用callback
      if (callbackEvent) {
        callbackEvent(d)
      }
    })

  // 这个是文字（公司名称）
  nodeEnter.append('text')
    .attr('title', 'title')
    .attr('dy', function (d) {
      if (d.data.category == 0) {
        return '-1.5em'
      } else {
        return '.31em'
      }
    })
    .attr('dx', function (d) {
      if (d.data.category == 0) {
        return '-' + d.data.name.length * 0.7 + 'em'
      }
    })
    .attr('class', function (d) {
      var className = 'new-network-title'
      if (d.depth == 0 ||
        (d.depth == 1 && d.data.count > 0) ||
        (d.depth == 2 && d.data.id)) {
        className += ' new-network-click'
      }
      return className
    })
    .attr('text-anchor', function (d) {
      if (d.parent) {
        return d.x < 180 ? 'start' : 'end'
      } else {
        return 'start'
      }
    })
    .attr('transform', function (d) {
      if (d.parent) {
        return d.x < 180 ? 'translate(' + scaledCircle(0) + ')' : 'rotate(180)translate(' + -(scaledCircle(0)) + ')'
      } else {
        return 'translate(' + scaledCircle(0) + ')'
      }
    })
    .style('font-size', function (d) {
      if (d.data.isSearch) {
        return '14px'
      }
    })
    .style('font-weight', function (d) {
      if (d.data.isSearch) {
        return 'bold'
      }
    })
    .text(function (d) {
      if (d.depth == 1) {
        return d.data.name + '（' + d.data.count + '）'
      } else {
        if (d.data.category == 2) {
          return d.data.title ? d.data.name + '（' + d.data.title + '）' : d.data.name
        } else {
          return d.data.name
        }
      }
    }).on('click', function (d) {
    // 调用callback
    if (callbackEvent) {
      callbackEvent(d)
    }
  })

  // ========================修改节点=======================
  var nodeUpdate = node.attr('transform', function (d) {
    if (d.parent) {
      return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')'
    } else {
      return ''
    }
  })
  nodeUpdate.select('[title=title]')
    .attr('text-anchor', function (d) {
      if (d.parent) {
        return d.x < 180 ? 'start' : 'end'
      } else {
        return 'start'
      }
    })
    .attr('transform', function (d) {
      if (d.parent) {
        return d.x < 180 ? 'translate(' + scaledCircle(0) + ')' : 'rotate(180)translate(' + -(scaledCircle(0)) + ')'
      } else {
        return 'translate(' + scaledCircle(0) + ')'
      }
    })

  d3.selectAll('[title=title]').each(function (d) {
    var text = d3.select(this)

    if (d.data.percent) {
      text.selectAll('tspan')
        .data([d.data.percent])
        .enter()
        .append('tspan')
        .style('fill', '#ff8a00')
        .text(function (d) {
          if (d) {
            if (d == '?') {
              return ''
            } else {
              return ' (' + d + ')'
            }
          } else {
            return ''
          }
        })
    }
  })

  // ========================删除节点=======================
  var nodeExit = node.exit().remove()

  // ========================新增路径=======================
  var links = root.links()
  var link = rootG.selectAll('.new-network-link').data(links)

  var linkEnter = link.enter().append('path')
    .attr('class', function (d) {
      return 'new-network-link'
    })
    .attr('fill', 'none')
    .style('stroke-width', '0.5px')
    .style('stroke', function (d) {
      return d.target.data.fill
    })
    .attr('d', diagonal)

  // ========================修改路径=======================
  var linkUpdate = link
    .attr('d', diagonal)
  // ========================删除路径=======================
  var linkExit = link.exit().remove()

  // 确保所有节点都在路径之上
  $('#network-tree-container .new-network-node').remove().appendTo('#network-tree-container')
}

// 放大，缩小图
function scaleChart (scaleFactor) {
  var tempScale = scale + scaleFactor
  if (tempScale >= 0.5 && tempScale <= 2) {
    scale = tempScale
    // // 设置缩放系数
    // zoom.scale(scale)
    // // 手动触发缩放
    // zoom.event(svg.select('rect'))
    zoom.scaleTo(svg, scale)
  }
}


export default {
  init: function (id, data, callback) {
    elementId = '#' + id
    dataSource = data
    callbackEvent = callback

    scale = 1
    rotate = 0

    render()
  },
  // 放大，缩小
  scaleChart: function (data) {
    needSyncScale = true
    scaleChart(data * scaleFactor)
  },
  resetChart: function () {
    scale = 1
    rotate = 0
    render()
  },
  rotateChart: function (direction) {
    rotate += rotateFactor * direction

    if (rotate >= 360) {
      rotate -= 360
    } else if (rotate <= -360) {
      rotate += 360
    }

    update()
  }
}
