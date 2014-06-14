(function() {
	window.clearCanvas = function(canvas, ctx) {
		ctx.save();

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.restore();
	}

	console.log('Hello!')

	var canvas = document.getElementById('poi-world')

	var ctx = canvas.getContext('2d')

	window.world = new World(new vec2(0, -9.8), 1000/100, canvas, ctx, 1000/60)

	var linkLength = .1

	var link = new Ball(world.mouse.pos.sub(new vec2(0, linkLength)), .05, linkLength/2, 'green')
	var chain = new Chain(link, 20, .1)

	var ball = new Ball(world.mouse.pos.sub(new vec2(0, linkLength*21)), 1, linkLength, 'blue')
	
	var chainSpring = new Spring(1000, .1, linkLength)

	var poi = new Poi(ball, chain)

	chainSpring.attachBodies(world.mouse, link)

	world.addBody(poi)
	world.start()
})()