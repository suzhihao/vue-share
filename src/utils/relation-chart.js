/**
 * Created by He xiaomei on 2017/11/29.
 */

import * as d3 from 'd3'


var chartSetting = {
  margin: 0,
  radiusR: 300
}

var relationElementId = ''
var relationDataSource = {}
var relationCallbackEvent

// 路径计算器
var diagonal = d3.linkRadial()
  .angle(function(d) {
    return d.x / 180 * Math.PI
  })
  .radius(function(d) {
    return d.y
  })

  // 半径计算器
var scaledCircle = d3.scaleLinear().domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).range([10, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3])

// 展开、缩起
var toggle = function (d) {
  // 找到对应节点，更新items和_items节点
  if (d.data.items) {
    d.data._items = d.data.items
    d.data.items = null
  } else {
    d.data.items = d.data._items
    d.data._items = null
  }
}

var width
var height
var tree
var scale = 1
var svg
var rootG
var scaleFactor = 0.1
var lastX
var lastY
var zoom
var rotateFactor = 10 // 度数
var rotate = 0 // 度数


// 渲染整个页面
function render () {
  width = $(relationElementId).width()
  height = $(relationElementId).height()

  lastX = width / 2
  lastY = height / 2

  tree = d3.cluster()
    .size([360, d3.min([width, height]) / 2 - chartSetting.margin])
    .separation(function (a, b) {
      return (a.parent === b.parent ? 1 : 2) / a.depth
    })

  // 缩放和移动
  zoom = d3.zoom()
    .scaleExtent([0.5, 2])
    .on('zoom', function () {
      scale = d3.event.transform.k
      rootG.attr('transform', 'translate(' + lastX + ',' + lastY + ')scale(' + scale + ')')
      update()
    })

  // 拖拽
  var drag = d3.drag()
    .on('drag', function () {
      lastX = lastX + d3.event.dx
      lastY = lastY + d3.event.dy
      rootG.attr('transform', 'translate(' + lastX + ',' + lastY + ')scale(' + scale + ')')
    })

  d3.select(relationElementId).select('svg').remove()
  // 创建svg容器
  svg = d3.select(relationElementId).append('svg')
    .attr('id', 'relation-container')
    .attr('width', width)
    .attr('height', height)

    // 创建和svg容器一样大的rect(用于捕获移动和缩放事件)
  var rect = svg.append('rect')
    .attr('id', 'relation-gesture-handler')
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
    .attr('id', 'relation-tree-container')
    .attr('transform', 'translate(' + lastX + ',' + lastY + ')')

  update()
}

// 局部更新 - 用于用户发生界面交互触发更新
function update() {
  rootG.append('defs') // 定义arrowOut，为svg绘制箭头
    .append('marker')
    .attr('id', 'arrowOut')
    .attr('viewBox', '0 0 12 12')
    .attr('markerUnits', 'strokeWidth')
    .attr('refX', 18)
    .attr('refY', 5.7)
    .attr('markerWidth', 36)
    .attr('markerHeight', 36)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M10,2 L2,6 L10,10 L6,6 L10,2')
    .attr('fill', '#cecece')

  rootG.append('defs')
    .append('marker')
    .attr('id', 'arrowIn')
    .attr('viewBox', '0 0 12 12')
    .attr('markerUnits', 'strokeWidth')
    .attr('refX', 18)
    .attr('refY', 5.7)
    .attr('markerWidth', 36)
    .attr('markerHeight', 36)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2')
    .attr('fill', '#B46BC5')
  // var duration = d3.event && d3.event.altKey ? 2000 : 500;

  var root = d3.hierarchy(relationDataSource, function (d) {
    return d.items
  })

  // 计算nodes
  tree(root)
  var nodes = root.descendants()

  // patch for d.y
  nodes.forEach(function (d) {
    d.y = chartSetting.radiusR * d.depth
    if (d.depth !== 0) {
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
    .data(nodes, function (d) {
      return d.uid
    })

    // ========================新增节点=======================
    // 创建svg节点
  var nodeEnter = node.enter().append('g')
    .attr('class', function (d) {
      var className = 'new-network-node'
      if (d.data.id) {
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
  nodeEnter.append('circle')
    .attr('r', function (d) {
      return scaledCircle(d.depth) <= 0 ? 1 : scaledCircle(d.depth)
    })
    .style('stroke', function (d) {
      if (d.data.has_problem) {
        return '#f5573e'
      } else if (d.data.id) {
        return d.data.fill
      } else {
        return '#dcdcdc'
      }
    })
    .style('stroke-width', '2px')
    .style('fill', function (d) {
      if (d.data.has_problem) {
        return '#ffffff'
      } else if (d.data.id) {
        return d.data.fill
      } else {
        return '#dcdcdc'
      }
    })
    .on('click', function (d) {
      // 调用callback
      if (relationCallbackEvent) {
        relationCallbackEvent(d)
      }
    })

    // 这个是可以点击的加号
  nodeEnter.append('text')
    // .attr('dy', ".29em")
    .text(function (d) {
      if (d.data.has_child && d.depth !== 0) {
        if (d.data.items) {
          return '-'
        } else {
          return '+'
        }
      }
    })
    .attr('class', 'plus')
    .style('font-size', function (d) {
      return scaledCircle(d.depth + 1) * 2 + 'px'
    })
    .style('fill', function (d) {
      if (d.data.has_problem) {
        return '#f5573e'
      } else {
        return '#fff'
      }
    })
    .attr('visibility', function (d) {
      if (d.data.has_child && d.depth !== 0) {
        return ''
      } else {
        return 'hidden'
      }
    })
    .on('click', function (d) {
      if (d.data.has_child) {
        toggle(d)
        update()
      }
    })

    // 这个是文字（公司名称）
  nodeEnter.append('text')
    .attr('title', 'title')
    .attr('dy', function (d) {
      if (d.data.category === 0) {
        return '-1.5em'
      } else {
        return '.31em'
      }
    })
    .attr('dx', function (d) {
      if (d.data.category === 0) {
        return '-' + d.data.name.length * 0.7 + 'em'
      }
    })
    .attr('class', function (d) {
      var className = 'new-network-title'
      if (d.data.id) {
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
    .text(function (d) {
      return d.data.name
    }).on('click', function (d) {
      // 调用callback
      if (relationCallbackEvent) {
        relationCallbackEvent(d)
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

  d3.selectAll('.plus')
    .attr('dy', '.30em')
    .text(function (d) {
      if (d.data.has_child && d.depth !== 0) {
        if (d.data.items) {
          return '-'
        } else {
          return '+'
        }
      }
    })
    .style('font-size', function (d) {
      if (d.data.has_child && d.depth !== 0) {
        if (d.data.items) {
          return scaledCircle(d.depth) * 3.5 + 'px'
        } else {
          return scaledCircle(d.depth) * 2 + 'px'
        }
      }
      // return scaledCircle(d.depth) * 2;
    })
    .style('fill', function (d) {
      if (d.data.has_problem) {
        return '#f5573e'
      } else {
        return '#fff'
      }
    })
    .attr('transform', function (d) {
      // var offset = scaledCircle(d.depth) / 2.0;
      var offset = 5.5
      return d.x < 180 ? 'translate(-' + offset + ')' : 'translate(-' + offset + ')'
      // return d.x < 180 ? "" : "rotate(180)";
    })
    .attr('visibility', function (d) {
      if (d.data.has_child && d.depth !== 0) {
        return ''
      } else {
        return 'hidden'
      }
    })

    // ========================删除节点=======================
  node.exit().remove()

  // ========================新增路径=======================
  var links = root.links()
  var link = rootG.selectAll('.new-network-link')
    .data(links, function (d) {
      return d.target.uid
    })

  link.enter().append('path')
    .attr('class', function (d) {
      return 'new-network-link'
    })
    .style('stroke', function (d) {
      return d.target.data.fill
    })
    .attr('d', diagonal)
    .attr('marker-end', function (d) {
      if (d.target.data.percent) {
        if (d.target.data.category === 2) {
          // return 'url(' + location.href.replace('/charts/relation', '/info') + '#arrowIn)'
          return 'url(#arrowIn)'
        } else {
          return 'url(#arrowOut)'
        }
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
            if (d === '?') {
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

  // ========================修改路径=======================
  link.attr('d', diagonal)
  // ========================删除路径=======================
  link.exit().remove()

  // 确保所有节点都在路径之上
  $('#relation-tree-container .new-network-node').remove().appendTo('#relation-tree-container')
}

// 放大，缩小图
function scaleChart(scaleFactor) {
  var tempScale = scale + scaleFactor
  if (tempScale >= 0.5 && tempScale <= 2) {
    scale = tempScale

    zoom.scaleTo(svg, scale)
  }
}

// function getInitDataByLevel(data, level) {
//   var dataSource = {}
//   // 根节点
//   dataSource.category = data.category
//   dataSource.id = data.id
//   dataSource.name = data.name
//   dataSource.has_problem = data.has_problem
//   dataSource.fill = data.fill
//   dataSource.has_child = data.has_child
//   dataSource.level = data.level
//   dataSource.items = []
//
//   if (data.level < level && data.has_child) { // 获取子节点
//     var childData = getChildData(data.items, level)
//     for (var i = 0; i < childData.length; i++) {
//       dataSource.items.push(childData[i])
//     }
//   }
//
//   return dataSource
// }
//
// function getTextWidth(text, fontSize) {
//   var textWidth = 0
//   fontSize = fontSize || 14
//   if (text && text.length > 0) {
//     var numCount = 0
//     var symbolCount = 0
//     var smallLetterCount = 0
//     var bigLetterCount = 0
//     var numMatch = text.match(/[0-9]/g)
//     var symbolMatch = text.match(/[.:,\s]/g)
//     var smallLetterMatch = text.match(/[a-z]/g)
//     var bigLetterMatch = text.match(/[A-Z]/g)
//     if (numMatch) {
//       numCount = numMatch.length
//       textWidth += numCount * 8.2
//     }
//     if (symbolMatch) {
//       symbolCount = symbolMatch.length
//       textWidth += symbolCount * 2.8
//     }
//     if (smallLetterMatch) {
//       smallLetterCount = smallLetterMatch.length
//       textWidth += smallLetterCount * 7.54
//     }
//     if (bigLetterMatch) {
//       bigLetterCount = bigLetterMatch.length
//       textWidth += bigLetterCount * 9.35
//     }
//     textWidth += (text.length - numCount - symbolCount - smallLetterCount - bigLetterCount) * fontSize
//   }
//   if (scale < 1) {
//     return textWidth * 1 / scale
//   } else {
//     return textWidth * 1
//   }
// }
//
// function getChildData(data, level) {
//   var result = []
//
//   for (var i = 0; i < data.length; i++) {
//     var item = {
//       category: data[i].category,
//       id: data[i].id,
//       name: data[i].name,
//       has_problem: data[i].has_problem,
//       fill: data[i].fill,
//       has_child: data[i].has_child,
//       level: data[i].level,
//       items: []
//     }
//
//     if (data[i].level < level && data[i].has_child) {
//       item.items = getChildData(data[i].items, level)
//     }
//
//     result.push(item)
//   }
//
//   return result
// }
export default {
  init: function (id, data, callback) {
    relationElementId = '#' + id
    relationDataSource = data
    relationCallbackEvent = callback

    scale = 1
    rotate = 0
    render()
  },
  // 放大，缩小
  scaleChart: function (data) {
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
