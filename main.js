canvas = document.getElementById("mycanvas2")
ctx = canvas.getContext("2d")
width = 4

ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = width
ctx.arc(250,250,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "orange"
ctx.lineWidth = width
ctx.arc(315,300,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = width
ctx.arc(380,250,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = width
ctx.arc(445,300,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = width
ctx.arc(510,250,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = width
ctx.rect(165,170,430,200)
ctx.stroke()
